<?php
/**
 * Piwik - Open source web analytics
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 *
 * @category Piwik_Plugins
 * @package VisitorGenerator
 */
namespace Piwik\Plugins\ReferrersManager;

use Piwik\Menu\MenuAdmin;
use Piwik\Piwik;
use Piwik\Plugin;

/**
 * @see plugins/ReferrersManager/functions.php
 */
require_once PIWIK_INCLUDE_PATH . '/plugins/ReferrersManager/functions.php';

/**
 *
 * @package ReferrersManager
 */
class ReferrersManager extends Plugin
{
    /**
     * @see Piwik_Plugin::getListHooksRegistered
     */
    public function getListHooksRegistered()
    {
        return array(
            'Menu.Admin.addItems'              => 'addMenu',
            'Referrer.addSearchEngineUrls'     => 'addSearchEngineUrls',
            'Referrer.addSocialUrls'           => 'addSocialUrls',
            'AssetManager.getJavaScriptFiles'  => 'getJsFiles',
            'AssetManager.getStylesheetFiles'  => 'getStylesheetFiles',
        );
    }

    public function addMenu()
    {
        MenuAdmin::getInstance()->add(
            'General_Settings', 'ReferrersManager_SearchEnginesAndSocialNetworks',
            array('module' => 'ReferrersManager', 'action' => 'index'),
            Piwik::hasUserSuperUserAccess(),
            $order = 20
        );
    }

    public function getJsFiles(&$jsFiles)
    {
        $jsFiles[] = "plugins/ReferrersManager/javascripts/ReferrersManager.js";
    }

    public function getStylesheetFiles(&$stylesheets)
    {
        $stylesheets[] = "plugins/ReferrersManager/stylesheets/styles.less";
    }

    /**
     * Adds the user defined search engines
     * @param $searchEngines
     */
    public function addSearchEngineUrls(&$searchEngines)
    {
        try {
            $userEngines = getUserDefinedSearchEngines();
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
            if(areDefaultSocialsDisabled()) {
                $socials = array();
            }

            $userSocials = getUserDefinedSocials():
            $socials = array_merge($socials, $userSocials);
        } catch (\Exception $e) {}
    }
}
