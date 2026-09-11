const https = require('https');

const candidates = {
  hero: [
    'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80', // ocean
    'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?auto=format&fit=crop&q=80', // boardwalk
    'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80'  // boardwalk
  ],
  intro: [
    'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&q=80' // aerial water
  ],
  anxiety: [
    'https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&q=80', // subtle stress
    'https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?auto=format&fit=crop&q=80' // man looking out window
  ],
  trauma: [
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80', // rugged coast
    'https://images.unsplash.com/photo-1440778182580-4dbb64ab5116?auto=format&fit=crop&q=80'  // Big Sur coastline
  ],
  burnout: [
    'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80'
  ],
  about: [
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80', // cozy therapy couch
    'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80'  // warm plant interior
  ],
  ctaLeft: [
    'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80'
  ],
  ctaRight: [
    'https://images.unsplash.com/photo-1518182170546-076616fdcb18?auto=format&fit=crop&q=80'
  ]
};

function check(name, list) {
  if (list.length === 0) return;
  const url = list.shift();
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      console.log('SUCCESS ' + name + ' : ' + url);
    } else if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      list.unshift(res.headers.location);
      check(name, list);
    } else {
      check(name, list);
    }
  }).on('error', () => check(name, list));
}

Object.entries(candidates).forEach(([name, list]) => check(name, list));
