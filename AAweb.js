const { browser, element } = require("protractor")



describe ("Testiranje web portala", function() {


function selectItem (product) {

    element.all(by.tagName("app-card")).each(function(item){

        item.element(by.css("h4 a")).getText().then(function(text){
       
       if (text == "Samsung Note 8") {
           item.element(by.css("button[class='btn btn-info']")).click();
       }
       
        })
       
       })

}




it ("Prvi test", function(){


//INPUT POLJA

browser.get("https://qaclickacademy.github.io/protocommerce/");
browser.driver.manage().window().maximize();
    
element(by.name("name")).sendKeys("Adi Smajic");
element(by.css("input[name='email']")).sendKeys("smajic45@hotmail.com");
element(by.id("exampleInputPassword1")).sendKeys("xxxxx");

element(by.id("exampleCheck1")).click();

element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();

element.all(by.name("inlineRadioOptions")).get(0).click();

element(by.buttonText("Submit")).click().then(function(){


element(by.css("div[class*='success']")).getText().then(function(text){

    console.log(text);

});

});


element(by.name("name")).clear();
element(by.name("name")).sendKeys("A").then(function(){

element(by.css("[class='alert alert-danger']")).getText().then(function(text){

    console.log(text);
})

})


//SHOP STRANICA

element(by.linkText("Shop")).click();
browser.waitForAngularEnabled(true);

   selectItem ("Samsung Note 8");
   selectItem ("Iphone X");


   element(by.css("a[class='nav-link btn btn-primary']")).getText().then(function(text){
       var res = text.split("(")
       expect(res[1].trim().charAt(0)).toBe("2");
   })






})











})

