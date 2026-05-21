export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice: number | null;
  image: string;
  badge: "Popular" | "New" | "Sale" | "Bestseller" | null;
  desc: string;
  chakras: string[];
}

export const products: Product[] = [
  {
    id: "sagittarius-bracelet",
    name: "Sagittarius Crystal Rashi Bracelet",
    category: "bracelets",
    subcategory: "Rashi Bracelets",
    price: 1550,
    originalPrice: null,
    image: "https://krissmaagiiccrystals.com/wp-content/uploads/2025/04/008-1-3.jpg",
    badge: "Popular",
    desc: "Amplify luck, wisdom and adventurous spirit with this custom Sagittarius bracelet.",
    chakras: ["Third Eye", "Throat"]
  },
  {
    id: "libra-bracelet",
    name: "Libra Crystal Rashi Bracelet",
    category: "bracelets",
    subcategory: "Rashi Bracelets",
    price: 1550,
    originalPrice: null,
    image: "https://krissmaagiiccrystals.com/wp-content/uploads/2025/04/c5-3.jpg",
    badge: null,
    desc: "Balance, harmony and beauty for the Libra soul.",
    chakras: ["Heart", "Solar Plexus"]
  },
  {
    id: "seven-chakra-bracelet",
    name: "Seven Chakra Stretch Bracelet",
    category: "bracelets",
    subcategory: "Combination Bracelets",
    price: 1650,
    originalPrice: null,
    image: "https://krissmaagiiccrystals.com/wp-content/uploads/2025/04/c6-3.jpg",
    badge: "New",
    desc: "Seven genuine gemstones aligned to each chakra in one elegant stretch bracelet.",
    chakras: ["Root", "Sacral", "Solar Plexus", "Heart", "Throat", "Third Eye", "Crown"]
  },
  {
    id: "seven-chakra-mala",
    name: "Seven Chakra Crystal Mala",
    category: "malas",
    subcategory: "Crystal Malas",
    price: 2200,
    originalPrice: null,
    image: "https://krissmaagiiccrystals.com/wp-content/uploads/2025/04/c5-3.jpg",
    badge: "Bestseller",
    desc: "Handcrafted 108-bead mala with all 7 chakra gemstones for complete energetic alignment.",
    chakras: ["Root", "Sacral", "Solar Plexus", "Heart", "Throat", "Third Eye", "Crown"]
  },
  {
    id: "karungali-mala",
    name: "Karungali Crystal Mala",
    category: "malas",
    subcategory: "Crystal Malas",
    price: 1850,
    originalPrice: null,
    image: "https://krissmaagiiccrystals.com/wp-content/uploads/2025/04/c6-3.jpg",
    badge: null,
    desc: "Sacred ebony-crystal mala, protective and grounding in Vedic traditions.",
    chakras: ["Root"]
  },
  {
    id: "black-tourmaline",
    name: "Black Tourmaline Big Healing Crystal",
    category: "raw",
    subcategory: "Healing Crystals",
    price: 2400,
    originalPrice: 2800,
    image: "https://krissmaagiiccrystals.com/wp-content/uploads/2025/04/c7-3.jpg",
    badge: "Sale",
    desc: "Powerful protection against negative energies and electromagnetic radiation.",
    chakras: ["Root"]
  },
  {
    id: "malachite-pendant",
    name: "Malachite Crystal Pendant",
    category: "pendants",
    subcategory: "Pendants",
    price: 1750,
    originalPrice: null,
    image: "https://krissmaagiiccrystals.com/wp-content/uploads/2025/04/1023-1-3.jpg",
    badge: null,
    desc: "Transformation stone set in sterling silver. Heart-opener and protector.",
    chakras: ["Heart"]
  },
  {
    id: "amethyst-sphere",
    name: "Amethyst Crystal Sphere",
    category: "spheres",
    subcategory: "Crystal Spheres",
    price: 2800,
    originalPrice: null,
    image: "https://krissmaagiiccrystals.com/wp-content/uploads/2025/04/c7-3.jpg",
    badge: "New",
    desc: "A polished amethyst sphere radiating calm, spiritual clarity and meditation energy.",
    chakras: ["Third Eye", "Crown"]
  },
  {
    id: "rose-quartz-tower",
    name: "Rose Quartz Tower Point",
    category: "towers",
    subcategory: "Crystal Towers",
    price: 1950,
    originalPrice: null,
    image: "https://krissmaagiiccrystals.com/wp-content/uploads/2025/04/1023-1-3.jpg",
    badge: null,
    desc: "A beautiful tower point that amplifies love energy throughout any space it's placed in.",
    chakras: ["Heart"]
  },
  {
    id: "citrine-tree",
    name: "Citrine Crystal Money Tree",
    category: "trees",
    subcategory: "Crystal Trees",
    price: 2200,
    originalPrice: null,
    image: "https://krissmaagiiccrystals.com/wp-content/uploads/2025/04/008-1-3.jpg",
    badge: "Popular",
    desc: "Citrine is the merchant's stone — this decorative tree draws abundance and prosperity.",
    chakras: ["Solar Plexus", "Sacral"]
  },
  {
    id: "evil-eye-bracelet",
    name: "Evil Eye Crystal Bracelet",
    category: "evileye",
    subcategory: "Evil Eye",
    price: 850,
    originalPrice: null,
    image: "https://krissmaagiiccrystals.com/wp-content/uploads/2025/04/c5-3.jpg",
    badge: null,
    desc: "A classic talisman bracelet combining evil eye protection with healing crystal beads.",
    chakras: ["Root", "Throat"]
  },
  {
    id: "moonstone-ring",
    name: "Moonstone Silver Ring",
    category: "silver",
    subcategory: "Silver Jewellery",
    price: 3200,
    originalPrice: null,
    image: "https://krissmaagiiccrystals.com/wp-content/uploads/2025/04/c6-3.jpg",
    badge: "New",
    desc: "Handcrafted sterling silver ring with a genuine moonstone cabochon for intuition and new beginnings.",
    chakras: ["Third Eye", "Crown"]
  }
];
