const fs = require('fs');
const https = require('https');
const images = {
  'cta-left.jpg': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80',
  'cta-right.jpg': 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80',
  'hero.jpg': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
  'intro.jpg': 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80',
  'about.jpg': 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
  'service-anxiety.jpg': 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&q=80',
  'service-trauma.jpg': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80',
  'service-burnout.jpg': 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80'
};
Object.entries(images).forEach(([name, url]) => {
  https.get(url, (res) => {
    const filePath = 'public/images/' + name;
    console.log('Downloading ' + filePath);
    res.pipe(fs.createWriteStream(filePath));
  });
});
