const fs = require('fs');
const content = fs.readFileSync('src/data/products.ts', 'utf8');

// Map product categories/keywords to the generated images
const categoryImages = {
  bracelet: '/images/products/bracelet.png',
  mala: '/images/products/mala.png',
  pendant: '/images/products/pendant.png',
  sphere: '/images/products/sphere.png',
  tower: '/images/products/tower.png',
  tree: '/images/products/tree.png',
  'evil eye': '/images/products/evileye.png',
  evileye: '/images/products/evileye.png',
  silver: '/images/products/silver.png',
  raw: '/images/products/raw.png',
};

const allProductImages = [
  '/images/products/bracelet.png',
  '/images/products/mala.png',
  '/images/products/pendant.png',
  '/images/products/sphere.png',
  '/images/products/tower.png',
  '/images/products/tree.png',
  '/images/products/evileye.png',
  '/images/products/silver.png',
  '/images/products/raw.png',
];

let imgIdx = 0;
let replaced = 0;

// Split content into product blocks and replace images smartly
const updated = content.replace(
  /"image": "\/images\/crystals\/[^"]+"/g,
  function(match, offset) {
    // Look back for category info
    const before = content.substring(Math.max(0, offset - 500), offset);
    
    // Check category field
    const catMatch = before.match(/"category": "([^"]+)"/g);
    const nameMatch = before.match(/"name": "([^"]+)"/g);
    
    let imgPath = null;
    
    if (nameMatch && nameMatch.length > 0) {
      const name = nameMatch[nameMatch.length - 1].toLowerCase();
      for (const [key, path] of Object.entries(categoryImages)) {
        if (name.includes(key)) {
          imgPath = path;
          break;
        }
      }
    }
    
    if (!imgPath && catMatch && catMatch.length > 0) {
      const cat = catMatch[catMatch.length - 1].toLowerCase();
      for (const [key, path] of Object.entries(categoryImages)) {
        if (cat.includes(key)) {
          imgPath = path;
          break;
        }
      }
    }
    
    if (!imgPath) {
      imgPath = allProductImages[imgIdx % allProductImages.length];
      imgIdx++;
    }
    
    replaced++;
    return '"image": "' + imgPath + '"';
  }
);

fs.writeFileSync('src/data/products.ts', updated);
console.log('Replaced ' + replaced + ' image paths with category-specific images');
