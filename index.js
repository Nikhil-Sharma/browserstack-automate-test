var webdriver = require('selenium-webdriver');

var username = process.env.BROWSERSTACK_USERNAME;
var accessKey = process.env.BROWSERSTACK_ACCESS_KEY;
var buildName = process.env.BROWSERSTACK_BUILD_NAME;
var browserstackLocal = process.env.BROWSERSTACK_LOCAL;
var browserstackLocalIdentifier = process.env.BROWSERSTACK_LOCAL_IDENTIFIER;



var capabilities = {
	'os_version' : '10',
	'resolution' : '1920x1080',
	'browserName' : 'Chrome',
	'browser_version' : 'latest',
	'os' : 'Windows',
	"name": "BStack -[Jenkins] Localtesting", // test name
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