let homepage =function(){
    const firstNumber = element(by.model('first'));
    const secondNumber = element(by.model('second'));
    const goClick = element(by.css('[ng-click="doAddition()"]'));

    this.getUrl=function(url){
        browser.get(url);
    };
    

    this.enterFirstNumber= function(fN){
        firstNumber.sendKeys(fN);
    }

    this.enterSecondNumber= function(sN){
        secondNumber.sendKeys(sN);
    }

    this.clickGo = function(){goClick.click()};

    this.verifyResult=function(result){
        let output =element(by.cssContainingText('.ng-binding',result));
        expect(output.getText()).toEqual(result);
    }
};

module.exports= new homepage();