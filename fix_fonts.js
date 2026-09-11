const fs = require('fs');
const glob = require('glob'); // Not available? I'll just hardcode.

const files = [
  'src/components/ModalitiesGrid.tsx',
  'src/components/WhoWeHelp.tsx',
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Replace only in paragraph tags or anything using it that's NOT uppercase intentionally.
  // Actually, Gravesend Sans has no lowercase. So if it's gravesend-sans and not an eyebrow or uppercase, it shouldn't be gravesend-sans.
  // In ModalitiesGrid, the paragraphs use it.
  content = content.replace(/className=\"font-\['gravesend-sans',sans-serif\] text-\[14\.5px\]/g, 'className=\"font-[\\'var(--font-mulish)\\'] text-[14.5px]');
  content = content.replace(/className=\"font-\['gravesend-sans',sans-serif\] text-\[15\.5px\]/g, 'className=\"font-[\\'var(--font-mulish)\\'] text-[15.5px]');
  fs.writeFileSync(file, content);
});
