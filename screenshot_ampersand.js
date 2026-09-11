const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://localhost:3000/test_ampersand.html', { waitUntil: 'load' });
  await page.screenshot({ path: 'ampersand_test.png' });
  await browser.close();
})();
