const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  
  await page.goto('https://www.conejovalleycounseling.com/home', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'ref_full.png', fullPage: true });

  await page.goto('https://grow-my-therapy-ruby.vercel.app/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'clone_full.png', fullPage: true });

  await browser.close();
})();
