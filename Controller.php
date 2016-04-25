<?php
/**
 * Piwik - Open source web analytics
 *
 * @link http://piwik.org
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

        $view->searchEngineInfos = Model::getInstance()->getSearchEngineInfos();
        $view->searchEngineLogos = Model::getInstance()->getSearchEngineLogos();

        $view->socialInfos = Model::getInstance()->getSocialsInfos();
        $view->socialLogos = Model::getInstance()->getSocialsLogos();

        $view->ownSocialDefinitions = Model::getInstance()->areDefaultSocialsDisabled();
        $view->userDefinedSocials = Model::getInstance()->getUserDefinedSocials();
        $view->userDefinedSearchEngines = Model::getInstance()->getUserDefinedSearchEngines();

        return $view->render();
    }

    /**
     * Sets if default socials should be used or not
     */
    public function setDefaultSocialsDisabled()
    {
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
        $this->checkTokenInUrl();

        $urlToCheck = trim(Common::unsanitizeInputValue(Common::getRequestVar('url', null, 'string')));

        Json::sendHeaderJSON();
        return json_encode(array(
            'searchengine' => Model::getInstance()->detectSearchEngine($urlToCheck),
            'social'       => Model::getInstance()->detectSocial($urlToCheck)
        ));
    }

    public function refresh()
    {
        $this->checkTokenInUrl();

        Json::sendHeaderJSON();

        $type = Common::getRequestVar('type', '', 'string');

        if ($type == 'socials') {
            Model::getInstance()->clearSocialCache();
        } else if ($type == 'searchengines') {
            Model::getInstance()->clearSearchEngineCache();
        }

        return 1;
    }

    /**
     * Ajax Action to add a news social network
     * @return int
     */
    public function addSocial()
    {
        $this->checkTokenInUrl();

        Json::sendHeaderJSON();

        $name = Common::getRequestVar('name', '', 'string');
        $host = Common::getRequestVar('host', '', 'string');

        if (empty($host) || empty($name)) {
            return 0;
        }

        $socials = Model::getInstance()->getUserDefinedSocials();
        $socials[$host] = $name;
        Model::getInstance()->setUserDefinedSocials($socials);
        return 1;
    }

    /**
     * Ajax action to remove a user defined social
     * @return int
     */
    public function removeSocial()
    {
        $this->checkTokenInUrl();

        Json::sendHeaderJSON();

        $host = Common::getRequestVar('host', '', 'string');

        if (empty($host)) {
            return 0;
        }

        $socials = Model::getInstance()->getUserDefinedSocials();
        unset($socials[$host]);
        Model::getInstance()->setUserDefinedSocials($socials);
        return 1;
    }

    /**
     * Ajax action to add a ne search engine definition
     * @return int
     */
    public function addSearchEngine()
    {
        $this->checkTokenInUrl();

        Json::sendHeaderJSON();

        $name = Common::getRequestVar('name', '', 'string');
        $host = Common::getRequestVar('host', '', 'string');
        $backlink = Common::getRequestVar('backlink', '', 'string');
        $parameters = Common::getRequestVar('parameters', '', 'string');
        $charset = Common::getRequestVar('charset', '', 'string');

        if (empty($host) || empty($name)) {
            return 0;
        }

        if (!empty($parameters)) {
            $parameters = explode(',', $parameters);
        }

        $engines = Model::getInstance()->getUserDefinedSearchEngines();
        $engines[$host] = array($name, $parameters, $backlink, $charset);
        Model::getInstance()->setUserDefinedSearchEngines($engines);
        return 1;
    }

    /**
     * Ajax action to remove a user defined search engine definition
     * @return int
     */
    public function removeSearchEngine()
    {
        $this->checkTokenInUrl();

        Json::sendHeaderJSON();

        $host = Common::getRequestVar('host', '', 'string');

        if (empty($host)) {
            return 0;
        }

        $engines = Model::getInstance()->getUserDefinedSearchEngines();
        unset($engines[$host]);
        Model::getInstance()->setUserDefinedSearchEngines($engines);
        return 1;
    }
}
