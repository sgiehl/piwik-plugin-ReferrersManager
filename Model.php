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
use Piwik\Plugins\Referrers\AIAssistant;
use Piwik\Plugins\Referrers\SearchEngine;
use Piwik\Plugins\Referrers\Social;

/**
 *
 */
class Model
{
    public const OPTION_KEY_DISABLE_DEFAULT_SOCIALS   = 'disable_default_socials';
    public const OPTION_KEY_USERDEFINED_SOCIALS       = 'userdefined_socials';
    public const OPTION_KEY_USERDEFINED_SEARCHENGINES = 'userdefined_searchengines';
    public const OPTION_KEY_DISABLE_DEFAULT_AI_ASSISTANTS = 'disable_default_ai_assistants';
    public const OPTION_KEY_USERDEFINED_AI_ASSISTANTS = 'userdefined_ai_assistants';

    public static function getInstance()
    {
        return StaticContainer::get('Piwik\Plugins\ReferrersManager\Model');
    }

    /**
     * Returns if Matomo's built-in social list is used or not
     *
     * @return bool
     */
    public function areDefaultSocialsDisabled(): bool
    {
        return !!Option::get(self::OPTION_KEY_DISABLE_DEFAULT_SOCIALS);
    }

    /**
     * Sets if Matomo's built-in social list should be used or not
     *
     * @param bool $disabled
     */
    public function setDefaultSocialsDisabled(bool $disabled = true): void
    {
        Option::set(self::OPTION_KEY_DISABLE_DEFAULT_SOCIALS, (string)(int)$disabled);
        $this->clearSocialCache();
    }

    /**
     * Clears cache for social data
     */
    public function clearSocialCache(): void
    {
        Option::clearCachedOption(self::OPTION_KEY_DISABLE_DEFAULT_SOCIALS);
        Option::delete(Social::OPTION_STORAGE_NAME);
        $cacheId = 'Social-' . Social::OPTION_STORAGE_NAME;
        $cache   = Cache::getEagerCache();
        $cache->delete($cacheId);
        \Piwik\Tracker\Cache::deleteTrackerCache();
    }

    /**
     * Returns if Matomo's built-in AI assistants list is used or not
     *
     * @return bool
     */
    public function areDefaultAIAssistantsDisabled(): bool
    {
        return !!Option::get(self::OPTION_KEY_DISABLE_DEFAULT_AI_ASSISTANTS);
    }

    /**
     * Sets if Matomo's built-in AI assistants list should be used or not
     *
     * @param bool $disabled
     */
    public function setDefaultAIAssistantsDisabled(bool $disabled = true): void
    {
        Option::set(self::OPTION_KEY_DISABLE_DEFAULT_AI_ASSISTANTS, (string)(int)$disabled);
        $this->clearAIAssistantCache();
    }

    /**
     * Clears cache for AI assistant data
     */
    public function clearAIAssistantCache(): void
    {
        Option::clearCachedOption(self::OPTION_KEY_DISABLE_DEFAULT_AI_ASSISTANTS);
        Option::delete(AIAssistant::OPTION_STORAGE_NAME);
        $cacheId = 'AIAssistant-' . AIAssistant::OPTION_STORAGE_NAME;
        $cache   = Cache::getEagerCache();
        $cache->delete($cacheId);
        \Piwik\Tracker\Cache::deleteTrackerCache();
    }

    /**
     * Returns the list of userdefined AI assistants
     *
     * @return array
     */
    public function getUserDefinedAIAssistants(): array
    {
        $assistants = json_decode(Option::get(self::OPTION_KEY_USERDEFINED_AI_ASSISTANTS), true);

        if (!empty($assistants)) {
            return (array)$assistants;
        }

        return [];
    }

    /**
     * Sets user defined AI assistants
     *
     * @param array $assistantList
     */
    public function setUserDefinedAIAssistants(array $assistantList = []): void
    {
        Option::set(self::OPTION_KEY_USERDEFINED_AI_ASSISTANTS, json_encode($assistantList));
        $this->clearAIAssistantCache();
    }

    /**
     * Returns the list of userdefined socials
     *
     * @return array
     */
    public function getUserDefinedSocials(): array
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
    public function setUserDefinedSocials(array $socialList = []): void
    {
        Option::set(self::OPTION_KEY_USERDEFINED_SOCIALS, json_encode($socialList));
        $this->clearSocialCache();
    }

    /**
     * Returns the list of userdefined search engines
     *
     * @return array
     */
    public function getUserDefinedSearchEngines(): array
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
                        'charsets' => @$definition[3],
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
    public function setUserDefinedSearchEngines(array $engineList = []): void
    {
        Option::set(self::OPTION_KEY_USERDEFINED_SEARCHENGINES, json_encode($engineList));
        $this->clearSearchEngineCache();
    }

