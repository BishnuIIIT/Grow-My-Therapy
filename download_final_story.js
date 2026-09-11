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
      urls.unshift(res.headers.location);
      download(name, urls);
    } else {
      console.log('Failed ' + name + ' (' + res.statusCode + '), trying next...');
      download(name, urls);
    }
  });
}

// 1. HERO: California boardwalk -> ocean
download('hero.jpg', [
  'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?auto=format&fit=crop&q=80', // boardwalk to beach
  'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80', // boardwalk pier
  'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80'  // abstract ocean (fallback)
]);

// 2. INTRO: Abstract aerial water
download('intro.jpg', [
  'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&q=80'
]);

// 3. ANXIETY: Quiet real human moment — subtle anxiety/stress
download('service-anxiety.jpg', [
  'https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&q=80', // woman resting head on hands
  'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?auto=format&fit=crop&q=80'  // man looking out window
]);

// 4. TRAUMA: Calm natural environment / California coastline
download('service-trauma.jpg', [
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80', // rugged coast / mountains
  'https://images.unsplash.com/photo-1440778182580-4dbb64ab5116?auto=format&fit=crop&q=80'  // Big Sur
]);

// 5. BURNOUT: Warm hills/sunset
download('service-burnout.jpg', [
  'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80'
]);

// 6. ABOUT: Beautiful real therapy room
download('about.jpg', [
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80', // beautiful modern living room/couch
  'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80'  // warm plant interior
]);

// 7. CTA LEFT: Warm minimalist interior
download('cta-left.jpg', [
  'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80'
]);

// 8. CTA RIGHT: Abstract slate-blue water
download('cta-right.jpg', [
  'https://images.unsplash.com/photo-1518182170546-076616fdcb18?auto=format&fit=crop&q=80', // slate blue waves
  'https://images.unsplash.com/photo-1495954484750-af469f2f9be5?auto=format&fit=crop&q=80'  // ocean ripples
]);
