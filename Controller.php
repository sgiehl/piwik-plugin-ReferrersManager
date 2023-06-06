<?php
/**
 * Matomo - free/libre analytics platform
 *
 * @link    https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

namespace Piwik\Plugins\ReferrersManager;

use Piwik\DataTable\Renderer\Json;
use Piwik\Piwik;
use Piwik\Plugin\ControllerAdmin;
use Piwik\Request;
use Piwik\View;

/**
 *
 */
class Controller extends ControllerAdmin
{
    /**
     * Index action
     *
     * @return string
     */
    public function index()
    {
        Piwik::checkUserHasSuperUserAccess();

        $view = new View('@ReferrersManager/index');
        $this->setBasicVariablesView($view);

        $view->ownSocialDefinitions = Model::getInstance()->areDefaultSocialsDisabled();

        return $view->render();
    }

    /**
     * Ajax action to check an url for search engine information that can be extracted
     *
     * @return string
     */
    public function checkUrl()
    {
        Piwik::checkUserHasSuperUserAccess();

        $urlToCheck = trim(Request::fromRequest()->getStringParameter('url', ''));

        Json::sendHeaderJSON();
        return json_encode([
                               'searchengine' => Model::getInstance()->detectSearchEngine($urlToCheck),
                               'social'       => Model::getInstance()->detectSocial($urlToCheck),
                           ]);
    }

    public function refresh()
    {
        Piwik::checkUserHasSuperUserAccess();

        Json::sendHeaderJSON();

        $type = Request::fromRequest()->getStringParameter('type', '');

        if ($type === 'socials') {
            Model::getInstance()->clearSocialCache();
        } else if ($type === 'searchengines') {
            Model::getInstance()->clearSearchEngineCache();
        }

        return 1;
    }
}
