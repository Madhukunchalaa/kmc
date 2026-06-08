import { config as loadEnv } from 'dotenv';
loadEnv({ path: '.env.local' });
loadEnv();

import mongoose from 'mongoose';
import fs from 'fs';
import { Product } from '../src/models/Product';

// Simple text normaliser
function norm(str: string): string {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/crystal/g, '')
    .replace(/bracelet/g, '')
    .replace(/mala/g, '')
    .replace(/spell jar/g, '')
    .replace(/spelljar/g, '')
    .replace(/jar/g, '')
    .replace(/shell/g, '')
    .replace(/design\s*\d*/g, '')
    .replace(/pic\s*\d*/g, '')
    .replace(/sucess/g, 'success')
    .replace(/concieve/g, 'conceive')
    .replace(/eventurine/g, 'aventurine')
    .replace(/flourite/g, 'fluorite')
    .replace(/hakeek/g, 'hakik')
    .replace(/haikik/g, 'hakik')
    .replace(/[^a-z0-9]/g, '')
    .trim();
}

async function main() {
  const uri = process.env.MONGODB_URI;
  const publicUrl = process.env.NEXT_PUBLIC_R2_URL || 'https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev';

  if (!uri) {
    console.error('Error: MONGODB_URI missing');
    process.exit(1);
  }

  if (!fs.existsSync('scripts/r2-files.json')) {
    console.error('Error: scripts/r2-files.json not found. Run list-r2 first.');
    process.exit(1);
  }

  const r2Files: { key: string; size: number }[] = JSON.parse(
    fs.readFileSync('scripts/r2-files.json', 'utf-8')
  );

  console.log(`Loaded ${r2Files.length} R2 files.`);

  await mongoose.connect(uri);
  console.log('✓ Connected to MongoDB');

  const products = await Product.find({ active: true });
  console.log(`Loaded ${products.length} active products from database.`);

  const matches: { product: string; key: string; url: string }[] = [];
  const unmatched: string[] = [];

  for (const p of products) {
    const pName = p.name;
    const pNameNorm = norm(pName);
    let matchedKey: string | null = null;

    // --- 1. SPELL JARS ---
    if (p.subcategory === 'Spell Jars' || pName.toLowerCase().includes('spell jar')) {
      const spellJarFiles = r2Files.filter(f => f.key.toLowerCase().includes('spell jar'));
      
      let searchKeyword = '';
      if (pNameNorm.includes('abundance')) searchKeyword = 'abundance';
      else if (pNameNorm.includes('goodluck')) searchKeyword = 'good luck';
      else if (pNameNorm.includes('love')) searchKeyword = 'love';
      else if (pNameNorm.includes('success') || pNameNorm.includes('manifestation')) searchKeyword = 'success';

      if (searchKeyword) {
        const fileMatch = spellJarFiles.find(f => norm(f.key).includes(searchKeyword));
        if (fileMatch) {
          matchedKey = fileMatch.key;
        }
      }
    }

    // --- 2. BRACELETS ---
    else if (p.category === 'bracelets') {
      const isDesigner = p.subcategory === 'Designer Bracelets';
      const isSignature = pName.toLowerCase().includes('bracelet') && 
        ['all in one', 'business growth', 'career success', 'conceive and nurture', 'good luck', 'love and luck', 'love and peace', 'luxury client attraction', 'spiritual cleansing'].some(k => pName.toLowerCase().includes(k));

      // 2A. Signature Collection
      if (isSignature) {
        const signatureFiles = r2Files.filter(f => f.key.toLowerCase().includes('signature'));
        let keyword = '';
        if (pNameNorm.includes('allinone')) keyword = 'allinone';
        else if (pNameNorm.includes('business')) keyword = 'business';
        else if (pNameNorm.includes('career')) keyword = 'career';
        else if (pNameNorm.includes('conceive')) keyword = 'conceive';
        else if (pNameNorm.includes('goodluck')) keyword = 'goodluck';
        else if (pNameNorm.includes('loveandluck')) keyword = 'loveandluck';
        else if (pNameNorm.includes('loveandpeace')) keyword = 'loveandpeace';
        else if (pNameNorm.includes('luxury')) keyword = 'luxury';
        else if (pNameNorm.includes('spiritual')) keyword = 'spiritual';

        if (keyword) {
          const fileMatch = signatureFiles.find(f => norm(f.key).includes(keyword));
          if (fileMatch) matchedKey = fileMatch.key;
        }
      }

      // 2B. Designer Collection
      else if (isDesigner) {
        const designerFiles = r2Files.filter(f => f.key.toLowerCase().includes('designer'));
        let bestScore = 0;
        for (const f of designerFiles) {
          const keyNorm = norm(f.key.replace('designer bracelates/', ''));
          const pNormClean = pNameNorm.replace('bracelet', '');

          if (keyNorm === pNormClean) {
            matchedKey = f.key;
            break;
          }
          if (keyNorm.includes(pNormClean) || pNormClean.includes(keyNorm)) {
            const score = Math.min(keyNorm.length, pNormClean.length) / Math.max(keyNorm.length, pNormClean.length);
            if (score > bestScore) {
              matchedKey = f.key;
              bestScore = score;
            }
          }
        }
      }

      // 2C. Standard Crystal Bracelets
      else {
        let folderName = '';
        if (pNameNorm.includes('tripleprotection')) folderName = 'triple protection ';
        else if (pNameNorm.includes('moneymagnet')) folderName = 'money magnet';
        else if (pNameNorm.includes('citrine') && pNameNorm.includes('rudraksha')) folderName = 'citrine/Citrine + Rudraksh ';
        else if (pNameNorm.includes('citrine')) folderName = 'citrine';
        else if (pNameNorm.includes('amethyst')) folderName = 'amethyst';
        else if (pNameNorm.includes('clearquartz')) folderName = 'clear quartz';
        else if (pNameNorm.includes('rosequartz')) folderName = 'Rose quartz ';
        else if (pNameNorm.includes('blacktourmaline')) folderName = 'black tourmaline';
        else if (pNameNorm.includes('sevenchakra') && pNameNorm.includes('lava')) folderName = 'seven chakra/Seven chakra + lava ';
        else if (pNameNorm.includes('sevenchakra') && pNameNorm.includes('ommanipadmehum')) folderName = '7 chakra +om mani padme hum';
        else if (pNameNorm.includes('sevenchakra')) folderName = 'seven chakra';
        else if (pNameNorm.includes('7chakra') && pNameNorm.includes('lava')) folderName = 'seven chakra/Seven chakra + lava ';
        else if (pNameNorm.includes('7chakra') && pNameNorm.includes('ommanipadmehum')) folderName = '7 chakra +om mani padme hum';
        else if (pNameNorm.includes('7chakra')) folderName = 'seven chakra';
        else if (pNameNorm.includes('ommanipadmehum') && pNameNorm.includes('blackobsidian')) folderName = 'OM mani padme hum + black obsidian';
        else if (pNameNorm.includes('ommanipadmehum')) folderName = 'OM mani padme hum + black obsidian';
        else if (pNameNorm.includes('smokyquartz')) folderName = 'smoky quartz';
        else if (pNameNorm.includes('dalmatianjasper')) folderName = 'dalmatian jasper';
        else if (pNameNorm.includes('shungite')) folderName = 'shungite ';
        else if (pNameNorm.includes('tigereye') || pNameNorm.includes('tigerseye')) folderName = 'tiger eye';
        else if (pNameNorm.includes('goldenpyrite')) folderName = 'golden pyrite';
        else if (pNameNorm.includes('pyrite')) folderName = 'pyrite';
        else if (pNameNorm.includes('angelite')) folderName = 'angelite';
        else if (pNameNorm.includes('peridot')) folderName = 'peridot';
        else if (pNameNorm.includes('rhodonite')) folderName = 'rhodonite';
        else if (pNameNorm.includes('bluehowlite')) folderName = 'blue howlite';
        else if (pNameNorm.includes('multiflourite') || pNameNorm.includes('multifluorite')) folderName = 'multi flourite';
        else if (pNameNorm.includes('sulemanihakik') || pNameNorm.includes('sulemanihakeek')) folderName = 'sulemani haikik';
        else if (pNameNorm.includes('garnet')) folderName = 'red garnet';
        else if (pNameNorm.includes('catseye')) folderName = 'grey cats eye';
        else if (pNameNorm.includes('moonstone')) folderName = 'moon stone';
        else if (pNameNorm.includes('apatite')) folderName = 'blue apatite';
        else if (pNameNorm.includes('amazonite')) folderName = 'amazonite';
        else if (pNameNorm.includes('aquamarine')) folderName = 'aquamarine';
        else if (pNameNorm.includes('sunstone')) folderName = 'sun stone';
        else if (pNameNorm.includes('peachmoonstone')) folderName = 'peach moonstone';
        else if (pNameNorm.includes('strawberryquartz')) folderName = 'strawberry quartz';
        else if (pNameNorm.includes('morganite')) folderName = 'morganite';
        else if (pNameNorm.includes('ametrine')) folderName = 'ametrine';
        else if (pNameNorm.includes('malachite')) folderName = 'malachite';
        else if (pNameNorm.includes('chrysocolla')) folderName = 'chrysocolla';
        else if (pNameNorm.includes('kunzite')) folderName = 'kunzite';
        else if (pNameNorm.includes('karungali')) folderName = 'karungali ';
        else if (pNameNorm.includes('lapis')) folderName = 'Lapis lazuli';
        else if (pNameNorm.includes('angelaura')) folderName = 'angel aura';
        else if (pNameNorm.includes('evileye')) folderName = 'evil eye';
        else if (pNameNorm.includes('aventurine') || pNameNorm.includes('eventurine')) folderName = 'green eventurine';
        else if (pNameNorm.includes('redjasper')) folderName = 'red jasper';
        else if (pNameNorm.includes('turquoise') || pNameNorm.includes('firoza')) folderName = 'turquoise';

        if (folderName) {
          const prefix = `bracelates by crystals/${folderName}/`;
          const folderFiles = r2Files.filter(f => f.key.startsWith(prefix));

          if (folderFiles.length > 0) {
            let pic1 = folderFiles.find(f => {
              const base = f.key.replace(prefix, '').toLowerCase();
              return base === 'pic 1' || base === 'pic 1.jpg' || base === 'pic 1.png' || base === 'red garnet pic 1';
            });
            if (!pic1) {
              pic1 = folderFiles.find(f => {
                const base = f.key.replace(prefix, '').toLowerCase();
                return !base.includes('optional') && !base.includes('pic 2') && !base.includes('pic 3') && !base.includes('pic 4');
              });
            }
            if (!pic1) pic1 = folderFiles[0];
            if (pic1) matchedKey = pic1.key;
          }
        }

        // FALLBACK: Search in "designer bracelates/" for crystal name
        if (!matchedKey) {
          const designerFiles = r2Files.filter(f => f.key.toLowerCase().includes('designer'));
          let crystalKeyword = '';
          const keywords = ['tigereye', 'redjasper', 'blacktourmaline', 'clearquartz', 'greenaventurine', 'greeneventurine', 'lapislazuli', 'rosequartz', 'amethyst', 'selenite', 'pyrite', 'jade', 'sulemanihakik', 'sulemanihakeek'];
          for (const k of keywords) {
            if (pNameNorm.includes(k)) {
              crystalKeyword = k;
              break;
            }
          }

          if (crystalKeyword) {
            const fileMatch = designerFiles.find(f => {
              const keyNorm = norm(f.key.replace('designer bracelates/', ''));
              return keyNorm.includes(crystalKeyword);
            });
            if (fileMatch) {
              matchedKey = fileMatch.key;
            }
          }
        }
      }
    }

    if (matchedKey) {
      const encodedKey = matchedKey
        .split('/')
        .map(segment => encodeURIComponent(segment))
        .join('/');
      const url = `${publicUrl}/${encodedKey}`;
      matches.push({
        product: pName,
        key: matchedKey,
        url,
      });

      // Update in MongoDB
      p.image = url;
      await p.save();
    } else {
      unmatched.push(pName);
    }
  }

  console.log('\n--- MATCHING REPORT ---');
  console.log(`Matched and updated in MongoDB: ${matches.length} products`);
  for (const m of matches) {
    console.log(`✓ "${m.product}" matches R2 key: "${m.key}"`);
  }

  if (unmatched.length > 0) {
    console.log(`\nUnmatched products (${unmatched.length}):`);
    for (const name of unmatched) {
      console.log(`✗ "${name}"`);
    }
  }

  // --- UPDATE STATIC products.ts ---
  const tsPath = 'src/data/products.ts';
  if (fs.existsSync(tsPath)) {
    const tsContent = fs.readFileSync(tsPath, 'utf-8');
    const match = tsContent.match(/export const products: Product\[\] = \[\s*([\s\S]*?)\s*\];\s*$/);
    if (match) {
      const arrayText = match[1];
      const cleanJson = `[${arrayText.replace(/,\s*\]/g, ']').replace(/,\s*\}/g, '}')}]`;
      try {
        const seedProducts = JSON.parse(cleanJson);
        let updatedSeedCount = 0;
        for (const sp of seedProducts) {
          const matched = matches.find(m => m.product === sp.name);
          if (matched) {
            sp.image = matched.url;
            updatedSeedCount++;
          }
        }
        
        // Format back
        const formatted = seedProducts.map((p: Record<string, unknown>) => '  ' + JSON.stringify(p, null, 2).split('\n').map(line => '  ' + line).join('\n').trim()).join(',\n');
        const prefix = tsContent.substring(0, match.index! + 'export const products: Product[] = ['.length);
        const suffix = '\n];\n';
        fs.writeFileSync(tsPath, prefix + '\n' + formatted + suffix, 'utf-8');
        console.log(`\n✓ Updated ${updatedSeedCount} product images in src/data/products.ts seed file!`);
      } catch (err) {
        console.error('Failed to parse products.ts array:', err);
      }
    }
  }

  await mongoose.disconnect();
  console.log('\n✓ Disconnected from MongoDB');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
