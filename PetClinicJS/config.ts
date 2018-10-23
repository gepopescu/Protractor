import {browser, Config} from "protractor";


export let config: Config  = {

    framework: 'jasmine',
    allScriptsTimeout: 15000,
    capabilities: {'browserName': 'chrome'},
    onPrepare: function () {
        browser.driver.manage().window().maximize();
        browser.manage().timeouts().setScriptTimeout(150000); //implicit wait
    },
    baseUrl: "http://bhdtest.endava.com/petclinic/",
    //baseUrl:"http://j3r3my.mywire.org:81/petclinic/",
    specs: ['Specs/Spec1.js','Specs/Spec2.js'],

    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 20000
    }
};