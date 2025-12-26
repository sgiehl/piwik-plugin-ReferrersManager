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

if (!class_exists(Activity::class)) {
    return;
}

class AIAssistantRemoved extends Activity
{
    protected $eventName = 'API.ReferrersManager.removeAIAssistant';

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

        $userDefinedAssistants = \Piwik\Plugins\ReferrersManager\API::getInstance()->getUserDefinedAIAssistants();
        $name                  = $userDefinedAssistants[$host];

        return [
            'items' => [
                [
                    'type' => 'aiassistant',
                    'data' => [
                        'name' => $name,
                        'host' => $host,
                    ],
                ],
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
        return Piwik::translate('ReferrersManager_AIAssistantRemoved');
    }
}
