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
use Piwik\UrlHelper;
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

        $view->searchEngineInfos = $this->getSearchEngineInfos();
        $view->searchEngineLogos = $this->getSearchEngineLogos();

        $view->socialInfos = $this->getSocialsInfos();
        $view->socialLogos = $this->getSocialsLogos();

        $view->ownSocialDefinitions = areDefaultSocialsDisabled();
        $view->userDefinedSocials = getUserDefinedSocials();
        $view->userDefinedSearchEngines = getUserDefinedSearchEngines();

        return $view->render();
    }

    /**
     * Sets if default socials should be used or not
     */
    public function setDefaultSocialsDisabled()
    {
        $state = Common::getRequestVar('state', 0, 'int');
        setDefaultSocialsDisabled((bool) $state);
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

        $detectedEngine = UrlHelper::extractSearchEngineInformationFromUrl($urlToCheck);

        if (!empty($detectedEngine['name'])) {
            $detectedEngine['image'] = \Piwik\Plugins\Referrers\getSearchEngineLogoFromUrl(\Piwik\Plugins\Referrers\getSearchEngineUrlFromName($detectedEngine['name']));
            if ($detectedEngine['keywords'] === false) {
                $detectedEngine['keywords'] = '<i>'.Piwik::translate('General_NotDefined', Piwik::translate('General_ColumnKeyword')).'</i>';
            }
        }

        $detectedSocial = \Piwik\Plugins\Referrers\getSocialNetworkFromDomain($urlToCheck);

        if (!empty($detectedSocial) && $detectedSocial != Piwik::translate('General_Unknown')) {

            $detectedSocial = array(
                'name' => $detectedSocial,
                'image' => \Piwik\Plugins\Referrers\getSocialsLogoFromUrl($urlToCheck)
            );
        } else {

            $detectedSocial = false;
        }


        Json::sendHeaderJSON();
        return json_encode(array(
            'searchengine' => $detectedEngine,
            'social'       => $detectedSocial
        ));
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

        $socials = getUserDefinedSocials();
        $socials[$host] = $name;
        setUserDefinedSocials($socials);
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

        $socials = getUserDefinedSocials();
        unset($socials[$host]);
        setUserDefinedSocials($socials);
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

        $engines = getUserDefinedSearchEngines();
        $engines[$host] = array($name, $parameters, $backlink, $charset);
        setUserDefinedSearchEngines($engines);
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

        $engines = getUserDefinedSearchEngines();
        unset($engines[$host]);
        setUserDefinedSearchEngines($engines);
        return 1;
    }

    /**
     * Returns all search engine informations known to piwik
     *
     * @return array
     */
    protected function getSearchEngineInfos()
    {
        $mergedSearchInfos = array();

        $searchEngineInfos = Common::getSearchEngineUrls();

        foreach ($searchEngineInfos AS $url => $infos) {

            $infos = array_merge($infos, array('', '', '', ''));

            list($name, $parameters, $backlink, $charset) = $infos;

            if (is_array($parameters)) {
                $parameters = implode(', ', $parameters);
            }

            if (is_array($charset)) {
                $charset = implode(', ', $charset);
            }

            if (empty($mergedSearchInfos[$name])) {
                $mergedSearchInfos[$name] = array();
            }

            $mergedSearchInfos[$name][] = array(
                'url'        => $url,
                'parameters' => $parameters,
                'backlink'   => $backlink,
                'charset'    => $charset
            );
        }

        ksort($mergedSearchInfos, SORT_LOCALE_STRING);

        return $mergedSearchInfos;
    }

    /**
     * Returns an array containing all logos for search engines
     *
     * @return array (name => logo-src)
     */
    protected function getSearchEngineLogos()
    {
        $searchEngineLogos = array();

        $searchEngineNames = Common::getSearchEngineNames();
        foreach($searchEngineNames AS $name => $url) {
            $searchEngineLogos[$name] = \Piwik\Plugins\Referrers\getSearchEngineLogoFromUrl($url);
        }
        return $searchEngineLogos;
    }

    /**
     * Returns all social informations known to piwik
     *
     * @return array
     */
    protected function getSocialsInfos()
    {
        $mergedSocials = array();

        foreach (Common::getSocialUrls() AS $url => $name) {

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
    protected function getSocialsLogos()
    {
        $socialsLogos = array();

        foreach(Common::getSocialUrls() AS $url => $name) {

            $socialsLogos[urldecode($name)] = \Piwik\Plugins\Referrers\getSocialsLogoFromUrl($url);
        }
        return $socialsLogos;
    }

}
