var webdriver = require('selenium-webdriver');
const{Builder, By, Key, util} = require('selenium-webdriver');

var username = process.env.BROWSERSTACK_USERNAME;
var accessKey = process.env.BROWSERSTACK_ACCESS_KEY;
var buildName = process.env.BROWSERSTACK_BUILD_NAME;
var browserstackLocal = process.env.BROWSERSTACK_LOCAL;
var browserstackLocalIdentifier = process.env.BROWSERSTACK_LOCAL_IDENTIFIER;

// Input capabilities
var capabilities = {
 'os_version' : '10',
 'resolution' : '1920x1080',
 'browserName' : 'Chrome',
 'browser_version' : 'latest',
 'os' : 'Windows',
 'name': 'test Jenkins', // test name
 "build" : buildName, // CI/CD job name using BROWSERSTACK_BUILD_NAME env variable
 "browserstack.local" : browserstackLocal,
 "browserstack.localIdentifier" : browserstackLocalIdentifier,
 "browserstack.user" : username,
 "browserstack.key" : accessKey
}

var driver = new webdriver.Builder().
  usingServer("https://hub-cloud.browserstack.com/wd/hub").
  withCapabilities(capabilities).
  build();

async function example() {
    await driver.get("http://google.com");
    await driver.findElement(By.name("q")).sendKeys("Jenkins",Key.RETURN);
}
example();