const { chromium } = require('playwright');
// playwright is asynchronous
// must use async/await pattern

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 1000 })
  const page = await browser.newPage()
  await page.goto('https://www.apronus.com/music/lessons/unit01.htm')

  // page.click() expects a string for the selector not an object so this will fail
  // const lowerC = page.$('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button')
  // await page.click(lowerC)

  await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button')
  await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(3) > button')
  await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5) > button')
  await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(6) > button')
  await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8) > button')
  await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(10) > button')
  await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(12) > button')
  await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(13) > button')

  await browser.close()
})();
