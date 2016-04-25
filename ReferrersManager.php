<?php
/**
 * Piwik - Open source web analytics
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */
namespace Piwik\Plugins\ReferrersManager;

use Piwik\Menu\MenuAdmin;
use Piwik\Piwik;
use Piwik\Plugin;

/**
 *
 */
class ReferrersManager extends Plugin
{
    /**
     * @see Piwik_Plugin::getListHooksRegistered
     */
    public function getListHooksRegistered()
    {
        return array(
            'Referrer.addSearchEngineUrls'     => 'addSearchEngineUrls',
            'Referrer.addSocialUrls'           => 'addSocialUrls',
            'AssetManager.getJavaScriptFiles'  => 'getJsFiles',
            'AssetManager.getStylesheetFiles'  => 'getStylesheetFiles',
        );
    }

    /**
     * Adds required JS files
     * @param $jsFiles
     */
    public function getJsFiles(&$jsFiles)
    {
        $jsFiles[] = "plugins/ReferrersManager/javascripts/ReferrersManager.js";
    }

    /**
     * Adds required CSS files
     * @param $stylesheets
     */
    public function getStylesheetFiles(&$stylesheets)
    {
        $stylesheets[] = "plugins/ReferrersManager/stylesheets/styles.less";
    }

    public function isTrackerPlugin()
    {
        return true;
    }

    /**
     * Adds the user defined search engines
     * @param $searchEngines
     */
    public function addSearchEngineUrls(&$searchEngines)
    {
        try {
            $userEngines = Model::getInstance()->getUserDefinedSearchEngines();
            $searchEngines = array_merge($searchEngines, $userEngines);
        } catch (\Exception $e) {}
    }

    /**
     * Adds the user defined social networks
     * @param $socials
     */
    public function addSocialUrls(&$socials)
    {
        try {
            if(Model::getInstance()->areDefaultSocialsDisabled()) {
                $socials = array();
            }

            $userSocials = Model::getInstance()->getUserDefinedSocials();
            $socials = array_merge($socials, $userSocials);
        } catch (\Exception $e) {}
    }
}
