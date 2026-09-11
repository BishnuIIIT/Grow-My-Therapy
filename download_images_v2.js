const fs = require('fs');
const https = require('https');
const images = {
  'hero.jpg': 'https://images.unsplash.com/photo-1495954484750-af469f2f9be5?auto=format&fit=crop&q=80',
  'intro.jpg': 'https://images.unsplash.com/photo-1515005856417-640f09a1506b?auto=format&fit=crop&q=80',
  'service-burnout.jpg': 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80',
  'cta-left.jpg': 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80',
  'cta-right.jpg': 'https://images.unsplash.com/photo-1518182170546-076616fdcb18?auto=format&fit=crop&q=80'
};
Object.entries(images).forEach(([name, url]) => {
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      const filePath = 'public/images/' + name;
      console.log('Downloading ' + filePath);
      res.pipe(fs.createWriteStream(filePath));
    } else {
      console.log('Failed ' + name + ' : ' + res.statusCode);
    }
  });
});
