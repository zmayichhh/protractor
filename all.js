const { element } = require("protractor");

describe ("Ovo je Test Suite",  function(){



    function sabiranje(a,b,c)

    {
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);

        element.all(by.tagName("option")).each(function(svaki) {

        svaki.getAttribute("value").then(function (elemenat) {

            if (elemenat == c) 
            elemenat.click();

        })
        })
        
        element(by.id("gobutton")).click();
    }


    it ("Ovo je Test Case", function() {
    
        browser.get('https://juliemr.github.io/protractor-demo/');
        sabiranje(5,3, "ADDITION");
        sabiranje(7,8, "bababa");
        sabiranje(10,1, "heaheah");
    
        element.all(by.repeater("result in memory")).count().then(function(number) {

            console.log(number);
        });

         element.all(by.repeater("result in memory")).each(function(svaki) {

            svaki.element(by.css("td:nth-child(3)")).getText().then(function(text){

                console.log(text);
            })
        });
    
    })

    })