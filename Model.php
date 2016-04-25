<?php
/**
 * Piwik - Open source web analytics
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */
namespace Piwik\Plugins\ReferrersManager;

use Piwik\Cache;
use Piwik\Common;
use Piwik\Option;
use Piwik\Piwik;
use Piwik\Plugins\Referrers\SearchEngine;
use Piwik\Plugins\Referrers\Social;
use Piwik\Singleton;
use Piwik\UrlHelper;


/**
 *
 */
class Model extends Singleton
{

    const OPTION_KEY_DISABLE_DEFAULT_SOCIALS   = 'disable_default_socials';
    const OPTION_KEY_USERDEFINED_SOCIALS       = 'userdefined_socials';
    const OPTION_KEY_USERDEFINED_SEARCHENGINES = 'userdefined_searchengines';

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
        if (self::useNewStructure()) {
            $cacheId = 'Social-' . Social::OPTION_STORAGE_NAME;
            $cache   = Cache::getEagerCache();
            $cache->delete($cacheId);
            \Piwik\Tracker\Cache::deleteTrackerCache();
        }
    }

    /**
     * Returns the list of userdefined socials
     *
     * @return array
     */
    public function getUserDefinedSocials()
    {
        $socials = json_decode(Option::get(self::OPTION_KEY_USERDEFINED_SOCIALS));

        if (!empty($socials)) {

            return (array)$socials;
        }

        return array();
    }

    /**
     * Sets user defined socials
     *
     * @param array $socialList
     */
    public function setUserDefinedSocials($socialList = array())
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
        $engines = json_decode(Option::get(self::OPTION_KEY_USERDEFINED_SEARCHENGINES));

        if (!empty($engines)) {
            return (array)$engines;
        }

        return array();
    }

    /**
     * Sets user defined search engines
     *
     * @param array $engineList
     */
    public function setUserDefinedSearchEngines($engineList = array())
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
        if (self::useNewStructure()) {
            $cache   = Cache::getEagerCache();
            $cacheId = 'SearchEngine-' . SearchEngine::OPTION_STORAGE_NAME;
            $cache->delete($cacheId);
            \Piwik\Tracker\Cache::deleteTrackerCache();
        }
    }

    /**
     * Returns whether to use methods available in Piwik > 2.15
     * @return bool
     */
    public static function useNewStructure()
    {
        return class_exists('\Piwik\Plugins\Referrers\SearchEngine');
    }

    /**
     * Wrapper method to Piwiks internal method to return search engine data
     * @return array
     */
    public function getSearchEngines()
    {
        if (self::useNewStructure()) {
            return \Piwik\Plugins\Referrers\SearchEngine::getInstance()->getDefinitions();
        } else {
            return Common::getSearchEngineUrls();
        }
    }

    /**
     * Returns all search engine informations known to piwik
     *
     * @return array
     */
    public function getSearchEngineInfos()
    {
        $mergedSearchInfos = array();

        $searchEngineInfos = $this->getSearchEngines();

        foreach ($searchEngineInfos AS $url => $infos) {

            if (self::useNewStructure()) {
                if (empty($mergedSearchInfos[$infos['name']])) {
                    $mergedSearchInfos[$infos['name']] = array();
                }
                $mergedSearchInfos[$infos['name']][] = array(
                    'url'        => $url,
                    'parameters' => implode(', ', $infos['params']),
                    'backlink'   => !empty($infos['backlink']) ? $infos['backlink'] : '',
                    'charset'    => !empty($infos['charsets']) ? implode(', ', $infos['charsets']) : '',
                );
            } else {
                if (empty($mergedSearchInfos[$infos[0]])) {
                    $mergedSearchInfos[$infos[0]] = array();
                }
                $mergedSearchInfos[$infos[0]][] = array(
                    'url'        => $url,
                    'parameters' => !empty($infos[1]) ? implode(', ', (array)$infos[1]) : '',
                    'backlink'   => !empty($infos[2]) ? $infos[2] : '',
                    'charset'    => !empty($infos[3]) ? implode(', ', (array)$infos[3]) : '',
                );
            }
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
        $searchEngineLogos = array();

        if (self::useNewStructure()) {
            $searchEngineNames = \Piwik\Plugins\Referrers\SearchEngine::getInstance()->getNames();
        } else {
            $searchEngineNames = Common::getSearchEngineNames();
        }

        foreach ($searchEngineNames AS $name => $url) {
            if (self::useNewStructure()) {
                $searchEngineLogos[$name] = \Piwik\Plugins\Referrers\SearchEngine::getInstance()->getLogoFromUrl($url);
            } else {
                $searchEngineLogos[$name] = \Piwik\Plugins\Referrers\getSearchEngineLogoFromUrl($url);
            }
        }
        return $searchEngineLogos;
    }

    /**
     * Wrapper method to Piwiks internal method to return search engine data
     * @return array
     */
    public function getSocials()
    {
        if (self::useNewStructure()) {
            return \Piwik\Plugins\Referrers\Social::getInstance()->getDefinitions();
        } else {
            return Common::getSocialUrls();
        }
    }

    /**
     * Returns all social informations known to piwik
     *
     * @return array
     */
    public function getSocialsInfos()
    {
        $mergedSocials = array();

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
        $socialsLogos = array();

        if (self::useNewStructure()) {
            $urls = \Piwik\Plugins\Referrers\Social::getInstance()->getDefinitions();
        } else {
            $urls = Common::getSocialUrls();
        }

        foreach ($urls AS $url => $name) {

            if (self::useNewStructure()) {
                $socialsLogos[urldecode($name)] = \Piwik\Plugins\Referrers\Social::getInstance()->getLogoFromUrl($url);
            } else {
                $socialsLogos[urldecode($name)] = \Piwik\Plugins\Referrers\getSocialsLogoFromUrl($url);
            }
        }
        return $socialsLogos;
    }

    public function detectSearchEngine($url)
    {
        if (self::useNewStructure()) {
            $detectedEngine = SearchEngine::getInstance()->extractInformationFromUrl($url);
        } else {
            $detectedEngine = UrlHelper::extractSearchEngineInformationFromUrl($url);
        }

        if (!empty($detectedEngine['name'])) {
            if (self::useNewStructure()) {
                $detectedEngine['image'] = SearchEngine::getInstance()->getLogoFromUrl(SearchEngine::getInstance()->getUrlFromName($detectedEngine['name']));
            } else {
                $detectedEngine['image'] = \Piwik\Plugins\Referrers\getSearchEngineLogoFromUrl(\Piwik\Plugins\Referrers\getSearchEngineUrlFromName($detectedEngine['name']));
            }

            if ($detectedEngine['keywords'] === false) {
                $detectedEngine['keywords'] = '<i>' . Piwik::translate('General_NotDefined',
                        Piwik::translate('General_ColumnKeyword')) . '</i>';
            }
        }

        return $detectedEngine;
    }

    public function detectSocial($url)
    {
        if (self::useNewStructure()) {
            $detectedSocial = Social::getInstance()->getSocialNetworkFromDomain($url);
        } else {
            $detectedSocial = \Piwik\Plugins\Referrers\getSocialNetworkFromDomain($url);
        }

        if (!empty($detectedSocial) && $detectedSocial != Piwik::translate('General_Unknown')) {

            if (self::useNewStructure()) {
                $image = Social::getInstance()->getLogoFromUrl($url);
            } else {
                $image = \Piwik\Plugins\Referrers\getSocialsLogoFromUrl($url);
            }

            $detectedSocial = array(
                'name'  => $detectedSocial,
                'image' => $image
            );
        } else {

            $detectedSocial = false;
        }

        return $detectedSocial;
    }

}