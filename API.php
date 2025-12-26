<?php

/**
 * Matomo - free/libre analytics platform
 *
 * @link    https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 *
 */

namespace Piwik\Plugins\ReferrersManager;

use Piwik\Piwik;

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
    public function getSearchEngineDefinitions(): array
    {
        return $this->model->getSearchEngineDefinitions();
    }

    /**
     * returns only user defined search engines
     *
     * @return array
     */
    public function getUserDefinedSearchEngines(): array
    {
        return $this->model->getUserDefinedSearchEngines();
    }

    /**
     * Returns only user defined social networks
     *
     * @return array
     */
    public function getUserDefinedSocials(): array
    {
        return $this->model->getUserDefinedSocials();
    }

    /**
     * Returns only user defined AI assistants
     *
     * @return array
     */
    public function getUserDefinedAIAssistants(): array
    {
        return $this->model->getUserDefinedAIAssistants();
    }

    /**
     * Returns all defined social networks
     *
     * @return array
     */
    public function getSocialDefinitions(): array
    {
        return $this->model->getSocialsDefinitions();
    }

    /**
     * Returns all defined AI assistants
     *
     * @return array
     */
    public function getAIAssistantDefinitions(): array
    {
        return $this->model->getAIAssistantDefinitions();
    }

    /**
     * Returns logo urls for available search engines
     *
     * @return array
     * @internal
     */
    public function getSearchEngineLogos(): array
    {
        return $this->model->getSearchEngineLogos();
    }

    /**
     * Returns logo urls for available social networks
     *
     * @return array
     * @internal
     */
    public function getSocialLogos(): array
    {
        return $this->model->getSocialsLogos();
    }

    /**
     * Returns logo urls for available AI assistants
     *
     * @return array
     * @internal
     */
    public function getAIAssistantLogos(): array
    {
        return $this->model->getAIAssistantLogos();
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
    public function addSearchEngine(
        string $name,
        string $host,
        $parameters = '',
        string $backlink = '',
        string $charset = ''
    ): bool {
        Piwik::checkUserHasSuperUserAccess();

        if (empty($host) || empty($name)) {
            return false;
        }

        if (!empty($parameters)) {
            $parameters = explode(',', $parameters);
        } else {
            $parameters = [];
        }

        $engines        = $this->model->getUserDefinedSearchEngines();
        $engines[$host] = [
            'name'     => $name,
            'params'   => $parameters,
            'backlink' => $backlink,
            'charsets' => explode(',', $charset),
        ];
        $this->model->setUserDefinedSearchEngines($engines);
        return true;
    }

    /**
     * Removes a user defined search engine
     *
     * @param string $host
     * @return bool
     */
    public function removeSearchEngine(string $host): bool
    {
        Piwik::checkUserHasSuperUserAccess();

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
    public function addSocial(string $name, string $host): bool
    {
        Piwik::checkUserHasSuperUserAccess();

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
     *
     * @param $host
     * @return bool
     */
    public function removeSocial(string $host): bool
    {
        Piwik::checkUserHasSuperUserAccess();

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

    /**
     * Adds a new user defined AI assistant
     *
     * @param string $name
     * @param string $host
     * @return bool
     */
    public function addAIAssistant(string $name, string $host): bool
    {
        Piwik::checkUserHasSuperUserAccess();

        if (empty($host) || empty($name)) {
            return false;
        }

        $assistants        = $this->model->getUserDefinedAIAssistants();
        $assistants[$host] = $name;
        $this->model->setUserDefinedAIAssistants($assistants);
        return true;
    }

    /**
     * Removes a user defined AI assistant
     *
     * @param $host
     * @return bool
     */
    public function removeAIAssistant(string $host): bool
    {
        Piwik::checkUserHasSuperUserAccess();

        if (empty($host)) {
            return false;
        }

        $assistants = $this->model->getUserDefinedAIAssistants();

        if (empty($assistants[$host])) {
            return false; // does not exist
        }

        unset($assistants[$host]);
        $this->model->setUserDefinedAIAssistants($assistants);
        return true;
    }

    /**
     * Sets if default socials should be used or not
     *
     * @param bool $state
     * @return bool
     */
    public function setDefaultSocialsDisabled(bool $state = false): bool
    {
        Piwik::checkUserHasSuperUserAccess();

        Model::getInstance()->setDefaultSocialsDisabled((bool)$state);
        return true;
    }

    /**
     * Sets if default AI assistants should be used or not
     *
     * @param bool $state
     * @return bool
     */
    public function setDefaultAIAssistantsDisabled(bool $state = false): bool
    {
        Piwik::checkUserHasSuperUserAccess();

        Model::getInstance()->setDefaultAIAssistantsDisabled((bool)$state);
        return true;
    }
}
