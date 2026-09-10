const https = require('https');
const ids = [4, 7, 13, 14, 15];
ids.forEach(id => {
  https.get(`https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/b8b8b8b8-b8b8-b8b8-b8b8-b8b8b8b8b8b8/Jennifer+A+-+Images+%28${id}%29.jpg`, (res) => {
    console.log(`Image (${id}): ${res.statusCode}`);
  });
});
