<?php
/**
 * Piwik - Open source web analytics
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */
namespace Piwik\Plugins\ReferrersManager;

use Piwik\Option;

const OPTION_KEY_DISABLE_DEFAULT_SOCIALS     = 'disable_default_socials';
const OPTION_KEY_USERDEFINED_SOCIALS         = 'userdefined_socials';
const OPTION_KEY_USERDEFINED_SEARCHENGINES   = 'userdefined_searchengines';

/**
 * Returns if Piwik's built-in social list is used or not
 *
 * @return false|string
 */
function areDefaultSocialsDisabled()
{
    return Option::get(OPTION_KEY_DISABLE_DEFAULT_SOCIALS);
}

/**
 * Sets if Piwik's built-in social list should be used or not
 *
 * @param bool $disabled
 */
function setDefaultSocialsDisabled($disabled = true)
{
    Option::set(OPTION_KEY_DISABLE_DEFAULT_SOCIALS, $disabled);
}

/**
 * Returns the list of userdefined socials
 *
 * @return array
 */
function getUserDefinedSocials()
{
    $socials = json_decode(Option::get(OPTION_KEY_USERDEFINED_SOCIALS));

    if (!empty($socials)) {

        return (array) $socials;
    }

    return array();
}

/**
 * Sets user defined socials
 *
 * @param array $socialList
 */
function setUserDefinedSocials($socialList = array())
{
    Option::set(OPTION_KEY_USERDEFINED_SOCIALS, json_encode($socialList));
}

/**
 * Returns the list of userdefined search engines
 *
 * @return array
 */
function getUserDefinedSearchEngines()
{
    $eninges = json_decode(Option::get(OPTION_KEY_USERDEFINED_SEARCHENGINES));

    if (!empty($eninges)) {

        return (array) $eninges;
    }

    return array();
}

/**
 * Sets user defined search engines
 *
 * @param array $engineList
 */
function setUserDefinedSearchEngines($engineList = array())
{
    Option::set(OPTION_KEY_USERDEFINED_SEARCHENGINES, json_encode($engineList));
}
