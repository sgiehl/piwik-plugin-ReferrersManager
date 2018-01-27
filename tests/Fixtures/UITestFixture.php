<?php
/*!
 * Matomo - free/libre analytics platform
 *
 * Screenshot tests for ReferrersManager plugin
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */
namespace Piwik\Plugins\ReferrersManager\tests\Fixtures;

use Piwik\Cache;
use Piwik\Option;
use Piwik\Plugin\Manager;
use Piwik\Plugins\Referrers\SearchEngine;
use Piwik\Plugins\Referrers\Social;
use Piwik\Tests\Framework\Fixture;

class UITestFixture extends Fixture
{
    public function setUp()
    {
        Manager::getInstance()->activatePlugin('ReferrersManager');

        $this->createWebsite('2016-01-01');
    }

    public function tearDown()
    {
        // empty
    }
}