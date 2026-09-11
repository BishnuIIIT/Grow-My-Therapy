const fs = require('fs');
const files = [
  'src/components/HopeSection.tsx',
  'src/components/HowWeWork.tsx',
  'src/components/ModalitiesGrid.tsx',
  'src/components/WhoWeHelp.tsx'
];
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/font-\[\'var\(--font-mulish\)\'\]/g, 'font-body');
  fs.writeFileSync(file, content);
});
