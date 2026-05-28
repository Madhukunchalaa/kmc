const fs = require('fs');
const path = require('path');

// Crystal configuration
const CRYSTALS = {
  "triple protection": { price: 1850, chakras: ["Root", "Solar Plexus"], desc: "Combines Tiger Eye, Hematite, and Black Obsidian for ultimate energetic shielding." },
  "money magnet": { price: 1950, chakras: ["Solar Plexus", "Heart"], desc: "Powerful combination of pyrite, citrine, and green aventurine to draw prosperity." },
  "rose quartz": { price: 950, chakras: ["Heart"], desc: "The stone of unconditional love, compassion, and emotional healing." },
  "seven chakra": { price: 1650, chakras: ["Root", "Sacral", "Solar Plexus", "Heart", "Throat", "Third Eye", "Crown"], desc: "Balances, aligns, and activates all body energy centers." },
  "black tourmaline": { price: 1050, chakras: ["Root"], desc: "Shields against negative energy, electromagnetic frequencies, and toxic environments." },
  "irani firoza": { price: 2450, chakras: ["Throat"], desc: "Genuine Irani Turquoise for confidence, public speaking, and clear communication." },
  "green eventurine": { price: 950, chakras: ["Heart"], desc: "Stone of opportunity and luck, bringing abundance and career success." },
  "pyrite": { price: 1250, chakras: ["Solar Plexus"], desc: "Fool's gold that acts as a strong protective shield and magnet for wealth." },
  "amethyst": { price: 1050, chakras: ["Third Eye", "Crown"], desc: "Calms mind, increases spiritual wisdom, and supports deep meditation." },
  "citrine": { price: 1350, chakras: ["Solar Plexus"], desc: "The Merchant's Stone of abundance, manifestation, and positive vibes." },
  "clear quartz": { price: 950, chakras: ["Crown"], desc: "The Master Healer crystal that amplifies other stones' energy." },
  "om mani padmehum": { price: 1450, chakras: ["Crown", "Heart"], desc: "Engraved with the sacred Buddhist mantra of compassion and wisdom." },
  "smoky quartz": { price: 1050, chakras: ["Root"], desc: "Grounds excess energy and relieves anxiety, stress, or fear." },
  "red jasper": { price: 850, chakras: ["Root"], desc: "Carries strong grounding energy, boosting physical strength and stamina." },
  "dalmatian jasper": { price: 950, chakras: ["Root"], desc: "Brings a sense of playfulness and joy, breaking down analytical walls." },
  "shungite": { price: 1550, chakras: ["Root"], desc: "Ancient carbon mineral renowned for EMF protection and purification." },
  "tiger eye": { price: 1050, chakras: ["Solar Plexus"], desc: "Boosts courage, self-confidence, willpower, and personal power." },
  "golden pyrite": { price: 1350, chakras: ["Solar Plexus"], desc: "Lustrous gold crystal to attract wealth and block negative energies." },
  "angel aura": { price: 1650, chakras: ["Crown"], desc: "Quartz bonded with metals to radiate angelic joy, peace, and spiritual light." },
  "evil eye": { price: 850, chakras: ["Root", "Throat"], desc: "Protective talisman that shields against jealousy, glare, and bad wishes." },
  "angelite": { price: 1250, chakras: ["Throat", "Crown"], desc: "Supports angelic connection, gentle communication, and inner peace." },
  "peridot": { price: 1450, chakras: ["Heart"], desc: "Inspires positive energy, abundance, and heart-centered joy." },
  "rhodonite": { price: 1150, chakras: ["Heart"], desc: "Stones of compassion, forgiveness, and emotional balance after hurt." },
  "blue howlite": { price: 950, chakras: ["Throat"], desc: "Extremely calming stone, great for reducing anger and sleeplessness." },
  "multiflourite": { price: 1150, chakras: ["Third Eye"], desc: "Brings mental clarity, order, and structured focus to a chaotic mind." },
  "sulemani hakik": { price: 1250, chakras: ["Root"], desc: "Traditional gemstone used to block black magic and malefic planetary influences." },
  "lava seven chakra": { price: 1250, chakras: ["Root", "Heart"], desc: "Grounding volcanic rock combined with 7 chakra balancing crystals." },
  "red garnet": { price: 1350, chakras: ["Root"], desc: "Stones of passion, vital life energy, courage, and root chakra activation." },
  "citrine rudraksha": { price: 1450, chakras: ["Solar Plexus"], desc: "Sacred Rudraksha seeds combined with wealth-attracting Citrine beads." },
  "grey cats eye": { price: 1250, chakras: ["Third Eye"], desc: "Brings good luck, insight, and protection from unexpected trouble." },
  "moon stone": { price: 1450, chakras: ["Third Eye", "Crown"], desc: "Enhances intuition, divine feminine energy, and emotional healing." },
  "blue apatite": { price: 1350, chakras: ["Throat"], desc: "Enhances motivation, communication, and clear speaking of truth." },
  "lapis lazuli": { price: 1150, chakras: ["Throat", "Third Eye"], desc: "Traditional royal blue stone for wisdom, truth, and inner power." },
  "amazonite": { price: 1150, chakras: ["Heart", "Throat"], desc: "Calms the nervous system and filters stressful environments." },
  "aquamarine": { price: 1850, chakras: ["Throat"], desc: "Evokes the serenity of the ocean, bringing clear, calm communication." },
  "sunstone": { price: 1350, chakras: ["Sacral", "Solar Plexus"], desc: "Brings joy, leadership energy, and positive enthusiasm." },
  "peach moonstone": { price: 1450, chakras: ["Sacral"], desc: "Supports emotional balance, creative flow, and loving energy." },
  "strawberry quartz": { price: 1250, chakras: ["Heart"], desc: "Radiates love, universal connection, and appreciation of beauty." },
  "morganite": { price: 2450, chakras: ["Heart"], desc: "Premium pink crystal carrying high-frequency heart healing energies." },
  "ametrine": { price: 1850, chakras: ["Third Eye", "Solar Plexus"], desc: "Stunning amethyst and citrine fusion for mental clarity and power." },
  "pixu om mani padmeham": { price: 1750, chakras: ["Root", "Crown"], desc: "Feng Shui Pixiu combined with sacred Buddhist mantra beads." },
  "mother pearls": { price: 1250, chakras: ["Heart"], desc: "Gently soothing shell beads bringing sea-like peace and clarity." },
  "malachite": { price: 2200, chakras: ["Heart"], desc: "Powerful transformation stone that cleanses emotional blocks." },
  "chrysocolla": { price: 1950, chakras: ["Throat", "Heart"], desc: "Supports clear communication, feminine empowerment, and expression." },
  "opal": { price: 1450, chakras: ["Crown"], desc: "Enhances cosmic consciousness, spiritual vision, and inspiration." },
  "turquoise": { price: 1850, chakras: ["Throat"], desc: "Ancient stones of protection, alignment, and communication." },
  "labradorite": { price: 1350, chakras: ["Third Eye"], desc: "Temple of the stars crystal for magic, intuition, and transformation." },
  "yellow calcite": { price: 950, chakras: ["Solar Plexus"], desc: "Clears mental blockages and infuses warmth, joy, and hope." },
  "red carnalian": { price: 1050, chakras: ["Sacral"], desc: "Stones of motivation, creativity, leadership, and bold action." },
  "white agate": { price: 850, chakras: ["Crown"], desc: "Brings gentle release, mental balance, and absolute purity." },
  "green jade": { price: 1350, chakras: ["Heart"], desc: "Noble stone of luck, wisdom, long life, and physical health." },
  "selenite": { price: 1250, chakras: ["Crown"], desc: "Liquid light crystal that purifies other crystals and living spaces." },
  "karungali": { price: 1850, chakras: ["Root"], desc: "Sacred Ebony wood traditionally used for protection, grounding, and power." }
};

