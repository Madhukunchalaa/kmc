export interface Product {
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
  badge: "Popular" | "New" | "Sale" | "Bestseller" | null;
  desc: string;
  longDesc?: string;
  chakras: string[];
  variants?: {
    name: string;
    price: number;
    usdPrice: number;
    originalPrice?: number | null;
    originalUsdPrice?: number | null;
    image: string;
  }[];
}

export const products: Product[] = [
  {
    "id": "triple-protection-bracelet",
    "name": "Triple Protection Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1100,
    "originalPrice": 1320,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/triple%20protection%20/Pic%201",
    "badge": null,
    "desc": "Grounding, protection, confidence, and energetic stability.",
    "longDesc": "{\"purpose\":\"Grounding, protection, confidence, and energetic stability.\",\"crystalsIncluded\":\"Black Tourmaline, Hematite, Tiger Eye\",\"associatedChakras\":\"Root Chakra, Solar Plexus Chakra\",\"description\":\"The Triple Protection Bracelet combines three crystals traditionally associated with grounding, stability, confidence, and energetic protection. It is a popular choice for daily wear and travel.\",\"benefits\":[\"Encourages grounding and stability\",\"Supports confidence and focus\",\"Promotes energetic balance\",\"Suitable for daily wear\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, travel, work, and crowded environments.\",\"howToEnergize\":\"Moonlight, selenite charging, or intention setting.\",\"affirmation\":\"I am grounded, confident, and protected.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root",
      "Solar Plexus"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/triple%20protection%20/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/triple%20protection%20/5ZA01618.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/triple%20protection%20/5ZA01978.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/triple%20protection%20/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/triple%20protection%20/Pic%203"
    ],
    "usdPrice": 22,
    "originalUsdPrice": 26
  },
  {
    "id": "money-magnet-bracelet",
    "name": "Money Magnet Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1100,
    "originalPrice": 1320,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/money%20magnet/Pic%201",
    "badge": null,
    "desc": "Confidence, opportunity, motivation, and abundance mindset.",
    "longDesc": "{\"purpose\":\"Confidence, opportunity, motivation, and abundance mindset.\",\"crystalsIncluded\":\"Tiger Eye, Citrine, Pyrite, Green Aventurine\",\"associatedChakras\":\"Solar Plexus Chakra, Heart Chakra\",\"description\":\"The Money Magnet Bracelet combines crystals traditionally associated with confidence, determination, growth, and opportunity. It is designed for individuals focused on business, career goals, and personal success.\",\"benefits\":[\"Encourages confidence and motivation\",\"Supports goal-oriented thinking\",\"Promotes a positive abundance mindset\",\"Inspires determination and action\"],\"recommendedHand\":\"Right Hand\",\"whenToWear\":\"Business meetings, work, interviews, goal setting, and daily wear.\",\"howToEnergize\":\"Moonlight, selenite charging, and intention setting.\",\"affirmation\":\"I confidently attract opportunities, growth, and prosperity.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus",
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/money%20magnet/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/money%20magnet/5ZA01674.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/money%20magnet/5ZA01976.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/money%20magnet/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/money%20magnet/Pic%203"
    ],
    "usdPrice": 22,
    "originalUsdPrice": 26
  },
  {
    "id": "rose-quartz-bracelet",
    "name": "Rose Quartz Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 900,
    "originalPrice": 1080,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Rose%20quartz%20/pic%204",
    "badge": null,
    "desc": "Love, self-love, compassion, and emotional harmony.",
    "longDesc": "{\"purpose\":\"Love, self-love, compassion, and emotional harmony.\",\"crystalsIncluded\":\"Rose Quartz\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Rose Quartz is one of the most popular crystals associated with love, compassion, and emotional well-being. It is often used to encourage self-love, kindness, and harmonious relationships.\",\"benefits\":[\"Encourages self-love and compassion\",\"Supports emotional balance\",\"Promotes harmony and understanding\",\"Inspires kindness and positivity\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, meditation, self-care practices, and relationship intentions.\",\"howToEnergize\":\"Moonlight charging is especially recommended.\",\"affirmation\":\"I am worthy of love, kindness, and emotional harmony.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Rose%20quartz%20/pic%204",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Rose%20quartz%20/pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Rose%20quartz%20/5ZA01616.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Rose%20quartz%20/5ZA01617.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Rose%20quartz%20/pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Rose%20quartz%20/pic%203"
    ],
    "usdPrice": 18,
    "originalUsdPrice": 22
  },
  {
    "id": "seven-chakra-bracelet",
    "name": "Seven Chakra Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 900,
    "originalPrice": 1080,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Pic%201",
    "badge": null,
    "desc": "Chakra balancing, energetic harmony, and spiritual alignment.",
    "longDesc": "{\"purpose\":\"Chakra balancing, energetic harmony, and spiritual alignment.\",\"crystalsIncluded\":\"Seven Chakra Stones\",\"associatedChakras\":\"Root, Sacral, Solar Plexus, Heart, Throat, Third Eye, Crown\",\"description\":\"The Seven Chakra Bracelet is designed to support balance across the body’s primary energy centers. Each stone is traditionally associated with a specific chakra, encouraging harmony between the mind, body, and spirit.\",\"benefits\":[\"Supports chakra alignment\",\"Encourages energetic balance\",\"Promotes mindfulness and self-awareness\",\"Suitable for meditation and daily wear\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, meditation, yoga, prayer, and spiritual practices.\",\"howToEnergize\":\"Moonlight, selenite charging, or intention setting.\",\"affirmation\":\"I am balanced, aligned, and connected to my highest self.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root",
      "Sacral",
      "Solar Plexus",
      "Heart",
      "Throat",
      "Third Eye",
      "Crown"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/5ZA01624.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/5ZA01963.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/5ZA01657.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/5ZA01658.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/5ZA01659.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/5ZA01660.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/5ZA01661.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/5ZA01662.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/5ZA01984.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/5ZA01985.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/5ZA05641.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/Pic%204"
    ],
    "usdPrice": 18,
    "originalUsdPrice": 22
  },
  {
    "id": "black-tourmaline-bracelet",
    "name": "Black Tourmaline Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 900,
    "originalPrice": 1080,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/black%20tourmaline/Pic%201",
    "badge": null,
    "desc": "Grounding, protection, and energetic stability.",
    "longDesc": "{\"purpose\":\"Grounding, protection, and energetic stability.\",\"crystalsIncluded\":\"Black Tourmaline\",\"associatedChakras\":\"Root Chakra\",\"description\":\"Black Tourmaline is one of the most widely used grounding stones. It is traditionally associated with protection, stability, and maintaining a balanced energetic environment.\",\"benefits\":[\"Encourages grounding\",\"Supports energetic protection\",\"Promotes stability\",\"Helps maintain focus and balance\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, travel, crowded environments, work.\",\"howToEnergize\":\"Moonlight, selenite charging, intention setting.\",\"affirmation\":\"I am grounded, protected, and secure.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/black%20tourmaline/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/black%20tourmaline/5ZA01688.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/black%20tourmaline/5ZA01992.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/black%20tourmaline/5ZA05619.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/black%20tourmaline/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/black%20tourmaline/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/black%20tourmaline/Pic%204"
    ],
    "usdPrice": 18,
    "originalUsdPrice": 22
  },
  {
    "id": "irani-firoza-bracelet",
    "name": "Irani Firoza Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 2450,
    "originalPrice": 2940,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/turquoise/Pic%201",
    "badge": null,
    "desc": "Genuine Irani Turquoise for confidence, public speaking, and clear communication.",
    "longDesc": "{\"purpose\":\"Genuine Irani Turquoise for confidence, public speaking, and clear communication.\",\"crystalsIncluded\":\"Irani Firoza\",\"associatedChakras\":\"Throat\",\"description\":\"Irani Firoza Crystal Bracelet is a premium quality, authentic spiritual item. Genuine Irani Turquoise for confidence, public speaking, and clear communication. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Genuine Irani Turquoise for confidence, public speaking, and clear communication.\",\"Aligns and energises the Throat Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Throat"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/turquoise/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/turquoise/5ZA01622.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/turquoise/5ZA01638.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/turquoise/5ZA01639.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/turquoise/5ZA01782.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/turquoise/5ZA01848.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/turquoise/5ZA01968.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/turquoise/5ZA01986.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/turquoise/5ZA05645.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/turquoise/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/turquoise/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/turquoise/Pic%204"
    ],
    "usdPrice": 49,
    "originalUsdPrice": 59
  },
  {
    "id": "green-eventurine-bracelet",
    "name": "Green A Venturine Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 900,
    "originalPrice": 1080,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/green%20eventurine/Pic%201",
    "badge": null,
    "desc": "Growth, optimism, emotional balance, and opportunity.",
    "longDesc": "{\"purpose\":\"Growth, optimism, emotional balance, and opportunity.\",\"crystalsIncluded\":\"Green Aventurine\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Green Aventurine is traditionally associated with growth, optimism, and emotional well-being. It is commonly used by those seeking fresh opportunities and a positive outlook.\",\"benefits\":[\"Encourages optimism and positivity\",\"Supports emotional balance\",\"Promotes personal growth\",\"Inspires confidence in new beginnings\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, new ventures, travel, and personal development activities.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I welcome growth, positivity, and new opportunities into my life.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/green%20eventurine/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/green%20eventurine/5ZA01678.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/green%20eventurine/5ZA01971.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/green%20eventurine/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/green%20eventurine/Pic%203"
    ],
    "usdPrice": 18,
    "originalUsdPrice": 22
  },
  {
    "id": "pyrite-bracelet",
    "name": "Pyrite Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1100,
    "originalPrice": 1320,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/pyrite/Pic%201",
    "badge": null,
    "desc": "Confidence, determination, leadership, and motivation.",
    "longDesc": "{\"purpose\":\"Confidence, determination, leadership, and motivation.\",\"crystalsIncluded\":\"Pyrite\",\"associatedChakras\":\"Solar Plexus Chakra\",\"description\":\"Pyrite is traditionally associated with confidence, leadership, and determination. It is often chosen by entrepreneurs, professionals, and individuals working toward ambitious goals.\",\"benefits\":[\"Encourages confidence and leadership\",\"Supports motivation and determination\",\"Promotes goal-focused thinking\",\"Inspires positive action\"],\"recommendedHand\":\"Right Hand\",\"whenToWear\":\"Work, business meetings, interviews, and goal-setting activities.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I move forward with confidence, courage, and determination.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/pyrite/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/pyrite/5ZA01634.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/pyrite/5ZA01988.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/pyrite/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/pyrite/Pic%203"
    ],
    "usdPrice": 22,
    "originalUsdPrice": 26
  },
  {
    "id": "amethyst-bracelet",
    "name": "Amethyst Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 900,
    "originalPrice": 1080,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amethyst/Pic%201",
    "badge": null,
    "desc": "Peace, intuition, spiritual awareness, and relaxation.",
    "longDesc": "{\"purpose\":\"Peace, intuition, spiritual awareness, and relaxation.\",\"crystalsIncluded\":\"Amethyst\",\"associatedChakras\":\"Crown Chakra, Third Eye Chakra\",\"description\":\"Amethyst is one of the most popular spiritual crystals and is traditionally associated with peace, wisdom, and intuition. It is often used during meditation and mindfulness practices to support mental clarity and inner calm.\",\"benefits\":[\"Encourages relaxation\",\"Supports intuition\",\"Promotes spiritual awareness\",\"Helps create a peaceful environment\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Meditation, sleep, spiritual practices, daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I trust my intuition and embrace inner peace.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Crown",
      "Third Eye"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amethyst/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amethyst/5ZA01636.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amethyst/5ZA01637.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amethyst/5ZA01991.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amethyst/5ZA05636.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amethyst/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amethyst/Pic%203"
    ],
    "usdPrice": 18,
    "originalUsdPrice": 22
  },
  {
    "id": "citrine-bracelet",
    "name": "Citrine Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 900,
    "originalPrice": 1080,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/citrine/Pic%201",
    "badge": null,
    "desc": "Confidence, positivity, abundance mindset, and personal empowerment.",
    "longDesc": "{\"purpose\":\"Confidence, positivity, abundance mindset, and personal empowerment.\",\"crystalsIncluded\":\"Citrine\",\"associatedChakras\":\"Solar Plexus Chakra\",\"description\":\"Citrine is traditionally associated with positivity, confidence, and personal growth. It is often used by those seeking motivation, optimism, and a positive outlook on life.\",\"benefits\":[\"Encourages confidence and self-belief\",\"Promotes optimism and positivity\",\"Supports motivation and determination\",\"Inspires personal growth\"],\"recommendedHand\":\"Right Hand\",\"whenToWear\":\"Work, business activities, goal setting, and daily wear.\",\"howToEnergize\":\"Moonlight, selenite charging, or intention setting.\",\"affirmation\":\"I attract confidence, positivity, and opportunities for growth.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/citrine/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/citrine/5ZA01702.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/citrine/5ZA01995.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/citrine/5ZA05593.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/citrine/Citrine%20%2B%20Rudraksh%20/5ZA05602.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/citrine/Citrine%20%2B%20Rudraksh%20/5ZA05603.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/citrine/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/citrine/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/citrine/Pic%204"
    ],
    "usdPrice": 18,
    "originalUsdPrice": 22
  },
  {
    "id": "clear-quartz-bracelet",
    "name": "Clear Quartz Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 900,
    "originalPrice": 1080,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/clear%20quartz/Pic%201",
    "badge": null,
    "desc": "Clarity, focus, energy amplification, and intention setting.",
    "longDesc": "{\"purpose\":\"Clarity, focus, energy amplification, and intention setting.\",\"crystalsIncluded\":\"Clear Quartz\",\"associatedChakras\":\"Crown Chakra\",\"description\":\"Clear Quartz is often referred to as the “Master Crystal” and is traditionally associated with clarity, focus, and amplifying intentions. It is commonly used alongside other crystals and spiritual practices.\",\"benefits\":[\"Supports mental clarity\",\"Enhances focus and awareness\",\"Amplifies intentions and affirmations\",\"Suitable for meditation and mindfulness\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily, meditation, spiritual practices, and goal setting.\",\"howToEnergize\":\"Moonlight, sunlight (briefly), or selenite charging.\",\"affirmation\":\"My mind is clear, focused, and aligned with my intentions.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Crown"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/clear%20quartz/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/clear%20quartz/5ZA01643.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/clear%20quartz/5ZA01869.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/clear%20quartz/5ZA01974.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/clear%20quartz/5ZA01975.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/clear%20quartz/5ZA05612.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/clear%20quartz/5ZA05613.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/clear%20quartz/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/clear%20quartz/Pic%203"
    ],
    "usdPrice": 18,
    "originalUsdPrice": 22
  },
  {
    "id": "om-mani-padmehum-bracelet",
    "name": "Om Mani Padmehum Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1750,
    "originalPrice": 2100,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/OM%20mani%20padme%20hum%20%2B%20black%20obsidian/Pic%201",
    "badge": null,
    "desc": "Engraved with the sacred Buddhist mantra of compassion and wisdom.",
    "longDesc": "{\"purpose\":\"Engraved with the sacred Buddhist mantra of compassion and wisdom.\",\"crystalsIncluded\":\"Om Mani Padmehum\",\"associatedChakras\":\"Crown, Heart\",\"description\":\"The Om Mani Padme Hum Crystal Bracelet features beads engraved with the most revered six-syllable Buddhist mantra, 'Om Mani Padme Hum.' This sacred mantra translates to 'The jewel is in the lotus' and is a powerful invocation of compassion, wisdom, and spiritual transformation. Each repetition of the mantra is believed to purify the mind, protect from negative energies, and elevate the wearer's spiritual consciousness. This bracelet is a daily reminder to cultivate inner peace, kindness, and mindful awareness.\",\"benefits\":[\"Carries the vibration of the sacred Om Mani Padme Hum mantra for continuous blessings.\",\"Cultivates compassion, loving-kindness, and inner peace.\",\"Purifies the mind and protects from negative energies and thoughts.\",\"Supports deep meditation and spiritual awareness.\",\"Acts as a constant reminder of mindful, compassionate living.\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Meditation, prayer, chanting, yoga, and daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I am balanced, aligned, and connected to my highest self.\",\"careInstructions\":[\"Energize by: Chanting 'Om Mani Padme Hum' 21 times while holding the bracelet with intention.\",\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping under overnight moonlight or smudging with incense smoke.\",\"Store in a dry, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Crown",
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/OM%20mani%20padme%20hum%20%2B%20black%20obsidian/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/OM%20mani%20padme%20hum%20%2B%20black%20obsidian/5ZA01684.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/OM%20mani%20padme%20hum%20%2B%20black%20obsidian/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/OM%20mani%20padme%20hum%20%2B%20black%20obsidian/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/OM%20mani%20padme%20hum%20%2B%20black%20obsidian/Pic%204",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/OM%20mani%20padme%20hum%20%2B%20black%20obsidian/Pic%205"
    ],
    "usdPrice": 35,
    "originalUsdPrice": 42
  },
  {
    "id": "smoky-quartz-bracelet",
    "name": "Smoky Quartz Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/smoky%20quartz/Pic%201",
    "badge": null,
    "desc": "Grounding, emotional balance, and stability.",
    "longDesc": "{\"purpose\":\"Grounding, emotional balance, and stability.\",\"crystalsIncluded\":\"Smoky Quartz\",\"associatedChakras\":\"Root Chakra\",\"description\":\"Smoky Quartz is traditionally associated with grounding, stability, and maintaining a calm mindset. It is a popular crystal for those seeking balance and focus.\",\"benefits\":[\"Encourages grounding and stability\",\"Supports emotional balance\",\"Promotes focus and calmness\",\"Inspires resilience\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Stressful situations, work, travel, and daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I remain calm, grounded, and focused.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/smoky%20quartz/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/smoky%20quartz/5ZA01670.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/smoky%20quartz/5ZA01830.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/smoky%20quartz/5ZA01983.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/smoky%20quartz/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/smoky%20quartz/Pic%203"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34
  },
  {
    "id": "red-jasper-bracelet",
    "name": "Red Jasper Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 900,
    "originalPrice": 1080,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20jasper/Pic%201",
    "badge": null,
    "desc": "Grounding, stability, courage, and endurance.",
    "longDesc": "{\"purpose\":\"Grounding, stability, courage, and endurance.\",\"crystalsIncluded\":\"Red Jasper\",\"associatedChakras\":\"Root Chakra\",\"description\":\"Red Jasper is traditionally associated with stability, grounding, and steady determination. It is often chosen by those seeking balance, resilience, and emotional strength.\",\"benefits\":[\"Encourages grounding and stability\",\"Supports emotional strength\",\"Promotes resilience and endurance\",\"Inspires courage and determination\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, travel, work, and stressful situations.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I am grounded, strong, and resilient.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20jasper/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20jasper/5ZA01627.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20jasper/5ZA01675.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20jasper/5ZA01676.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20jasper/5ZA01806.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20jasper/5ZA01866.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20jasper/5ZA01977.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20jasper/5ZA01997.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20jasper/5ZA05624.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20jasper/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20jasper/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20jasper/Pic%204"
    ],
    "usdPrice": 18,
    "originalUsdPrice": 22
  },
  {
    "id": "dalmatian-jasper-bracelet",
    "name": "Dalmatian Jasper Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/dalmatian%20jasper/Pic%201",
    "badge": null,
    "desc": "Positivity, grounding, and emotional balance.",
    "longDesc": "{\"purpose\":\"Positivity, grounding, and emotional balance.\",\"crystalsIncluded\":\"Dalmatian Jasper\",\"associatedChakras\":\"Root Chakra\",\"description\":\"Dalmatian Jasper is traditionally associated with joy, grounding, and emotional stability. Its playful appearance makes it popular among those seeking a light-hearted and balanced energy.\",\"benefits\":[\"Encourages positivity and optimism\",\"Supports grounding and stability\",\"Promotes emotional balance\",\"Inspires a playful outlook on life\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, social activities, and travel.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I welcome joy, balance, and positive energy into my life.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/dalmatian%20jasper/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/dalmatian%20jasper/5ZA01644.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/dalmatian%20jasper/5ZA01645.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/dalmatian%20jasper/5ZA01960.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/dalmatian%20jasper/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/dalmatian%20jasper/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/dalmatian%20jasper/Pic%204"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34
  },
  {
    "id": "shungite-bracelet",
    "name": "Shungite Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 900,
    "originalPrice": 1080,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/shungite%20/Pic%201",
    "badge": null,
    "desc": "Grounding, stability, and energetic balance.",
    "longDesc": "{\"purpose\":\"Grounding, stability, and energetic balance.\",\"crystalsIncluded\":\"Shungite\",\"associatedChakras\":\"Root Chakra\",\"description\":\"Shungite is traditionally associated with grounding and maintaining a balanced energetic environment. It is often worn by those seeking stability and focus in their daily lives.\",\"benefits\":[\"Encourages grounding and stability\",\"Supports focus and balance\",\"Promotes emotional resilience\",\"Suitable for daily wear\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Work, travel, meditation, and daily activities.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I am grounded, balanced, and centered.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/shungite%20/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/shungite%20/5ZA01620.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/shungite%20/5ZA01980.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/shungite%20/5ZA05581.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/shungite%20/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/shungite%20/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/shungite%20/Pic%204"
    ],
    "usdPrice": 18,
    "originalUsdPrice": 22
  },
  {
    "id": "tiger-eye-bracelet",
    "name": "Tiger Eye Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 900,
    "originalPrice": 1080,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/tiger%20eye/Pic%201",
    "badge": null,
    "desc": "Confidence, focus, courage, and determination.",
    "longDesc": "{\"purpose\":\"Confidence, focus, courage, and determination.\",\"crystalsIncluded\":\"Tiger Eye\",\"associatedChakras\":\"Solar Plexus Chakra, Root Chakra\",\"description\":\"Tiger Eye is traditionally associated with courage, confidence, and focus. It is one of the most popular stones for those seeking motivation and balanced decision-making.\",\"benefits\":[\"Encourages confidence and courage\",\"Supports focus and determination\",\"Promotes balanced decision-making\",\"Inspires motivation and action\"],\"recommendedHand\":\"Right Hand\",\"whenToWear\":\"Work, interviews, business meetings, and daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I move forward with confidence, courage, and clarity.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus",
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/tiger%20eye/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/tiger%20eye/5ZA01629.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/tiger%20eye/5ZA01959.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/tiger%20eye/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/tiger%20eye/Pic%203"
    ],
    "usdPrice": 18,
    "originalUsdPrice": 22
  },
  {
    "id": "golden-pyrite-bracelet",
    "name": "Golden Pyrite Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/golden%20pyrite/Pic%201",
    "badge": null,
    "desc": "Confidence, determination, abundance mindset, and motivation.",
    "longDesc": "{\"purpose\":\"Confidence, determination, abundance mindset, and motivation.\",\"crystalsIncluded\":\"Golden Pyrite\",\"associatedChakras\":\"Solar Plexus Chakra\",\"description\":\"Golden Pyrite is traditionally associated with confidence, determination, and personal empowerment. It is often used by those seeking motivation and a strong mindset for achieving goals.\",\"benefits\":[\"Encourages confidence and leadership\",\"Supports determination and focus\",\"Promotes motivation and ambition\",\"Inspires positive action\"],\"recommendedHand\":\"Right Hand\",\"whenToWear\":\"Business activities, work, meetings, and goal setting.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I move forward with confidence, determination, and purpose.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/golden%20pyrite/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/golden%20pyrite/5ZA01712.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/golden%20pyrite/5ZA01964.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/golden%20pyrite/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/golden%20pyrite/Pic%203"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34
  },
  {
    "id": "angel-aura-bracelet",
    "name": "Angel Aura Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angel%20aura/Pic%201",
    "badge": null,
    "desc": "Quartz bonded with precious metals to radiate angelic joy, peace, and spiritual light.",
    "longDesc": "{\"purpose\":\"Quartz bonded with precious metals to radiate angelic joy, peace, and spiritual light.\",\"crystalsIncluded\":\"Aura\",\"associatedChakras\":\"Crown\",\"description\":\"Angel Aura Quartz is created by bonding Clear Quartz with vaporized platinum and silver through a special process, resulting in its stunning iridescent, rainbow-like shimmer. Deeply connected to the Crown Chakra, Angel Aura Quartz is traditionally associated with joy, optimism, spiritual communication, and angelic energy. Its luminous beauty makes it both a wearable piece of art and a powerful spiritual tool for those seeking elevated vibrations, inner peace, and connection to higher consciousness.\",\"benefits\":[\"Radiates high-vibrational energy of joy, peace, and spiritual light.\",\"Connects the wearer to angelic realms and higher consciousness.\",\"Uplifts mood, promotes optimism, and dispels negativity.\",\"Activates and aligns the Crown and Soul Star Chakras.\",\"Amplifies healing intentions and spiritual practices.\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Meditation, yoga, spiritual practices, healing sessions, and daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I welcome peace, light, and positive energy into my life.\",\"careInstructions\":[\"Energize by: Moonlight overnight or selenite plate charging.\",\"Avoid contact with water, soap, and cosmetic chemicals to preserve the metallic bonding.\",\"Cleanse periodically by keeping under overnight moonlight or smudging with incense smoke.\",\"Store in a dry, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Crown"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angel%20aura/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angel%20aura/5ZA01709.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angel%20aura/5ZA01710.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angel%20aura/5ZA01954.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angel%20aura/5ZA05614.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angel%20aura/5ZA05615.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angel%20aura/5ZA05630.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angel%20aura/5ZA05631.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angel%20aura/Pic%202"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34
  },
  {
    "id": "evil-eye-bracelet",
    "name": "Evil Eye Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 600,
    "originalPrice": 720,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/evil%20eye/Pic%201",
    "badge": null,
    "desc": "Protection, positivity, and symbolic safeguarding.",
    "longDesc": "{\"purpose\":\"Protection, positivity, and symbolic safeguarding.\",\"crystalsIncluded\":\"Evil Eye Bead/Charm\",\"associatedChakras\":\"Not Chakra-Specific\",\"description\":\"The Evil Eye Bracelet is a traditional protective symbol used across many cultures. It is commonly worn as a reminder of positivity, protection, and good intentions.\",\"benefits\":[\"Symbolizes protection\",\"Encourages positive energy\",\"Serves as a meaningful daily accessory\",\"Complements spiritual practices\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, travel, work, and social gatherings.\",\"howToEnergize\":\"Moonlight or intention setting.\",\"affirmation\":\"I am surrounded by positivity, protection, and peace.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Not -Specific"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/evil%20eye/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/evil%20eye/5ZA01653.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/evil%20eye/5ZA01967.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/evil%20eye/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/evil%20eye/Pic%203"
    ],
    "usdPrice": 12,
    "originalUsdPrice": 14
  },
  {
    "id": "angelite-bracelet",
    "name": "Angelite Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 900,
    "originalPrice": 1080,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angelite/Pic%201",
    "badge": null,
    "desc": "Peace, compassion, and spiritual awareness.",
    "longDesc": "{\"purpose\":\"Peace, compassion, and spiritual awareness.\",\"crystalsIncluded\":\"Angelite\",\"associatedChakras\":\"Throat Chakra, Crown Chakra\",\"description\":\"Angelite is traditionally associated with serenity, compassion, and gentle communication. It is often used by those seeking a calming energy and a deeper connection to spiritual practices.\",\"benefits\":[\"Encourages peaceful communication\",\"Supports emotional calmness\",\"Promotes compassion\",\"Enhances mindfulness practices\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Meditation, spiritual work, daily wear.\",\"howToEnergize\":\"Selenite charging or moonlight.\",\"affirmation\":\"I communicate with peace, compassion, and understanding.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Throat",
      "Crown"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angelite/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angelite/5ZA01672.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angelite/5ZA01957.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angelite/5ZA05604.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angelite/5ZA05627.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angelite/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angelite/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angelite/Pic%204",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angelite/Pic%205"
    ],
    "usdPrice": 18,
    "originalUsdPrice": 22
  },
  {
    "id": "peridot-bracelet",
    "name": "Peridot Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/peridot/Pic%201",
    "badge": null,
    "desc": "Growth, positivity, and emotional renewal.",
    "longDesc": "{\"purpose\":\"Growth, positivity, and emotional renewal.\",\"crystalsIncluded\":\"Peridot\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Peridot is traditionally associated with growth, positivity, and renewal. Its vibrant green color symbolizes fresh beginnings and a positive outlook.\",\"benefits\":[\"Encourages optimism\",\"Supports emotional renewal\",\"Promotes personal growth\",\"Inspires positive thinking\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"New beginnings, personal development, and daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I welcome growth, positivity, and fresh opportunities.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/peridot/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/peridot/5ZA01668.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/peridot/5ZA01961.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/peridot/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/peridot/Pic%203"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34
  },
  {
    "id": "rhodonite-bracelet",
    "name": "Rhodonite Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 900,
    "originalPrice": 1080,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/rhodonite/Pic%201",
    "badge": null,
    "desc": "Compassion, emotional balance, forgiveness, and self-love.",
    "longDesc": "{\"purpose\":\"Compassion, emotional balance, forgiveness, and self-love.\",\"crystalsIncluded\":\"Rhodonite\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Rhodonite is traditionally associated with compassion, emotional healing, and harmony. It is often used by those seeking emotional balance and positive relationships.\",\"benefits\":[\"Encourages compassion and understanding\",\"Supports emotional balance\",\"Promotes self-love and forgiveness\",\"Inspires harmonious relationships\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, meditation, relationship-focused intentions, and self-care routines.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I choose compassion, balance, and emotional harmony.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/rhodonite/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/rhodonite/5ZA01632.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/rhodonite/5ZA01972.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/rhodonite/5ZA05595.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/rhodonite/5ZA05597.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/rhodonite/5ZA05598.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/rhodonite/5ZA05599.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/rhodonite/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/rhodonite/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/rhodonite/Pic%204"
    ],
    "usdPrice": 18,
    "originalUsdPrice": 22
  },
  {
    "id": "blue-howlite-bracelet",
    "name": "Blue Howlite Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 950,
    "originalPrice": 1140,
    "image": "/images/products/bracelet.png",
    "badge": null,
    "desc": "Extremely calming stone, great for reducing anger and sleeplessness.",
    "longDesc": "{\"purpose\":\"Extremely calming stone, great for reducing anger and sleeplessness.\",\"crystalsIncluded\":\"Blue Howlite\",\"associatedChakras\":\"Throat\",\"description\":\"Blue Howlite Crystal Bracelet is a premium quality, authentic spiritual item. Extremely calming stone, great for reducing anger and sleeplessness. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Extremely calming stone, great for reducing anger and sleeplessness.\",\"Aligns and energises the Throat Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Throat"
    ],
    "images": [
      "/images/products/bracelet.png"
    ],
    "usdPrice": 19,
    "originalUsdPrice": 23
  },
  {
    "id": "multiflourite-bracelet",
    "name": "Multiflourite Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/multi%20flourite/Multiflourite%20pic%201",
    "badge": null,
    "desc": "Brings mental clarity, order, and structured focus to a chaotic mind.",
    "longDesc": "{\"purpose\":\"Focus, clarity, learning, and balanced thinking.\",\"crystalsIncluded\":\"Rainbow Fluorite\",\"associatedChakras\":\"Heart Chakra, Third Eye Chakra, Crown Chakra\",\"description\":\"Rainbow Fluorite is traditionally associated with mental clarity, focus, and organized thinking. It is a popular crystal among students, professionals, and those seeking greater concentration.\",\"benefits\":[\"Encourages focus and concentration\",\"Supports organized thinking\",\"Promotes mental clarity\",\"Inspires balanced decision-making\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Study sessions, work, planning, and daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"My mind is focused, clear, and aligned with my goals.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Third Eye"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/multi%20flourite/Multiflourite%20pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/multi%20flourite/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/multi%20flourite/Pic%203"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34
  },
  {
    "id": "sulemani-hakik-bracelet",
    "name": "Sulemani Hakik Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/sulemani%20haikik/Pic%201",
    "badge": null,
    "desc": "Traditional gemstone used to block black magic and malefic planetary influences.",
    "longDesc": "{\"purpose\":\"Grounding, protection, confidence, and stability.\",\"crystalsIncluded\":\"Suleimani Hakeek (Agate)\",\"associatedChakras\":\"Root Chakra\",\"description\":\"Suleimani Hakeek is traditionally valued for grounding and stability. It is commonly worn in spiritual traditions as a symbol of strength, focus, and protection.\",\"benefits\":[\"Encourages grounding and balance\",\"Supports confidence and stability\",\"Promotes focus and resilience\",\"Suitable for daily wear\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, travel, meditation, and spiritual practices.\",\"howToEnergize\":\"Moonlight, prayer, or selenite charging.\",\"affirmation\":\"I am strong, grounded, and protected.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/sulemani%20haikik/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/sulemani%20haikik/5ZA01697.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/sulemani%20haikik/5ZA01698.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/sulemani%20haikik/5ZA01979.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/sulemani%20haikik/5ZA05643.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/sulemani%20haikik/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/sulemani%20haikik/Pic%203"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34
  },
  {
    "id": "lava-seven-chakra-bracelet",
    "name": "Lava Seven Chakra Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1250,
    "originalPrice": 1500,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/Pic%201",
    "badge": null,
    "desc": "Grounding volcanic rock combined with 7 chakra balancing crystals.",
    "longDesc": "{\"purpose\":\"Chakra balancing, energetic harmony, and spiritual alignment.\",\"crystalsIncluded\":\"Seven Chakra Stones\",\"associatedChakras\":\"Root, Sacral, Solar Plexus, Heart, Throat, Third Eye, Crown\",\"description\":\"The Seven Chakra Bracelet is designed to support balance across the body’s primary energy centers. Each stone is traditionally associated with a specific chakra, encouraging harmony between the mind, body, and spirit.\",\"benefits\":[\"Supports chakra alignment\",\"Encourages energetic balance\",\"Promotes mindfulness and self-awareness\",\"Suitable for meditation and daily wear\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, meditation, yoga, prayer, and spiritual practices.\",\"howToEnergize\":\"Moonlight, selenite charging, or intention setting.\",\"affirmation\":\"I am balanced, aligned, and connected to my highest self.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root",
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/5ZA01657.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/5ZA01658.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/5ZA01659.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/5ZA01660.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/5ZA01661.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/5ZA01662.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/5ZA01984.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/5ZA01985.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/5ZA05641.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/Pic%204"
    ],
    "usdPrice": 25,
    "originalUsdPrice": 30
  },
  {
    "id": "red-garnet-chakra-bracelet",
    "name": "Red Garnet Chakra Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20garnet/Red%20garnet%20pic%201",
    "badge": null,
    "desc": "Passion, vitality, courage, and renewed determination.",
    "longDesc": "{\"purpose\":\"Passion, confidence, vitality, and determination.\",\"crystalsIncluded\":\"Red Garnet\",\"associatedChakras\":\"Root Chakra\",\"description\":\"Red Garnet is traditionally associated with vitality, confidence, and determination. Its rich red color symbolizes strength, motivation, and perseverance, making it a popular choice for those pursuing personal goals.\",\"benefits\":[\"Encourages confidence and courage\",\"Supports determination and motivation\",\"Promotes grounding and stability\",\"Inspires perseverance\"],\"recommendedHand\":\"Right Hand\",\"whenToWear\":\"Work, fitness activities, goal setting, and daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I move forward with confidence, strength, and determination.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20garnet/Red%20garnet%20pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20garnet/5ZA01679.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20garnet/5ZA01680.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20garnet/5ZA01966.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20garnet/5ZA05607.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20garnet/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20garnet/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20garnet/Pic%204"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34
  },
  {
    "id": "citrine-rudraksha-bracelet",
    "name": "Citrine Rudraksha Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/citrine/Citrine%20%2B%20Rudraksh%20/5ZA05602.JPG",
    "badge": null,
    "desc": "Sacred Rudraksha seeds combined with wealth-attracting Citrine beads.",
    "longDesc": "{\"purpose\":\"Confidence, positivity, abundance mindset, and personal empowerment.\",\"crystalsIncluded\":\"Citrine\",\"associatedChakras\":\"Solar Plexus Chakra\",\"description\":\"Citrine is traditionally associated with positivity, confidence, and personal growth. It is often used by those seeking motivation, optimism, and a positive outlook on life.\",\"benefits\":[\"Encourages confidence and self-belief\",\"Promotes optimism and positivity\",\"Supports motivation and determination\",\"Inspires personal growth\"],\"recommendedHand\":\"Right Hand\",\"whenToWear\":\"Work, business activities, goal setting, and daily wear.\",\"howToEnergize\":\"Moonlight, selenite charging, or intention setting.\",\"affirmation\":\"I attract confidence, positivity, and opportunities for growth.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/citrine/Citrine%20%2B%20Rudraksh%20/5ZA05602.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/citrine/Citrine%20%2B%20Rudraksh%20/5ZA05603.JPG"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34
  },
  {
    "id": "grey-cats-eye-bracelet",
    "name": "Grey Cat’S Eye Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1750,
    "originalPrice": 2100,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/grey%20cats%20eye/Pic%201",
    "badge": null,
    "desc": "Focus, awareness, protection, and confidence.",
    "longDesc": "{\"purpose\":\"Focus, awareness, protection, and confidence.\",\"crystalsIncluded\":\"Grey Cat’s Eye\",\"associatedChakras\":\"Root Chakra, Solar Plexus Chakra\",\"description\":\"Grey Cat’s Eye is traditionally associated with focus, awareness, and maintaining a balanced mindset. Many crystal enthusiasts wear it as a grounding stone that supports alertness and confidence.\",\"benefits\":[\"Encourages focus and concentration\",\"Supports confidence and awareness\",\"Promotes grounding energy\",\"Helps maintain emotional balance\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Work, study, travel, and daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I remain focused, confident, and grounded in every situation.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root",
      "Solar Plexus"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/grey%20cats%20eye/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/grey%20cats%20eye/5ZA01716.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/grey%20cats%20eye/5ZA01755.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/grey%20cats%20eye/5ZA01757.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/grey%20cats%20eye/5ZA01981.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/grey%20cats%20eye/5ZA05635.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/grey%20cats%20eye/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/grey%20cats%20eye/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/grey%20cats%20eye/Pic%204"
    ],
    "usdPrice": 35,
    "originalUsdPrice": 42
  },
  {
    "id": "moon-stone-bracelet",
    "name": "Moon Stone Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/Pic%201",
    "badge": null,
    "desc": "Enhances intuition, divine feminine energy, and emotional healing.",
    "longDesc": "{\"purpose\":\"Enhances intuition, divine feminine energy, and emotional healing.\",\"associatedChakras\":\"Third Eye, Crown\",\"description\":\"Moon Stone Crystal Bracelet is a premium quality, authentic spiritual item. Enhances intuition, divine feminine energy, and emotional healing. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Enhances intuition, divine feminine energy, and emotional healing.\",\"Aligns and energises the Third Eye, Crown Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I trust my intuition and embrace emotional balance.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Third Eye",
      "Crown"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/5ZA01696.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/5ZA05611.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/5ZA05620.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/5ZA05621.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/Pic%204"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34
  },
  {
    "id": "blue-apatite-bracelet",
    "name": "Blue Apatite Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/blue%20apatite/Pic%201",
    "badge": null,
    "desc": "Motivation, focus, personal growth, and goal setting.",
    "longDesc": "{\"purpose\":\"Motivation, focus, personal growth, and goal setting.\",\"crystalsIncluded\":\"Blue Apatite\",\"associatedChakras\":\"Throat Chakra, Third Eye Chakra\",\"description\":\"Blue Apatite is traditionally associated with inspiration, motivation, and mental clarity. Many crystal enthusiasts use it when working toward personal goals, learning new skills, or enhancing focus and self-expression.\",\"benefits\":[\"Encourages motivation and ambition\",\"Supports mental clarity and focus\",\"Promotes creativity and learning\",\"Enhances communication and self-expression\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"During work, study, planning, goal setting, and daily activities.\",\"howToEnergize\":\"Moonlight, selenite charging, or intention setting.\",\"affirmation\":\"I am focused, motivated, and open to new possibilities.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Throat",
      "Third Eye"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/blue%20apatite/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/blue%20apatite/5ZA01654.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/blue%20apatite/5ZA01655.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/blue%20apatite/5ZA01994.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/blue%20apatite/5ZA05628.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/blue%20apatite/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/blue%20apatite/Pic%203"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34
  },
  {
    "id": "lapis-lazuli-bracelet",
    "name": "Lapis Lazuli Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 900,
    "originalPrice": 1080,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Lapis%20lazuli/Pic%201",
    "badge": null,
    "desc": "Wisdom, communication, intuition, and self- expression.",
    "longDesc": "{\"purpose\":\"Wisdom, communication, intuition, and self-expression.\",\"crystalsIncluded\":\"Lapis Lazuli\",\"associatedChakras\":\"Throat Chakra, Third Eye Chakra\",\"description\":\"Lapis Lazuli has long been associated with wisdom, truth, and self-expression. It is traditionally used to support clear communication and deeper self-awareness.\",\"benefits\":[\"Encourages confident communication\",\"Supports intuition and insight\",\"Promotes mental clarity\",\"Inspires self-awareness\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Meetings, presentations, study, meditation, and daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I express my truth with wisdom, confidence, and clarity.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Throat",
      "Third Eye"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Lapis%20lazuli/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Lapis%20lazuli/5ZA01686.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Lapis%20lazuli/5ZA01969.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Lapis%20lazuli/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Lapis%20lazuli/Pic%203"
    ],
    "usdPrice": 18,
    "originalUsdPrice": 22
  },
  {
    "id": "amazonite-bracelet",
    "name": "Amazonite Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amazonite/Pic%201",
    "badge": null,
    "desc": "Communication, emotional balance, and self- expression.",
    "longDesc": "{\"purpose\":\"Communication, emotional balance, and self-expression.\",\"crystalsIncluded\":\"Amazonite\",\"associatedChakras\":\"Heart Chakra, Throat Chakra\",\"description\":\"Amazonite is traditionally associated with calm communication, emotional clarity, and balanced self-expression. Many crystal enthusiasts use Amazonite to encourage honest conversations and promote harmony between thoughts and feelings.\",\"benefits\":[\"Encourages clear communication\",\"Supports emotional balance\",\"Promotes confidence in self-expression\",\"Helps maintain a calm mindset\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Meetings, conversations, presentations, daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I express my truth with confidence and kindness.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart",
      "Throat"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amazonite/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amazonite/5ZA01663.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amazonite/5ZA01962.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amazonite/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amazonite/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amazonite/Pic%204",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amazonite/Pic%205"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34
  },
  {
    "id": "aquamarine-bracelet",
    "name": "Aquamarine Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/aquamarine/Pic%201",
    "badge": null,
    "desc": "Calm communication, courage, and emotional balance.",
    "longDesc": "{\"purpose\":\"Calm communication, courage, and emotional balance.\",\"crystalsIncluded\":\"Aquamarine\",\"associatedChakras\":\"Throat Chakra\",\"description\":\"Aquamarine is traditionally associated with courage, clarity, and calm communication. Many crystal enthusiasts use it to encourage confident expression and emotional balance.\",\"benefits\":[\"Encourages communication\",\"Supports emotional clarity\",\"Promotes confidence\",\"Helps maintain inner calm\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Meetings, public speaking, daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I communicate clearly, calmly, and confidently.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Throat"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/aquamarine/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/aquamarine/5ZA01694.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/aquamarine/5ZA05591.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/aquamarine/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/aquamarine/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/aquamarine/Pic%204"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34
  },
  {
    "id": "sunstone-bracelet",
    "name": "Sunstone Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 900,
    "originalPrice": 1080,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/sun%20stone/Pic%201",
    "badge": null,
    "desc": "Confidence, optimism, leadership, and personal empowerment.",
    "longDesc": "{\"purpose\":\"Confidence, optimism, leadership, and personal empowerment.\",\"crystalsIncluded\":\"Sunstone\",\"associatedChakras\":\"Solar Plexus Chakra, Sacral Chakra\",\"description\":\"Sunstone is traditionally associated with confidence, positivity, and personal empowerment. Its warm energy makes it popular among those seeking motivation and self-belief.\",\"benefits\":[\"Encourages confidence and optimism\",\"Supports leadership qualities\",\"Promotes motivation and positivity\",\"Inspires personal growth\"],\"recommendedHand\":\"Right Hand\",\"whenToWear\":\"Work, business, social events, and goal setting.\",\"howToEnergize\":\"Morning sunlight (briefly), moonlight, or selenite charging.\",\"affirmation\":\"I shine with confidence, positivity, and purpose.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus",
      "Sacral"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/sun%20stone/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/sun%20stone/5ZA01648.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/sun%20stone/5ZA01649.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/sun%20stone/5ZA01650.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/sun%20stone/5ZA01651.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/sun%20stone/5ZA01996.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/sun%20stone/Pic%202"
    ],
    "usdPrice": 18,
    "originalUsdPrice": 22
  },
  {
    "id": "peach-moonstone-bracelet",
    "name": "Peach Moonstone Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/Pic%201",
    "badge": null,
    "desc": "Emotional comfort, self-love, and inner balance.",
    "longDesc": "{\"purpose\":\"Emotional comfort, self-love, and inner balance.\",\"crystalsIncluded\":\"Peach Moonstone\",\"associatedChakras\":\"Sacral Chakra\",\"description\":\"Peach Moonstone is traditionally associated with emotional comfort, self-nurturing, and balanced emotions. It is often chosen by those seeking gentle support during life’s changes.\",\"benefits\":[\"Encourages emotional balance\",\"Supports self-love and self-care\",\"Promotes inner calm\",\"Inspires optimism\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, self-care routines, meditation, and relaxation.\",\"howToEnergize\":\"Moonlight charging.\",\"affirmation\":\"I nurture myself with kindness, patience, and love.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Sacral"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/5ZA01696.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/5ZA05611.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/5ZA05620.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/5ZA05621.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/Pic%204"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34
  },
  {
    "id": "strawberry-quartz-bracelet",
    "name": "Strawberry Quartz Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 900,
    "originalPrice": 1080,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/strawberry%20quartz/Pic%201",
    "badge": null,
    "desc": "Joy, love, positivity, and emotional well-being.",
    "longDesc": "{\"purpose\":\"Joy, love, positivity, and emotional well-being.\",\"crystalsIncluded\":\"Strawberry Quartz\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Strawberry Quartz is traditionally associated with joy, love, and positive emotions. Its gentle energy makes it a popular choice for those seeking emotional harmony and optimism.\",\"benefits\":[\"Encourages positivity and joy\",\"Supports emotional balance\",\"Promotes love and compassion\",\"Inspires optimism\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, self-care, meditation, and social activities.\",\"howToEnergize\":\"Moonlight charging.\",\"affirmation\":\"I welcome joy, love, and positivity into my life.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/strawberry%20quartz/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/strawberry%20quartz/5ZA01640.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/strawberry%20quartz/5ZA01987.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/strawberry%20quartz/5ZA05585.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/strawberry%20quartz/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/strawberry%20quartz/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/strawberry%20quartz/Pic%204"
    ],
    "usdPrice": 18,
    "originalUsdPrice": 22
  },
  {
    "id": "morganite-bracelet",
    "name": "Morganite Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/morganite/Pic%201",
    "badge": null,
    "desc": "Love, compassion, emotional healing, and harmony.",
    "longDesc": "{\"purpose\":\"Love, compassion, emotional healing, and harmony.\",\"crystalsIncluded\":\"Morganite\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Morganite is traditionally associated with love, compassion, and emotional well-being. It is often worn by those seeking harmony, forgiveness, and positive relationships.\",\"benefits\":[\"Encourages love and compassion\",\"Supports emotional balance\",\"Promotes understanding and harmony\",\"Inspires kindness and patience\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, meditation, self-care, and relationship-focused intentions.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I radiate love, compassion, and emotional harmony.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/morganite/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/morganite/5ZA01666.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/morganite/5ZA01951.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/morganite/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/morganite/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/morganite/Pic%204",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/morganite/Pic%205"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34
  },
  {
    "id": "ametrine-bracelet",
    "name": "Ametrine Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/ametrine/Pic%201",
    "badge": null,
    "desc": "Balance, focus, clarity, and personal growth.",
    "longDesc": "{\"purpose\":\"Balance, focus, clarity, and personal growth.\",\"crystalsIncluded\":\"Ametrine\",\"associatedChakras\":\"Solar Plexus Chakra, Crown Chakra\",\"description\":\"Ametrine combines the qualities traditionally associated with Amethyst and Citrine. It is often used to encourage balanced thinking, mental clarity, and positive decision-making while supporting personal growth.\",\"benefits\":[\"Encourages focus and clarity\",\"Supports balanced thinking\",\"Promotes confidence\",\"Encourages positive transformation\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Work, study, planning, daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I welcome clarity, confidence, and positive growth.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus",
      "Crown"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/ametrine/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/ametrine/5ZA01700.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/ametrine/5ZA01982.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/ametrine/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/ametrine/Pic%203"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34
  },
  {
    "id": "pixu-om-mani-padmeham-bracelet",
    "name": "Pixu Om Mani Padmeham Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1750,
    "originalPrice": 2100,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Om%20Mani%20Padme%20Hum%20Black%20Obsidian%20Pixiu/Pic%201",
    "badge": null,
    "desc": "Feng Shui Pixiu combined with sacred Buddhist Om Mani Padme Hum mantra beads.",
    "longDesc": "{\"purpose\":\"Feng Shui Pixiu combined with sacred Buddhist Om Mani Padme Hum mantra beads.\",\"crystalsIncluded\":\"Pixu Om Mani Padmeham\",\"associatedChakras\":\"Root, Crown\",\"description\":\"The Pixiu Om Mani Padme Hum Crystal Bracelet is a powerful combination of Feng Shui symbolism and Buddhist wisdom. The Pixiu — a mythical celestial creature in Chinese culture — is traditionally believed to attract wealth, abundance, and prosperity while protecting its owner from misfortune. Paired with the sacred Om Mani Padme Hum mantra beads, this bracelet carries the vibration of compassion, wisdom, and spiritual protection. Together, these elements create a deeply meaningful bracelet for those seeking both material success and spiritual growth.\",\"benefits\":[\"Attracts wealth, abundance, and financial opportunities (Pixiu).\",\"Provides energetic protection against misfortune and negative energies.\",\"Carries the sacred energy of the Om Mani Padme Hum mantra for spiritual blessings.\",\"Promotes focus, discipline, and clarity for personal and professional growth.\",\"Connects the wearer to both spiritual wisdom and material prosperity.\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, business activities, meditation, and prayer.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I am grounded, focused, and open to prosperity, wisdom, and positive opportunities.\",\"careInstructions\":[\"Energize by: Moonlight charging overnight or chanting 'Om Mani Padme Hum' 21 times while holding the bracelet.\",\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping under overnight moonlight or smudging with incense smoke.\",\"Store in a dry, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Root",
      "Crown"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Om%20Mani%20Padme%20Hum%20Black%20Obsidian%20Pixiu/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Om%20Mani%20Padme%20Hum%20Black%20Obsidian%20Pixiu/5ZA01704.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Om%20Mani%20Padme%20Hum%20Black%20Obsidian%20Pixiu/5ZA01706.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Om%20Mani%20Padme%20Hum%20Black%20Obsidian%20Pixiu/5ZA01768.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Om%20Mani%20Padme%20Hum%20Black%20Obsidian%20Pixiu/5ZA01775.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Om%20Mani%20Padme%20Hum%20Black%20Obsidian%20Pixiu/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Om%20Mani%20Padme%20Hum%20Black%20Obsidian%20Pixiu/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Om%20Mani%20Padme%20Hum%20Black%20Obsidian%20Pixiu/Pic%204"
    ],
    "usdPrice": 35,
    "originalUsdPrice": 42
  },
  {
    "id": "mother-pearls-bracelet",
    "name": "Mother Pearls Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1250,
    "originalPrice": 1500,
    "image": "/images/products/bracelet.png",
    "badge": null,
    "desc": "Gentle, soothing shell energy for peace, clarity, and emotional balance.",
    "longDesc": "{\"purpose\":\"Gentle, soothing shell energy for peace, clarity, and emotional balance.\",\"crystalsIncluded\":\"Mother Pearls\",\"associatedChakras\":\"Heart\",\"description\":\"The Mother of Pearl Crystal Bracelet features lustrous shell beads that carry a gentle, ocean-inspired energy. Mother of Pearl is traditionally associated with protection, emotional clarity, and inner harmony. Revered across many cultures for its connection to the divine feminine, intuition, and gentle healing energy, it is believed to soothe emotional distress, attract positive energy, and promote a serene and balanced state of mind.\",\"benefits\":[\"Promotes emotional clarity, inner calm, and a sense of peace.\",\"Gently soothes emotional distress and supports emotional healing.\",\"Connects the wearer to feminine, nurturing energy.\",\"Attracts positive energy and encourages harmonious relationships.\",\"Adds a touch of timeless, natural elegance to any outfit.\"],\"whenToWear\":\"Daily wear, meetings, social events, meditation, and relaxation.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Energize by: Moonlight overnight charging or intention setting.\",\"Avoid prolonged contact with water, soap, and cosmetic chemicals.\",\"Wipe gently with a soft dry cloth to maintain its natural lustre.\",\"Store in a dry, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "/images/products/bracelet.png"
    ],
    "usdPrice": 25,
    "originalUsdPrice": 30
  },
  {
    "id": "malachite-bracelet",
    "name": "Malachite Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 2200,
    "originalPrice": 2640,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/malachite/Pic%201",
    "badge": null,
    "desc": "Transformation, confidence, and personal growth.",
    "longDesc": "{\"purpose\":\"Transformation, confidence, and personal growth.\",\"crystalsIncluded\":\"Malachite\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Malachite is traditionally associated with transformation and personal growth. It is often chosen by those navigating change and seeking courage to move forward.\",\"benefits\":[\"Encourages personal transformation\",\"Supports confidence and determination\",\"Promotes emotional awareness\",\"Inspires growth and positive change\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"During life transitions, new beginnings, and personal development journeys.\",\"howToEnergize\":\"Selenite charging only. Avoid prolonged water exposure.\",\"affirmation\":\"I embrace positive transformation and move forward with confidence.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/malachite/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/malachite/5ZA01714.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/malachite/5ZA01965.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/malachite/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/malachite/Pic%203"
    ],
    "usdPrice": 44,
    "originalUsdPrice": 53
  },
  {
    "id": "chrysocolla-bracelet",
    "name": "Chrysocolla Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1750,
    "originalPrice": 2100,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/chrysocolla/Pic%201",
    "badge": null,
    "desc": "Emotional balance, communication, and inner wisdom.",
    "longDesc": "{\"purpose\":\"Emotional balance, communication, and inner wisdom.\",\"crystalsIncluded\":\"Chrysocolla\",\"associatedChakras\":\"Heart Chakra, Throat Chakra\",\"description\":\"Chrysocolla is traditionally associated with calm communication and emotional harmony. It is often used to encourage patience, understanding, and authentic self-expression.\",\"benefits\":[\"Encourages emotional balance\",\"Supports honest communication\",\"Promotes inner wisdom\",\"Helps maintain a calm mindset\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"During conversations, emotional situations, meditation, and daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I communicate with wisdom, compassion, and confidence.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart",
      "Throat"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/chrysocolla/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/chrysocolla/5ZA01708.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/chrysocolla/5ZA01989.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/chrysocolla/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/chrysocolla/Pic%203"
    ],
    "usdPrice": 35,
    "originalUsdPrice": 42
  },
  {
    "id": "green-eventurine-chips-bracelet",
    "name": "Green A Venturine Bracelet",
    "category": "bracelets",
    "subcategory": "Chips Bracelet",
    "price": 900,
    "originalPrice": 1080,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/green%20eventurine/Pic%201",
    "badge": null,
    "desc": "Growth, optimism, emotional balance, and opportunity.",
    "longDesc": "{\"purpose\":\"Growth, optimism, emotional balance, and opportunity.\",\"crystalsIncluded\":\"Green Aventurine\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Green Aventurine is traditionally associated with growth, optimism, and emotional well-being. It is commonly used by those seeking fresh opportunities and a positive outlook.\",\"benefits\":[\"Encourages optimism and positivity\",\"Supports emotional balance\",\"Promotes personal growth\",\"Inspires confidence in new beginnings\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, new ventures, travel, and personal development activities.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I welcome growth, positivity, and new opportunities into my life.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/green%20eventurine/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/green%20eventurine/5ZA01678.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/green%20eventurine/5ZA01971.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/green%20eventurine/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/green%20eventurine/Pic%203"
    ],
    "usdPrice": 18,
    "originalUsdPrice": 22
  },
  {
    "id": "moonstone-chips-bracelet",
    "name": "Moonstone Chips Bracelet",
    "category": "bracelets",
    "subcategory": "Chips Bracelet",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/Pic%201",
    "badge": null,
    "desc": "Intuition, emotional balance, and divine feminine energy.",
    "longDesc": "{\"purpose\":\"Emotional balance, intuition, and inner harmony.\",\"crystalsIncluded\":\"White Moonstone\",\"associatedChakras\":\"Crown Chakra, Third Eye Chakra\",\"description\":\"White Moonstone is traditionally associated with intuition, emotional balance, and inner reflection. Its gentle energy makes it a popular choice for those seeking calm and mindfulness.\",\"benefits\":[\"Encourages emotional balance\",\"Supports intuition and self-awareness\",\"Promotes inner peace\",\"Inspires mindfulness\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Meditation, evening relaxation, spiritual practices, and daily wear.\",\"howToEnergize\":\"Moonlight charging is especially recommended.\",\"affirmation\":\"I trust my intuition and embrace emotional balance.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/5ZA01696.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/5ZA05611.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/5ZA05620.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/5ZA05621.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/Pic%204"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34
  },
  {
    "id": "lapis-lazuli-chips-bracelet",
    "name": "Lapis Lazuli Bracelet",
    "category": "bracelets",
    "subcategory": "Chips Bracelet",
    "price": 900,
    "originalPrice": 1080,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Lapis%20lazuli/Pic%201",
    "badge": null,
    "desc": "Wisdom, communication, intuition, and self- expression.",
    "longDesc": "{\"purpose\":\"Wisdom, communication, intuition, and self-expression.\",\"crystalsIncluded\":\"Lapis Lazuli\",\"associatedChakras\":\"Throat Chakra, Third Eye Chakra\",\"description\":\"Lapis Lazuli has long been associated with wisdom, truth, and self-expression. It is traditionally used to support clear communication and deeper self-awareness.\",\"benefits\":[\"Encourages confident communication\",\"Supports intuition and insight\",\"Promotes mental clarity\",\"Inspires self-awareness\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Meetings, presentations, study, meditation, and daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I express my truth with wisdom, confidence, and clarity.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Throat",
      "Third Eye"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Lapis%20lazuli/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Lapis%20lazuli/5ZA01686.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Lapis%20lazuli/5ZA01969.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Lapis%20lazuli/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Lapis%20lazuli/Pic%203"
    ],
    "usdPrice": 18,
    "originalUsdPrice": 22
  },
  {
    "id": "red-garnet-chips-bracelet",
    "name": "Red Garnet Bracelet",
    "category": "bracelets",
    "subcategory": "Chips Bracelet",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20garnet/Red%20garnet%20pic%201",
    "badge": null,
    "desc": "Passion, confidence, vitality, and determination.",
    "longDesc": "{\"purpose\":\"Passion, confidence, vitality, and determination.\",\"crystalsIncluded\":\"Red Garnet\",\"associatedChakras\":\"Root Chakra\",\"description\":\"Red Garnet is traditionally associated with vitality, confidence, and determination. Its rich red color symbolizes strength, motivation, and perseverance, making it a popular choice for those pursuing personal goals.\",\"benefits\":[\"Encourages confidence and courage\",\"Supports determination and motivation\",\"Promotes grounding and stability\",\"Inspires perseverance\"],\"recommendedHand\":\"Right Hand\",\"whenToWear\":\"Work, fitness activities, goal setting, and daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I move forward with confidence, strength, and determination.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20garnet/Red%20garnet%20pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20garnet/5ZA01679.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20garnet/5ZA01680.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20garnet/5ZA01966.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20garnet/5ZA05607.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20garnet/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20garnet/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20garnet/Pic%204"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34
  },
  {
    "id": "amethyst-chips-bracelet",
    "name": "Amethyst Bracelet",
    "category": "bracelets",
    "subcategory": "Chips Bracelet",
    "price": 900,
    "originalPrice": 1080,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amethyst/Pic%201",
    "badge": null,
    "desc": "Peace, intuition, spiritual awareness, and relaxation.",
    "longDesc": "{\"purpose\":\"Peace, intuition, spiritual awareness, and relaxation.\",\"crystalsIncluded\":\"Amethyst\",\"associatedChakras\":\"Crown Chakra, Third Eye Chakra\",\"description\":\"Amethyst is one of the most popular spiritual crystals and is traditionally associated with peace, wisdom, and intuition. It is often used during meditation and mindfulness practices to support mental clarity and inner calm.\",\"benefits\":[\"Encourages relaxation\",\"Supports intuition\",\"Promotes spiritual awareness\",\"Helps create a peaceful environment\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Meditation, sleep, spiritual practices, daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I trust my intuition and embrace inner peace.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Crown",
      "Third Eye"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amethyst/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amethyst/5ZA01636.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amethyst/5ZA01637.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amethyst/5ZA01991.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amethyst/5ZA05636.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amethyst/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amethyst/Pic%203"
    ],
    "usdPrice": 18,
    "originalUsdPrice": 22
  },
  {
    "id": "clear-quartz-bangle-bracelet",
    "name": "Clear Quartz Bracelet",
    "category": "bracelets",
    "subcategory": "Bangle Bracelet",
    "price": 900,
    "originalPrice": 1080,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/clear%20quartz/Pic%201",
    "badge": null,
    "desc": "Clarity, focus, energy amplification, and intention setting.",
    "longDesc": "{\"purpose\":\"Clarity, focus, energy amplification, and intention setting.\",\"crystalsIncluded\":\"Clear Quartz\",\"associatedChakras\":\"Crown Chakra\",\"description\":\"Clear Quartz is often referred to as the “Master Crystal” and is traditionally associated with clarity, focus, and amplifying intentions. It is commonly used alongside other crystals and spiritual practices.\",\"benefits\":[\"Supports mental clarity\",\"Enhances focus and awareness\",\"Amplifies intentions and affirmations\",\"Suitable for meditation and mindfulness\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily, meditation, spiritual practices, and goal setting.\",\"howToEnergize\":\"Moonlight, sunlight (briefly), or selenite charging.\",\"affirmation\":\"My mind is clear, focused, and aligned with my intentions.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Crown"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/clear%20quartz/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/clear%20quartz/5ZA01643.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/clear%20quartz/5ZA01869.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/clear%20quartz/5ZA01974.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/clear%20quartz/5ZA01975.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/clear%20quartz/5ZA05612.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/clear%20quartz/5ZA05613.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/clear%20quartz/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/clear%20quartz/Pic%203"
    ],
    "usdPrice": 18,
    "originalUsdPrice": 22
  },
  {
    "id": "opal-bangle-bracelet",
    "name": "Opal Bangle Bracelet",
    "category": "bracelets",
    "subcategory": "Bangle Bracelet",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/products/bracelet.png",
    "badge": null,
    "desc": "Enhances cosmic consciousness, spiritual vision, and inspiration.",
    "longDesc": "{\"purpose\":\"Enhances cosmic consciousness, spiritual vision, and inspiration.\",\"crystalsIncluded\":\"Opal\",\"associatedChakras\":\"Crown\",\"description\":\"Opal Bangle Bracelet is a premium quality, authentic spiritual item. Enhances cosmic consciousness, spiritual vision, and inspiration. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Enhances cosmic consciousness, spiritual vision, and inspiration.\",\"Aligns and energises the Crown Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Crown"
    ],
    "images": [
      "/images/products/bracelet.png"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34
  },
  {
    "id": "rose-quartz-bangle-bracelet",
    "name": "Rose Quartz Bracelet",
    "category": "bracelets",
    "subcategory": "Bangle Bracelet",
    "price": 900,
    "originalPrice": 1080,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Rose%20quartz%20/pic%201",
    "badge": null,
    "desc": "Love, self-love, compassion, and emotional harmony.",
    "longDesc": "{\"purpose\":\"Love, self-love, compassion, and emotional harmony.\",\"crystalsIncluded\":\"Rose Quartz\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Rose Quartz is one of the most popular crystals associated with love, compassion, and emotional well-being. It is often used to encourage self-love, kindness, and harmonious relationships.\",\"benefits\":[\"Encourages self-love and compassion\",\"Supports emotional balance\",\"Promotes harmony and understanding\",\"Inspires kindness and positivity\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, meditation, self-care practices, and relationship intentions.\",\"howToEnergize\":\"Moonlight charging is especially recommended.\",\"affirmation\":\"I am worthy of love, kindness, and emotional harmony.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Rose%20quartz%20/pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Rose%20quartz%20/5ZA01616.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Rose%20quartz%20/5ZA01617.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Rose%20quartz%20/pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Rose%20quartz%20/pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Rose%20quartz%20/pic%204"
    ],
    "usdPrice": 18,
    "originalUsdPrice": 22
  },
  {
    "id": "tiger-eye-bangle-bracelet",
    "name": "Tiger Eye Bracelet",
    "category": "bracelets",
    "subcategory": "Bangle Bracelet",
    "price": 900,
    "originalPrice": 1080,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/tiger%20eye/Pic%201",
    "badge": null,
    "desc": "Confidence, focus, courage, and determination.",
    "longDesc": "{\"purpose\":\"Confidence, focus, courage, and determination.\",\"crystalsIncluded\":\"Tiger Eye\",\"associatedChakras\":\"Solar Plexus Chakra, Root Chakra\",\"description\":\"Tiger Eye is traditionally associated with courage, confidence, and focus. It is one of the most popular stones for those seeking motivation and balanced decision-making.\",\"benefits\":[\"Encourages confidence and courage\",\"Supports focus and determination\",\"Promotes balanced decision-making\",\"Inspires motivation and action\"],\"recommendedHand\":\"Right Hand\",\"whenToWear\":\"Work, interviews, business meetings, and daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I move forward with confidence, courage, and clarity.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus",
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/tiger%20eye/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/tiger%20eye/5ZA01629.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/tiger%20eye/5ZA01959.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/tiger%20eye/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/tiger%20eye/Pic%203"
    ],
    "usdPrice": 18,
    "originalUsdPrice": 22
  },
  {
    "id": "lapis-lazuli-bangle-bracelet",
    "name": "Lapis Lazuli Bracelet",
    "category": "bracelets",
    "subcategory": "Bangle Bracelet",
    "price": 900,
    "originalPrice": 1080,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Lapis%20lazuli/Pic%201",
    "badge": null,
    "desc": "Wisdom, communication, intuition, and self- expression.",
    "longDesc": "{\"purpose\":\"Wisdom, communication, intuition, and self-expression.\",\"crystalsIncluded\":\"Lapis Lazuli\",\"associatedChakras\":\"Throat Chakra, Third Eye Chakra\",\"description\":\"Lapis Lazuli has long been associated with wisdom, truth, and self-expression. It is traditionally used to support clear communication and deeper self-awareness.\",\"benefits\":[\"Encourages confident communication\",\"Supports intuition and insight\",\"Promotes mental clarity\",\"Inspires self-awareness\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Meetings, presentations, study, meditation, and daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I express my truth with wisdom, confidence, and clarity.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Throat",
      "Third Eye"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Lapis%20lazuli/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Lapis%20lazuli/5ZA01686.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Lapis%20lazuli/5ZA01969.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Lapis%20lazuli/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/Lapis%20lazuli/Pic%203"
    ],
    "usdPrice": 18,
    "originalUsdPrice": 22
  },
  {
    "id": "green-eventurine-bangle-bracelet",
    "name": "Green A Venturine Bracelet",
    "category": "bracelets",
    "subcategory": "Bangle Bracelet",
    "price": 900,
    "originalPrice": 1080,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/green%20eventurine/Pic%201",
    "badge": null,
    "desc": "Growth, optimism, emotional balance, and opportunity.",
    "longDesc": "{\"purpose\":\"Growth, optimism, emotional balance, and opportunity.\",\"crystalsIncluded\":\"Green Aventurine\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Green Aventurine is traditionally associated with growth, optimism, and emotional well-being. It is commonly used by those seeking fresh opportunities and a positive outlook.\",\"benefits\":[\"Encourages optimism and positivity\",\"Supports emotional balance\",\"Promotes personal growth\",\"Inspires confidence in new beginnings\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, new ventures, travel, and personal development activities.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I welcome growth, positivity, and new opportunities into my life.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/green%20eventurine/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/green%20eventurine/5ZA01678.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/green%20eventurine/5ZA01971.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/green%20eventurine/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/green%20eventurine/Pic%203"
    ],
    "usdPrice": 18,
    "originalUsdPrice": 22
  },
  {
    "id": "amethyst-bangle-bracelet",
    "name": "Amethyst Bracelet",
    "category": "bracelets",
    "subcategory": "Bangle Bracelet",
    "price": 900,
    "originalPrice": 1080,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amethyst/Pic%201",
    "badge": null,
    "desc": "Peace, intuition, spiritual awareness, and relaxation.",
    "longDesc": "{\"purpose\":\"Peace, intuition, spiritual awareness, and relaxation.\",\"crystalsIncluded\":\"Amethyst\",\"associatedChakras\":\"Crown Chakra, Third Eye Chakra\",\"description\":\"Amethyst is one of the most popular spiritual crystals and is traditionally associated with peace, wisdom, and intuition. It is often used during meditation and mindfulness practices to support mental clarity and inner calm.\",\"benefits\":[\"Encourages relaxation\",\"Supports intuition\",\"Promotes spiritual awareness\",\"Helps create a peaceful environment\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Meditation, sleep, spiritual practices, daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I trust my intuition and embrace inner peace.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Crown",
      "Third Eye"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amethyst/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amethyst/5ZA01636.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amethyst/5ZA01637.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amethyst/5ZA01991.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amethyst/5ZA05636.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amethyst/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/amethyst/Pic%203"
    ],
    "usdPrice": 18,
    "originalUsdPrice": 22
  },
  {
    "id": "seven-chakra-bangle-bracelet",
    "name": "Seven Chakra Bracelet",
    "category": "bracelets",
    "subcategory": "Bangle Bracelet",
    "price": 900,
    "originalPrice": 1080,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Pic%201",
    "badge": null,
    "desc": "Chakra balancing, energetic harmony, and spiritual alignment.",
    "longDesc": "{\"purpose\":\"Chakra balancing, energetic harmony, and spiritual alignment.\",\"crystalsIncluded\":\"Seven Chakra Stones\",\"associatedChakras\":\"Root, Sacral, Solar Plexus, Heart, Throat, Third Eye, Crown\",\"description\":\"The Seven Chakra Bracelet is designed to support balance across the body’s primary energy centers. Each stone is traditionally associated with a specific chakra, encouraging harmony between the mind, body, and spirit.\",\"benefits\":[\"Supports chakra alignment\",\"Encourages energetic balance\",\"Promotes mindfulness and self-awareness\",\"Suitable for meditation and daily wear\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, meditation, yoga, prayer, and spiritual practices.\",\"howToEnergize\":\"Moonlight, selenite charging, or intention setting.\",\"affirmation\":\"I am balanced, aligned, and connected to my highest self.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root",
      "Sacral",
      "Solar Plexus",
      "Heart",
      "Throat",
      "Third Eye",
      "Crown"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/5ZA01624.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/5ZA01963.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/5ZA01657.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/5ZA01658.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/5ZA01659.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/5ZA01660.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/5ZA01661.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/5ZA01662.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/5ZA01984.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/5ZA01985.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/5ZA05641.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/seven%20chakra/Seven%20chakra%20%2B%20lava%20/Pic%204"
    ],
    "usdPrice": 18,
    "originalUsdPrice": 22
  },
  {
    "id": "pyrite-bangle-bracelet",
    "name": "Pyrite Bracelet",
    "category": "bracelets",
    "subcategory": "Bangle Bracelet",
    "price": 1100,
    "originalPrice": 1320,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/pyrite/Pic%201",
    "badge": null,
    "desc": "Confidence, determination, leadership, and motivation.",
    "longDesc": "{\"purpose\":\"Confidence, determination, leadership, and motivation.\",\"crystalsIncluded\":\"Pyrite\",\"associatedChakras\":\"Solar Plexus Chakra\",\"description\":\"Pyrite is traditionally associated with confidence, leadership, and determination. It is often chosen by entrepreneurs, professionals, and individuals working toward ambitious goals.\",\"benefits\":[\"Encourages confidence and leadership\",\"Supports motivation and determination\",\"Promotes goal-focused thinking\",\"Inspires positive action\"],\"recommendedHand\":\"Right Hand\",\"whenToWear\":\"Work, business meetings, interviews, and goal-setting activities.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I move forward with confidence, courage, and determination.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/pyrite/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/pyrite/5ZA01634.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/pyrite/5ZA01988.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/pyrite/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/pyrite/Pic%203"
    ],
    "usdPrice": 22,
    "originalUsdPrice": 26
  },
  {
    "id": "red-jasper-bangle-bracelet",
    "name": "Red Jasper Bracelet",
    "category": "bracelets",
    "subcategory": "Bangle Bracelet",
    "price": 900,
    "originalPrice": 1080,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20jasper/Pic%201",
    "badge": null,
    "desc": "Grounding, stability, courage, and endurance.",
    "longDesc": "{\"purpose\":\"Grounding, stability, courage, and endurance.\",\"crystalsIncluded\":\"Red Jasper\",\"associatedChakras\":\"Root Chakra\",\"description\":\"Red Jasper is traditionally associated with stability, grounding, and steady determination. It is often chosen by those seeking balance, resilience, and emotional strength.\",\"benefits\":[\"Encourages grounding and stability\",\"Supports emotional strength\",\"Promotes resilience and endurance\",\"Inspires courage and determination\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, travel, work, and stressful situations.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I am grounded, strong, and resilient.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20jasper/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20jasper/5ZA01627.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20jasper/5ZA01675.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20jasper/5ZA01676.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20jasper/5ZA01806.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20jasper/5ZA01866.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20jasper/5ZA01977.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20jasper/5ZA01997.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20jasper/5ZA05624.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20jasper/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20jasper/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/red%20jasper/Pic%204"
    ],
    "usdPrice": 18,
    "originalUsdPrice": 22
  },
  {
    "id": "tree-of-life-pendant",
    "name": "Tree Of Life Crystal Pendant",
    "category": "pendants",
    "subcategory": "Pendants",
    "price": 1200,
    "originalPrice": 1440,
    "image": "/images/products/pendant.png",
    "badge": null,
    "desc": "A beautiful healing stone selected intuitively.",
    "longDesc": "{\"purpose\":\"A beautiful healing stone selected intuitively.\",\"associatedChakras\":\"Root\",\"description\":\"Tree Of Life Crystal Pendant is a premium quality, authentic spiritual item. A beautiful healing stone selected intuitively. Sourced carefully and ritually cleansed.\",\"benefits\":[\"A beautiful healing stone selected intuitively.\",\"Aligns and energises the Root Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "/images/products/pendant.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "opal-pendant",
    "name": "Opal Crystal Pendant",
    "category": "pendants",
    "subcategory": "Pendants",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/products/pendant.png",
    "badge": null,
    "desc": "Enhances cosmic consciousness, spiritual vision, and inspiration.",
    "longDesc": "{\"purpose\":\"Enhances cosmic consciousness, spiritual vision, and inspiration.\",\"crystalsIncluded\":\"Opal\",\"associatedChakras\":\"Crown\",\"description\":\"Opal Crystal Pendant is a premium quality, authentic spiritual item. Enhances cosmic consciousness, spiritual vision, and inspiration. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Enhances cosmic consciousness, spiritual vision, and inspiration.\",\"Aligns and energises the Crown Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Crown"
    ],
    "images": [
      "/images/products/pendant.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "tiger-eye-pendant",
    "name": "Tiger Eye Crystal Pendant",
    "category": "pendants",
    "subcategory": "Pendants",
    "price": 1050,
    "originalPrice": 1260,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/pendants/tiger-eye-design-1.webp",
    "badge": null,
    "desc": "Boosts courage, self-confidence, willpower, and personal power.",
    "longDesc": "{\"purpose\":\"Confidence, focus, courage, and determination.\",\"crystalsIncluded\":\"Tiger Eye\",\"associatedChakras\":\"Solar Plexus Chakra, Root Chakra\",\"description\":\"Tiger Eye is traditionally associated with courage, confidence, and focus. It is one of the most popular stones for those seeking motivation and balanced decision-making.\",\"benefits\":[\"Encourages confidence and courage\",\"Supports focus and determination\",\"Promotes balanced decision-making\",\"Inspires motivation and action\"],\"recommendedHand\":\"Right Hand\",\"whenToWear\":\"Work, interviews, business meetings, and daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I move forward with confidence, courage, and clarity.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/pendants/tiger-eye-design-1.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "rose-quartz-pendant",
    "name": "Rose Quartz Crystal Pendant",
    "category": "pendants",
    "subcategory": "Pendants",
    "price": 950,
    "originalPrice": 1140,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Rose%20quartz",
    "badge": null,
    "desc": "The stone of unconditional love, compassion, and emotional healing.",
    "longDesc": "{\"purpose\":\"Love, self-love, compassion, and emotional harmony.\",\"crystalsIncluded\":\"Rose Quartz\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Rose Quartz is one of the most popular crystals associated with love, compassion, and emotional well-being. It is often used to encourage self-love, kindness, and harmonious relationships.\",\"benefits\":[\"Encourages self-love and compassion\",\"Supports emotional balance\",\"Promotes harmony and understanding\",\"Inspires kindness and positivity\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, meditation, self-care practices, and relationship intentions.\",\"howToEnergize\":\"Moonlight charging is especially recommended.\",\"affirmation\":\"I am worthy of love, kindness, and emotional harmony.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Rose%20quartz"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "tiger-eye-designs-pendant",
    "name": "Tiger Eye Designs Crystal Pendant",
    "category": "pendants",
    "subcategory": "Pendants",
    "price": 1050,
    "originalPrice": 1260,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/pendants/tiger-eye-pic-1-design-2.webp",
    "badge": null,
    "desc": "Boosts courage, self-confidence, willpower, and personal power.",
    "longDesc": "{\"purpose\":\"Confidence, focus, courage, and determination.\",\"crystalsIncluded\":\"Tiger Eye\",\"associatedChakras\":\"Solar Plexus Chakra, Root Chakra\",\"description\":\"Tiger Eye is traditionally associated with courage, confidence, and focus. It is one of the most popular stones for those seeking motivation and balanced decision-making.\",\"benefits\":[\"Encourages confidence and courage\",\"Supports focus and determination\",\"Promotes balanced decision-making\",\"Inspires motivation and action\"],\"recommendedHand\":\"Right Hand\",\"whenToWear\":\"Work, interviews, business meetings, and daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I move forward with confidence, courage, and clarity.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/pendants/tiger-eye-pic-1-design-2.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/pendants/tiger-eye-pic-2-design-2.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "lapis-lazuli-pendant",
    "name": "Lapis Lazuli Crystal Pendant",
    "category": "pendants",
    "subcategory": "Pendants",
    "price": 1150,
    "originalPrice": 1380,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/pendants/lapis-lazuli.webp",
    "badge": null,
    "desc": "Traditional royal blue stone for wisdom, truth, and inner power.",
    "longDesc": "{\"purpose\":\"Wisdom, communication, intuition, and self-expression.\",\"crystalsIncluded\":\"Lapis Lazuli\",\"associatedChakras\":\"Throat Chakra, Third Eye Chakra\",\"description\":\"Lapis Lazuli has long been associated with wisdom, truth, and self-expression. It is traditionally used to support clear communication and deeper self-awareness.\",\"benefits\":[\"Encourages confident communication\",\"Supports intuition and insight\",\"Promotes mental clarity\",\"Inspires self-awareness\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Meetings, presentations, study, meditation, and daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I express my truth with wisdom, confidence, and clarity.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Throat",
      "Third Eye"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/pendants/lapis-lazuli.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "black-tourmaline-pendant",
    "name": "Black Tourmaline Crystal Pendant",
    "category": "pendants",
    "subcategory": "Pendants",
    "price": 1050,
    "originalPrice": 1260,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/pendants/black-tourmaline-pic-1.webp",
    "badge": null,
    "desc": "Shields against negative energy, electromagnetic frequencies, and toxic environments.",
    "longDesc": "{\"purpose\":\"Grounding, protection, and energetic stability.\",\"crystalsIncluded\":\"Black Tourmaline\",\"associatedChakras\":\"Root Chakra\",\"description\":\"Black Tourmaline is one of the most widely used grounding stones. It is traditionally associated with protection, stability, and maintaining a balanced energetic environment.\",\"benefits\":[\"Encourages grounding\",\"Supports energetic protection\",\"Promotes stability\",\"Helps maintain focus and balance\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, travel, crowded environments, work.\",\"howToEnergize\":\"Moonlight, selenite charging, intention setting.\",\"affirmation\":\"I am grounded, protected, and secure.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/pendants/black-tourmaline-pic-1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/pendants/black-tourmaline-pic-2.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "green-eventurine-pendant",
    "name": "Green Eventurine Crystal Pendant",
    "category": "pendants",
    "subcategory": "Pendants",
    "price": 950,
    "originalPrice": 1140,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Green%20eventurine%20pic%201",
    "badge": null,
    "desc": "Stone of opportunity and luck, bringing abundance and career success.",
    "longDesc": "{\"purpose\":\"Growth, optimism, emotional balance, and opportunity.\",\"crystalsIncluded\":\"Green Aventurine\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Green Aventurine is traditionally associated with growth, optimism, and emotional well-being. It is commonly used by those seeking fresh opportunities and a positive outlook.\",\"benefits\":[\"Encourages optimism and positivity\",\"Supports emotional balance\",\"Promotes personal growth\",\"Inspires confidence in new beginnings\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, new ventures, travel, and personal development activities.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I welcome growth, positivity, and new opportunities into my life.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Green%20eventurine%20pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Green%20eventurine%20pic%202"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "pyrite-pendant",
    "name": "Pyrite Crystal Pendant",
    "category": "pendants",
    "subcategory": "Pendants",
    "price": 1250,
    "originalPrice": 1500,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/pendants/pyrite.webp",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\"purpose\":\"Confidence, determination, leadership, and motivation.\",\"crystalsIncluded\":\"Pyrite\",\"associatedChakras\":\"Solar Plexus Chakra\",\"description\":\"Pyrite is traditionally associated with confidence, leadership, and determination. It is often chosen by entrepreneurs, professionals, and individuals working toward ambitious goals.\",\"benefits\":[\"Encourages confidence and leadership\",\"Supports motivation and determination\",\"Promotes goal-focused thinking\",\"Inspires positive action\"],\"recommendedHand\":\"Right Hand\",\"whenToWear\":\"Work, business meetings, interviews, and goal-setting activities.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I move forward with confidence, courage, and determination.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/pendants/pyrite.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/pendants/pyrite-design-2.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "evil-eye-pendant",
    "name": "Evil Eye Crystal Pendant",
    "category": "pendants",
    "subcategory": "Pendants",
    "price": 850,
    "originalPrice": 1020,
    "image": "/images/products/pendant.png",
    "badge": null,
    "desc": "Protective talisman that shields against jealousy, glare, and bad wishes.",
    "longDesc": "{\"purpose\":\"Protection, positivity, and symbolic safeguarding.\",\"crystalsIncluded\":\"Evil Eye Bead/Charm\",\"associatedChakras\":\"Not Chakra-Specific\",\"description\":\"The Evil Eye Bracelet is a traditional protective symbol used across many cultures. It is commonly worn as a reminder of positivity, protection, and good intentions.\",\"benefits\":[\"Symbolizes protection\",\"Encourages positive energy\",\"Serves as a meaningful daily accessory\",\"Complements spiritual practices\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, travel, work, and social gatherings.\",\"howToEnergize\":\"Moonlight or intention setting.\",\"affirmation\":\"I am surrounded by positivity, protection, and peace.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root",
      "Throat"
    ],
    "images": [
      "/images/products/pendant.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "moonstone-normal-ring",
    "name": "Moonstone Classic Ring",
    "category": "silver-jewelry",
    "subcategory": "Normal Rings",
    "price": 1200,
    "originalPrice": 1440,
    "image": "/images/products/bracelet.png",
    "badge": null,
    "desc": "A beautiful healing stone selected intuitively.",
    "longDesc": "{\"purpose\":\"Emotional balance, intuition, and inner harmony.\",\"crystalsIncluded\":\"White Moonstone\",\"associatedChakras\":\"Crown Chakra, Third Eye Chakra\",\"description\":\"White Moonstone is traditionally associated with intuition, emotional balance, and inner reflection. Its gentle energy makes it a popular choice for those seeking calm and mindfulness.\",\"benefits\":[\"Encourages emotional balance\",\"Supports intuition and self-awareness\",\"Promotes inner peace\",\"Inspires mindfulness\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Meditation, evening relaxation, spiritual practices, and daily wear.\",\"howToEnergize\":\"Moonlight charging is especially recommended.\",\"affirmation\":\"I trust my intuition and embrace emotional balance.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "/images/products/bracelet.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "rose-quartz-normal-ring",
    "name": "Rose Quartz Classic Ring",
    "category": "silver-jewelry",
    "subcategory": "Normal Rings",
    "price": 950,
    "originalPrice": 1140,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Rose%20quartz",
    "badge": null,
    "desc": "The stone of unconditional love, compassion, and emotional healing.",
    "longDesc": "{\"purpose\":\"Love, self-love, compassion, and emotional harmony.\",\"crystalsIncluded\":\"Rose Quartz\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Rose Quartz is one of the most popular crystals associated with love, compassion, and emotional well-being. It is often used to encourage self-love, kindness, and harmonious relationships.\",\"benefits\":[\"Encourages self-love and compassion\",\"Supports emotional balance\",\"Promotes harmony and understanding\",\"Inspires kindness and positivity\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, meditation, self-care practices, and relationship intentions.\",\"howToEnergize\":\"Moonlight charging is especially recommended.\",\"affirmation\":\"I am worthy of love, kindness, and emotional harmony.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Rose%20quartz"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "lapis-lazuli-normal-ring",
    "name": "Lapis Lazuli Classic Ring",
    "category": "silver-jewelry",
    "subcategory": "Normal Rings",
    "price": 1150,
    "originalPrice": 1380,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Lapis%20lazuli",
    "badge": null,
    "desc": "Traditional royal blue stone for wisdom, truth, and inner power.",
    "longDesc": "{\"purpose\":\"Wisdom, communication, intuition, and self-expression.\",\"crystalsIncluded\":\"Lapis Lazuli\",\"associatedChakras\":\"Throat Chakra, Third Eye Chakra\",\"description\":\"Lapis Lazuli has long been associated with wisdom, truth, and self-expression. It is traditionally used to support clear communication and deeper self-awareness.\",\"benefits\":[\"Encourages confident communication\",\"Supports intuition and insight\",\"Promotes mental clarity\",\"Inspires self-awareness\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Meetings, presentations, study, meditation, and daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I express my truth with wisdom, confidence, and clarity.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Throat",
      "Third Eye"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Lapis%20lazuli"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "peridot-normal-ring",
    "name": "Peridot Classic Ring",
    "category": "silver-jewelry",
    "subcategory": "Normal Rings",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/products/sphere.png",
    "badge": null,
    "desc": "Inspires positive energy, abundance, and heart-centered joy.",
    "longDesc": "{\"purpose\":\"Growth, positivity, and emotional renewal.\",\"crystalsIncluded\":\"Peridot\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Peridot is traditionally associated with growth, positivity, and renewal. Its vibrant green color symbolizes fresh beginnings and a positive outlook.\",\"benefits\":[\"Encourages optimism\",\"Supports emotional renewal\",\"Promotes personal growth\",\"Inspires positive thinking\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"New beginnings, personal development, and daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I welcome growth, positivity, and fresh opportunities.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "/images/products/sphere.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "amethyst-design-ring",
    "name": "Amethyst Design Ring",
    "category": "silver-jewelry",
    "subcategory": "Design Rings",
    "price": 1050,
    "originalPrice": 1260,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/amethyst-oval-pic-2.webp",
    "badge": null,
    "desc": "Calms mind, increases spiritual wisdom, and supports deep meditation.",
    "longDesc": "{\"purpose\":\"Peace, intuition, spiritual awareness, and relaxation.\",\"crystalsIncluded\":\"Amethyst\",\"associatedChakras\":\"Crown Chakra, Third Eye Chakra\",\"description\":\"Amethyst is one of the most popular spiritual crystals and is traditionally associated with peace, wisdom, and intuition. It is often used during meditation and mindfulness practices to support mental clarity and inner calm.\",\"benefits\":[\"Encourages relaxation\",\"Supports intuition\",\"Promotes spiritual awareness\",\"Helps create a peaceful environment\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Meditation, sleep, spiritual practices, daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I trust my intuition and embrace inner peace.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Third Eye",
      "Crown"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/amethyst-oval-pic-2.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "lapis-lazuli-design-ring",
    "name": "Lapis Lazuli Design Ring",
    "category": "silver-jewelry",
    "subcategory": "Design Rings",
    "price": 1150,
    "originalPrice": 1380,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/lapis-lazuli-pic4.webp",
    "badge": null,
    "desc": "Traditional royal blue stone for wisdom, truth, and inner power.",
    "longDesc": "{\"purpose\":\"Wisdom, communication, intuition, and self-expression.\",\"crystalsIncluded\":\"Lapis Lazuli\",\"associatedChakras\":\"Throat Chakra, Third Eye Chakra\",\"description\":\"Lapis Lazuli has long been associated with wisdom, truth, and self-expression. It is traditionally used to support clear communication and deeper self-awareness.\",\"benefits\":[\"Encourages confident communication\",\"Supports intuition and insight\",\"Promotes mental clarity\",\"Inspires self-awareness\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Meetings, presentations, study, meditation, and daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I express my truth with wisdom, confidence, and clarity.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Throat",
      "Third Eye"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/lapis-lazuli-pic4.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "pyrite-design-ring",
    "name": "Pyrite Design Ring",
    "category": "silver-jewelry",
    "subcategory": "Design Rings",
    "price": 1250,
    "originalPrice": 1500,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/pyrite-pic-1.webp",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\"purpose\":\"Confidence, determination, leadership, and motivation.\",\"crystalsIncluded\":\"Pyrite\",\"associatedChakras\":\"Solar Plexus Chakra\",\"description\":\"Pyrite is traditionally associated with confidence, leadership, and determination. It is often chosen by entrepreneurs, professionals, and individuals working toward ambitious goals.\",\"benefits\":[\"Encourages confidence and leadership\",\"Supports motivation and determination\",\"Promotes goal-focused thinking\",\"Inspires positive action\"],\"recommendedHand\":\"Right Hand\",\"whenToWear\":\"Work, business meetings, interviews, and goal-setting activities.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I move forward with confidence, courage, and determination.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/pyrite-pic-1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/pyrite-pic1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/pyrite-pic11.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/pyrite-pic22.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "green-eventurine-design-ring",
    "name": "Green Eventurine Design Ring",
    "category": "silver-jewelry",
    "subcategory": "Design Rings",
    "price": 950,
    "originalPrice": 1140,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/green-eventurine-owl-pic3.webp",
    "badge": null,
    "desc": "Stone of opportunity and luck, bringing abundance and career success.",
    "longDesc": "{\"purpose\":\"Growth, optimism, emotional balance, and opportunity.\",\"crystalsIncluded\":\"Green Aventurine\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Green Aventurine is traditionally associated with growth, optimism, and emotional well-being. It is commonly used by those seeking fresh opportunities and a positive outlook.\",\"benefits\":[\"Encourages optimism and positivity\",\"Supports emotional balance\",\"Promotes personal growth\",\"Inspires confidence in new beginnings\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, new ventures, travel, and personal development activities.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I welcome growth, positivity, and new opportunities into my life.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/green-eventurine-owl-pic3.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "irani-firoza-design-ring",
    "name": "Irani Firoza Design Ring",
    "category": "silver-jewelry",
    "subcategory": "Design Rings",
    "price": 2450,
    "originalPrice": 2940,
    "image": "/images/products/raw.png",
    "badge": null,
    "desc": "Genuine Irani Turquoise for confidence, public speaking, and clear communication.",
    "longDesc": "{\"purpose\":\"Genuine Irani Turquoise for confidence, public speaking, and clear communication.\",\"crystalsIncluded\":\"Irani Firoza\",\"associatedChakras\":\"Throat\",\"description\":\"Irani Firoza Design Ring is a premium quality, authentic spiritual item. Genuine Irani Turquoise for confidence, public speaking, and clear communication. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Genuine Irani Turquoise for confidence, public speaking, and clear communication.\",\"Aligns and energises the Throat Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Throat"
    ],
    "images": [
      "/images/products/raw.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "polished-black-tourmaline-design-ring",
    "name": "Polished Black Tourmaline Design Ring",
    "category": "silver-jewelry",
    "subcategory": "Design Rings",
    "price": 1050,
    "originalPrice": 1260,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Black%20tourmaline%20pic%201",
    "badge": null,
    "desc": "Shields against negative energy, electromagnetic frequencies, and toxic environments.",
    "longDesc": "{\"purpose\":\"Grounding, protection, and energetic stability.\",\"crystalsIncluded\":\"Black Tourmaline\",\"associatedChakras\":\"Root Chakra\",\"description\":\"Black Tourmaline is one of the most widely used grounding stones. It is traditionally associated with protection, stability, and maintaining a balanced energetic environment.\",\"benefits\":[\"Encourages grounding\",\"Supports energetic protection\",\"Promotes stability\",\"Helps maintain focus and balance\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, travel, crowded environments, work.\",\"howToEnergize\":\"Moonlight, selenite charging, intention setting.\",\"affirmation\":\"I am grounded, protected, and secure.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Black%20tourmaline%20pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Black%20tourmaline%20pic%202"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "raw-black-tourmaline-design-ring",
    "name": "Raw Black Tourmaline Design Ring",
    "category": "silver-jewelry",
    "subcategory": "Design Rings",
    "price": 1050,
    "originalPrice": 1260,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/raw-black-tourmaline-pic-4.webp",
    "badge": null,
    "desc": "Shields against negative energy, electromagnetic frequencies, and toxic environments.",
    "longDesc": "{\"purpose\":\"Grounding, protection, and energetic stability.\",\"crystalsIncluded\":\"Black Tourmaline\",\"associatedChakras\":\"Root Chakra\",\"description\":\"Black Tourmaline is one of the most widely used grounding stones. It is traditionally associated with protection, stability, and maintaining a balanced energetic environment.\",\"benefits\":[\"Encourages grounding\",\"Supports energetic protection\",\"Promotes stability\",\"Helps maintain focus and balance\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, travel, crowded environments, work.\",\"howToEnergize\":\"Moonlight, selenite charging, intention setting.\",\"affirmation\":\"I am grounded, protected, and secure.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/raw-black-tourmaline-pic-4.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/raw-black-tourmaline-pic-5.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "rose-quartz-design-ring",
    "name": "Rose Quartz Design Ring",
    "category": "silver-jewelry",
    "subcategory": "Design Rings",
    "price": 950,
    "originalPrice": 1140,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/rose-quartz-elephant-pic1.webp",
    "badge": null,
    "desc": "The stone of unconditional love, compassion, and emotional healing.",
    "longDesc": "{\"purpose\":\"Love, self-love, compassion, and emotional harmony.\",\"crystalsIncluded\":\"Rose Quartz\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Rose Quartz is one of the most popular crystals associated with love, compassion, and emotional well-being. It is often used to encourage self-love, kindness, and harmonious relationships.\",\"benefits\":[\"Encourages self-love and compassion\",\"Supports emotional balance\",\"Promotes harmony and understanding\",\"Inspires kindness and positivity\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, meditation, self-care practices, and relationship intentions.\",\"howToEnergize\":\"Moonlight charging is especially recommended.\",\"affirmation\":\"I am worthy of love, kindness, and emotional harmony.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/rose-quartz-elephant-pic1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/rose-quartz-elephant-pic2.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/rose-quartz-elephant-pic3.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "moonstone-design-ring",
    "name": "Moonstone Design Ring",
    "category": "silver-jewelry",
    "subcategory": "Design Rings",
    "price": 1200,
    "originalPrice": 1440,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/moonstone-pic21.webp",
    "badge": null,
    "desc": "A beautiful healing stone selected intuitively.",
    "longDesc": "{\"purpose\":\"Emotional balance, intuition, and inner harmony.\",\"crystalsIncluded\":\"White Moonstone\",\"associatedChakras\":\"Crown Chakra, Third Eye Chakra\",\"description\":\"White Moonstone is traditionally associated with intuition, emotional balance, and inner reflection. Its gentle energy makes it a popular choice for those seeking calm and mindfulness.\",\"benefits\":[\"Encourages emotional balance\",\"Supports intuition and self-awareness\",\"Promotes inner peace\",\"Inspires mindfulness\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Meditation, evening relaxation, spiritual practices, and daily wear.\",\"howToEnergize\":\"Moonlight charging is especially recommended.\",\"affirmation\":\"I trust my intuition and embrace emotional balance.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/moonstone-pic21.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/moonstone-pic3.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "labradorite-design-ring",
    "name": "Labradorite Design Ring",
    "category": "silver-jewelry",
    "subcategory": "Design Rings",
    "price": 1350,
    "originalPrice": 1620,
    "image": "/images/products/sphere.png",
    "badge": null,
    "desc": "Temple of the stars crystal for magic, intuition, and transformation.",
    "longDesc": "{\"purpose\":\"Temple of the stars crystal for magic, intuition, and transformation.\",\"crystalsIncluded\":\"Labradorite\",\"associatedChakras\":\"Third Eye\",\"description\":\"Labradorite Design Ring is a premium quality, authentic spiritual item. Temple of the stars crystal for magic, intuition, and transformation. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Temple of the stars crystal for magic, intuition, and transformation.\",\"Aligns and energises the Third Eye Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Third Eye"
    ],
    "images": [
      "/images/products/sphere.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "tiger-eye-design-ring",
    "name": "Tiger Eye Design Ring",
    "category": "silver-jewelry",
    "subcategory": "Design Rings",
    "price": 1050,
    "originalPrice": 1260,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/tiger-eye-owl-pic1.webp",
    "badge": null,
    "desc": "Boosts courage, self-confidence, willpower, and personal power.",
    "longDesc": "{\"purpose\":\"Confidence, focus, courage, and determination.\",\"crystalsIncluded\":\"Tiger Eye\",\"associatedChakras\":\"Solar Plexus Chakra, Root Chakra\",\"description\":\"Tiger Eye is traditionally associated with courage, confidence, and focus. It is one of the most popular stones for those seeking motivation and balanced decision-making.\",\"benefits\":[\"Encourages confidence and courage\",\"Supports focus and determination\",\"Promotes balanced decision-making\",\"Inspires motivation and action\"],\"recommendedHand\":\"Right Hand\",\"whenToWear\":\"Work, interviews, business meetings, and daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I move forward with confidence, courage, and clarity.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/tiger-eye-owl-pic1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/tiger-eye-owl-pic2.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/tiger-eye-owl-pic3.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/tiger-eye-dolphin-pic1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/tiger-eye-dolphin-pic2.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/tiger-eye-halfmoon-pic1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/tiger-eye-halfmoon-pic2.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/tiger-eye-halfmoon-pic3.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "yellow-calcite-design-ring",
    "name": "Yellow Calcite Design Ring",
    "category": "silver-jewelry",
    "subcategory": "Design Rings",
    "price": 950,
    "originalPrice": 1140,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/yellow-calcite-pic1.webp",
    "badge": null,
    "desc": "Clears mental blockages and infuses warmth, joy, and hope.",
    "longDesc": "{\"purpose\":\"Clears mental blockages and infuses warmth, joy, and hope.\",\"crystalsIncluded\":\"Yellow Calcite\",\"associatedChakras\":\"Solar Plexus\",\"description\":\"Yellow Calcite Design Ring is a premium quality, authentic spiritual item. Clears mental blockages and infuses warmth, joy, and hope. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Clears mental blockages and infuses warmth, joy, and hope.\",\"Aligns and energises the Solar Plexus Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/yellow-calcite-pic1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/yellow-calcite-pic2.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/yellow-calcite-pic3.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/yellow-calcite-pic4.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "red-carnalian-design-ring",
    "name": "Red Carnalian Design Ring",
    "category": "silver-jewelry",
    "subcategory": "Design Rings",
    "price": 1050,
    "originalPrice": 1260,
    "image": "/images/products/evileye.png",
    "badge": null,
    "desc": "Stones of motivation, creativity, leadership, and bold action.",
    "longDesc": "{\"purpose\":\"Stones of motivation, creativity, leadership, and bold action.\",\"crystalsIncluded\":\"Red Carnalian\",\"associatedChakras\":\"Sacral\",\"description\":\"Red Carnalian Design Ring is a premium quality, authentic spiritual item. Stones of motivation, creativity, leadership, and bold action. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Stones of motivation, creativity, leadership, and bold action.\",\"Aligns and energises the Sacral Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Sacral"
    ],
    "images": [
      "/images/products/evileye.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "sulemani-hakik-design-ring",
    "name": "Sulemani Hakik Design Ring",
    "category": "silver-jewelry",
    "subcategory": "Design Rings",
    "price": 1250,
    "originalPrice": 1500,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/sulemani-hakik-pic1.webp",
    "badge": null,
    "desc": "Traditional gemstone used to block black magic and malefic planetary influences.",
    "longDesc": "{\"purpose\":\"Grounding, protection, confidence, and stability.\",\"crystalsIncluded\":\"Suleimani Hakeek (Agate)\",\"associatedChakras\":\"Root Chakra\",\"description\":\"Suleimani Hakeek is traditionally valued for grounding and stability. It is commonly worn in spiritual traditions as a symbol of strength, focus, and protection.\",\"benefits\":[\"Encourages grounding and balance\",\"Supports confidence and stability\",\"Promotes focus and resilience\",\"Suitable for daily wear\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, travel, meditation, and spiritual practices.\",\"howToEnergize\":\"Moonlight, prayer, or selenite charging.\",\"affirmation\":\"I am strong, grounded, and protected.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/sulemani-hakik-pic1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/sulemani-hakik-pic2.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/sulemani-hakik-pic3.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "dalmatian-jasper-design-ring",
    "name": "Dalmatian Jasper Design Ring",
    "category": "silver-jewelry",
    "subcategory": "Design Rings",
    "price": 950,
    "originalPrice": 1140,
    "image": "/images/products/raw.png",
    "badge": null,
    "desc": "Brings a sense of playfulness and joy, breaking down analytical walls.",
    "longDesc": "{\"purpose\":\"Positivity, grounding, and emotional balance.\",\"crystalsIncluded\":\"Dalmatian Jasper\",\"associatedChakras\":\"Root Chakra\",\"description\":\"Dalmatian Jasper is traditionally associated with joy, grounding, and emotional stability. Its playful appearance makes it popular among those seeking a light-hearted and balanced energy.\",\"benefits\":[\"Encourages positivity and optimism\",\"Supports grounding and stability\",\"Promotes emotional balance\",\"Inspires a playful outlook on life\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, social activities, and travel.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I welcome joy, balance, and positive energy into my life.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "/images/products/raw.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "rhodonite-design-ring",
    "name": "Rhodonite Design Ring",
    "category": "silver-jewelry",
    "subcategory": "Design Rings",
    "price": 1150,
    "originalPrice": 1380,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/rhodonite-pic1.webp",
    "badge": null,
    "desc": "Stones of compassion, forgiveness, and emotional balance after hurt.",
    "longDesc": "{\"purpose\":\"Compassion, emotional balance, forgiveness, and self-love.\",\"crystalsIncluded\":\"Rhodonite\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Rhodonite is traditionally associated with compassion, emotional healing, and harmony. It is often used by those seeking emotional balance and positive relationships.\",\"benefits\":[\"Encourages compassion and understanding\",\"Supports emotional balance\",\"Promotes self-love and forgiveness\",\"Inspires harmonious relationships\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, meditation, relationship-focused intentions, and self-care routines.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I choose compassion, balance, and emotional harmony.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/rhodonite-pic1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/rhodonite-pic2.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/rhodonite-pic3.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "malachite-design-ring",
    "name": "Malachite Design Ring",
    "category": "silver-jewelry",
    "subcategory": "Design Rings",
    "price": 2200,
    "originalPrice": 2640,
    "image": "/images/products/mala.png",
    "badge": null,
    "desc": "Powerful transformation stone that cleanses emotional blocks.",
    "longDesc": "{\"purpose\":\"Transformation, confidence, and personal growth.\",\"crystalsIncluded\":\"Malachite\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Malachite is traditionally associated with transformation and personal growth. It is often chosen by those navigating change and seeking courage to move forward.\",\"benefits\":[\"Encourages personal transformation\",\"Supports confidence and determination\",\"Promotes emotional awareness\",\"Inspires growth and positive change\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"During life transitions, new beginnings, and personal development journeys.\",\"howToEnergize\":\"Selenite charging only. Avoid prolonged water exposure.\",\"affirmation\":\"I embrace positive transformation and move forward with confidence.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "/images/products/mala.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "opal-design-ring",
    "name": "Opal Design Ring",
    "category": "silver-jewelry",
    "subcategory": "Design Rings",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/products/mala.png",
    "badge": null,
    "desc": "Enhances cosmic consciousness, spiritual vision, and inspiration.",
    "longDesc": "{\"purpose\":\"Enhances cosmic consciousness, spiritual vision, and inspiration.\",\"crystalsIncluded\":\"Opal\",\"associatedChakras\":\"Crown\",\"description\":\"Opal Design Ring is a premium quality, authentic spiritual item. Enhances cosmic consciousness, spiritual vision, and inspiration. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Enhances cosmic consciousness, spiritual vision, and inspiration.\",\"Aligns and energises the Crown Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Crown"
    ],
    "images": [
      "/images/products/mala.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "clear-quartz-design-ring",
    "name": "Clear Quartz Design Ring",
    "category": "silver-jewelry",
    "subcategory": "Design Rings",
    "price": 950,
    "originalPrice": 1140,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Clear%20quartz",
    "badge": null,
    "desc": "The Master Healer crystal that amplifies other stones' energy.",
    "longDesc": "{\"purpose\":\"Clarity, focus, energy amplification, and intention setting.\",\"crystalsIncluded\":\"Clear Quartz\",\"associatedChakras\":\"Crown Chakra\",\"description\":\"Clear Quartz is often referred to as the “Master Crystal” and is traditionally associated with clarity, focus, and amplifying intentions. It is commonly used alongside other crystals and spiritual practices.\",\"benefits\":[\"Supports mental clarity\",\"Enhances focus and awareness\",\"Amplifies intentions and affirmations\",\"Suitable for meditation and mindfulness\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily, meditation, spiritual practices, and goal setting.\",\"howToEnergize\":\"Moonlight, sunlight (briefly), or selenite charging.\",\"affirmation\":\"My mind is clear, focused, and aligned with my intentions.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Crown"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Clear%20quartz"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "white-agate-design-ring",
    "name": "White Agate Design Ring",
    "category": "silver-jewelry",
    "subcategory": "Design Rings",
    "price": 850,
    "originalPrice": 1020,
    "image": "/images/products/sphere.png",
    "badge": null,
    "desc": "Brings gentle release, mental balance, and absolute purity.",
    "longDesc": "{\"purpose\":\"Brings gentle release, mental balance, and absolute purity.\",\"crystalsIncluded\":\"White Agate\",\"associatedChakras\":\"Crown\",\"description\":\"White Agate Design Ring is a premium quality, authentic spiritual item. Brings gentle release, mental balance, and absolute purity. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Brings gentle release, mental balance, and absolute purity.\",\"Aligns and energises the Crown Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Crown"
    ],
    "images": [
      "/images/products/sphere.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "black-onyx-design-ring",
    "name": "Black Onyx Design Ring",
    "category": "silver-jewelry",
    "subcategory": "Design Rings",
    "price": 1050,
    "originalPrice": 1260,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/black-onyx-pic3.webp",
    "badge": null,
    "desc": "Powerful protective stone that absorbs negativity, grounds scattered energy, and builds inner strength and willpower.",
    "longDesc": "{\"purpose\":\"Powerful protective stone that absorbs negativity, grounds scattered energy, and builds inner strength and willpower.\",\"crystalsIncluded\":\"Black Onyx\",\"associatedChakras\":\"Root\",\"description\":\"Black Onyx Design Ring is a premium quality, authentic spiritual item. Powerful protective stone that absorbs negativity, grounds scattered energy, and builds inner strength and willpower. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Powerful protective stone that absorbs negativity, grounds scattered energy, and builds inner strength and willpower.\",\"Aligns and energises the Root Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/black-onyx-pic3.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "snowflake-obsidian-design-ring",
    "name": "Snowflake Obsidian Design Ring",
    "category": "silver-jewelry",
    "subcategory": "Design Rings",
    "price": 1050,
    "originalPrice": 1260,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/snowflake-obsidian-pic-1.webp",
    "badge": null,
    "desc": "Stone of purity and balance that calms the mind, releases ingrained stress patterns, and clears negative energy.",
    "longDesc": "{\"purpose\":\"Stone of purity and balance that calms the mind, releases ingrained stress patterns, and clears negative energy.\",\"crystalsIncluded\":\"Snowflake Obsidian\",\"associatedChakras\":\"Root, Crown\",\"description\":\"Snowflake Obsidian Design Ring is a premium quality, authentic spiritual item. Stone of purity and balance that calms the mind, releases ingrained stress patterns, and clears negative energy. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Stone of purity and balance that calms the mind, releases ingrained stress patterns, and clears negative energy.\",\"Aligns and energises the Root, Crown Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Root",
      "Crown"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/snowflake-obsidian-pic-1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/snowflake-obsidian-owl-pic2.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/snowflake-black-obsidian-owl-pic3.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/snowflake-obsidian-halfmoon-pic-2.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/snowflake-obsidian-halfmoon-pic3.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "white-howlite-design-ring",
    "name": "White Howlite Design Ring",
    "category": "silver-jewelry",
    "subcategory": "Design Rings",
    "price": 1050,
    "originalPrice": 1260,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/white-howlite-pic1.webp",
    "badge": null,
    "desc": "Deeply calming stone that eases anxiety, quietens an overactive mind, and supports patience and restful sleep.",
    "longDesc": "{\"purpose\":\"Deeply calming stone that eases anxiety, quietens an overactive mind, and supports patience and restful sleep.\",\"crystalsIncluded\":\"White Howlite\",\"associatedChakras\":\"Crown\",\"description\":\"White Howlite Design Ring is a premium quality, authentic spiritual item. Deeply calming stone that eases anxiety, quietens an overactive mind, and supports patience and restful sleep. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Deeply calming stone that eases anxiety, quietens an overactive mind, and supports patience and restful sleep.\",\"Aligns and energises the Crown Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Crown"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/white-howlite-pic1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/white-howlite-pic2.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-crystal-rings/white-howlite-pic3.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "seven-chakra-mala",
    "name": "Seven Chakra Crystal Mala",
    "category": "malas",
    "subcategory": "Malas",
    "price": 1650,
    "originalPrice": 1980,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/malas/seven-chakra-pic-1.webp",
    "badge": null,
    "desc": "Balances, aligns, and activates all body energy centers.",
    "longDesc": "{\"purpose\":\"Chakra balancing, energetic harmony, and spiritual alignment.\",\"crystalsIncluded\":\"Seven Chakra Stones\",\"associatedChakras\":\"Root, Sacral, Solar Plexus, Heart, Throat, Third Eye, Crown\",\"description\":\"The Seven Chakra Bracelet is designed to support balance across the body’s primary energy centers. Each stone is traditionally associated with a specific chakra, encouraging harmony between the mind, body, and spirit.\",\"benefits\":[\"Supports chakra alignment\",\"Encourages energetic balance\",\"Promotes mindfulness and self-awareness\",\"Suitable for meditation and daily wear\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, meditation, yoga, prayer, and spiritual practices.\",\"howToEnergize\":\"Moonlight, selenite charging, or intention setting.\",\"affirmation\":\"I am balanced, aligned, and connected to my highest self.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root",
      "Sacral",
      "Solar Plexus",
      "Heart",
      "Throat",
      "Third Eye",
      "Crown"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/malas/seven-chakra-pic-1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/malas/seven-chakra-pic-2.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/malas/seven-chakra-design-2.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "rose-quartz-mala",
    "name": "Rose Quartz Crystal Mala",
    "category": "malas",
    "subcategory": "Malas",
    "price": 950,
    "originalPrice": 1140,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/malas/rose-quartz-pic-1.webp",
    "badge": null,
    "desc": "The stone of unconditional love, compassion, and emotional healing.",
    "longDesc": "{\"purpose\":\"Love, self-love, compassion, and emotional harmony.\",\"crystalsIncluded\":\"Rose Quartz\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Rose Quartz is one of the most popular crystals associated with love, compassion, and emotional well-being. It is often used to encourage self-love, kindness, and harmonious relationships.\",\"benefits\":[\"Encourages self-love and compassion\",\"Supports emotional balance\",\"Promotes harmony and understanding\",\"Inspires kindness and positivity\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, meditation, self-care practices, and relationship intentions.\",\"howToEnergize\":\"Moonlight charging is especially recommended.\",\"affirmation\":\"I am worthy of love, kindness, and emotional harmony.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/malas/rose-quartz-pic-1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/malas/rose-quartz-pic-2.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "turquoise-mala",
    "name": "Turquoise Crystal Mala",
    "category": "malas",
    "subcategory": "Malas",
    "price": 1850,
    "originalPrice": 2220,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/malas/turquoise.webp",
    "badge": null,
    "desc": "Ancient stones of protection, alignment, and communication.",
    "longDesc": "{\"purpose\":\"Communication, wisdom, balance, and self-expression.\",\"crystalsIncluded\":\"Natural Turquoise\",\"associatedChakras\":\"Throat Chakra\",\"description\":\"Turquoise has been valued for centuries as a stone associated with wisdom, communication, and self-expression. It is often worn by those seeking confidence in speaking and authentic communication.\",\"benefits\":[\"Encourages clear communication\",\"Supports self-expression\",\"Promotes confidence and wisdom\",\"Inspires emotional balance\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Meetings, presentations, conversations, and daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I communicate with wisdom, confidence, and authenticity.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Throat"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/malas/turquoise.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "black-tourmaline-mala",
    "name": "Black Tourmaline Crystal Mala",
    "category": "malas",
    "subcategory": "Malas",
    "price": 1050,
    "originalPrice": 1260,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/malas/black-tourmaline.webp",
    "badge": null,
    "desc": "Shields against negative energy, electromagnetic frequencies, and toxic environments.",
    "longDesc": "{\"purpose\":\"Grounding, protection, and energetic stability.\",\"crystalsIncluded\":\"Black Tourmaline\",\"associatedChakras\":\"Root Chakra\",\"description\":\"Black Tourmaline is one of the most widely used grounding stones. It is traditionally associated with protection, stability, and maintaining a balanced energetic environment.\",\"benefits\":[\"Encourages grounding\",\"Supports energetic protection\",\"Promotes stability\",\"Helps maintain focus and balance\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, travel, crowded environments, work.\",\"howToEnergize\":\"Moonlight, selenite charging, intention setting.\",\"affirmation\":\"I am grounded, protected, and secure.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/malas/black-tourmaline.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "karungali-mala",
    "name": "Karungali Crystal Mala",
    "category": "malas",
    "subcategory": "Malas",
    "price": 1850,
    "originalPrice": 2220,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/malas/karungali-pic-1.webp",
    "badge": null,
    "desc": "Sacred Ebony wood traditionally used for protection, grounding, and power.",
    "longDesc": "{\"purpose\":\"Grounding, spiritual discipline, and inner stability.\",\"crystalsIncluded\":\"Karungali Wood\",\"associatedChakras\":\"Root Chakra\",\"description\":\"Karungali is traditionally valued in spiritual practices for its grounding and stabilizing qualities. It is commonly worn during meditation, prayer, and daily spiritual routines.\",\"benefits\":[\"Encourages grounding and stability\",\"Supports spiritual practices\",\"Promotes inner calm\",\"Suitable for daily wear\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Meditation, prayer, spiritual practices, and daily wear.\",\"howToEnergize\":\"Prayer, intention setting, or placing near incense during spiritual practice.\",\"affirmation\":\"I remain grounded, calm, and connected to my inner strength.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/malas/karungali-pic-1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/malas/karungali-pic-2.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "rose-quartz-comb",
    "name": "Rose Quartz Healing Comb",
    "category": "glow-essentials",
    "subcategory": "Combs",
    "price": 950,
    "originalPrice": 1140,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/glow-essential-crystals/rose-quartz-comb-pic-1.webp",
    "badge": null,
    "desc": "The stone of unconditional love, compassion, and emotional healing.",
    "longDesc": "{\"purpose\":\"Love, self-love, compassion, and emotional harmony.\",\"crystalsIncluded\":\"Rose Quartz\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Rose Quartz is one of the most popular crystals associated with love, compassion, and emotional well-being. It is often used to encourage self-love, kindness, and harmonious relationships.\",\"benefits\":[\"Encourages self-love and compassion\",\"Supports emotional balance\",\"Promotes harmony and understanding\",\"Inspires kindness and positivity\"],\"howToEnergize\":\"Moonlight charging is especially recommended.\",\"affirmation\":\"I am worthy of love, kindness, and emotional harmony.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/glow-essential-crystals/rose-quartz-comb-pic-1.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "lapis-lazuli-anklet",
    "name": "Lapis Lazuli Anklet",
    "category": "anklets",
    "subcategory": "Anklets",
    "price": 1150,
    "originalPrice": 1380,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/anklets/lapis-lazuli-pic-1.webp",
    "badge": null,
    "desc": "Traditional royal blue stone for wisdom, truth, and inner power.",
    "longDesc": "{\"purpose\":\"Wisdom, communication, intuition, and self-expression.\",\"crystalsIncluded\":\"Lapis Lazuli\",\"associatedChakras\":\"Throat Chakra, Third Eye Chakra\",\"description\":\"Lapis Lazuli has long been associated with wisdom, truth, and self-expression. It is traditionally used to support clear communication and deeper self-awareness.\",\"benefits\":[\"Encourages confident communication\",\"Supports intuition and insight\",\"Promotes mental clarity\",\"Inspires self-awareness\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Meetings, presentations, study, meditation, and daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I express my truth with wisdom, confidence, and clarity.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Throat",
      "Third Eye"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/anklets/lapis-lazuli-pic-1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/anklets/lapis-lazuli-pic-2.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/anklets/lapis-lazuli-pic-3.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "black-tourmaline-anklet",
    "name": "Black Tourmaline Anklet",
    "category": "anklets",
    "subcategory": "Anklets",
    "price": 1050,
    "originalPrice": 1260,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/anklets/black-tourmaline-pic-1.webp",
    "badge": null,
    "desc": "Shields against negative energy, electromagnetic frequencies, and toxic environments.",
    "longDesc": "{\"purpose\":\"Grounding, protection, and energetic stability.\",\"crystalsIncluded\":\"Black Tourmaline\",\"associatedChakras\":\"Root Chakra\",\"description\":\"Black Tourmaline is one of the most widely used grounding stones. It is traditionally associated with protection, stability, and maintaining a balanced energetic environment.\",\"benefits\":[\"Encourages grounding\",\"Supports energetic protection\",\"Promotes stability\",\"Helps maintain focus and balance\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, travel, crowded environments, work.\",\"howToEnergize\":\"Moonlight, selenite charging, intention setting.\",\"affirmation\":\"I am grounded, protected, and secure.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/anklets/black-tourmaline-pic-1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/anklets/black-tourmaline-pic-2.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "pyrite-anklet",
    "name": "Pyrite Anklet",
    "category": "anklets",
    "subcategory": "Anklets",
    "price": 1250,
    "originalPrice": 1500,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/anklets/pyrite-pic-1.webp",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\"purpose\":\"Confidence, determination, leadership, and motivation.\",\"crystalsIncluded\":\"Pyrite\",\"associatedChakras\":\"Solar Plexus Chakra\",\"description\":\"Pyrite is traditionally associated with confidence, leadership, and determination. It is often chosen by entrepreneurs, professionals, and individuals working toward ambitious goals.\",\"benefits\":[\"Encourages confidence and leadership\",\"Supports motivation and determination\",\"Promotes goal-focused thinking\",\"Inspires positive action\"],\"recommendedHand\":\"Right Hand\",\"whenToWear\":\"Work, business meetings, interviews, and goal-setting activities.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I move forward with confidence, courage, and determination.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/anklets/pyrite-pic-1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/anklets/pyrite-pic-2.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "opal-face-roller",
    "name": "Opal Face Roller",
    "category": "glow-essentials",
    "subcategory": "Face Rollers",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/glow-essential-crystals/opal-pic-1.webp",
    "badge": null,
    "desc": "Enhances cosmic consciousness, spiritual vision, and inspiration.",
    "longDesc": "{\"purpose\":\"Enhances cosmic consciousness, spiritual vision, and inspiration.\",\"crystalsIncluded\":\"Opal\",\"associatedChakras\":\"Crown\",\"description\":\"Opal Face Roller is a premium quality, authentic spiritual item. Enhances cosmic consciousness, spiritual vision, and inspiration. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Enhances cosmic consciousness, spiritual vision, and inspiration.\",\"Aligns and energises the Crown Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Crown"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/glow-essential-crystals/opal-pic-1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/glow-essential-crystals/opal-face-roller-pic-2.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "green-jade-face-roller",
    "name": "Green Jade Face Roller",
    "category": "glow-essentials",
    "subcategory": "Face Rollers",
    "price": 1350,
    "originalPrice": 1620,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/glow-essential-crystals/jade-pic-1.webp",
    "badge": null,
    "desc": "Noble stone of luck, wisdom, long life, and physical health.",
    "longDesc": "{\"purpose\":\"Noble stone of luck, wisdom, long life, and physical health.\",\"crystalsIncluded\":\"Green Jade\",\"associatedChakras\":\"Heart\",\"description\":\"Green Jade Face Roller is a premium quality, authentic spiritual item. Noble stone of luck, wisdom, long life, and physical health. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Noble stone of luck, wisdom, long life, and physical health.\",\"Aligns and energises the Heart Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/glow-essential-crystals/jade-pic-1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/glow-essential-crystals/jade-pic-2.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "tiger-eye-face-roller",
    "name": "Tiger Eye Face Roller",
    "category": "glow-essentials",
    "subcategory": "Face Rollers",
    "price": 1050,
    "originalPrice": 1260,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/glow-essential-crystals/tiger-eye-pic-1.webp",
    "badge": null,
    "desc": "Boosts courage, self-confidence, willpower, and personal power.",
    "longDesc": "{\"purpose\":\"Confidence, focus, courage, and determination.\",\"crystalsIncluded\":\"Tiger Eye\",\"associatedChakras\":\"Solar Plexus Chakra, Root Chakra\",\"description\":\"Tiger Eye is traditionally associated with courage, confidence, and focus. It is one of the most popular stones for those seeking motivation and balanced decision-making.\",\"benefits\":[\"Encourages confidence and courage\",\"Supports focus and determination\",\"Promotes balanced decision-making\",\"Inspires motivation and action\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I move forward with confidence, courage, and clarity.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/glow-essential-crystals/tiger-eye-pic-1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/glow-essential-crystals/tiger-eye-pic-2.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "amethyst-face-roller",
    "name": "Amethyst Face Roller",
    "category": "glow-essentials",
    "subcategory": "Face Rollers",
    "price": 1050,
    "originalPrice": 1260,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/glow-essential-crystals/amethyst-pic-1.webp",
    "badge": null,
    "desc": "Calms mind, increases spiritual wisdom, and supports deep meditation.",
    "longDesc": "{\"purpose\":\"Peace, intuition, spiritual awareness, and relaxation.\",\"crystalsIncluded\":\"Amethyst\",\"associatedChakras\":\"Crown Chakra, Third Eye Chakra\",\"description\":\"Amethyst is one of the most popular spiritual crystals and is traditionally associated with peace, wisdom, and intuition. It is often used during meditation and mindfulness practices to support mental clarity and inner calm.\",\"benefits\":[\"Encourages relaxation\",\"Supports intuition\",\"Promotes spiritual awareness\",\"Helps create a peaceful environment\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I trust my intuition and embrace inner peace.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Third Eye",
      "Crown"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/glow-essential-crystals/amethyst-pic-1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/glow-essential-crystals/amethyst-pic-2.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "green-eventurine-face-roller",
    "name": "Green Eventurine Face Roller",
    "category": "glow-essentials",
    "subcategory": "Face Rollers",
    "price": 950,
    "originalPrice": 1140,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/glow-essential-crystals/green-eventurine-pic-1.webp",
    "badge": null,
    "desc": "Stone of opportunity and luck, bringing abundance and career success.",
    "longDesc": "{\"purpose\":\"Growth, optimism, emotional balance, and opportunity.\",\"crystalsIncluded\":\"Green Aventurine\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Green Aventurine is traditionally associated with growth, optimism, and emotional well-being. It is commonly used by those seeking fresh opportunities and a positive outlook.\",\"benefits\":[\"Encourages optimism and positivity\",\"Supports emotional balance\",\"Promotes personal growth\",\"Inspires confidence in new beginnings\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I welcome growth, positivity, and new opportunities into my life.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/glow-essential-crystals/green-eventurine-pic-1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/glow-essential-crystals/green-eventurine-pic-2.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "rose-quartz-face-roller",
    "name": "Rose Quartz Face Roller",
    "category": "glow-essentials",
    "subcategory": "Face Rollers",
    "price": 950,
    "originalPrice": 1140,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/glow-essential-crystals/rose-quartz-pic-1.webp",
    "badge": null,
    "desc": "The stone of unconditional love, compassion, and emotional healing.",
    "longDesc": "{\"purpose\":\"Love, self-love, compassion, and emotional harmony.\",\"crystalsIncluded\":\"Rose Quartz\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Rose Quartz is one of the most popular crystals associated with love, compassion, and emotional well-being. It is often used to encourage self-love, kindness, and harmonious relationships.\",\"benefits\":[\"Encourages self-love and compassion\",\"Supports emotional balance\",\"Promotes harmony and understanding\",\"Inspires kindness and positivity\"],\"howToEnergize\":\"Moonlight charging is especially recommended.\",\"affirmation\":\"I am worthy of love, kindness, and emotional harmony.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/glow-essential-crystals/rose-quartz-pic-1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/glow-essential-crystals/rose-quartz-pic-2.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/glow-essential-crystals/rose-quartz-pic-21.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "green-eventurine-guasha",
    "name": "Green Eventurine Guasha Stone",
    "category": "glow-essentials",
    "subcategory": "Gua Sha",
    "price": 950,
    "originalPrice": 1140,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/glow-essential-crystals/green-eventurine-gua-sha-pic-1.webp",
    "badge": null,
    "desc": "Stone of opportunity and luck, bringing abundance and career success.",
    "longDesc": "{\"purpose\":\"Growth, optimism, emotional balance, and opportunity.\",\"crystalsIncluded\":\"Green Aventurine\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Green Aventurine is traditionally associated with growth, optimism, and emotional well-being. It is commonly used by those seeking fresh opportunities and a positive outlook.\",\"benefits\":[\"Encourages optimism and positivity\",\"Supports emotional balance\",\"Promotes personal growth\",\"Inspires confidence in new beginnings\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I welcome growth, positivity, and new opportunities into my life.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/glow-essential-crystals/green-eventurine-gua-sha-pic-1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/glow-essential-crystals/green-eventurine-gua-sha-pic-2.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "black-tourmaline-guasha",
    "name": "Black Tourmaline Guasha Stone",
    "category": "glow-essentials",
    "subcategory": "Gua Sha",
    "price": 1050,
    "originalPrice": 1260,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/glow-essential-crystals/black-tourmaline-gua-sha.webp",
    "badge": null,
    "desc": "Shields against negative energy, electromagnetic frequencies, and toxic environments.",
    "longDesc": "{\"purpose\":\"Grounding, protection, and energetic stability.\",\"crystalsIncluded\":\"Black Tourmaline\",\"associatedChakras\":\"Root Chakra\",\"description\":\"Black Tourmaline is one of the most widely used grounding stones. It is traditionally associated with protection, stability, and maintaining a balanced energetic environment.\",\"benefits\":[\"Encourages grounding\",\"Supports energetic protection\",\"Promotes stability\",\"Helps maintain focus and balance\"],\"howToEnergize\":\"Moonlight, selenite charging, intention setting.\",\"affirmation\":\"I am grounded, protected, and secure.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/glow-essential-crystals/black-tourmaline-gua-sha.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "big-crystal-tree",
    "name": "Big Crystal Tree",
    "category": "home-decor",
    "subcategory": "Crystal Trees",
    "price": 2800,
    "originalPrice": 3360,
    "image": "/images/products/tree.png",
    "badge": null,
    "desc": "Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.",
    "longDesc": "{\"purpose\":\"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\"associatedChakras\":\"Solar Plexus, Heart\",\"description\":\"Big Crystal Tree is a premium quality, authentic spiritual item. Powerful combination of pyrite, citrine, and green aventurine to draw prosperity. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\"Aligns and energises the Solar Plexus, Heart Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Solar Plexus",
      "Heart"
    ],
    "images": [
      "/images/products/tree.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "small-crystal-tree",
    "name": "Small Crystal Tree",
    "category": "home-decor",
    "subcategory": "Crystal Trees",
    "price": 1600,
    "originalPrice": 1920,
    "image": "/images/products/tree.png",
    "badge": null,
    "desc": "Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.",
    "longDesc": "{\"purpose\":\"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\"associatedChakras\":\"Solar Plexus, Heart\",\"description\":\"Small Crystal Tree is a premium quality, authentic spiritual item. Powerful combination of pyrite, citrine, and green aventurine to draw prosperity. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\"Aligns and energises the Solar Plexus, Heart Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Solar Plexus",
      "Heart"
    ],
    "images": [
      "/images/products/tree.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "shell-tree",
    "name": "Shell Tree",
    "category": "home-decor",
    "subcategory": "Crystal Trees",
    "price": 2200,
    "originalPrice": 2640,
    "image": "/images/products/tree.png",
    "badge": null,
    "desc": "Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.",
    "longDesc": "{\"purpose\":\"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\"associatedChakras\":\"Solar Plexus, Heart\",\"description\":\"Shell Tree is a premium quality, authentic spiritual item. Powerful combination of pyrite, citrine, and green aventurine to draw prosperity. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\"Aligns and energises the Solar Plexus, Heart Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Solar Plexus",
      "Heart"
    ],
    "images": [
      "/images/products/tree.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "plain-pyrite-frame",
    "name": "Plain Pyrite Frame",
    "category": "designer-crystals",
    "subcategory": "Frames",
    "price": 3500,
    "originalPrice": 4200,
    "image": "/images/products/silver.png",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\"purpose\":\"Confidence, determination, leadership, and motivation.\",\"crystalsIncluded\":\"Pyrite\",\"associatedChakras\":\"Solar Plexus Chakra\",\"description\":\"Pyrite is traditionally associated with confidence, leadership, and determination. It is often chosen by entrepreneurs, professionals, and individuals working toward ambitious goals.\",\"benefits\":[\"Encourages confidence and leadership\",\"Supports motivation and determination\",\"Promotes goal-focused thinking\",\"Inspires positive action\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I move forward with confidence, courage, and determination.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "images": [
      "/images/products/silver.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "selenite-laxmi-devi-pyrite-frame",
    "name": "Selenite Laxmi Devi Pyrite Frame",
    "category": "designer-crystals",
    "subcategory": "Frames",
    "price": 3500,
    "originalPrice": 4200,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/laxmi-pyrite-duster-plate-pic-1.webp",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\"purpose\":\"Confidence, determination, leadership, and motivation.\",\"crystalsIncluded\":\"Pyrite\",\"associatedChakras\":\"Solar Plexus Chakra\",\"description\":\"Pyrite is traditionally associated with confidence, leadership, and determination. It is often chosen by entrepreneurs, professionals, and individuals working toward ambitious goals.\",\"benefits\":[\"Encourages confidence and leadership\",\"Supports motivation and determination\",\"Promotes goal-focused thinking\",\"Inspires positive action\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I move forward with confidence, courage, and determination.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/laxmi-pyrite-duster-plate-pic-1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/laxmi-pyrite-duster-plate-pic-3.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "ganesha-pyrite-frame",
    "name": "Ganesha Pyrite Frame",
    "category": "designer-crystals",
    "subcategory": "Frames",
    "price": 3500,
    "originalPrice": 4200,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/ganesha-pyrite-duster-plate-pic-1.webp",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\"purpose\":\"Confidence, determination, leadership, and motivation.\",\"crystalsIncluded\":\"Pyrite\",\"associatedChakras\":\"Solar Plexus Chakra\",\"description\":\"Pyrite is traditionally associated with confidence, leadership, and determination. It is often chosen by entrepreneurs, professionals, and individuals working toward ambitious goals.\",\"benefits\":[\"Encourages confidence and leadership\",\"Supports motivation and determination\",\"Promotes goal-focused thinking\",\"Inspires positive action\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I move forward with confidence, courage, and determination.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/ganesha-pyrite-duster-plate-pic-1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/ganesha-pyrite-pic-2.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/ganesha-pyrite-pic-3.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "gayatri-mantra-pyrite-plate",
    "name": "Gayatri Mantra Pyrite Duster Plate",
    "category": "designer-crystals",
    "subcategory": "Frames",
    "price": 3500,
    "originalPrice": 4200,
    "image": "/images/products/mala.png",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\"purpose\":\"Confidence, determination, leadership, and motivation.\",\"crystalsIncluded\":\"Pyrite\",\"associatedChakras\":\"Solar Plexus Chakra\",\"description\":\"Pyrite is traditionally associated with confidence, leadership, and determination. It is often chosen by entrepreneurs, professionals, and individuals working toward ambitious goals.\",\"benefits\":[\"Encourages confidence and leadership\",\"Supports motivation and determination\",\"Promotes goal-focused thinking\",\"Inspires positive action\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I move forward with confidence, courage, and determination.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "images": [
      "/images/products/mala.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "selenite-plain-plate",
    "name": "Selenite Plain Plate",
    "category": "home-decor",
    "subcategory": "Selenite Crystals",
    "price": 1200,
    "originalPrice": 1440,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Selenite%20pic%201",
    "badge": null,
    "desc": "Liquid light crystal that purifies other crystals and living spaces.",
    "longDesc": "{\"purpose\":\"Liquid light crystal that purifies other crystals and living spaces.\",\"crystalsIncluded\":\"Selenite\",\"associatedChakras\":\"Crown\",\"description\":\"Selenite Plain Plate is a premium quality, authentic spiritual item. Liquid light crystal that purifies other crystals and living spaces. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Liquid light crystal that purifies other crystals and living spaces.\",\"Aligns and energises the Crown Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Crown"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Selenite%20pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Selenite%20pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Selenite%20pic%203"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "selenite-lamp-model",
    "name": "Selenite Lamp Model",
    "category": "home-decor",
    "subcategory": "Selenite Crystals",
    "price": 2400,
    "originalPrice": 2880,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Selenite%20pic%201",
    "badge": null,
    "desc": "Liquid light crystal that purifies other crystals and living spaces.",
    "longDesc": "{\"purpose\":\"Liquid light crystal that purifies other crystals and living spaces.\",\"crystalsIncluded\":\"Selenite Lamp Model\",\"associatedChakras\":\"Crown\",\"description\":\"Selenite Lamp Model is a premium quality, authentic spiritual item. Liquid light crystal that purifies other crystals and living spaces. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Liquid light crystal that purifies other crystals and living spaces.\",\"Aligns and energises the Crown Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Crown"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Selenite%20pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Selenite%20pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Selenite%20pic%203"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "custom-rashi-bracelet",
    "name": "Custom Rashi Zodiac Bracelet",
    "category": "bracelets",
    "subcategory": "Rashi Bracelets",
    "price": 1550,
    "originalPrice": 1860,
    "image": "/images/products/bracelet.png",
    "badge": null,
    "desc": "Combines Tiger Eye, Hematite, and Black Obsidian for ultimate energetic shielding.",
    "longDesc": "{\"purpose\":\"Combines Tiger Eye, Hematite, and Black Obsidian for ultimate energetic shielding.\",\"crystalsIncluded\":\"Rashi Zodiac\",\"associatedChakras\":\"Root, Solar Plexus\",\"description\":\"Custom Rashi Zodiac Bracelet is a premium quality, authentic spiritual item. Combines Tiger Eye, Hematite, and Black Obsidian for ultimate energetic shielding. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Combines Tiger Eye, Hematite, and Black Obsidian for ultimate energetic shielding.\",\"Aligns and energises the Root, Solar Plexus Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Root",
      "Solar Plexus"
    ],
    "images": [
      "/images/products/bracelet.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "custom-numerology-bracelet",
    "name": "Custom Numerology Number Bracelet",
    "category": "bracelets",
    "subcategory": "Number Bracelets",
    "price": 1550,
    "originalPrice": 1860,
    "image": "/images/products/bracelet.png",
    "badge": null,
    "desc": "Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.",
    "longDesc": "{\"purpose\":\"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\"crystalsIncluded\":\"Numerology\",\"associatedChakras\":\"Solar Plexus, Heart\",\"description\":\"Custom Numerology Number Bracelet is a premium quality, authentic spiritual item. Powerful combination of pyrite, citrine, and green aventurine to draw prosperity. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\"Aligns and energises the Solar Plexus, Heart Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Solar Plexus",
      "Heart"
    ],
    "images": [
      "/images/products/bracelet.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "tree-of-life-keychain",
    "name": "Tree Of Life Keychain",
    "category": "home-decor",
    "subcategory": "Keychains",
    "price": 450,
    "originalPrice": 540,
    "image": "/images/products/tree.png",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\"purpose\":\"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\"associatedChakras\":\"Solar Plexus\",\"description\":\"Tree Of Life Keychain is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\"Aligns and energises the Solar Plexus Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "images": [
      "/images/products/tree.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "zibu-green-eventurine-keychain",
    "name": "Zibu Green Eventurine Keychain",
    "category": "home-decor",
    "subcategory": "Keychains",
    "price": 450,
    "originalPrice": 540,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Green%20eventurine%20pic%201",
    "badge": null,
    "desc": "Stone of opportunity and luck, bringing abundance and career success.",
    "longDesc": "{\"purpose\":\"Growth, optimism, emotional balance, and opportunity.\",\"crystalsIncluded\":\"Green Aventurine\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Green Aventurine is traditionally associated with growth, optimism, and emotional well-being. It is commonly used by those seeking fresh opportunities and a positive outlook.\",\"benefits\":[\"Encourages optimism and positivity\",\"Supports emotional balance\",\"Promotes personal growth\",\"Inspires confidence in new beginnings\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, new ventures, travel, and personal development activities.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I welcome growth, positivity, and new opportunities into my life.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Green%20eventurine%20pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Green%20eventurine%20pic%202"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "pyrite-keychain",
    "name": "Pyrite Keychain",
    "category": "home-decor",
    "subcategory": "Keychains",
    "price": 450,
    "originalPrice": 540,
    "image": "/images/products/tree.png",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\"purpose\":\"Confidence, determination, leadership, and motivation.\",\"crystalsIncluded\":\"Pyrite\",\"associatedChakras\":\"Solar Plexus Chakra\",\"description\":\"Pyrite is traditionally associated with confidence, leadership, and determination. It is often chosen by entrepreneurs, professionals, and individuals working toward ambitious goals.\",\"benefits\":[\"Encourages confidence and leadership\",\"Supports motivation and determination\",\"Promotes goal-focused thinking\",\"Inspires positive action\"],\"recommendedHand\":\"Right Hand\",\"whenToWear\":\"Work, business meetings, interviews, and goal-setting activities.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I move forward with confidence, courage, and determination.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "images": [
      "/images/products/tree.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "lapis-lazuli-pyramid",
    "name": "Lapis Lazuli Pyramid",
    "category": "pyramids",
    "subcategory": "Pyramids",
    "price": 1800,
    "originalPrice": 2160,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Lapis%20lazuli",
    "badge": null,
    "desc": "Traditional royal blue stone for wisdom, truth, and inner power.",
    "longDesc": "{\"purpose\":\"Wisdom, communication, intuition, and self-expression.\",\"crystalsIncluded\":\"Lapis Lazuli\",\"associatedChakras\":\"Throat Chakra, Third Eye Chakra\",\"description\":\"Lapis Lazuli has long been associated with wisdom, truth, and self-expression. It is traditionally used to support clear communication and deeper self-awareness.\",\"benefits\":[\"Encourages confident communication\",\"Supports intuition and insight\",\"Promotes mental clarity\",\"Inspires self-awareness\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I express my truth with wisdom, confidence, and clarity.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Throat",
      "Third Eye"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Lapis%20lazuli"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "laxmi-pyramid",
    "name": "Laxmi Aura Pyramid",
    "category": "pyramids",
    "subcategory": "Pyramids",
    "price": 1800,
    "originalPrice": 2160,
    "image": "/images/products/silver.png",
    "badge": null,
    "desc": "Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.",
    "longDesc": "{\"purpose\":\"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\"crystalsIncluded\":\"Aura\",\"associatedChakras\":\"Solar Plexus, Heart\",\"description\":\"Laxmi Aura Pyramid is a premium quality, authentic spiritual item. Powerful combination of pyrite, citrine, and green aventurine to draw prosperity. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\"Aligns and energises the Solar Plexus, Heart Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Solar Plexus",
      "Heart"
    ],
    "images": [
      "/images/products/silver.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "pencil-point-wand",
    "name": "Pencil Point Wand",
    "category": "crystal-towers",
    "subcategory": "Wands",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/products/raw.png",
    "badge": null,
    "desc": "The Master Healer crystal that amplifies other stones' energy.",
    "longDesc": "{\"purpose\":\"The Master Healer crystal that amplifies other stones' energy.\",\"crystalsIncluded\":\"Pencil\",\"associatedChakras\":\"Crown\",\"description\":\"Pencil Point Wand is a premium quality, authentic spiritual item. The Master Healer crystal that amplifies other stones' energy. Sourced carefully and ritually cleansed.\",\"benefits\":[\"The Master Healer crystal that amplifies other stones' energy.\",\"Aligns and energises the Crown Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Crown"
    ],
    "images": [
      "/images/products/raw.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "seven-chakra-wand",
    "name": "Seven Chakra Healing Wand",
    "category": "crystal-towers",
    "subcategory": "Wands",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/seven-chakra-wand.webp",
    "badge": null,
    "desc": "Balances, aligns, and activates all body energy centers.",
    "longDesc": "{\"purpose\":\"Chakra balancing, energetic harmony, and spiritual alignment.\",\"crystalsIncluded\":\"Seven Chakra Stones\",\"associatedChakras\":\"Root, Sacral, Solar Plexus, Heart, Throat, Third Eye, Crown\",\"description\":\"The Seven Chakra Bracelet is designed to support balance across the body’s primary energy centers. Each stone is traditionally associated with a specific chakra, encouraging harmony between the mind, body, and spirit.\",\"benefits\":[\"Supports chakra alignment\",\"Encourages energetic balance\",\"Promotes mindfulness and self-awareness\",\"Suitable for meditation and daily wear\"],\"howToEnergize\":\"Moonlight, selenite charging, or intention setting.\",\"affirmation\":\"I am balanced, aligned, and connected to my highest self.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root",
      "Sacral",
      "Solar Plexus",
      "Heart",
      "Throat",
      "Third Eye",
      "Crown"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/seven-chakra-wand.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "black-tourmaline-wand",
    "name": "Black Tourmaline Wand",
    "category": "crystal-towers",
    "subcategory": "Wands",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/crystals-towers/black-tourmaline-pic-1.webp",
    "badge": null,
    "desc": "Shields against negative energy, electromagnetic frequencies, and toxic environments.",
    "longDesc": "{\"purpose\":\"Grounding, protection, and energetic stability.\",\"crystalsIncluded\":\"Black Tourmaline\",\"associatedChakras\":\"Root Chakra\",\"description\":\"Black Tourmaline is one of the most widely used grounding stones. It is traditionally associated with protection, stability, and maintaining a balanced energetic environment.\",\"benefits\":[\"Encourages grounding\",\"Supports energetic protection\",\"Promotes stability\",\"Helps maintain focus and balance\"],\"howToEnergize\":\"Moonlight, selenite charging, intention setting.\",\"affirmation\":\"I am grounded, protected, and secure.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/crystals-towers/black-tourmaline-pic-1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/crystals-towers/black-tourmaline-pic-2.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "rhodonite-wand",
    "name": "Rhodonite Wand",
    "category": "crystal-towers",
    "subcategory": "Wands",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/crystals-towers/rhodonite-pic-1.webp",
    "badge": null,
    "desc": "Stones of compassion, forgiveness, and emotional balance after hurt.",
    "longDesc": "{\"purpose\":\"Compassion, emotional balance, forgiveness, and self-love.\",\"crystalsIncluded\":\"Rhodonite\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Rhodonite is traditionally associated with compassion, emotional healing, and harmony. It is often used by those seeking emotional balance and positive relationships.\",\"benefits\":[\"Encourages compassion and understanding\",\"Supports emotional balance\",\"Promotes self-love and forgiveness\",\"Inspires harmonious relationships\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I choose compassion, balance, and emotional harmony.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/crystals-towers/rhodonite-pic-1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/crystals-towers/rhodonite-pic-2.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "evil-eye-pendant-beauty",
    "name": "Evil Eye Protective Pendant",
    "category": "pendants",
    "subcategory": "Evil Eye",
    "price": 850,
    "originalPrice": 1020,
    "image": "/images/products/pendant.png",
    "badge": null,
    "desc": "Protective talisman that shields against jealousy, glare, and bad wishes.",
    "longDesc": "{\"purpose\":\"Protection, positivity, and symbolic safeguarding.\",\"crystalsIncluded\":\"Evil Eye Bead/Charm\",\"associatedChakras\":\"Not Chakra-Specific\",\"description\":\"The Evil Eye Bracelet is a traditional protective symbol used across many cultures. It is commonly worn as a reminder of positivity, protection, and good intentions.\",\"benefits\":[\"Symbolizes protection\",\"Encourages positive energy\",\"Serves as a meaningful daily accessory\",\"Complements spiritual practices\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, travel, work, and social gatherings.\",\"howToEnergize\":\"Moonlight or intention setting.\",\"affirmation\":\"I am surrounded by positivity, protection, and peace.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root",
      "Throat"
    ],
    "images": [
      "/images/products/pendant.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "evil-eye-bracelet-beauty",
    "name": "Evil Eye Protective Bracelet",
    "category": "bracelets",
    "subcategory": "Evil Eye",
    "price": 850,
    "originalPrice": 1020,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/evil%20eye/Pic%201",
    "badge": null,
    "desc": "Protective talisman that shields against jealousy, glare, and bad wishes.",
    "longDesc": "{\"purpose\":\"Protection, positivity, and symbolic safeguarding.\",\"crystalsIncluded\":\"Evil Eye Bead/Charm\",\"associatedChakras\":\"Not Chakra-Specific\",\"description\":\"The Evil Eye Bracelet is a traditional protective symbol used across many cultures. It is commonly worn as a reminder of positivity, protection, and good intentions.\",\"benefits\":[\"Symbolizes protection\",\"Encourages positive energy\",\"Serves as a meaningful daily accessory\",\"Complements spiritual practices\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, travel, work, and social gatherings.\",\"howToEnergize\":\"Moonlight or intention setting.\",\"affirmation\":\"I am surrounded by positivity, protection, and peace.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root",
      "Throat"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/evil%20eye/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/evil%20eye/5ZA01653.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/evil%20eye/5ZA01967.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/evil%20eye/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/evil%20eye/Pic%203"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "white-sage-smudge",
    "name": "White Sage Smudge Bundle",
    "category": "home-decor",
    "subcategory": "Cleansing",
    "price": 650,
    "originalPrice": 780,
    "image": "/images/products/sphere.png",
    "badge": null,
    "desc": "The Master Healer crystal that amplifies other stones' energy.",
    "longDesc": "{\"purpose\":\"The Master Healer crystal that amplifies other stones' energy.\",\"crystalsIncluded\":\"White Sage Smudge Bundle\",\"associatedChakras\":\"Crown\",\"description\":\"White Sage Smudge Bundle is a premium quality, authentic spiritual item. The Master Healer crystal that amplifies other stones' energy. Sourced carefully and ritually cleansed.\",\"benefits\":[\"The Master Healer crystal that amplifies other stones' energy.\",\"Aligns and energises the Crown Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Crown"
    ],
    "images": [
      "/images/products/sphere.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "karungali-bracelet",
    "name": "Karungali Ebony Wood Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 900,
    "originalPrice": 1080,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/karungali%20/Pic%201",
    "badge": null,
    "desc": "Sacred Ebony wood traditionally used for protection, grounding, and power.",
    "longDesc": "{\"purpose\":\"Grounding, spiritual discipline, and inner stability.\",\"crystalsIncluded\":\"Karungali Wood\",\"associatedChakras\":\"Root Chakra\",\"description\":\"Karungali is traditionally valued in spiritual practices for its grounding and stabilizing qualities. It is commonly worn during meditation, prayer, and daily spiritual routines.\",\"benefits\":[\"Encourages grounding and stability\",\"Supports spiritual practices\",\"Promotes inner calm\",\"Suitable for daily wear\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Meditation, prayer, spiritual practices, and daily wear.\",\"howToEnergize\":\"Prayer, intention setting, or placing near incense during spiritual practice.\",\"affirmation\":\"I remain grounded, calm, and connected to my inner strength.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/karungali%20/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/karungali%20/5ZA01692.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/karungali%20/5ZA01882.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/karungali%20/5ZA01973.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/karungali%20/5ZA05580.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/karungali%20/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/karungali%20/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/karungali%20/Pic%204",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/karungali%20/Pic%205"
    ],
    "usdPrice": 18,
    "originalUsdPrice": 22
  },
  {
    "id": "sri-chakra-yantra",
    "name": "Sri Yantra Sacred Geometry Plate",
    "category": "designer-crystals",
    "subcategory": "Yantras",
    "price": 2100,
    "originalPrice": 2520,
    "image": "/images/products/tower.png",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\"purpose\":\"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\"crystalsIncluded\":\"Sri Sacred Geometry\",\"associatedChakras\":\"Solar Plexus\",\"description\":\"Sri Yantra Sacred Geometry Plate is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\"Aligns and energises the Solar Plexus Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "images": [
      "/images/products/tower.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "rose-quartz-merkaba",
    "name": "Rose Quartz Merkaba Star",
    "category": "home-decor",
    "subcategory": "Merkabas",
    "price": 1250,
    "originalPrice": 1500,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/rose-quartz-merkaba-pic-1.webp",
    "badge": null,
    "desc": "The stone of unconditional love, compassion, and emotional healing.",
    "longDesc": "{\"purpose\":\"Love, self-love, compassion, and emotional harmony.\",\"crystalsIncluded\":\"Rose Quartz\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Rose Quartz is one of the most popular crystals associated with love, compassion, and emotional well-being. It is often used to encourage self-love, kindness, and harmonious relationships.\",\"benefits\":[\"Encourages self-love and compassion\",\"Supports emotional balance\",\"Promotes harmony and understanding\",\"Inspires kindness and positivity\"],\"howToEnergize\":\"Moonlight charging is especially recommended.\",\"affirmation\":\"I am worthy of love, kindness, and emotional harmony.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/rose-quartz-merkaba-pic-1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/rose-quartz-merkaba-pic-2.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/rose-quartz-merkaba-pic-3.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "amethyst-merkaba",
    "name": "Amethyst Merkaba Star",
    "category": "home-decor",
    "subcategory": "Merkabas",
    "price": 1250,
    "originalPrice": 1500,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/amethyst-merkaba-pic-1.webp",
    "badge": null,
    "desc": "Calms mind, increases spiritual wisdom, and supports deep meditation.",
    "longDesc": "{\"purpose\":\"Peace, intuition, spiritual awareness, and relaxation.\",\"crystalsIncluded\":\"Amethyst\",\"associatedChakras\":\"Crown Chakra, Third Eye Chakra\",\"description\":\"Amethyst is one of the most popular spiritual crystals and is traditionally associated with peace, wisdom, and intuition. It is often used during meditation and mindfulness practices to support mental clarity and inner calm.\",\"benefits\":[\"Encourages relaxation\",\"Supports intuition\",\"Promotes spiritual awareness\",\"Helps create a peaceful environment\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I trust my intuition and embrace inner peace.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Third Eye",
      "Crown"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/amethyst-merkaba-pic-1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/amethyst-merkaba-pic-2.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/amethyst-merkaba-pic-3.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "pyrite-small-sphere",
    "name": "Pyrite Small Sphere",
    "category": "home-decor",
    "subcategory": "Spheres",
    "price": 1250,
    "originalPrice": 1500,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/pyrite-sphere.webp",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\"purpose\":\"Confidence, determination, leadership, and motivation.\",\"crystalsIncluded\":\"Pyrite\",\"associatedChakras\":\"Solar Plexus Chakra\",\"description\":\"Pyrite is traditionally associated with confidence, leadership, and determination. It is often chosen by entrepreneurs, professionals, and individuals working toward ambitious goals.\",\"benefits\":[\"Encourages confidence and leadership\",\"Supports motivation and determination\",\"Promotes goal-focused thinking\",\"Inspires positive action\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I move forward with confidence, courage, and determination.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/pyrite-sphere.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "amethyst-small-sphere",
    "name": "Amethyst Small Sphere",
    "category": "home-decor",
    "subcategory": "Spheres",
    "price": 1250,
    "originalPrice": 1500,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/amethyst-sphere-2.webp",
    "badge": null,
    "desc": "Calms mind, increases spiritual wisdom, and supports deep meditation.",
    "longDesc": "{\"purpose\":\"Peace, intuition, spiritual awareness, and relaxation.\",\"crystalsIncluded\":\"Amethyst\",\"associatedChakras\":\"Crown Chakra, Third Eye Chakra\",\"description\":\"Amethyst is one of the most popular spiritual crystals and is traditionally associated with peace, wisdom, and intuition. It is often used during meditation and mindfulness practices to support mental clarity and inner calm.\",\"benefits\":[\"Encourages relaxation\",\"Supports intuition\",\"Promotes spiritual awareness\",\"Helps create a peaceful environment\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I trust my intuition and embrace inner peace.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Third Eye",
      "Crown"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/amethyst-sphere-2.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "aura-booster-spray",
    "name": "Aura Booster Energy Spray",
    "category": "home-decor",
    "subcategory": "Aura Booster",
    "price": 1100,
    "originalPrice": 1320,
    "image": "/images/products/silver.png",
    "badge": null,
    "desc": "The Master Healer crystal that amplifies other stones' energy.",
    "longDesc": "{\"purpose\":\"The Master Healer crystal that amplifies other stones' energy.\",\"crystalsIncluded\":\"Aura Booster Energy Spray\",\"associatedChakras\":\"Crown\",\"description\":\"Aura Booster Energy Spray is a premium quality, authentic spiritual item. The Master Healer crystal that amplifies other stones' energy. Sourced carefully and ritually cleansed.\",\"benefits\":[\"The Master Healer crystal that amplifies other stones' energy.\",\"Aligns and energises the Crown Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Crown"
    ],
    "images": [
      "/images/products/silver.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "lapis-lazuli-shell-tree",
    "name": "Lapis Lazuli Shell Tree",
    "category": "home-decor",
    "subcategory": "Shell Trees",
    "price": 2450,
    "originalPrice": 2940,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Lapis%20lazuli",
    "badge": null,
    "desc": "Traditional royal blue stone for wisdom, truth, and inner power.",
    "longDesc": "{\"purpose\":\"Wisdom, communication, intuition, and self-expression.\",\"crystalsIncluded\":\"Lapis Lazuli\",\"associatedChakras\":\"Throat Chakra, Third Eye Chakra\",\"description\":\"Lapis Lazuli has long been associated with wisdom, truth, and self-expression. It is traditionally used to support clear communication and deeper self-awareness.\",\"benefits\":[\"Encourages confident communication\",\"Supports intuition and insight\",\"Promotes mental clarity\",\"Inspires self-awareness\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I express my truth with wisdom, confidence, and clarity.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Throat",
      "Third Eye"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Lapis%20lazuli"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "rose-quartz-shell-tree",
    "name": "Rose Quartz Shell Tree",
    "category": "home-decor",
    "subcategory": "Shell Trees",
    "price": 2450,
    "originalPrice": 2940,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Rose%20quartz",
    "badge": null,
    "desc": "The stone of unconditional love, compassion, and emotional healing.",
    "longDesc": "{\"purpose\":\"Love, self-love, compassion, and emotional harmony.\",\"crystalsIncluded\":\"Rose Quartz\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Rose Quartz is one of the most popular crystals associated with love, compassion, and emotional well-being. It is often used to encourage self-love, kindness, and harmonious relationships.\",\"benefits\":[\"Encourages self-love and compassion\",\"Supports emotional balance\",\"Promotes harmony and understanding\",\"Inspires kindness and positivity\"],\"howToEnergize\":\"Moonlight charging is especially recommended.\",\"affirmation\":\"I am worthy of love, kindness, and emotional harmony.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Rose%20quartz"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "green-eventurine-shell-tree",
    "name": "Green Eventurine Shell Tree",
    "category": "home-decor",
    "subcategory": "Shell Trees",
    "price": 2450,
    "originalPrice": 2940,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/green-eventurine-small-tree.webp",
    "badge": null,
    "desc": "Stone of opportunity and luck, bringing abundance and career success.",
    "longDesc": "{\"purpose\":\"Growth, optimism, emotional balance, and opportunity.\",\"crystalsIncluded\":\"Green Aventurine\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Green Aventurine is traditionally associated with growth, optimism, and emotional well-being. It is commonly used by those seeking fresh opportunities and a positive outlook.\",\"benefits\":[\"Encourages optimism and positivity\",\"Supports emotional balance\",\"Promotes personal growth\",\"Inspires confidence in new beginnings\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I welcome growth, positivity, and new opportunities into my life.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/green-eventurine-small-tree.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "amethyst-rose-quartz-shell-tree",
    "name": "Amethyst Rose Quartz Shell Tree",
    "category": "home-decor",
    "subcategory": "Shell Trees",
    "price": 2450,
    "originalPrice": 2940,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Rose%20quartz",
    "badge": null,
    "desc": "The stone of unconditional love, compassion, and emotional healing.",
    "longDesc": "{\"purpose\":\"Love, self-love, compassion, and emotional harmony.\",\"crystalsIncluded\":\"Rose Quartz\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Rose Quartz is one of the most popular crystals associated with love, compassion, and emotional well-being. It is often used to encourage self-love, kindness, and harmonious relationships.\",\"benefits\":[\"Encourages self-love and compassion\",\"Supports emotional balance\",\"Promotes harmony and understanding\",\"Inspires kindness and positivity\"],\"howToEnergize\":\"Moonlight charging is especially recommended.\",\"affirmation\":\"I am worthy of love, kindness, and emotional harmony.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Rose%20quartz"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "citrine-shell-tree",
    "name": "Citrine Shell Tree",
    "category": "home-decor",
    "subcategory": "Shell Trees",
    "price": 2450,
    "originalPrice": 2940,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/citrine-small-tree.webp",
    "badge": null,
    "desc": "The Merchant's Stone of abundance, manifestation, and positive vibes.",
    "longDesc": "{\"purpose\":\"Confidence, positivity, abundance mindset, and personal empowerment.\",\"crystalsIncluded\":\"Citrine\",\"associatedChakras\":\"Solar Plexus Chakra\",\"description\":\"Citrine is traditionally associated with positivity, confidence, and personal growth. It is often used by those seeking motivation, optimism, and a positive outlook on life.\",\"benefits\":[\"Encourages confidence and self-belief\",\"Promotes optimism and positivity\",\"Supports motivation and determination\",\"Inspires personal growth\"],\"howToEnergize\":\"Moonlight, selenite charging, or intention setting.\",\"affirmation\":\"I attract confidence, positivity, and opportunities for growth.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/citrine-small-tree.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "amethyst-shell-tree",
    "name": "Amethyst Shell Tree",
    "category": "home-decor",
    "subcategory": "Shell Trees",
    "price": 2450,
    "originalPrice": 2940,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/amethyst-small-tree.webp",
    "badge": null,
    "desc": "Calms mind, increases spiritual wisdom, and supports deep meditation.",
    "longDesc": "{\"purpose\":\"Peace, intuition, spiritual awareness, and relaxation.\",\"crystalsIncluded\":\"Amethyst\",\"associatedChakras\":\"Crown Chakra, Third Eye Chakra\",\"description\":\"Amethyst is one of the most popular spiritual crystals and is traditionally associated with peace, wisdom, and intuition. It is often used during meditation and mindfulness practices to support mental clarity and inner calm.\",\"benefits\":[\"Encourages relaxation\",\"Supports intuition\",\"Promotes spiritual awareness\",\"Helps create a peaceful environment\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I trust my intuition and embrace inner peace.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Third Eye",
      "Crown"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/amethyst-small-tree.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "pyrite-soap-palm-stone",
    "name": "Pyrite Soap Palm Stone",
    "category": "raw-crystal",
    "subcategory": "Palm Stones",
    "price": 1250,
    "originalPrice": 1500,
    "image": "/images/products/raw.png",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\"purpose\":\"Confidence, determination, leadership, and motivation.\",\"crystalsIncluded\":\"Pyrite\",\"associatedChakras\":\"Solar Plexus Chakra\",\"description\":\"Pyrite is traditionally associated with confidence, leadership, and determination. It is often chosen by entrepreneurs, professionals, and individuals working toward ambitious goals.\",\"benefits\":[\"Encourages confidence and leadership\",\"Supports motivation and determination\",\"Promotes goal-focused thinking\",\"Inspires positive action\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I move forward with confidence, courage, and determination.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "images": [
      "/images/products/raw.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "peridot-earrings",
    "name": "Peridot Earrings",
    "category": "silver-jewelry",
    "subcategory": "Earrings",
    "price": 850,
    "originalPrice": 1020,
    "image": "/images/products/bracelet.png",
    "badge": null,
    "desc": "Inspires positive energy, abundance, and heart-centered joy.",
    "longDesc": "{\"purpose\":\"Growth, positivity, and emotional renewal.\",\"crystalsIncluded\":\"Peridot\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Peridot is traditionally associated with growth, positivity, and renewal. Its vibrant green color symbolizes fresh beginnings and a positive outlook.\",\"benefits\":[\"Encourages optimism\",\"Supports emotional renewal\",\"Promotes personal growth\",\"Inspires positive thinking\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"New beginnings, personal development, and daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I welcome growth, positivity, and fresh opportunities.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "/images/products/bracelet.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "green-eventurine-earrings",
    "name": "Green Eventurine Earrings",
    "category": "silver-jewelry",
    "subcategory": "Earrings",
    "price": 850,
    "originalPrice": 1020,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Green%20eventurine%20pic%201",
    "badge": null,
    "desc": "Stone of opportunity and luck, bringing abundance and career success.",
    "longDesc": "{\"purpose\":\"Growth, optimism, emotional balance, and opportunity.\",\"crystalsIncluded\":\"Green Aventurine\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Green Aventurine is traditionally associated with growth, optimism, and emotional well-being. It is commonly used by those seeking fresh opportunities and a positive outlook.\",\"benefits\":[\"Encourages optimism and positivity\",\"Supports emotional balance\",\"Promotes personal growth\",\"Inspires confidence in new beginnings\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, new ventures, travel, and personal development activities.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I welcome growth, positivity, and new opportunities into my life.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Green%20eventurine%20pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Green%20eventurine%20pic%202"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "rose-quartz-earrings",
    "name": "Rose Quartz Earrings",
    "category": "silver-jewelry",
    "subcategory": "Earrings",
    "price": 850,
    "originalPrice": 1020,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Rose%20quartz",
    "badge": null,
    "desc": "The stone of unconditional love, compassion, and emotional healing.",
    "longDesc": "{\"purpose\":\"Love, self-love, compassion, and emotional harmony.\",\"crystalsIncluded\":\"Rose Quartz\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Rose Quartz is one of the most popular crystals associated with love, compassion, and emotional well-being. It is often used to encourage self-love, kindness, and harmonious relationships.\",\"benefits\":[\"Encourages self-love and compassion\",\"Supports emotional balance\",\"Promotes harmony and understanding\",\"Inspires kindness and positivity\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, meditation, self-care practices, and relationship intentions.\",\"howToEnergize\":\"Moonlight charging is especially recommended.\",\"affirmation\":\"I am worthy of love, kindness, and emotional harmony.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Rose%20quartz"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "green-eventurine-angel",
    "name": "Green Eventurine Guardian Angel",
    "category": "home-decor",
    "subcategory": "Angels",
    "price": 1100,
    "originalPrice": 1320,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Green%20eventurine%20pic%201",
    "badge": null,
    "desc": "Stone of opportunity and luck, bringing abundance and career success.",
    "longDesc": "{\"purpose\":\"Growth, optimism, emotional balance, and opportunity.\",\"crystalsIncluded\":\"Green Aventurine\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Green Aventurine is traditionally associated with growth, optimism, and emotional well-being. It is commonly used by those seeking fresh opportunities and a positive outlook.\",\"benefits\":[\"Encourages optimism and positivity\",\"Supports emotional balance\",\"Promotes personal growth\",\"Inspires confidence in new beginnings\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I welcome growth, positivity, and new opportunities into my life.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Green%20eventurine%20pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Green%20eventurine%20pic%202"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "pyrite-angel",
    "name": "Pyrite Guardian Angel",
    "category": "home-decor",
    "subcategory": "Angels",
    "price": 1100,
    "originalPrice": 1320,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/pyrite-angel.webp",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\"purpose\":\"Confidence, determination, leadership, and motivation.\",\"crystalsIncluded\":\"Pyrite\",\"associatedChakras\":\"Solar Plexus Chakra\",\"description\":\"Pyrite is traditionally associated with confidence, leadership, and determination. It is often chosen by entrepreneurs, professionals, and individuals working toward ambitious goals.\",\"benefits\":[\"Encourages confidence and leadership\",\"Supports motivation and determination\",\"Promotes goal-focused thinking\",\"Inspires positive action\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I move forward with confidence, courage, and determination.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/pyrite-angel.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "citrine-angel",
    "name": "Citrine Guardian Angel",
    "category": "home-decor",
    "subcategory": "Angels",
    "price": 1100,
    "originalPrice": 1320,
    "image": "/images/products/tree.png",
    "badge": null,
    "desc": "The Merchant's Stone of abundance, manifestation, and positive vibes.",
    "longDesc": "{\"purpose\":\"Confidence, positivity, abundance mindset, and personal empowerment.\",\"crystalsIncluded\":\"Citrine\",\"associatedChakras\":\"Solar Plexus Chakra\",\"description\":\"Citrine is traditionally associated with positivity, confidence, and personal growth. It is often used by those seeking motivation, optimism, and a positive outlook on life.\",\"benefits\":[\"Encourages confidence and self-belief\",\"Promotes optimism and positivity\",\"Supports motivation and determination\",\"Inspires personal growth\"],\"howToEnergize\":\"Moonlight, selenite charging, or intention setting.\",\"affirmation\":\"I attract confidence, positivity, and opportunities for growth.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "images": [
      "/images/products/tree.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "tiger-eye-angel",
    "name": "Tiger Eye Guardian Angel",
    "category": "home-decor",
    "subcategory": "Angels",
    "price": 1100,
    "originalPrice": 1320,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/tiger-eye-angel.webp",
    "badge": null,
    "desc": "Boosts courage, self-confidence, willpower, and personal power.",
    "longDesc": "{\"purpose\":\"Confidence, focus, courage, and determination.\",\"crystalsIncluded\":\"Tiger Eye\",\"associatedChakras\":\"Solar Plexus Chakra, Root Chakra\",\"description\":\"Tiger Eye is traditionally associated with courage, confidence, and focus. It is one of the most popular stones for those seeking motivation and balanced decision-making.\",\"benefits\":[\"Encourages confidence and courage\",\"Supports focus and determination\",\"Promotes balanced decision-making\",\"Inspires motivation and action\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I move forward with confidence, courage, and clarity.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/home-decor/tiger-eye-angel.webp"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "water-tumble-set",
    "name": "Water Crystal Purification Tumble Set",
    "category": "raw-crystal",
    "subcategory": "Tumbles",
    "price": 950,
    "originalPrice": 1140,
    "image": "/images/products/silver.png",
    "badge": null,
    "desc": "The Master Healer crystal that amplifies other stones' energy.",
    "longDesc": "{\"purpose\":\"The Master Healer crystal that amplifies other stones' energy.\",\"crystalsIncluded\":\"Water Purification Tumble\",\"associatedChakras\":\"Crown\",\"description\":\"Water Crystal Purification Tumble Set is a premium quality, authentic spiritual item. The Master Healer crystal that amplifies other stones' energy. Sourced carefully and ritually cleansed.\",\"benefits\":[\"The Master Healer crystal that amplifies other stones' energy.\",\"Aligns and energises the Crown Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Crown"
    ],
    "images": [
      "/images/products/silver.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "aura-cleansing-bath-salt",
    "name": "Aura Cleansing Ritual Bath Salt",
    "category": "home-decor",
    "subcategory": "Bathing Salts",
    "price": 750,
    "originalPrice": 900,
    "image": "/images/products/raw.png",
    "badge": null,
    "desc": "The Master Healer crystal that amplifies other stones' energy.",
    "longDesc": "{\"purpose\":\"The Master Healer crystal that amplifies other stones' energy.\",\"crystalsIncluded\":\"Aura Cleansing Ritual Bath Salt\",\"associatedChakras\":\"Crown\",\"description\":\"Aura Cleansing Ritual Bath Salt is a premium quality, authentic spiritual item. The Master Healer crystal that amplifies other stones' energy. Sourced carefully and ritually cleansed.\",\"benefits\":[\"The Master Healer crystal that amplifies other stones' energy.\",\"Aligns and energises the Crown Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Crown"
    ],
    "images": [
      "/images/products/raw.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "tibetan-singing-bowl-set",
    "name": "Tibetan Singing Meditation Bowl Set",
    "category": "home-decor",
    "subcategory": "Sound Healing",
    "price": 3200,
    "originalPrice": 3840,
    "image": "/images/products/bracelet.png",
    "badge": null,
    "desc": "Calms mind, increases spiritual wisdom, and supports deep meditation.",
    "longDesc": "{\"purpose\":\"Calms mind, increases spiritual wisdom, and supports deep meditation.\",\"crystalsIncluded\":\"Tibetan Singing Meditation Bowl\",\"associatedChakras\":\"Third Eye, Crown\",\"description\":\"Tibetan Singing Meditation Bowl Set is a premium quality, authentic spiritual item. Calms mind, increases spiritual wisdom, and supports deep meditation. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Calms mind, increases spiritual wisdom, and supports deep meditation.\",\"Aligns and energises the Third Eye, Crown Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Third Eye",
      "Crown"
    ],
    "images": [
      "/images/products/bracelet.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "manifestation-spell-jar",
    "name": "Ritual Manifestation Spell Jar",
    "category": "spell-jars",
    "subcategory": "Spell Jars",
    "price": 1200,
    "originalPrice": 1440,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/Spell%20jar%20/%20%20%20%20Success%20Manifestation%20Jar%20pic%201",
    "badge": null,
    "desc": "Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.",
    "longDesc": "{\"purpose\":\"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\"crystalsIncluded\":\"Ritual Manifestation Spell Jar\",\"associatedChakras\":\"Solar Plexus, Heart\",\"description\":\"Ritual Manifestation Spell Jar is a premium quality, authentic spiritual item. Powerful combination of pyrite, citrine, and green aventurine to draw prosperity. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\"Aligns and energises the Solar Plexus, Heart Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Solar Plexus",
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/Spell%20jar%20/%20%20%20%20Success%20Manifestation%20Jar%20pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/Spell%20jar%20/%20%20%20%20Success%20Manifestation%20Jar%20pic%202"
    ],
    "usdPrice": 24,
    "originalUsdPrice": 29,
    "variants": [
      {
        "name": "Mini",
        "price": 1200,
        "usdPrice": 24,
        "originalPrice": 1440,
        "originalUsdPrice": 29,
        "image": "/images/products/spelljar-mini.png"
      },
      {
        "name": "Medium (100ml)",
        "price": 3800,
        "usdPrice": 74,
        "originalPrice": 4560,
        "originalUsdPrice": 89,
        "image": "/images/products/spelljar-medium.png"
      },
      {
        "name": "Large (500ml)",
        "price": 6300,
        "usdPrice": 124,
        "originalPrice": 7560,
        "originalUsdPrice": 149,
        "image": "/images/products/spelljar-large.png"
      }
    ]
  },
  {
    "id": "abundance-ritual-candle",
    "name": "Abundance Intentional Ritual Candle",
    "category": "home-decor",
    "subcategory": "Ritual Candles",
    "price": 950,
    "originalPrice": 1140,
    "image": "/images/products/pendant.png",
    "badge": null,
    "desc": "Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.",
    "longDesc": "{\"purpose\":\"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\"crystalsIncluded\":\"Abundance Intentional Ritual Candle\",\"associatedChakras\":\"Solar Plexus, Heart\",\"description\":\"Abundance Intentional Ritual Candle is a premium quality, authentic spiritual item. Powerful combination of pyrite, citrine, and green aventurine to draw prosperity. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\"Aligns and energises the Solar Plexus, Heart Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Solar Plexus",
      "Heart"
    ],
    "images": [
      "/images/products/pendant.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "golden-pyrite-turtle",
    "name": "Golden Pyrite Turtle Vastu Statue",
    "category": "designer-crystals",
    "subcategory": "Vastu",
    "price": 1800,
    "originalPrice": 2160,
    "image": "/images/products/sphere.png",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\"purpose\":\"Confidence, determination, abundance mindset, and motivation.\",\"crystalsIncluded\":\"Golden Pyrite\",\"associatedChakras\":\"Solar Plexus Chakra\",\"description\":\"Golden Pyrite is traditionally associated with confidence, determination, and personal empowerment. It is often used by those seeking motivation and a strong mindset for achieving goals.\",\"benefits\":[\"Encourages confidence and leadership\",\"Supports determination and focus\",\"Promotes motivation and ambition\",\"Inspires positive action\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I move forward with confidence, determination, and purpose.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "images": [
      "/images/products/sphere.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "green-eventurine-zibu-coin",
    "name": "Green Eventurine Zibu Coin",
    "category": "home-decor",
    "subcategory": "Zibu Coins",
    "price": 650,
    "originalPrice": 780,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Green%20eventurine%20pic%201",
    "badge": null,
    "desc": "Stone of opportunity and luck, bringing abundance and career success.",
    "longDesc": "{\"purpose\":\"Growth, optimism, emotional balance, and opportunity.\",\"crystalsIncluded\":\"Green Aventurine\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Green Aventurine is traditionally associated with growth, optimism, and emotional well-being. It is commonly used by those seeking fresh opportunities and a positive outlook.\",\"benefits\":[\"Encourages optimism and positivity\",\"Supports emotional balance\",\"Promotes personal growth\",\"Inspires confidence in new beginnings\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I welcome growth, positivity, and new opportunities into my life.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Green%20eventurine%20pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Green%20eventurine%20pic%202"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "black-tourmaline-zibu-coin",
    "name": "Black Tourmaline Zibu Coin",
    "category": "home-decor",
    "subcategory": "Zibu Coins",
    "price": 650,
    "originalPrice": 780,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Black%20tourmaline%20pic%201",
    "badge": null,
    "desc": "Shields against negative energy, electromagnetic frequencies, and toxic environments.",
    "longDesc": "{\"purpose\":\"Grounding, protection, and energetic stability.\",\"crystalsIncluded\":\"Black Tourmaline\",\"associatedChakras\":\"Root Chakra\",\"description\":\"Black Tourmaline is one of the most widely used grounding stones. It is traditionally associated with protection, stability, and maintaining a balanced energetic environment.\",\"benefits\":[\"Encourages grounding\",\"Supports energetic protection\",\"Promotes stability\",\"Helps maintain focus and balance\"],\"howToEnergize\":\"Moonlight, selenite charging, intention setting.\",\"affirmation\":\"I am grounded, protected, and secure.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Black%20tourmaline%20pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Black%20tourmaline%20pic%202"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "rose-quartz-zibu-coin",
    "name": "Rose Quartz Zibu Coin",
    "category": "home-decor",
    "subcategory": "Zibu Coins",
    "price": 650,
    "originalPrice": 780,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Rose%20quartz",
    "badge": null,
    "desc": "The stone of unconditional love, compassion, and emotional healing.",
    "longDesc": "{\"purpose\":\"Love, self-love, compassion, and emotional harmony.\",\"crystalsIncluded\":\"Rose Quartz\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Rose Quartz is one of the most popular crystals associated with love, compassion, and emotional well-being. It is often used to encourage self-love, kindness, and harmonious relationships.\",\"benefits\":[\"Encourages self-love and compassion\",\"Supports emotional balance\",\"Promotes harmony and understanding\",\"Inspires kindness and positivity\"],\"howToEnergize\":\"Moonlight charging is especially recommended.\",\"affirmation\":\"I am worthy of love, kindness, and emotional harmony.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Rose%20quartz"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "pyrite-cluster-set-3",
    "name": "Golden Pyrite Raw Cluster (Set of 3)",
    "category": "raw-crystal",
    "subcategory": "Raw Stones",
    "price": 2100,
    "originalPrice": 2520,
    "image": "/images/products/raw.png",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\"purpose\":\"Confidence, determination, abundance mindset, and motivation.\",\"crystalsIncluded\":\"Golden Pyrite\",\"associatedChakras\":\"Solar Plexus Chakra\",\"description\":\"Golden Pyrite is traditionally associated with confidence, determination, and personal empowerment. It is often used by those seeking motivation and a strong mindset for achieving goals.\",\"benefits\":[\"Encourages confidence and leadership\",\"Supports determination and focus\",\"Promotes motivation and ambition\",\"Inspires positive action\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I move forward with confidence, determination, and purpose.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "images": [
      "/images/products/raw.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "kuber-stone-set-3",
    "name": "Kuber Manifestation Raw Stone (Set of 3)",
    "category": "raw-crystal",
    "subcategory": "Raw Stones",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/products/raw.png",
    "badge": null,
    "desc": "Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.",
    "longDesc": "{\"purpose\":\"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\"crystalsIncluded\":\"Kuber Manifestation\",\"associatedChakras\":\"Solar Plexus, Heart\",\"description\":\"Kuber Manifestation Raw Stone (Set Of 3) is a premium quality, authentic spiritual item. Powerful combination of pyrite, citrine, and green aventurine to draw prosperity. Sourced carefully and ritually cleansed.\",\"benefits\":[\"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\"Aligns and energises the Solar Plexus, Heart Chakra.\",\"Dissolves negative energies and builds a strong positive protective aura.\",\"Supports emotional healing, meditation, and mindfulness practices.\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Solar Plexus",
      "Heart"
    ],
    "images": [
      "/images/products/raw.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "black-tourmaline-chain",
    "name": "Black Tourmaline Chain",
    "category": "silver-jewelry",
    "subcategory": "Chains",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Black%20tourmaline%20pic%201",
    "badge": null,
    "desc": "Shields against negative energy, electromagnetic frequencies, and toxic environments.",
    "longDesc": "{\"purpose\":\"Grounding, protection, and energetic stability.\",\"crystalsIncluded\":\"Black Tourmaline\",\"associatedChakras\":\"Root Chakra\",\"description\":\"Black Tourmaline is one of the most widely used grounding stones. It is traditionally associated with protection, stability, and maintaining a balanced energetic environment.\",\"benefits\":[\"Encourages grounding\",\"Supports energetic protection\",\"Promotes stability\",\"Helps maintain focus and balance\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, travel, crowded environments, work.\",\"howToEnergize\":\"Moonlight, selenite charging, intention setting.\",\"affirmation\":\"I am grounded, protected, and secure.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Black%20tourmaline%20pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Black%20tourmaline%20pic%202"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "irani-firoza-chain-large-beads",
    "name": "Irani Firoza Chain (Large Beads)",
    "category": "silver-jewelry",
    "subcategory": "Chains",
    "price": 2850,
    "originalPrice": 3420,
    "image": "/irani-firoza-chain.png",
    "badge": null,
    "desc": "Genuine Irani Turquoise for confidence, public speaking, and clear communication.",
    "longDesc": "{\"purpose\":\"Genuine Irani Turquoise for confidence, public speaking, and clear communication.\",\"crystalsIncluded\":\"Irani Firoza Chain\",\"associatedChakras\":\"Throat\",\"description\":\"Irani Firoza (Turquoise) is a powerful stone of protection, wisdom, and good fortune. The large beads enhance its energy, making this chain especially effective for confidence, communication, and positive transformation. Traditionally worn to attract luck and ward off negative influences.\",\"benefits\":[\"Protects from negative energies and misfortune\",\"Enhances confidence and self-expression\",\"Promotes emotional healing and positivity\",\"Supports throat chakra activation\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid water and chemicals\",\"Cleanse with moonlight or incense smoke\",\"Store carefully due to large bead size\"],\"disclaimer\":\"Crystals are complementary tools for well-being and not a replacement for medical advice.\"}",
    "chakras": [
      "Throat"
    ],
    "images": [
      "/irani-firoza-chain.png"
    ],
    "usdPrice": 0,
    "originalUsdPrice": null
  },
  {
    "id": "seven-chakra-and-om-mani-padme-hum-bracelet",
    "name": "Seven Chakra + Om Mani Padme Hum Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/7%20chakra%20%2Bom%20mani%20padme%20hum/pic%201",
    "badge": null,
    "desc": "Chakra balancing, spiritual alignment, emotional harmony, and positive energy flow.",
    "longDesc": "{\"purpose\":\"Chakra balancing, spiritual alignment, emotional harmony, and positive energy flow.\",\"crystalsIncluded\":\"Red Jasper, Carnelian, Citrine/Tiger Eye, Green Aventurine, Blue Agate, Lapis Lazuli/Sodalite, Amethyst, Clear Quartz, Om Mani Padme Hum engraved bead.\",\"associatedChakras\":\"Root, Sacral, Solar Plexus, Heart, Throat, Third Eye, Crown.\",\"description\":\"The Seven Chakra Om Mani Padme Hum Bracelet is designed to support balance across the body’s seven primary energy centers. Each crystal is associated with a specific chakra and is traditionally used to encourage energetic harmony, emotional well-being, and spiritual awareness. The sacred Om Mani Padme Hum bead symbolizes compassion, wisdom, and inner transformation.\",\"benefits\":[\"Supports chakra alignment\",\"Encourages emotional balance\",\"Promotes mindfulness and inner peace\",\"Supports spiritual growth\",\"Suitable for meditation and daily wear\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily, meditation, yoga, prayer, spiritual practices.\",\"howToEnergize\":\"Moonlight, selenite plate, intention setting.\",\"affirmation\":\"I am balanced, aligned, and connected to my highest self.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root",
      "Sacral",
      "Solar Plexus",
      "Heart",
      "Throat",
      "Third Eye",
      "Crown"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/7%20chakra%20%2Bom%20mani%20padme%20hum/pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/7%20chakra%20%2Bom%20mani%20padme%20hum/5ZA01690.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/7%20chakra%20%2Bom%20mani%20padme%20hum/5ZA01993.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/7%20chakra%20%2Bom%20mani%20padme%20hum/5ZA05600.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/7%20chakra%20%2Bom%20mani%20padme%20hum/pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/7%20chakra%20%2Bom%20mani%20padme%20hum/pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/7%20chakra%20%2Bom%20mani%20padme%20hum/pic%204"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34
  },
  {
    "id": "angel-aura-quartz-bracelet",
    "name": "Angel Aura Quartz Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angel%20aura/Pic%201",
    "badge": null,
    "desc": "Positivity, spiritual connection, and uplifting energy.",
    "longDesc": "{\"purpose\":\"Positivity, spiritual connection, and uplifting energy.\",\"crystalsIncluded\":\"Angel Aura Quartz\",\"associatedChakras\":\"Crown Chakra\",\"description\":\"Angel Aura Quartz is admired for its iridescent appearance and is traditionally associated with uplifting energy, joy, and spiritual connection. Many people use it during meditation and mindfulness practices.\",\"benefits\":[\"Encourages positivity\",\"Supports spiritual practices\",\"Promotes emotional upliftment\",\"Inspires optimism\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Meditation, prayer, daily wear.\",\"howToEnergize\":\"Moonlight, selenite, intention setting.\",\"affirmation\":\"I welcome peace, light, and positive energy into my life.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Crown"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angel%20aura/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angel%20aura/5ZA01709.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angel%20aura/5ZA01710.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angel%20aura/5ZA01954.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angel%20aura/5ZA05614.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angel%20aura/5ZA05615.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angel%20aura/5ZA05630.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angel%20aura/5ZA05631.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/angel%20aura/Pic%202"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34
  },
  {
    "id": "karungali-bracelet-round",
    "name": "Karungali Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 900,
    "originalPrice": 1080,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/karungali%20/Pic%201",
    "badge": null,
    "desc": "Grounding, spiritual discipline, and inner stability.",
    "longDesc": "{\"purpose\":\"Grounding, spiritual discipline, and inner stability.\",\"crystalsIncluded\":\"Karungali Wood\",\"associatedChakras\":\"Root Chakra\",\"description\":\"Karungali is traditionally valued in spiritual practices for its grounding and stabilizing qualities. It is commonly worn during meditation, prayer, and daily spiritual routines.\",\"benefits\":[\"Encourages grounding and stability\",\"Supports spiritual practices\",\"Promotes inner calm\",\"Suitable for daily wear\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Meditation, prayer, spiritual practices, and daily wear.\",\"howToEnergize\":\"Prayer, intention setting, or placing near incense during spiritual practice.\",\"affirmation\":\"I remain grounded, calm, and connected to my inner strength.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/karungali%20/Pic%201"
    ],
    "usdPrice": 18,
    "originalUsdPrice": 22
  },
  {
    "id": "kunzite-bracelet",
    "name": "Kunzite Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1750,
    "originalPrice": 2100,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/kunzite/Pic%201",
    "badge": null,
    "desc": "Love, compassion, emotional healing, and self- acceptance.",
    "longDesc": "{\"purpose\":\"Love, compassion, emotional healing, and self-acceptance.\",\"crystalsIncluded\":\"Kunzite\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Kunzite is traditionally associated with unconditional love, compassion, and emotional well-being. Many crystal enthusiasts use it to encourage kindness, self-love, and harmonious relationships.\",\"benefits\":[\"Encourages self-love and compassion\",\"Supports emotional balance\",\"Promotes kindness and understanding\",\"Inspires positive relationships\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, meditation, self-care practices, and emotional reflection.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I open my heart to love, compassion, and emotional harmony.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/kunzite/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/kunzite/5ZA01718.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/kunzite/5ZA01793.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/kunzite/5ZA01956.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/kunzite/5ZA05587.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/kunzite/5ZA05588.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/kunzite/Pic%202"
    ],
    "usdPrice": 35,
    "originalUsdPrice": 42
  },
  {
    "id": "moonstone-bracelet-white-moonstone-bracelet",
    "name": "Moonstone Bracelet (White Moonstone) Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/Pic%201",
    "badge": null,
    "desc": "Emotional balance, intuition, and inner harmony.",
    "longDesc": "{\"purpose\":\"Emotional balance, intuition, and inner harmony.\",\"crystalsIncluded\":\"White Moonstone\",\"associatedChakras\":\"Crown Chakra, Third Eye Chakra\",\"description\":\"White Moonstone is traditionally associated with intuition, emotional balance, and inner reflection. Its gentle energy makes it a popular choice for those seeking calm and mindfulness.\",\"benefits\":[\"Encourages emotional balance\",\"Supports intuition and self-awareness\",\"Promotes inner peace\",\"Inspires mindfulness\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Meditation, evening relaxation, spiritual practices, and daily wear.\",\"howToEnergize\":\"Moonlight charging is especially recommended.\",\"affirmation\":\"I trust my intuition and embrace emotional balance.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Crown",
      "Third Eye"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/5ZA01696.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/5ZA05611.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/5ZA05620.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/5ZA05621.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/moon%20stone/Pic%204"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34
  },
  {
    "id": "multi-fluorite-bracelet-rainbow-fluorite-bracelet",
    "name": "Multi-Fluorite Bracelet (Rainbow Fluorite) Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/multi%20flourite/Multiflourite%20pic%201",
    "badge": null,
    "desc": "Focus, clarity, learning, and balanced thinking.",
    "longDesc": "{\"purpose\":\"Focus, clarity, learning, and balanced thinking.\",\"crystalsIncluded\":\"Rainbow Fluorite\",\"associatedChakras\":\"Heart Chakra, Third Eye Chakra, Crown Chakra\",\"description\":\"Rainbow Fluorite is traditionally associated with mental clarity, focus, and organized thinking. It is a popular crystal among students, professionals, and those seeking greater concentration.\",\"benefits\":[\"Encourages focus and concentration\",\"Supports organized thinking\",\"Promotes mental clarity\",\"Inspires balanced decision-making\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Study sessions, work, planning, and daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"My mind is focused, clear, and aligned with my goals.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart",
      "Third Eye",
      "Crown"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/multi%20flourite/Multiflourite%20pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/multi%20flourite/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/multi%20flourite/Pic%203"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34
  },
  {
    "id": "om-mani-padme-hum-and-black-obsidian-bracelet",
    "name": "Om Mani Padme Hum + Black Obsidian Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1750,
    "originalPrice": 2100,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/OM%20mani%20padme%20hum%20%2B%20black%20obsidian/Pic%201",
    "badge": null,
    "desc": "Grounding, spiritual awareness, and energetic protection.",
    "longDesc": "{\"purpose\":\"Grounding, spiritual awareness, and energetic protection.\",\"crystalsIncluded\":\"Black Obsidian, Om Mani Padme Hum Engraved Bead\",\"associatedChakras\":\"Root Chakra\",\"description\":\"This bracelet combines Black Obsidian, traditionally associated with grounding and stability, with the sacred Om Mani Padme Hum mantra bead, a symbol of compassion, wisdom, and spiritual growth. Together they create a meaningful bracelet for meditation and mindful living.\",\"benefits\":[\"Encourages grounding and stability\",\"Supports spiritual practices\",\"Promotes mindfulness\",\"Suitable for daily wear and meditation\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Meditation, prayer, travel, and daily wear.\",\"howToEnergize\":\"Moonlight, selenite charging, and mantra chanting.\",\"affirmation\":\"I am grounded, mindful, and connected to my inner wisdom.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/OM%20mani%20padme%20hum%20%2B%20black%20obsidian/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/OM%20mani%20padme%20hum%20%2B%20black%20obsidian/5ZA01684.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/OM%20mani%20padme%20hum%20%2B%20black%20obsidian/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/OM%20mani%20padme%20hum%20%2B%20black%20obsidian/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/OM%20mani%20padme%20hum%20%2B%20black%20obsidian/Pic%204",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/OM%20mani%20padme%20hum%20%2B%20black%20obsidian/Pic%205"
    ],
    "usdPrice": 35,
    "originalUsdPrice": 42
  },
  {
    "id": "suleimani-hakeek-bracelet",
    "name": "Suleimani Hakeek Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/sulemani%20haikik/Pic%201",
    "badge": null,
    "desc": "Grounding, protection, confidence, and stability.",
    "longDesc": "{\"purpose\":\"Grounding, protection, confidence, and stability.\",\"crystalsIncluded\":\"Suleimani Hakeek (Agate)\",\"associatedChakras\":\"Root Chakra\",\"description\":\"Suleimani Hakeek is traditionally valued for grounding and stability. It is commonly worn in spiritual traditions as a symbol of strength, focus, and protection.\",\"benefits\":[\"Encourages grounding and balance\",\"Supports confidence and stability\",\"Promotes focus and resilience\",\"Suitable for daily wear\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, travel, meditation, and spiritual practices.\",\"howToEnergize\":\"Moonlight, prayer, or selenite charging.\",\"affirmation\":\"I am strong, grounded, and protected.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/sulemani%20haikik/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/sulemani%20haikik/5ZA01697.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/sulemani%20haikik/5ZA01698.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/sulemani%20haikik/5ZA01979.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/sulemani%20haikik/5ZA05643.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/sulemani%20haikik/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/sulemani%20haikik/Pic%203"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34
  },
  {
    "id": "turquoise-bracelet",
    "name": "Turquoise Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/turquoise/Pic%201",
    "badge": null,
    "desc": "Communication, wisdom, balance, and self- expression.",
    "longDesc": "{\"purpose\":\"Communication, wisdom, balance, and self-expression.\",\"crystalsIncluded\":\"Natural Turquoise\",\"associatedChakras\":\"Throat Chakra\",\"description\":\"Turquoise has been valued for centuries as a stone associated with wisdom, communication, and self-expression. It is often worn by those seeking confidence in speaking and authentic communication.\",\"benefits\":[\"Encourages clear communication\",\"Supports self-expression\",\"Promotes confidence and wisdom\",\"Inspires emotional balance\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Meetings, presentations, conversations, and daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I communicate with wisdom, confidence, and authenticity.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Throat"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/turquoise/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/turquoise/5ZA01622.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/turquoise/5ZA01638.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/turquoise/5ZA01639.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/turquoise/5ZA01782.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/turquoise/5ZA01848.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/turquoise/5ZA01968.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/turquoise/5ZA01986.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/turquoise/5ZA05645.JPG",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/turquoise/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/turquoise/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/bracelates%20by%20crystals/turquoise/Pic%204"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34
  },
  {
    "id": "earth-tone-mother-of-pearl-bracelet",
    "name": "Earth-Tone Mother Of Pearl Bracelet",
    "category": "bracelets",
    "subcategory": "Designer Bracelets",
    "price": 2200,
    "originalPrice": 2640,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/%20%20%20%20Earth%20Tone%20Mother%20of%20Pearl%20Shell",
    "badge": null,
    "desc": "Elegance, emotional balance, inner harmony, and timeless beauty.",
    "longDesc": "{\"purpose\":\"Elegance, emotional balance, inner harmony, and timeless beauty.\",\"crystalsIncluded\":\"Earth-Tone Mother Pearl\",\"description\":\"The Earth-Tone Mother of Pearl Bracelet showcases the natural beauty of ocean-inspired shell beads in warm, earthy shades. Handcrafted with genuine shell material, this bracelet radiates understated elegance and a calming, nurturing energy. Mother of Pearl is traditionally associated with emotional protection, intuition, and inner harmony. Its connection to the ocean symbolizes depth, wisdom, and the gentle flow of life.\",\"benefits\":[\"Promotes emotional balance and inner harmony.\",\"Encourages calm, intuitive thinking and clear decision-making.\",\"Connects the wearer to calming, ocean-like energy.\",\"Enhances personal style with natural, timeless elegance.\",\"Suitable for daily wear and formal occasions.\"],\"whenToWear\":\"Daily wear, social gatherings, workplace, and relaxation.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I embrace balance, beauty, and harmony in every aspect of my life.\",\"careInstructions\":[\"Energize by: Moonlight charging or intention setting.\",\"Avoid prolonged contact with water, soap, and cosmetic chemicals.\",\"Wipe gently with a soft, dry cloth to maintain its lustre.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/%20%20%20%20Earth%20Tone%20Mother%20of%20Pearl%20Shell"
    ],
    "usdPrice": 44,
    "originalUsdPrice": 53
  },
  {
    "id": "green-mother-of-pearl-shell-bracelet",
    "name": "Green Mother Of Pearl Shell Bracelet",
    "category": "bracelets",
    "subcategory": "Designer Bracelets",
    "price": 2200,
    "originalPrice": 2640,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/%20%20%20%20Green%20Mother%20of%20Pearl%20Shell",
    "badge": null,
    "desc": "Harmony, growth, positivity, and natural beauty.",
    "longDesc": "{\"purpose\":\"Harmony, growth, positivity, and natural beauty.\",\"crystalsIncluded\":\"Green Mother Pearl\",\"description\":\"The Green Mother of Pearl Shell Bracelet combines timeless elegance with nature-inspired beauty. Crafted from genuine green shell material, it carries a soothing, calming energy associated with growth, renewal, and harmony. Green shell is traditionally linked to the Heart Chakra and is believed to attract abundance, nurture creativity, and bring a sense of natural balance and vitality.\",\"benefits\":[\"Encourages emotional balance, growth, and renewal.\",\"Attracts positive energy, abundance, and vitality.\",\"Nurtures creativity and a positive outlook on life.\",\"Enhances personal style with a sophisticated natural look.\",\"Suitable for everyday wear and special occasions.\"],\"whenToWear\":\"Daily wear, nature walks, meditation, and social gatherings.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I welcome growth, positivity, and harmony into my life.\",\"careInstructions\":[\"Energize by: Moonlight charging or intention setting.\",\"Avoid prolonged contact with water, soap, and cosmetic chemicals.\",\"Wipe gently with a soft, dry cloth to maintain its natural lustre.\",\"Store in a dry, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/%20%20%20%20Green%20Mother%20of%20Pearl%20Shell"
    ],
    "usdPrice": 44,
    "originalUsdPrice": 53
  },
  {
    "id": "natural-mother-of-pearl-shell-bracelet",
    "name": "Natural Mother Of Pearl Shell Bracelet",
    "category": "bracelets",
    "subcategory": "Designer Bracelets",
    "price": 2200,
    "originalPrice": 2640,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/%20%20%20%20Natural%20Mother%20of%20Pearl%20Shell%20",
    "badge": null,
    "desc": "Grace, calmness, balance, and elegance.",
    "longDesc": "{\"purpose\":\"Grace, calmness, balance, and elegance.\",\"crystalsIncluded\":\"Mother Pearl\",\"description\":\"Crafted from natural shell material, the Natural Mother of Pearl Bracelet is admired for its luminous appearance and timeless appeal. It is designed for those who appreciate understated elegance and natural beauty.\",\"benefits\":[\"Encourages emotional calmness\",\"Promotes inner balance\",\"Enhances everyday style\",\"Offers a timeless and elegant appearance\"],\"howToEnergize\":\"Moonlight charging or intention setting.\",\"affirmation\":\"I radiate grace, calmness, and inner harmony.\",\"careInstructions\":[\"Cleanse and energize by: Moonlight charging or intention setting.\",\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/%20%20%20%20Natural%20Mother%20of%20Pearl%20Shell%20"
    ],
    "usdPrice": 44,
    "originalUsdPrice": 53
  },
  {
    "id": "jade-bracelet",
    "name": "Jade Bracelet",
    "category": "bracelets",
    "subcategory": "Designer Bracelets",
    "price": 1750,
    "originalPrice": 2100,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Jade%20",
    "badge": null,
    "desc": "Balance, wisdom, harmony, and prosperity.",
    "longDesc": "{\"purpose\":\"Balance, wisdom, harmony, and prosperity.\",\"crystalsIncluded\":\"Jade\",\"associatedChakras\":\"Heart\",\"description\":\"Jade has been cherished for centuries across many cultures as a powerful symbol of harmony, wisdom, purity, and abundance. Traditionally revered in Chinese culture as the 'Stone of Heaven,' Jade is associated with prosperity, longevity, and good fortune. Its gentle yet powerful energy supports emotional balance, positive decision-making, and mental clarity. The soothing green colour of Jade reflects growth, renewal, and inner harmony.\",\"benefits\":[\"Promotes emotional balance, inner harmony, and mental clarity.\",\"Attracts abundance, prosperity, and positive opportunities.\",\"Encourages wise decision-making and a balanced perspective.\",\"Provides a calming, stabilizing energy during stressful times.\",\"Traditionally associated with good luck, health, and longevity.\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, meditation, work, and personal growth practices.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I welcome harmony, wisdom, and positive growth into my life.\",\"careInstructions\":[\"Energize by: Moonlight overnight charging or selenite plate charging.\",\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping under overnight moonlight or smudging with incense smoke.\",\"Store in a dry, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Heart"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Jade%20"
    ],
    "usdPrice": 35,
    "originalUsdPrice": 42
  },
  {
    "id": "selenite-bracelet",
    "name": "Selenite Bracelet",
    "category": "bracelets",
    "subcategory": "Designer Bracelets",
    "price": 1750,
    "originalPrice": 2100,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Selenite%20pic%201",
    "badge": null,
    "desc": "Clarity, peace, spiritual awareness, and energetic cleansing.",
    "longDesc": "{\"purpose\":\"Clarity, peace, spiritual awareness, and energetic cleansing.\",\"crystalsIncluded\":\"Selenite\",\"associatedChakras\":\"Crown\",\"description\":\"Selenite is one of the most beloved high-vibration crystals, admired for its luminous, moon-like appearance and deeply purifying energy. Traditionally associated with the Crown Chakra, Selenite promotes mental clarity, spiritual awareness, and inner peace. It is widely used to cleanse and recharge other crystals, clear stagnant energies from spaces, and create a calm, harmonious environment for meditation and rest. Selenite bracelets are especially prized for their ability to keep the wearer's energy field clear and uplifted throughout the day.\",\"benefits\":[\"Clears mental fog and promotes sharp clarity of thought.\",\"Creates a calming, peaceful energy for meditation and rest.\",\"Connects the wearer to higher spiritual awareness and guidance.\",\"Acts as an energetic purifier, clearing negative energy from the aura.\",\"Harmonizes and uplifts the Crown Chakra for spiritual alignment.\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Meditation, prayer, spiritual practices, and daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I am surrounded by clarity, peace, and positive energy.\",\"careInstructions\":[\"Selenite is traditionally considered self-cleansing — it rarely needs external cleansing.\",\"Energize by: Moonlight charging or intention setting if desired.\",\"Keep away from water and moisture as Selenite can dissolve when exposed to liquids.\",\"Store in a dry, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Crown"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Selenite%20pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Selenite%20pic%202"
    ],
    "usdPrice": 44,
    "originalUsdPrice": 53
  },
  {
    "id": "om-mani-padme-hum-and-pixiu-black-obsidian-bracelet",
    "name": "Om Mani Padme Hum + Pixiu Black Obsidian Bracelet",
    "category": "bracelets",
    "subcategory": "Designer Bracelets",
    "price": 1750,
    "originalPrice": 2100,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Om%20Mani%20Padme%20Hum%20Black%20Obsidian%20Pixiu/Pic%201",
    "badge": null,
    "desc": "Grounding, mindfulness, prosperity symbolism, and spiritual awareness.",
    "longDesc": "{\"purpose\":\"Grounding, mindfulness, prosperity symbolism, and spiritual awareness.\",\"crystalsIncluded\":\"Om Mani Padme Hum + Pixiu Black Obsidian\",\"associatedChakras\":\"Root\",\"description\":\"The Om Mani Padme Hum + Pixiu Black Obsidian Bracelet is a powerfully meaningful piece that combines three profound spiritual symbols. Black Obsidian is traditionally associated with grounding, protection, and the clearing of negative energies. The sacred Om Mani Padme Hum mantra, engraved on each bead, represents compassion, wisdom, and spiritual transformation. The Pixiu is revered in Feng Shui as a symbol of prosperity, abundance, and protection — believed to attract wealth and guard against misfortune. Together, they create a bracelet ideal for those seeking spiritual growth, financial alignment, and energetic protection.\",\"benefits\":[\"Provides powerful grounding and protection from negative energies (Black Obsidian).\",\"Invites prosperity, abundance, and financial opportunities (Pixiu).\",\"Cultivates compassion, wisdom, and spiritual growth (Om Mani Padme Hum).\",\"Promotes focus, discipline, and clarity in daily life and business.\",\"Supports deep meditation and mindfulness practices.\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, meditation, prayer, spiritual practices, business activities, and goal-setting sessions.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I am grounded, focused, and open to prosperity, wisdom, and positive opportunities.\",\"careInstructions\":[\"Energize by: Moonlight charging, selenite plate charging, intention setting, or chanting 'Om Mani Padme Hum' 21 times while holding the bracelet.\",\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping under overnight moonlight or smudging with incense smoke.\",\"Store in a dry, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Root"
    ],
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Om%20Mani%20Padme%20Hum%20Black%20Obsidian%20Pixiu/Pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Om%20Mani%20Padme%20Hum%20Black%20Obsidian%20Pixiu/5ZA01704.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Om%20Mani%20Padme%20Hum%20Black%20Obsidian%20Pixiu/5ZA01706.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Om%20Mani%20Padme%20Hum%20Black%20Obsidian%20Pixiu/5ZA01768.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Om%20Mani%20Padme%20Hum%20Black%20Obsidian%20Pixiu/5ZA01775.jpg",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Om%20Mani%20Padme%20Hum%20Black%20Obsidian%20Pixiu/Pic%202",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Om%20Mani%20Padme%20Hum%20Black%20Obsidian%20Pixiu/Pic%203",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Om%20Mani%20Padme%20Hum%20Black%20Obsidian%20Pixiu/Pic%204"
    ],
    "usdPrice": 35,
    "originalUsdPrice": 42
  },
  {
    "id": "aquarius-zodiac-bracelet",
    "name": "Aquarius Zodiac Bracelet",
    "category": "bracelets",
    "subcategory": "Zodiac Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/products/bracelet.png",
    "images": [
      "/images/products/bracelet.png"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34,
    "badge": "New",
    "desc": "Innovation, independence, creativity, and personal growth for Aquarius (Jan 20 – Feb 18).",
    "longDesc": "{\"purpose\":\"Innovation, independence, creativity, and personal growth.\",\"associatedChakras\":\"Third Eye, Crown\",\"zodiacSign\":\"Aquarius ♒\",\"birthDates\":\"January 20 – February 18\",\"description\":\"The Aquarius Zodiac Bracelet is designed for individuals born under the sign of Aquarius. Known for their originality, vision, and independent spirit, Aquarians are often drawn to new ideas and innovative thinking. This bracelet serves as a reminder to embrace authenticity, creativity, and personal freedom while staying connected to their goals and aspirations.\",\"benefits\":[\"Encourages creativity and innovation\",\"Supports individuality and self-expression\",\"Promotes confidence in personal decisions\",\"Inspires growth and forward thinking\"],\"recommendedHand\":\"Left Hand\",\"howToEnergize\":\"Moonlight charging, intention setting, or selenite charging.\",\"affirmation\":\"I embrace my uniqueness and confidently create my own path.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Third Eye",
      "Crown"
    ]
  },
  {
    "id": "aries-zodiac-bracelet",
    "name": "Aries Zodiac Bracelet",
    "category": "bracelets",
    "subcategory": "Zodiac Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/products/bracelet.png",
    "images": [
      "/images/products/bracelet.png"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34,
    "badge": "New",
    "desc": "Confidence, courage, motivation, and leadership for Aries (Mar 21 – Apr 19).",
    "longDesc": "{\"purpose\":\"Confidence, courage, motivation, and leadership.\",\"associatedChakras\":\"Root, Solar Plexus\",\"zodiacSign\":\"Aries ♈\",\"birthDates\":\"March 21 – April 19\",\"description\":\"The Aries Zodiac Bracelet is created for those born under the sign of Aries. Known for their boldness, determination, and adventurous nature, Aries individuals are natural leaders who thrive on action and ambition. This bracelet serves as a reminder to channel strength and confidence while maintaining balance and focus.\",\"benefits\":[\"Encourages courage and confidence\",\"Supports leadership qualities\",\"Promotes determination and ambition\",\"Inspires motivation and action\"],\"recommendedHand\":\"Left Hand\",\"howToEnergize\":\"Moonlight charging or intention setting.\",\"affirmation\":\"I move forward with courage, confidence, and purpose.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root",
      "Solar Plexus"
    ]
  },
  {
    "id": "cancer-zodiac-bracelet",
    "name": "Cancer Zodiac Bracelet",
    "category": "bracelets",
    "subcategory": "Zodiac Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/products/bracelet.png",
    "images": [
      "/images/products/bracelet.png"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34,
    "badge": "New",
    "desc": "Emotional balance, intuition, compassion, and inner peace for Cancer (Jun 21 – Jul 22).",
    "longDesc": "{\"purpose\":\"Emotional balance, intuition, compassion, and inner peace.\",\"associatedChakras\":\"Heart, Sacral\",\"zodiacSign\":\"Cancer ♋\",\"birthDates\":\"June 21 – July 22\",\"description\":\"The Cancer Zodiac Bracelet is designed for those born under the sign of Cancer. Known for their caring nature, intuition, and emotional depth, Cancerians value meaningful relationships and emotional harmony. This bracelet encourages self-care, balance, and trust in inner wisdom.\",\"benefits\":[\"Supports emotional balance\",\"Encourages compassion and empathy\",\"Promotes inner peace\",\"Inspires self-care and nurturing energy\"],\"recommendedHand\":\"Left Hand\",\"howToEnergize\":\"Moonlight charging is especially recommended.\",\"affirmation\":\"I trust my intuition and nurture myself with love and compassion.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart",
      "Sacral"
    ]
  },
  {
    "id": "capricorn-zodiac-bracelet",
    "name": "Capricorn Zodiac Bracelet",
    "category": "bracelets",
    "subcategory": "Zodiac Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/products/bracelet.png",
    "images": [
      "/images/products/bracelet.png"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34,
    "badge": "New",
    "desc": "Discipline, ambition, stability, and success for Capricorn (Dec 22 – Jan 19).",
    "longDesc": "{\"purpose\":\"Discipline, ambition, stability, and success.\",\"associatedChakras\":\"Root, Solar Plexus\",\"zodiacSign\":\"Capricorn ♑\",\"birthDates\":\"December 22 – January 19\",\"description\":\"The Capricorn Zodiac Bracelet is created for individuals born under the sign of Capricorn. Known for their dedication, determination, and practical approach, Capricorns are often focused on long-term goals and achievement. This bracelet serves as a reminder to stay grounded while pursuing success.\",\"benefits\":[\"Encourages discipline and focus\",\"Supports ambition and perseverance\",\"Promotes stability and determination\",\"Inspires responsible decision-making\"],\"recommendedHand\":\"Left Hand\",\"howToEnergize\":\"Moonlight charging or intention setting.\",\"affirmation\":\"I remain focused, disciplined, and committed to my goals.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root",
      "Solar Plexus"
    ]
  },
  {
    "id": "gemini-zodiac-bracelet",
    "name": "Gemini Zodiac Bracelet",
    "category": "bracelets",
    "subcategory": "Zodiac Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/products/bracelet.png",
    "images": [
      "/images/products/bracelet.png"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34,
    "badge": "New",
    "desc": "Communication, adaptability, learning, and creativity for Gemini (May 21 – Jun 20).",
    "longDesc": "{\"purpose\":\"Communication, adaptability, learning, and creativity.\",\"associatedChakras\":\"Throat, Third Eye\",\"zodiacSign\":\"Gemini ♊\",\"birthDates\":\"May 21 – June 20\",\"description\":\"The Gemini Zodiac Bracelet is designed for those born under the sign of Gemini. Known for their curiosity, communication skills, and versatility, Geminis enjoy learning, sharing ideas, and exploring new experiences.\",\"benefits\":[\"Encourages clear communication\",\"Supports adaptability and flexibility\",\"Promotes creativity and curiosity\",\"Inspires confidence in self-expression\"],\"recommendedHand\":\"Left Hand\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I communicate clearly and embrace new opportunities with confidence.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Throat",
      "Third Eye"
    ]
  },
  {
    "id": "libra-zodiac-bracelet",
    "name": "Libra Zodiac Bracelet",
    "category": "bracelets",
    "subcategory": "Zodiac Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/products/bracelet.png",
    "images": [
      "/images/products/bracelet.png"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34,
    "badge": "New",
    "desc": "Balance, harmony, relationships, and self-expression for Libra (Sep 23 – Oct 22).",
    "longDesc": "{\"purpose\":\"Balance, harmony, relationships, and self-expression.\",\"associatedChakras\":\"Heart, Throat\",\"zodiacSign\":\"Libra ♎\",\"birthDates\":\"September 23 – October 22\",\"description\":\"The Libra Zodiac Bracelet is created for individuals born under the sign of Libra. Known for their appreciation of harmony, fairness, and beauty, Libras seek balance in relationships and daily life.\",\"benefits\":[\"Encourages harmony and balance\",\"Supports healthy relationships\",\"Promotes diplomacy and understanding\",\"Inspires confidence and self-expression\"],\"recommendedHand\":\"Left Hand\",\"howToEnergize\":\"Moonlight charging.\",\"affirmation\":\"I create balance, harmony, and positive connections in my life.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart",
      "Throat"
    ]
  },
  {
    "id": "pisces-zodiac-bracelet",
    "name": "Pisces Zodiac Bracelet",
    "category": "bracelets",
    "subcategory": "Zodiac Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/products/bracelet.png",
    "images": [
      "/images/products/bracelet.png"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34,
    "badge": "New",
    "desc": "Intuition, compassion, creativity, and spiritual growth for Pisces (Feb 19 – Mar 20).",
    "longDesc": "{\"purpose\":\"Intuition, compassion, creativity, and spiritual growth.\",\"associatedChakras\":\"Third Eye, Crown\",\"zodiacSign\":\"Pisces ♓\",\"birthDates\":\"February 19 – March 20\",\"description\":\"The Pisces Zodiac Bracelet is designed for those born under the sign of Pisces. Known for their imagination, sensitivity, and intuitive nature, Pisceans often seek deeper meaning and emotional connection.\",\"benefits\":[\"Encourages intuition and creativity\",\"Supports emotional awareness\",\"Promotes compassion and empathy\",\"Inspires spiritual growth\"],\"recommendedHand\":\"Left Hand\",\"howToEnergize\":\"Moonlight charging is especially recommended.\",\"affirmation\":\"I trust my intuition and embrace my creative spirit.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Third Eye",
      "Crown"
    ]
  },
  {
    "id": "sagittarius-zodiac-bracelet",
    "name": "Sagittarius Zodiac Bracelet",
    "category": "bracelets",
    "subcategory": "Zodiac Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/products/bracelet.png",
    "images": [
      "/images/products/bracelet.png"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34,
    "badge": "New",
    "desc": "Adventure, optimism, wisdom, and personal growth for Sagittarius (Nov 22 – Dec 21).",
    "longDesc": "{\"purpose\":\"Adventure, optimism, wisdom, and personal growth.\",\"associatedChakras\":\"Solar Plexus, Crown\",\"zodiacSign\":\"Sagittarius ♐\",\"birthDates\":\"November 22 – December 21\",\"description\":\"The Sagittarius Zodiac Bracelet is created for individuals born under the sign of Sagittarius. Known for their adventurous spirit, optimism, and love of learning, Sagittarians are always seeking growth and new experiences.\",\"benefits\":[\"Encourages optimism and positivity\",\"Supports personal growth\",\"Promotes wisdom and learning\",\"Inspires confidence and exploration\"],\"recommendedHand\":\"Left Hand\",\"howToEnergize\":\"Moonlight charging or intention setting.\",\"affirmation\":\"I embrace growth, wisdom, and new opportunities with confidence.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus",
      "Crown"
    ]
  },
  {
    "id": "taurus-zodiac-bracelet",
    "name": "Taurus Zodiac Bracelet",
    "category": "bracelets",
    "subcategory": "Zodiac Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/products/bracelet.png",
    "images": [
      "/images/products/bracelet.png"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34,
    "badge": "New",
    "desc": "Stability, abundance, patience, and emotional balance for Taurus (Apr 20 – May 20).",
    "longDesc": "{\"purpose\":\"Stability, abundance, patience, and emotional balance.\",\"associatedChakras\":\"Root, Heart\",\"zodiacSign\":\"Taurus ♉\",\"birthDates\":\"April 20 – May 20\",\"description\":\"The Taurus Zodiac Bracelet is designed for those born under the sign of Taurus. Known for their reliability, determination, and appreciation for comfort, Taureans value stability and meaningful progress.\",\"benefits\":[\"Encourages stability and patience\",\"Supports determination and persistence\",\"Promotes emotional balance\",\"Inspires confidence and security\"],\"recommendedHand\":\"Left Hand\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I am grounded, patient, and open to abundance and growth.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root",
      "Heart"
    ]
  },
  {
    "id": "virgo-zodiac-bracelet",
    "name": "Virgo Zodiac Bracelet",
    "category": "bracelets",
    "subcategory": "Zodiac Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/products/bracelet.png",
    "images": [
      "/images/products/bracelet.png"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34,
    "badge": "New",
    "desc": "Clarity, organization, growth, and self-improvement for Virgo (Aug 23 – Sep 22).",
    "longDesc": "{\"purpose\":\"Clarity, organization, growth, and self-improvement.\",\"associatedChakras\":\"Solar Plexus, Third Eye\",\"zodiacSign\":\"Virgo ♍\",\"birthDates\":\"August 23 – September 22\",\"description\":\"The Virgo Zodiac Bracelet is created for individuals born under the sign of Virgo. Known for their practicality, attention to detail, and dedication, Virgos are often focused on personal growth and meaningful achievements.\",\"benefits\":[\"Encourages clarity and focus\",\"Supports organization and productivity\",\"Promotes self-improvement\",\"Inspires balanced decision-making\"],\"recommendedHand\":\"Left Hand\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I am focused, organized, and aligned with my highest potential.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus",
      "Third Eye"
    ]
  },
  {
    "id": "amethyst-mala",
    "name": "Amethyst Crystal Mala",
    "category": "malas",
    "subcategory": "Malas",
    "price": 1650,
    "originalPrice": 1980,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/malas/amethyst-mala-pic-1.webp",
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/malas/amethyst-mala-pic-1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/malas/amethyst-pic-2.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/malas/amethyst-pic-3.webp"
    ],
    "usdPrice": 32,
    "originalUsdPrice": 38,
    "badge": "New",
    "desc": "Calming amethyst mala for intuition, inner peace, and deeper meditation.",
    "longDesc": "{\"purpose\":\"Peace, intuition, spiritual awareness, and relaxation.\",\"crystalsIncluded\":\"Amethyst\",\"associatedChakras\":\"Crown Chakra, Third Eye Chakra\",\"description\":\"Amethyst is one of the most popular spiritual crystals and is traditionally associated with peace, wisdom, and intuition. It is often used during meditation and mindfulness practices to support mental clarity and inner calm.\",\"benefits\":[\"Encourages relaxation\",\"Supports intuition\",\"Promotes spiritual awareness\",\"Helps create a peaceful environment\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Meditation, sleep, spiritual practices, daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I trust my intuition and embrace inner peace.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Third Eye",
      "Crown"
    ]
  },
  {
    "id": "citrine-mala",
    "name": "Citrine Crystal Mala",
    "category": "malas",
    "subcategory": "Malas",
    "price": 1650,
    "originalPrice": 1980,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/malas/citrine-pic-1.webp",
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/malas/citrine-pic-1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/malas/citrine-pic-2.webp"
    ],
    "usdPrice": 32,
    "originalUsdPrice": 38,
    "badge": "New",
    "desc": "Bright citrine mala for abundance, confidence, and positivity.",
    "longDesc": "{\"purpose\":\"Confidence, positivity, abundance mindset, and personal empowerment.\",\"crystalsIncluded\":\"Citrine\",\"associatedChakras\":\"Solar Plexus Chakra\",\"description\":\"Citrine is traditionally associated with positivity, confidence, and personal growth. It is often used by those seeking motivation, optimism, and a positive outlook on life.\",\"benefits\":[\"Encourages confidence and self-belief\",\"Promotes optimism and positivity\",\"Supports motivation and determination\",\"Inspires personal growth\"],\"recommendedHand\":\"Right Hand\",\"whenToWear\":\"Work, business activities, goal setting, and daily wear.\",\"howToEnergize\":\"Moonlight, selenite charging, or intention setting.\",\"affirmation\":\"I attract confidence, positivity, and opportunities for growth.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "peridot-mala",
    "name": "Peridot Crystal Mala",
    "category": "malas",
    "subcategory": "Malas",
    "price": 1650,
    "originalPrice": 1980,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/malas/peridot-mala.webp",
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/malas/peridot-mala.webp"
    ],
    "usdPrice": 32,
    "originalUsdPrice": 38,
    "badge": "New",
    "desc": "Fresh green peridot mala for growth, renewal, and heart healing.",
    "longDesc": "{\"purpose\":\"Growth, positivity, and emotional renewal.\",\"crystalsIncluded\":\"Peridot\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Peridot is traditionally associated with growth, positivity, and renewal. Its vibrant green color symbolizes fresh beginnings and a positive outlook.\",\"benefits\":[\"Encourages optimism\",\"Supports emotional renewal\",\"Promotes personal growth\",\"Inspires positive thinking\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"New beginnings, personal development, and daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I welcome growth, positivity, and fresh opportunities.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "clear-quartz-pendant",
    "name": "Clear Quartz Crystal Pendant",
    "category": "pendants",
    "subcategory": "Pendants",
    "price": 1200,
    "originalPrice": 1440,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/pendants/clear-quartz-pic-1.webp",
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/pendants/clear-quartz-pic-1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/pendants/clear-quartz-pic-2.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/pendants/clear-quartz.webp"
    ],
    "usdPrice": 23,
    "originalUsdPrice": 28,
    "badge": "New",
    "desc": "Master-healer clear quartz pendant for clarity and amplified intention.",
    "longDesc": "{\"purpose\":\"Clarity, focus, energy amplification, and intention setting.\",\"crystalsIncluded\":\"Clear Quartz\",\"associatedChakras\":\"Crown Chakra\",\"description\":\"Clear Quartz is often referred to as the “Master Crystal” and is traditionally associated with clarity, focus, and amplifying intentions. It is commonly used alongside other crystals and spiritual practices.\",\"benefits\":[\"Supports mental clarity\",\"Enhances focus and awareness\",\"Amplifies intentions and affirmations\",\"Suitable for meditation and mindfulness\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily, meditation, spiritual practices, and goal setting.\",\"howToEnergize\":\"Moonlight, sunlight (briefly), or selenite charging.\",\"affirmation\":\"My mind is clear, focused, and aligned with my intentions.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Crown"
    ]
  },
  {
    "id": "malachite-pendant",
    "name": "Malachite Crystal Pendant",
    "category": "pendants",
    "subcategory": "Pendants",
    "price": 1200,
    "originalPrice": 1440,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/pendants/malachite-pic1.webp",
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/pendants/malachite-pic1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/pendants/malachite-pic2.webp"
    ],
    "usdPrice": 23,
    "originalUsdPrice": 28,
    "badge": "New",
    "desc": "Bold malachite pendant for transformation, protection, and heart healing.",
    "longDesc": "{\"purpose\":\"Transformation, confidence, and personal growth.\",\"crystalsIncluded\":\"Malachite\",\"associatedChakras\":\"Heart Chakra\",\"description\":\"Malachite is traditionally associated with transformation and personal growth. It is often chosen by those navigating change and seeking courage to move forward.\",\"benefits\":[\"Encourages personal transformation\",\"Supports confidence and determination\",\"Promotes emotional awareness\",\"Inspires growth and positive change\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"During life transitions, new beginnings, and personal development journeys.\",\"howToEnergize\":\"Selenite charging only. Avoid prolonged water exposure.\",\"affirmation\":\"I embrace positive transformation and move forward with confidence.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "red-jasper-pendant",
    "name": "Red Jasper Crystal Pendant",
    "category": "pendants",
    "subcategory": "Pendants",
    "price": 1200,
    "originalPrice": 1440,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/pendants/red-jasper-pic-1.webp",
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/pendants/red-jasper-pic-1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/pendants/red-jasper-pic-2.webp"
    ],
    "usdPrice": 23,
    "originalUsdPrice": 28,
    "badge": "New",
    "desc": "Grounding red jasper pendant for strength, stability, and endurance.",
    "longDesc": "{\"purpose\":\"Grounding, stability, courage, and endurance.\",\"crystalsIncluded\":\"Red Jasper\",\"associatedChakras\":\"Root Chakra\",\"description\":\"Red Jasper is traditionally associated with stability, grounding, and steady determination. It is often chosen by those seeking balance, resilience, and emotional strength.\",\"benefits\":[\"Encourages grounding and stability\",\"Supports emotional strength\",\"Promotes resilience and endurance\",\"Inspires courage and determination\"],\"recommendedHand\":\"Left Hand\",\"whenToWear\":\"Daily wear, travel, work, and stressful situations.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I am grounded, strong, and resilient.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Root"
    ]
  },
  {
    "id": "yellow-calcite-pendant",
    "name": "Yellow Calcite Crystal Pendant",
    "category": "pendants",
    "subcategory": "Pendants",
    "price": 1200,
    "originalPrice": 1440,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/pendants/yellow-calcite-pic-1.webp",
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/pendants/yellow-calcite-pic-1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/pendants/yellow-calcite-pic-2.webp"
    ],
    "usdPrice": 23,
    "originalUsdPrice": 28,
    "badge": "New",
    "desc": "Sunny yellow calcite pendant for confidence, energy, and optimism.",
    "longDesc": "{\"purpose\":\"Sunny yellow calcite pendant for confidence, energy, and optimism.\",\"crystalsIncluded\":\"Yellow Calcite\",\"associatedChakras\":\"Solar Plexus\",\"description\":\"Sunny yellow calcite pendant for confidence, energy, and optimism.\",\"benefits\":[\"Boosts confidence and self-belief.\",\"Energizes the mind and lifts the mood.\",\"Encourages motivation and optimism.\",\"Clears stagnant energy and inspires action.\"],\"howToEnergize\":\"Moonlight charging, selenite charging, or intention setting.\",\"affirmation\":\"I radiate confidence, warmth, and positive energy.\",\"careInstructions\":[\"Cleanse and energize by: Moonlight charging, selenite charging, or intention setting.\",\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "designer-tiger-eye-pendant",
    "name": "Tiger Eye Designer Pendant",
    "category": "designer-pendants",
    "subcategory": "Designer Pendants",
    "price": 1200,
    "originalPrice": 1440,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-pendents/tiger-eye1.webp",
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-pendents/tiger-eye1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/designer-pendents/tiger-eye-pic25.webp"
    ],
    "usdPrice": 23,
    "originalUsdPrice": 28,
    "badge": "New",
    "desc": "Designer tiger eye pendant for courage, confidence, and clear focus.",
    "longDesc": "{\"purpose\":\"Confidence, focus, courage, and determination.\",\"crystalsIncluded\":\"Tiger Eye\",\"associatedChakras\":\"Solar Plexus Chakra, Root Chakra\",\"description\":\"Tiger Eye is traditionally associated with courage, confidence, and focus. It is one of the most popular stones for those seeking motivation and balanced decision-making.\",\"benefits\":[\"Encourages confidence and courage\",\"Supports focus and determination\",\"Promotes balanced decision-making\",\"Inspires motivation and action\"],\"recommendedHand\":\"Right Hand\",\"whenToWear\":\"Work, interviews, business meetings, and daily wear.\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"affirmation\":\"I move forward with confidence, courage, and clarity.\",\"careInstructions\":[\"Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.\",\"Store in a clean, dry place when not in use.\",\"Cleanse and recharge regularly.\",\"Handle natural stones with care to preserve their beauty.\"],\"disclaimer\":\"Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person.\"}",
    "chakras": [
      "Solar Plexus",
      "Root"
    ]
  },
  {
    "id": "silver-rudraksha",
    "name": "Silver Rudraksha Bracelet",
    "category": "silver-jewelry",
    "subcategory": "Rudraksha",
    "price": 1200,
    "originalPrice": 1440,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/silver-jewlery/silver-rudraksha-pic-1.webp",
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/silver-jewlery/silver-rudraksha-pic-1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/silver-jewlery/silver-rudraksha-pic-2.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/silver-jewlery/silver-rudraksha-pic-3.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/silver-jewlery/silver-rudraksha-pic-4.webp"
    ],
    "usdPrice": 23,
    "originalUsdPrice": 28,
    "badge": "New",
    "desc": "Sacred rudraksha beads set in silver for calm, protection, and spiritual focus.",
    "longDesc": "{\"purpose\":\"Sacred rudraksha beads set in silver for calm, protection, and spiritual focus.\",\"crystalsIncluded\":\"Silver Rudraksha\",\"associatedChakras\":\"Root, Crown\",\"description\":\"Sacred rudraksha beads set in silver for calm, protection, and spiritual focus.\",\"benefits\":[\"Calms the mind and steadies the nervous system.\",\"Offers spiritual protection and positive energy.\",\"Supports meditation, focus, and devotion.\",\"Silver capping adds durability and elegance.\"],\"recommendedHand\":\"Left Hand\",\"howToEnergize\":\"Moonlight charging, selenite charging, or intention setting.\",\"affirmation\":\"I am calm, protected, and spiritually connected.\",\"careInstructions\":[\"Cleanse and energize by: Moonlight charging, selenite charging, or intention setting.\",\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Root",
      "Crown"
    ]
  },
  {
    "id": "silver-rudraksha-mala",
    "name": "Silver Rudraksha Mala",
    "category": "silver-jewelry",
    "subcategory": "Rudraksha",
    "price": 1200,
    "originalPrice": 1440,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/silver-jewlery/silver-rudraksha-mala-pic-1.webp",
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/silver-jewlery/silver-rudraksha-mala-pic-1.webp",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/others/silver-jewlery/silver-rudraksha-mala-pic-2.webp"
    ],
    "usdPrice": 23,
    "originalUsdPrice": 28,
    "badge": "New",
    "desc": "Traditional rudraksha mala with silver detailing for meditation and devotion.",
    "longDesc": "{\"purpose\":\"Traditional rudraksha mala with silver detailing for meditation and devotion.\",\"crystalsIncluded\":\"Silver Rudraksha\",\"associatedChakras\":\"Root, Crown\",\"description\":\"Traditional rudraksha mala with silver detailing for meditation and devotion.\",\"benefits\":[\"Supports japa meditation and mantra practice.\",\"Calms the mind and deepens spiritual focus.\",\"Provides protection and positive energy.\",\"Silver detailing adds beauty and durability.\"],\"howToEnergize\":\"Moonlight charging, selenite charging, or intention setting.\",\"affirmation\":\"I am calm, protected, and spiritually connected.\",\"careInstructions\":[\"Cleanse and energize by: Moonlight charging, selenite charging, or intention setting.\",\"Avoid contact with water, soap, and cosmetic chemicals.\",\"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\"Store in a dry, safe, clean velvet pouch or container when not in use.\"],\"disclaimer\":\"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
    "chakras": [
      "Root",
      "Crown"
    ]
  },
  {
    "id": "all-in-one-bracelet",
    "name": "All In One Bracelet",
    "category": "bracelets",
    "subcategory": "Signature Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/products/bracelet.png",
    "images": [
      "/images/products/bracelet.png"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34,
    "badge": null,
    "desc": "Complete chakra balancing, protection, and positive energy amplification.",
    "longDesc": "{\"purpose\":\"Complete chakra balancing, protection, and positive energy amplification.\",\"associatedChakras\":\"Root, Sacral, Solar Plexus, Heart, Throat, Third Eye, Crown\",\"description\":\"Complete chakra balancing, protection, and positive energy amplification.\",\"benefits\":[\"Complete chakra balancing, protection, and positive energy amplification.\",\"Premium quality handselected crystal bracelet\"],\"recommendedHand\":\"Left Hand\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals\",\"Cleanse under moonlight or smudge with incense smoke\"],\"disclaimer\":\"Crystals are spiritual tools and not a substitute for medical treatment.\"}",
    "chakras": [
      "Root",
      "Sacral",
      "Solar Plexus",
      "Heart",
      "Throat",
      "Third Eye",
      "Crown"
    ]
  },
  {
    "id": "business-growth-bracelet",
    "name": "Business Growth Bracelet",
    "category": "bracelets",
    "subcategory": "Signature Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/Signature%20crystal%20collection%20/Business%20growth%20",
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/Signature%20crystal%20collection%20/Business%20growth%20"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34,
    "badge": null,
    "desc": "Elegantly designed to invite confidence, determination, and professional opportunities.",
    "longDesc": "{\"purpose\":\"Elegantly designed to invite confidence, determination, and professional opportunities.\",\"crystalsIncluded\":\"Business Growth\",\"associatedChakras\":\"Solar Plexus, Heart\",\"description\":\"Elegantly designed to invite confidence, determination, and professional opportunities.\",\"benefits\":[\"Elegantly designed to invite confidence, determination, and professional opportunities.\",\"Premium quality handselected crystal bracelet\"],\"recommendedHand\":\"Left Hand\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals\",\"Cleanse under moonlight or smudge with incense smoke\"],\"disclaimer\":\"Crystals are spiritual tools and not a substitute for medical treatment.\"}",
    "chakras": [
      "Solar Plexus",
      "Heart"
    ]
  },
  {
    "id": "career-success-bracelet",
    "name": "Career Success Bracelet",
    "category": "bracelets",
    "subcategory": "Signature Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/Signature%20crystal%20collection%20/Career%20sucess",
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/Signature%20crystal%20collection%20/Career%20sucess"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34,
    "badge": null,
    "desc": "Supports clarity, motivation, leadership, and advancement in career paths.",
    "longDesc": "{\"purpose\":\"Supports clarity, motivation, leadership, and advancement in career paths.\",\"crystalsIncluded\":\"Career Success\",\"associatedChakras\":\"Solar Plexus, Third Eye\",\"description\":\"Supports clarity, motivation, leadership, and advancement in career paths.\",\"benefits\":[\"Supports clarity, motivation, leadership, and advancement in career paths.\",\"Premium quality handselected crystal bracelet\"],\"recommendedHand\":\"Left Hand\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals\",\"Cleanse under moonlight or smudge with incense smoke\"],\"disclaimer\":\"Crystals are spiritual tools and not a substitute for medical treatment.\"}",
    "chakras": [
      "Solar Plexus",
      "Third Eye"
    ]
  },
  {
    "id": "conceive-and-nurture-bracelet",
    "name": "Conceive And Nurture Bracelet",
    "category": "bracelets",
    "subcategory": "Signature Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/products/bracelet.png",
    "images": [
      "/images/products/bracelet.png"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34,
    "badge": null,
    "desc": "Nurturing energy supporting fertility, emotional comfort, and feminine balance.",
    "longDesc": "{\"purpose\":\"Nurturing energy supporting fertility, emotional comfort, and feminine balance.\",\"crystalsIncluded\":\"Conceive And Nurture\",\"associatedChakras\":\"Sacral, Heart\",\"description\":\"Nurturing energy supporting fertility, emotional comfort, and feminine balance.\",\"benefits\":[\"Nurturing energy supporting fertility, emotional comfort, and feminine balance.\",\"Premium quality handselected crystal bracelet\"],\"recommendedHand\":\"Left Hand\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals\",\"Cleanse under moonlight or smudge with incense smoke\"],\"disclaimer\":\"Crystals are spiritual tools and not a substitute for medical treatment.\"}",
    "chakras": [
      "Sacral",
      "Heart"
    ]
  },
  {
    "id": "good-luck-bracelet",
    "name": "Good Luck Bracelet",
    "category": "bracelets",
    "subcategory": "Signature Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/products/bracelet.png",
    "images": [
      "/images/products/bracelet.png"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34,
    "badge": null,
    "desc": "Invites luck, positivity, synchronicity, and general well-being.",
    "longDesc": "{\"purpose\":\"Invites luck, positivity, synchronicity, and general well-being.\",\"crystalsIncluded\":\"Good Luck\",\"associatedChakras\":\"Solar Plexus, Crown\",\"description\":\"Invites luck, positivity, synchronicity, and general well-being.\",\"benefits\":[\"Invites luck, positivity, synchronicity, and general well-being.\",\"Premium quality handselected crystal bracelet\"],\"recommendedHand\":\"Left Hand\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals\",\"Cleanse under moonlight or smudge with incense smoke\"],\"disclaimer\":\"Crystals are spiritual tools and not a substitute for medical treatment.\"}",
    "chakras": [
      "Solar Plexus",
      "Crown"
    ]
  },
  {
    "id": "love-and-luck-bracelet",
    "name": "Love And Luck Bracelet",
    "category": "bracelets",
    "subcategory": "Signature Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/products/bracelet.png",
    "images": [
      "/images/products/bracelet.png"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34,
    "badge": null,
    "desc": "Harmonises emotional healing, compassion, and positive opportunities.",
    "longDesc": "{\"purpose\":\"Harmonises emotional healing, compassion, and positive opportunities.\",\"crystalsIncluded\":\"Love And Luck\",\"associatedChakras\":\"Heart, Solar Plexus\",\"description\":\"Harmonises emotional healing, compassion, and positive opportunities.\",\"benefits\":[\"Harmonises emotional healing, compassion, and positive opportunities.\",\"Premium quality handselected crystal bracelet\"],\"recommendedHand\":\"Left Hand\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals\",\"Cleanse under moonlight or smudge with incense smoke\"],\"disclaimer\":\"Crystals are spiritual tools and not a substitute for medical treatment.\"}",
    "chakras": [
      "Heart",
      "Solar Plexus"
    ]
  },
  {
    "id": "love-and-peace-bracelet",
    "name": "Love And Peace Bracelet",
    "category": "bracelets",
    "subcategory": "Signature Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/products/bracelet.png",
    "images": [
      "/images/products/bracelet.png"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34,
    "badge": null,
    "desc": "Encourages gentle communication, emotional calm, and self-love.",
    "longDesc": "{\"purpose\":\"Encourages gentle communication, emotional calm, and self-love.\",\"crystalsIncluded\":\"Love And Peace\",\"associatedChakras\":\"Heart, Throat\",\"description\":\"Encourages gentle communication, emotional calm, and self-love.\",\"benefits\":[\"Encourages gentle communication, emotional calm, and self-love.\",\"Premium quality handselected crystal bracelet\"],\"recommendedHand\":\"Left Hand\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals\",\"Cleanse under moonlight or smudge with incense smoke\"],\"disclaimer\":\"Crystals are spiritual tools and not a substitute for medical treatment.\"}",
    "chakras": [
      "Heart",
      "Throat"
    ]
  },
  {
    "id": "luxury-client-attraction-bracelet",
    "name": "Luxury Client Attraction Bracelet",
    "category": "bracelets",
    "subcategory": "Signature Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/Signature%20crystal%20collection%20/Luxury%20client%20attraction%20",
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/Signature%20crystal%20collection%20/Luxury%20client%20attraction%20"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34,
    "badge": null,
    "desc": "Formulated to align with prosperity, abundance mindset, and client attraction.",
    "longDesc": "{\"purpose\":\"Formulated to align with prosperity, abundance mindset, and client attraction.\",\"crystalsIncluded\":\"Luxury Client Attraction\",\"associatedChakras\":\"Solar Plexus, Heart\",\"description\":\"Formulated to align with prosperity, abundance mindset, and client attraction.\",\"benefits\":[\"Formulated to align with prosperity, abundance mindset, and client attraction.\",\"Premium quality handselected crystal bracelet\"],\"recommendedHand\":\"Left Hand\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals\",\"Cleanse under moonlight or smudge with incense smoke\"],\"disclaimer\":\"Crystals are spiritual tools and not a substitute for medical treatment.\"}",
    "chakras": [
      "Solar Plexus",
      "Heart"
    ]
  },
  {
    "id": "protection-and-wellness-bracelet",
    "name": "Protection And Wellness Bracelet",
    "category": "bracelets",
    "subcategory": "Signature Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/products/bracelet.png",
    "images": [
      "/images/products/bracelet.png"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34,
    "badge": null,
    "desc": "Combines grounding protective stones to secure energy and wellness.",
    "longDesc": "{\"purpose\":\"Combines grounding protective stones to secure energy and wellness.\",\"crystalsIncluded\":\"Protection And Wellness\",\"associatedChakras\":\"Root, Heart\",\"description\":\"Combines grounding protective stones to secure energy and wellness.\",\"benefits\":[\"Combines grounding protective stones to secure energy and wellness.\",\"Premium quality handselected crystal bracelet\"],\"recommendedHand\":\"Left Hand\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals\",\"Cleanse under moonlight or smudge with incense smoke\"],\"disclaimer\":\"Crystals are spiritual tools and not a substitute for medical treatment.\"}",
    "chakras": [
      "Root",
      "Heart"
    ]
  },
  {
    "id": "spiritual-cleansing-bracelet",
    "name": "Spiritual Cleansing Bracelet",
    "category": "bracelets",
    "subcategory": "Signature Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/Signature%20crystal%20collection%20/Spiritual%20cleansing%20",
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/Signature%20crystal%20collection%20/Spiritual%20cleansing%20"
    ],
    "usdPrice": 28,
    "originalUsdPrice": 34,
    "badge": null,
    "desc": "Aids in clearing mental blockages, enhancing meditation, and auric cleansing.",
    "longDesc": "{\"purpose\":\"Aids in clearing mental blockages, enhancing meditation, and auric cleansing.\",\"crystalsIncluded\":\"Spiritual Cleansing\",\"associatedChakras\":\"Crown, Third Eye\",\"description\":\"Aids in clearing mental blockages, enhancing meditation, and auric cleansing.\",\"benefits\":[\"Aids in clearing mental blockages, enhancing meditation, and auric cleansing.\",\"Premium quality handselected crystal bracelet\"],\"recommendedHand\":\"Left Hand\",\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals\",\"Cleanse under moonlight or smudge with incense smoke\"],\"disclaimer\":\"Crystals are spiritual tools and not a substitute for medical treatment.\"}",
    "chakras": [
      "Crown",
      "Third Eye"
    ]
  },
  {
    "id": "love-attraction-spell-jar",
    "name": "Love Attraction Spell Jar",
    "category": "spell-jars",
    "subcategory": "Spell Jars",
    "price": 1200,
    "originalPrice": 1440,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/Spell%20jar%20/%20%20%20%20Love%20Attraction%20Spell%20Jar",
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/Spell%20jar%20/%20%20%20%20Love%20Attraction%20Spell%20Jar"
    ],
    "usdPrice": 24,
    "originalUsdPrice": 28,
    "badge": null,
    "desc": "Intuitively prepared spell jar aligned with attracting harmony, self-love, and relationships.",
    "longDesc": "{\"purpose\":\"Intuitively prepared spell jar aligned with attracting harmony, self-love, and relationships.\",\"crystalsIncluded\":\"Love Attraction Spell Jar\",\"associatedChakras\":\"Heart\",\"description\":\"Intuitively prepared spell jar aligned with attracting harmony, self-love, and relationships.\",\"benefits\":[\"Intuitively prepared spell jar aligned with attracting harmony, self-love, and relationships.\",\"Premium quality ritually prepared spell jar\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Keep in dry place\",\"Recharge under moonlight\"],\"disclaimer\":\"Crystals and spell jars are spiritual tools and not a substitute for medical treatment.\"}",
    "chakras": [
      "Heart"
    ],
    "variants": [
      {
        "name": "Mini",
        "price": 1200,
        "usdPrice": 24,
        "originalPrice": 1440,
        "originalUsdPrice": 28,
        "image": "/images/products/spelljar-mini.png"
      },
      {
        "name": "Medium (100ml)",
        "price": 3800,
        "usdPrice": 74,
        "originalPrice": 4560,
        "originalUsdPrice": 88,
        "image": "/images/products/spelljar-medium.png"
      },
      {
        "name": "Large (250ml)",
        "price": 6300,
        "usdPrice": 124,
        "originalPrice": 7560,
        "originalUsdPrice": 148,
        "image": "/images/products/spelljar-large.png"
      }
    ]
  },
  {
    "id": "protection-spell-jar",
    "name": "Protection Spell Jar",
    "category": "spell-jars",
    "subcategory": "Spell Jars",
    "price": 1200,
    "originalPrice": 1440,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/Spell%20jar%20/%20%20%20%20Protection%20Spell%20Jar%20pic%201",
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/Spell%20jar%20/%20%20%20%20Protection%20Spell%20Jar%20pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/Spell%20jar%20/%20%20%20%20Protection%20Spell%20Jar%20pic%202"
    ],
    "usdPrice": 24,
    "originalUsdPrice": 28,
    "badge": null,
    "desc": "Crafted with protective herbs, black obsidian, and salt to block negative energies.",
    "longDesc": "{\"purpose\":\"Crafted with protective herbs, black obsidian, and salt to block negative energies.\",\"crystalsIncluded\":\"Protection Spell Jar\",\"associatedChakras\":\"Root\",\"description\":\"Crafted with protective herbs, black obsidian, and salt to block negative energies.\",\"benefits\":[\"Crafted with protective herbs, black obsidian, and salt to block negative energies.\",\"Premium quality ritually prepared spell jar\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Keep in dry place\",\"Recharge under moonlight\"],\"disclaimer\":\"Crystals and spell jars are spiritual tools and not a substitute for medical treatment.\"}",
    "chakras": [
      "Root"
    ],
    "variants": [
      {
        "name": "Mini",
        "price": 1200,
        "usdPrice": 24,
        "originalPrice": 1440,
        "originalUsdPrice": 28,
        "image": "/images/products/spelljar-mini.png"
      },
      {
        "name": "Medium (100ml)",
        "price": 3800,
        "usdPrice": 74,
        "originalPrice": 4560,
        "originalUsdPrice": 88,
        "image": "/images/products/spelljar-medium.png"
      },
      {
        "name": "Large (250ml)",
        "price": 6300,
        "usdPrice": 124,
        "originalPrice": 7560,
        "originalUsdPrice": 148,
        "image": "/images/products/spelljar-large.png"
      }
    ]
  },
  {
    "id": "success-manifestation-spell-jar",
    "name": "Success Manifestation Spell Jar",
    "category": "spell-jars",
    "subcategory": "Spell Jars",
    "price": 1200,
    "originalPrice": 1440,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/Spell%20jar%20/%20%20%20%20Success%20Manifestation%20Jar%20pic%201",
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/Spell%20jar%20/%20%20%20%20Success%20Manifestation%20Jar%20pic%201",
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/Spell%20jar%20/%20%20%20%20Success%20Manifestation%20Jar%20pic%202"
    ],
    "usdPrice": 24,
    "originalUsdPrice": 28,
    "badge": null,
    "desc": "Filled with citrine, pyrite, and positive intent to boost confidence and manifestation.",
    "longDesc": "{\"purpose\":\"Filled with citrine, pyrite, and positive intent to boost confidence and manifestation.\",\"crystalsIncluded\":\"Success Manifestation Spell Jar\",\"associatedChakras\":\"Solar Plexus\",\"description\":\"Filled with citrine, pyrite, and positive intent to boost confidence and manifestation.\",\"benefits\":[\"Filled with citrine, pyrite, and positive intent to boost confidence and manifestation.\",\"Premium quality ritually prepared spell jar\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Keep in dry place\",\"Recharge under moonlight\"],\"disclaimer\":\"Crystals and spell jars are spiritual tools and not a substitute for medical treatment.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "variants": [
      {
        "name": "Mini",
        "price": 1200,
        "usdPrice": 24,
        "originalPrice": 1440,
        "originalUsdPrice": 28,
        "image": "/images/products/spelljar-mini.png"
      },
      {
        "name": "Medium (100ml)",
        "price": 3800,
        "usdPrice": 74,
        "originalPrice": 4560,
        "originalUsdPrice": 88,
        "image": "/images/products/spelljar-medium.png"
      },
      {
        "name": "Large (250ml)",
        "price": 6300,
        "usdPrice": 124,
        "originalPrice": 7560,
        "originalUsdPrice": 148,
        "image": "/images/products/spelljar-large.png"
      }
    ]
  },
  {
    "id": "abundance-spell-jar",
    "name": "Abundance Spell Jar",
    "category": "spell-jars",
    "subcategory": "Spell Jars",
    "price": 1200,
    "originalPrice": 1440,
    "image": "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/Spell%20jar%20/Abundance%20spell%20jar",
    "images": [
      "https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/Spell%20jar%20/Abundance%20spell%20jar"
    ],
    "usdPrice": 24,
    "originalUsdPrice": 28,
    "badge": null,
    "desc": "Dressed with money-drawing herbs and crystals to align with wealth and abundance.",
    "longDesc": "{\"purpose\":\"Dressed with money-drawing herbs and crystals to align with wealth and abundance.\",\"crystalsIncluded\":\"Abundance Spell Jar\",\"associatedChakras\":\"Solar Plexus, Heart\",\"description\":\"Dressed with money-drawing herbs and crystals to align with wealth and abundance.\",\"benefits\":[\"Dressed with money-drawing herbs and crystals to align with wealth and abundance.\",\"Premium quality ritually prepared spell jar\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Keep in dry place\",\"Recharge under moonlight\"],\"disclaimer\":\"Crystals and spell jars are spiritual tools and not a substitute for medical treatment.\"}",
    "chakras": [
      "Solar Plexus",
      "Heart"
    ],
    "variants": [
      {
        "name": "Mini",
        "price": 1200,
        "usdPrice": 24,
        "originalPrice": 1440,
        "originalUsdPrice": 28,
        "image": "/images/products/spelljar-mini.png"
      },
      {
        "name": "Medium (100ml)",
        "price": 3800,
        "usdPrice": 74,
        "originalPrice": 4560,
        "originalUsdPrice": 88,
        "image": "/images/products/spelljar-medium.png"
      },
      {
        "name": "Large (250ml)",
        "price": 6300,
        "usdPrice": 124,
        "originalPrice": 7560,
        "originalUsdPrice": 148,
        "image": "/images/products/spelljar-large.png"
      }
    ]
  },
  {
    "id": "good-luck-spell-jar",
    "name": "Good Luck Spell Jar",
    "category": "spell-jars",
    "subcategory": "Spell Jars",
    "price": 1200,
    "originalPrice": 1440,
    "image": "/images/products/pendant.png",
    "images": [
      "/images/products/pendant.png"
    ],
    "usdPrice": 24,
    "originalUsdPrice": 28,
    "badge": null,
    "desc": "Ritually sealed to bring positive energy, joy, and good fortune into your space.",
    "longDesc": "{\"purpose\":\"Ritually sealed to bring positive energy, joy, and good fortune into your space.\",\"crystalsIncluded\":\"Good Luck Spell Jar\",\"associatedChakras\":\"Solar Plexus\",\"description\":\"Ritually sealed to bring positive energy, joy, and good fortune into your space.\",\"benefits\":[\"Ritually sealed to bring positive energy, joy, and good fortune into your space.\",\"Premium quality ritually prepared spell jar\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Keep in dry place\",\"Recharge under moonlight\"],\"disclaimer\":\"Crystals and spell jars are spiritual tools and not a substitute for medical treatment.\"}",
    "chakras": [
      "Solar Plexus"
    ],
    "variants": [
      {
        "name": "Mini",
        "price": 1200,
        "usdPrice": 24,
        "originalPrice": 1440,
        "originalUsdPrice": 28,
        "image": "/images/products/spelljar-mini.png"
      },
      {
        "name": "Medium (100ml)",
        "price": 3800,
        "usdPrice": 74,
        "originalPrice": 4560,
        "originalUsdPrice": 88,
        "image": "/images/products/spelljar-medium.png"
      },
      {
        "name": "Large (250ml)",
        "price": 6300,
        "usdPrice": 124,
        "originalPrice": 7560,
        "originalUsdPrice": 148,
        "image": "/images/products/spelljar-large.png"
      }
    ]
  },
  {
    "id": "custom-spell-jar",
    "name": "Custom Spell Jar",
    "category": "spell-jars",
    "subcategory": "Spell Jars",
    "price": 2200,
    "originalPrice": 2640,
    "image": "/images/products/spelljar-mini.png",
    "images": [
      "/images/products/spelljar-mini.png"
    ],
    "usdPrice": 45,
    "originalUsdPrice": 55,
    "badge": "New",
    "desc": "A fully customized, ritually prepared spell jar based on your specific intentions.",
    "longDesc": "{\"purpose\":\"A fully customized, ritually prepared spell jar based on your specific intentions.\",\"crystalsIncluded\":\"Spell Jar\",\"associatedChakras\":\"All chakras\",\"description\":\"Our Mini Spell Jar is a pocket-sized spiritual tool, meticulously layered with intention-specific crystals, sacred dried herbs, and sealed with custom ritual wax.\",\"benefits\":[\"Perfect pocket size for daily travel and carry\",\"Hand-layered with authentic high-resonance crystals\",\"Individually sealed and ritually cleansed\"],\"howToEnergize\":\"Moonlight or selenite charging.\",\"careInstructions\":[\"Keep in a dry, safe space.\",\"Recharge under the full moonlight or smudge with incense smoke.\"],\"disclaimer\":\"Spell jars are spiritual tools and not a substitute for professional medical or mental health treatment.\"}",
    "chakras": [
      "All chakras"
    ],
    "variants": [
      {
        "name": "Mini",
        "price": 2200,
        "usdPrice": 45,
        "originalPrice": 2640,
        "originalUsdPrice": 55,
        "image": "/images/products/spelljar-mini.png"
      },
      {
        "name": "Medium (100ml)",
        "price": 4800,
        "usdPrice": 95,
        "originalPrice": 5760,
        "originalUsdPrice": 115,
        "image": "/images/products/spelljar-medium.png"
      },
      {
        "name": "Large (500ml)",
        "price": 7300,
        "usdPrice": 145,
        "originalPrice": 8760,
        "originalUsdPrice": 175,
        "image": "/images/products/spelljar-large.png"
      }
    ]
  }
];
