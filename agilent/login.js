const { element, browser } = require("protractor");

    let weblink = "https://qaeu-ac-portal.cpdevcds.com/ac-instruments";
    let username = "sidqawadautomation+adi-superuser@gmail.com";
    let password = "Adi-1234";
    let usernamelocator = "signInFormUsername";
    let passwordlocator = "signInFormPassword";



describe ("Protractor login function", function() {


    function loginPage() {

    browser.waitForAngularEnabled(false);
    browser.get(weblink);
    browser.driver.manage().window().maximize();

    element.all(by.css("input[id='signInFormUsername']")).get(1).sendKeys(username);
    element.all(by.css("input[id='signInFormPassword']")).get(1).sendKeys(password);
    
    element(by.css("div[class*='visible-lg'] input[name='signInSubmitButton']")).click();
    browser.sleep(4000);

    return true;

    }



it ("Open the webpage", function() {

   let valid = loginPage();
   expect(valid).toBe(true);

   console.log(valid);


})


})

