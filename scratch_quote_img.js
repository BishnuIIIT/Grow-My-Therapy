const https = require('https');
https.get('https://www.conejovalleycounseling.com/home', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Find "You deserve a place"
    const idx = data.indexOf('You deserve a place');
    if (idx > -1) {
      // Get the 3000 chars before the quote, where the section's background image usually is
      const precedingHtml = data.substring(Math.max(0, idx - 4000), idx);
      // Find all image URLs in that chunk
      const imgMatches = precedingHtml.match(/https:\/\/images\.squarespace-cdn\.com\/[^\s\"\'\?]+/g);
      if (imgMatches) {
        console.log("Found images before quote:");
        // Print unique URLs
        console.log([...new Set(imgMatches)]);
      }
    }
  });
});
