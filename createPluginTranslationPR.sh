
if [[ -z "$GITHUB_TOKEN" ]]; then
  echo "Undefined GITHUB_TOKEN environment variable."
  exit 1
fi

cd $GITHUB_WORKSPACE/$PluginName
git config --global user.email "$GITHUB_ACTOR@users.noreply.github.com"
git config --global user.name "$GITHUB_ACTOR"
git push origin --delete translationupdates 2> /dev/null || true
git branch -D translationupdates 2> /dev/null || true
git branch translationupdates
git checkout -f translationupdates

cd $GITHUB_WORKSPACE/matomo
git submodule update --init --force 2> /dev/null
composer install --prefer-dist 2> /dev/null

ln -s $GITHUB_WORKSPACE/$PluginName $GITHUB_WORKSPACE/matomo/plugins/$PluginName
cp $GITHUB_WORKSPACE/matomo/tests/travis/config.ini.travis.php $GITHUB_WORKSPACE/matomo/config/config.ini.php
cd $GITHUB_WORKSPACE/matomo
./console development:enable

# Sync translations
cd $GITHUB_WORKSPACE/matomo
./console translations:update --username $TransifexUsername --password $TransifexPassword --force --plugin=$PluginName --no-interaction

# Check for changes
cd $GITHUB_WORKSPACE/$PluginName
git add lang/
git add "*.json"
IFS=$'\n'
changes=( $(git diff --numstat HEAD | grep -E '([0-9]+)\s+([0-9]+)\s+[a-zA-Z\/]*lang\/([a-z]{2,3}(-[a-z]{2,3})?)\.json' ) )
unset IFS

# abort here if no change available
if [[ ${#changes[@]} -eq 0 ]]
then
  echo "No changes in translation files available"
  exit 0
fi

declare -i totaladditions=0
declare -A additionsByLang
for (( i=0; i < ${#changes[@]}; i++ )); do
  line=( ${changes[$i]} )
  additions=${line[0]}

  if [[ ${line[0]} = "0" ]]
  then
    continue;
  fi

  file=${line[2]}
  lang=$( echo ${line[2]} | grep -oE '([a-z]{2,3}(-[a-z]{2,3})?)\.json' | cut -d'.' -f 1 )
  totaladditions=$(( totaladditions + additions ))
  additionsByLang[$lang]=$(( additionsByLang[$lang] + additions ))
done
title="Updated $totaladditions strings in ${#additionsByLang[@]} languages (${!additionsByLang[@]})"
languageInfo=( $( $GITHUB_WORKSPACE/matomo/console translations:languageinfo | tr " " "_" ) )
lines=$( < $GITHUB_WORKSPACE/$PluginName/lang/en.json wc -l )
for i in ${!additionsByLang[@]}; do
  for j in ${languageInfo[@]}; do
    if [[ "$j" == "$i|"* ]];
    then
      IFS=$'\n'
      info=( $( echo "$j" | tr "|" "\n" ) )
      unset IFS
      break
    fi
  done

  linesInLang=$( < $GITHUB_WORKSPACE/$PluginName/lang/$i.json wc -l )
  percentage=$(( 100 * (linesInLang - 4) / (lines - 4) ))
  name=$( echo ${info[1]} | tr "_" " " )
  message="$message- Updated $name (${additionsByLang[$i]} changes / $percentage% translated)\n"
done
message="$message\n\nHelp us translate Matomo in your language!\nSignup at https://www.transifex.com/matomo/matomo/\nIf you have any questions, get in touch with us at translations@matomo.org"
echo $title
echo $message

# Push changes
cd $GITHUB_WORKSPACE/$PluginName
git commit -m "language update"
git push --set-upstream origin translationupdates

# Create PR
curl \
  --request POST \
  --header 'Authorization: token $GITHUB_TOKEN' \
  --header 'Accept: application/vnd.github.v3+json' \
  --data '{
    "title":"[automatic translation update] $title",
    "body":"$message",
    "head":"translationupdates",
    "base":"master"
    }' \
  --url https://api.github.com/repos/${GITHUB_REPOSITORY}/pulls
