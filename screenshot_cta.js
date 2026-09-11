const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 2048, height: 688 }); // User mentioned 1776px
  await page.goto('http://localhost:3000', { waitUntil: 'load', timeout: 30000 });
  await page.evaluate(() => {
    const s = Array.from(document.querySelectorAll('section')).find(s => s.textContent.includes('SCHEDULE AN APPOINTMENT'));
    if (s) {
      s.scrollIntoView({ block: 'start' });
    }
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'cta_screenshot.png' });
  await browser.close();
})();
