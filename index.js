var webdriver = require('selenium-webdriver');

var username = process.env.BROWSERSTACK_USERNAME;
var accessKey = process.env.BROWSERSTACK_ACCESS_KEY;
var buildName = process.env.BROWSERSTACK_BUILD_NAME;
var browserstackLocal = process.env.BROWSERSTACK_LOCAL;
var browserstackLocalIdentifier = process.env.BROWSERSTACK_LOCAL_IDENTIFIER;



var capabilities = {
	'device' : 'iPhone 11',
	'realMobile' : 'true',
	'os_version' : '14.0',
	'browserName' : 'iPhone',
	"name": "BStack -[iPhone] Localtesting", // test name
	"build" : buildName, // CI/CD job name using BROWSERSTACK_BUILD_NAME env variable
	"browserstack.local" : browserstackLocal,
	"browserstack.localIdentifier" : browserstackLocalIdentifier,
	"browserstack.user" : username,
	"browserstack.key" : accessKey
};

driver = new webdriver.Builder().usingServer('http://hub.browserstack.com/wd/hub').withCapabilities(capabilities).build();

var browserstack = require('browserstack-local');

driver.get('http://localhost:8080/')
console.log(driver.getTitle())
driver.quit()