    /**
     * Clears cache for social data
     */
    public function clearSearchEngineCache(): void
    {
        Option::clearCachedOption(self::OPTION_KEY_USERDEFINED_SEARCHENGINES);
        Option::delete(SearchEngine::OPTION_STORAGE_NAME);
        $cache   = Cache::getEagerCache();
        $cacheId = 'SearchEngine-' . SearchEngine::OPTION_STORAGE_NAME;
        $cache->delete($cacheId);
        \Piwik\Tracker\Cache::deleteTrackerCache();
    }

    /**
     * Wrapper method to Matomo's internal method to return search engine data
     * @return array
     */
    public function getSearchEngines(): array
    {
        return \Piwik\Plugins\Referrers\SearchEngine::getInstance()->getDefinitions();
    }

    /**
     * Returns all search engine information known to Matomo
     *
     * @return array
     */
    public function getSearchEngineDefinitions(): array
    {
        $mergedSearchInfos = [];

        $searchEngineInfos = $this->getSearchEngines();

        foreach ($searchEngineInfos as $url => $infos) {
            $parameters = !is_array($infos['params']) ? $infos['params'] : implode(', ', $infos['params']);
            if (empty($mergedSearchInfos[$infos['name']])) {
                $mergedSearchInfos[$infos['name']] = [];
            }
            $mergedSearchInfos[$infos['name']][] = [
                'url'        => $url,
                'parameters' => $parameters,
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
    public function getSearchEngineLogos(): array
    {
        $searchEngineLogos = [];

        $searchEngineNames = \Piwik\Plugins\Referrers\SearchEngine::getInstance()->getNames();

        foreach ($searchEngineNames as $name => $url) {
            $searchEngineLogos[$name] = \Piwik\Plugins\Referrers\SearchEngine::getInstance()->getLogoFromUrl($url);
        }

        return $searchEngineLogos;
    }

    /**
     * Wrapper method to Matomo' internal method to return search engine data
     * @return array
     */
    public function getSocials(): array
    {
        return \Piwik\Plugins\Referrers\Social::getInstance()->getDefinitions();
    }

    /**
     * Wrapper method to Matomo' internal method to return AI assistant data
     * @return array
     */
    public function getAIAssistants(): array
    {
        return AIAssistant::getInstance()->getDefinitions();
    }

    /**
     * Returns all social informations known to Matomo
     *
     * @return array
     */
    public function getSocialsDefinitions(): array
    {
        $mergedSocials = [];

        $urls = $this->getSocials();

        foreach ($urls as $url => $name) {
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
    public function getSocialsLogos(): array
    {
        $socialsLogos = [];

        $urls = \Piwik\Plugins\Referrers\Social::getInstance()->getDefinitions();

        foreach ($urls as $url => $name) {
            $socialsLogos[urldecode($name)] = \Piwik\Plugins\Referrers\Social::getInstance()->getLogoFromUrl($url);
        }
        return $socialsLogos;
    }

    /**
     * Returns all AI assistant informations known to Matomo
     *
     * @return array
     */
    public function getAIAssistantDefinitions(): array
    {
        $mergedAssistants = [];

        $urls = $this->getAIAssistants();

        foreach ($urls as $url => $name) {
            $mergedAssistants[urldecode($name)][] = $url;
        }

        ksort($mergedAssistants, SORT_LOCALE_STRING);

        return $mergedAssistants;
    }

    /**
     * Returns an array containing all logos for AI assistants
     *
     * @return array (name => logo-src)
     */
    public function getAIAssistantLogos(): array
    {
        $assistantLogos = [];

        $urls = AIAssistant::getInstance()->getDefinitions();

        foreach ($urls as $url => $name) {
            $assistantLogos[urldecode($name)] = AIAssistant::getInstance()->getLogoFromUrl($url);
        }

        return $assistantLogos;
    }

    public function detectSearchEngine($url)
    {
        $detectedEngine = SearchEngine::getInstance()->extractInformationFromUrl($url);

        if (!empty($detectedEngine['name'])) {
            $detectedEngine['image'] = SearchEngine::getInstance()->getLogoFromUrl(SearchEngine::getInstance()->getUrlFromName($detectedEngine['name']));

            if ($detectedEngine['keywords'] === false) {
                $detectedEngine['keywords'] = '<i>' . Piwik::translate(
                    'General_NotDefined',
                    Piwik::translate('General_ColumnKeyword')
                ) . '</i>';
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
                'image' => $image,
            ];
        } else {
            $detectedSocial = false;
        }

        return $detectedSocial;
    }

    public function detectAIAssistant($url)
    {
        $detectedAssistant = AIAssistant::getInstance()->getAIAssistantFromDomain($url);

        if (!empty($detectedAssistant) && $detectedAssistant != Piwik::translate('General_Unknown')) {
            $image = AIAssistant::getInstance()->getLogoFromUrl($url);

            $detectedAssistant = [
                'name'  => $detectedAssistant,
                'image' => $image,
            ];
        } else {
            $detectedAssistant = false;
        }

        return $detectedAssistant;
    }
}
