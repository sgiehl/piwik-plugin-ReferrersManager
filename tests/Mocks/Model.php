<?php
/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */
namespace Piwik\Plugins\ReferrersManager\tests\Mocks;

use Piwik\Cache;
use Piwik\Container\StaticContainer;
use Piwik\Option;
use Piwik\Piwik;
use Piwik\Plugins\Referrers\SearchEngine;
use Piwik\Plugins\Referrers\Social;
use Piwik\Plugins\ReferrersManager\ReferrersManager;
use Piwik\Singleton;

/**
 *
 */
class Model extends \Piwik\Plugins\ReferrersManager\Model
{
    /**
     * Wrapper method to Piwiks internal method to return search engine data
     * @return array
     */
    public function getSearchEngines()
    {
        $searchEngines = file_get_contents(__DIR__ . '/../resources/searchEngines.yml');
        $searchEngines = SearchEngine::getInstance()->loadYmlData($searchEngines);

        $plugin = new ReferrersManager();
        $plugin->addSearchEngineUrls($searchEngines);

        return $searchEngines;
    }

    /**
     * Wrapper method to Piwiks internal method to return search engine data
     * @return array
     */
    public function getSocials()
    {
        $socials = file_get_contents(__DIR__ . '/../resources/socials.yml');
        $socials = Social::getInstance()->loadYmlData($socials);

        $plugin = new ReferrersManager();
        $plugin->addSocialUrls($socials);

        return $socials;
    }

}