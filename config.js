exports.config = {
    framework: 'jasmine',
    directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['AAweb.js'],
    allScriptsTimeout: 30000,
    jasmineNodeOpts: {
      defaultTimeoutInterval: 40000
    },
    compilerOptions: {   
      "target": "ES2015"  
      }
  }