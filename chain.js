describe ("Ovo je Test Suite",  function(){


it ("Ovo je Test Case", function() {

    browser.get('https://juliemr.github.io/protractor-demo/');
    element(by.model("first")).sendKeys("3");
    element(by.model("second")).sendKeys("5");
    element(by.id("gobutton")).click();

    element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text) {

            console.log(text);


    });




})







})