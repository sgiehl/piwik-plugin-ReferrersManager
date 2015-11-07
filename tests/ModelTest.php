<?php
/**
 * Piwik - Open source web analytics
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

namespace Piwik\Plugins\ReferrersManager\tests;

use Piwik\Cache;
use Piwik\Plugins\ReferrersManager\Model;
use Piwik\Tests\Framework\TestCase\SystemTestCase;

/**
 * @group Plugins
 * @group ReferrersManager
 */
class ModelTest extends SystemTestCase
{
    public function setUp()
    {
        parent::setUp();
        \Piwik\Plugin\Manager::getInstance()->loadPlugin('ReferrersManager');
        $this->invalidateCaches();
    }

    protected function invalidateCaches()
    {
        Cache::flushAll();
        if (class_exists('\Piwik\Plugins\Referrers\SearchEngine')) {
            \Piwik\Plugins\Referrers\SearchEngine::unsetInstance();
        }
    }

    public function testGetCustomSearchEnginesEmpty()
    {
        $engines = Model::getInstance()->getUserDefinedSearchEngines();
        $this->assertEquals(array(), $engines);
    }

    public function testSetCustomSearchEngines()
    {
        $customEngines = array('www.test.de' => array('Test', array('x')));
        Model::getInstance()->setUserDefinedSearchEngines($customEngines);
        $engines = Model::getInstance()->getUserDefinedSearchEngines();
        $this->assertEquals($customEngines, $engines);

        $allEngines = Model::getInstance()->getSearchEngines();
        $this->assertArrayHasKey('www.test.de', $allEngines);
    }

    /**
     * @dataProvider getCustomEngineTestData
     */
    public function testCustomSearchEngineDetection($enginesToAdd, $referrer, $result)
    {
        Model::getInstance()->setUserDefinedSearchEngines($enginesToAdd);
        $detectedEngines = Model::getInstance()->detectSearchEngine($referrer);
        unset($detectedEngines['image']);
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
        $socials = Model::getInstance()->getUserDefinedSocials();
        $this->assertEquals(array(), $socials);
    }

    public function testSetCustomSocials()
    {
        $customSocials = array('www.test.de' => 'test');
        Model::getInstance()->setUserDefinedSocials($customSocials);
        $engines = Model::getInstance()->getUserDefinedSocials();
        $this->assertEquals($customSocials, $engines);

        $allSocials = Model::getInstance()->getSocials();
        $this->assertArrayHasKey('www.test.de', $allSocials);
    }

    /**
     * @dataProvider getCustomSocialsTestData
     */
    public function testCustomSocialDetection($socialsToAdd, $referrer, $result)
    {
        Model::getInstance()->setUserDefinedSocials($socialsToAdd);
        $detectedSocial = Model::getInstance()->detectSocial($referrer);
        $this->assertEquals($result, $detectedSocial['name']);
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