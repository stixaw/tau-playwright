const { chromium } = require('playwright');
// playwright is asynchronous
// must use async/await pattern

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 1000 })
  const page = await browser.newPage()
  await page.goto('https://www.demoqa.com/alerts')

  // code to handles alerts
  await page.click('#confirmButton')

  await page.click('#promtButton')

  await browser.close()
})();