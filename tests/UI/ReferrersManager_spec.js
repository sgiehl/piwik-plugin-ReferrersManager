/*!
 * Piwik - free/libre analytics platform
 *
 * Screenshot tests for ReferrersManager plugin
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

describe("ReferrersManager", function () {
    this.timeout(0);

    it('should load search engines list', function (done) {
        expect.screenshot('searchengines_list').to.be.captureSelector('#content', function (page) {
            page.load("?module=ReferrersManager&action=index&idSite=1&period=day&date=yesterday");
            page.wait(5000);
        }, done);
    });

    it('should identify search engine correct', function (done) {
        expect.screenshot('searchengines_identify').to.be.captureSelector('#content', function (page) {
            page.sendKeys('[ng-model="urlToCheck"]', 'http://www.google.com/xyz/?q=piwik');
            page.click('[onconfirm="checkResult()"] input', 1500);
        }, done);
    });

    it('should open add search engine dialog', function (done) {
        expect.screenshot('searchengines_add').to.be.captureSelector('#content', function (page) {
            page.click('[ng-click="showAddSearchEngineForm(true)"]', 1500);
        }, done);
    });

    it('should save new search engine', function (done) {
        expect.screenshot('searchengines_list_new').to.be.captureSelector('#content', function (page) {
            page.sendKeys("#engineName", 'test', 150);
            page.sendKeys("#engineHost", 'randomhost.com', 150);
            page.sendKeys("#engineParameter", 'q,ghj', 150);
            page.click('[onconfirm="addSearchEngine()"] input', 1500);
        }, done);
    });

    it('should identify new search engine correct', function (done) {
        expect.screenshot('searchengines_identify_new').to.be.captureSelector('#content', function (page) {
            page.sendKeys('[ng-model="urlToCheck"]', 'http://randomhost.com/xyz/?ghj=piwik');
            page.click('[onconfirm="checkResult()"] input', 1200);
        }, done);
    });

    it('should show remove search engine dialog correct', function (done) {
        expect.screenshot('searchengines_remove_dialog').to.be.captureSelector('.modal.open', function (page) {
            page.click('[ng-click="removeEngine(url.url)"]', 1500);
        }, done);
    });

    it('should remove new search engine correct', function (done) {
        expect.screenshot('searchengines_list').to.be.captureSelector('#content', function (page) {
            page.click(".modal.open a>span:contains(Yes)", 1500);
        }, done);
    });

    it('should switch to social networks list', function (done) {
        expect.screenshot('socials_list').to.be.captureSelector('#content', function (page) {
            page.click('a[href="#socialTab"]', 1500);
        }, done);
    });

    it('should identify social network correct', function (done) {
        expect.screenshot('social_identify').to.be.captureSelector('#content', function (page) {
            page.sendKeys('[ng-model="urlToCheck"]', 'http://twitter.com/tweet');
            page.click('[onconfirm="checkResult()"] input', 1500);
        }, done);
    });

    it('should disable internal social network list correct', function (done) {
        expect.screenshot('social_disable').to.be.captureSelector('#content', function (page) {
            page.click('[ng-click="setUseDefaultSocials(0)"]', 1500);
        }, done);
    });

    it('should identify social network correct', function (done) {
        expect.screenshot('social_identify_empty_list').to.be.captureSelector('#content', function (page) {
            page.sendKeys('[ng-model="urlToCheck"]', 'http://twitter.com/tweet');
            page.click('[onconfirm="checkResult()"] input', 1500);
        }, done);
    });

    it('should open add social dialog', function (done) {
        expect.screenshot('social_add').to.be.captureSelector('#content', function (page) {
            page.click('[ng-click="showAddSocialForm(true)"]', 1500);
        }, done);
    });

    it('should save new social', function (done) {
        expect.screenshot('social_list_new').to.be.captureSelector('#content', function (page) {
            page.sendKeys("#socialName", 'test social', 150);
            page.sendKeys("#socialHost", 'randomsocial.com', 150);
            page.click('[onconfirm="addSocial()"] input', 1500);
        }, done);
    });

    it('should identify new social correct', function (done) {
        expect.screenshot('social_identify_new').to.be.captureSelector('#content', function (page) {
            page.sendKeys('[ng-model="urlToCheck"]', 'http://randomsocial.com/123');
            page.click('[onconfirm="checkResult()"] input', 1500);
        }, done);
    });

    it('should enable internal social network list correct', function (done) {
        expect.screenshot('social_enable').to.be.captureSelector('#content', function (page) {
            page.click('[ng-click="setUseDefaultSocials(1)"]', 1500);
        }, done);
    });

    it('should show remove search engine dialog correct', function (done) {
        expect.screenshot('social_remove_dialog').to.be.captureSelector('.modal.open', function (page) {
            page.click('[ng-click="removeSocial(host)"]', 1500);
        }, done);
    });

    it('should remove new search engine correct', function (done) {
        expect.screenshot('socials_list').to.be.captureSelector('#content', function (page) {
            page.click(".modal.open a>span:contains(Yes)", 1500);
        }, done);
    });
});
