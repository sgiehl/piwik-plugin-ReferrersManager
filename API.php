<?php
/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 *
 */
namespace Piwik\Plugins\ReferrersManager;

class API extends \Piwik\Plugin\API
{
    /** @var Model */
    protected $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    /**
     * Returns all search engine definitions
     *
     * @return array
     */
    public function getSearchEngineDefinitions()
    {
        return $this->model->getSearchEngineDefinitions();
    }

    /**
     * returns only user defined search engines
     *
     * @return array
     */
    public function getUserDefinedSearchEngines()
    {
        return $this->model->getUserDefinedSearchEngines();
    }

    /**
     * Returns only user defined social networks
     *
     * @return array
     */
    public function getUserDefinedSocials()
    {
        return $this->model->getUserDefinedSocials();
    }

    /**
     * Returns all defined social networks
     *
     * @return array
     */
    public function getSocialDefinitions()
    {
        return $this->model->getSocialsDefinitions();
    }

    /**
     * Returns logo urls for available search engines
     *
     * @return array
     * @internal
     */
    public function getSearchEngineLogos()
    {
        return $this->model->getSearchEngineLogos();
    }

    /**
     * Returns logo urls for available social networks
     *
     * @return array
     * @internal
     */
    public function getSocialLogos()
    {
        return $this->model->getSocialsLogos();
    }

    /**
     * Adds a new user defined search engine
     *
     * @param string $name
     * @param string $host
     * @param string $parameters
     * @param string $backlink
     * @param string $charset
     * @return bool
     */
    public function addSearchEngine($name, $host, $parameters = '', $backlink = '', $charset = '')
    {
        if (empty($host) || empty($name)) {
            return false;
        }

        if (!empty($parameters)) {
            $parameters = explode(',', $parameters);
        }

        $engines        = $this->model->getUserDefinedSearchEngines();
        $engines[$host] = array(
            'name' => $name,
            'params' => $parameters,
            'backlink' => $backlink,
            'chartset' => $charset
        );
        $this->model->setUserDefinedSearchEngines($engines);
        return true;
    }

    /**
     * Removes a user defined search engine
     *
     * @param string $host
     * @return bool
     */
    public function removeSearchEngine($host)
    {
        if (empty($host)) {
            return false;
        }

        $engines = $this->model->getUserDefinedSearchEngines();

        if (empty($engines[$host])) {
            return false; // does not exist
        }

        unset($engines[$host]);
        $this->model->setUserDefinedSearchEngines($engines);
        return true;
    }

    /**
     * Adds a new user defined social network
     *
     * @param string $name
     * @param string $host
     * @return bool
     */
    public function addSocial($name, $host)
    {
        if (empty($host) || empty($name)) {
            return false;
        }


        $socials        = $this->model->getUserDefinedSocials();
        $socials[$host] = $name;
        $this->model->setUserDefinedSocials($socials);
        return true;
    }

    /**
     * Removes a user defined social network
     * @param $host
     * @return bool
     */
    public function removeSocial($host)
    {
        if (empty($host)) {
            return false;
        }

        $socials = $this->model->getUserDefinedSocials();

        if (empty($socials[$host])) {
            return false; // does not exist
        }

        unset($socials[$host]);
        $this->model->setUserDefinedSocials($socials);
        return true;
    }
}
