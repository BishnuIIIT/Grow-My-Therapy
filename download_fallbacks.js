const fs = require('fs');
const https = require('https');

function download(name, urls) {
  if (urls.length === 0) {
    console.log('Failed all for ' + name);
    return;
  }
  const url = urls.shift();
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      console.log('Downloading ' + name + ' from ' + url.split('?')[0]);
      res.pipe(fs.createWriteStream('public/images/' + name));
    } else if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      // follow redirect
      urls.unshift(res.headers.location);
      download(name, urls);
    } else {
      console.log('Failed ' + name + ' (' + res.statusCode + '), trying next...');
      download(name, urls);
    }
  });
}

// Alternative images for Intro (coastal grass/nature)
const introUrls = [
  'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&q=80', // abstract water
  'https://images.unsplash.com/photo-1473496169904-658ba37448eb?auto=format&fit=crop&q=80', // broken
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80'  // original chair (fallback)
];

// Alternative images for CTA Right (abstract slate water/nature)
const ctaRightUrls = [
  'https://images.unsplash.com/photo-1495954484750-af469f2f9be5?auto=format&fit=crop&q=80', // same as hero (fallback)
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80'  // original desk (fallback)
];

download('intro.jpg', introUrls);
download('cta-right.jpg', ctaRightUrls);
