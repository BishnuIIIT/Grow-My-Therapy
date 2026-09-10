const fs=require('fs'); const html=fs.readFileSync('ref.html','utf8'); const m = html.match(/.{0,50}Who we.{0,50}/g); console.log(m);
