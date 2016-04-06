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
        }, done);
    });

    it('should identify search engine correct', function (done) {
        expect.screenshot('searchengines_identify').to.be.captureSelector('#content', function (page) {
            page.sendKeys("#urlToCheck", 'http://www.google.com/xyz/?q=piwik');
            page.click("#checkurl", 1000);
        }, done);
    });

    it('should open add search engine dialog', function (done) {
        expect.screenshot('searchengines_add').to.be.captureSelector('.ui-dialog', function (page) {
            page.click("[role=addEngine]", 500);
        }, done);
    });

    it('should save new search engine', function (done) {
        expect.screenshot('searchengines_list_new').to.be.captureSelector('#content', function (page) {
            page.sendKeys("#engineName", 'test', 150);
            page.sendKeys("#engineHost", 'randomhost.com', 150);
            page.sendKeys("#engineParameter", 'q,ghj', 150);
            page.click('[role="submitAddEngine"]', 150);
        }, done);
    });

    it('should identify new search engine correct', function (done) {
        expect.screenshot('searchengines_identify_new').to.be.captureSelector('#content', function (page) {
            page.sendKeys("#urlToCheck", 'http://randomhost.com/xyz/?ghj=piwik');
            page.click("#checkurl", 1000);
        }, done);
    });

    it('should show remove search engine dialog correct', function (done) {
        expect.screenshot('searchengines_remove_dialog').to.be.captureSelector('.ui-dialog', function (page) {
            page.click("[role=removeEngine]", 500);
        }, done);
    });

    it('should remove new search engine correct', function (done) {
        expect.screenshot('searchengines_list').to.be.captureSelector('#content', function (page) {
            page.click(".ui-dialog button>span:contains(Yes)", 500);
        }, done);
    });

    it('should switch to social networks list', function (done) {
        expect.screenshot('socials_list').to.be.captureSelector('#content', function (page) {
            page.click('a[href="#socialTab"]');
        }, done);
    });

    it('should identify social network correct', function (done) {
        expect.screenshot('social_identify').to.be.captureSelector('#content', function (page) {
            page.sendKeys("#urlToCheck", 'http://twitter.com/tweet');
            page.click("#checkurl", 1000);
        }, done);
    });

    it('should disable internal social network list correct', function (done) {
        expect.screenshot('social_disable').to.be.captureSelector('#content', function (page) {
            page.click("a[role=noDefaultSocials]", 1000);
        }, done);
    });

    it('should identify social network correct', function (done) {
        expect.screenshot('social_identify_empty_list').to.be.captureSelector('#content', function (page) {
            page.sendKeys("#urlToCheck", 'http://twitter.com/tweet');
            page.click("#checkurl", 1000);
        }, done);
    });

    it('should open add social dialog', function (done) {
        expect.screenshot('social_add').to.be.captureSelector('.ui-dialog', function (page) {
            page.click("[role=addSocial]", 500);
        }, done);
    });

    it('should save new social', function (done) {
        expect.screenshot('social_list_new').to.be.captureSelector('#content', function (page) {
            page.sendKeys("#socialName", 'test social', 150);
            page.sendKeys("#socialHost", 'randomsocial.com', 150);
            page.click('[role="submitAddSocial"]', 150);
        }, done);
    });

    it('should identify new social correct', function (done) {
        expect.screenshot('social_identify_new').to.be.captureSelector('#content', function (page) {
            page.sendKeys("#urlToCheck", 'http://randomsocial.com/123');
            page.click("#checkurl", 1000);
        }, done);
    });

    it('should enable internal social network list correct', function (done) {
        expect.screenshot('social_enable').to.be.captureSelector('#content', function (page) {
            page.click("a[role=noDefaultSocials]", 1000);
        }, done);
    });

    it('should show remove search engine dialog correct', function (done) {
        expect.screenshot('social_remove_dialog').to.be.captureSelector('.ui-dialog', function (page) {
            page.click("[role=removeSocial]", 500);
        }, done);
    });

    it('should remove new search engine correct', function (done) {
        expect.screenshot('socials_list').to.be.captureSelector('#content', function (page) {
            page.click(".ui-dialog button>span:contains(Yes)", 500);
        }, done);
    });
});
