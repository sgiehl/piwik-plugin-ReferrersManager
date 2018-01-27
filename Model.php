<?php
/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */
namespace Piwik\Plugins\ReferrersManager;

use Piwik\Cache;
use Piwik\Container\StaticContainer;
use Piwik\Option;
use Piwik\Piwik;
use Piwik\Plugins\Referrers\SearchEngine;
use Piwik\Plugins\Referrers\Social;
use Piwik\Singleton;

/**
 *
 */
class Model
{
    const OPTION_KEY_DISABLE_DEFAULT_SOCIALS   = 'disable_default_socials';
    const OPTION_KEY_USERDEFINED_SOCIALS       = 'userdefined_socials';
    const OPTION_KEY_USERDEFINED_SEARCHENGINES = 'userdefined_searchengines';

    public static function getInstance()
    {
        return StaticContainer::get('Piwik\Plugins\ReferrersManager\Model');
    }

    /**
     * Returns if Piwik's built-in social list is used or not
     *
     * @return false|string
     */
    public function areDefaultSocialsDisabled()
    {
        return Option::get(self::OPTION_KEY_DISABLE_DEFAULT_SOCIALS);
    }

    /**
     * Sets if Piwik's built-in social list should be used or not
     *
     * @param bool $disabled
     */
    public function setDefaultSocialsDisabled($disabled = true)
    {
        Option::set(self::OPTION_KEY_DISABLE_DEFAULT_SOCIALS, $disabled);
        $this->clearSocialCache();
    }

    /**
     * Clears cache for social data
     */
    public function clearSocialCache()
    {
        Option::clearCachedOption(self::OPTION_KEY_DISABLE_DEFAULT_SOCIALS);
        Option::delete(Social::OPTION_STORAGE_NAME);
        $cacheId = 'Social-' . Social::OPTION_STORAGE_NAME;
        $cache   = Cache::getEagerCache();
        $cache->delete($cacheId);
        \Piwik\Tracker\Cache::deleteTrackerCache();
    }

    /**
     * Returns the list of userdefined socials
     *
     * @return array
     */
    public function getUserDefinedSocials()
    {
        $socials = json_decode(Option::get(self::OPTION_KEY_USERDEFINED_SOCIALS), true);

        if (!empty($socials)) {

            return (array)$socials;
        }

        return [];
    }

    /**
     * Sets user defined socials
     *
     * @param array $socialList
     */
    public function setUserDefinedSocials($socialList = [])
    {
        Option::set(self::OPTION_KEY_USERDEFINED_SOCIALS, json_encode($socialList));
        $this->clearSocialCache();
    }

    /**
     * Returns the list of userdefined search engines
     *
     * @return array
     */
    public function getUserDefinedSearchEngines()
    {
        $engines = json_decode(Option::get(self::OPTION_KEY_USERDEFINED_SEARCHENGINES), true);

        if (!empty($engines)) {

            // convert engines saved in legacy format
            foreach ($engines as $url => $definition) {
                if (!array_key_exists('name', $definition) && isset($definition[0]) && isset($definition[1])) {
                    $engines[$url] = array(
                        'name' => $definition[0],
                        'params' => $definition[1],
                        'backlink' => @$definition[2],
                        'charsets' => @$definition[3]
                    );
                }
            }

            return $engines;
        }

        return [];
    }

    /**
     * Sets user defined search engines
     *
     * @param array $engineList
     */
    public function setUserDefinedSearchEngines($engineList = [])
    {
        Option::set(self::OPTION_KEY_USERDEFINED_SEARCHENGINES, json_encode($engineList));
        $this->clearSearchEngineCache();
    }

    /**
     * Clears cache for social data
     */
    public function clearSearchEngineCache()
    {
        Option::clearCachedOption(self::OPTION_KEY_USERDEFINED_SEARCHENGINES);
        Option::delete(SearchEngine::OPTION_STORAGE_NAME);
        $cache   = Cache::getEagerCache();
        $cacheId = 'SearchEngine-' . SearchEngine::OPTION_STORAGE_NAME;
        $cache->delete($cacheId);
        \Piwik\Tracker\Cache::deleteTrackerCache();
    }

