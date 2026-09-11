const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  const viewports = [1440, 1920];

  for (const vw of viewports) {
    await page.setViewport({ width: vw, height: 900 });
    await page.goto('http://127.0.0.1:3000', { waitUntil: 'load', timeout: 30000 });

    const m = await page.evaluate(function() {
      var sections = Array.from(document.querySelectorAll('section'));
      var section = sections.find(function(s) { return s.textContent.indexOf('holding onto hope') !== -1; });
      if (!section) return { error: 'HopeSection not found' };

      var sr = section.getBoundingClientRect();
      var h2 = section.querySelector('h2');
      var h2r = h2 ? h2.getBoundingClientRect() : null;
      var h2Style = h2 ? window.getComputedStyle(h2) : null;

      // Find grid container (may use inline style display:grid, not .grid class)
      var allDivs = Array.from(section.querySelectorAll('div'));
      var gridEl = allDivs.find(function(d) {
        return window.getComputedStyle(d).display === 'grid';
      });
      var gridCols = gridEl ? Array.from(gridEl.children) : [];

      // Find the image wrapper
      var imgEl = section.querySelector('img');
      var imgWrap = imgEl ? imgEl.parentElement : null;
      var imgr = imgWrap ? imgWrap.getBoundingClientRect() : null;

      // Check body text font
      var bodyP = section.querySelectorAll('p');
      var bodyFonts = [];
      bodyP.forEach(function(p) {
        var cs = window.getComputedStyle(p);
        bodyFonts.push({
          text: p.textContent.substring(0, 40),
          fontFamily: cs.fontFamily.substring(0, 60),
          textTransform: cs.textTransform
        });
      });

      return {
        vp: window.innerWidth,
        sectionHeight: Math.round(sr.height),
        h2: h2r ? {
          left: Math.round(h2r.left),
          topFromSection: Math.round(h2r.top - sr.top),
          width: Math.round(h2r.width),
          height: Math.round(h2r.height),
          fontSize: h2Style ? h2Style.fontSize : null,
          lineCount: h2r ? Math.round(h2r.height / parseFloat(h2Style.lineHeight || h2Style.fontSize)) : null
        } : null,
        col1: gridCols[0] ? {
          left: Math.round(gridCols[0].getBoundingClientRect().left),
          width: Math.round(gridCols[0].getBoundingClientRect().width)
        } : null,
        col2: gridCols[1] ? {
          left: Math.round(gridCols[1].getBoundingClientRect().left),
          width: Math.round(gridCols[1].getBoundingClientRect().width)
        } : null,
        image: imgr ? {
          left: Math.round(imgr.left),
          right: Math.round(imgr.right),
          width: Math.round(imgr.width),
          height: Math.round(imgr.height),
          topFromSection: Math.round(imgr.top - sr.top)
        } : null,
        bodyFonts: bodyFonts.slice(0, 4)
      };
    });

    console.log('\n=== HopeSection AT ' + vw + 'px ===');
    console.log(JSON.stringify(m, null, 2));
  }

  // Take screenshot at 1920px
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://127.0.0.1:3000', { waitUntil: 'load', timeout: 30000 });

  // Scroll to hope section
  await page.evaluate(function() {
    var sections = Array.from(document.querySelectorAll('section'));
    var section = sections.find(function(s) { return s.textContent.indexOf('holding onto hope') !== -1; });
    if (section) section.scrollIntoView({ block: 'start' });
  });
  await new Promise(function(r) { setTimeout(r, 500); });
  await page.screenshot({ path: 'hope_section_screenshot.png', fullPage: false });
  console.log('\nScreenshot saved: hope_section_screenshot.png');

  await browser.close();
})();


