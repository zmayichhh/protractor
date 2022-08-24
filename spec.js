const exp = require("constants");
const { browser } = require("protractor");

describe ("Ovo je Test Suite",  function(){


it ("Ovo je Test Case", async () => {

    browser.get('https://juliemr.github.io/protractor-demo/');
    element(by.model("first")).sendKeys("5");
    element(by.model("second")).sendKeys("5");
    browser.sleep(5000);
    element(by.id("gobutton")).click();
    element(by.css("h2[class='ng-binding']")).getText().then(function(text) {

        expect(text).toBe("12");

    });
    






})
})