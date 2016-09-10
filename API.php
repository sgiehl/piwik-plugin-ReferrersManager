<?php
/**
 * Piwik - free/libre analytics platform
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 *
 */
namespace Piwik\Plugins\ReferrersManager;


class API extends \Piwik\Plugin\API
{
    /** @var Model */
    protected $model;

    public function __construct()
    {
        $this->model = Model::getInstance();
    }

    public function getSearchEngineDefinitions()
    {
        return $this->model->getSearchEngineDefinitions();
    }

    public function getUserDefinedSearchEngines()
    {
        return $this->model->getUserDefinedSearchEngines();
    }

    public function getSocialDefinitions()
    {
        return $this->model->getSocialsDefinitions();
    }

    public function getSearchEngineLogos()
    {
        return $this->model->getSearchEngineLogos();
    }

    public function getSocialLogos()
    {
        return $this->model->getSocialLogos();
    }
}
