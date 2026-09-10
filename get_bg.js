const fs=require('fs'); const html=fs.readFileSync('ref.html','utf8'); const m=html.match(/--[\w-]+background-color:[;]+/gi); console.log(m ? m.filter(x =,10) : 'none');
