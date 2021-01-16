const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    //by default puppeteer run in headless
    //this option disable headless and you
    //can view browser instead of headless
    defaultViewport: null
    //by default puppeteer run with non-default viewport
    //this option enable your default viewport
  });
  //create puppeteer browser instance
  //you can run more browsers with
  //const browser2 = await puppeteer.launch();
  const page = await browser.newPage();
  //create page(tab)
  //more pages with
  //const page2 = await browser.newPage();
  await page.goto('https://dev.to');
  //just visit dev.to automatic
})();