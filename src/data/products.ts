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
  longDesc?: string;
  chakras: string[];
}

export const products: Product[] = [
  {
    "id": "triple-protection-bracelet",
    "name": "Triple Protection Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1850,
    "originalPrice": 2220,
    "image": "/images/crystals/amethyst.png",
    "badge": null,
    "desc": "Combines Tiger Eye, Hematite, and Black Obsidian for ultimate energetic shielding.",
    "longDesc": "{\n  \"description\": \"Triple Protection Crystal Bracelet is a premium quality, authentic spiritual item. Combines Tiger Eye, Hematite, and Black Obsidian for ultimate energetic shielding. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root, Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Combines Tiger Eye, Hematite, and Black Obsidian for ultimate energetic shielding.\",\n    \"Aligns and energises the Root, Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root",
      "Solar Plexus"
    ]
  },
  {
    "id": "money-magnet-bracelet",
    "name": "Money Magnet Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1950,
    "originalPrice": 2340,
    "image": "/images/crystals/rosequartz.png",
    "badge": null,
    "desc": "Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.",
    "longDesc": "{\n  \"description\": \"Money Magnet Crystal Bracelet is a premium quality, authentic spiritual item. Powerful combination of pyrite, citrine, and green aventurine to draw prosperity. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus, Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\n    \"Aligns and energises the Solar Plexus, Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus",
      "Heart"
    ]
  },
  {
    "id": "rose-quartz-bracelet",
    "name": "Rose Quartz Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 950,
    "originalPrice": 1140,
    "image": "/images/crystals/citrine.png",
    "badge": null,
    "desc": "The stone of unconditional love, compassion, and emotional healing.",
    "longDesc": "{\n  \"description\": \"Rose Quartz Crystal Bracelet is a premium quality, authentic spiritual item. The stone of unconditional love, compassion, and emotional healing. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The stone of unconditional love, compassion, and emotional healing.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "seven-chakra-bracelet",
    "name": "Seven Chakra Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1650,
    "originalPrice": 1980,
    "image": "/images/crystals/blacktourmaline.png",
    "badge": null,
    "desc": "Balances, aligns, and activates all body energy centers.",
    "longDesc": "{\n  \"description\": \"Seven Chakra Crystal Bracelet is a premium quality, authentic spiritual item. Balances, aligns, and activates all body energy centers. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root, Sacral, Solar Plexus, Heart, Throat, Third Eye, Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Balances, aligns, and activates all body energy centers.\",\n    \"Aligns and energises the Root, Sacral, Solar Plexus, Heart, Throat, Third Eye, Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "id": "black-tourmaline-bracelet",
    "name": "Black Tourmaline Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1050,
    "originalPrice": 1260,
    "image": "/images/crystals/clearquartz.png",
    "badge": null,
    "desc": "Shields against negative energy, electromagnetic frequencies, and toxic environments.",
    "longDesc": "{\n  \"description\": \"Black Tourmaline Crystal Bracelet is a premium quality, authentic spiritual item. Shields against negative energy, electromagnetic frequencies, and toxic environments. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Shields against negative energy, electromagnetic frequencies, and toxic environments.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root"
    ]
  },
  {
    "id": "irani-firoza-bracelet",
    "name": "Irani Firoza Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 2450,
    "originalPrice": 2940,
    "image": "/images/crystals/selenite.png",
    "badge": null,
    "desc": "Genuine Irani Turquoise for confidence, public speaking, and clear communication.",
    "longDesc": "{\n  \"description\": \"Irani Firoza Crystal Bracelet is a premium quality, authentic spiritual item. Genuine Irani Turquoise for confidence, public speaking, and clear communication. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Throat Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Genuine Irani Turquoise for confidence, public speaking, and clear communication.\",\n    \"Aligns and energises the Throat Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Throat"
    ]
  },
  {
    "id": "green-eventurine-bracelet",
    "name": "Green Eventurine Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 950,
    "originalPrice": 1140,
    "image": "/images/crystals/tigerseye.png",
    "badge": null,
    "desc": "Stone of opportunity and luck, bringing abundance and career success.",
    "longDesc": "{\n  \"description\": \"Green Eventurine Crystal Bracelet is a premium quality, authentic spiritual item. Stone of opportunity and luck, bringing abundance and career success. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stone of opportunity and luck, bringing abundance and career success.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "pyrite-bracelet",
    "name": "Pyrite Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1250,
    "originalPrice": 1500,
    "image": "/images/crystals/greenaventurine.png",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\n  \"description\": \"Pyrite Crystal Bracelet is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "amethyst-bracelet",
    "name": "Amethyst Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1050,
    "originalPrice": 1260,
    "image": "/images/crystals/lapislazuli.png",
    "badge": null,
    "desc": "Calms mind, increases spiritual wisdom, and supports deep meditation.",
    "longDesc": "{\n  \"description\": \"Amethyst Crystal Bracelet is a premium quality, authentic spiritual item. Calms mind, increases spiritual wisdom, and supports deep meditation. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Third Eye, Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Calms mind, increases spiritual wisdom, and supports deep meditation.\",\n    \"Aligns and energises the Third Eye, Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Third Eye",
      "Crown"
    ]
  },
  {
    "id": "citrine-bracelet",
    "name": "Citrine Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1350,
    "originalPrice": 1620,
    "image": "/images/crystals/amethyst.png",
    "badge": null,
    "desc": "The Merchant's Stone of abundance, manifestation, and positive vibes.",
    "longDesc": "{\n  \"description\": \"Citrine Crystal Bracelet is a premium quality, authentic spiritual item. The Merchant's Stone of abundance, manifestation, and positive vibes. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The Merchant's Stone of abundance, manifestation, and positive vibes.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "clear-quartz-bracelet",
    "name": "Clear Quartz Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 950,
    "originalPrice": 1140,
    "image": "/images/crystals/rosequartz.png",
    "badge": null,
    "desc": "The Master Healer crystal that amplifies other stones' energy.",
    "longDesc": "{\n  \"description\": \"Clear Quartz Crystal Bracelet is a premium quality, authentic spiritual item. The Master Healer crystal that amplifies other stones' energy. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The Master Healer crystal that amplifies other stones' energy.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Crown"
    ]
  },
  {
    "id": "om-mani-padmehum-bracelet",
    "name": "Om Mani Padmehum Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/crystals/citrine.png",
    "badge": null,
    "desc": "Engraved with the sacred Buddhist mantra of compassion and wisdom.",
    "longDesc": "{\n  \"description\": \"Om Mani Padmehum Crystal Bracelet is a premium quality, authentic spiritual item. Engraved with the sacred Buddhist mantra of compassion and wisdom. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown, Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Engraved with the sacred Buddhist mantra of compassion and wisdom.\",\n    \"Aligns and energises the Crown, Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Crown",
      "Heart"
    ]
  },
  {
    "id": "smoky-quartz-bracelet",
    "name": "Smoky Quartz Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1050,
    "originalPrice": 1260,
    "image": "/images/crystals/blacktourmaline.png",
    "badge": null,
    "desc": "Grounds excess energy and relieves anxiety, stress, or fear.",
    "longDesc": "{\n  \"description\": \"Smoky Quartz Crystal Bracelet is a premium quality, authentic spiritual item. Grounds excess energy and relieves anxiety, stress, or fear. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Grounds excess energy and relieves anxiety, stress, or fear.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root"
    ]
  },
  {
    "id": "red-jasper-bracelet",
    "name": "Red Jasper Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 850,
    "originalPrice": 1020,
    "image": "/images/crystals/clearquartz.png",
    "badge": null,
    "desc": "Carries strong grounding energy, boosting physical strength and stamina.",
    "longDesc": "{\n  \"description\": \"Red Jasper Crystal Bracelet is a premium quality, authentic spiritual item. Carries strong grounding energy, boosting physical strength and stamina. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Carries strong grounding energy, boosting physical strength and stamina.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root"
    ]
  },
  {
    "id": "dalmatian-jasper-bracelet",
    "name": "Dalmatian Jasper Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 950,
    "originalPrice": 1140,
    "image": "/images/crystals/selenite.png",
    "badge": null,
    "desc": "Brings a sense of playfulness and joy, breaking down analytical walls.",
    "longDesc": "{\n  \"description\": \"Dalmatian Jasper Crystal Bracelet is a premium quality, authentic spiritual item. Brings a sense of playfulness and joy, breaking down analytical walls. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Brings a sense of playfulness and joy, breaking down analytical walls.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root"
    ]
  },
  {
    "id": "shungite-bracelet",
    "name": "Shungite Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1550,
    "originalPrice": 1860,
    "image": "/images/crystals/tigerseye.png",
    "badge": null,
    "desc": "Ancient carbon mineral renowned for EMF protection and purification.",
    "longDesc": "{\n  \"description\": \"Shungite Crystal Bracelet is a premium quality, authentic spiritual item. Ancient carbon mineral renowned for EMF protection and purification. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Ancient carbon mineral renowned for EMF protection and purification.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root"
    ]
  },
  {
    "id": "tiger-eye-bracelet",
    "name": "Tiger Eye Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1050,
    "originalPrice": 1260,
    "image": "/images/crystals/greenaventurine.png",
    "badge": null,
    "desc": "Boosts courage, self-confidence, willpower, and personal power.",
    "longDesc": "{\n  \"description\": \"Tiger Eye Crystal Bracelet is a premium quality, authentic spiritual item. Boosts courage, self-confidence, willpower, and personal power. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Boosts courage, self-confidence, willpower, and personal power.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "golden-pyrite-bracelet",
    "name": "Golden Pyrite Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1350,
    "originalPrice": 1620,
    "image": "/images/crystals/lapislazuli.png",
    "badge": null,
    "desc": "Lustrous gold crystal to attract wealth and block negative energies.",
    "longDesc": "{\n  \"description\": \"Golden Pyrite Crystal Bracelet is a premium quality, authentic spiritual item. Lustrous gold crystal to attract wealth and block negative energies. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Lustrous gold crystal to attract wealth and block negative energies.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "angel-aura-bracelet",
    "name": "Angel Aura Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1650,
    "originalPrice": 1980,
    "image": "/images/crystals/amethyst.png",
    "badge": null,
    "desc": "Quartz bonded with metals to radiate angelic joy, peace, and spiritual light.",
    "longDesc": "{\n  \"description\": \"Angel Aura Crystal Bracelet is a premium quality, authentic spiritual item. Quartz bonded with metals to radiate angelic joy, peace, and spiritual light. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Quartz bonded with metals to radiate angelic joy, peace, and spiritual light.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Crown"
    ]
  },
  {
    "id": "evil-eye-bracelet",
    "name": "Evil Eye Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 850,
    "originalPrice": 1020,
    "image": "/images/crystals/rosequartz.png",
    "badge": null,
    "desc": "Protective talisman that shields against jealousy, glare, and bad wishes.",
    "longDesc": "{\n  \"description\": \"Evil Eye Crystal Bracelet is a premium quality, authentic spiritual item. Protective talisman that shields against jealousy, glare, and bad wishes. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root, Throat Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Protective talisman that shields against jealousy, glare, and bad wishes.\",\n    \"Aligns and energises the Root, Throat Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root",
      "Throat"
    ]
  },
  {
    "id": "angelite-bracelet",
    "name": "Angelite Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1250,
    "originalPrice": 1500,
    "image": "/images/crystals/citrine.png",
    "badge": null,
    "desc": "Supports angelic connection, gentle communication, and inner peace.",
    "longDesc": "{\n  \"description\": \"Angelite Crystal Bracelet is a premium quality, authentic spiritual item. Supports angelic connection, gentle communication, and inner peace. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Throat, Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Supports angelic connection, gentle communication, and inner peace.\",\n    \"Aligns and energises the Throat, Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Throat",
      "Crown"
    ]
  },
  {
    "id": "peridot-bracelet",
    "name": "Peridot Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/crystals/blacktourmaline.png",
    "badge": null,
    "desc": "Inspires positive energy, abundance, and heart-centered joy.",
    "longDesc": "{\n  \"description\": \"Peridot Crystal Bracelet is a premium quality, authentic spiritual item. Inspires positive energy, abundance, and heart-centered joy. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Inspires positive energy, abundance, and heart-centered joy.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "rhodonite-bracelet",
    "name": "Rhodonite Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1150,
    "originalPrice": 1380,
    "image": "/images/crystals/clearquartz.png",
    "badge": null,
    "desc": "Stones of compassion, forgiveness, and emotional balance after hurt.",
    "longDesc": "{\n  \"description\": \"Rhodonite Crystal Bracelet is a premium quality, authentic spiritual item. Stones of compassion, forgiveness, and emotional balance after hurt. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stones of compassion, forgiveness, and emotional balance after hurt.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "blue-howlite-bracelet",
    "name": "Blue Howlite Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 950,
    "originalPrice": 1140,
    "image": "/images/crystals/selenite.png",
    "badge": null,
    "desc": "Extremely calming stone, great for reducing anger and sleeplessness.",
    "longDesc": "{\n  \"description\": \"Blue Howlite Crystal Bracelet is a premium quality, authentic spiritual item. Extremely calming stone, great for reducing anger and sleeplessness. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Throat Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Extremely calming stone, great for reducing anger and sleeplessness.\",\n    \"Aligns and energises the Throat Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Throat"
    ]
  },
  {
    "id": "multiflourite-bracelet",
    "name": "Multiflourite Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1150,
    "originalPrice": 1380,
    "image": "/images/crystals/tigerseye.png",
    "badge": null,
    "desc": "Brings mental clarity, order, and structured focus to a chaotic mind.",
    "longDesc": "{\n  \"description\": \"Multiflourite Crystal Bracelet is a premium quality, authentic spiritual item. Brings mental clarity, order, and structured focus to a chaotic mind. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Third Eye Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Brings mental clarity, order, and structured focus to a chaotic mind.\",\n    \"Aligns and energises the Third Eye Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Third Eye"
    ]
  },
  {
    "id": "sulemani-hakik-bracelet",
    "name": "Sulemani Hakik Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1250,
    "originalPrice": 1500,
    "image": "/images/crystals/greenaventurine.png",
    "badge": null,
    "desc": "Traditional gemstone used to block black magic and malefic planetary influences.",
    "longDesc": "{\n  \"description\": \"Sulemani Hakik Crystal Bracelet is a premium quality, authentic spiritual item. Traditional gemstone used to block black magic and malefic planetary influences. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Traditional gemstone used to block black magic and malefic planetary influences.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root"
    ]
  },
  {
    "id": "lava-seven-chakra-bracelet",
    "name": "Lava Seven Chakra Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1250,
    "originalPrice": 1500,
    "image": "/images/crystals/lapislazuli.png",
    "badge": null,
    "desc": "Grounding volcanic rock combined with 7 chakra balancing crystals.",
    "longDesc": "{\n  \"description\": \"Lava Seven Chakra Crystal Bracelet is a premium quality, authentic spiritual item. Grounding volcanic rock combined with 7 chakra balancing crystals. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root, Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Grounding volcanic rock combined with 7 chakra balancing crystals.\",\n    \"Aligns and energises the Root, Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root",
      "Heart"
    ]
  },
  {
    "id": "red-garnet-chakra-bracelet",
    "name": "Red Garnet Chakra Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1200,
    "originalPrice": 1440,
    "image": "/images/crystals/amethyst.png",
    "badge": null,
    "desc": "A beautiful healing stone selected intuitively.",
    "longDesc": "{\n  \"description\": \"Red Garnet Chakra Crystal Bracelet is a premium quality, authentic spiritual item. A beautiful healing stone selected intuitively. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"A beautiful healing stone selected intuitively.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root"
    ]
  },
  {
    "id": "citrine-rudraksha-bracelet",
    "name": "Citrine Rudraksha Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/crystals/rosequartz.png",
    "badge": null,
    "desc": "Sacred Rudraksha seeds combined with wealth-attracting Citrine beads.",
    "longDesc": "{\n  \"description\": \"Citrine Rudraksha Crystal Bracelet is a premium quality, authentic spiritual item. Sacred Rudraksha seeds combined with wealth-attracting Citrine beads. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Sacred Rudraksha seeds combined with wealth-attracting Citrine beads.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "grey-cats-eye-bracelet",
    "name": "Grey Cats Eye Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1250,
    "originalPrice": 1500,
    "image": "/images/crystals/citrine.png",
    "badge": null,
    "desc": "Brings good luck, insight, and protection from unexpected trouble.",
    "longDesc": "{\n  \"description\": \"Grey Cats Eye Crystal Bracelet is a premium quality, authentic spiritual item. Brings good luck, insight, and protection from unexpected trouble. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Third Eye Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Brings good luck, insight, and protection from unexpected trouble.\",\n    \"Aligns and energises the Third Eye Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Third Eye"
    ]
  },
  {
    "id": "moon-stone-bracelet",
    "name": "Moon Stone Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/crystals/blacktourmaline.png",
    "badge": null,
    "desc": "Enhances intuition, divine feminine energy, and emotional healing.",
    "longDesc": "{\n  \"description\": \"Moon Stone Crystal Bracelet is a premium quality, authentic spiritual item. Enhances intuition, divine feminine energy, and emotional healing. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Third Eye, Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Enhances intuition, divine feminine energy, and emotional healing.\",\n    \"Aligns and energises the Third Eye, Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Third Eye",
      "Crown"
    ]
  },
  {
    "id": "blue-apatite-bracelet",
    "name": "Blue Apatite Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1350,
    "originalPrice": 1620,
    "image": "/images/crystals/clearquartz.png",
    "badge": null,
    "desc": "Enhances motivation, communication, and clear speaking of truth.",
    "longDesc": "{\n  \"description\": \"Blue Apatite Crystal Bracelet is a premium quality, authentic spiritual item. Enhances motivation, communication, and clear speaking of truth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Throat Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Enhances motivation, communication, and clear speaking of truth.\",\n    \"Aligns and energises the Throat Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Throat"
    ]
  },
  {
    "id": "lapis-lazuli-bracelet",
    "name": "Lapis Lazuli Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1150,
    "originalPrice": 1380,
    "image": "/images/crystals/selenite.png",
    "badge": null,
    "desc": "Traditional royal blue stone for wisdom, truth, and inner power.",
    "longDesc": "{\n  \"description\": \"Lapis Lazuli Crystal Bracelet is a premium quality, authentic spiritual item. Traditional royal blue stone for wisdom, truth, and inner power. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Throat, Third Eye Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Traditional royal blue stone for wisdom, truth, and inner power.\",\n    \"Aligns and energises the Throat, Third Eye Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Throat",
      "Third Eye"
    ]
  },
  {
    "id": "amazonite-bracelet",
    "name": "Amazonite Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1150,
    "originalPrice": 1380,
    "image": "/images/crystals/tigerseye.png",
    "badge": null,
    "desc": "Calms the nervous system and filters stressful environments.",
    "longDesc": "{\n  \"description\": \"Amazonite Crystal Bracelet is a premium quality, authentic spiritual item. Calms the nervous system and filters stressful environments. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart, Throat Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Calms the nervous system and filters stressful environments.\",\n    \"Aligns and energises the Heart, Throat Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart",
      "Throat"
    ]
  },
  {
    "id": "aquamarine-bracelet",
    "name": "Aquamarine Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1850,
    "originalPrice": 2220,
    "image": "/images/crystals/greenaventurine.png",
    "badge": null,
    "desc": "Evokes the serenity of the ocean, bringing clear, calm communication.",
    "longDesc": "{\n  \"description\": \"Aquamarine Crystal Bracelet is a premium quality, authentic spiritual item. Evokes the serenity of the ocean, bringing clear, calm communication. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Throat Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Evokes the serenity of the ocean, bringing clear, calm communication.\",\n    \"Aligns and energises the Throat Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Throat"
    ]
  },
  {
    "id": "sunstone-bracelet",
    "name": "Sunstone Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1350,
    "originalPrice": 1620,
    "image": "/images/crystals/lapislazuli.png",
    "badge": null,
    "desc": "Brings joy, leadership energy, and positive enthusiasm.",
    "longDesc": "{\n  \"description\": \"Sunstone Crystal Bracelet is a premium quality, authentic spiritual item. Brings joy, leadership energy, and positive enthusiasm. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Sacral, Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Brings joy, leadership energy, and positive enthusiasm.\",\n    \"Aligns and energises the Sacral, Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Sacral",
      "Solar Plexus"
    ]
  },
  {
    "id": "peach-moonstone-bracelet",
    "name": "Peach Moonstone Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/crystals/amethyst.png",
    "badge": null,
    "desc": "Supports emotional balance, creative flow, and loving energy.",
    "longDesc": "{\n  \"description\": \"Peach Moonstone Crystal Bracelet is a premium quality, authentic spiritual item. Supports emotional balance, creative flow, and loving energy. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Sacral Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Supports emotional balance, creative flow, and loving energy.\",\n    \"Aligns and energises the Sacral Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Sacral"
    ]
  },
  {
    "id": "strawberry-quartz-bracelet",
    "name": "Strawberry Quartz Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1250,
    "originalPrice": 1500,
    "image": "/images/crystals/rosequartz.png",
    "badge": null,
    "desc": "Radiates love, universal connection, and appreciation of beauty.",
    "longDesc": "{\n  \"description\": \"Strawberry Quartz Crystal Bracelet is a premium quality, authentic spiritual item. Radiates love, universal connection, and appreciation of beauty. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Radiates love, universal connection, and appreciation of beauty.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "morganite-bracelet",
    "name": "Morganite Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 2450,
    "originalPrice": 2940,
    "image": "/images/crystals/citrine.png",
    "badge": null,
    "desc": "Premium pink crystal carrying high-frequency heart healing energies.",
    "longDesc": "{\n  \"description\": \"Morganite Crystal Bracelet is a premium quality, authentic spiritual item. Premium pink crystal carrying high-frequency heart healing energies. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Premium pink crystal carrying high-frequency heart healing energies.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "ametrine-bracelet",
    "name": "Ametrine Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1850,
    "originalPrice": 2220,
    "image": "/images/crystals/blacktourmaline.png",
    "badge": null,
    "desc": "Stunning amethyst and citrine fusion for mental clarity and power.",
    "longDesc": "{\n  \"description\": \"Ametrine Crystal Bracelet is a premium quality, authentic spiritual item. Stunning amethyst and citrine fusion for mental clarity and power. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Third Eye, Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stunning amethyst and citrine fusion for mental clarity and power.\",\n    \"Aligns and energises the Third Eye, Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Third Eye",
      "Solar Plexus"
    ]
  },
  {
    "id": "pixu-om-mani-padmeham-bracelet",
    "name": "Pixu Om Mani Padmeham Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1750,
    "originalPrice": 2100,
    "image": "/images/crystals/clearquartz.png",
    "badge": null,
    "desc": "Feng Shui Pixiu combined with sacred Buddhist mantra beads.",
    "longDesc": "{\n  \"description\": \"Pixu Om Mani Padmeham Crystal Bracelet is a premium quality, authentic spiritual item. Feng Shui Pixiu combined with sacred Buddhist mantra beads. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root, Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Feng Shui Pixiu combined with sacred Buddhist mantra beads.\",\n    \"Aligns and energises the Root, Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root",
      "Crown"
    ]
  },
  {
    "id": "mother-pearls-bracelet",
    "name": "Mother Pearls Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1250,
    "originalPrice": 1500,
    "image": "/images/crystals/selenite.png",
    "badge": null,
    "desc": "Gently soothing shell beads bringing sea-like peace and clarity.",
    "longDesc": "{\n  \"description\": \"Mother Pearls Crystal Bracelet is a premium quality, authentic spiritual item. Gently soothing shell beads bringing sea-like peace and clarity. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Gently soothing shell beads bringing sea-like peace and clarity.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "malachite-bracelet",
    "name": "Malachite Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 2200,
    "originalPrice": 2640,
    "image": "/images/crystals/tigerseye.png",
    "badge": null,
    "desc": "Powerful transformation stone that cleanses emotional blocks.",
    "longDesc": "{\n  \"description\": \"Malachite Crystal Bracelet is a premium quality, authentic spiritual item. Powerful transformation stone that cleanses emotional blocks. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Powerful transformation stone that cleanses emotional blocks.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "chrysocolla-bracelet",
    "name": "Chrysocolla Crystal Bracelet",
    "category": "bracelets",
    "subcategory": "Bracelets",
    "price": 1950,
    "originalPrice": 2340,
    "image": "/images/crystals/greenaventurine.png",
    "badge": null,
    "desc": "Supports clear communication, feminine empowerment, and expression.",
    "longDesc": "{\n  \"description\": \"Chrysocolla Crystal Bracelet is a premium quality, authentic spiritual item. Supports clear communication, feminine empowerment, and expression. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Throat, Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Supports clear communication, feminine empowerment, and expression.\",\n    \"Aligns and energises the Throat, Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Throat",
      "Heart"
    ]
  },
  {
    "id": "green-eventurine-chips-bracelet",
    "name": "Green Eventurine Chips Bracelet",
    "category": "bracelets",
    "subcategory": "Chips Bracelet",
    "price": 950,
    "originalPrice": 1140,
    "image": "/images/crystals/lapislazuli.png",
    "badge": null,
    "desc": "Stone of opportunity and luck, bringing abundance and career success.",
    "longDesc": "{\n  \"description\": \"Green Eventurine Chips Bracelet is a premium quality, authentic spiritual item. Stone of opportunity and luck, bringing abundance and career success. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stone of opportunity and luck, bringing abundance and career success.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "moonstone-chips-bracelet",
    "name": "Moonstone Chips Bracelet",
    "category": "bracelets",
    "subcategory": "Chips Bracelet",
    "price": 1200,
    "originalPrice": 1440,
    "image": "/images/crystals/amethyst.png",
    "badge": null,
    "desc": "A beautiful healing stone selected intuitively.",
    "longDesc": "{\n  \"description\": \"Moonstone Chips Bracelet is a premium quality, authentic spiritual item. A beautiful healing stone selected intuitively. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"A beautiful healing stone selected intuitively.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root"
    ]
  },
  {
    "id": "lapis-lazuli-chips-bracelet",
    "name": "Lapis Lazuli Chips Bracelet",
    "category": "bracelets",
    "subcategory": "Chips Bracelet",
    "price": 1150,
    "originalPrice": 1380,
    "image": "/images/crystals/rosequartz.png",
    "badge": null,
    "desc": "Traditional royal blue stone for wisdom, truth, and inner power.",
    "longDesc": "{\n  \"description\": \"Lapis Lazuli Chips Bracelet is a premium quality, authentic spiritual item. Traditional royal blue stone for wisdom, truth, and inner power. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Throat, Third Eye Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Traditional royal blue stone for wisdom, truth, and inner power.\",\n    \"Aligns and energises the Throat, Third Eye Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Throat",
      "Third Eye"
    ]
  },
  {
    "id": "red-garnet-chips-bracelet",
    "name": "Red Garnet Chips Bracelet",
    "category": "bracelets",
    "subcategory": "Chips Bracelet",
    "price": 1350,
    "originalPrice": 1620,
    "image": "/images/crystals/citrine.png",
    "badge": null,
    "desc": "Stones of passion, vital life energy, courage, and root chakra activation.",
    "longDesc": "{\n  \"description\": \"Red Garnet Chips Bracelet is a premium quality, authentic spiritual item. Stones of passion, vital life energy, courage, and root chakra activation. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stones of passion, vital life energy, courage, and root chakra activation.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root"
    ]
  },
  {
    "id": "amethyst-chips-bracelet",
    "name": "Amethyst Chips Bracelet",
    "category": "bracelets",
    "subcategory": "Chips Bracelet",
    "price": 1050,
    "originalPrice": 1260,
    "image": "/images/crystals/blacktourmaline.png",
    "badge": null,
    "desc": "Calms mind, increases spiritual wisdom, and supports deep meditation.",
    "longDesc": "{\n  \"description\": \"Amethyst Chips Bracelet is a premium quality, authentic spiritual item. Calms mind, increases spiritual wisdom, and supports deep meditation. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Third Eye, Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Calms mind, increases spiritual wisdom, and supports deep meditation.\",\n    \"Aligns and energises the Third Eye, Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Third Eye",
      "Crown"
    ]
  },
  {
    "id": "clear-quartz-bangle-bracelet",
    "name": "Clear Quartz Bangle Bracelet",
    "category": "bracelets",
    "subcategory": "Bangle Bracelet",
    "price": 950,
    "originalPrice": 1140,
    "image": "/images/crystals/clearquartz.png",
    "badge": null,
    "desc": "The Master Healer crystal that amplifies other stones' energy.",
    "longDesc": "{\n  \"description\": \"Clear Quartz Bangle Bracelet is a premium quality, authentic spiritual item. The Master Healer crystal that amplifies other stones' energy. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The Master Healer crystal that amplifies other stones' energy.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Crown"
    ]
  },
  {
    "id": "opal-bangle-bracelet",
    "name": "Opal Bangle Bracelet",
    "category": "bracelets",
    "subcategory": "Bangle Bracelet",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/crystals/selenite.png",
    "badge": null,
    "desc": "Enhances cosmic consciousness, spiritual vision, and inspiration.",
    "longDesc": "{\n  \"description\": \"Opal Bangle Bracelet is a premium quality, authentic spiritual item. Enhances cosmic consciousness, spiritual vision, and inspiration. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Enhances cosmic consciousness, spiritual vision, and inspiration.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Crown"
    ]
  },
  {
    "id": "rose-quartz-bangle-bracelet",
    "name": "Rose Quartz Bangle Bracelet",
    "category": "bracelets",
    "subcategory": "Bangle Bracelet",
    "price": 950,
    "originalPrice": 1140,
    "image": "/images/crystals/tigerseye.png",
    "badge": null,
    "desc": "The stone of unconditional love, compassion, and emotional healing.",
    "longDesc": "{\n  \"description\": \"Rose Quartz Bangle Bracelet is a premium quality, authentic spiritual item. The stone of unconditional love, compassion, and emotional healing. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The stone of unconditional love, compassion, and emotional healing.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "tiger-eye-bangle-bracelet",
    "name": "Tiger Eye Bangle Bracelet",
    "category": "bracelets",
    "subcategory": "Bangle Bracelet",
    "price": 1050,
    "originalPrice": 1260,
    "image": "/images/crystals/greenaventurine.png",
    "badge": null,
    "desc": "Boosts courage, self-confidence, willpower, and personal power.",
    "longDesc": "{\n  \"description\": \"Tiger Eye Bangle Bracelet is a premium quality, authentic spiritual item. Boosts courage, self-confidence, willpower, and personal power. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Boosts courage, self-confidence, willpower, and personal power.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "lapis-lazuli-bangle-bracelet",
    "name": "Lapis Lazuli Bangle Bracelet",
    "category": "bracelets",
    "subcategory": "Bangle Bracelet",
    "price": 1150,
    "originalPrice": 1380,
    "image": "/images/crystals/lapislazuli.png",
    "badge": null,
    "desc": "Traditional royal blue stone for wisdom, truth, and inner power.",
    "longDesc": "{\n  \"description\": \"Lapis Lazuli Bangle Bracelet is a premium quality, authentic spiritual item. Traditional royal blue stone for wisdom, truth, and inner power. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Throat, Third Eye Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Traditional royal blue stone for wisdom, truth, and inner power.\",\n    \"Aligns and energises the Throat, Third Eye Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Throat",
      "Third Eye"
    ]
  },
  {
    "id": "green-eventurine-bangle-bracelet",
    "name": "Green Eventurine Bangle Bracelet",
    "category": "bracelets",
    "subcategory": "Bangle Bracelet",
    "price": 950,
    "originalPrice": 1140,
    "image": "/images/crystals/amethyst.png",
    "badge": null,
    "desc": "Stone of opportunity and luck, bringing abundance and career success.",
    "longDesc": "{\n  \"description\": \"Green Eventurine Bangle Bracelet is a premium quality, authentic spiritual item. Stone of opportunity and luck, bringing abundance and career success. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stone of opportunity and luck, bringing abundance and career success.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "amethyst-bangle-bracelet",
    "name": "Amethyst Bangle Bracelet",
    "category": "bracelets",
    "subcategory": "Bangle Bracelet",
    "price": 1050,
    "originalPrice": 1260,
    "image": "/images/crystals/rosequartz.png",
    "badge": null,
    "desc": "Calms mind, increases spiritual wisdom, and supports deep meditation.",
    "longDesc": "{\n  \"description\": \"Amethyst Bangle Bracelet is a premium quality, authentic spiritual item. Calms mind, increases spiritual wisdom, and supports deep meditation. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Third Eye, Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Calms mind, increases spiritual wisdom, and supports deep meditation.\",\n    \"Aligns and energises the Third Eye, Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Third Eye",
      "Crown"
    ]
  },
  {
    "id": "seven-chakra-bangle-bracelet",
    "name": "Seven Chakra Bangle Bracelet",
    "category": "bracelets",
    "subcategory": "Bangle Bracelet",
    "price": 1650,
    "originalPrice": 1980,
    "image": "/images/crystals/citrine.png",
    "badge": null,
    "desc": "Balances, aligns, and activates all body energy centers.",
    "longDesc": "{\n  \"description\": \"Seven Chakra Bangle Bracelet is a premium quality, authentic spiritual item. Balances, aligns, and activates all body energy centers. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root, Sacral, Solar Plexus, Heart, Throat, Third Eye, Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Balances, aligns, and activates all body energy centers.\",\n    \"Aligns and energises the Root, Sacral, Solar Plexus, Heart, Throat, Third Eye, Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
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
    "id": "pyrite-bangle-bracelet",
    "name": "Pyrite Bangle Bracelet",
    "category": "bracelets",
    "subcategory": "Bangle Bracelet",
    "price": 1250,
    "originalPrice": 1500,
    "image": "/images/crystals/blacktourmaline.png",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\n  \"description\": \"Pyrite Bangle Bracelet is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "red-jasper-bangle-bracelet",
    "name": "Red Jasper Bangle Bracelet",
    "category": "bracelets",
    "subcategory": "Bangle Bracelet",
    "price": 850,
    "originalPrice": 1020,
    "image": "/images/crystals/clearquartz.png",
    "badge": null,
    "desc": "Carries strong grounding energy, boosting physical strength and stamina.",
    "longDesc": "{\n  \"description\": \"Red Jasper Bangle Bracelet is a premium quality, authentic spiritual item. Carries strong grounding energy, boosting physical strength and stamina. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Carries strong grounding energy, boosting physical strength and stamina.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root"
    ]
  },
  {
    "id": "tree-of-life-pendant",
    "name": "Tree Of Life Crystal Pendant",
    "category": "pendants",
    "subcategory": "Pendants",
    "price": 1200,
    "originalPrice": 1440,
    "image": "/images/crystals/selenite.png",
    "badge": null,
    "desc": "A beautiful healing stone selected intuitively.",
    "longDesc": "{\n  \"description\": \"Tree Of Life Crystal Pendant is a premium quality, authentic spiritual item. A beautiful healing stone selected intuitively. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"A beautiful healing stone selected intuitively.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root"
    ]
  },
  {
    "id": "opal-pendant",
    "name": "Opal Crystal Pendant",
    "category": "pendants",
    "subcategory": "Pendants",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/crystals/tigerseye.png",
    "badge": null,
    "desc": "Enhances cosmic consciousness, spiritual vision, and inspiration.",
    "longDesc": "{\n  \"description\": \"Opal Crystal Pendant is a premium quality, authentic spiritual item. Enhances cosmic consciousness, spiritual vision, and inspiration. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Enhances cosmic consciousness, spiritual vision, and inspiration.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Crown"
    ]
  },
  {
    "id": "tiger-eye-pendant",
    "name": "Tiger Eye Crystal Pendant",
    "category": "pendants",
    "subcategory": "Pendants",
    "price": 1050,
    "originalPrice": 1260,
    "image": "/images/crystals/greenaventurine.png",
    "badge": null,
    "desc": "Boosts courage, self-confidence, willpower, and personal power.",
    "longDesc": "{\n  \"description\": \"Tiger Eye Crystal Pendant is a premium quality, authentic spiritual item. Boosts courage, self-confidence, willpower, and personal power. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Boosts courage, self-confidence, willpower, and personal power.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "rose-quartz-pendant",
    "name": "Rose Quartz Crystal Pendant",
    "category": "pendants",
    "subcategory": "Pendants",
    "price": 950,
    "originalPrice": 1140,
    "image": "/images/crystals/lapislazuli.png",
    "badge": null,
    "desc": "The stone of unconditional love, compassion, and emotional healing.",
    "longDesc": "{\n  \"description\": \"Rose Quartz Crystal Pendant is a premium quality, authentic spiritual item. The stone of unconditional love, compassion, and emotional healing. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The stone of unconditional love, compassion, and emotional healing.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "tiger-eye-designs-pendant",
    "name": "Tiger Eye Designs Crystal Pendant",
    "category": "pendants",
    "subcategory": "Pendants",
    "price": 1050,
    "originalPrice": 1260,
    "image": "/images/crystals/amethyst.png",
    "badge": null,
    "desc": "Boosts courage, self-confidence, willpower, and personal power.",
    "longDesc": "{\n  \"description\": \"Tiger Eye Designs Crystal Pendant is a premium quality, authentic spiritual item. Boosts courage, self-confidence, willpower, and personal power. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Boosts courage, self-confidence, willpower, and personal power.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "lapis-lazuli-pendant",
    "name": "Lapis Lazuli Crystal Pendant",
    "category": "pendants",
    "subcategory": "Pendants",
    "price": 1150,
    "originalPrice": 1380,
    "image": "/images/crystals/rosequartz.png",
    "badge": null,
    "desc": "Traditional royal blue stone for wisdom, truth, and inner power.",
    "longDesc": "{\n  \"description\": \"Lapis Lazuli Crystal Pendant is a premium quality, authentic spiritual item. Traditional royal blue stone for wisdom, truth, and inner power. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Throat, Third Eye Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Traditional royal blue stone for wisdom, truth, and inner power.\",\n    \"Aligns and energises the Throat, Third Eye Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Throat",
      "Third Eye"
    ]
  },
  {
    "id": "black-tourmaline-pendant",
    "name": "Black Tourmaline Crystal Pendant",
    "category": "pendants",
    "subcategory": "Pendants",
    "price": 1050,
    "originalPrice": 1260,
    "image": "/images/crystals/citrine.png",
    "badge": null,
    "desc": "Shields against negative energy, electromagnetic frequencies, and toxic environments.",
    "longDesc": "{\n  \"description\": \"Black Tourmaline Crystal Pendant is a premium quality, authentic spiritual item. Shields against negative energy, electromagnetic frequencies, and toxic environments. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Shields against negative energy, electromagnetic frequencies, and toxic environments.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root"
    ]
  },
  {
    "id": "green-eventurine-pendant",
    "name": "Green Eventurine Crystal Pendant",
    "category": "pendants",
    "subcategory": "Pendants",
    "price": 950,
    "originalPrice": 1140,
    "image": "/images/crystals/blacktourmaline.png",
    "badge": null,
    "desc": "Stone of opportunity and luck, bringing abundance and career success.",
    "longDesc": "{\n  \"description\": \"Green Eventurine Crystal Pendant is a premium quality, authentic spiritual item. Stone of opportunity and luck, bringing abundance and career success. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stone of opportunity and luck, bringing abundance and career success.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "pyrite-pendant",
    "name": "Pyrite Crystal Pendant",
    "category": "pendants",
    "subcategory": "Pendants",
    "price": 1250,
    "originalPrice": 1500,
    "image": "/images/crystals/clearquartz.png",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\n  \"description\": \"Pyrite Crystal Pendant is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "evil-eye-pendant",
    "name": "Evil Eye Crystal Pendant",
    "category": "pendants",
    "subcategory": "Pendants",
    "price": 850,
    "originalPrice": 1020,
    "image": "/images/crystals/selenite.png",
    "badge": null,
    "desc": "Protective talisman that shields against jealousy, glare, and bad wishes.",
    "longDesc": "{\n  \"description\": \"Evil Eye Crystal Pendant is a premium quality, authentic spiritual item. Protective talisman that shields against jealousy, glare, and bad wishes. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root, Throat Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Protective talisman that shields against jealousy, glare, and bad wishes.\",\n    \"Aligns and energises the Root, Throat Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root",
      "Throat"
    ]
  },
  {
    "id": "moonstone-normal-ring",
    "name": "Moonstone Classic Ring",
    "category": "rings",
    "subcategory": "Normal Rings",
    "price": 1200,
    "originalPrice": 1440,
    "image": "/images/crystals/tigerseye.png",
    "badge": null,
    "desc": "A beautiful healing stone selected intuitively.",
    "longDesc": "{\n  \"description\": \"Moonstone Classic Ring is a premium quality, authentic spiritual item. A beautiful healing stone selected intuitively. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"A beautiful healing stone selected intuitively.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root"
    ]
  },
  {
    "id": "rose-quartz-normal-ring",
    "name": "Rose Quartz Classic Ring",
    "category": "rings",
    "subcategory": "Normal Rings",
    "price": 950,
    "originalPrice": 1140,
    "image": "/images/crystals/greenaventurine.png",
    "badge": null,
    "desc": "The stone of unconditional love, compassion, and emotional healing.",
    "longDesc": "{\n  \"description\": \"Rose Quartz Classic Ring is a premium quality, authentic spiritual item. The stone of unconditional love, compassion, and emotional healing. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The stone of unconditional love, compassion, and emotional healing.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "lapis-lazuli-normal-ring",
    "name": "Lapis Lazuli Classic Ring",
    "category": "rings",
    "subcategory": "Normal Rings",
    "price": 1150,
    "originalPrice": 1380,
    "image": "/images/crystals/lapislazuli.png",
    "badge": null,
    "desc": "Traditional royal blue stone for wisdom, truth, and inner power.",
    "longDesc": "{\n  \"description\": \"Lapis Lazuli Classic Ring is a premium quality, authentic spiritual item. Traditional royal blue stone for wisdom, truth, and inner power. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Throat, Third Eye Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Traditional royal blue stone for wisdom, truth, and inner power.\",\n    \"Aligns and energises the Throat, Third Eye Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Throat",
      "Third Eye"
    ]
  },
  {
    "id": "peridot-normal-ring",
    "name": "Peridot Classic Ring",
    "category": "rings",
    "subcategory": "Normal Rings",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/crystals/amethyst.png",
    "badge": null,
    "desc": "Inspires positive energy, abundance, and heart-centered joy.",
    "longDesc": "{\n  \"description\": \"Peridot Classic Ring is a premium quality, authentic spiritual item. Inspires positive energy, abundance, and heart-centered joy. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Inspires positive energy, abundance, and heart-centered joy.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "amethyst-design-ring",
    "name": "Amethyst Design Ring",
    "category": "rings",
    "subcategory": "Design Rings",
    "price": 1050,
    "originalPrice": 1260,
    "image": "/images/crystals/rosequartz.png",
    "badge": null,
    "desc": "Calms mind, increases spiritual wisdom, and supports deep meditation.",
    "longDesc": "{\n  \"description\": \"Amethyst Design Ring is a premium quality, authentic spiritual item. Calms mind, increases spiritual wisdom, and supports deep meditation. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Third Eye, Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Calms mind, increases spiritual wisdom, and supports deep meditation.\",\n    \"Aligns and energises the Third Eye, Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Third Eye",
      "Crown"
    ]
  },
  {
    "id": "lapis-lazuli-design-ring",
    "name": "Lapis Lazuli Design Ring",
    "category": "rings",
    "subcategory": "Design Rings",
    "price": 1150,
    "originalPrice": 1380,
    "image": "/images/crystals/citrine.png",
    "badge": null,
    "desc": "Traditional royal blue stone for wisdom, truth, and inner power.",
    "longDesc": "{\n  \"description\": \"Lapis Lazuli Design Ring is a premium quality, authentic spiritual item. Traditional royal blue stone for wisdom, truth, and inner power. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Throat, Third Eye Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Traditional royal blue stone for wisdom, truth, and inner power.\",\n    \"Aligns and energises the Throat, Third Eye Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Throat",
      "Third Eye"
    ]
  },
  {
    "id": "pyrite-design-ring",
    "name": "Pyrite Design Ring",
    "category": "rings",
    "subcategory": "Design Rings",
    "price": 1250,
    "originalPrice": 1500,
    "image": "/images/crystals/blacktourmaline.png",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\n  \"description\": \"Pyrite Design Ring is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "green-eventurine-design-ring",
    "name": "Green Eventurine Design Ring",
    "category": "rings",
    "subcategory": "Design Rings",
    "price": 950,
    "originalPrice": 1140,
    "image": "/images/crystals/clearquartz.png",
    "badge": null,
    "desc": "Stone of opportunity and luck, bringing abundance and career success.",
    "longDesc": "{\n  \"description\": \"Green Eventurine Design Ring is a premium quality, authentic spiritual item. Stone of opportunity and luck, bringing abundance and career success. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stone of opportunity and luck, bringing abundance and career success.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "irani-firoza-design-ring",
    "name": "Irani Firoza Design Ring",
    "category": "rings",
    "subcategory": "Design Rings",
    "price": 2450,
    "originalPrice": 2940,
    "image": "/images/crystals/selenite.png",
    "badge": null,
    "desc": "Genuine Irani Turquoise for confidence, public speaking, and clear communication.",
    "longDesc": "{\n  \"description\": \"Irani Firoza Design Ring is a premium quality, authentic spiritual item. Genuine Irani Turquoise for confidence, public speaking, and clear communication. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Throat Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Genuine Irani Turquoise for confidence, public speaking, and clear communication.\",\n    \"Aligns and energises the Throat Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Throat"
    ]
  },
  {
    "id": "polished-black-tourmaline-design-ring",
    "name": "Polished Black Tourmaline Design Ring",
    "category": "rings",
    "subcategory": "Design Rings",
    "price": 1050,
    "originalPrice": 1260,
    "image": "/images/crystals/tigerseye.png",
    "badge": null,
    "desc": "Shields against negative energy, electromagnetic frequencies, and toxic environments.",
    "longDesc": "{\n  \"description\": \"Polished Black Tourmaline Design Ring is a premium quality, authentic spiritual item. Shields against negative energy, electromagnetic frequencies, and toxic environments. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Shields against negative energy, electromagnetic frequencies, and toxic environments.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root"
    ]
  },
  {
    "id": "raw-black-tourmaline-design-ring",
    "name": "Raw Black Tourmaline Design Ring",
    "category": "rings",
    "subcategory": "Design Rings",
    "price": 1050,
    "originalPrice": 1260,
    "image": "/images/crystals/greenaventurine.png",
    "badge": null,
    "desc": "Shields against negative energy, electromagnetic frequencies, and toxic environments.",
    "longDesc": "{\n  \"description\": \"Raw Black Tourmaline Design Ring is a premium quality, authentic spiritual item. Shields against negative energy, electromagnetic frequencies, and toxic environments. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Shields against negative energy, electromagnetic frequencies, and toxic environments.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root"
    ]
  },
  {
    "id": "rose-quartz-design-ring",
    "name": "Rose Quartz Design Ring",
    "category": "rings",
    "subcategory": "Design Rings",
    "price": 950,
    "originalPrice": 1140,
    "image": "/images/crystals/lapislazuli.png",
    "badge": null,
    "desc": "The stone of unconditional love, compassion, and emotional healing.",
    "longDesc": "{\n  \"description\": \"Rose Quartz Design Ring is a premium quality, authentic spiritual item. The stone of unconditional love, compassion, and emotional healing. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The stone of unconditional love, compassion, and emotional healing.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "moonstone-design-ring",
    "name": "Moonstone Design Ring",
    "category": "rings",
    "subcategory": "Design Rings",
    "price": 1200,
    "originalPrice": 1440,
    "image": "/images/crystals/amethyst.png",
    "badge": null,
    "desc": "A beautiful healing stone selected intuitively.",
    "longDesc": "{\n  \"description\": \"Moonstone Design Ring is a premium quality, authentic spiritual item. A beautiful healing stone selected intuitively. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"A beautiful healing stone selected intuitively.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root"
    ]
  },
  {
    "id": "labradorite-design-ring",
    "name": "Labradorite Design Ring",
    "category": "rings",
    "subcategory": "Design Rings",
    "price": 1350,
    "originalPrice": 1620,
    "image": "/images/crystals/rosequartz.png",
    "badge": null,
    "desc": "Temple of the stars crystal for magic, intuition, and transformation.",
    "longDesc": "{\n  \"description\": \"Labradorite Design Ring is a premium quality, authentic spiritual item. Temple of the stars crystal for magic, intuition, and transformation. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Third Eye Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Temple of the stars crystal for magic, intuition, and transformation.\",\n    \"Aligns and energises the Third Eye Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Third Eye"
    ]
  },
  {
    "id": "tiger-eye-design-ring",
    "name": "Tiger Eye Design Ring",
    "category": "rings",
    "subcategory": "Design Rings",
    "price": 1050,
    "originalPrice": 1260,
    "image": "/images/crystals/citrine.png",
    "badge": null,
    "desc": "Boosts courage, self-confidence, willpower, and personal power.",
    "longDesc": "{\n  \"description\": \"Tiger Eye Design Ring is a premium quality, authentic spiritual item. Boosts courage, self-confidence, willpower, and personal power. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Boosts courage, self-confidence, willpower, and personal power.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "yellow-calcite-design-ring",
    "name": "Yellow Calcite Design Ring",
    "category": "rings",
    "subcategory": "Design Rings",
    "price": 950,
    "originalPrice": 1140,
    "image": "/images/crystals/blacktourmaline.png",
    "badge": null,
    "desc": "Clears mental blockages and infuses warmth, joy, and hope.",
    "longDesc": "{\n  \"description\": \"Yellow Calcite Design Ring is a premium quality, authentic spiritual item. Clears mental blockages and infuses warmth, joy, and hope. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Clears mental blockages and infuses warmth, joy, and hope.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "red-carnalian-design-ring",
    "name": "Red Carnalian Design Ring",
    "category": "rings",
    "subcategory": "Design Rings",
    "price": 1050,
    "originalPrice": 1260,
    "image": "/images/crystals/clearquartz.png",
    "badge": null,
    "desc": "Stones of motivation, creativity, leadership, and bold action.",
    "longDesc": "{\n  \"description\": \"Red Carnalian Design Ring is a premium quality, authentic spiritual item. Stones of motivation, creativity, leadership, and bold action. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Sacral Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stones of motivation, creativity, leadership, and bold action.\",\n    \"Aligns and energises the Sacral Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Sacral"
    ]
  },
  {
    "id": "sulemani-hakik-design-ring",
    "name": "Sulemani Hakik Design Ring",
    "category": "rings",
    "subcategory": "Design Rings",
    "price": 1250,
    "originalPrice": 1500,
    "image": "/images/crystals/selenite.png",
    "badge": null,
    "desc": "Traditional gemstone used to block black magic and malefic planetary influences.",
    "longDesc": "{\n  \"description\": \"Sulemani Hakik Design Ring is a premium quality, authentic spiritual item. Traditional gemstone used to block black magic and malefic planetary influences. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Traditional gemstone used to block black magic and malefic planetary influences.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root"
    ]
  },
  {
    "id": "dalmatian-jasper-design-ring",
    "name": "Dalmatian Jasper Design Ring",
    "category": "rings",
    "subcategory": "Design Rings",
    "price": 950,
    "originalPrice": 1140,
    "image": "/images/crystals/tigerseye.png",
    "badge": null,
    "desc": "Brings a sense of playfulness and joy, breaking down analytical walls.",
    "longDesc": "{\n  \"description\": \"Dalmatian Jasper Design Ring is a premium quality, authentic spiritual item. Brings a sense of playfulness and joy, breaking down analytical walls. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Brings a sense of playfulness and joy, breaking down analytical walls.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root"
    ]
  },
  {
    "id": "rhodonite-design-ring",
    "name": "Rhodonite Design Ring",
    "category": "rings",
    "subcategory": "Design Rings",
    "price": 1150,
    "originalPrice": 1380,
    "image": "/images/crystals/greenaventurine.png",
    "badge": null,
    "desc": "Stones of compassion, forgiveness, and emotional balance after hurt.",
    "longDesc": "{\n  \"description\": \"Rhodonite Design Ring is a premium quality, authentic spiritual item. Stones of compassion, forgiveness, and emotional balance after hurt. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stones of compassion, forgiveness, and emotional balance after hurt.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "malachite-design-ring",
    "name": "Malachite Design Ring",
    "category": "rings",
    "subcategory": "Design Rings",
    "price": 2200,
    "originalPrice": 2640,
    "image": "/images/crystals/lapislazuli.png",
    "badge": null,
    "desc": "Powerful transformation stone that cleanses emotional blocks.",
    "longDesc": "{\n  \"description\": \"Malachite Design Ring is a premium quality, authentic spiritual item. Powerful transformation stone that cleanses emotional blocks. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Powerful transformation stone that cleanses emotional blocks.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "opal-design-ring",
    "name": "Opal Design Ring",
    "category": "rings",
    "subcategory": "Design Rings",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/crystals/amethyst.png",
    "badge": null,
    "desc": "Enhances cosmic consciousness, spiritual vision, and inspiration.",
    "longDesc": "{\n  \"description\": \"Opal Design Ring is a premium quality, authentic spiritual item. Enhances cosmic consciousness, spiritual vision, and inspiration. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Enhances cosmic consciousness, spiritual vision, and inspiration.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Crown"
    ]
  },
  {
    "id": "clear-quartz-design-ring",
    "name": "Clear Quartz Design Ring",
    "category": "rings",
    "subcategory": "Design Rings",
    "price": 950,
    "originalPrice": 1140,
    "image": "/images/crystals/rosequartz.png",
    "badge": null,
    "desc": "The Master Healer crystal that amplifies other stones' energy.",
    "longDesc": "{\n  \"description\": \"Clear Quartz Design Ring is a premium quality, authentic spiritual item. The Master Healer crystal that amplifies other stones' energy. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The Master Healer crystal that amplifies other stones' energy.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Crown"
    ]
  },
  {
    "id": "white-agate-design-ring",
    "name": "White Agate Design Ring",
    "category": "rings",
    "subcategory": "Design Rings",
    "price": 850,
    "originalPrice": 1020,
    "image": "/images/crystals/citrine.png",
    "badge": null,
    "desc": "Brings gentle release, mental balance, and absolute purity.",
    "longDesc": "{\n  \"description\": \"White Agate Design Ring is a premium quality, authentic spiritual item. Brings gentle release, mental balance, and absolute purity. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Brings gentle release, mental balance, and absolute purity.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Crown"
    ]
  },
  {
    "id": "seven-chakra-mala",
    "name": "Seven Chakra Crystal Mala",
    "category": "malas",
    "subcategory": "Malas",
    "price": 1650,
    "originalPrice": 1980,
    "image": "/images/crystals/blacktourmaline.png",
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
    ]
  },
  {
    "id": "rose-quartz-mala",
    "name": "Rose Quartz Crystal Mala",
    "category": "malas",
    "subcategory": "Malas",
    "price": 950,
    "originalPrice": 1140,
    "image": "/images/crystals/clearquartz.png",
    "badge": null,
    "desc": "The stone of unconditional love, compassion, and emotional healing.",
    "longDesc": "{\n  \"description\": \"Rose Quartz Crystal Mala is a premium quality, authentic spiritual item. The stone of unconditional love, compassion, and emotional healing. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The stone of unconditional love, compassion, and emotional healing.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "turquoise-mala",
    "name": "Turquoise Crystal Mala",
    "category": "malas",
    "subcategory": "Malas",
    "price": 1850,
    "originalPrice": 2220,
    "image": "/images/crystals/selenite.png",
    "badge": null,
    "desc": "Ancient stones of protection, alignment, and communication.",
    "longDesc": "{\n  \"description\": \"Turquoise Crystal Mala is a premium quality, authentic spiritual item. Ancient stones of protection, alignment, and communication. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Throat Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Ancient stones of protection, alignment, and communication.\",\n    \"Aligns and energises the Throat Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Throat"
    ]
  },
  {
    "id": "black-tourmaline-mala",
    "name": "Black Tourmaline Crystal Mala",
    "category": "malas",
    "subcategory": "Malas",
    "price": 1050,
    "originalPrice": 1260,
    "image": "/images/crystals/tigerseye.png",
    "badge": null,
    "desc": "Shields against negative energy, electromagnetic frequencies, and toxic environments.",
    "longDesc": "{\n  \"description\": \"Black Tourmaline Crystal Mala is a premium quality, authentic spiritual item. Shields against negative energy, electromagnetic frequencies, and toxic environments. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Shields against negative energy, electromagnetic frequencies, and toxic environments.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root"
    ]
  },
  {
    "id": "karungali-mala",
    "name": "Karungali Crystal Mala",
    "category": "malas",
    "subcategory": "Malas",
    "price": 1850,
    "originalPrice": 2220,
    "image": "/images/crystals/greenaventurine.png",
    "badge": null,
    "desc": "Sacred Ebony wood traditionally used for protection, grounding, and power.",
    "longDesc": "{\n  \"description\": \"Karungali (Ebony wood) is a sacred and powerful natural wood traditionally used for protection, grounding, and spiritual strength. This mala is known to absorb negative energies and promote mental stability, courage, and discipline. It is widely used for meditation, japa, and daily spiritual wear.\",\n  \"whoShouldWear\": [\n    \"People seeking protection from negativity or evil eye\",\n    \"Those who feel mentally disturbed, anxious, or low on energy\",\n    \"Individuals practicing meditation, mantra chanting, or spiritual discipline\",\n    \"Ideal for students, professionals, and spiritually inclined people\"\n  ],\n  \"benefits\": [\n    \"Protects from negative and harmful energies\",\n    \"Enhances focus, willpower, and mental clarity\",\n    \"Promotes grounding and emotional stability\",\n    \"Supports spiritual growth and discipline\"\n  ],\n  \"howToWear\": [\n    \"Can be worn daily as a mala or necklace\",\n    \"Suitable for japa, meditation, or regular wear\",\n    \"Unisex – suitable for both men and women\"\n  ],\n  \"careInstructions\": [\n    \"Avoid water contact\",\n    \"Clean gently with a dry cloth\",\n    \"Store in a clean, dry place\"\n  ],\n  \"disclaimer\": \"This product supports spiritual well-being and does not replace medical or professional advice.\"\n}",
    "chakras": [
      "Root"
    ]
  },
  {
    "id": "rose-quartz-comb",
    "name": "Rose Quartz Healing Comb",
    "category": "beauty",
    "subcategory": "Combs",
    "price": 950,
    "originalPrice": 1140,
    "image": "/images/crystals/lapislazuli.png",
    "badge": null,
    "desc": "The stone of unconditional love, compassion, and emotional healing.",
    "longDesc": "{\n  \"description\": \"Rose Quartz Healing Comb is a premium quality, authentic spiritual item. The stone of unconditional love, compassion, and emotional healing. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The stone of unconditional love, compassion, and emotional healing.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "lapis-lazuli-anklet",
    "name": "Lapis Lazuli Anklet",
    "category": "beauty",
    "subcategory": "Anklets",
    "price": 1150,
    "originalPrice": 1380,
    "image": "/images/crystals/amethyst.png",
    "badge": null,
    "desc": "Traditional royal blue stone for wisdom, truth, and inner power.",
    "longDesc": "{\n  \"description\": \"Lapis Lazuli Anklet is a premium quality, authentic spiritual item. Traditional royal blue stone for wisdom, truth, and inner power. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Throat, Third Eye Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Traditional royal blue stone for wisdom, truth, and inner power.\",\n    \"Aligns and energises the Throat, Third Eye Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Throat",
      "Third Eye"
    ]
  },
  {
    "id": "black-tourmaline-anklet",
    "name": "Black Tourmaline Anklet",
    "category": "beauty",
    "subcategory": "Anklets",
    "price": 1050,
    "originalPrice": 1260,
    "image": "/images/crystals/rosequartz.png",
    "badge": null,
    "desc": "Shields against negative energy, electromagnetic frequencies, and toxic environments.",
    "longDesc": "{\n  \"description\": \"Black Tourmaline Anklet is a premium quality, authentic spiritual item. Shields against negative energy, electromagnetic frequencies, and toxic environments. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Shields against negative energy, electromagnetic frequencies, and toxic environments.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root"
    ]
  },
  {
    "id": "pyrite-anklet",
    "name": "Pyrite Anklet",
    "category": "beauty",
    "subcategory": "Anklets",
    "price": 1250,
    "originalPrice": 1500,
    "image": "/images/crystals/citrine.png",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\n  \"description\": \"Pyrite Anklet is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "opal-face-roller",
    "name": "Opal Face Roller",
    "category": "beauty",
    "subcategory": "Face Rollers",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/crystals/blacktourmaline.png",
    "badge": null,
    "desc": "Enhances cosmic consciousness, spiritual vision, and inspiration.",
    "longDesc": "{\n  \"description\": \"Opal Face Roller is a premium quality, authentic spiritual item. Enhances cosmic consciousness, spiritual vision, and inspiration. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Enhances cosmic consciousness, spiritual vision, and inspiration.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Crown"
    ]
  },
  {
    "id": "green-jade-face-roller",
    "name": "Green Jade Face Roller",
    "category": "beauty",
    "subcategory": "Face Rollers",
    "price": 1350,
    "originalPrice": 1620,
    "image": "/images/crystals/clearquartz.png",
    "badge": null,
    "desc": "Noble stone of luck, wisdom, long life, and physical health.",
    "longDesc": "{\n  \"description\": \"Green Jade Face Roller is a premium quality, authentic spiritual item. Noble stone of luck, wisdom, long life, and physical health. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Noble stone of luck, wisdom, long life, and physical health.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "tiger-eye-face-roller",
    "name": "Tiger Eye Face Roller",
    "category": "beauty",
    "subcategory": "Face Rollers",
    "price": 1050,
    "originalPrice": 1260,
    "image": "/images/crystals/selenite.png",
    "badge": null,
    "desc": "Boosts courage, self-confidence, willpower, and personal power.",
    "longDesc": "{\n  \"description\": \"Tiger Eye Face Roller is a premium quality, authentic spiritual item. Boosts courage, self-confidence, willpower, and personal power. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Boosts courage, self-confidence, willpower, and personal power.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "amethyst-face-roller",
    "name": "Amethyst Face Roller",
    "category": "beauty",
    "subcategory": "Face Rollers",
    "price": 1050,
    "originalPrice": 1260,
    "image": "/images/crystals/tigerseye.png",
    "badge": null,
    "desc": "Calms mind, increases spiritual wisdom, and supports deep meditation.",
    "longDesc": "{\n  \"description\": \"Amethyst Face Roller is a premium quality, authentic spiritual item. Calms mind, increases spiritual wisdom, and supports deep meditation. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Third Eye, Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Calms mind, increases spiritual wisdom, and supports deep meditation.\",\n    \"Aligns and energises the Third Eye, Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Third Eye",
      "Crown"
    ]
  },
  {
    "id": "green-eventurine-face-roller",
    "name": "Green Eventurine Face Roller",
    "category": "beauty",
    "subcategory": "Face Rollers",
    "price": 950,
    "originalPrice": 1140,
    "image": "/images/crystals/greenaventurine.png",
    "badge": null,
    "desc": "Stone of opportunity and luck, bringing abundance and career success.",
    "longDesc": "{\n  \"description\": \"Green Eventurine Face Roller is a premium quality, authentic spiritual item. Stone of opportunity and luck, bringing abundance and career success. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stone of opportunity and luck, bringing abundance and career success.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "rose-quartz-face-roller",
    "name": "Rose Quartz Face Roller",
    "category": "beauty",
    "subcategory": "Face Rollers",
    "price": 950,
    "originalPrice": 1140,
    "image": "/images/crystals/lapislazuli.png",
    "badge": null,
    "desc": "The stone of unconditional love, compassion, and emotional healing.",
    "longDesc": "{\n  \"description\": \"Rose Quartz Face Roller is a premium quality, authentic spiritual item. The stone of unconditional love, compassion, and emotional healing. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The stone of unconditional love, compassion, and emotional healing.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "green-eventurine-guasha",
    "name": "Green Eventurine Guasha Stone",
    "category": "beauty",
    "subcategory": "Gua Sha",
    "price": 950,
    "originalPrice": 1140,
    "image": "/images/crystals/amethyst.png",
    "badge": null,
    "desc": "Stone of opportunity and luck, bringing abundance and career success.",
    "longDesc": "{\n  \"description\": \"Green Eventurine Guasha Stone is a premium quality, authentic spiritual item. Stone of opportunity and luck, bringing abundance and career success. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stone of opportunity and luck, bringing abundance and career success.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "black-tourmaline-guasha",
    "name": "Black Tourmaline Guasha Stone",
    "category": "beauty",
    "subcategory": "Gua Sha",
    "price": 1050,
    "originalPrice": 1260,
    "image": "/images/crystals/rosequartz.png",
    "badge": null,
    "desc": "Shields against negative energy, electromagnetic frequencies, and toxic environments.",
    "longDesc": "{\n  \"description\": \"Black Tourmaline Guasha Stone is a premium quality, authentic spiritual item. Shields against negative energy, electromagnetic frequencies, and toxic environments. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Shields against negative energy, electromagnetic frequencies, and toxic environments.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root"
    ]
  },
  {
    "id": "big-crystal-tree",
    "name": "Big Crystal Tree",
    "category": "trees",
    "subcategory": "Crystal Trees",
    "price": 2800,
    "originalPrice": 3360,
    "image": "/images/crystals/citrine.png",
    "badge": null,
    "desc": "Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.",
    "longDesc": "{\n  \"description\": \"Big Crystal Tree is a premium quality, authentic spiritual item. Powerful combination of pyrite, citrine, and green aventurine to draw prosperity. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus, Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\n    \"Aligns and energises the Solar Plexus, Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus",
      "Heart"
    ]
  },
  {
    "id": "small-crystal-tree",
    "name": "Small Crystal Tree",
    "category": "trees",
    "subcategory": "Crystal Trees",
    "price": 1600,
    "originalPrice": 1920,
    "image": "/images/crystals/blacktourmaline.png",
    "badge": null,
    "desc": "Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.",
    "longDesc": "{\n  \"description\": \"Small Crystal Tree is a premium quality, authentic spiritual item. Powerful combination of pyrite, citrine, and green aventurine to draw prosperity. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus, Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\n    \"Aligns and energises the Solar Plexus, Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus",
      "Heart"
    ]
  },
  {
    "id": "shell-tree",
    "name": "Shell Tree",
    "category": "trees",
    "subcategory": "Crystal Trees",
    "price": 2200,
    "originalPrice": 2640,
    "image": "/images/crystals/clearquartz.png",
    "badge": null,
    "desc": "Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.",
    "longDesc": "{\n  \"description\": \"Shell Tree is a premium quality, authentic spiritual item. Powerful combination of pyrite, citrine, and green aventurine to draw prosperity. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus, Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\n    \"Aligns and energises the Solar Plexus, Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus",
      "Heart"
    ]
  },
  {
    "id": "plain-pyrite-frame",
    "name": "Plain Pyrite Frame",
    "category": "frames",
    "subcategory": "Frames",
    "price": 3500,
    "originalPrice": 4200,
    "image": "/images/crystals/selenite.png",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\n  \"description\": \"Plain Pyrite Frame is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "selenite-laxmi-devi-pyrite-frame",
    "name": "Selenite Laxmi Devi Pyrite Frame",
    "category": "frames",
    "subcategory": "Frames",
    "price": 3500,
    "originalPrice": 4200,
    "image": "/images/crystals/tigerseye.png",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\n  \"description\": \"Selenite Laxmi Devi Pyrite Frame is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "ganesha-pyrite-frame",
    "name": "Ganesha Pyrite Frame",
    "category": "frames",
    "subcategory": "Frames",
    "price": 3500,
    "originalPrice": 4200,
    "image": "/images/crystals/greenaventurine.png",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\n  \"description\": \"Ganesha Pyrite Frame is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "gayatri-mantra-pyrite-plate",
    "name": "Gayatri Mantra Pyrite Duster Plate",
    "category": "frames",
    "subcategory": "Frames",
    "price": 3500,
    "originalPrice": 4200,
    "image": "/images/crystals/lapislazuli.png",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\n  \"description\": \"Gayatri Mantra Pyrite Duster Plate is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "selenite-plain-plate",
    "name": "Selenite Plain Plate",
    "category": "selenite",
    "subcategory": "Selenite Crystals",
    "price": 1200,
    "originalPrice": 1440,
    "image": "/images/crystals/amethyst.png",
    "badge": null,
    "desc": "Liquid light crystal that purifies other crystals and living spaces.",
    "longDesc": "{\n  \"description\": \"Selenite Plain Plate is a premium quality, authentic spiritual item. Liquid light crystal that purifies other crystals and living spaces. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Liquid light crystal that purifies other crystals and living spaces.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Crown"
    ]
  },
  {
    "id": "selenite-lamp-model",
    "name": "Selenite Lamp Model",
    "category": "selenite",
    "subcategory": "Selenite Crystals",
    "price": 2400,
    "originalPrice": 2880,
    "image": "/images/crystals/rosequartz.png",
    "badge": null,
    "desc": "Liquid light crystal that purifies other crystals and living spaces.",
    "longDesc": "{\n  \"description\": \"Selenite Lamp Model is a premium quality, authentic spiritual item. Liquid light crystal that purifies other crystals and living spaces. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Liquid light crystal that purifies other crystals and living spaces.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Crown"
    ]
  },
  {
    "id": "custom-rashi-bracelet",
    "name": "Custom Rashi Zodiac Bracelet",
    "category": "bracelets",
    "subcategory": "Rashi Bracelets",
    "price": 1550,
    "originalPrice": 1860,
    "image": "/images/crystals/citrine.png",
    "badge": null,
    "desc": "Combines Tiger Eye, Hematite, and Black Obsidian for ultimate energetic shielding.",
    "longDesc": "{\n  \"description\": \"Custom Rashi Zodiac Bracelet is a premium quality, authentic spiritual item. Combines Tiger Eye, Hematite, and Black Obsidian for ultimate energetic shielding. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root, Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Combines Tiger Eye, Hematite, and Black Obsidian for ultimate energetic shielding.\",\n    \"Aligns and energises the Root, Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root",
      "Solar Plexus"
    ]
  },
  {
    "id": "custom-numerology-bracelet",
    "name": "Custom Numerology Number Bracelet",
    "category": "bracelets",
    "subcategory": "Number Bracelets",
    "price": 1550,
    "originalPrice": 1860,
    "image": "/images/crystals/blacktourmaline.png",
    "badge": null,
    "desc": "Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.",
    "longDesc": "{\n  \"description\": \"Custom Numerology Number Bracelet is a premium quality, authentic spiritual item. Powerful combination of pyrite, citrine, and green aventurine to draw prosperity. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus, Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\n    \"Aligns and energises the Solar Plexus, Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus",
      "Heart"
    ]
  },
  {
    "id": "tree-of-life-keychain",
    "name": "Tree Of Life Keychain",
    "category": "others",
    "subcategory": "Keychains",
    "price": 450,
    "originalPrice": 540,
    "image": "/images/crystals/clearquartz.png",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\n  \"description\": \"Tree Of Life Keychain is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "zibu-green-eventurine-keychain",
    "name": "Zibu Green Eventurine Keychain",
    "category": "others",
    "subcategory": "Keychains",
    "price": 450,
    "originalPrice": 540,
    "image": "/images/crystals/selenite.png",
    "badge": null,
    "desc": "Stone of opportunity and luck, bringing abundance and career success.",
    "longDesc": "{\n  \"description\": \"Zibu Green Eventurine Keychain is a premium quality, authentic spiritual item. Stone of opportunity and luck, bringing abundance and career success. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stone of opportunity and luck, bringing abundance and career success.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "pyrite-keychain",
    "name": "Pyrite Keychain",
    "category": "others",
    "subcategory": "Keychains",
    "price": 450,
    "originalPrice": 540,
    "image": "/images/crystals/tigerseye.png",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\n  \"description\": \"Pyrite Keychain is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "lapis-lazuli-pyramid",
    "name": "Lapis Lazuli Pyramid",
    "category": "others",
    "subcategory": "Pyramids",
    "price": 1800,
    "originalPrice": 2160,
    "image": "/images/crystals/greenaventurine.png",
    "badge": null,
    "desc": "Traditional royal blue stone for wisdom, truth, and inner power.",
    "longDesc": "{\n  \"description\": \"Lapis Lazuli Pyramid is a premium quality, authentic spiritual item. Traditional royal blue stone for wisdom, truth, and inner power. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Throat, Third Eye Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Traditional royal blue stone for wisdom, truth, and inner power.\",\n    \"Aligns and energises the Throat, Third Eye Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Throat",
      "Third Eye"
    ]
  },
  {
    "id": "laxmi-pyramid",
    "name": "Laxmi Aura Pyramid",
    "category": "others",
    "subcategory": "Pyramids",
    "price": 1800,
    "originalPrice": 2160,
    "image": "/images/crystals/lapislazuli.png",
    "badge": null,
    "desc": "Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.",
    "longDesc": "{\n  \"description\": \"Laxmi Aura Pyramid is a premium quality, authentic spiritual item. Powerful combination of pyrite, citrine, and green aventurine to draw prosperity. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus, Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\n    \"Aligns and energises the Solar Plexus, Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus",
      "Heart"
    ]
  },
  {
    "id": "pencil-point-wand",
    "name": "Pencil Point Wand",
    "category": "others",
    "subcategory": "Wands",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/crystals/amethyst.png",
    "badge": null,
    "desc": "The Master Healer crystal that amplifies other stones' energy.",
    "longDesc": "{\n  \"description\": \"Pencil Point Wand is a premium quality, authentic spiritual item. The Master Healer crystal that amplifies other stones' energy. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The Master Healer crystal that amplifies other stones' energy.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Crown"
    ]
  },
  {
    "id": "seven-chakra-wand",
    "name": "Seven Chakra Healing Wand",
    "category": "others",
    "subcategory": "Wands",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/crystals/rosequartz.png",
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
    ]
  },
  {
    "id": "black-tourmaline-wand",
    "name": "Black Tourmaline Wand",
    "category": "others",
    "subcategory": "Wands",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/crystals/citrine.png",
    "badge": null,
    "desc": "Shields against negative energy, electromagnetic frequencies, and toxic environments.",
    "longDesc": "{\n  \"description\": \"Black Tourmaline Wand is a premium quality, authentic spiritual item. Shields against negative energy, electromagnetic frequencies, and toxic environments. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Shields against negative energy, electromagnetic frequencies, and toxic environments.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root"
    ]
  },
  {
    "id": "rhodonite-wand",
    "name": "Rhodonite Wand",
    "category": "others",
    "subcategory": "Wands",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/crystals/blacktourmaline.png",
    "badge": null,
    "desc": "Stones of compassion, forgiveness, and emotional balance after hurt.",
    "longDesc": "{\n  \"description\": \"Rhodonite Wand is a premium quality, authentic spiritual item. Stones of compassion, forgiveness, and emotional balance after hurt. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stones of compassion, forgiveness, and emotional balance after hurt.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "evil-eye-pendant-beauty",
    "name": "Evil Eye Protective Pendant",
    "category": "pendants",
    "subcategory": "Evil Eye",
    "price": 850,
    "originalPrice": 1020,
    "image": "/images/crystals/clearquartz.png",
    "badge": null,
    "desc": "Protective talisman that shields against jealousy, glare, and bad wishes.",
    "longDesc": "{\n  \"description\": \"Evil Eye Protective Pendant is a premium quality, authentic spiritual item. Protective talisman that shields against jealousy, glare, and bad wishes. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root, Throat Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Protective talisman that shields against jealousy, glare, and bad wishes.\",\n    \"Aligns and energises the Root, Throat Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root",
      "Throat"
    ]
  },
  {
    "id": "evil-eye-bracelet-beauty",
    "name": "Evil Eye Protective Bracelet",
    "category": "bracelets",
    "subcategory": "Evil Eye",
    "price": 850,
    "originalPrice": 1020,
    "image": "/images/crystals/selenite.png",
    "badge": null,
    "desc": "Protective talisman that shields against jealousy, glare, and bad wishes.",
    "longDesc": "{\n  \"description\": \"Evil Eye Protective Bracelet is a premium quality, authentic spiritual item. Protective talisman that shields against jealousy, glare, and bad wishes. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root, Throat Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Protective talisman that shields against jealousy, glare, and bad wishes.\",\n    \"Aligns and energises the Root, Throat Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root",
      "Throat"
    ]
  },
  {
    "id": "white-sage-smudge",
    "name": "White Sage Smudge Bundle",
    "category": "others",
    "subcategory": "Cleansing",
    "price": 650,
    "originalPrice": 780,
    "image": "/images/crystals/tigerseye.png",
    "badge": null,
    "desc": "The Master Healer crystal that amplifies other stones' energy.",
    "longDesc": "{\n  \"description\": \"White Sage Smudge Bundle is a premium quality, authentic spiritual item. The Master Healer crystal that amplifies other stones' energy. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The Master Healer crystal that amplifies other stones' energy.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Crown"
    ]
  },
  {
    "id": "karungali-bracelet",
    "name": "Karungali Ebony Wood Bracelet",
    "category": "bracelets",
    "subcategory": "Karungali",
    "price": 950,
    "originalPrice": 1140,
    "image": "/images/crystals/greenaventurine.png",
    "badge": null,
    "desc": "Sacred Ebony wood traditionally used for protection, grounding, and power.",
    "longDesc": "{\n  \"description\": \"Karungali Ebony Wood Bracelet is a premium quality, authentic spiritual item. Sacred Ebony wood traditionally used for protection, grounding, and power. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Sacred Ebony wood traditionally used for protection, grounding, and power.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root"
    ]
  },
  {
    "id": "sri-chakra-yantra",
    "name": "Sri Yantra Sacred Geometry Plate",
    "category": "others",
    "subcategory": "Yantras",
    "price": 2100,
    "originalPrice": 2520,
    "image": "/images/crystals/lapislazuli.png",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\n  \"description\": \"Sri Yantra Sacred Geometry Plate is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "rose-quartz-merkaba",
    "name": "Rose Quartz Merkaba Star",
    "category": "others",
    "subcategory": "Merkabas",
    "price": 1250,
    "originalPrice": 1500,
    "image": "/images/crystals/amethyst.png",
    "badge": null,
    "desc": "The stone of unconditional love, compassion, and emotional healing.",
    "longDesc": "{\n  \"description\": \"Rose Quartz Merkaba Star is a premium quality, authentic spiritual item. The stone of unconditional love, compassion, and emotional healing. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The stone of unconditional love, compassion, and emotional healing.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "amethyst-merkaba",
    "name": "Amethyst Merkaba Star",
    "category": "others",
    "subcategory": "Merkabas",
    "price": 1250,
    "originalPrice": 1500,
    "image": "/images/crystals/rosequartz.png",
    "badge": null,
    "desc": "Calms mind, increases spiritual wisdom, and supports deep meditation.",
    "longDesc": "{\n  \"description\": \"Amethyst Merkaba Star is a premium quality, authentic spiritual item. Calms mind, increases spiritual wisdom, and supports deep meditation. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Third Eye, Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Calms mind, increases spiritual wisdom, and supports deep meditation.\",\n    \"Aligns and energises the Third Eye, Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Third Eye",
      "Crown"
    ]
  },
  {
    "id": "pyrite-small-sphere",
    "name": "Pyrite Small Sphere",
    "category": "spheres",
    "subcategory": "Spheres",
    "price": 1250,
    "originalPrice": 1500,
    "image": "/images/crystals/citrine.png",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\n  \"description\": \"Pyrite Small Sphere is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "amethyst-small-sphere",
    "name": "Amethyst Small Sphere",
    "category": "spheres",
    "subcategory": "Spheres",
    "price": 1250,
    "originalPrice": 1500,
    "image": "/images/crystals/blacktourmaline.png",
    "badge": null,
    "desc": "Calms mind, increases spiritual wisdom, and supports deep meditation.",
    "longDesc": "{\n  \"description\": \"Amethyst Small Sphere is a premium quality, authentic spiritual item. Calms mind, increases spiritual wisdom, and supports deep meditation. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Third Eye, Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Calms mind, increases spiritual wisdom, and supports deep meditation.\",\n    \"Aligns and energises the Third Eye, Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Third Eye",
      "Crown"
    ]
  },
  {
    "id": "aura-booster-spray",
    "name": "Aura Booster Energy Spray",
    "category": "others",
    "subcategory": "Aura Booster",
    "price": 1100,
    "originalPrice": 1320,
    "image": "/images/crystals/clearquartz.png",
    "badge": null,
    "desc": "The Master Healer crystal that amplifies other stones' energy.",
    "longDesc": "{\n  \"description\": \"Aura Booster Energy Spray is a premium quality, authentic spiritual item. The Master Healer crystal that amplifies other stones' energy. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The Master Healer crystal that amplifies other stones' energy.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Crown"
    ]
  },
  {
    "id": "lapis-lazuli-shell-tree",
    "name": "Lapis Lazuli Shell Tree",
    "category": "trees",
    "subcategory": "Shell Trees",
    "price": 2450,
    "originalPrice": 2940,
    "image": "/images/crystals/selenite.png",
    "badge": null,
    "desc": "Traditional royal blue stone for wisdom, truth, and inner power.",
    "longDesc": "{\n  \"description\": \"Lapis Lazuli Shell Tree is a premium quality, authentic spiritual item. Traditional royal blue stone for wisdom, truth, and inner power. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Throat, Third Eye Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Traditional royal blue stone for wisdom, truth, and inner power.\",\n    \"Aligns and energises the Throat, Third Eye Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Throat",
      "Third Eye"
    ]
  },
  {
    "id": "rose-quartz-shell-tree",
    "name": "Rose Quartz Shell Tree",
    "category": "trees",
    "subcategory": "Shell Trees",
    "price": 2450,
    "originalPrice": 2940,
    "image": "/images/crystals/tigerseye.png",
    "badge": null,
    "desc": "The stone of unconditional love, compassion, and emotional healing.",
    "longDesc": "{\n  \"description\": \"Rose Quartz Shell Tree is a premium quality, authentic spiritual item. The stone of unconditional love, compassion, and emotional healing. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The stone of unconditional love, compassion, and emotional healing.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "green-eventurine-shell-tree",
    "name": "Green Eventurine Shell Tree",
    "category": "trees",
    "subcategory": "Shell Trees",
    "price": 2450,
    "originalPrice": 2940,
    "image": "/images/crystals/greenaventurine.png",
    "badge": null,
    "desc": "Stone of opportunity and luck, bringing abundance and career success.",
    "longDesc": "{\n  \"description\": \"Green Eventurine Shell Tree is a premium quality, authentic spiritual item. Stone of opportunity and luck, bringing abundance and career success. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stone of opportunity and luck, bringing abundance and career success.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "amethyst-rose-quartz-shell-tree",
    "name": "Amethyst Rose Quartz Shell Tree",
    "category": "trees",
    "subcategory": "Shell Trees",
    "price": 2450,
    "originalPrice": 2940,
    "image": "/images/crystals/lapislazuli.png",
    "badge": null,
    "desc": "The stone of unconditional love, compassion, and emotional healing.",
    "longDesc": "{\n  \"description\": \"Amethyst Rose Quartz Shell Tree is a premium quality, authentic spiritual item. The stone of unconditional love, compassion, and emotional healing. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The stone of unconditional love, compassion, and emotional healing.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "citrine-shell-tree",
    "name": "Citrine Shell Tree",
    "category": "trees",
    "subcategory": "Shell Trees",
    "price": 2450,
    "originalPrice": 2940,
    "image": "/images/crystals/amethyst.png",
    "badge": null,
    "desc": "The Merchant's Stone of abundance, manifestation, and positive vibes.",
    "longDesc": "{\n  \"description\": \"Citrine Shell Tree is a premium quality, authentic spiritual item. The Merchant's Stone of abundance, manifestation, and positive vibes. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The Merchant's Stone of abundance, manifestation, and positive vibes.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "amethyst-shell-tree",
    "name": "Amethyst Shell Tree",
    "category": "trees",
    "subcategory": "Shell Trees",
    "price": 2450,
    "originalPrice": 2940,
    "image": "/images/crystals/rosequartz.png",
    "badge": null,
    "desc": "Calms mind, increases spiritual wisdom, and supports deep meditation.",
    "longDesc": "{\n  \"description\": \"Amethyst Shell Tree is a premium quality, authentic spiritual item. Calms mind, increases spiritual wisdom, and supports deep meditation. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Third Eye, Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Calms mind, increases spiritual wisdom, and supports deep meditation.\",\n    \"Aligns and energises the Third Eye, Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Third Eye",
      "Crown"
    ]
  },
  {
    "id": "pyrite-soap-palm-stone",
    "name": "Pyrite Soap Palm Stone",
    "category": "others",
    "subcategory": "Palm Stones",
    "price": 1250,
    "originalPrice": 1500,
    "image": "/images/crystals/citrine.png",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\n  \"description\": \"Pyrite Soap Palm Stone is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "peridot-earrings",
    "name": "Peridot Earrings",
    "category": "beauty",
    "subcategory": "Earrings",
    "price": 850,
    "originalPrice": 1020,
    "image": "/images/crystals/blacktourmaline.png",
    "badge": null,
    "desc": "Inspires positive energy, abundance, and heart-centered joy.",
    "longDesc": "{\n  \"description\": \"Peridot Earrings is a premium quality, authentic spiritual item. Inspires positive energy, abundance, and heart-centered joy. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Inspires positive energy, abundance, and heart-centered joy.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "green-eventurine-earrings",
    "name": "Green Eventurine Earrings",
    "category": "beauty",
    "subcategory": "Earrings",
    "price": 850,
    "originalPrice": 1020,
    "image": "/images/crystals/clearquartz.png",
    "badge": null,
    "desc": "Stone of opportunity and luck, bringing abundance and career success.",
    "longDesc": "{\n  \"description\": \"Green Eventurine Earrings is a premium quality, authentic spiritual item. Stone of opportunity and luck, bringing abundance and career success. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stone of opportunity and luck, bringing abundance and career success.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "rose-quartz-earrings",
    "name": "Rose Quartz Earrings",
    "category": "beauty",
    "subcategory": "Earrings",
    "price": 850,
    "originalPrice": 1020,
    "image": "/images/crystals/selenite.png",
    "badge": null,
    "desc": "The stone of unconditional love, compassion, and emotional healing.",
    "longDesc": "{\n  \"description\": \"Rose Quartz Earrings is a premium quality, authentic spiritual item. The stone of unconditional love, compassion, and emotional healing. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The stone of unconditional love, compassion, and emotional healing.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "green-eventurine-angel",
    "name": "Green Eventurine Guardian Angel",
    "category": "others",
    "subcategory": "Angels",
    "price": 1100,
    "originalPrice": 1320,
    "image": "/images/crystals/tigerseye.png",
    "badge": null,
    "desc": "Stone of opportunity and luck, bringing abundance and career success.",
    "longDesc": "{\n  \"description\": \"Green Eventurine Guardian Angel is a premium quality, authentic spiritual item. Stone of opportunity and luck, bringing abundance and career success. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stone of opportunity and luck, bringing abundance and career success.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "pyrite-angel",
    "name": "Pyrite Guardian Angel",
    "category": "others",
    "subcategory": "Angels",
    "price": 1100,
    "originalPrice": 1320,
    "image": "/images/crystals/greenaventurine.png",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\n  \"description\": \"Pyrite Guardian Angel is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "citrine-angel",
    "name": "Citrine Guardian Angel",
    "category": "others",
    "subcategory": "Angels",
    "price": 1100,
    "originalPrice": 1320,
    "image": "/images/crystals/lapislazuli.png",
    "badge": null,
    "desc": "The Merchant's Stone of abundance, manifestation, and positive vibes.",
    "longDesc": "{\n  \"description\": \"Citrine Guardian Angel is a premium quality, authentic spiritual item. The Merchant's Stone of abundance, manifestation, and positive vibes. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The Merchant's Stone of abundance, manifestation, and positive vibes.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "tiger-eye-angel",
    "name": "Tiger Eye Guardian Angel",
    "category": "others",
    "subcategory": "Angels",
    "price": 1100,
    "originalPrice": 1320,
    "image": "/images/crystals/amethyst.png",
    "badge": null,
    "desc": "Boosts courage, self-confidence, willpower, and personal power.",
    "longDesc": "{\n  \"description\": \"Tiger Eye Guardian Angel is a premium quality, authentic spiritual item. Boosts courage, self-confidence, willpower, and personal power. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Boosts courage, self-confidence, willpower, and personal power.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "water-tumble-set",
    "name": "Water Crystal Purification Tumble Set",
    "category": "others",
    "subcategory": "Tumbles",
    "price": 950,
    "originalPrice": 1140,
    "image": "/images/crystals/rosequartz.png",
    "badge": null,
    "desc": "The Master Healer crystal that amplifies other stones' energy.",
    "longDesc": "{\n  \"description\": \"Water Crystal Purification Tumble Set is a premium quality, authentic spiritual item. The Master Healer crystal that amplifies other stones' energy. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The Master Healer crystal that amplifies other stones' energy.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Crown"
    ]
  },
  {
    "id": "aura-cleansing-bath-salt",
    "name": "Aura Cleansing Ritual Bath Salt",
    "category": "others",
    "subcategory": "Bathing Salts",
    "price": 750,
    "originalPrice": 900,
    "image": "/images/crystals/citrine.png",
    "badge": null,
    "desc": "The Master Healer crystal that amplifies other stones' energy.",
    "longDesc": "{\n  \"description\": \"Aura Cleansing Ritual Bath Salt is a premium quality, authentic spiritual item. The Master Healer crystal that amplifies other stones' energy. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The Master Healer crystal that amplifies other stones' energy.\",\n    \"Aligns and energises the Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Crown"
    ]
  },
  {
    "id": "tibetan-singing-bowl-set",
    "name": "Tibetan Singing Meditation Bowl Set",
    "category": "others",
    "subcategory": "Sound Healing",
    "price": 3200,
    "originalPrice": 3840,
    "image": "/images/crystals/blacktourmaline.png",
    "badge": null,
    "desc": "Calms mind, increases spiritual wisdom, and supports deep meditation.",
    "longDesc": "{\n  \"description\": \"Tibetan Singing Meditation Bowl Set is a premium quality, authentic spiritual item. Calms mind, increases spiritual wisdom, and supports deep meditation. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Third Eye, Crown Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Calms mind, increases spiritual wisdom, and supports deep meditation.\",\n    \"Aligns and energises the Third Eye, Crown Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Third Eye",
      "Crown"
    ]
  },
  {
    "id": "manifestation-spell-jar",
    "name": "Ritual Manifestation Spell Jar",
    "category": "others",
    "subcategory": "Spell Jars",
    "price": 1400,
    "originalPrice": 1680,
    "image": "/images/crystals/clearquartz.png",
    "badge": null,
    "desc": "Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.",
    "longDesc": "{\n  \"description\": \"Ritual Manifestation Spell Jar is a premium quality, authentic spiritual item. Powerful combination of pyrite, citrine, and green aventurine to draw prosperity. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus, Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\n    \"Aligns and energises the Solar Plexus, Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus",
      "Heart"
    ]
  },
  {
    "id": "abundance-ritual-candle",
    "name": "Abundance Intentional Ritual Candle",
    "category": "others",
    "subcategory": "Ritual Candles",
    "price": 950,
    "originalPrice": 1140,
    "image": "/images/crystals/selenite.png",
    "badge": null,
    "desc": "Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.",
    "longDesc": "{\n  \"description\": \"Abundance Intentional Ritual Candle is a premium quality, authentic spiritual item. Powerful combination of pyrite, citrine, and green aventurine to draw prosperity. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus, Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\n    \"Aligns and energises the Solar Plexus, Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus",
      "Heart"
    ]
  },
  {
    "id": "golden-pyrite-turtle",
    "name": "Golden Pyrite Turtle Vastu Statue",
    "category": "others",
    "subcategory": "Vastu",
    "price": 1800,
    "originalPrice": 2160,
    "image": "/images/crystals/tigerseye.png",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\n  \"description\": \"Golden Pyrite Turtle Vastu Statue is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "green-eventurine-zibu-coin",
    "name": "Green Eventurine Zibu Coin",
    "category": "others",
    "subcategory": "Zibu Coins",
    "price": 650,
    "originalPrice": 780,
    "image": "/images/crystals/greenaventurine.png",
    "badge": null,
    "desc": "Stone of opportunity and luck, bringing abundance and career success.",
    "longDesc": "{\n  \"description\": \"Green Eventurine Zibu Coin is a premium quality, authentic spiritual item. Stone of opportunity and luck, bringing abundance and career success. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Stone of opportunity and luck, bringing abundance and career success.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "black-tourmaline-zibu-coin",
    "name": "Black Tourmaline Zibu Coin",
    "category": "others",
    "subcategory": "Zibu Coins",
    "price": 650,
    "originalPrice": 780,
    "image": "/images/crystals/lapislazuli.png",
    "badge": null,
    "desc": "Shields against negative energy, electromagnetic frequencies, and toxic environments.",
    "longDesc": "{\n  \"description\": \"Black Tourmaline Zibu Coin is a premium quality, authentic spiritual item. Shields against negative energy, electromagnetic frequencies, and toxic environments. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Root Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Shields against negative energy, electromagnetic frequencies, and toxic environments.\",\n    \"Aligns and energises the Root Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Root"
    ]
  },
  {
    "id": "rose-quartz-zibu-coin",
    "name": "Rose Quartz Zibu Coin",
    "category": "others",
    "subcategory": "Zibu Coins",
    "price": 650,
    "originalPrice": 780,
    "image": "/images/crystals/amethyst.png",
    "badge": null,
    "desc": "The stone of unconditional love, compassion, and emotional healing.",
    "longDesc": "{\n  \"description\": \"Rose Quartz Zibu Coin is a premium quality, authentic spiritual item. The stone of unconditional love, compassion, and emotional healing. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"The stone of unconditional love, compassion, and emotional healing.\",\n    \"Aligns and energises the Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Heart"
    ]
  },
  {
    "id": "pyrite-cluster-set-3",
    "name": "Golden Pyrite Raw Cluster (Set of 3)",
    "category": "raw",
    "subcategory": "Raw Stones",
    "price": 2100,
    "originalPrice": 2520,
    "image": "/images/crystals/rosequartz.png",
    "badge": null,
    "desc": "Fool's gold that acts as a strong protective shield and magnet for wealth.",
    "longDesc": "{\n  \"description\": \"Golden Pyrite Raw Cluster (Set Of 3) is a premium quality, authentic spiritual item. Fool's gold that acts as a strong protective shield and magnet for wealth. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Fool's gold that acts as a strong protective shield and magnet for wealth.\",\n    \"Aligns and energises the Solar Plexus Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus"
    ]
  },
  {
    "id": "kuber-stone-set-3",
    "name": "Kuber Manifestation Raw Stone (Set of 3)",
    "category": "raw",
    "subcategory": "Raw Stones",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/crystals/citrine.png",
    "badge": null,
    "desc": "Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.",
    "longDesc": "{\n  \"description\": \"Kuber Manifestation Raw Stone (Set Of 3) is a premium quality, authentic spiritual item. Powerful combination of pyrite, citrine, and green aventurine to draw prosperity. Sourced carefully and ritually cleansed.\",\n  \"whoShouldWear\": [\n    \"People seeking to balance their Solar Plexus, Heart Chakra.\",\n    \"Individuals seeking spiritual growth, clarity, and protection in their daily life.\",\n    \"Anyone experiencing low energy, stress, or blockages in personal development.\"\n  ],\n  \"benefits\": [\n    \"Powerful combination of pyrite, citrine, and green aventurine to draw prosperity.\",\n    \"Aligns and energises the Solar Plexus, Heart Chakra.\",\n    \"Dissolves negative energies and builds a strong positive protective aura.\",\n    \"Supports emotional healing, meditation, and mindfulness practices.\"\n  ],\n  \"howToWear\": [\n    \"Keep close to your body or wear daily.\",\n    \"Can be placed in a clean pocket, purse, or worn on the body.\",\n    \"Best worn during meditation, yoga, or professional work.\"\n  ],\n  \"careInstructions\": [\n    \"Avoid contact with water, soap, and cosmetic chemicals.\",\n    \"Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.\",\n    \"Store in a dry, safe, clean velvet pouch or container when not in use.\"\n  ],\n  \"disclaimer\": \"Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.\"\n}",
    "chakras": [
      "Solar Plexus",
      "Heart"
    ]
  },
  {
    "id": "black-tourmaline-chain",
    "name": "Black Tourmaline Chain",
    "category": "others",
    "subcategory": "Chains",
    "price": 1450,
    "originalPrice": 1740,
    "image": "/images/crystals/blacktourmaline.png",
    "badge": null,
    "desc": "Shields against negative energy, electromagnetic frequencies, and toxic environments.",
    "longDesc": "{\n  \"description\": \"Black Tourmaline is one of the strongest protective crystals, known for grounding energy and shielding against negativity. Wearing this chain helps absorb negative vibrations, protect from evil eye, and maintain emotional and energetic balance.\",\n  \"whoShouldWear\": [\n    \"People sensitive to negative environments or energies\",\n    \"Those facing stress, fear, or emotional overload\",\n    \"Individuals working in crowded or high-pressure environments\",\n    \"Anyone seeking grounding and protection\"\n  ],\n  \"benefits\": [\n    \"Powerful protection from negative energy and evil eye\",\n    \"Helps reduce stress and anxiety\",\n    \"Promotes grounding and emotional stability\",\n    \"Supports root chakra balance\"\n  ],\n  \"howToWear\": [\n    \"Can be worn daily as a necklace\",\n    \"Best worn close to the body\",\n    \"Suitable for both men and women\"\n  ],\n  \"careInstructions\": [\n    \"Cleanse regularly with incense smoke or dry salt\",\n    \"Avoid water exposure\",\n    \"Store separately\"\n  ],\n  \"disclaimer\": \"Crystals support emotional and spiritual wellness and are not a medical substitute.\"\n}",
    "chakras": [
      "Root"
    ]
  },
  {
    "id": "irani-firoza-chain-large-beads",
    "name": "Irani Firoza Chain (Large Beads)",
    "category": "others",
    "subcategory": "Chains",
    "price": 2850,
    "originalPrice": 3420,
    "image": "/irani-firoza-chain.png",
    "badge": null,
    "desc": "Genuine Irani Turquoise for confidence, public speaking, and clear communication.",
    "longDesc": "{\n  \"description\": \"Irani Firoza (Turquoise) is a powerful stone of protection, wisdom, and good fortune. The large beads enhance its energy, making this chain especially effective for confidence, communication, and positive transformation. Traditionally worn to attract luck and ward off negative influences.\",\n  \"whoShouldWear\": [\n    \"People seeking protection and good fortune\",\n    \"Those wanting to improve communication and confidence\",\n    \"Individuals facing career or personal challenges\",\n    \"Ideal for spiritually inclined and energy-sensitive people\"\n  ],\n  \"benefits\": [\n    \"Protects from negative energies and misfortune\",\n    \"Enhances confidence and self-expression\",\n    \"Promotes emotional healing and positivity\",\n    \"Supports throat chakra activation\"\n  ],\n  \"howToWear\": [\n    \"Can be worn daily as a statement chain\",\n    \"Suitable for both men and women\",\n    \"Especially effective when worn regularly\"\n  ],\n  \"careInstructions\": [\n    \"Avoid water and chemicals\",\n    \"Cleanse with moonlight or incense smoke\",\n    \"Store carefully due to large bead size\"\n  ],\n  \"disclaimer\": \"Crystals are complementary tools for well-being and not a replacement for medical advice.\"\n}",
    "chakras": [
      "Throat"
    ]
  }
];