// Generic images
const IMAGES = {
  bracelets: "https://krissmaagiiccrystals.com/wp-content/uploads/2025/04/008-1-3.jpg",
  chips: "https://krissmaagiiccrystals.com/wp-content/uploads/2025/04/c5-3.jpg",
  bangles: "https://krissmaagiiccrystals.com/wp-content/uploads/2025/04/c6-3.jpg",
  pendants: "https://krissmaagiiccrystals.com/wp-content/uploads/2025/04/1023-1-3.jpg",
  rings: "https://krissmaagiiccrystals.com/wp-content/uploads/2025/04/c6-3.jpg",
  malas: "https://krissmaagiiccrystals.com/wp-content/uploads/2025/04/c5-3.jpg",
  beauty: "https://krissmaagiiccrystals.com/wp-content/uploads/2025/04/1023-1-3.jpg",
  trees: "https://krissmaagiiccrystals.com/wp-content/uploads/2025/04/008-1-3.jpg",
  frames: "https://krissmaagiiccrystals.com/wp-content/uploads/2025/04/c7-3.jpg",
  selenite: "https://krissmaagiiccrystals.com/wp-content/uploads/2025/04/c7-3.jpg",
  others: "https://krissmaagiiccrystals.com/wp-content/uploads/2025/04/c7-3.jpg"
};

