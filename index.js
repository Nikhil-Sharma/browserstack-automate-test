var username = process.env.BROWSERSTACK_USERNAME;
var accessKey = process.env.BROWSERSTACK_ACCESS_KEY;
var buildName = process.env.BROWSERSTACK_BUILD_NAME;
var browserstackLocal = process.env.BROWSERSTACK_LOCAL;
var browserstackLocalIdentifier = process.env.BROWSERSTACK_LOCAL_IDENTIFIER;
var webdriver = require('selenium-webdriver');


var capabilities = {
	"os" : "Windows",
	"os_version" : "10",
	"browser" : "chrome",
	"browser_version" : "latest",
	"name": "BStack -[Jenkins] Localtesting", // test name
	"build" : buildName, // CI/CD job name using BROWSERSTACK_BUILD_NAME env variable
	"browserstack.local" : True,
	"browserstack.localIdentifier" : browserstackLocalIdentifier,
	"browserstack.user" : username,
	"browserstack.key" : accessKey
};

driver = new webdriver.Builder().usingServer('http://hub.browserstack.com/wd/hub').withCapabilities(capabilities).build();

var browserstack = require('browserstack-local');

driver.get('http://localhost:8080/')
print(driver.title)
driver.quit()