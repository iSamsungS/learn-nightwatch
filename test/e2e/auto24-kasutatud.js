const conf = require("../../nightwatch.conf.js");

module.exports = {
  "Ekspress.ee": function (browser) {
    browser
      .setWindowSize(1200, 1200)
      .url("https://www.auto24.ee/kasutatud/kasutatud.php")
      .waitForElementVisible("body");

    // browser.element("css selector", "#searchParam-show_pictures", (result) => {
    //   console.log("result", result);
    // });

    browser.moveToElement('#searchParam-show_pictures', 0, 0).pause(3500);

    browser.elements(
      "css selector",
      "#searchParam-show_pictures:not(:checked)",
      (result) => {
        if (result.value.length === 1) {
          browser.click("#searchParam-show_pictures:not(:checked)");
        }
      },
    );

    browser.pause(3000).end();
  },
};
