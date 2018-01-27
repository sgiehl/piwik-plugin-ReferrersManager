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

class SocialAdded extends Activity
{
    protected $eventName = 'API.ReferrersManager.addSocial.end';

    /**
     * Returns data to be used for logging the event
     *
     * @param array $eventData Array of data passed to postEvent method
     * @return array
     */
    public function extractParams($eventData)
    {
        list($success, $finalAPIParameters) = $eventData;

        // $finalAPIParameters = [ className, module, action, parameters ]
        // $finalAPIParameters[parameters] = [ name, host ]

        return [
            'items' => [
                [
                    'type' => 'social',
                    'data' => [
                        'name' => $finalAPIParameters['parameters']['name'],
                        'host' => $finalAPIParameters['parameters']['host'],
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
        return Piwik::translate('ReferrersManager_SocialAdded');
    }
}