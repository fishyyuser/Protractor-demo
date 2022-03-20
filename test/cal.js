let homepage=require('../pages/homepage');

describe('calculator tests', () => {

    it('addtion test', () => {
        homepage.getUrl('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('5');

        homepage.enterSecondNumber('6');

        homepage.clickGo();

        homepage.verifyResult('11');

        browser.sleep(1500)
    });

  });