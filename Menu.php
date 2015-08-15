<?php
/**
 * Piwik - Open source web analytics
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 *
 */
namespace Piwik\Plugins\ReferrersManager;

use Piwik\Menu\MenuAdmin;
use Piwik\Piwik;

class Menu extends \Piwik\Plugin\Menu
{
    public function configureAdminMenu(MenuAdmin $menu)
    {
        if (Piwik::hasUserSuperUserAccess()) {
            if (!method_exists($menu, 'addSettingsItem')) {
                // menu fallback for piwik < 1.11
                $menu->add(
                    'General_Settings',
                    'ReferrersManager_SearchEnginesAndSocialNetworks',
                    array('module' => 'ReferrersManager', 'action' => 'index'),
                    true,
                    $order = 20
                );
                return;
            }

            $menu->addSettingsItem(
                'ReferrersManager_SearchEnginesAndSocialNetworks',
                $this->urlForAction('index'),
                $order = 20
            );
        }
    }
}
