const fs = require('fs');

const filePath = './src/data/products.ts';
let content = fs.readFileSync(filePath, 'utf8');

// The file exports `products` array.
// It's technically TypeScript but mostly JSON inside.
// We can use regex or just eval it if we extract the array.

// For safety, let's just do text replacements for each spell jar.
// But evaluating the array, modifying it, and writing it back as formatted JS is much cleaner.

const match = content.match(/export const products: Product\[\] = (\[.*\]);$/ms);
if (!match) {
  console.error("Could not find products array");
  process.exit(1);
}

const productsStr = match[1];
let products;
try {
  // It's JS, we can eval it
  products = eval(`(${productsStr})`);
} catch (e) {
  console.error("Failed to parse products:", e);
  process.exit(1);
}

const genericImageBase = "/images/products/spelljar-";

// Base prices for variants
const variantConfig = [
  { name: 'Mini', diff: 0, usdDiff: 0, imgSuffix: 'mini.png' },
  { name: 'Medium (100ml)', diff: 2600, usdDiff: 50, imgSuffix: 'medium.png' },
  { name: 'Large (500ml)', diff: 5100, usdDiff: 100, imgSuffix: 'large.png' }
];

let newProducts = [];
for (let p of products) {
  if (p.id === 'medium-spell-jar' || p.id === 'large-spell-jar') {
    // skip these, they will be variants of mini
    continue;
  }
  
  if (p.id === 'mini-spell-jar') {
    p.id = 'custom-spell-jar';
    p.name = 'Custom Spell Jar';
    p.desc = 'A fully customized, ritually prepared spell jar based on your specific intentions.';
  }

  // Add variants to all spell jars
  if (p.subcategory === 'Spell Jars') {
    const basePrice = p.price;
    const baseUsd = p.usdPrice || Math.round(basePrice / 83);
    const origPrice = p.originalPrice || Math.round(basePrice * 1.2);
    const origUsd = p.originalUsdPrice || Math.round(baseUsd * 1.2);
    
    // For specific spell jars, they might not have specific size images, so we fallback to generic ones or use their main image.
    // The user said "change the image and price". 
    // We'll use the generic mini/medium/large images for the sizes if we don't have specific ones.
    
    p.variants = variantConfig.map(v => ({
      name: v.name,
      price: basePrice + v.diff,
      usdPrice: baseUsd + v.usdDiff,
      originalPrice: origPrice + Math.round(v.diff * 1.2),
      originalUsdPrice: origUsd + Math.round(v.usdDiff * 1.2),
      image: `/images/products/spelljar-${v.imgSuffix}`
    }));
  }

  newProducts.push(p);
}

const prefix = content.substring(0, match.index);
const newContent = prefix + 'export const products: Product[] = ' + JSON.stringify(newProducts, null, 2) + ';\n';

fs.writeFileSync(filePath, newContent, 'utf8');
console.log("Updated products.ts successfully.");
