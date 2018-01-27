<?php
/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 *
 */
namespace Piwik\Plugins\ReferrersManager\Activity;

use Piwik\Piwik;
use Piwik\Plugins\ActivityLog\Activity\Activity;

class SocialRemoved extends Activity
{
    protected $eventName = 'API.ReferrersManager.removeSocial';

    /**
     * Returns data to be used for logging the event
     *
     * @param array $eventData Array of data passed to postEvent method
     * @return array
     */
    public function extractParams($eventData)
    {
        list($finalAPIParameters) = $eventData;

        $host = $finalAPIParameters['host'];

        $userDefinedSocials = \Piwik\Plugins\ReferrersManager\API::getInstance()->getUserDefinedSocials();
        $name               = $userDefinedSocials[$host];

        return [
            'items' => [
                [
                    'type' => 'searchengine',
                    'data' => [
                        'name' => $name,
                        'host' => $host,
                    ]
                ]
            ],
        ];
    }

    /**
     * Returns the translated description of the logged event
     *
     * @param array $activityData
     * @param string $performingUser
     * @return string
     */
    public function getTranslatedDescription($activityData, $performingUser)
    {
        return Piwik::translate('ReferrersManager_SocialRemoved');
    }
}