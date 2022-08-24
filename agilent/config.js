exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['login.js'],
    allScriptsTimeout: 30000,
    jasmineNodeOpts: {
      defaultTimeoutInterval: 40000
    },
    compilerOptions: {   
      "target": "ES2015"  
      }
    }