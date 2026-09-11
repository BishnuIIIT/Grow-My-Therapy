const fs = require('fs');
const https = require('https');

function download(name, urls) {
  if (urls.length === 0) return;
  const url = urls.shift();
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      console.log('Downloading ' + name);
      res.pipe(fs.createWriteStream('public/images/' + name));
    } else if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      urls.unshift(res.headers.location);
      download(name, urls);
    } else {
      download(name, urls);
    }
  });
}

// Hero: Bright, realistic, clinical modern office / waiting area
download('hero.jpg', [
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80'
]);

// Trauma: A grounded, highly realistic empty therapy armchair in a quiet room
download('service-trauma.jpg', [
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80'
]);
