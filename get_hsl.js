const fs=require('fs'); const html=fs.readFileSync('ref.html','utf8'); const r=/--[\w]+-hsl:\s*[;]+/gi; console.log(html.match(r) ? html.match(r).slice(0,20).join('\n') : 'none');
