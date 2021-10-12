const { chromium } = require('playwright');

// playwright is asynchronous
// must use async/await pattern

(async () => {
  let text
  const browser = await chromium.launch({ headless: false, slowMo: 1000 })
  const page = await browser.newPage()
  await page.goto('https://the-internet.herokuapp.com/dropdown')

  const dropDown = await page.$('#dropdown')

  //value
  await dropDown.selectOption({ value: '1' })

  //label
  await dropDown.selectOption({ label: 'Option 2' })

  //index
  await dropDown.selectOption({ index: 0 })


  //values inside the select
  const availableOptions = await dropDown.$$('option')
  for(let i; i<availableOptions.length; i++){
    text = await availableOptions[i].innerText()
    console.log(`Option ${i} is ${text}`)
  }

  await browser.close()
})();
