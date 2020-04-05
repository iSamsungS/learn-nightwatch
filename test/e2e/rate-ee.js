const config = require("../../nightwatch.conf.js");

module.exports = {
  "Postkast login test": function (browser) {
    browser
      .url('https://rate.ee/login')
      .waitForElementVisible("body", 2000) // css
      .click('a.icn-messages') // css
      .waitForElementVisible("body", 2000) // css
      .assert.containsText("body", "Seda lehte näevad ainult registreeritud kasutajad.") // css
      .saveScreenshot(`${config.imgpath(browser)}rate-ee-postkast.png`)
      .end();
  },
};

//  * Open -> https://rate.ee/login
//  * click "Kirjakast" icon
//  * check that error "Seda lehte näevad ainult registreeritud kasutajad." is visible
