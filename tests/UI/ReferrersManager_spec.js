/*!
 * Matomo - free/libre analytics platform
 *
 * Screenshot tests for ReferrersManager plugin
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

describe("ReferrersManager", function () {
    this.timeout(0);

    this.fixture = "Piwik\\Plugins\\ReferrersManager\\tests\\Fixtures\\UITestFixture";

    async function checkUrl(url, page) {
        await page.evaluate(function(){
            $('.url-checker input[type=text]').val('');
        });
        await page.type('.url-checker input[type=text]', url);
        await page.click('.checkurlbutton input');
        await page.waitForNetworkIdle();
    }

    it('should load search engines list', async function () {
        await page.goto("?module=ReferrersManager&action=index&idSite=1&period=day&date=yesterday");
        await page.waitForNetworkIdle();
        expect(await page.screenshotSelector('#referrersmanage')).to.matchImage('searchengines_list');
    });

    it('should identify search engine correct', async function () {
        await checkUrl('http://www.google.com/xyz/?q=matomo', page);
        expect(await page.screenshotSelector('.url-checker')).to.matchImage('searchengines_identify');
    });

    it('should open add search engine form', async function () {
        await page.click('#searchengineTab .add-element');
        await page.waitForTimeout(250);
        expect(await page.screenshotSelector('#referrersmanage')).to.matchImage('searchengines_add');
    });

    it('should save new search engine', async function () {
        await page.type("#engineName", 'test');
        await page.type("#engineHost", 'randomhost.com');
        await page.type("#engineParameter", 'q,ghj');
        await page.click('#searchengineTab .matomo-save-button input[value=Save]');
        await page.waitForNetworkIdle();
        expect(await page.screenshotSelector('#referrersmanage')).to.matchImage('searchengines_list_new');
    });

    it('should identify new search engine correct', async function () {
        await checkUrl('http://randomhost.com/xyz/?ghj=matomo', page);
        expect(await page.screenshotSelector('.url-checker')).to.matchImage('searchengines_identify_new');
    });

    it('should show remove search engine dialog correct', async function () {
        await page.click('#searchengineTab .delete-element');
        await page.waitForTimeout(500); // wait for animation
        const modal = await page.$('.modal.open');
        expect(await modal.screenshot()).to.matchImage('searchengines_remove_dialog');
    });

    it('should remove new search engine correct', async function () {
        await (await page.jQuery(".modal.open a:contains(Yes)")).click();
        await page.waitForNetworkIdle();
        expect(await page.screenshotSelector('#referrersmanage')).to.matchImage('searchengines_list');
    });

    it('should switch to social networks list', async function () {
        await page.click('a[href="#socialTab"]');
        await page.mouse.click(0, 0);
        await page.waitForNetworkIdle();
        expect(await page.screenshotSelector('#referrersmanage')).to.matchImage('socials_list');
    });

    it('should identify social network correct', async function () {
        await checkUrl('http://twitter.com/tweet', page);
        expect(await page.screenshotSelector('.url-checker')).to.matchImage('social_identify');
    });

    it('should disable internal social network list correct', async function () {
        await page.click('#disablesocials');
        await page.waitForNetworkIdle();
        expect(await page.screenshotSelector('#referrersmanage')).to.matchImage('social_disable');
    });

    it('should identify social network correct', async function () {
        await checkUrl('http://twitter.com/tweet', page);
        expect(await page.screenshotSelector('.url-checker')).to.matchImage('social_identify_empty_list');
    });

    it('should open add social dialog', async function () {
        await page.click('#socialTab .add-element');
        await page.waitForTimeout(250);
        expect(await page.screenshotSelector('#referrersmanage')).to.matchImage('social_add');
    });

    it('should save new social', async function () {
        await page.type("#socialName", 'test social');
        await page.type("#socialHost", 'randomsocial.com');
        await page.click('#socialTab .matomo-save-button input[value=Save]');
        await page.waitForNetworkIdle();
        expect(await page.screenshotSelector('#referrersmanage')).to.matchImage('social_list_new');
    });

    it('should identify new social correct', async function () {
        await checkUrl('http://randomsocial.com/123', page);
        expect(await page.screenshotSelector('.url-checker')).to.matchImage('social_identify_new');
    });

    it('should enable internal social network list correct', async function () {
        await page.click('#enablesocials');
        await page.waitForNetworkIdle();
        expect(await page.screenshotSelector('#referrersmanage')).to.matchImage('social_enable');
    });

    it('should show remove social network dialog correct', async function () {
        await page.click('#socialTab .delete-element');
        await page.waitForTimeout(500); // wait for animation
        const modal = await page.$('.modal.open');
        expect(await modal.screenshot()).to.matchImage('social_remove_dialog');
    });

    it('should remove new social network correct', async function () {
        await (await page.jQuery(".modal.open a:contains(Yes)")).click();
        await page.waitForNetworkIdle();
        await page.waitForTimeout(100);
        expect(await page.screenshotSelector('#referrersmanage')).to.matchImage('socials_list');
    });
});
