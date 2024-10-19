import * as fs from 'fs';
import sharp from 'sharp';

const generateTheme = async () => {
  const { base, baseNoitalics, alt, altNoiitalics, schema, svg } = await import('./theme.mjs');
  fs.writeFile(
    'themes/svart-galla-theme.json',
    schema([base, baseNoitalics, alt, altNoiitalics]),
    (err) => err && console.log(err),
  );
  await sharp(Buffer.from(svg(base).trim()), { density: 400 })
    .png()
    .toFile('assets/colors.png');
  console.log(`assets saved (${new Date().toTimeString()})`);
};

generateTheme();
