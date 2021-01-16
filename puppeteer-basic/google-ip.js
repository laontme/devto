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
  const page = await browser.newPage();
  //create page(tab)
  await page.goto('https://google.com');
  //just visit google.com automatic
  await page.waitForSelector('.gLFyf.gsfi');
  //wait for element with `.gLFyf.gsfi` selector
  //is loaded
  await page.type('.gLFyf.gsfi', 'what is my ip');
  //type some text on `.gLFyf.gsfi` selector
  await page.keyboard.press('Enter');
  //press `enter` on page
  await page.waitForSelector('span[style="font-size:20px"]');
  //wait for element with `span[style="font-size:20px"]`
  //selector is loaded
  let ip = await page.$eval('span[style="font-size:20px"]', el => el.innerText)
  //execude code `el.innerText` on element
  //with `span[style="font-size:20px"]` selector
  //and put innerText of element in variable
  console.log(ip)
  await browser.close();
  //close browser
})();