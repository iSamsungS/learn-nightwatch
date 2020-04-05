const config = require("../../nightwatch.conf.js");

module.exports = {
  // addapted from: https://git.io/vodU0
  "@tags": ["guineaPig"],
  "Guinea Pig Assert Title": function (browser) {
    browser
      .url("https://saucelabs.com/test/guinea-pig")
      .waitForElementVisible("body")
      .assert.title("I am a page title - Sauce Labs")
      .saveScreenshot(`${config.imgpath(browser)}a-screenshot-description.png`);

    // document.querySelectorAll('#checked_checkbox:checked')
    browser.expect.element("#checked_checkbox:checked").to.be.present;

    // document.querySelectorAll('#unchecked_checkbox:not(:checked)')
    browser.expect.element("#unchecked_checkbox:not(:checked)").to.be.present;

    browser.expect.element("div#no-element-like-this").not.to.be.present;

    browser.assert.value("input#i_am_a_textbox", "i has no focus");

    browser
      .useXpath()
      // $x("//div[text()='i appear 3 times'][3]")
      .expect.element("//div[text()='i appear 3 times'][3]").to.be.present;

    browser.useCss();

    browser
      .pause(2000)
      .clearValue('#i_am_a_textbox')
      .setValue('#i_am_a_textbox', '00000000000')
      .pause(2000)
      .clearValue('#i_am_a_textbox')
      .setValue('#i_am_a_textbox', '11111111111111')
      .pause(2000)
      .clearValue("#i_am_a_textbox")
      .setValue("#i_am_a_textbox", "nightwatch roolz!")
      .saveScreenshot(`${config.imgpath(browser)}nightwatch-roolz.png`)
      .end();
  },
};
