<?php
/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */
namespace Piwik\Plugins\ReferrersManager;

use Piwik\Common;
use Piwik\DataTable\Renderer\Json;
use Piwik\Piwik;
use Piwik\Plugin\ControllerAdmin;
use Piwik\View;

/**
 *
 */
class Controller extends ControllerAdmin
{
    /**
     * Index action
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
     * Sets if default socials should be used or not
     */
    public function setDefaultSocialsDisabled()
    {
        Piwik::checkUserHasSuperUserAccess();

        $state = Common::getRequestVar('state', 0, 'int');
        Model::getInstance()->setDefaultSocialsDisabled((bool) $state);
        Json::sendHeaderJSON();
        return 1;
    }

    /**
     * Ajax action to check an url for search engine information that can be extracted
     *
     * @return string
     */
    public function checkUrl()
    {
        Piwik::checkUserHasSuperUserAccess();

        $urlToCheck = trim(Common::unsanitizeInputValue(Common::getRequestVar('url', null, 'string')));

        Json::sendHeaderJSON();
        return json_encode(array(
            'searchengine' => Model::getInstance()->detectSearchEngine($urlToCheck),
            'social'       => Model::getInstance()->detectSocial($urlToCheck)
        ));
    }

    public function refresh()
    {
        Piwik::checkUserHasSuperUserAccess();

        Json::sendHeaderJSON();

        $type = Common::getRequestVar('type', '', 'string');

        if ($type == 'socials') {
            Model::getInstance()->clearSocialCache();
        } else if ($type == 'searchengines') {
            Model::getInstance()->clearSearchEngineCache();
        }

        return 1;
    }
}
