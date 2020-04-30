const conf = require("../../nightwatch.conf.js");

module.exports = {
  "Ekspress.ee": function (browser) {
    browser
      .setWindowSize(1200, 1200)
      .url("https://www.auto24.ee/kasutatud/kasutatud.php")
      .waitForElementVisible("body");


    // browser.click('#searchParam-show_pictures').pause(1500);

    // browser.element("css selector", "#searchParam-show_pictures", (result) => {
    //   console.log("result", result);
    // });

    browser.moveToElement("#searchParam-show_pictures", 0, 0).pause(3500);

    browser.elements(
      "css selector",
      "#searchParam-show_pictures:not(:checked)",
      (result) => {
        console.log("count", result.value.length);
        if (result.value.length === 1) {
          console.log("-click");
          browser.click("#searchParam-show_pictures:not(:checked)");
        }
      },
    );

    console.log("a");
    browser.waitForElementVisible("#searchParam-show_pictures:checked");
    console.log("b");

    browser.pause(3000).end();
  },
};
