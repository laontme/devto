# Puppeteer introducing
Puppeteer is a Node library that provides a high-level API to control Chromium, Chrome, or Firefox.

## Cases
1. Automatic account registration
1. Scrap info from sites different difficulty
1. Generate screenshots and PDF of pages
1. Automatic tests of sites

The puppeteer is very powerful. He can do everything the same as a people, but we will only consider web-scrapping

## Installation
By default, puppeteer comes with Chromium, but you can use another browser.

Create a folder for your project
```bash
mkdir puppeteer
```
init node project
```bash
yarn init
```
and install puppeteer with
```bash
yarn add puppeteer
```
Puppeteer is now installed, and we ready for coding.

## Example
Create the main source file `example.js` with this content:
```js
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
```

And run with `node example`. You can see Chromium browser with [dev.to](https://dev.to)

But what is `async` and `await`? Each puppeteer method is promise and you can use with

```js
const puppeteer = require('puppeteer');

puppeteer
.launch({
  headless: false,
  defaultViewport: null
})
.then(browser => browser.newPage())
.then(page => page.goto('https://dev.to'));
```

But the first example more comfortable, and I prefer to use it

## Find selectors
To find the desired selector, you need to right-click on the element and click "Inspect". This requires basic knowledge of HTML and CSS. But you can use Firefox and extension [SelectorsHub](https://selectorshub.com/)


## Type and click
Ok, let's steal our IP from Google
```js
await page.goto('https://google.com');
//just visit google.com automatic
await page.waitForSelector('.gLFyf.gsfi');
//wait for element with `.gLFyf.gsfi` selector
//is loaded
await page.type('.gLFyf.gsfi', 'what is my ip');
await page.keyboard.press('Enter');
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
```

Save `ip-google.js` file and run with `node ip-google`. Few seconds later you can see your ip in console

## Bonus. Understanding `(async () => {})()`
My first reaction when I saw `(async () => {})()` was "wtf is this"

```js
function someFunction() {}
//simple
```

Could it be shorter?

```js
function () {}
//anonymous function
```

But how to use `await` in function?

```js
async function () {}
//async function
```

Could it be shorter?

```js
async () => {}
//arrow function
```

Inline execute?

```js
(async () => {})()
//execute
```

This function is asynchronous, allows `await`, and is executed immediately. That's all

## Bonus. Repo with code

All code from this guide hosted on [GitHub](https://github.com/laontme/devto/tree/main/puppeteer-introducing)
