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
	"browserstack.local" : browserstackLocal,
	"browserstack.localIdentifier" : browserstackLocalIdentifier,
	"browserstack.user" : username,
	"browserstack.key" : accessKey
};

driver = new webdriver.Builder().usingServer('http://hub.browserstack.com/wd/hub').withCapabilities(capabilities).build();

var browserstack = require('browserstack-local');

//creates an instance of Local
var bs_local = new browserstack.Local();

// replace <browserstack-accesskey> with your key. You can also set an environment variable - "BROWSERSTACK_ACCESS_KEY".
var bs_local_args = { 'key': '<browserstack.key>' };

// starts the Local instance with the required arguments
bs_local.start(bs_local_args, function() {
  console.log("Started BrowserStackLocal");
});

// check if BrowserStack local instance is running
console.log(bs_local.isRunning());

// stop the Local instance
bs_local.stop(function() {
  console.log("Stopped BrowserStackLocal");
});