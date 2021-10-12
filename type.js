const { chromium } = require('playwright');
// playwright is asynchronous
// must use async/await pattern

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 1000 })
  const page = await browser.newPage()
  await page.goto('https://the-internet.herokuapp.com/forgot_password')
  const emailInput = await page.$('#email')
  //this command will literally type one letter at a time
  // await emailInput.type('something.com', { delay: 5 })

  //this will just put the text in the field
  await emailInput.fill('ixchel@mail.com')

  await browser.close()
})();