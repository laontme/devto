const puppeteer = require('puppeteer');

puppeteer
  .launch({
    headless: false,
    defaultViewport: null
  })
  .then(browser => browser.newPage())
  .then(page => page.goto('https://dev.to'));