var webdriver = require('selenium-webdriver');
const{Builder, By, Key, util} = require('selenium-webdriver');
// Input capabilities
var capabilities = {
 'os_version' : '10',
 'resolution' : '1920x1080',
 'browserName' : 'Chrome',
 'browser_version' : 'latest',
 'os' : 'Windows',
 'name': 'test 101', // test name
 'build': 'BStack Nikhil Testing 101', // CI/CD job or build name
 'browserstack.user' : 'BROWSERSTACK_USERNAME',
 'browserstack.key' : 'BROWSERSTACK_ACCESS_KEY'
}

var driver = new webdriver.Builder().usingServer('https://hub-cloud.browserstack.com/wd/hub').
withCapabilities(capabilities).build();


async function example() {
    // let driver = await new Builder().forBrowser('firefox').build();
    await driver.get("http://google.com");
    await driver.findElement(By.name("q")).sendKeys("hopes it works",Key.RETURN);
}
example();
// setTimeout(function(){ driver.quit(); }, 000);