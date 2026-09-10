const https = require('https');
https.get('https://www.conejovalleycounseling.com/home', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/.{0,1000}expertise.{0,1000}/i);
    if (match) {
      console.log(match[0]);
    }
  });
});
