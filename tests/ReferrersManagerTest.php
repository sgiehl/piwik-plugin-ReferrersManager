<?php
/**
 * Piwik - Open source web analytics
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

namespace Piwik\Plugins\ReferrersManager\tests;

/**
 * @see plugins/ReferrersManager/functions.php
 */
require_once PIWIK_INCLUDE_PATH . '/plugins/ReferrersManager/functions.php';

use Piwik\Common;
use Piwik\Plugins\ReferrersManager;
use Piwik\UrlHelper;

/**
 * @group Plugins
 * @group ReferrersManager
 */
class ReferrersManagerTest extends \DatabaseTestCase
{
    public function setUp()
    {
        parent::setUp();
        \Piwik\Plugin\Manager::getInstance()->loadPlugin('ReferrersManager');
        include PIWIK_INCLUDE_PATH . '/core/DataFiles/SearchEngines.php';
        include PIWIK_INCLUDE_PATH . '/core/DataFiles/Socials.php';
    }

    public function testGetCustomSearchEnginesEmpty()
    {
        $engines = ReferrersManager\getUserDefinedSearchEngines();
        $this->assertEquals(array(), $engines);
    }

    public function testSetCustomSearchEngines()
    {
        $customEngines = array('www.test.de' => array('Test', array('x')));
        ReferrersManager\setUserDefinedSearchEngines($customEngines);
        $engines = ReferrersManager\getUserDefinedSearchEngines();
        $this->assertEquals($customEngines, $engines);

        $allEngines = Common::getSearchEngineUrls();
        $this->assertArrayHasKey('www.test.de', $allEngines);
    }

    /**
     * @dataProvider getCustomEngineTestData
     */
    public function testCustomSearchEngineDetection($enginesToAdd, $referer, $result)
    {
        ReferrersManager\setUserDefinedSearchEngines($enginesToAdd);
        $detectedEngines = UrlHelper::extractSearchEngineInformationFromUrl($referer);
        $this->assertEquals($result, $detectedEngines);
    }

    public function getCustomEngineTestData()
    {
        return array(
            array(
                array('www.test.de' => array('Test', array('x'))),
                'http://www.test.de/xdga/ddf/?tsd=sssh&x=test',
                array('name' => 'Test', 'keywords' => 'test')
            ),
            array(
                array('test.de' => array('Test', array('x'))),
                'http://www.test.de/xdga/ddf/?tsd=sssh&x=test',
                false
            ),
        );
    }

    public function testGetCustomSocialsEmpty()
    {
        $socials = ReferrersManager\getUserDefinedSocials();
        $this->assertEquals(array(), $socials);
    }

    public function testSetCustomSocials()
    {
        $customSocials = array('www.test.de' => 'test');
        ReferrersManager\setUserDefinedSocials($customSocials);
        $engines = ReferrersManager\getUserDefinedSocials();
        $this->assertEquals($customSocials, $engines);

        $allSocials = Common::getSocialUrls();
        $this->assertArrayHasKey('www.test.de', $allSocials);
    }

    /**
     * @dataProvider getCustomSocialsTestData
     */
    public function testCustomSocialDetection($socialsToAdd, $referer, $result)
    {
        ReferrersManager\setUserDefinedSocials($socialsToAdd);
        $detectedSocial = \Piwik\Plugins\Referrers\getSocialNetworkFromDomain($referer);
        $this->assertEquals($result, $detectedSocial);
    }

    public function getCustomSocialsTestData()
    {
        return array(
            array(
                array('www.test.de' => 'Test'),
                'http://www.test.de/xdga/ddf/?tsd=sssh&x=test',
                'Test'
            ),
            array(
                array('test.de' => 'Test'),
                'http://www.test.de/xdga/ddf/?tsd=sssh&x=test',
                'Test'
            ),
            array(
                array('test.de' => 'Test'),
                'http://xyz.test.de/xdga/ddf/?tsd=sssh&x=test',
                'Test'
            ),
        );
    }

}