function cleanName(n) {
  return n.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function generateStructuredLongDesc(name, desc, config) {
  const chakrasStr = config.chakras.join(', ') + " Chakra";
  const structure = {
    description: `${cleanName(name)} is a premium quality, authentic spiritual item. ${desc} Sourced carefully and ritually cleansed.`,
    whoShouldWear: [
      `People seeking to balance their ${chakrasStr}.`,
      "Individuals seeking spiritual growth, clarity, and protection in their daily life.",
      "Anyone experiencing low energy, stress, or blockages in personal development."
    ],
    benefits: [
      desc,
      `Aligns and energises the ${chakrasStr}.`,
      "Dissolves negative energies and builds a strong positive protective aura.",
      "Supports emotional healing, meditation, and mindfulness practices."
    ],
    howToWear: [
      "Keep close to your body or wear daily.",
      "Can be placed in a clean pocket, purse, or worn on the body.",
      "Best worn during meditation, yoga, or professional work."
    ],
    careInstructions: [
      "Avoid contact with water, soap, and cosmetic chemicals.",
      "Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.",
      "Store in a dry, safe, clean velvet pouch or container when not in use."
    ],
    disclaimer: "Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments."
  };
  return JSON.stringify(structure, null, 2);
}

// Special structured descriptions as requested
const SPECIAL_LONG_DESCS = {
  "karungali-mala": JSON.stringify({
    description: "Karungali (Ebony wood) is a sacred and powerful natural wood traditionally used for protection, grounding, and spiritual strength. This mala is known to absorb negative energies and promote mental stability, courage, and discipline. It is widely used for meditation, japa, and daily spiritual wear.",
    whoShouldWear: [
      "People seeking protection from negativity or evil eye",
      "Those who feel mentally disturbed, anxious, or low on energy",
      "Individuals practicing meditation, mantra chanting, or spiritual discipline",
      "Ideal for students, professionals, and spiritually inclined people"
    ],
    benefits: [
      "Protects from negative and harmful energies",
      "Enhances focus, willpower, and mental clarity",
      "Promotes grounding and emotional stability",
      "Supports spiritual growth and discipline"
    ],
    howToWear: [
      "Can be worn daily as a mala or necklace",
      "Suitable for japa, meditation, or regular wear",
      "Unisex – suitable for both men and women"
    ],
    careInstructions: [
      "Avoid water contact",
      "Clean gently with a dry cloth",
      "Store in a clean, dry place"
    ],
    disclaimer: "This product supports spiritual well-being and does not replace medical or professional advice."
  }, null, 2),

  "seven-chakra-mala": JSON.stringify({
    description: "The Seven Chakra Mala is designed using seven natural crystals, each representing one of the body’s energy centers (chakras). This mala helps balance, align, and activate all seven chakras, promoting overall physical, emotional, and spiritual harmony.",
    whoShouldWear: [
      "Anyone seeking overall balance and energy alignment",
      "People experiencing emotional imbalance or energy blockages",
      "Those practicing meditation, yoga, or spiritual healing",
      "Ideal for beginners and experienced crystal users"
    ],
    benefits: [
      "Balances and activates all seven chakras",
      "Enhances mental clarity, emotional stability, and positivity",
      "Supports spiritual growth and inner peace",
      "Helps improve energy flow throughout the body"
    ],
    howToWear: [
      "Can be worn daily or during meditation",
      "Can be used as a mala or necklace",
      "Suitable for both men and women"
    ],
    careInstructions: [
      "Cleanse regularly using moonlight or incense smoke",
      "Avoid water exposure",
      "Store separately to maintain crystal energy"
    ],
    disclaimer: "Crystals are spiritual tools and not a substitute for medical treatment."
  }, null, 2),

  "black-tourmaline-chain": JSON.stringify({
    description: "Black Tourmaline is one of the strongest protective crystals, known for grounding energy and shielding against negativity. Wearing this chain helps absorb negative vibrations, protect from evil eye, and maintain emotional and energetic balance.",
    whoShouldWear: [
      "People sensitive to negative environments or energies",
      "Those facing stress, fear, or emotional overload",
      "Individuals working in crowded or high-pressure environments",
      "Anyone seeking grounding and protection"
    ],
    benefits: [
      "Powerful protection from negative energy and evil eye",
      "Helps reduce stress and anxiety",
      "Promotes grounding and emotional stability",
      "Supports root chakra balance"
    ],
    howToWear: [
      "Can be worn daily as a necklace",
      "Best worn close to the body",
      "Suitable for both men and women"
    ],
    careInstructions: [
      "Cleanse regularly with incense smoke or dry salt",
      "Avoid water exposure",
      "Store separately"
    ],
    disclaimer: "Crystals support emotional and spiritual wellness and are not a medical substitute."
  }, null, 2),

  "irani-firoza-chain-large-beads": JSON.stringify({
    description: "Irani Firoza (Turquoise) is a powerful stone of protection, wisdom, and good fortune. The large beads enhance its energy, making this chain especially effective for confidence, communication, and positive transformation. Traditionally worn to attract luck and ward off negative influences.",
    whoShouldWear: [
      "People seeking protection and good fortune",
      "Those wanting to improve communication and confidence",
      "Individuals facing career or personal challenges",
      "Ideal for spiritually inclined and energy-sensitive people"
    ],
    benefits: [
      "Protects from negative energies and misfortune",
      "Enhances confidence and self-expression",
      "Promotes emotional healing and positivity",
      "Supports throat chakra activation"
    ],
    howToWear: [
      "Can be worn daily as a statement chain",
      "Suitable for both men and women",
      "Especially effective when worn regularly"
    ],
    careInstructions: [
      "Avoid water and chemicals",
      "Cleanse with moonlight or incense smoke",
      "Store carefully due to large bead size"
    ],
    disclaimer: "Crystals are complementary tools for well-being and not a replacement for medical advice."
  }, null, 2)
};

const products = [];

// Helper to push items safely
function addProd({ id, name, category, subcategory, price, image, badge, config }) {
  const crystalConfig = CRYSTALS[config] || { price: 1200, chakras: ["Root"], desc: "A beautiful healing stone selected intuitively." };
  const finalPrice = price || crystalConfig.price;
  const longDesc = SPECIAL_LONG_DESCS[id] || generateStructuredLongDesc(name, crystalConfig.desc, crystalConfig);
  
  products.push({
    id,
    name,
    category,
    subcategory,
    price: finalPrice,
    originalPrice: Math.round(finalPrice * 1.2),
    image: image || IMAGES[category] || IMAGES.others,
    badge: badge || null,
    desc: crystalConfig.desc,
    longDesc,
    chakras: crystalConfig.chakras
  });
}

// 1. Bracelets
const bracelets = [
  "triple protection", "money magnet", "rose quartz", "seven chakra", "black tourmaline",
  "irani firoza", "green eventurine", "pyrite", "amethyst", "citrine", "clear quartz",
  "om mani padmehum", "smoky quartz", "red jasper", "dalmatian jasper", "shungite",
  "tiger eye", "golden pyrite", "angel aura", "evil eye", "angelite", "peridot",
  "rhodonite", "blue howlite", "multiflourite", "sulemani hakik", "lava seven chakra",
  "red garnet chakra", "citrine rudraksha", "grey cats eye", "moon stone", "blue apatite",
  "lapis lazuli", "amazonite", "aquamarine", "sunstone", "peach moonstone",
  "strawberry quartz", "morganite", "ametrine", "pixu om mani padmeham", "mother pearls",
  "malachite", "chrysocolla"
];
bracelets.forEach(b => {
  addProd({
    id: `${b.replace(/\s+/g, '-')}-bracelet`,
    name: `${cleanName(b)} Crystal Bracelet`,
    category: "bracelets",
    subcategory: "Bracelets",
    config: b
  });
});

// 2. Chips bracelet
const chips = ["green eventurine", "moonstone", "lapis lazuli", "red garnet", "amethyst"];
chips.forEach(c => {
  addProd({
    id: `${c.replace(/\s+/g, '-')}-chips-bracelet`,
    name: `${cleanName(c)} Chips Bracelet`,
    category: "bracelets",
    subcategory: "Chips Bracelet",
    config: c
  });
});

// 3. Bangle bracelet
const bangles = ["clear quartz", "opal", "rose quartz", "tiger eye", "lapis lazuli", "green eventurine", "amethyst", "seven chakra", "pyrite", "red jasper"];
bangles.forEach(b => {
  addProd({
    id: `${b.replace(/\s+/g, '-')}-bangle-bracelet`,
    name: `${cleanName(b)} Bangle Bracelet`,
    category: "bracelets",
    subcategory: "Bangle Bracelet",
    config: b
  });
});

// 4. Pendants
const pendants = ["tree of life", "opal", "tiger eye", "rose quartz", "tiger eye designs", "lapis lazuli", "black tourmaline", "green eventurine", "pyrite", "evil eye"];
pendants.forEach(p => {
  const crystalKey = p.replace(" designs", "");
  addProd({
    id: `${p.replace(/\s+/g, '-')}-pendant`,
    name: `${cleanName(p)} Crystal Pendant`,
    category: "pendants",
    subcategory: "Pendants",
    config: crystalKey
  });
});

// 5. Rings
const normalRings = ["moonstone", "rose quartz", "lapis lazuli", "peridot"];
normalRings.forEach(r => {
  addProd({
    id: `${r.replace(/\s+/g, '-')}-normal-ring`,
    name: `${cleanName(r)} Classic Ring`,
    category: "rings",
    subcategory: "Normal Rings",
    config: r
  });
});

const designRings = [
  "amethyst", "lapis lazuli", "pyrite", "green eventurine", "irani firoza",
  "polished black tourmaline", "raw black tourmaline", "rose quartz", "moonstone",
  "labradorite", "tiger eye", "yellow calcite", "red carnalian", "sulemani hakik",
  "dalmatian jasper", "rhodonite", "malachite", "opal", "clear quartz", "white agate"
];
designRings.forEach(r => {
  const crystalKey = r.replace("polished ", "").replace("raw ", "");
  addProd({
    id: `${r.replace(/\s+/g, '-')}-design-ring`,
    name: `${cleanName(r)} Design Ring`,
    category: "rings",
    subcategory: "Design Rings",
    config: crystalKey
  });
});

// 6. Malas
const malas = ["seven chakra", "rose quartz", "turquoise", "black tourmaline", "karungali"];
malas.forEach(m => {
  addProd({
    id: `${m.replace(/\s+/g, '-')}-mala`,
    name: `${cleanName(m)} Crystal Mala`,
    category: "malas",
    subcategory: "Malas",
    config: m
  });
});

// 7. Comb - beauty
addProd({
  id: "rose-quartz-comb",
  name: "Rose Quartz Healing Comb",
  category: "beauty",
  subcategory: "Combs",
  config: "rose quartz"
});

// 8. Anklets
const anklets = ["lapis lazuli", "black tourmaline", "pyrite"];
anklets.forEach(a => {
  addProd({
    id: `${a.replace(/\s+/g, '-')}-anklet`,
    name: `${cleanName(a)} Anklet`,
    category: "beauty",
    subcategory: "Anklets",
    config: a
  });
});

// 9. Face Rollers
const rollers = ["opal", "green jade", "tiger eye", "amethyst", "green eventurine", "rose quartz"];
rollers.forEach(r => {
  addProd({
    id: `${r.replace(/\s+/g, '-')}-face-roller`,
    name: `${cleanName(r)} Face Roller`,
    category: "beauty",
    subcategory: "Face Rollers",
    config: r
  });
});

// 10. Guashas
const guashas = ["green eventurine", "black tourmaline"];
guashas.forEach(g => {
  addProd({
    id: `${g.replace(/\s+/g, '-')}-guasha`,
    name: `${cleanName(g)} Guasha Stone`,
    category: "beauty",
    subcategory: "Gua Sha",
    config: g
  });
});

// 11. Crystal Trees
const trees = ["big crystal tree", "small crystal tree", "shell tree"];
trees.forEach((t, i) => {
  addProd({
    id: `${t.replace(/\s+/g, '-')}`,
    name: `${cleanName(t)}`,
    category: "trees",
    subcategory: "Crystal Trees",
    price: [2800, 1600, 2200][i],
    config: "money magnet"
  });
});

// 12. Frames
const frames = [
  { k: "plain-pyrite-frame", n: "Plain Pyrite Frame", c: "pyrite" },
  { k: "selenite-laxmi-devi-pyrite-frame", n: "Selenite Laxmi Devi Pyrite Frame", c: "pyrite" },
  { k: "ganesha-pyrite-frame", n: "Ganesha Pyrite Frame", c: "pyrite" },
  { k: "gayatri-mantra-pyrite-plate", n: "Gayatri Mantra Pyrite Duster Plate", c: "pyrite" }
];
frames.forEach(f => {
  addProd({
    id: f.k,
    name: f.n,
    category: "frames",
    subcategory: "Frames",
    price: 3500,
    config: f.c
  });
});

// 13. Selenite crystals
const selenite = ["plain plate", "lamp model"];
selenite.forEach((s, i) => {
  addProd({
    id: `selenite-${s.replace(/\s+/g, '-')}`,
    name: `Selenite ${cleanName(s)}`,
    category: "selenite",
    subcategory: "Selenite Crystals",
    price: [1200, 2400][i],
    config: "selenite"
  });
});

// 14. Rashi bracelets
addProd({ id: "custom-rashi-bracelet", name: "Custom Rashi Zodiac Bracelet", category: "bracelets", subcategory: "Rashi Bracelets", price: 1550, config: "triple protection" });

// 15. Number bracelets
addProd({ id: "custom-numerology-bracelet", name: "Custom Numerology Number Bracelet", category: "bracelets", subcategory: "Number Bracelets", price: 1550, config: "money magnet" });

// 16. Keychains
const keychains = ["tree of life", "zibu green eventurine", "pyrite"];
keychains.forEach(k => {
  const crystalKey = k.includes("eventurine") ? "green eventurine" : "pyrite";
  addProd({
    id: `${k.replace(/\s+/g, '-')}-keychain`,
    name: `${cleanName(k)} Keychain`,
    category: "others",
    subcategory: "Keychains",
    price: 450,
    config: crystalKey
  });
});

// 17. Pyramids
const pyramids = [
  { k: "lapis-lazuli-pyramid", n: "Lapis Lazuli Pyramid", c: "lapis lazuli" },
  { k: "laxmi-pyramid", n: "Laxmi Aura Pyramid", c: "money magnet" }
];
pyramids.forEach(p => {
  addProd({
    id: p.k,
    name: p.n,
    category: "others",
    subcategory: "Pyramids",
    price: 1800,
    config: p.c
  });
});

// 18. Wands
const wands = [
  { k: "pencil-point-wand", n: "Pencil Point Wand", c: "clear quartz" },
  { k: "seven-chakra-wand", n: "Seven Chakra Healing Wand", c: "seven chakra" },
  { k: "black-tourmaline-wand", n: "Black Tourmaline Wand", c: "black tourmaline" },
  { k: "rhodonite-wand", n: "Rhodonite Wand", c: "rhodonite" }
];
wands.forEach(w => {
  addProd({
    id: w.k,
    name: w.n,
    category: "others",
    subcategory: "Wands",
    price: 1450,
    config: w.c
  });
});

// 21. Evil Eye
addProd({ id: "evil-eye-pendant-beauty", name: "Evil Eye Protective Pendant", category: "pendants", subcategory: "Evil Eye", price: 850, config: "evil eye" });
addProd({ id: "evil-eye-bracelet-beauty", name: "Evil Eye Protective Bracelet", category: "bracelets", subcategory: "Evil Eye", price: 850, config: "evil eye" });

// 22. Sage
addProd({ id: "white-sage-smudge", name: "White Sage Smudge Bundle", category: "others", subcategory: "Cleansing", price: 650, config: "clear quartz" });

// 23. Karungali items
addProd({ id: "karungali-bracelet", name: "Karungali Ebony Wood Bracelet", category: "bracelets", subcategory: "Karungali", price: 950, config: "karungali" });
// (mala is already in malas)

// 24. Yantras
addProd({ id: "sri-chakra-yantra", name: "Sri Yantra Sacred Geometry Plate", category: "others", subcategory: "Yantras", price: 2100, config: "pyrite" });

// 25. Merkabas
const merkabas = ["rose quartz", "amethyst"];
merkabas.forEach(m => {
  addProd({
    id: `${m.replace(/\s+/g, '-')}-merkaba`,
    name: `${cleanName(m)} Merkaba Star`,
    category: "others",
    subcategory: "Merkabas",
    price: 1250,
    config: m
  });
});

// 26. Spheres
const spheres = ["pyrite", "amethyst"];
spheres.forEach(s => {
  addProd({
    id: `${s}-small-sphere`,
    name: `${cleanName(s)} Small Sphere`,
    category: "spheres",
    subcategory: "Spheres",
    price: 1250,
    config: s
  });
});

// 27. Aura booster
addProd({ id: "aura-booster-spray", name: "Aura Booster Energy Spray", category: "others", subcategory: "Aura Booster", price: 1100, config: "clear quartz" });

// 28. Shell trees
const shellTrees = ["lapis lazuli", "rose quartz", "green eventurine", "amethyst rose quartz", "citrine", "amethyst"];
shellTrees.forEach(s => {
  const crystalKey = s.includes("rose quartz") ? "rose quartz" : s;
  addProd({
    id: `${s.replace(/\s+/g, '-')}-shell-tree`,
    name: `${cleanName(s)} Shell Tree`,
    category: "trees",
    subcategory: "Shell Trees",
    price: 2450,
    config: crystalKey
  });
});

// 29. Palm stones
addProd({ id: "pyrite-soap-palm-stone", name: "Pyrite Soap Palm Stone", category: "others", subcategory: "Palm Stones", price: 1250, config: "pyrite" });

// 39. Ear rings
const earrings = ["peridot", "green eventurine", "rose quartz"];
earrings.forEach(e => {
  addProd({
    id: `${e.replace(/\s+/g, '-')}-earrings`,
    name: `${cleanName(e)} Earrings`,
    category: "beauty",
    subcategory: "Earrings",
    price: 850,
    config: e
  });
});

// 40. Angels
const angels = ["green eventurine", "pyrite", "citrine", "tiger eye"];
angels.forEach(a => {
  addProd({
    id: `${a.replace(/\s+/g, '-')}-angel`,
    name: `${cleanName(a)} Guardian Angel`,
    category: "others",
    subcategory: "Angels",
    price: 1100,
    config: a
  });
});

// 41. Tumbles
addProd({ id: "water-tumble-set", name: "Water Crystal Purification Tumble Set", category: "others", subcategory: "Tumbles", price: 950, config: "clear quartz" });

// 42. Bathing salts
addProd({ id: "aura-cleansing-bath-salt", name: "Aura Cleansing Ritual Bath Salt", category: "others", subcategory: "Bathing Salts", price: 750, config: "clear quartz" });

// 43. Singing bowl
addProd({ id: "tibetan-singing-bowl-set", name: "Tibetan Singing Meditation Bowl Set", category: "others", subcategory: "Sound Healing", price: 3200, config: "amethyst" });

// 44. Spell jar
addProd({ id: "manifestation-spell-jar", name: "Ritual Manifestation Spell Jar", category: "others", subcategory: "Spell Jars", price: 1400, config: "money magnet" });

// 45. Ritual candles
addProd({ id: "abundance-ritual-candle", name: "Abundance Intentional Ritual Candle", category: "others", subcategory: "Ritual Candles", price: 950, config: "money magnet" });

// 46. Golden pyrite turtle
addProd({ id: "golden-pyrite-turtle", name: "Golden Pyrite Turtle Vastu Statue", category: "others", subcategory: "Vastu", price: 1800, config: "pyrite" });

// 47. Zibu coins
const zibuCoins = ["green eventurine", "black tourmaline", "rose quartz"];
zibuCoins.forEach(z => {
  addProd({
    id: `${z.replace(/\s+/g, '-')}-zibu-coin`,
    name: `${cleanName(z)} Zibu Coin`,
    category: "others",
    subcategory: "Zibu Coins",
    price: 650,
    config: z
  });
});

// 48. Raw stones
addProd({ id: "pyrite-cluster-set-3", name: "Golden Pyrite Raw Cluster (Set of 3)", category: "raw", subcategory: "Raw Stones", price: 2100, config: "pyrite" });
addProd({ id: "kuber-stone-set-3", name: "Kuber Manifestation Raw Stone (Set of 3)", category: "raw", subcategory: "Raw Stones", price: 1450, config: "money magnet" });


// Add special chains from user list
addProd({ id: "black-tourmaline-chain", name: "Black Tourmaline Chain", category: "others", subcategory: "Chains", price: 1450, config: "black tourmaline" });
addProd({ id: "irani-firoza-chain-large-beads", name: "Irani Firoza Chain (Large Beads)", category: "others", subcategory: "Chains", price: 2850, config: "irani firoza" });

const fileContent = `export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice: number | null;
  image: string;
  badge: "Popular" | "New" | "Sale" | "Bestseller" | null;
  desc: string;
  longDesc?: string;
  chakras: string[];
}

export const products: Product[] = ${JSON.stringify(products, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/products.ts'), fileContent, 'utf-8');
console.log('✓ Successfully wrote ' + products.length + ' products to products.ts');
