const path = require('node:path');
const sharp = require('sharp');

const base = path.resolve(__dirname, '../assets/common');

sharp(path.resolve(base, 'logo.svg'))
  .png()
  .toFile(path.resolve(base, 'logo.png'));
