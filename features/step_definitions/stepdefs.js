require('chromedriver');
const assert = require('assert');
const { Given, When, Then, setDefaultTimeout, After, AfterAll, Before } = require('cucumber');
var webdriver = require('selenium-webdriver');

const { By } = require('selenium-webdriver');

var driver;

setDefaultTimeout(30 * 1000);

Before( function() {
    driver = new webdriver.Builder().forBrowser("chrome").build();
});

Given(/^navigate to the homepage$/, async function() {
    await driver.sleep(2000);
    return driver.get("https://transportnsw.info/trip");
});

When(/^enter the text "([^"]*)" into the "([^"]*)" field$/, async function (input, field) {
    await driver.sleep(2000);
    return driver.findElement({ id: "tni" + field + "TripLocation" }).sendKeys(input);
});

Then(/^click the "([^"]*)" button$/, async function (button) {
    await driver.sleep(2000);
    return driver.findElement(By.xpath('//button[text() = "' + button + '"]')).click();

});

When(/^press the enter button$/, async function () {
    await driver.sleep(2000);
    return driver.findElement({ id: "tniFromTripLocation" }).sendKeys(webdriver.Key.ENTER);
});


Then(/^should see "([^"]*)" or more trips displayed$/, async function (number) {
    await driver.sleep(2000);
    let results = await driver.findElements({ className: "collapsible-card-details-header" });
    return assert.ok(results.length >= number);
    
});

After(function(scenario,done)
{
    const world = this;
    if (scenario.result.status === 'failed') {
        driver.takeScreenshot().then(function (stream) {
            let decodedImage = new Buffer(stream.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');
            world.attach(decodedImage, 'image/png');
        }).then(function () {
            driver.quit();
            done();
        });
    }else {
        driver.quit();
        done();
    }
});

