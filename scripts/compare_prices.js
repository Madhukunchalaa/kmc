const fs = require('fs');

// Read products.ts content
const content = fs.readFileSync('c:/Users/kunch/kmc/krissmagicc-nextjs/src/data/products.ts', 'utf8');

// Strip TypeScript annotations and export so we can eval it
let cleanContent = content
  .replace(/export interface Product \{[\s\S]*?\}/g, '')
  .replace(/export const products: Product\[\] =/g, 'module.exports =')
  .replace(/: Product\[\]/g, '')
  .replace(/import .*/g, '');

const tempFile = 'c:/Users/kunch/kmc/krissmagicc-nextjs/scripts/temp_products.js';
fs.writeFileSync(tempFile, cleanContent, 'utf8');

const productsList = require('./temp_products.js');
fs.unlinkSync(tempFile);

const pdfPrices = {
  "seven-chakra-and-om-mani-padme-hum-bracelet": { price: 1450, usdPrice: 28 },
  "amazonite-bracelet": { price: 1450, usdPrice: 28 },
  "amethyst-bracelet": { price: 900, usdPrice: 18 },
  "ametrine-bracelet": { price: 1450, usdPrice: 28 },
  "angel-aura-quartz-bracelet": { price: 1450, usdPrice: 28 },
  "angelite-bracelet": { price: 900, usdPrice: 18 },
  "aquamarine-bracelet": { price: 1450, usdPrice: 28 },
  "black-tourmaline-bracelet": { price: 900, usdPrice: 18 },
  "blue-apatite-bracelet": { price: 1450, usdPrice: 28 },
  "chrysocolla-bracelet": { price: 1750, usdPrice: 35 },
  "citrine-bracelet": { price: 900, usdPrice: 18 },
  "clear-quartz-bracelet": { price: 900, usdPrice: 18 },
  "dalmatian-jasper-bracelet": { price: 1450, usdPrice: 28 },
  "evil-eye-bracelet": { price: 600, usdPrice: 12 },
  "golden-pyrite-bracelet": { price: 1450, usdPrice: 28 },
  "green-aventurine-bracelet": { price: 900, usdPrice: 18 },
  "grey-cats-eye-bracelet": { price: 1750, usdPrice: 35 },
  "karungali-bracelet": { price: 900, usdPrice: 18 },
  "kunzite-bracelet": { price: 1750, usdPrice: 35 },
  "lapis-lazuli-bracelet": { price: 900, usdPrice: 18 },
  "malachite-bracelet": { price: 2200, usdPrice: 44 },
  "money-magnet-bracelet": { price: 1100, usdPrice: 22 },
  "moonstone-bracelet": { price: 1450, usdPrice: 28 },
  "morganite-bracelet": { price: 1450, usdPrice: 28 },
  "multi-fluorite-bracelet": { price: 1450, usdPrice: 28 },
  "om-mani-padme-hum-and-black-obsidian-bracelet": { price: 1750, usdPrice: 35 },
  "peach-moonstone-bracelet": { price: 1450, usdPrice: 28 },
  "peridot-bracelet": { price: 1450, usdPrice: 28 },
  "pyrite-bracelet": { price: 1100, usdPrice: 22 },
  "red-garnet-bracelet": { price: 1450, usdPrice: 28 },
  "red-jasper-bracelet": { price: 900, usdPrice: 18 },
  "rhodonite-bracelet": { price: 900, usdPrice: 18 },
  "rose-quartz-bracelet": { price: 900, usdPrice: 18 },
  "seven-chakra-bracelet": { price: 900, usdPrice: 18 },
  "shungite-bracelet": { price: 900, usdPrice: 18 },
  "smoky-quartz-bracelet": { price: 1450, usdPrice: 28 },
  "strawberry-quartz-bracelet": { price: 900, usdPrice: 18 },
  "suleimani-hakeek-bracelet": { price: 1450, usdPrice: 28 },
  "sunstone-bracelet": { price: 900, usdPrice: 18 },
  "tiger-eye-bracelet": { price: 900, usdPrice: 18 },
  "triple-protection-bracelet": { price: 1100, usdPrice: 22 },
  "turquoise-bracelet": { price: 1450, usdPrice: 28 }
};

const diffs = [];
for (const p of productsList) {
  const target = pdfPrices[p.id];
  if (target) {
    if (p.price !== target.price || p.usdPrice !== target.usdPrice) {
      diffs.push({
        id: p.id,
        name: p.name,
        currentInr: p.price,
        targetInr: target.price,
        currentUsd: p.usdPrice,
        targetUsd: target.usdPrice
      });
    }
  }
}

console.log("Differences found:", diffs.length);
console.log(JSON.stringify(diffs, null, 2));
