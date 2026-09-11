const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('file:///' + __dirname.replace(/\\/g, '/') + '/../public/test_ampersand.html', { waitUntil: 'load' });
  await page.screenshot({ path: 'ampersand_test2.png' });
  await browser.close();
})();
