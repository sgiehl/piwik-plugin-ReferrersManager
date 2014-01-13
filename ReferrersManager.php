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
            'Referer.addSearchEngineUrls'      => 'addSearchEngineUrls',
            'AssetManager.getJavaScriptFiles'  => 'getJsFiles',
        );
    }

    public function addMenu()
    {
        MenuAdmin::getInstance()->add(
            'General_Settings', 'ReferrersManager_ReferrersManager',
            array('module' => 'ReferrersManager', 'action' => 'index'),
            Piwik::isUserIsSuperUser(),
            $order = 20
        );
    }

    public function getJsFiles(&$jsFiles)
    {
        $jsFiles[] = "plugins/ReferrersManager/javascripts/ReferrersManager.js";
    }

    /**
     * Adds the user defined search engines
     * @param $searchEngines
     */
    public function addSearchEngineUrls(&$searchEngines)
    {

    }
}
