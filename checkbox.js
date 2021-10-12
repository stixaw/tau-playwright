const { chromium } = require('playwright');
// playwright is asynchronous
// must use async/await pattern

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 1000 })
  const page = await browser.newPage()
  await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp')

  //check the second checkbox
  const checkboxes = await page.$$('input[type=checkbox]')

  await checkboxes[1].check()
  await checkboxes[0].uncheck()

  //check the second radial button
  const radials = await page.$$('input[type=radio]')
  await radials[1].check()
  await radials[0].uncheck()


  await browser.close()
})();