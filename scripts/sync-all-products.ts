import { config as loadEnv } from 'dotenv';
loadEnv({ path: '.env.local' });
loadEnv();

import mongoose from 'mongoose';
import fs from 'fs';
import { Product } from '../src/models/Product';

// Normalisation helper for matching
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

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/\+/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s-]+/g, '-')
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

  if (!fs.existsSync('scripts/parsed_catalog.json')) {
    console.error('Error: scripts/parsed_catalog.json not found. Run parse_catalog first.');
    process.exit(1);
  }

  const r2Files: { key: string; size: number }[] = JSON.parse(
    fs.readFileSync('scripts/r2-files.json', 'utf-8')
  );

  const parsedCatalog = JSON.parse(
    fs.readFileSync('scripts/parsed_catalog.json', 'utf-8')
  );

  console.log(`Loaded ${r2Files.length} R2 files.`);
  console.log(`Loaded parsed catalog lists.`);

  await mongoose.connect(uri);
  console.log('✓ Connected to MongoDB');

  // Load active products from MongoDB
  const products = await Product.find({ active: true });
  console.log(`Loaded ${products.length} active products from database.`);

  const firstCollection = parsedCatalog.first_collection || [];
  const designerPrices = parsedCatalog.designer_prices || {};
  const designerCollection = parsedCatalog.designer_collection || [];

  const matchedProductNames = new Set<string>();

  // Maps to help query prices by normalized name
  const firstColMap = new Map<string, { name: string; price: number; usdPrice?: number }>();
  for (const item of firstCollection) {
    const raw = item as { name: string; price: number; usdPrice?: number };
    firstColMap.set(norm(raw.name), raw);
  }

  const designerColMap = new Map<string, { name: string; price: number; usdPrice: number }>();
  for (const item of designerCollection) {
    const raw = item as { name: string; price: number; usdPrice: number };
    designerColMap.set(norm(raw.name), raw);
  }

  // Helper to get all R2 URLs for a prefix/subfolder
  function getUrlsForFiles(files: string[]): string[] {
    return files.map(key => {
      const encoded = key
        .split('/')
        .map(seg => encodeURIComponent(seg))
        .join('/');
      return `${publicUrl}/${encoded}`;
    });
  }

  // Pre-defined Signature items to create
  const signatureItems = [
    { name: 'All In One Bracelet', key: 'allinone', chakras: ['Root', 'Sacral', 'Solar Plexus', 'Heart', 'Throat', 'Third Eye', 'Crown'], desc: 'Complete chakra balancing, protection, and positive energy amplification.' },
    { name: 'Business Growth Bracelet', key: 'business', chakras: ['Solar Plexus', 'Heart'], desc: 'Elegantly designed to invite confidence, determination, and professional opportunities.' },
    { name: 'Career Success Bracelet', key: 'career', chakras: ['Solar Plexus', 'Third Eye'], desc: 'Supports clarity, motivation, leadership, and advancement in career paths.' },
    { name: 'Conceive And Nurture Bracelet', key: 'conceive', chakras: ['Sacral', 'Heart'], desc: 'Nurturing energy supporting fertility, emotional comfort, and feminine balance.' },
    { name: 'Good Luck Bracelet', key: 'goodluck', chakras: ['Solar Plexus', 'Crown'], desc: 'Invites luck, positivity, synchronicity, and general well-being.' },
    { name: 'Love And Luck Bracelet', key: 'loveandluck', chakras: ['Heart', 'Solar Plexus'], desc: 'Harmonises emotional healing, compassion, and positive opportunities.' },
    { name: 'Love And Peace Bracelet', key: 'loveandpeace', chakras: ['Heart', 'Throat'], desc: 'Encourages gentle communication, emotional calm, and self-love.' },
    { name: 'Luxury Client Attraction Bracelet', key: 'luxury', chakras: ['Solar Plexus', 'Heart'], desc: 'Formulated to align with prosperity, abundance mindset, and client attraction.' },
    { name: 'Protection And Wellness Bracelet', key: 'protectionandwellness', chakras: ['Root', 'Heart'], desc: 'Combines grounding protective stones to secure energy and wellness.' },
    { name: 'Spiritual Cleansing Bracelet', key: 'spiritual', chakras: ['Crown', 'Third Eye'], desc: 'Aids in clearing mental blockages, enhancing meditation, and auric cleansing.' }
  ];

  // Pre-defined Spell Jar items to create
  const spellJarItems = [
    { name: 'Love Attraction Spell Jar', key: 'love', chakras: ['Heart'], desc: 'Intuitively prepared spell jar aligned with attracting harmony, self-love, and relationships.' },
    { name: 'Protection Spell Jar', key: 'protection', chakras: ['Root'], desc: 'Crafted with protective herbs, black obsidian, and salt to block negative energies.' },
    { name: 'Success Manifestation Spell Jar', key: 'success', chakras: ['Solar Plexus'], desc: 'Filled with citrine, pyrite, and positive intent to boost confidence and manifestation.' },
    { name: 'Abundance Spell Jar', key: 'abundance', chakras: ['Solar Plexus', 'Heart'], desc: 'Dressed with money-drawing herbs and crystals to align with wealth and abundance.' },
    { name: 'Good Luck Spell Jar', key: 'goodluck', chakras: ['Solar Plexus'], desc: 'Ritually sealed to bring positive energy, joy, and good fortune into your space.' }
  ];

  interface StaticProduct {
    id: string;
    name: string;
    category: string;
    subcategory: string;
    price: number;
    originalPrice: number | null;
    image: string;
    images?: string[];
    usdPrice?: number;
    originalUsdPrice?: number | null;
    badge: string | null;
    desc: string;
    longDesc?: string;
    chakras: string[];
  }

  // List of all matched products in DB/seed for later static update
  const finalProductList: StaticProduct[] = [];

  for (const p of products) {
    const pName = p.name;
    const pNameNorm = norm(pName);
    let matchedUrls: string[] = [];
    let priceInr = p.price;
    let priceUsd = p.usdPrice || 0;

    // --- A. SPELL JARS ---
    if (p.subcategory === 'Spell Jars' || pName.toLowerCase().includes('spell jar')) {
      let searchKey = '';
      if (pNameNorm.includes('abundance')) searchKey = 'abundance';
      else if (pNameNorm.includes('goodluck')) searchKey = 'good luck';
      else if (pNameNorm.includes('love')) searchKey = 'love';
      else if (pNameNorm.includes('success') || pNameNorm.includes('manifestation')) searchKey = 'success';
      else if (pNameNorm.includes('protection')) searchKey = 'protection';

      const matchedFiles = r2Files.filter(f => 
        f.key.toLowerCase().startsWith('spell jar') && 
        (searchKey ? f.key.toLowerCase().includes(searchKey) : true)
      );

      // Order files so pic 1 is first
      const pic1 = matchedFiles.find(f => f.key.toLowerCase().includes('pic 1')) || matchedFiles[0];
      const rest = matchedFiles.filter(f => f !== pic1);
      const ordered = pic1 ? [pic1, ...rest] : matchedFiles;
      matchedUrls = getUrlsForFiles(ordered.map(x => x.key));

      priceInr = 1200;
      priceUsd = 24;
    }

    // --- B. SIGNATURE BRACELETS ---
    else {
      const isSignature = pName.toLowerCase().includes('bracelet') && 
        ['all in one', 'business growth', 'career success', 'conceive and nurture', 'good luck', 'love and luck', 'love and peace', 'luxury client attraction', 'spiritual cleansing', 'protection and wellness'].some(k => pName.toLowerCase().includes(k));

      if (isSignature) {
        let keyword = '';
        if (pNameNorm.includes('allinone')) keyword = 'all in one';
        else if (pNameNorm.includes('business')) keyword = 'business';
        else if (pNameNorm.includes('career')) keyword = 'career';
        else if (pNameNorm.includes('conceive')) keyword = 'concieve'; // spelling in R2 key
        else if (pNameNorm.includes('goodluck')) keyword = 'good luck';
        else if (pNameNorm.includes('loveandluck')) keyword = 'love and luck';
        else if (pNameNorm.includes('loveandpeace')) keyword = 'love and peace';
        else if (pNameNorm.includes('luxury')) keyword = 'luxury';
        else if (pNameNorm.includes('protectionandwellness')) keyword = 'protection';
        else if (pNameNorm.includes('spiritual')) keyword = 'spiritual';

        const matchedFiles = r2Files.filter(f => 
          f.key.toLowerCase().startsWith('signature') && 
          (keyword ? f.key.toLowerCase().includes(keyword) : true)
        );
        matchedUrls = getUrlsForFiles(matchedFiles.map(x => x.key));

        priceInr = 1450;
        priceUsd = 28;
      }

      // --- C. DESIGNER BRACELETS ---
      else if (p.subcategory === 'Designer Bracelets') {
        const designerFiles = r2Files.filter(f => f.key.toLowerCase().startsWith('designer'));
        let matchedKeyObj: { key: string; size: number } | null = null;
        let bestScore = 0;
        
        for (const f of designerFiles) {
          const keyNorm = norm(f.key.replace('designer bracelates/', ''));
          const pNormClean = pNameNorm.replace('bracelet', '');

          if (keyNorm === pNormClean) {
            matchedKeyObj = f;
            break;
          }
          if (keyNorm.includes(pNormClean) || pNormClean.includes(keyNorm)) {
            const score = Math.min(keyNorm.length, pNormClean.length) / Math.max(keyNorm.length, pNormClean.length);
            if (score > bestScore) {
              matchedKeyObj = f;
              bestScore = score;
            }
          }
        }

        if (matchedKeyObj) {
          // Find related files in designer folder (e.g. Amethyst design 2 has pic 2)
          const baseName = matchedKeyObj.key.replace('designer bracelates/', '').replace(/\s*pic\s*\d*/gi, '').trim().toLowerCase();
          const related = designerFiles.filter(f => {
            const keyNorm = f.key.toLowerCase();
            return keyNorm.includes(baseName) || baseName.includes(keyNorm.replace('designer bracelates/', ''));
          });

          // Order pic 1 first
          const mainPic = related.find(f => f.key.toLowerCase().includes('pic 1')) || matchedKeyObj;
          const others = related.filter(f => f !== mainPic);
          const ordered = [mainPic, ...others];
          matchedUrls = getUrlsForFiles(ordered.map(x => x.key));
        }

        // Get pricing
        const normCleanName = pNameNorm.replace('bracelet', '').trim();
        const catalogItem = designerColMap.get(pNameNorm) || designerColMap.get(normCleanName);
        if (catalogItem) {
          priceInr = catalogItem.price;
          priceUsd = catalogItem.usdPrice;
        } else {
          // try first collection price list
          const priceKey = pName.toLowerCase().replace(" bracelet", "").replace(" crystal", "").trim();
          const priceInfo = designerPrices[priceKey] || designerPrices[pNameNorm];
          if (priceInfo) {
            priceInr = priceInfo.inr;
            priceUsd = priceInfo.usd;
          }
        }
      }

      // --- D. STANDARD BRACELETS ---
      else if (p.category === 'bracelets') {
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
          const folderFiles = r2Files.filter(f => f.key.startsWith(prefix) && !f.key.endsWith('/'));

          if (folderFiles.length > 0) {
            let pic1 = folderFiles.find(f => {
              const base = f.key.replace(prefix, '').toLowerCase();
              return base === 'pic 1' || base === 'pic 1.jpg' || base === 'pic 1.png' || base === 'red garnet pic 1' || base === 'multiflourite pic 1';
            });
            if (!pic1) {
              pic1 = folderFiles.find(f => {
                const base = f.key.replace(prefix, '').toLowerCase();
                return !base.includes('optional') && !base.includes('pic 2') && !base.includes('pic 3') && !base.includes('pic 4');
              });
            }
            if (!pic1) pic1 = folderFiles[0];

            const others = folderFiles.filter(f => f !== pic1 && !f.key.toLowerCase().includes('optional'));
            const ordered = [pic1, ...others];
            matchedUrls = getUrlsForFiles(ordered.map(x => x.key));
          }
        }

        // Get pricing
        const priceKey = pName.toLowerCase().replace(" bracelet", "").replace(" crystal", "").replace(" chips", "").replace(" bangle", "").trim();
        const priceInfo = designerPrices[priceKey] || designerPrices[pNameNorm] || designerPrices[pNameNorm.replace('crystal', '').trim()];
        if (priceInfo) {
          priceInr = priceInfo.inr;
          priceUsd = priceInfo.usd;
        }
      }
    }

    // Update database doc
    p.price = priceInr;
    p.originalPrice = Math.round(priceInr * 1.2);
    p.usdPrice = priceUsd;
    p.originalUsdPrice = priceUsd > 0 ? Math.round(priceUsd * 1.2) : null;

    if (matchedUrls.length > 0) {
      p.image = matchedUrls[0];
      p.images = matchedUrls;
      matchedProductNames.add(pNameNorm);
    } else {
      p.images = [p.image];
    }

    await p.save();

    finalProductList.push({
      id: p.slug,
      name: p.name,
      category: p.category,
      subcategory: p.subcategory,
      price: p.price,
      originalPrice: p.originalPrice ?? null,
      image: p.image,
      images: p.images,
      usdPrice: p.usdPrice,
      originalUsdPrice: p.originalUsdPrice ?? null,
      badge: p.badge || null,
      desc: p.desc,
      longDesc: p.longDesc,
      chakras: p.chakras
    });
  }

  // --- E. CREATE SIGNATURE PRODUCTS ---
  let createdCount = 0;
  for (const sig of signatureItems) {
    const slug = slugify(sig.name);
    const existing = products.find(p => p.slug === slug);
    if (!existing) {
      // Find R2 files
      const matchedFiles = r2Files.filter(f => 
        f.key.toLowerCase().startsWith('signature') && 
        f.key.toLowerCase().includes(sig.key)
      );
      const matchedUrls = getUrlsForFiles(matchedFiles.map(x => x.key));
      const image = matchedUrls[0] || '/images/products/bracelet.png';
      
      const newP = new Product({
        slug,
        name: sig.name,
        category: 'bracelets',
        subcategory: 'Signature Bracelets',
        price: 1450,
        originalPrice: 1740,
        usdPrice: 28,
        originalUsdPrice: 34,
        image,
        images: matchedUrls.length > 0 ? matchedUrls : [image],
        desc: sig.desc,
        longDesc: JSON.stringify({
          description: sig.desc,
          whoShouldWear: [`People seeking to balance their ${sig.chakras.join(', ')} Chakras.`],
          benefits: [sig.desc, "Premium quality handselected crystal bracelet"],
          howToWear: ["Wear on Left Hand or Keep close to your body"],
          careInstructions: ["Avoid contact with water, soap, and cosmetic chemicals", "Cleanse under moonlight or smudge with incense smoke"],
          disclaimer: "Crystals are spiritual tools and not a substitute for medical treatment."
        }),
        chakras: sig.chakras,
        active: true,
        stock: 99
      });

      await newP.save();
      createdCount++;
      console.log(`+ Created Signature product: "${sig.name}"`);

      finalProductList.push({
        id: newP.slug,
        name: newP.name,
        category: newP.category,
        subcategory: newP.subcategory,
        price: newP.price,
        originalPrice: newP.originalPrice ?? null,
        image: newP.image,
        images: newP.images,
        usdPrice: newP.usdPrice,
        originalUsdPrice: newP.originalUsdPrice ?? null,
        badge: newP.badge || null,
        desc: newP.desc,
        longDesc: newP.longDesc,
        chakras: newP.chakras
      });
    }
  }

  // --- F. CREATE SPELL JAR PRODUCTS ---
  for (const jar of spellJarItems) {
    const slug = slugify(jar.name);
    const existing = products.find(p => p.slug === slug);
    if (!existing) {
      // Find R2 files
      const matchedFiles = r2Files.filter(f => 
        f.key.toLowerCase().startsWith('spell jar') && 
        f.key.toLowerCase().includes(jar.key)
      );
      const matchedUrls = getUrlsForFiles(matchedFiles.map(x => x.key));
      const image = matchedUrls[0] || '/images/products/pendant.png';

      const newP = new Product({
        slug,
        name: jar.name,
        category: 'others',
        subcategory: 'Spell Jars',
        price: 1200,
        originalPrice: 1440,
        usdPrice: 24,
        originalUsdPrice: 28,
        image,
        images: matchedUrls.length > 0 ? matchedUrls : [image],
        desc: jar.desc,
        longDesc: JSON.stringify({
          description: jar.desc,
          whoShouldWear: [`People seeking to balance their ${jar.chakras.join(', ')} Chakras.`],
          benefits: [jar.desc, "Premium quality ritually prepared spell jar"],
          howToWear: ["Place in your clean pocket, purse, or room"],
          careInstructions: ["Keep in dry place", "Recharge under moonlight"],
          disclaimer: "Crystals and spell jars are spiritual tools and not a substitute for medical treatment."
        }),
        chakras: jar.chakras,
        active: true,
        stock: 99
      });

      await newP.save();
      createdCount++;
      console.log(`+ Created Spell Jar product: "${jar.name}"`);

      finalProductList.push({
        id: newP.slug,
        name: newP.name,
        category: newP.category,
        subcategory: newP.subcategory,
        price: newP.price,
        originalPrice: newP.originalPrice ?? null,
        image: newP.image,
        images: newP.images,
        usdPrice: newP.usdPrice,
        originalUsdPrice: newP.originalUsdPrice ?? null,
        badge: newP.badge || null,
        desc: newP.desc,
        longDesc: newP.longDesc,
        chakras: newP.chakras
      });
    }
  }

  console.log(`\nUpdated all products in MongoDB. Created ${createdCount} missing items.`);

  // --- G. SYNC STATIC products.ts CATALOG FILE ---
  const tsPath = 'src/data/products.ts';
  if (fs.existsSync(tsPath)) {
    const tsContent = fs.readFileSync(tsPath, 'utf-8');
    const arrayMatch = tsContent.match(/export const products: Product\[\] = \[\s*([\s\S]*?)\s*\];\s*$/);
    if (arrayMatch) {
      const existingArrayText = arrayMatch[1];
      
      // Load current products.ts items
      const cleanJson = `[${existingArrayText.replace(/,\s*\]/g, ']').replace(/,\s*\}/g, '}')}]`;
      let seedProducts: StaticProduct[] = [];
      try {
        seedProducts = JSON.parse(cleanJson) as StaticProduct[];
      } catch (err) {
        console.error('Failed to parse products.ts static seed array, will rewrite based on DB list:', err);
        seedProducts = [];
      }

      // Merge/update current seedProducts with the final list from DB
      const mergedList: StaticProduct[] = [...seedProducts];
      
      for (const finalP of finalProductList) {
        const idx = mergedList.findIndex(x => x.id === finalP.id);
        if (idx >= 0) {
          mergedList[idx] = {
            ...mergedList[idx],
            price: finalP.price,
            originalPrice: finalP.originalPrice,
            image: finalP.image,
            images: finalP.images,
            usdPrice: finalP.usdPrice,
            originalUsdPrice: finalP.originalUsdPrice,
            subcategory: finalP.subcategory,
            chakras: finalP.chakras,
            longDesc: finalP.longDesc
          };
        } else {
          // Add as new
          mergedList.push(finalP);
        }
      }

      // Format array back into TypeScript
      const formatted = mergedList.map(p => {
        // Pretty format object fields
        const keys = Object.keys(p);
        const lines = keys.map(k => {
          const val = (p as unknown as Record<string, unknown>)[k];
          return `    "${k}": ${JSON.stringify(val)}`;
        });
        return `  {\n${lines.join(',\n')}\n  }`;
      }).join(',\n');

      const prefix = tsContent.substring(0, arrayMatch.index! + 'export const products: Product[] = ['.length);
      const suffix = '\n];\n';
      fs.writeFileSync(tsPath, prefix + '\n' + formatted + suffix, 'utf-8');
      console.log(`✓ Updated products.ts static catalog file successfully! (${mergedList.length} items)`);
    }
  }

  await mongoose.disconnect();
  console.log('✓ Disconnected from MongoDB');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
