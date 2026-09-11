const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://localhost:3000', { waitUntil: 'load', timeout: 30000 });
  await page.evaluate(() => {
    const s = Array.from(document.querySelectorAll('section')).find(s => s.textContent.includes('holding onto hope'));
    if (s) s.scrollIntoView({ block: 'center' });
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'hope_screenshot.png' });
  await browser.close();
})();
