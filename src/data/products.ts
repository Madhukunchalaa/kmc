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
    "longDesc": "{\"description\": \"The Triple Protection Bracelet combines three crystals traditionally associated with grounding, stability, confidence, and energetic protection. It is a popular choice for daily wear and travel.\", \"whoShouldWear\": [\"People seeking to balance their Root, Solar Plexus Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages grounding and stability\", \"Supports confidence and focus\", \"Promotes energetic balance\", \"Suitable for daily wear\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Daily wear, travel, work, and crowded environments..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight, selenite charging, or intention setting.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I am grounded, confident, and protected.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"The Money Magnet Bracelet combines crystals traditionally associated with confidence, determination, growth, and opportunity. It is designed for individuals focused on business, career goals, and personal success.\", \"whoShouldWear\": [\"People seeking to balance their Solar Plexus, Heart Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Confidence, opportunity, motivation, and abundance mindset.\"], \"howToWear\": [\"Wear on the Right Hand as recommended.\", \"Best worn during: Business meetings, work, interviews, goal setting, and daily wear..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight, selenite charging, and intention setting.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I confidently attract opportunities, growth, and prosperity.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Rose Quartz is one of the most popular crystals associated with love, compassion, and emotional well-being. It is often used to encourage self-love, kindness, and harmonious relationships.\", \"whoShouldWear\": [\"People seeking to balance their Heart Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages self\", \"love and compassion\", \"Supports emotional balance\", \"Promotes harmony and understanding\", \"Inspires kindness and positivity\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Daily wear, meditation, self-care practices, and relationship intentions..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight charging is especially recommended.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I am worthy of love, kindness, and emotional harmony.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"The Seven Chakra Bracelet is designed to support balance across the body’s primary energy centers. Each stone is traditionally associated with a specific chakra, encouraging harmony between the mind, body, and spirit.\", \"whoShouldWear\": [\"People seeking to balance their Root, Sacral, Solar Plexus, Heart, Throat, Third Eye, Crown Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Supports chakra alignment\", \"Encourages energetic balance\", \"Promotes mindfulness and self\", \"awareness\", \"Suitable for meditation and daily wear\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Daily wear, meditation, yoga, prayer, and spiritual practices..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight, selenite charging, or intention setting.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I am balanced, aligned, and connected to my highest self.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Black Tourmaline is one of the most widely used grounding stones. It is traditionally associated with protection, stability, and maintaining a balanced energetic environment.\", \"whoShouldWear\": [\"People seeking to balance their Root Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages grounding\", \"Supports energetic protection\", \"Promotes stability\", \"Helps maintain focus and balance\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Daily wear, travel, crowded environments, work..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight, selenite charging, intention setting.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I am grounded, protected, and secure.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\n  \"description\": \"Irani Firoza Crystal Bracelet is a premium quality, authentic spiritual item. Genuine Irani Turquoise for confidence, public speaking, and clear communication. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Throat Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Genuine Irani Turquoise for confidence, public speaking, and clear communication.\",\n    \"Aligns and energises the Throat Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\"description\": \"Green Aventurine is traditionally associated with growth, optimism, and emotional well-being. It is commonly used by those seeking fresh opportunities and a positive outlook.\", \"whoShouldWear\": [\"People seeking to balance their Heart Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages optimism and positivity\", \"Supports emotional balance\", \"Promotes personal growth\", \"Inspires confidence in new beginnings\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Daily wear, new ventures, travel, and personal development activities..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I welcome growth, positivity, and new opportunities into my life.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Pyrite is traditionally associated with confidence, leadership, and determination. It is often chosen by entrepreneurs, professionals, and individuals working toward ambitious goals.\", \"whoShouldWear\": [\"People seeking to balance their Solar Plexus Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages confidence and leadership\", \"Supports motivation and determination\", \"Promotes goal\", \"focused thinking\", \"Inspires positive action\"], \"howToWear\": [\"Wear on the Right Hand as recommended.\", \"Best worn during: Work, business meetings, interviews, and goal-setting activities..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I move forward with confidence, courage, and determination.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Amethyst is one of the most popular spiritual crystals and is traditionally associated with peace, wisdom, and intuition. It is often used during meditation and mindfulness practices to support mental clarity and inner calm.\", \"whoShouldWear\": [\"People seeking to balance their Crown, Third Eye Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages relaxation\", \"Supports intuition\", \"Promotes spiritual awareness\", \"Helps create a peaceful environment\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Meditation, sleep, spiritual practices, daily wear..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I trust my intuition and embrace inner peace.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Citrine is traditionally associated with positivity, confidence, and personal growth. It is often used by those seeking motivation, optimism, and a positive outlook on life.\", \"whoShouldWear\": [\"People seeking to balance their Solar Plexus Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages confidence and self\", \"belief\", \"Promotes optimism and positivity\", \"Supports motivation and determination\", \"Inspires personal growth\"], \"howToWear\": [\"Wear on the Right Hand as recommended.\", \"Best worn during: Work, business activities, goal setting, and daily wear..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight, selenite charging, or intention setting.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I attract confidence, positivity, and opportunities for growth.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Clear Quartz is often referred to as the “Master Crystal” and is traditionally associated with clarity, focus, and amplifying intentions. It is commonly used alongside other crystals and spiritual practices.\", \"whoShouldWear\": [\"People seeking to balance their Crown Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Supports mental clarity\", \"Enhances focus and awareness\", \"Amplifies intentions and affirmations\", \"Suitable for meditation and mindfulness\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Daily, meditation, spiritual practices, and goal setting..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight, sunlight (briefly), or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"My mind is clear, focused, and aligned with my intentions.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"The Om Mani Padme Hum Crystal Bracelet features beads engraved with the most revered six-syllable Buddhist mantra, 'Om Mani Padme Hum.' This sacred mantra translates to 'The jewel is in the lotus' and is a powerful invocation of compassion, wisdom, and spiritual transformation. Each repetition of the mantra is believed to purify the mind, protect from negative energies, and elevate the wearer's spiritual consciousness. This bracelet is a daily reminder to cultivate inner peace, kindness, and mindful awareness.\", \"whoShouldWear\": [\"Spiritual practitioners who want to carry sacred mantra energy throughout the day.\", \"Individuals seeking inner peace, compassion, and mindful living.\", \"Those who practice Buddhist or spiritual meditation traditions.\", \"Anyone seeking a meaningful, purpose-driven piece of spiritual jewellery.\"], \"benefits\": [\"Carries the vibration of the sacred Om Mani Padme Hum mantra for continuous blessings.\", \"Cultivates compassion, loving-kindness, and inner peace.\", \"Purifies the mind and protects from negative energies and thoughts.\", \"Supports deep meditation and spiritual awareness.\", \"Acts as a constant reminder of mindful, compassionate living.\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Meditation, prayer, chanting, yoga, and daily wear.\", \"Traditionally recommended to wear continuously for sustained spiritual protection.\"], \"careInstructions\": [\"Energize by: Chanting 'Om Mani Padme Hum' 21 times while holding the bracelet with intention.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping under overnight moonlight or smudging with incense smoke.\", \"Store in a dry, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I am balanced, aligned, and connected to my highest self.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Smoky Quartz is traditionally associated with grounding, stability, and maintaining a calm mindset. It is a popular crystal for those seeking balance and focus.\", \"whoShouldWear\": [\"People seeking to balance their Root Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages grounding and stability\", \"Supports emotional balance\", \"Promotes focus and calmness\", \"Inspires resilience\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Stressful situations, work, travel, and daily wear..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I remain calm, grounded, and focused.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Red Jasper is traditionally associated with stability,\", \"whoShouldWear\": [\"People seeking to balance their Root Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages grounding and stability\", \"Supports emotional strength\", \"Promotes resilience and endurance\", \"Inspires courage and determination\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Daily wear, travel, work, and stressful situations..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I am grounded, strong, and resilient.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Dalmatian Jasper is traditionally associated with joy, grounding, and emotional stability. Its playful appearance makes it popular among those seeking a light-hearted and balanced energy.\", \"whoShouldWear\": [\"People seeking to balance their Root Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages positivity and optimism\", \"Supports grounding and stability\", \"Promotes emotional balance\", \"Inspires a playful outlook on life\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Daily wear, social activities, and travel..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I welcome joy, balance, and positive energy into my life.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Shungite is traditionally associated with grounding and maintaining a balanced energetic environment. It is often worn by those seeking stability and focus in their daily lives.\", \"whoShouldWear\": [\"People seeking to balance their Root Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages grounding and stability\", \"Supports focus and balance\", \"Promotes emotional resilience\", \"Suitable for daily wear\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Work, travel, meditation, and daily activities..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I am grounded, balanced, and centered.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Tiger Eye is traditionally associated with courage, confidence, and focus. It is one of the most popular stones for those seeking motivation and balanced decision-making.\", \"whoShouldWear\": [\"People seeking to balance their Solar Plexus, Root Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages confidence and courage\", \"Supports focus and determination\", \"Promotes balanced decision\", \"making\", \"Inspires motivation and action\"], \"howToWear\": [\"Wear on the Right Hand as recommended.\", \"Best worn during: Work, interviews, business meetings, and daily wear..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I move forward with confidence, courage, and clarity.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Golden Pyrite is traditionally associated with confidence, determination, and personal empowerment. It is often used by those seeking motivation and a strong mindset for achieving goals.\", \"whoShouldWear\": [\"People seeking to balance their Solar Plexus Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages confidence and leadership\", \"Supports determination and focus\", \"Promotes motivation and ambition\"], \"howToWear\": [\"Wear on the Right Hand as recommended.\", \"Best worn during: Business activities, work, meetings, and goal setting..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I move forward with confidence, determination, and purpose.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Angel Aura Quartz is created by bonding Clear Quartz with vaporized platinum and silver through a special process, resulting in its stunning iridescent, rainbow-like shimmer. Deeply connected to the Crown Chakra, Angel Aura Quartz is traditionally associated with joy, optimism, spiritual communication, and angelic energy. Its luminous beauty makes it both a wearable piece of art and a powerful spiritual tool for those seeking elevated vibrations, inner peace, and connection to higher consciousness.\", \"whoShouldWear\": [\"Individuals seeking elevated spiritual energy, joy, and inner peace.\", \"People who feel emotionally heavy or disconnected from their higher self.\", \"Those drawn to angelic energy, higher guidance, or spiritual development.\", \"Anyone looking for a unique, iridescent bracelet with profound spiritual significance.\"], \"benefits\": [\"Radiates high-vibrational energy of joy, peace, and spiritual light.\", \"Connects the wearer to angelic realms and higher consciousness.\", \"Uplifts mood, promotes optimism, and dispels negativity.\", \"Activates and aligns the Crown and Soul Star Chakras.\", \"Amplifies healing intentions and spiritual practices.\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Meditation, yoga, spiritual practices, healing sessions, and daily wear.\", \"Especially beneficial during morning meditation or intention-setting rituals.\"], \"careInstructions\": [\"Energize by: Moonlight overnight or selenite plate charging.\", \"Avoid contact with water, soap, and cosmetic chemicals to preserve the metallic bonding.\", \"Cleanse periodically by keeping under overnight moonlight or smudging with incense smoke.\", \"Store in a dry, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I welcome peace, light, and positive energy into my life.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"The Evil Eye Bracelet is a traditional protective symbol used across many cultures. It is commonly worn as a reminder of positivity, protection, and good intentions.\", \"whoShouldWear\": [\"People seeking to balance their Not -Specific Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Symbolizes protection\", \"Encourages positive energy\", \"Serves as a meaningful daily accessory\", \"Complements spiritual practices\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Daily wear, travel, work, and social gatherings..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or intention setting.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I am surrounded by positivity, protection, and peace.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Angelite is a pale blue, ethereal crystal traditionally associated with serenity, compassion, and spiritual communication. Deeply connected to the Throat and Crown Chakras, it is believed to facilitate communication with higher realms, angels, and one's own higher self. Angelite promotes an atmosphere of peace and calm, helps release tension and anger, and encourages compassionate expression and understanding. It is a wonderful companion for those seeking gentle guidance, inner peace, and a deeper spiritual connection.\", \"whoShouldWear\": [\"Individuals seeking inner peace, emotional calm, and release of anger or tension.\", \"People who want to enhance their communication skills and express themselves with compassion.\", \"Those engaged in energy healing, meditation, or spiritual practices.\", \"Anyone who wants to strengthen their connection to angels or higher spiritual guidance.\"], \"benefits\": [\"Promotes deep inner peace, serenity, and emotional calm.\", \"Facilitates compassionate, gentle, and clear communication.\", \"Helps release feelings of anger, stress, and emotional tension.\", \"Strengthens the connection to spiritual guidance and higher consciousness.\", \"Activates and balances the Throat and Crown Chakras.\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Meditation, spiritual work, energy healing sessions, and daily wear.\", \"Especially beneficial during times of emotional stress or conflict.\"], \"careInstructions\": [\"Energize by: Selenite charging plate or moonlight overnight.\", \"Avoid contact with water, soap, and cosmetic chemicals — Angelite can dissolve when wet.\", \"Cleanse periodically by keeping under overnight moonlight or smudging with incense smoke.\", \"Store in a dry, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I communicate with peace, compassion, and understanding.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Peridot is traditionally associated with growth, positivity, and renewal. Its vibrant green color symbolizes fresh beginnings and a positive outlook.\", \"whoShouldWear\": [\"People seeking to balance their Heart Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages optimism\", \"Supports emotional renewal\", \"Promotes personal growth\", \"Inspires positive thinking\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: New beginnings, personal development, and daily wear..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I welcome growth, positivity, and fresh opportunities.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Rhodonite is a beautiful pink-and-black Heart Chakra stone traditionally associated with compassion, forgiveness, and emotional healing. Often called the 'Rescue Stone,' it is particularly valued for helping heal old emotional wounds, releasing patterns of resentment, and encouraging self-love and deep compassion for others. Rhodonite promotes emotional balance, helps build bridges in relationships, and inspires a generous, understanding heart. It is ideal for anyone ready to heal from past hurts and open themselves to love, forgiveness, and authentic connection.\", \"whoShouldWear\": [\"Individuals seeking emotional healing, forgiveness, and release of past hurts.\", \"People working to improve their relationships and cultivate compassion.\", \"Those recovering from heartbreak, grief, or emotional trauma.\", \"Anyone seeking to deepen their capacity for self-love and understanding.\"], \"benefits\": [\"Encourages deep emotional healing and forgiveness of self and others.\", \"Promotes compassion, kindness, and emotional understanding.\", \"Helps release resentment, anger, and old emotional wounds.\", \"Strengthens loving relationships and promotes harmonious connections.\", \"Supports inner balance and a generous, compassionate heart.\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Daily wear, meditation, self-care routines, and relationship-focused intentions.\", \"Especially beneficial to wear during times of emotional healing or conflict resolution.\"], \"careInstructions\": [\"Energize by: Moonlight overnight charging or selenite plate charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping under overnight moonlight or smudging with incense smoke.\", \"Store in a dry, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I choose compassion, balance, and emotional harmony.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\n  \"description\": \"Blue Howlite Crystal Bracelet is a premium quality, authentic spiritual item. Extremely calming stone, great for reducing anger and sleeplessness. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Throat Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Extremely calming stone, great for reducing anger and sleeplessness.\",\n    \"Aligns and energises the Throat Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\"description\": \"Multiflourite Crystal Bracelet is a premium quality, authentic spiritual item. Brings mental clarity, order, and structured focus to a chaotic mind. Sourced carefully and ritually cleansed.\", \"whoShouldWear\": [\"People seeking to balance their Third Eye Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Brings mental clarity, order, and structured focus to a chaotic mind.\", \"Aligns and energises the Third Eye Chakra.\", \"Dissolves negative energies and builds a strong positive protective aura.\", \"Supports emotional healing, meditation, and mindfulness practices.\"], \"howToWear\": [\"Keep close to your body or wear daily.\", \"Can be placed in a clean pocket, purse, or worn on the body.\", \"Best worn during meditation, yoga, or professional work.\"], \"careInstructions\": [\"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"My mind is focused, clear, and aligned with my goals.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Sulemani Hakik Crystal Bracelet is a premium quality, authentic spiritual item. Traditional gemstone used to block black magic and malefic planetary influences. Sourced carefully and ritually cleansed.\", \"whoShouldWear\": [\"People seeking to balance their Root Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Traditional gemstone used to block black magic and malefic planetary influences.\", \"Aligns and energises the Root Chakra.\", \"Dissolves negative energies and builds a strong positive protective aura.\", \"Supports emotional healing, meditation, and mindfulness practices.\"], \"howToWear\": [\"Keep close to your body or wear daily.\", \"Can be placed in a clean pocket, purse, or worn on the body.\", \"Best worn during meditation, yoga, or professional work.\"], \"careInstructions\": [\"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I am strong, grounded, and protected.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\n  \"description\": \"Lava Seven Chakra Crystal Bracelet is a premium quality, authentic spiritual item. Grounding volcanic rock combined with 7 chakra balancing crystals. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root, Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Grounding volcanic rock combined with 7 chakra balancing crystals.\",\n    \"Aligns and energises the Root, Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\"description\": \"Red Garnet is one of the most powerful stones of passion, vitality, and courage. Deeply connected to the Root Chakra, it is traditionally associated with energising the life force, strengthening confidence, and igniting a deep sense of motivation and drive. Its rich, deep red colour symbolises strength, perseverance, and the courage to face challenges with determination. Red Garnet is also believed to promote physical vitality and emotional courage, making it ideal for those seeking renewed energy and purpose.\", \"whoShouldWear\": [\"Individuals seeking to boost their energy levels, confidence, and motivation.\", \"People going through periods of low energy, self-doubt, or lack of direction.\", \"Those who want to strengthen their Root Chakra and feel more grounded and secure.\", \"Athletes, professionals, and anyone pursuing ambitious personal or career goals.\"], \"benefits\": [\"Boosts energy, vitality, and physical stamina.\", \"Ignites passion, courage, and a strong sense of motivation.\", \"Grounds and stabilizes the Root Chakra energy.\", \"Promotes confidence, emotional strength, and resilience.\", \"Encourages perseverance and determination in the face of challenges.\"], \"howToWear\": [\"Wear on the Right Hand as recommended to project energies outward.\", \"Best worn during: Workouts, professional work, goal-setting sessions, and daily wear.\", \"Wear when you need an extra boost of motivation and confidence.\"], \"careInstructions\": [\"Energize by: Sunlight (morning light for a few hours) or moonlight overnight.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping under overnight moonlight or smudging with incense smoke.\", \"Store in a dry, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I move forward with confidence, strength, and determination.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Citrine Rudraksha Crystal Bracelet is a premium quality, authentic spiritual item. Sacred Rudraksha seeds combined with wealth-attracting Citrine beads. Sourced carefully and ritually cleansed.\", \"whoShouldWear\": [\"People seeking to balance their Solar Plexus Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Sacred Rudraksha seeds combined with wealth-attracting Citrine beads.\", \"Aligns and energises the Solar Plexus Chakra.\", \"Dissolves negative energies and builds a strong positive protective aura.\", \"Supports emotional healing, meditation, and mindfulness practices.\"], \"howToWear\": [\"Keep close to your body or wear daily.\", \"Can be placed in a clean pocket, purse, or worn on the body.\", \"Best worn during meditation, yoga, or professional work.\"], \"careInstructions\": [\"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I attract confidence, positivity, and opportunities for growth.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Grey Cat’s Eye is traditionally associated with focus, awareness, and maintaining a balanced mindset. Many crystal enthusiasts wear it as a grounding stone that supports alertness and confidence.\", \"whoShouldWear\": [\"People seeking to balance their Root, Solar Plexus Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages focus and concentration\", \"Supports confidence and awareness\", \"Promotes grounding energy\", \"Helps maintain emotional balance\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Work, study, travel, and daily wear..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I remain focused, confident, and grounded in every situation.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Moon Stone Crystal Bracelet is a premium quality, authentic spiritual item. Enhances intuition, divine feminine energy, and emotional healing. Sourced carefully and ritually cleansed.\", \"whoShouldWear\": [\"People seeking to balance their Third Eye, Crown Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Enhances intuition, divine feminine energy, and emotional healing.\", \"Aligns and energises the Third Eye, Crown Chakra.\", \"Dissolves negative energies and builds a strong positive protective aura.\", \"Supports emotional healing, meditation, and mindfulness practices.\"], \"howToWear\": [\"Keep close to your body or wear daily.\", \"Can be placed in a clean pocket, purse, or worn on the body.\", \"Best worn during meditation, yoga, or professional work.\"], \"careInstructions\": [\"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I trust my intuition and embrace emotional balance.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Blue Apatite is traditionally associated with inspiration, motivation, and mental clarity. Many crystal enthusiasts use it when working toward personal goals, learning new skills, or enhancing focus and self-expression.\", \"whoShouldWear\": [\"People seeking to balance their Throat, Third Eye Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages motivation and ambition\", \"Supports mental clarity and focus\", \"Promotes creativity and learning\", \"Enhances communication and self\", \"expression\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: During work, study, planning, goal setting, and daily activities..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight, selenite charging, or intention setting.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I am focused, motivated, and open to new possibilities.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Lapis Lazuli has long been associated with wisdom, truth, and self-expression. It is traditionally used to support clear communication and deeper self-awareness.\", \"whoShouldWear\": [\"People seeking to balance their Throat, Third Eye Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages confident communication\", \"Supports intuition and insight\", \"Promotes mental clarity\", \"Inspires self\", \"awareness\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Meetings, presentations, study, meditation, and daily wear..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I express my truth with wisdom, confidence, and clarity.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Amazonite is traditionally associated with calm communication, emotional clarity, and balanced self- expression. Many crystal enthusiasts use Amazonite to encourage honest conversations and promote harmony between thoughts and feelings.\", \"whoShouldWear\": [\"People seeking to balance their Heart, Throat Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages clear communication\", \"Supports emotional balance\", \"Promotes confidence in self\", \"expression\", \"Helps maintain a calm mindset\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Meetings, conversations, presentations, daily wear..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I express my truth with confidence and kindness.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Aquamarine is traditionally associated with courage, clarity, and calm communication. Many crystal enthusiasts use it to encourage confident expression and emotional balance.\", \"whoShouldWear\": [\"People seeking to balance their Throat Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages communication\", \"Supports emotional clarity\", \"Promotes confidence\", \"Helps maintain inner calm\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Meetings, public speaking, daily wear..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I communicate clearly, calmly, and confidently.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Sunstone is traditionally associated with confidence, positivity, and personal empowerment. Its warm energy makes it popular among those seeking motivation and self- belief.\", \"whoShouldWear\": [\"People seeking to balance their Solar Plexus, Sacral Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages confidence and optimism\", \"Supports leadership qualities\", \"Promotes motivation and positivity\", \"Inspires personal growth\"], \"howToWear\": [\"Wear on the Right Hand as recommended.\", \"Best worn during: Work, business, social events, and goal setting..\"], \"careInstructions\": [\"Cleanse and energize by: Morning sunlight (briefly), moonlight, or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I shine with confidence, positivity, and purpose.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Peach Moonstone is traditionally associated with emotional comfort, self-nurturing, and balanced emotions. It is often chosen by those seeking gentle support during life’s changes.\", \"whoShouldWear\": [\"People seeking to balance their Sacral Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages emotional balance\", \"Supports self\", \"love and self\", \"care\", \"Promotes inner calm\", \"Inspires optimism\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Daily wear, self-care routines, meditation, and relaxation..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I nurture myself with kindness, patience, and love.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Strawberry Quartz is traditionally associated with joy, love, and positive emotions. Its gentle energy makes it a popular choice for those seeking emotional harmony and optimism.\", \"whoShouldWear\": [\"People seeking to balance their Heart Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages positivity and joy\", \"Supports emotional balance\", \"Promotes love and compassion\", \"Inspires optimism\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Daily wear, self-care, meditation, and social activities..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I welcome joy, love, and positivity into my life.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Morganite is traditionally associated with love, compassion, and emotional well-being. It is often worn by those seeking harmony, forgiveness, and positive relationships.\", \"whoShouldWear\": [\"People seeking to balance their Heart Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages love and compassion\", \"Supports emotional balance\", \"Promotes understanding and harmony\", \"Inspires kindness and patience\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Daily wear, meditation, self-care, and relationship-focused intentions..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I radiate love, compassion, and emotional harmony.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Ametrine combines the qualities traditionally associated with Amethyst and Citrine. It is often used to encourage balanced thinking, mental clarity, and positive decision- making while supporting personal growth.\", \"whoShouldWear\": [\"People seeking to balance their Solar Plexus, Crown Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages focus and clarity\", \"Supports balanced thinking\", \"Promotes confidence\", \"Encourages positive transformation\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Work, study, planning, daily wear..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I welcome clarity, confidence, and positive growth.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"The Pixiu Om Mani Padme Hum Crystal Bracelet is a powerful combination of Feng Shui symbolism and Buddhist wisdom. The Pixiu — a mythical celestial creature in Chinese culture — is traditionally believed to attract wealth, abundance, and prosperity while protecting its owner from misfortune. Paired with the sacred Om Mani Padme Hum mantra beads, this bracelet carries the vibration of compassion, wisdom, and spiritual protection. Together, these elements create a deeply meaningful bracelet for those seeking both material success and spiritual growth.\", \"whoShouldWear\": [\"Entrepreneurs, business owners, and professionals seeking financial growth and abundance.\", \"Individuals who practice Feng Shui or Buddhist spiritual traditions.\", \"People seeking energetic protection and positive fortune in their daily lives.\", \"Anyone looking for a meaningful combination of spiritual symbols and prosperity energy.\"], \"benefits\": [\"Attracts wealth, abundance, and financial opportunities (Pixiu).\", \"Provides energetic protection against misfortune and negative energies.\", \"Carries the sacred energy of the Om Mani Padme Hum mantra for spiritual blessings.\", \"Promotes focus, discipline, and clarity for personal and professional growth.\", \"Connects the wearer to both spiritual wisdom and material prosperity.\"], \"howToWear\": [\"Wear on the Left Hand as recommended to receive energies.\", \"The Pixiu charm should face outward when worn on the left wrist.\", \"Best worn during: Daily wear, business activities, meditation, and prayer.\"], \"careInstructions\": [\"Energize by: Moonlight charging overnight or chanting 'Om Mani Padme Hum' 21 times while holding the bracelet.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping under overnight moonlight or smudging with incense smoke.\", \"Store in a dry, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I am grounded, focused, and open to prosperity, wisdom, and positive opportunities.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"The Mother of Pearl Crystal Bracelet features lustrous shell beads that carry a gentle, ocean-inspired energy. Mother of Pearl is traditionally associated with protection, emotional clarity, and inner harmony. Revered across many cultures for its connection to the divine feminine, intuition, and gentle healing energy, it is believed to soothe emotional distress, attract positive energy, and promote a serene and balanced state of mind.\", \"whoShouldWear\": [\"Individuals seeking emotional clarity, inner peace, and gentle healing.\", \"People who feel stressed, anxious, or emotionally overwhelmed.\", \"Those who appreciate the natural beauty and spiritual significance of the ocean.\", \"Anyone looking for a graceful, versatile bracelet with calming energy.\"], \"benefits\": [\"Promotes emotional clarity, inner calm, and a sense of peace.\", \"Gently soothes emotional distress and supports emotional healing.\", \"Connects the wearer to feminine, nurturing energy.\", \"Attracts positive energy and encourages harmonious relationships.\", \"Adds a touch of timeless, natural elegance to any outfit.\"], \"howToWear\": [\"Wear on either hand based on personal preference.\", \"Best worn during: Daily wear, meetings, social events, meditation, and relaxation.\", \"Pairs beautifully with both casual and formal attire.\"], \"careInstructions\": [\"Energize by: Moonlight overnight charging or intention setting.\", \"Avoid prolonged contact with water, soap, and cosmetic chemicals.\", \"Wipe gently with a soft dry cloth to maintain its natural lustre.\", \"Store in a dry, clean velvet pouch or container when not in use.\"], \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Malachite is traditionally associated with transformation and personal growth. It is often chosen by those navigating change and seeking courage to move forward.\", \"whoShouldWear\": [\"People seeking to balance their Heart Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages personal transformation\", \"Supports confidence and determination\", \"Promotes emotional awareness\", \"Inspires growth and positive change\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: During life transitions, new beginnings, and personal development journeys..\"], \"careInstructions\": [\"Cleanse and energize by: Selenite charging only. Avoid prolonged water exposure.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I embrace positive transformation and move forward with confidence.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Chrysocolla is traditionally associated with calm communication and emotional harmony. It is often used to encourage patience, understanding, and authentic self- expression.\", \"whoShouldWear\": [\"People seeking to balance their Heart, Throat Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages emotional balance\", \"Supports honest communication\", \"Promotes inner wisdom\", \"Helps maintain a calm mindset\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: During conversations, emotional situations, meditation, and daily wear..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I communicate with wisdom, compassion, and confidence.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Green Aventurine is traditionally associated with growth, optimism, and emotional well-being. It is commonly used by those seeking fresh opportunities and a positive outlook.\", \"whoShouldWear\": [\"People seeking to balance their Heart Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages optimism and positivity\", \"Supports emotional balance\", \"Promotes personal growth\", \"Inspires confidence in new beginnings\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Daily wear, new ventures, travel, and personal development activities..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"The Moonstone Chips Bracelet features beautiful natural Moonstone chips that radiate a soft, luminous glow. Moonstone is one of the most beloved feminine crystals, deeply connected to the energy of the moon, intuition, and emotional healing. It is traditionally associated with the Third Eye and Crown Chakras and is believed to enhance psychic sensitivity, support emotional balance, and promote inner clarity. Its gentle energy makes it ideal for those navigating emotional transitions, new beginnings, and personal growth.\", \"whoShouldWear\": [\"Individuals seeking to strengthen their intuition and emotional awareness.\", \"People going through transitions, new beginnings, or emotional healing.\", \"Those who feel disconnected from their intuitive or feminine energy.\", \"Anyone seeking clarity during confusing or emotionally challenging times.\"], \"benefits\": [\"Enhances intuition, psychic sensitivity, and inner knowing.\", \"Supports emotional balance and healing during life transitions.\", \"Connects the wearer to the gentle, nurturing energy of the moon.\", \"Promotes inner clarity, calm, and emotional well-being.\", \"Encourages new beginnings and fresh perspectives.\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Meditation, spiritual practices, evening wind-down routines, and daily wear.\", \"Especially beneficial during the full moon — charge it overnight under moonlight.\"], \"careInstructions\": [\"Energize by: Full moonlight overnight — Moonstone responds powerfully to lunar energy.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping under overnight moonlight or smudging with incense smoke.\", \"Store in a dry, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I trust my intuition and embrace emotional balance.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Lapis Lazuli has long been associated with wisdom, truth, and self-expression. It is traditionally used to support clear communication and deeper self-awareness.\", \"whoShouldWear\": [\"People seeking to balance their Throat, Third Eye Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages confident communication\", \"Supports intuition and insight\", \"Promotes mental clarity\", \"Inspires self\", \"awareness\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Meetings, presentations, study, meditation, and daily wear..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Red Garnet is traditionally associated with vitality, confidence, and determination. Its rich red color symbolizes strength, motivation, and perseverance, making it a popular choice for those pursuing personal goals.\", \"whoShouldWear\": [\"People seeking to balance their Root Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages confidence and courage\", \"Supports determination and motivation\", \"Promotes grounding and stability\", \"Inspires perseverance\"], \"howToWear\": [\"Wear on the Right Hand as recommended.\", \"Best worn during: Work, fitness activities, goal setting, and daily wear..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I move forward with confidence, strength, and determination.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Amethyst is one of the most popular spiritual crystals and is traditionally associated with peace, wisdom, and intuition. It is often used during meditation and mindfulness practices to support mental clarity and inner calm.\", \"whoShouldWear\": [\"People seeking to balance their Crown, Third Eye Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages relaxation\", \"Supports intuition\", \"Promotes spiritual awareness\", \"Helps create a peaceful environment\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Meditation, sleep, spiritual practices, daily wear..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Clear Quartz is often referred to as the \\u201cMaster Crystal\\u201d and is traditionally associated with clarity, focus, and amplifying intentions. It is commonly used alongside other crystals and spiritual practices.\", \"whoShouldWear\": [\"People seeking to balance their Crown Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Supports mental clarity\", \"Enhances focus and awareness\", \"Amplifies intentions and affirmations\", \"Suitable for meditation and mindfulness\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Daily, meditation, spiritual practices, and goal setting..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight, sunlight (briefly), or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\n  \"description\": \"Opal Bangle Bracelet is a premium quality, authentic spiritual item. Enhances cosmic consciousness, spiritual vision, and inspiration. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Enhances cosmic consciousness, spiritual vision, and inspiration.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\"description\": \"Rose Quartz is one of the most popular crystals associated with love, compassion, and emotional well-being. It is often used to encourage self-love, kindness, and harmonious relationships.\", \"whoShouldWear\": [\"People seeking to balance their Heart Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages self\", \"love and compassion\", \"Supports emotional balance\", \"Promotes harmony and understanding\", \"Inspires kindness and positivity\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Daily wear, meditation, self-care practices, and relationship intentions..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight charging is especially recommended.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Tiger Eye is traditionally associated with courage, confidence, and focus. It is one of the most popular stones for those seeking motivation and balanced decision-making.\", \"whoShouldWear\": [\"People seeking to balance their Solar Plexus, Root Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages confidence and courage\", \"Supports focus and determination\", \"Promotes balanced decision\", \"making\", \"Inspires motivation and action\"], \"howToWear\": [\"Wear on the Right Hand as recommended.\", \"Best worn during: Work, interviews, business meetings, and daily wear..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Lapis Lazuli has long been associated with wisdom, truth, and self-expression. It is traditionally used to support clear communication and deeper self-awareness.\", \"whoShouldWear\": [\"People seeking to balance their Throat, Third Eye Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages confident communication\", \"Supports intuition and insight\", \"Promotes mental clarity\", \"Inspires self\", \"awareness\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Meetings, presentations, study, meditation, and daily wear..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Green Aventurine is traditionally associated with growth, optimism, and emotional well-being. It is commonly used by those seeking fresh opportunities and a positive outlook.\", \"whoShouldWear\": [\"People seeking to balance their Heart Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages optimism and positivity\", \"Supports emotional balance\", \"Promotes personal growth\", \"Inspires confidence in new beginnings\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Daily wear, new ventures, travel, and personal development activities..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Amethyst is one of the most popular spiritual crystals and is traditionally associated with peace, wisdom, and intuition. It is often used during meditation and mindfulness practices to support mental clarity and inner calm.\", \"whoShouldWear\": [\"People seeking to balance their Crown, Third Eye Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages relaxation\", \"Supports intuition\", \"Promotes spiritual awareness\", \"Helps create a peaceful environment\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Meditation, sleep, spiritual practices, daily wear..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"The Seven Chakra Bracelet is designed to support balance across the body\\u2019s primary energy centers. Each stone is traditionally associated with a specific chakra, encouraging harmony between the mind, body, and spirit.\", \"whoShouldWear\": [\"People seeking to balance their Root, Sacral, Solar Plexus, Heart, Throat, Third Eye, Crown Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Supports chakra alignment\", \"Encourages energetic balance\", \"Promotes mindfulness and self\", \"awareness\", \"Suitable for meditation and daily wear\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Daily wear, meditation, yoga, prayer, and spiritual practices..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight, selenite charging, or intention setting.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Pyrite is traditionally associated with confidence, leadership, and determination. It is often chosen by entrepreneurs, professionals, and individuals working toward ambitious goals.\", \"whoShouldWear\": [\"People seeking to balance their Solar Plexus Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages confidence and leadership\", \"Supports motivation and determination\", \"Promotes goal\", \"focused thinking\", \"Inspires positive action\"], \"howToWear\": [\"Wear on the Right Hand as recommended.\", \"Best worn during: Work, business meetings, interviews, and goal-setting activities..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Red Jasper is traditionally associated with stability,\", \"whoShouldWear\": [\"People seeking to balance their Root Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages grounding and stability\", \"Supports emotional strength\", \"Promotes resilience and endurance\", \"Inspires courage and determination\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Daily wear, travel, work, and stressful situations..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\n  \"description\": \"Tree Of Life Crystal Pendant is a premium quality, authentic spiritual item. A beautiful healing stone selected intuitively. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"A beautiful healing stone selected intuitively.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Opal Crystal Pendant is a premium quality, authentic spiritual item. Enhances cosmic consciousness, spiritual vision, and inspiration. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Enhances cosmic consciousness, spiritual vision, and inspiration.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Tiger Eye Crystal Pendant is a premium quality, authentic spiritual item. Boosts courage, self-confidence, willpower, and personal power. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Boosts courage, self-confidence, willpower, and personal power.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Rose Quartz Crystal Pendant is a premium quality, authentic spiritual item. The stone of unconditional love, compassion, and emotional healing. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The stone of unconditional love, compassion, and emotional healing.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Tiger Eye Designs Crystal Pendant is a premium quality, authentic spiritual item. Boosts courage, self-confidence, willpower, and personal power. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Boosts courage, self-confidence, willpower, and personal power.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Lapis Lazuli Crystal Pendant is a premium quality, authentic spiritual item. Traditional royal blue stone for wisdom, truth, and inner power. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Throat, Third Eye Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Traditional royal blue stone for wisdom, truth, and inner power.\",\n    \"Aligns and energises the Throat, Third Eye Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Black Tourmaline Crystal Pendant is a premium quality, authentic spiritual item. Shields against negative energy, electromagnetic frequencies, and toxic environments. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Shields against negative energy, electromagnetic frequencies, and toxic environments.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Green Eventurine Crystal Pendant is a premium quality, authentic spiritual item. Stone of opportunity and luck, bringing abundance and career success. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stone of opportunity and luck, bringing abundance and career success.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Pyrite Crystal Pendant is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Evil Eye Crystal Pendant is a premium quality, authentic spiritual item. Protective talisman that shields against jealousy, glare, and bad wishes. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root, Throat Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Protective talisman that shields against jealousy, glare, and bad wishes.\",\n    \"Aligns and energises the Root, Throat Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Moonstone Classic Ring is a premium quality, authentic spiritual item. A beautiful healing stone selected intuitively. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"A beautiful healing stone selected intuitively.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Rose Quartz Classic Ring is a premium quality, authentic spiritual item. The stone of unconditional love, compassion, and emotional healing. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The stone of unconditional love, compassion, and emotional healing.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Lapis Lazuli Classic Ring is a premium quality, authentic spiritual item. Traditional royal blue stone for wisdom, truth, and inner power. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Throat, Third Eye Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Traditional royal blue stone for wisdom, truth, and inner power.\",\n    \"Aligns and energises the Throat, Third Eye Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Peridot Classic Ring is a premium quality, authentic spiritual item. Inspires positive energy, abundance, and heart-centered joy. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Inspires positive energy, abundance, and heart-centered joy.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Amethyst Design Ring is a premium quality, authentic spiritual item. Calms mind, increases spiritual wisdom, and supports deep meditation. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Third Eye, Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Calms mind, increases spiritual wisdom, and supports deep meditation.\",\n    \"Aligns and energises the Third Eye, Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Lapis Lazuli Design Ring is a premium quality, authentic spiritual item. Traditional royal blue stone for wisdom, truth, and inner power. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Throat, Third Eye Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Traditional royal blue stone for wisdom, truth, and inner power.\",\n    \"Aligns and energises the Throat, Third Eye Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Pyrite Design Ring is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Green Eventurine Design Ring is a premium quality, authentic spiritual item. Stone of opportunity and luck, bringing abundance and career success. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stone of opportunity and luck, bringing abundance and career success.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Irani Firoza Design Ring is a premium quality, authentic spiritual item. Genuine Irani Turquoise for confidence, public speaking, and clear communication. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Throat Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Genuine Irani Turquoise for confidence, public speaking, and clear communication.\",\n    \"Aligns and energises the Throat Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Polished Black Tourmaline Design Ring is a premium quality, authentic spiritual item. Shields against negative energy, electromagnetic frequencies, and toxic environments. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Shields against negative energy, electromagnetic frequencies, and toxic environments.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Raw Black Tourmaline Design Ring is a premium quality, authentic spiritual item. Shields against negative energy, electromagnetic frequencies, and toxic environments. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Shields against negative energy, electromagnetic frequencies, and toxic environments.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Rose Quartz Design Ring is a premium quality, authentic spiritual item. The stone of unconditional love, compassion, and emotional healing. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The stone of unconditional love, compassion, and emotional healing.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Moonstone Design Ring is a premium quality, authentic spiritual item. A beautiful healing stone selected intuitively. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"A beautiful healing stone selected intuitively.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Labradorite Design Ring is a premium quality, authentic spiritual item. Temple of the stars crystal for magic, intuition, and transformation. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Third Eye Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Temple of the stars crystal for magic, intuition, and transformation.\",\n    \"Aligns and energises the Third Eye Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Tiger Eye Design Ring is a premium quality, authentic spiritual item. Boosts courage, self-confidence, willpower, and personal power. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Boosts courage, self-confidence, willpower, and personal power.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Yellow Calcite Design Ring is a premium quality, authentic spiritual item. Clears mental blockages and infuses warmth, joy, and hope. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Clears mental blockages and infuses warmth, joy, and hope.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Red Carnalian Design Ring is a premium quality, authentic spiritual item. Stones of motivation, creativity, leadership, and bold action. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Sacral Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stones of motivation, creativity, leadership, and bold action.\",\n    \"Aligns and energises the Sacral Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Sulemani Hakik Design Ring is a premium quality, authentic spiritual item. Traditional gemstone used to block black magic and malefic planetary influences. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Traditional gemstone used to block black magic and malefic planetary influences.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Dalmatian Jasper Design Ring is a premium quality, authentic spiritual item. Brings a sense of playfulness and joy, breaking down analytical walls. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Brings a sense of playfulness and joy, breaking down analytical walls.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Rhodonite Design Ring is a premium quality, authentic spiritual item. Stones of compassion, forgiveness, and emotional balance after hurt. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stones of compassion, forgiveness, and emotional balance after hurt.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Malachite Design Ring is a premium quality, authentic spiritual item. Powerful transformation stone that cleanses emotional blocks. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Powerful transformation stone that cleanses emotional blocks.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Opal Design Ring is a premium quality, authentic spiritual item. Enhances cosmic consciousness, spiritual vision, and inspiration. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Enhances cosmic consciousness, spiritual vision, and inspiration.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Clear Quartz Design Ring is a premium quality, authentic spiritual item. The Master Healer crystal that amplifies other stones' energy. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The Master Healer crystal that amplifies other stones' energy.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"White Agate Design Ring is a premium quality, authentic spiritual item. Brings gentle release, mental balance, and absolute purity. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Brings gentle release, mental balance, and absolute purity.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Black Onyx Design Ring is a premium quality, authentic spiritual item. Powerful protective stone that absorbs negativity, grounds scattered energy, and builds inner strength and willpower. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Powerful protective stone that absorbs negativity, grounds scattered energy, and builds inner strength and willpower.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Snowflake Obsidian Design Ring is a premium quality, authentic spiritual item. Stone of purity and balance that calms the mind, releases ingrained stress patterns, and clears negative energy. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root, Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stone of purity and balance that calms the mind, releases ingrained stress patterns, and clears negative energy.\",\n    \"Aligns and energises the Root, Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"White Howlite Design Ring is a premium quality, authentic spiritual item. Deeply calming stone that eases anxiety, quietens an overactive mind, and supports patience and restful sleep. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Deeply calming stone that eases anxiety, quietens an overactive mind, and supports patience and restful sleep.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"The Seven Chakra Mala is designed using seven natural crystals, each representing one of the body’s energy centers (chakras). This mala helps balance, align, and activate all seven chakras, promoting overall physical, emotional, and spiritual harmony.\",\n  \"whoShouldWear\": [\n    \"Anyone seeking overall balance and energy alignment\",\n    \"People experiencing emotional imbalance or energy blockages\",\n    \"Those practicing meditation, yoga, or spiritual healing\",\n    \"Ideal for beginners and experienced crystal users\"\n  ],\n  \"benefits\": [\n    \"Balances and activates all seven chakras\",\n    \"Enhances mental clarity, emotional stability, and positivity\",\n    \"Supports spiritual growth and inner peace\",\n    \"Helps improve energy flow throughout the body\"\n  ],\n  \"howToWear\": [\n    \"Can be worn daily or during meditation\",\n    \"Can be used as a mala or necklace\",\n    \"Suitable for both men and women\"\n  ],\n  \"careInstructions\": [\n    \"Cleanse regularly using moonlight or incense smoke\",\n    \"Avoid water exposure\",\n    \"Store separately to maintain crystal energy\"\n  ],\n  \"disclaimer\": \"Crystals are spiritual tools and not a substitute for medical treatment.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Rose Quartz Crystal Mala is a premium quality, authentic spiritual item. The stone of unconditional love, compassion, and emotional healing. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The stone of unconditional love, compassion, and emotional healing.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Turquoise Crystal Mala is a premium quality, authentic spiritual item. Ancient stones of protection, alignment, and communication. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Throat Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Ancient stones of protection, alignment, and communication.\",\n    \"Aligns and energises the Throat Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Black Tourmaline Crystal Mala is a premium quality, authentic spiritual item. Shields against negative energy, electromagnetic frequencies, and toxic environments. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Shields against negative energy, electromagnetic frequencies, and toxic environments.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Karungali (Ebony wood) is a sacred and powerful natural wood traditionally used for protection, grounding, and spiritual strength. This mala is known to absorb negative energies and promote mental stability, courage, and discipline. It is widely used for meditation, japa, and daily spiritual wear.\",\n  \"whoShouldWear\": [\n    \"People seeking protection from negativity or evil eye\",\n    \"Those who feel mentally disturbed, anxious, or low on energy\",\n    \"Individuals practicing meditation, mantra chanting, or spiritual discipline\",\n    \"Ideal for students, professionals, and spiritually inclined people\"\n  ],\n  \"benefits\": [\n    \"Protects from negative and harmful energies\",\n    \"Enhances focus, willpower, and mental clarity\",\n    \"Promotes grounding and emotional stability\",\n    \"Supports spiritual growth and discipline\"\n  ],\n  \"howToWear\": [\n    \"Can be worn daily as a mala or necklace\",\n    \"Suitable for japa, meditation, or regular wear\",\n    \"Unisex – suitable for both men and women\"\n  ],\n  \"careInstructions\": [\n    \"Avoid water contact\",\n    \"Clean gently with a dry cloth\",\n    \"Store in a clean, dry place\"\n  ],\n  \"disclaimer\": \"This product supports spiritual well-being and does not replace medical or professional advice.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Rose Quartz Healing Comb is a premium quality, authentic spiritual item. The stone of unconditional love, compassion, and emotional healing. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The stone of unconditional love, compassion, and emotional healing.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Lapis Lazuli Anklet is a premium quality, authentic spiritual item. Traditional royal blue stone for wisdom, truth, and inner power. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Throat, Third Eye Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Traditional royal blue stone for wisdom, truth, and inner power.\",\n    \"Aligns and energises the Throat, Third Eye Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Black Tourmaline Anklet is a premium quality, authentic spiritual item. Shields against negative energy, electromagnetic frequencies, and toxic environments. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Shields against negative energy, electromagnetic frequencies, and toxic environments.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Pyrite Anklet is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Opal Face Roller is a premium quality, authentic spiritual item. Enhances cosmic consciousness, spiritual vision, and inspiration. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Enhances cosmic consciousness, spiritual vision, and inspiration.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Green Jade Face Roller is a premium quality, authentic spiritual item. Noble stone of luck, wisdom, long life, and physical health. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Noble stone of luck, wisdom, long life, and physical health.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Tiger Eye Face Roller is a premium quality, authentic spiritual item. Boosts courage, self-confidence, willpower, and personal power. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Boosts courage, self-confidence, willpower, and personal power.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Amethyst Face Roller is a premium quality, authentic spiritual item. Calms mind, increases spiritual wisdom, and supports deep meditation. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Third Eye, Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Calms mind, increases spiritual wisdom, and supports deep meditation.\",\n    \"Aligns and energises the Third Eye, Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Green Eventurine Face Roller is a premium quality, authentic spiritual item. Stone of opportunity and luck, bringing abundance and career success. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stone of opportunity and luck, bringing abundance and career success.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Rose Quartz Face Roller is a premium quality, authentic spiritual item. The stone of unconditional love, compassion, and emotional healing. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The stone of unconditional love, compassion, and emotional healing.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Green Eventurine Guasha Stone is a premium quality, authentic spiritual item. Stone of opportunity and luck, bringing abundance and career success. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stone of opportunity and luck, bringing abundance and career success.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Black Tourmaline Guasha Stone is a premium quality, authentic spiritual item. Shields against negative energy, electromagnetic frequencies, and toxic environments. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Shields against negative energy, electromagnetic frequencies, and toxic environments.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Big Crystal Tree is a premium quality, authentic spiritual item. Powerful combination of pyrite, citrine, and green aventurine to draw prosperity. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus, Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\n    \"Aligns and energises the Solar Plexus, Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Small Crystal Tree is a premium quality, authentic spiritual item. Powerful combination of pyrite, citrine, and green aventurine to draw prosperity. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus, Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\n    \"Aligns and energises the Solar Plexus, Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Shell Tree is a premium quality, authentic spiritual item. Powerful combination of pyrite, citrine, and green aventurine to draw prosperity. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus, Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\n    \"Aligns and energises the Solar Plexus, Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Plain Pyrite Frame is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Selenite Laxmi Devi Pyrite Frame is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Ganesha Pyrite Frame is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Gayatri Mantra Pyrite Duster Plate is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Selenite Plain Plate is a premium quality, authentic spiritual item. Liquid light crystal that purifies other crystals and living spaces. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Liquid light crystal that purifies other crystals and living spaces.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Selenite Lamp Model is a premium quality, authentic spiritual item. Liquid light crystal that purifies other crystals and living spaces. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Liquid light crystal that purifies other crystals and living spaces.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Custom Rashi Zodiac Bracelet is a premium quality, authentic spiritual item. Combines Tiger Eye, Hematite, and Black Obsidian for ultimate energetic shielding. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root, Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Combines Tiger Eye, Hematite, and Black Obsidian for ultimate energetic shielding.\",\n    \"Aligns and energises the Root, Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Custom Numerology Number Bracelet is a premium quality, authentic spiritual item. Powerful combination of pyrite, citrine, and green aventurine to draw prosperity. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus, Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\n    \"Aligns and energises the Solar Plexus, Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Tree Of Life Keychain is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Zibu Green Eventurine Keychain is a premium quality, authentic spiritual item. Stone of opportunity and luck, bringing abundance and career success. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stone of opportunity and luck, bringing abundance and career success.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Pyrite Keychain is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Lapis Lazuli Pyramid is a premium quality, authentic spiritual item. Traditional royal blue stone for wisdom, truth, and inner power. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Throat, Third Eye Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Traditional royal blue stone for wisdom, truth, and inner power.\",\n    \"Aligns and energises the Throat, Third Eye Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Laxmi Aura Pyramid is a premium quality, authentic spiritual item. Powerful combination of pyrite, citrine, and green aventurine to draw prosperity. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus, Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\n    \"Aligns and energises the Solar Plexus, Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Pencil Point Wand is a premium quality, authentic spiritual item. The Master Healer crystal that amplifies other stones' energy. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The Master Healer crystal that amplifies other stones' energy.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Seven Chakra Healing Wand is a premium quality, authentic spiritual item. Balances, aligns, and activates all body energy centers. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root, Sacral, Solar Plexus, Heart, Throat, Third Eye, Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Balances, aligns, and activates all body energy centers.\",\n    \"Aligns and energises the Root, Sacral, Solar Plexus, Heart, Throat, Third Eye, Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Black Tourmaline Wand is a premium quality, authentic spiritual item. Shields against negative energy, electromagnetic frequencies, and toxic environments. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Shields against negative energy, electromagnetic frequencies, and toxic environments.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Rhodonite Wand is a premium quality, authentic spiritual item. Stones of compassion, forgiveness, and emotional balance after hurt. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stones of compassion, forgiveness, and emotional balance after hurt.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Evil Eye Protective Pendant is a premium quality, authentic spiritual item. Protective talisman that shields against jealousy, glare, and bad wishes. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root, Throat Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Protective talisman that shields against jealousy, glare, and bad wishes.\",\n    \"Aligns and energises the Root, Throat Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Evil Eye Protective Bracelet is a premium quality, authentic spiritual item. Protective talisman that shields against jealousy, glare, and bad wishes. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root, Throat Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Protective talisman that shields against jealousy, glare, and bad wishes.\",\n    \"Aligns and energises the Root, Throat Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"White Sage Smudge Bundle is a premium quality, authentic spiritual item. The Master Healer crystal that amplifies other stones' energy. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The Master Healer crystal that amplifies other stones' energy.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\"description\": \"Karungali is traditionally valued in spiritual practices for its grounding and stabilizing qualities. It is commonly worn during meditation, prayer, and daily spiritual routines.\", \"whoShouldWear\": [\"People seeking to balance their Root Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages grounding and stability\", \"Supports spiritual practices\", \"Promotes inner calm\", \"Suitable for daily wear\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Meditation, prayer, spiritual practices, and daily wear..\"], \"careInstructions\": [\"Cleanse and energize by: Prayer, intention setting, or placing near incense during spiritual practice.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I remain grounded, calm, and connected to my inner strength.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\n  \"description\": \"Sri Yantra Sacred Geometry Plate is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Rose Quartz Merkaba Star is a premium quality, authentic spiritual item. The stone of unconditional love, compassion, and emotional healing. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The stone of unconditional love, compassion, and emotional healing.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Amethyst Merkaba Star is a premium quality, authentic spiritual item. Calms mind, increases spiritual wisdom, and supports deep meditation. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Third Eye, Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Calms mind, increases spiritual wisdom, and supports deep meditation.\",\n    \"Aligns and energises the Third Eye, Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Pyrite Small Sphere is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Amethyst Small Sphere is a premium quality, authentic spiritual item. Calms mind, increases spiritual wisdom, and supports deep meditation. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Third Eye, Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Calms mind, increases spiritual wisdom, and supports deep meditation.\",\n    \"Aligns and energises the Third Eye, Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Aura Booster Energy Spray is a premium quality, authentic spiritual item. The Master Healer crystal that amplifies other stones' energy. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The Master Healer crystal that amplifies other stones' energy.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Lapis Lazuli Shell Tree is a premium quality, authentic spiritual item. Traditional royal blue stone for wisdom, truth, and inner power. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Throat, Third Eye Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Traditional royal blue stone for wisdom, truth, and inner power.\",\n    \"Aligns and energises the Throat, Third Eye Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Rose Quartz Shell Tree is a premium quality, authentic spiritual item. The stone of unconditional love, compassion, and emotional healing. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The stone of unconditional love, compassion, and emotional healing.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Green Eventurine Shell Tree is a premium quality, authentic spiritual item. Stone of opportunity and luck, bringing abundance and career success. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stone of opportunity and luck, bringing abundance and career success.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Amethyst Rose Quartz Shell Tree is a premium quality, authentic spiritual item. The stone of unconditional love, compassion, and emotional healing. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The stone of unconditional love, compassion, and emotional healing.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Citrine Shell Tree is a premium quality, authentic spiritual item. The Merchant's Stone of abundance, manifestation, and positive vibes. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The Merchant's Stone of abundance, manifestation, and positive vibes.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Amethyst Shell Tree is a premium quality, authentic spiritual item. Calms mind, increases spiritual wisdom, and supports deep meditation. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Third Eye, Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Calms mind, increases spiritual wisdom, and supports deep meditation.\",\n    \"Aligns and energises the Third Eye, Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Pyrite Soap Palm Stone is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Peridot Earrings is a premium quality, authentic spiritual item. Inspires positive energy, abundance, and heart-centered joy. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Inspires positive energy, abundance, and heart-centered joy.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Green Eventurine Earrings is a premium quality, authentic spiritual item. Stone of opportunity and luck, bringing abundance and career success. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stone of opportunity and luck, bringing abundance and career success.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Rose Quartz Earrings is a premium quality, authentic spiritual item. The stone of unconditional love, compassion, and emotional healing. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The stone of unconditional love, compassion, and emotional healing.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Green Eventurine Guardian Angel is a premium quality, authentic spiritual item. Stone of opportunity and luck, bringing abundance and career success. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stone of opportunity and luck, bringing abundance and career success.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Pyrite Guardian Angel is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Citrine Guardian Angel is a premium quality, authentic spiritual item. The Merchant's Stone of abundance, manifestation, and positive vibes. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The Merchant's Stone of abundance, manifestation, and positive vibes.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Tiger Eye Guardian Angel is a premium quality, authentic spiritual item. Boosts courage, self-confidence, willpower, and personal power. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Boosts courage, self-confidence, willpower, and personal power.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Water Crystal Purification Tumble Set is a premium quality, authentic spiritual item. The Master Healer crystal that amplifies other stones' energy. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The Master Healer crystal that amplifies other stones' energy.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Aura Cleansing Ritual Bath Salt is a premium quality, authentic spiritual item. The Master Healer crystal that amplifies other stones' energy. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The Master Healer crystal that amplifies other stones' energy.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Tibetan Singing Meditation Bowl Set is a premium quality, authentic spiritual item. Calms mind, increases spiritual wisdom, and supports deep meditation. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Third Eye, Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Calms mind, increases spiritual wisdom, and supports deep meditation.\",\n    \"Aligns and energises the Third Eye, Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Ritual Manifestation Spell Jar is a premium quality, authentic spiritual item. Powerful combination of pyrite, citrine, and green aventurine to draw prosperity. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus, Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\n    \"Aligns and energises the Solar Plexus, Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Abundance Intentional Ritual Candle is a premium quality, authentic spiritual item. Powerful combination of pyrite, citrine, and green aventurine to draw prosperity. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus, Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\n    \"Aligns and energises the Solar Plexus, Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Golden Pyrite Turtle Vastu Statue is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Green Eventurine Zibu Coin is a premium quality, authentic spiritual item. Stone of opportunity and luck, bringing abundance and career success. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stone of opportunity and luck, bringing abundance and career success.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Black Tourmaline Zibu Coin is a premium quality, authentic spiritual item. Shields against negative energy, electromagnetic frequencies, and toxic environments. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Shields against negative energy, electromagnetic frequencies, and toxic environments.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Rose Quartz Zibu Coin is a premium quality, authentic spiritual item. The stone of unconditional love, compassion, and emotional healing. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The stone of unconditional love, compassion, and emotional healing.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Golden Pyrite Raw Cluster (Set Of 3) is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Kuber Manifestation Raw Stone (Set Of 3) is a premium quality, authentic spiritual item. Powerful combination of pyrite, citrine, and green aventurine to draw prosperity. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus, Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\n    \"Aligns and energises the Solar Plexus, Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Black Tourmaline is one of the strongest protective crystals, known for grounding energy and shielding against negativity. Wearing this chain helps absorb negative vibrations, protect from evil eye, and maintain emotional and energetic balance.\",\n  \"whoShouldWear\": [\n    \"People sensitive to negative environments or energies\",\n    \"Those facing stress, fear, or emotional overload\",\n    \"Individuals working in crowded or high-pressure environments\",\n    \"Anyone seeking grounding and protection\"\n  ],\n  \"benefits\": [\n    \"Powerful protection from negative energy and evil eye\",\n    \"Helps reduce stress and anxiety\",\n    \"Promotes grounding and emotional stability\",\n    \"Supports root chakra balance\"\n  ],\n  \"howToWear\": [\n    \"Can be worn daily as a necklace\",\n    \"Best worn close to the body\",\n    \"Suitable for both men and women\"\n  ],\n  \"careInstructions\": [\n    \"Cleanse regularly with incense smoke or dry salt\",\n    \"Avoid water exposure\",\n    \"Store separately\"\n  ],\n  \"disclaimer\": \"Crystals support emotional and spiritual wellness and are not a medical substitute.\"\n}",
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
    "longDesc": "{\n  \"description\": \"Irani Firoza (Turquoise) is a powerful stone of protection, wisdom, and good fortune. The large beads enhance its energy, making this chain especially effective for confidence, communication, and positive transformation. Traditionally worn to attract luck and ward off negative influences.\",\n  \"whoShouldWear\": [\n    \"People seeking protection and good fortune\",\n    \"Those wanting to improve communication and confidence\",\n    \"Individuals facing career or personal challenges\",\n    \"Ideal for spiritually inclined and energy-sensitive people\"\n  ],\n  \"benefits\": [\n    \"Protects from negative energies and misfortune\",\n    \"Enhances confidence and self-expression\",\n    \"Promotes emotional healing and positivity\",\n    \"Supports throat chakra activation\"\n  ],\n  \"howToWear\": [\n    \"Can be worn daily as a statement chain\",\n    \"Suitable for both men and women\",\n    \"Especially effective when worn regularly\"\n  ],\n  \"careInstructions\": [\n    \"Avoid water and chemicals\",\n    \"Cleanse with moonlight or incense smoke\",\n    \"Store carefully due to large bead size\"\n  ],\n  \"disclaimer\": \"Crystals are complementary tools for well-being and not a replacement for medical advice.\"\n}",
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
    "longDesc": "{\"description\": \"The Seven Chakra Om Mani Padme Hum Bracelet is designed to support balance across the body’s seven primary energy centers. Each crystal is associated with a specific chakra and is traditionally used to encourage energetic harmony, emotional well-being, and spiritual awareness. The sacred Om Mani Padme Hum bead symbolizes compassion, wisdom, and inner transformation.\", \"whoShouldWear\": [\"People seeking to balance their Root, Sacral, Solar Plexus, Heart, Throat, Third Eye, Crown Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Supports chakra alignment\", \"Encourages emotional balance\", \"Promotes mindfulness and inner peace\", \"Supports spiritual growth\", \"Suitable for meditation and daily wear\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Daily, meditation, yoga, prayer, spiritual practices..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight, selenite plate, intention setting.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I am balanced, aligned, and connected to my highest self.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Angel Aura Quartz is admired for its iridescent appearance and is traditionally associated with uplifting energy, joy, and spiritual connection. Many people use it during meditation and mindfulness practices.\", \"whoShouldWear\": [\"People seeking to balance their Crown Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages positivity\", \"Supports spiritual practices\", \"Promotes emotional upliftment\", \"Inspires optimism\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Meditation, prayer, daily wear..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight, selenite, intention setting.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I welcome peace, light, and positive energy into my life.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Karungali (Ebony Wood) is a sacred wood traditionally revered in South Indian spiritual practices for its powerful grounding, protective, and purifying properties. It is believed to ward off negative energies, shield against psychic attacks, and promote inner discipline and mental fortitude. Wearing Karungali is considered auspicious and is often recommended by astrologers for spiritual protection and stability.\", \"whoShouldWear\": [\"Individuals seeking strong grounding and protection from negative energies.\", \"People who are spiritually sensitive or feel energetically drained in public places.\", \"Those practicing daily meditation, puja, or spiritual rituals.\", \"Anyone who wants to strengthen mental discipline and inner focus.\"], \"benefits\": [\"Provides powerful grounding and energetic protection.\", \"Shields against negative energies and psychic disturbances.\", \"Enhances spiritual discipline, focus, and inner strength.\", \"Promotes mental clarity and emotional stability.\", \"Considered auspicious and suitable for daily spiritual routines.\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Meditation, prayer, puja, spiritual practices, and daily wear.\", \"Traditionally worn continuously for sustained protection and grounding.\"], \"careInstructions\": [\"Energize by placing near incense smoke or during morning prayer.\", \"Avoid contact with water, soap, and cosmetic chemicals to preserve the wood.\", \"Cleanse periodically by placing near camphor or agarbatti smoke.\", \"Store in a dry, clean velvet pouch when not in use.\"], \"affirmation\": \"I remain grounded, calm, and connected to my inner strength.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Kunzite is traditionally associated with unconditional love, compassion, and emotional well-being. Many crystal enthusiasts use it to encourage kindness, self-love, and harmonious relationships.\", \"whoShouldWear\": [\"People seeking to balance their Heart Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages self\", \"love and compassion\", \"Supports emotional balance\", \"Promotes kindness and understanding\", \"Inspires positive relationships\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Daily wear, meditation, self-care practices, and emotional reflection..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I open my heart to love, compassion, and emotional harmony.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"White Moonstone is traditionally associated with intuition, emotional balance, and inner reflection. Its gentle energy makes it a popular choice for those seeking calm and mindfulness.\", \"whoShouldWear\": [\"People seeking to balance their Crown, Third Eye Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages emotional balance\", \"Supports intuition and self\", \"awareness\", \"Promotes inner peace\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Meditation, evening relaxation, spiritual practices, and daily wear..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight charging is especially recommended.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Rainbow Fluorite is traditionally associated with mental clarity, focus, and organized thinking. It is a popular crystal among students, professionals, and those seeking greater concentration.\", \"whoShouldWear\": [\"People seeking to balance their Heart, Third Eye, Crown Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages focus and concentration\", \"Supports organized thinking\", \"Promotes mental clarity\", \"Inspires balanced decision\", \"making\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Study sessions, work, planning, and daily wear..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"My mind is focused, clear, and aligned with my goals.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"This bracelet combines Black Obsidian, traditionally associated with grounding and stability, with the sacred Om Mani Padme Hum mantra bead, a symbol of compassion, wisdom, and spiritual growth. Together they create a meaningful bracelet for meditation and mindful living.\", \"whoShouldWear\": [\"People seeking to balance their Root Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages grounding and stability\", \"Supports spiritual practices\", \"Promotes mindfulness\", \"Suitable for daily wear and meditation\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Meditation, prayer, travel, and daily wear..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight, selenite charging, and mantra chanting.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I am grounded, mindful, and connected to my inner wisdom.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Suleimani Hakeek (also known as Black Agate or Haqeeq Sulemani) is one of the most revered protective stones in Islamic spiritual tradition. It is believed to ward off the evil eye, protect against black magic and negative energies, and strengthen the wearer's mental focus, courage, and spiritual resolve. Wearing Suleimani Hakeek is considered highly auspicious and is traditionally recommended for its powerful grounding and protective qualities. It is also believed to bring clarity in times of confusion and strengthen willpower.\", \"whoShouldWear\": [\"Individuals seeking protection from the evil eye, black magic, and negative energies.\", \"People who feel vulnerable, anxious, or energetically drained.\", \"Those seeking to strengthen their mental focus, willpower, and inner strength.\", \"Anyone who follows Islamic or spiritual traditions and wants a meaningful protective stone.\"], \"benefits\": [\"Provides powerful protection from negative energies, evil eye, and psychic attacks.\", \"Shields the wearer from black magic and malefic planetary influences.\", \"Strengthens mental focus, willpower, and inner strength.\", \"Promotes grounding, stability, and emotional courage.\", \"Considered highly auspicious and spiritually protective in Islamic tradition.\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Daily wear, travel, Friday prayers, and spiritual practices.\", \"Traditionally worn continuously for sustained protection.\"], \"careInstructions\": [\"Energize by: Prayer, reciting 'Bismillah' or spiritual intentions, or moonlight charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by smudging with incense or placing near frankincense smoke.\", \"Store in a clean, dry velvet pouch when not in use.\"], \"affirmation\": \"I am strong, grounded, and protected.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Turquoise has been valued for centuries as a stone associated with wisdom, communication, and self- expression. It is often worn by those seeking confidence in speaking and authentic communication.\", \"whoShouldWear\": [\"People seeking to balance their Throat Chakra.\", \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages clear communication\", \"Supports self\", \"expression\", \"Promotes confidence and wisdom\", \"Inspires emotional balance\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Meetings, presentations, conversations, and daily wear..\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight or selenite charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I communicate with wisdom, confidence, and authenticity.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"The Earth-Tone Mother of Pearl Bracelet showcases the natural beauty of ocean-inspired shell beads in warm, earthy shades. Handcrafted with genuine shell material, this bracelet radiates understated elegance and a calming, nurturing energy. Mother of Pearl is traditionally associated with emotional protection, intuition, and inner harmony. Its connection to the ocean symbolizes depth, wisdom, and the gentle flow of life.\", \"whoShouldWear\": [\"Individuals who appreciate natural, elegant jewellery with spiritual meaning.\", \"People seeking emotional calmness and inner harmony.\", \"Those drawn to feminine, earthy energy and ocean symbolism.\", \"Anyone looking for a versatile bracelet suitable for daily wear and special occasions.\"], \"benefits\": [\"Promotes emotional balance and inner harmony.\", \"Encourages calm, intuitive thinking and clear decision-making.\", \"Connects the wearer to calming, ocean-like energy.\", \"Enhances personal style with natural, timeless elegance.\", \"Suitable for daily wear and formal occasions.\"], \"howToWear\": [\"Wear on either hand based on personal preference.\", \"Best worn during: Daily wear, social gatherings, workplace, and relaxation.\", \"Pairs beautifully with both casual and formal outfits.\"], \"careInstructions\": [\"Energize by: Moonlight charging or intention setting.\", \"Avoid prolonged contact with water, soap, and cosmetic chemicals.\", \"Wipe gently with a soft, dry cloth to maintain its lustre.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I embrace balance, beauty, and harmony in every aspect of my life.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"The Green Mother of Pearl Shell Bracelet combines timeless elegance with nature-inspired beauty. Crafted from genuine green shell material, it carries a soothing, calming energy associated with growth, renewal, and harmony. Green shell is traditionally linked to the Heart Chakra and is believed to attract abundance, nurture creativity, and bring a sense of natural balance and vitality.\", \"whoShouldWear\": [\"Individuals who love nature-inspired jewellery with spiritual significance.\", \"People seeking a boost of optimism, growth, and positive energy.\", \"Those drawn to Heart Chakra healing and emotional harmony.\", \"Anyone looking for a versatile, stylish accessory for daily or formal wear.\"], \"benefits\": [\"Encourages emotional balance, growth, and renewal.\", \"Attracts positive energy, abundance, and vitality.\", \"Nurtures creativity and a positive outlook on life.\", \"Enhances personal style with a sophisticated natural look.\", \"Suitable for everyday wear and special occasions.\"], \"howToWear\": [\"Wear on either hand based on personal preference.\", \"Best worn during: Daily wear, nature walks, meditation, and social gatherings.\", \"Pairs elegantly with both casual and formal outfits.\"], \"careInstructions\": [\"Energize by: Moonlight charging or intention setting.\", \"Avoid prolonged contact with water, soap, and cosmetic chemicals.\", \"Wipe gently with a soft, dry cloth to maintain its natural lustre.\", \"Store in a dry, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I welcome growth, positivity, and harmony into my life.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Crafted from natural shell material, the Natural Mother of Pearl Bracelet is admired for its luminous appearance and timeless appeal. It is designed for those who appreciate understated elegance and natural beauty.\", \"whoShouldWear\": [\"Individuals seeking spiritual growth, clarity, and protection in their daily life.\", \"Anyone experiencing low energy, stress, or blockages in personal development.\"], \"benefits\": [\"Encourages emotional calmness\", \"Promotes inner balance\", \"Enhances everyday style\", \"Offers a timeless and elegant appearance\"], \"howToWear\": [\"Wear on the Either Hand as recommended.\", \"Best worn during meditation, yoga, or professional work.\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight charging or intention setting.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I radiate grace, calmness, and inner harmony.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Jade has been cherished for centuries across many cultures as a powerful symbol of harmony, wisdom, purity, and abundance. Traditionally revered in Chinese culture as the 'Stone of Heaven,' Jade is associated with prosperity, longevity, and good fortune. Its gentle yet powerful energy supports emotional balance, positive decision-making, and mental clarity. The soothing green colour of Jade reflects growth, renewal, and inner harmony.\", \"whoShouldWear\": [\"People seeking emotional balance, wisdom, and inner harmony.\", \"Individuals looking to attract abundance, prosperity, and good fortune.\", \"Those navigating important life decisions who need clarity and calm judgement.\", \"Anyone seeking a timeless, elegant bracelet with deep spiritual significance.\"], \"benefits\": [\"Promotes emotional balance, inner harmony, and mental clarity.\", \"Attracts abundance, prosperity, and positive opportunities.\", \"Encourages wise decision-making and a balanced perspective.\", \"Provides a calming, stabilizing energy during stressful times.\", \"Traditionally associated with good luck, health, and longevity.\"], \"howToWear\": [\"Wear on the Left Hand as recommended to receive its energies.\", \"Best worn during: Daily wear, meditation, work, and personal growth practices.\", \"Can be worn continuously for sustained benefits.\"], \"careInstructions\": [\"Energize by: Moonlight overnight charging or selenite plate charging.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping under overnight moonlight or smudging with incense smoke.\", \"Store in a dry, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I welcome harmony, wisdom, and positive growth into my life.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Selenite is one of the most beloved high-vibration crystals, admired for its luminous, moon-like appearance and deeply purifying energy. Traditionally associated with the Crown Chakra, Selenite promotes mental clarity, spiritual awareness, and inner peace. It is widely used to cleanse and recharge other crystals, clear stagnant energies from spaces, and create a calm, harmonious environment for meditation and rest. Selenite bracelets are especially prized for their ability to keep the wearer's energy field clear and uplifted throughout the day.\", \"whoShouldWear\": [\"People seeking to clear mental fog, reduce anxiety, and promote inner calm.\", \"Individuals who practice meditation, energy healing, or spiritual rituals.\", \"Those who want to maintain a clear, clean energy field in daily life.\", \"Anyone drawn to high-vibration crystals for spiritual growth and clarity.\"], \"benefits\": [\"Clears mental fog and promotes sharp clarity of thought.\", \"Creates a calming, peaceful energy for meditation and rest.\", \"Connects the wearer to higher spiritual awareness and guidance.\", \"Acts as an energetic purifier, clearing negative energy from the aura.\", \"Harmonizes and uplifts the Crown Chakra for spiritual alignment.\"], \"howToWear\": [\"Wear on the Left Hand as recommended.\", \"Best worn during: Meditation, prayer, spiritual practices, and daily wear.\", \"Especially beneficial when worn during energy healing or bedtime wind-down routines.\"], \"careInstructions\": [\"Selenite is traditionally considered self-cleansing — it rarely needs external cleansing.\", \"Energize by: Moonlight charging or intention setting if desired.\", \"Keep away from water and moisture as Selenite can dissolve when exposed to liquids.\", \"Store in a dry, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I am surrounded by clarity, peace, and positive energy.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"The Om Mani Padme Hum + Pixiu Black Obsidian Bracelet is a powerfully meaningful piece that combines three profound spiritual symbols. Black Obsidian is traditionally associated with grounding, protection, and the clearing of negative energies. The sacred Om Mani Padme Hum mantra, engraved on each bead, represents compassion, wisdom, and spiritual transformation. The Pixiu is revered in Feng Shui as a symbol of prosperity, abundance, and protection — believed to attract wealth and guard against misfortune. Together, they create a bracelet ideal for those seeking spiritual growth, financial alignment, and energetic protection.\", \"whoShouldWear\": [\"Entrepreneurs, professionals, and individuals seeking financial growth and opportunity.\", \"People seeking grounding, energetic protection, and mental focus.\", \"Those who practice meditation, mindfulness, or chant sacred mantras.\", \"Anyone who wants to combine spiritual practice with intention-setting for abundance.\"], \"benefits\": [\"Provides powerful grounding and protection from negative energies (Black Obsidian).\", \"Invites prosperity, abundance, and financial opportunities (Pixiu).\", \"Cultivates compassion, wisdom, and spiritual growth (Om Mani Padme Hum).\", \"Promotes focus, discipline, and clarity in daily life and business.\", \"Supports deep meditation and mindfulness practices.\"], \"howToWear\": [\"Wear on the Left Hand as recommended to receive energies.\", \"Best worn during: Daily wear, meditation, prayer, spiritual practices, business activities, and goal-setting sessions.\", \"The Pixiu charm should face outward when worn on the left wrist.\"], \"careInstructions\": [\"Energize by: Moonlight charging, selenite plate charging, intention setting, or chanting 'Om Mani Padme Hum' 21 times while holding the bracelet.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping under overnight moonlight or smudging with incense smoke.\", \"Store in a dry, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I am grounded, focused, and open to prosperity, wisdom, and positive opportunities.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"The Aquarius Zodiac Bracelet is thoughtfully curated for those born under the Aquarius sign (January 20 – February 18). Aquarius is the visionary of the zodiac — innovative, independent, and forward-thinking. This bracelet channels energies that amplify Aquarius's natural gifts of creativity, intellectual curiosity, and humanitarian spirit, while supporting personal growth and authentic self-expression.\", \"whoShouldWear\": [\"Individuals born under Aquarius (January 20 – February 18).\", \"Creative thinkers, innovators, and those who value independence.\", \"Those seeking to enhance their originality and intellectual clarity.\", \"Humanitarians, reformers, and forward-thinking individuals.\", \"Anyone resonating with Aquarius energy — curiosity, vision, and freedom.\"], \"benefits\": [\"Enhances creative thinking, innovation, and original ideas.\", \"Fosters independence, authenticity, and freedom of expression.\", \"Supports personal growth and continuous self-discovery.\", \"Encourages intellectual exploration and open-mindedness.\", \"Promotes clarity of thought and visionary perspective.\", \"Strengthens the Third Eye and Crown chakras for higher insight.\"], \"howToWear\": [\"Wear on the Left Hand to receive and absorb the bracelet's positive energies.\", \"Best worn during: Daily wear, creative projects, meditation, study, and intention-setting.\", \"Set a personal intention while putting on the bracelet each morning.\"], \"careInstructions\": [\"Energize by: Moonlight charging (place under full moonlight overnight), selenite plate charging, or intention setting.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, clean velvet pouch when not in use.\"], \"affirmation\": \"I embrace my uniqueness and confidently create my own path.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"The Aries Zodiac Bracelet is crafted for the bold and spirited individuals born under the Aries sign (March 21 – April 19). As the first sign of the zodiac, Aries is defined by courage, confidence, and passionate drive. This bracelet amplifies Aries's natural leadership qualities and fiery energy, helping to sustain motivation, overcome obstacles, and charge forward with purpose and determination.\", \"whoShouldWear\": [\"Individuals born under Aries (March 21 – April 19).\", \"Leaders, entrepreneurs, and trailblazers seeking confidence and drive.\", \"Those facing new challenges, projects, or life chapters requiring courage.\", \"Anyone wanting to boost motivation, willpower, and decisive action.\", \"People resonating with bold, pioneering, and ambitious energy.\"], \"benefits\": [\"Builds confidence, self-assurance, and courage to take bold action.\", \"Fuels motivation, ambition, and unstoppable drive.\", \"Enhances leadership qualities and decision-making ability.\", \"Encourages resilience — bouncing back quickly from setbacks.\", \"Promotes clarity of purpose and direction.\", \"Grounds the Root Chakra while energizing the Solar Plexus for balanced power.\"], \"howToWear\": [\"Wear on the Left Hand to receive and amplify the bracelet's energies.\", \"Best worn during: Daily wear, important meetings, competitive events, fitness, and goal-setting.\", \"Set a courageous intention each morning while wearing it.\"], \"careInstructions\": [\"Energize by: Moonlight charging or intention setting while focusing on your goals.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, clean velvet pouch when not in use.\"], \"affirmation\": \"I move forward with courage, confidence, and purpose.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"The Cancer Zodiac Bracelet is lovingly designed for those born under the Cancer sign (June 21 – July 22). Cancer is the most emotionally intuitive and nurturing sign of the zodiac — deeply empathetic, compassionate, and connected to their inner world. This bracelet supports Cancer's emotional nature, enhancing intuition, promoting inner peace, and encouraging self-nurturing alongside caring for others.\", \"whoShouldWear\": [\"Individuals born under Cancer (June 21 – July 22).\", \"Empaths, healers, and nurturers seeking emotional support.\", \"Those going through emotional transitions or healing processes.\", \"Anyone wanting to deepen their intuition and emotional intelligence.\", \"People seeking comfort, inner peace, and compassionate connection.\"], \"benefits\": [\"Promotes emotional balance, stability, and inner harmony.\", \"Heightens intuition, sensitivity, and psychic awareness.\", \"Cultivates compassion, empathy, and nurturing energy.\", \"Creates a sense of inner peace, calm, and emotional safety.\", \"Supports emotional healing and letting go of past wounds.\", \"Strengthens the Heart and Sacral chakras for emotional flow and warmth.\"], \"howToWear\": [\"Wear on the Left Hand to absorb nurturing and emotionally healing energies.\", \"Best worn during: Daily wear, meditation, journaling, family time, and emotional processing.\", \"Charge especially under full moonlight — Cancer is deeply connected to lunar energy.\"], \"careInstructions\": [\"Energize by: Moonlight charging (especially recommended for Cancer bracelet), intention setting.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, clean velvet pouch when not in use.\"], \"affirmation\": \"I trust my intuition and nurture myself with love and compassion.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"The Capricorn Zodiac Bracelet is meticulously crafted for those born under the Capricorn sign (December 22 – January 19). Capricorn is the ambitious achiever and master builder of the zodiac — disciplined, patient, and unwavering in the pursuit of goals. This bracelet supports Capricorn's determined nature, strengthening focus, amplifying ambition, and providing the grounded stability needed to reach the highest summits of success.\", \"whoShouldWear\": [\"Individuals born under Capricorn (December 22 – January 19).\", \"Ambitious professionals, executives, and long-term goal achievers.\", \"Those seeking greater discipline, structure, and focus in their lives.\", \"Entrepreneurs and career-driven individuals building toward lasting success.\", \"Anyone resonating with steady, determined, and goal-oriented energy.\"], \"benefits\": [\"Strengthens discipline, focus, and organizational skills.\", \"Supports ambition, goal-setting, and long-term planning.\", \"Grounds and stabilizes energy for steady, sustained progress.\", \"Encourages perseverance through challenges and setbacks.\", \"Attracts opportunities for professional success and achievement.\", \"Fortifies the Root Chakra for stability and the Solar Plexus for confidence.\"], \"howToWear\": [\"Wear on the Left Hand to receive the grounding and ambitious energies.\", \"Best worn during: Daily wear, work, study, business meetings, and goal-setting sessions.\", \"Set a clear, specific goal as your intention when putting on the bracelet.\"], \"careInstructions\": [\"Energize by: Moonlight charging or intention setting focused on your goals.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, clean velvet pouch when not in use.\"], \"affirmation\": \"I remain focused, disciplined, and committed to my goals.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"The Gemini Zodiac Bracelet is vibrantly designed for those born under the Gemini sign (May 21 – June 20). Gemini is the communicator and intellectual explorer of the zodiac — curious, adaptable, witty, and endlessly fascinated by the world. This bracelet enhances Gemini's natural gifts of communication, mental agility, and creative thinking, while supporting focus and helping to channel their dynamic energy purposefully.\", \"whoShouldWear\": [\"Individuals born under Gemini (May 21 – June 20).\", \"Writers, speakers, teachers, and communicators seeking clarity and expression.\", \"Students, learners, and curious minds seeking mental stimulation.\", \"Social butterflies and networkers who thrive on connection and conversation.\", \"Creative thinkers looking to channel ideas into focused action.\"], \"benefits\": [\"Enhances communication skills, eloquence, and self-expression.\", \"Promotes adaptability, flexibility, and openness to change.\", \"Stimulates intellectual curiosity, learning, and mental sharpness.\", \"Encourages creative thinking and imaginative problem-solving.\", \"Supports clear, confident social interactions and networking.\", \"Activates the Throat Chakra for expression and the Third Eye for clarity.\"], \"howToWear\": [\"Wear on the Left Hand to amplify communicative and creative energies.\", \"Best worn during: Daily wear, presentations, creative projects, studying, and social events.\", \"Selenite plate charging or moonlight charging is especially beneficial.\"], \"careInstructions\": [\"Energize by: Moonlight charging, selenite plate charging, or intention setting.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, clean velvet pouch when not in use.\"], \"affirmation\": \"I communicate clearly and embrace new opportunities with confidence.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"The Libra Zodiac Bracelet is gracefully crafted for those born under the Libra sign (September 23 – October 22). Libra is the harmonizer and peacekeeper of the zodiac — fair-minded, diplomatic, and deeply attuned to beauty, balance, and relationships. This bracelet supports Libra's quest for harmony in all areas of life, nurturing meaningful connections, enhancing self-expression, and helping to maintain the inner equilibrium that Libra naturally seeks.\", \"whoShouldWear\": [\"Individuals born under Libra (September 23 – October 22).\", \"Diplomats, mediators, and relationship builders seeking harmony.\", \"Those working to restore balance between their personal and professional lives.\", \"Artists, aesthetes, and those who appreciate beauty and creative expression.\", \"Anyone seeking fairer, more harmonious relationships and interactions.\"], \"benefits\": [\"Restores balance and harmony in life, relationships, and decisions.\", \"Nurtures meaningful relationships and social connections.\", \"Enhances self-expression, diplomacy, and artistic creativity.\", \"Promotes inner peace, fairness, and conflict resolution.\", \"Encourages confidence in expressing thoughts and feelings.\", \"Balances the Heart Chakra for love and the Throat Chakra for authentic expression.\"], \"howToWear\": [\"Wear on the Left Hand to receive harmonizing and relationship-nurturing energies.\", \"Best worn during: Daily wear, social gatherings, creative work, and conflict resolution.\", \"Moonlight charging is especially recommended to amplify Libra's lunar connection.\"], \"careInstructions\": [\"Energize by: Moonlight charging (especially recommended), intention setting.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, clean velvet pouch when not in use.\"], \"affirmation\": \"I create balance, harmony, and positive connections in my life.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"The Pisces Zodiac Bracelet is dreamily crafted for those born under the Pisces sign (February 19 – March 20). Pisces is the most spiritually attuned and imaginative sign of the zodiac — intuitive, compassionate, and deeply connected to the unseen realms. This bracelet supports Pisces's rich inner world, deepening intuition, fostering creative inspiration, and nurturing the spiritual growth that flows naturally to this mystical sign.\", \"whoShouldWear\": [\"Individuals born under Pisces (February 19 – March 20).\", \"Spiritual seekers, mystics, and those on an inner journey of growth.\", \"Empaths, healers, and compassionate souls needing energetic support.\", \"Artists, musicians, writers, and creatives seeking deeper inspiration.\", \"Anyone wanting to strengthen their intuition and spiritual awareness.\"], \"benefits\": [\"Deepens intuition, psychic sensitivity, and spiritual awareness.\", \"Cultivates compassion, empathy, and unconditional understanding.\", \"Enhances creative inspiration, imagination, and artistic flow.\", \"Supports spiritual development and connection to higher consciousness.\", \"Promotes emotional healing, forgiveness, and inner peace.\", \"Activates the Third Eye and Crown chakras for profound intuitive insight.\"], \"howToWear\": [\"Wear on the Left Hand to absorb intuitive and spiritually uplifting energies.\", \"Best worn during: Daily wear, meditation, creative work, spiritual practice, and dreamwork.\", \"Moonlight charging is especially recommended — Pisces has the deepest lunar connection.\"], \"careInstructions\": [\"Energize by: Moonlight charging (especially recommended for Pisces bracelet), intention setting.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, clean velvet pouch when not in use.\"], \"affirmation\": \"I trust my intuition and embrace my creative spirit.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"The Sagittarius Zodiac Bracelet is boldly crafted for those born under the Sagittarius sign (November 22 – December 21). Sagittarius is the adventurous philosopher and truth-seeker of the zodiac — optimistic, freedom-loving, and endlessly hungry for wisdom and experience. This bracelet amplifies Sagittarius's expansive spirit, supporting the pursuit of knowledge, personal growth, and the courage to explore new horizons with an open and joyful heart.\", \"whoShouldWear\": [\"Individuals born under Sagittarius (November 22 – December 21).\", \"Adventurers, travelers, and explorers seeking new experiences.\", \"Truth-seekers, philosophers, and those pursuing higher wisdom.\", \"Optimists and visionaries who see opportunity in every challenge.\", \"Anyone wanting to expand their horizons and embrace growth with confidence.\"], \"benefits\": [\"Sparks an adventurous spirit, enthusiasm, and love of exploration.\", \"Expands wisdom, philosophical thinking, and higher understanding.\", \"Encourages bold personal growth and stepping beyond comfort zones.\", \"Promotes optimism, positivity, and a joyful outlook on life.\", \"Attracts positive opportunities, new experiences, and synchronicities.\", \"Energizes the Solar Plexus for confidence and the Crown for expanded awareness.\"], \"howToWear\": [\"Wear on the Left Hand to receive the bracelet's adventurous and wisdom-enhancing energies.\", \"Best worn during: Daily wear, travel, study, outdoor activities, and new ventures.\", \"Set an intention for expansion and growth when energizing the bracelet.\"], \"careInstructions\": [\"Energize by: Moonlight charging or intention setting focused on wisdom and growth.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, clean velvet pouch when not in use.\"], \"affirmation\": \"I embrace growth, wisdom, and new opportunities with confidence.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"The Taurus Zodiac Bracelet is thoughtfully crafted for those born under the Taurus sign (April 20 – May 20). Taurus is the steadfast and grounded sign of the zodiac — patient, sensuous, and deeply connected to the natural world and material abundance. This bracelet channels earthy, stabilizing energies that resonate with Taurus's nature, supporting patience, attracting prosperity, and nurturing the emotional security that allows this sign to thrive.\", \"whoShouldWear\": [\"Individuals born under Taurus (April 20 – May 20).\", \"Those seeking stability, security, and grounding in their lives.\", \"Abundance manifesters and those working toward financial prosperity.\", \"Nature lovers and those deeply connected to the physical and material world.\", \"Patient souls who appreciate beauty, comfort, and steady progress.\"], \"benefits\": [\"Grounds and stabilizes energy, providing a solid foundation.\", \"Attracts abundance, prosperity, and financial well-being.\", \"Cultivates patience, persistence, and unwavering determination.\", \"Promotes emotional security, comfort, and inner harmony.\", \"Enhances appreciation for beauty, sensory experiences, and nature.\", \"Strengthens the Root Chakra for grounding and the Heart Chakra for receptivity.\"], \"howToWear\": [\"Wear on the Left Hand to receive grounding and abundance-inviting energies.\", \"Best worn during: Daily wear, outdoor activities, manifestation practices, and relaxation.\", \"Selenite plate charging or moonlight charging enhances this bracelet's energy.\"], \"careInstructions\": [\"Energize by: Moonlight charging, selenite plate charging, or intention setting.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, clean velvet pouch when not in use.\"], \"affirmation\": \"I am grounded, patient, and open to abundance and growth.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"The Virgo Zodiac Bracelet is precisely crafted for those born under the Virgo sign (August 23 – September 22). Virgo is the meticulous analyst and dedicated healer of the zodiac — methodical, detail-oriented, and endlessly committed to growth and self-improvement. This bracelet supports Virgo's analytical mind and service-oriented heart, promoting mental clarity, organizational focus, and the practical wisdom needed to serve both self and others with excellence.\", \"whoShouldWear\": [\"Individuals born under Virgo (August 23 – September 22).\", \"Detail-oriented perfectionists and analytical thinkers.\", \"Those committed to self-improvement, personal development, and growth.\", \"Healers, wellness practitioners, and those in service-oriented professions.\", \"Anyone seeking greater clarity, organization, and purposeful focus.\"], \"benefits\": [\"Sharpens mental clarity, analytical thinking, and discernment.\", \"Promotes organization, precision, and practical problem-solving.\", \"Supports continuous self-improvement and healthy personal habits.\", \"Encourages practical wisdom and a grounded, realistic perspective.\", \"Enhances focus, productivity, and attention to detail.\", \"Energizes the Solar Plexus for confidence and the Third Eye for insight.\"], \"howToWear\": [\"Wear on the Left Hand to receive clarity-enhancing and growth-supporting energies.\", \"Best worn during: Daily wear, work, study, health routines, and self-reflection.\", \"Selenite plate charging or moonlight charging maintains this bracelet's clarity.\"], \"careInstructions\": [\"Energize by: Moonlight charging, selenite plate charging, or intention setting.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, clean velvet pouch when not in use.\"], \"affirmation\": \"I am focused, organized, and aligned with my highest potential.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Calming amethyst mala for intuition, inner peace, and deeper meditation.\", \"whoShouldWear\": [\"People seeking to balance their Third Eye and Crown Chakras.\", \"Meditators and spiritual seekers wanting calm and clarity.\", \"Anyone drawn to Amethyst's energy of peace and intuition.\"], \"benefits\": [\"Encourages relaxation and a calm, peaceful mind.\", \"Supports intuition and spiritual awareness.\", \"Aids restful sleep and stress relief.\", \"Ideal for japa meditation and mantra practice.\"], \"howToWear\": [\"Wear around the neck or wrap it on the wrist; hold during japa meditation.\", \"Use the beads to count mantras or affirmations.\", \"Best worn during meditation, prayer, and daily spiritual practice.\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight charging, selenite charging, or intention setting.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I trust my intuition and embrace inner peace.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Bright citrine mala for abundance, confidence, and positivity.\", \"whoShouldWear\": [\"People seeking to balance their Solar Plexus Chakra.\", \"Those manifesting abundance, success, and optimism.\", \"Anyone drawn to Citrine's warm, uplifting energy.\"], \"benefits\": [\"Attracts abundance, prosperity, and opportunity.\", \"Boosts confidence, motivation, and positivity.\", \"Dispels negativity and uplifts the mood.\", \"Excellent for manifestation and goal-setting meditation.\"], \"howToWear\": [\"Wear around the neck or wrap it on the wrist; hold during japa meditation.\", \"Use the beads to count mantras or affirmations.\", \"Best worn during meditation, prayer, and daily spiritual practice.\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight charging, selenite charging, or intention setting.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I attract confidence, positivity, and opportunities for growth.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Fresh green peridot mala for growth, renewal, and heart healing.\", \"whoShouldWear\": [\"People seeking to balance their Heart Chakra.\", \"Those welcoming fresh starts, growth, and renewal.\", \"Anyone drawn to Peridot's rejuvenating green energy.\"], \"benefits\": [\"Encourages personal growth and positive change.\", \"Supports emotional healing and openness.\", \"Invites fresh opportunities and abundance.\", \"Releases old patterns and renews motivation.\"], \"howToWear\": [\"Wear around the neck or wrap it on the wrist; hold during japa meditation.\", \"Use the beads to count mantras or affirmations.\", \"Best worn during meditation, prayer, and daily spiritual practice.\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight charging, selenite charging, or intention setting.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I welcome growth, positivity, and fresh opportunities.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Master-healer clear quartz pendant for clarity and amplified intention.\", \"whoShouldWear\": [\"People seeking to balance their Crown Chakra.\", \"Those wanting clarity, focus, and amplified intentions.\", \"Anyone drawn to Clear Quartz, the 'Master Crystal'.\"], \"benefits\": [\"Amplifies energy, intentions, and other crystals.\", \"Enhances mental clarity and focus.\", \"Supports meditation and spiritual connection.\", \"Promotes overall energetic balance.\"], \"howToWear\": [\"Wear around the neck so the crystal rests near the heart.\", \"Keep it close to your body for continuous energetic support.\", \"Best worn during daily wear, meditation, and intention-setting.\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight charging, selenite charging, or intention setting.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"My mind is clear, focused, and aligned with my intentions.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Bold malachite pendant for transformation, protection, and heart healing.\", \"whoShouldWear\": [\"People seeking to balance their Heart Chakra.\", \"Those moving through change and transformation.\", \"Anyone drawn to Malachite's protective, transformative energy.\"], \"benefits\": [\"Encourages positive transformation and growth.\", \"Offers strong energetic protection.\", \"Supports emotional healing and release.\", \"Promotes confidence during change.\"], \"howToWear\": [\"Wear around the neck so the crystal rests near the heart.\", \"Keep it close to your body for continuous energetic support.\", \"Best worn during daily wear, meditation, and intention-setting.\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight charging, selenite charging, or intention setting.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I embrace positive transformation and move forward with confidence.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Grounding red jasper pendant for strength, stability, and endurance.\", \"whoShouldWear\": [\"People seeking to balance their Root Chakra.\", \"Those needing grounding, stamina, and resilience.\", \"Anyone drawn to Red Jasper's steady, strengthening energy.\"], \"benefits\": [\"Encourages grounding and stability.\", \"Builds strength, stamina, and endurance.\", \"Supports courage and emotional resilience.\", \"Promotes a calm, steady sense of security.\"], \"howToWear\": [\"Wear around the neck so the crystal rests near the heart.\", \"Keep it close to your body for continuous energetic support.\", \"Best worn during daily wear, meditation, and intention-setting.\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight charging, selenite charging, or intention setting.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I am grounded, strong, and resilient.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Sunny yellow calcite pendant for confidence, energy, and optimism.\", \"whoShouldWear\": [\"People seeking to balance their Solar Plexus Chakra.\", \"Those wanting a boost of confidence and motivation.\", \"Anyone drawn to Yellow Calcite's warm, energizing light.\"], \"benefits\": [\"Boosts confidence and self-belief.\", \"Energizes the mind and lifts the mood.\", \"Encourages motivation and optimism.\", \"Clears stagnant energy and inspires action.\"], \"howToWear\": [\"Wear around the neck so the crystal rests near the heart.\", \"Keep it close to your body for continuous energetic support.\", \"Best worn during daily wear, meditation, and intention-setting.\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight charging, selenite charging, or intention setting.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I radiate confidence, warmth, and positive energy.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Designer tiger eye pendant for courage, confidence, and clear focus.\", \"whoShouldWear\": [\"People seeking to balance their Solar Plexus and Root Chakras.\", \"Those wanting courage, confidence, and grounded focus.\", \"Anyone drawn to a statement Tiger Eye piece.\"], \"benefits\": [\"Builds confidence, courage, and willpower.\", \"Sharpens focus and supports clear decisions.\", \"Grounds and protects against negativity.\", \"A bold designer piece for daily wear.\"], \"howToWear\": [\"Wear around the neck so the crystal rests near the heart.\", \"Keep it close to your body for continuous energetic support.\", \"Best worn during daily wear, meditation, and intention-setting.\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight charging, selenite charging, or intention setting.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I move forward with confidence, courage, and clarity.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Sacred rudraksha beads set in silver for calm, protection, and spiritual focus.\", \"whoShouldWear\": [\"People seeking grounding, calm, and spiritual protection.\", \"Meditators and those on a devotional path.\", \"Anyone drawn to the sacred energy of Rudraksha.\"], \"benefits\": [\"Calms the mind and steadies the nervous system.\", \"Offers spiritual protection and positive energy.\", \"Supports meditation, focus, and devotion.\", \"Silver capping adds durability and elegance.\"], \"howToWear\": [\"Wear on the left hand to receive the crystal's energies.\", \"Keep close to your body for continuous support.\", \"Best worn during daily wear, meditation, and spiritual practice.\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight charging, selenite charging, or intention setting.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I am calm, protected, and spiritually connected.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\": \"Traditional rudraksha mala with silver detailing for meditation and devotion.\", \"whoShouldWear\": [\"People seeking a sacred mala for daily practice.\", \"Meditators counting mantras and affirmations.\", \"Anyone drawn to the grounding energy of Rudraksha.\"], \"benefits\": [\"Supports japa meditation and mantra practice.\", \"Calms the mind and deepens spiritual focus.\", \"Provides protection and positive energy.\", \"Silver detailing adds beauty and durability.\"], \"howToWear\": [\"Wear around the neck or wrap it on the wrist; hold during japa meditation.\", \"Use the beads to count mantras or affirmations.\", \"Best worn during meditation, prayer, and daily spiritual practice.\"], \"careInstructions\": [\"Cleanse and energize by: Moonlight charging, selenite charging, or intention setting.\", \"Avoid contact with water, soap, and cosmetic chemicals.\", \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\", \"Store in a dry, safe, clean velvet pouch or container when not in use.\"], \"affirmation\": \"I am calm, protected, and spiritually connected.\", \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"}",
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
    "longDesc": "{\"description\":\"Complete chakra balancing, protection, and positive energy amplification.\",\"whoShouldWear\":[\"People seeking to balance their Root, Sacral, Solar Plexus, Heart, Throat, Third Eye, Crown Chakras.\"],\"benefits\":[\"Complete chakra balancing, protection, and positive energy amplification.\",\"Premium quality handselected crystal bracelet\"],\"howToWear\":[\"Wear on Left Hand or Keep close to your body\"],\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals\",\"Cleanse under moonlight or smudge with incense smoke\"],\"disclaimer\":\"Crystals are spiritual tools and not a substitute for medical treatment.\"}",
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
    "longDesc": "{\"description\":\"Elegantly designed to invite confidence, determination, and professional opportunities.\",\"whoShouldWear\":[\"People seeking to balance their Solar Plexus, Heart Chakras.\"],\"benefits\":[\"Elegantly designed to invite confidence, determination, and professional opportunities.\",\"Premium quality handselected crystal bracelet\"],\"howToWear\":[\"Wear on Left Hand or Keep close to your body\"],\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals\",\"Cleanse under moonlight or smudge with incense smoke\"],\"disclaimer\":\"Crystals are spiritual tools and not a substitute for medical treatment.\"}",
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
    "longDesc": "{\"description\":\"Supports clarity, motivation, leadership, and advancement in career paths.\",\"whoShouldWear\":[\"People seeking to balance their Solar Plexus, Third Eye Chakras.\"],\"benefits\":[\"Supports clarity, motivation, leadership, and advancement in career paths.\",\"Premium quality handselected crystal bracelet\"],\"howToWear\":[\"Wear on Left Hand or Keep close to your body\"],\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals\",\"Cleanse under moonlight or smudge with incense smoke\"],\"disclaimer\":\"Crystals are spiritual tools and not a substitute for medical treatment.\"}",
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
    "longDesc": "{\"description\":\"Nurturing energy supporting fertility, emotional comfort, and feminine balance.\",\"whoShouldWear\":[\"People seeking to balance their Sacral, Heart Chakras.\"],\"benefits\":[\"Nurturing energy supporting fertility, emotional comfort, and feminine balance.\",\"Premium quality handselected crystal bracelet\"],\"howToWear\":[\"Wear on Left Hand or Keep close to your body\"],\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals\",\"Cleanse under moonlight or smudge with incense smoke\"],\"disclaimer\":\"Crystals are spiritual tools and not a substitute for medical treatment.\"}",
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
    "longDesc": "{\"description\":\"Invites luck, positivity, synchronicity, and general well-being.\",\"whoShouldWear\":[\"People seeking to balance their Solar Plexus, Crown Chakras.\"],\"benefits\":[\"Invites luck, positivity, synchronicity, and general well-being.\",\"Premium quality handselected crystal bracelet\"],\"howToWear\":[\"Wear on Left Hand or Keep close to your body\"],\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals\",\"Cleanse under moonlight or smudge with incense smoke\"],\"disclaimer\":\"Crystals are spiritual tools and not a substitute for medical treatment.\"}",
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
    "longDesc": "{\"description\":\"Harmonises emotional healing, compassion, and positive opportunities.\",\"whoShouldWear\":[\"People seeking to balance their Heart, Solar Plexus Chakras.\"],\"benefits\":[\"Harmonises emotional healing, compassion, and positive opportunities.\",\"Premium quality handselected crystal bracelet\"],\"howToWear\":[\"Wear on Left Hand or Keep close to your body\"],\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals\",\"Cleanse under moonlight or smudge with incense smoke\"],\"disclaimer\":\"Crystals are spiritual tools and not a substitute for medical treatment.\"}",
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
    "longDesc": "{\"description\":\"Encourages gentle communication, emotional calm, and self-love.\",\"whoShouldWear\":[\"People seeking to balance their Heart, Throat Chakras.\"],\"benefits\":[\"Encourages gentle communication, emotional calm, and self-love.\",\"Premium quality handselected crystal bracelet\"],\"howToWear\":[\"Wear on Left Hand or Keep close to your body\"],\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals\",\"Cleanse under moonlight or smudge with incense smoke\"],\"disclaimer\":\"Crystals are spiritual tools and not a substitute for medical treatment.\"}",
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
    "longDesc": "{\"description\":\"Formulated to align with prosperity, abundance mindset, and client attraction.\",\"whoShouldWear\":[\"People seeking to balance their Solar Plexus, Heart Chakras.\"],\"benefits\":[\"Formulated to align with prosperity, abundance mindset, and client attraction.\",\"Premium quality handselected crystal bracelet\"],\"howToWear\":[\"Wear on Left Hand or Keep close to your body\"],\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals\",\"Cleanse under moonlight or smudge with incense smoke\"],\"disclaimer\":\"Crystals are spiritual tools and not a substitute for medical treatment.\"}",
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
    "longDesc": "{\"description\":\"Combines grounding protective stones to secure energy and wellness.\",\"whoShouldWear\":[\"People seeking to balance their Root, Heart Chakras.\"],\"benefits\":[\"Combines grounding protective stones to secure energy and wellness.\",\"Premium quality handselected crystal bracelet\"],\"howToWear\":[\"Wear on Left Hand or Keep close to your body\"],\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals\",\"Cleanse under moonlight or smudge with incense smoke\"],\"disclaimer\":\"Crystals are spiritual tools and not a substitute for medical treatment.\"}",
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
    "longDesc": "{\"description\":\"Aids in clearing mental blockages, enhancing meditation, and auric cleansing.\",\"whoShouldWear\":[\"People seeking to balance their Crown, Third Eye Chakras.\"],\"benefits\":[\"Aids in clearing mental blockages, enhancing meditation, and auric cleansing.\",\"Premium quality handselected crystal bracelet\"],\"howToWear\":[\"Wear on Left Hand or Keep close to your body\"],\"careInstructions\":[\"Avoid contact with water, soap, and cosmetic chemicals\",\"Cleanse under moonlight or smudge with incense smoke\"],\"disclaimer\":\"Crystals are spiritual tools and not a substitute for medical treatment.\"}",
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
    "longDesc": "{\"description\":\"Intuitively prepared spell jar aligned with attracting harmony, self-love, and relationships.\",\"whoShouldWear\":[\"People seeking to balance their Heart Chakras.\"],\"benefits\":[\"Intuitively prepared spell jar aligned with attracting harmony, self-love, and relationships.\",\"Premium quality ritually prepared spell jar\"],\"howToWear\":[\"Place in your clean pocket, purse, or room\"],\"careInstructions\":[\"Keep in dry place\",\"Recharge under moonlight\"],\"disclaimer\":\"Crystals and spell jars are spiritual tools and not a substitute for medical treatment.\"}",
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
    "longDesc": "{\"description\":\"Crafted with protective herbs, black obsidian, and salt to block negative energies.\",\"whoShouldWear\":[\"People seeking to balance their Root Chakras.\"],\"benefits\":[\"Crafted with protective herbs, black obsidian, and salt to block negative energies.\",\"Premium quality ritually prepared spell jar\"],\"howToWear\":[\"Place in your clean pocket, purse, or room\"],\"careInstructions\":[\"Keep in dry place\",\"Recharge under moonlight\"],\"disclaimer\":\"Crystals and spell jars are spiritual tools and not a substitute for medical treatment.\"}",
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
    "longDesc": "{\"description\":\"Filled with citrine, pyrite, and positive intent to boost confidence and manifestation.\",\"whoShouldWear\":[\"People seeking to balance their Solar Plexus Chakras.\"],\"benefits\":[\"Filled with citrine, pyrite, and positive intent to boost confidence and manifestation.\",\"Premium quality ritually prepared spell jar\"],\"howToWear\":[\"Place in your clean pocket, purse, or room\"],\"careInstructions\":[\"Keep in dry place\",\"Recharge under moonlight\"],\"disclaimer\":\"Crystals and spell jars are spiritual tools and not a substitute for medical treatment.\"}",
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
    "longDesc": "{\"description\":\"Dressed with money-drawing herbs and crystals to align with wealth and abundance.\",\"whoShouldWear\":[\"People seeking to balance their Solar Plexus, Heart Chakras.\"],\"benefits\":[\"Dressed with money-drawing herbs and crystals to align with wealth and abundance.\",\"Premium quality ritually prepared spell jar\"],\"howToWear\":[\"Place in your clean pocket, purse, or room\"],\"careInstructions\":[\"Keep in dry place\",\"Recharge under moonlight\"],\"disclaimer\":\"Crystals and spell jars are spiritual tools and not a substitute for medical treatment.\"}",
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
    "longDesc": "{\"description\":\"Ritually sealed to bring positive energy, joy, and good fortune into your space.\",\"whoShouldWear\":[\"People seeking to balance their Solar Plexus Chakras.\"],\"benefits\":[\"Ritually sealed to bring positive energy, joy, and good fortune into your space.\",\"Premium quality ritually prepared spell jar\"],\"howToWear\":[\"Place in your clean pocket, purse, or room\"],\"careInstructions\":[\"Keep in dry place\",\"Recharge under moonlight\"],\"disclaimer\":\"Crystals and spell jars are spiritual tools and not a substitute for medical treatment.\"}",
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
    "longDesc": "{\"description\":\"Our Mini Spell Jar is a pocket-sized spiritual tool, meticulously layered with intention-specific crystals, sacred dried herbs, and sealed with custom ritual wax.\",\"whoShouldWear\":[\"People seeking a portable grounding and intention tool.\",\"Anyone needing a compact protective charm for daily carry.\"],\"benefits\":[\"Perfect pocket size for daily travel and carry\",\"Hand-layered with authentic high-resonance crystals\",\"Individually sealed and ritually cleansed\"],\"howToWear\":[\"Carry in your pocket, bag, purse, or place on a personal altar.\"],\"careInstructions\":[\"Keep in a dry, safe space.\",\"Recharge under the full moonlight or smudge with incense smoke.\"],\"disclaimer\":\"Spell jars are spiritual tools and not a substitute for professional medical or mental health treatment.\"}",
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
