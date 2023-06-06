<?php
/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

namespace Piwik\Plugins\ReferrersManager;

use Piwik\Plugin;

/**
 *
 */
class ReferrersManager extends Plugin
{
    /**
     * @see \Piwik\Plugin::registerEvents
     */
    public function registerEvents()
    {
        return array(
            'Referrer.addSearchEngineUrls'     => 'addSearchEngineUrls',
            'Referrer.addSocialUrls'           => 'addSocialUrls',
            'AssetManager.getStylesheetFiles'  => 'getStylesheetFiles',
            'Translate.getClientSideTranslationKeys' => 'getClientSideTranslationKeys',
        );
    }

    /**
     * Adds required CSS files
     * @param $stylesheets
     */
    public function getStylesheetFiles(&$stylesheets)
    {
        $stylesheets[] = "plugins/ReferrersManager/stylesheets/styles.less";
    }

    public function isTrackerPlugin()
    {
        return true;
    }

    /**
     * Adds the user defined search engines
     * @param $searchEngines
     */
    public function addSearchEngineUrls(&$searchEngines)
    {
        try {
            $userEngines = Model::getInstance()->getUserDefinedSearchEngines();
            $searchEngines = array_merge($searchEngines, $userEngines);
        } catch (\Exception $e) {}
    }

    /**
     * Adds the user defined social networks
     * @param $socials
     */
    public function addSocialUrls(&$socials)
    {
        try {
            if(Model::getInstance()->areDefaultSocialsDisabled()) {
                $socials = array();
            }

            $userSocials = Model::getInstance()->getUserDefinedSocials();
            $socials = array_merge($socials, $userSocials);
        } catch (\Exception $e) {}
    }

    public function getClientSideTranslationKeys(&$translationKeys)
    {
        $translationKeys[] = "ReferrersManager_PluginDescription";
        $translationKeys[] = "ReferrersManager_SearchEnginesAndSocialNetworks";
        $translationKeys[] = "ReferrersManager_AddSocial";
        $translationKeys[] = "ReferrersManager_Hostname";
        $translationKeys[] = "ReferrersManager_SearchEnginesList";
        $translationKeys[] = "ReferrersManager_SocialsList";
        $translationKeys[] = "ReferrersManager_ManageSocialsAndEngines";
        $translationKeys[] = "ReferrersManager_ConfirmRemove";
        $translationKeys[] = "ReferrersManager_ManageSearchEngines";
        $translationKeys[] = "ReferrersManager_ManageSocials";
        $translationKeys[] = "ReferrersManager_DetectedEngine";
        $translationKeys[] = "ReferrersManager_DetectedKeywords";
        $translationKeys[] = "ReferrersManager_DetectedSocial";
        $translationKeys[] = "ReferrersManager_CheckUrl";
        $translationKeys[] = "ReferrersManager_CheckUrlDesc";
        $translationKeys[] = "ReferrersManager_CheckUrlSend";
        $translationKeys[] = "ReferrersManager_AddSearchEngine";
        $translationKeys[] = "ReferrersManager_Parameters";
        $translationKeys[] = "ReferrersManager_BacklinkPattern";
        $translationKeys[] = "ReferrersManager_Charset";
        $translationKeys[] = "ReferrersManager_AddEngineError";
        $translationKeys[] = "ReferrersManager_CommaSeparated";
        $translationKeys[] = "ReferrersManager_AddSocialError";
        $translationKeys[] = "ReferrersManager_SocialListDisabled";
        $translationKeys[] = "ReferrersManager_EnableSocialList";
        $translationKeys[] = "ReferrersManager_DisableSocialList";
        $translationKeys[] = "ReferrersManager_UsingDefaultSocials";
        $translationKeys[] = "ReferrersManager_ProvideSocialData";
        $translationKeys[] = "ReferrersManager_DuplicateHostnameInfo";
        $translationKeys[] = "ReferrersManager_ProvideEngineData";
        $translationKeys[] = "ReferrersManager_HostnameWildcardDesc";
    }
}
