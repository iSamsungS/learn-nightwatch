const config = require("../../nightwatch.conf.js");

module.exports = {
  "Riik ja Ühiskond -> Valitsus": function (browser) {
    browser
      .url("https://www.neti.ee/")
      .waitForElementVisible("body", 2000) // css
      .assert.containsText("body", "Riik ja Ühiskond") // css
      .useXpath()
      .assert.containsText("//a[@href='/cgi-bin/teema/RIIK_JA_YHISKOND/Valitsus/']", "Valitsus") // xpath
      .saveScreenshot(`${config.imgpath(browser)}neti-ee.png`)
      .click("//a[@href='/cgi-bin/teema/RIIK_JA_YHISKOND/Valitsus/']") // xpath
      .useCss()
      .waitForElementVisible("body", 500) // css
      .assert.containsText("body", "Ametlikud Teadaanded (AT)") // css
      .saveScreenshot(`${config.imgpath(browser)}neti-ee-valitsus.png`)
      .end();
  },
  "Meelelahutus ja Hobid": function (browser) {
    browser
      .url("https://www.neti.ee/")
      .waitForElementVisible("body", 2000) // css
      .assert.containsText("body", "Meelelahutus ja Hobid") // css
      .end();
  },
};
