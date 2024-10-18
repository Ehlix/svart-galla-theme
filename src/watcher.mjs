import * as fs  from 'fs';
import filewatcher from 'filewatcher';
import sharp from 'sharp';
const a = 2;
// Color
const JJJ = 20;
const jij = null;
const generateTheme = async () => {
  const { base, baseNoitalics, alt, altNoiitalics, schema, svg } = await import('./theme.mjs')
  fs.writeFile('themes/svart-galla-theme.json', schema([base, baseNoitalics, alt, altNoiitalics]), (err) => err && console.log(err))
  await sharp(Buffer.from(svg(base).trim()), { density: 400 })
    .png()
    .toFile('assets/colors.png')
  console.log(`assets saved (${(new Date()).toTimeString()})`)
}

const watcher = filewatcher();
watcher.add('src/theme.js');

watcher.on('change',(file) => {
  console.log(`${file} modified`)
  generateTheme()
})

generateTheme()