    /**
     * Wrapper method to Piwiks internal method to return search engine data
     * @return array
     */
    public function getSearchEngines()
    {
        return \Piwik\Plugins\Referrers\SearchEngine::getInstance()->getDefinitions();
    }

    /**
     * Returns all search engine informations known to piwik
     *
     * @return array
     */
    public function getSearchEngineDefinitions()
    {
        $mergedSearchInfos = [];

        $searchEngineInfos = $this->getSearchEngines();

        foreach ($searchEngineInfos AS $url => $infos) {

            if (empty($mergedSearchInfos[$infos['name']])) {
                $mergedSearchInfos[$infos['name']] = [];
            }
            $mergedSearchInfos[$infos['name']][] = [
                'url'        => $url,
                'parameters' => implode(', ', $infos['params']),
                'backlink'   => !empty($infos['backlink']) ? $infos['backlink'] : '',
                'charset'    => !empty($infos['charsets']) ? implode(', ', $infos['charsets']) : '',
            ];
        }

        ksort($mergedSearchInfos, SORT_LOCALE_STRING);

        return $mergedSearchInfos;
    }

    /**
     * Returns an array containing all logos for search engines
     *
     * @return array (name => logo-src)
     */
    public function getSearchEngineLogos()
    {
        $searchEngineLogos = [];

        $searchEngineNames = \Piwik\Plugins\Referrers\SearchEngine::getInstance()->getNames();

        foreach ($searchEngineNames AS $name => $url) {
            $searchEngineLogos[$name] = \Piwik\Plugins\Referrers\SearchEngine::getInstance()->getLogoFromUrl($url);
        }

        return $searchEngineLogos;
    }

    /**
     * Wrapper method to Piwiks internal method to return search engine data
     * @return array
     */
    public function getSocials()
    {
        return \Piwik\Plugins\Referrers\Social::getInstance()->getDefinitions();
    }

    /**
     * Returns all social informations known to piwik
     *
     * @return array
     */
    public function getSocialsDefinitions()
    {
        $mergedSocials = [];

        $urls = $this->getSocials();

        foreach ($urls AS $url => $name) {
            $mergedSocials[urldecode($name)][] = $url;
        }

        ksort($mergedSocials, SORT_LOCALE_STRING);

        return $mergedSocials;
    }

    /**
     * Returns an array containing all logos for socials
     *
     * @return array (name => logo-src)
     */
    public function getSocialsLogos()
    {
        $socialsLogos = [];

        $urls = \Piwik\Plugins\Referrers\Social::getInstance()->getDefinitions();

        foreach ($urls AS $url => $name) {

            $socialsLogos[urldecode($name)] = \Piwik\Plugins\Referrers\Social::getInstance()->getLogoFromUrl($url);
        }
        return $socialsLogos;
    }

    public function detectSearchEngine($url)
    {
        $detectedEngine = SearchEngine::getInstance()->extractInformationFromUrl($url);

        if (!empty($detectedEngine['name'])) {
            $detectedEngine['image'] = SearchEngine::getInstance()->getLogoFromUrl(SearchEngine::getInstance()->getUrlFromName($detectedEngine['name']));

            if ($detectedEngine['keywords'] === false) {
                $detectedEngine['keywords'] = '<i>' . Piwik::translate('General_NotDefined',
                        Piwik::translate('General_ColumnKeyword')) . '</i>';
            }
        }

        return $detectedEngine;
    }

    public function detectSocial($url)
    {
        $detectedSocial = Social::getInstance()->getSocialNetworkFromDomain($url);

        if (!empty($detectedSocial) && $detectedSocial != Piwik::translate('General_Unknown')) {

            $image = Social::getInstance()->getLogoFromUrl($url);

            $detectedSocial = [
                'name'  => $detectedSocial,
                'image' => $image
            ];
        } else {

            $detectedSocial = false;
        }

        return $detectedSocial;
    }

}