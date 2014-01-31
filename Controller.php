<?php
/**
 * Piwik - Open source web analytics
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 *
 * @category Piwik_Plugins
 * @package ReferrersManager
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
 * @package ReferrersManager
 */
class Controller extends ControllerAdmin
{
    /**
     * Index action
     * @return string
     */
    public function index()
    {
        Piwik::checkUserIsSuperUser();

        $view = new View('@ReferrersManager/index');
        $this->setBasicVariablesView($view);

        $view->searchEngineInfos = $this->getSearchEngineInfos();
        $view->searchEngineLogos = $this->getSearchEngineLogos();

        $view->socialInfos = $this->getSocialsInfos();
        $view->socialLogos = $this->getSocialsLogos();

        $view->ownSocialDefinitions = areDefaultSocialsDisabled();
        $view->userDefinedSocials = getUserDefinedSocials();

        return $view->render();
    }

    /**
     * Sets if default social should be used or not
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

        $urlToCheck = Common::unsanitizeInputValue(Common::getRequestVar('url', null, 'string'));

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

        ksort($mergedSearchInfos, SORT_NATURAL|SORT_FLAG_CASE);

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

        ksort($mergedSocials, SORT_NATURAL|SORT_FLAG_CASE);

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
