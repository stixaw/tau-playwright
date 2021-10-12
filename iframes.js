const { chromium } = require('playwright');
// playwright is asynchronous
// must use async/await pattern

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 1000 })
  const page = await browser.newPage()
  await page.goto('https://www.demoqa.com/frames')

//logic to handle the iframes .frame requires a name or a url in regexp
  const frame1 = await page.frame({url: /\/sample/})
  const h1Element = await frame1.$('h1')
  console.log(await h1Element.innerText())



  await browser.close()
})();