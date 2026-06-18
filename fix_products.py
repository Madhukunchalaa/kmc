import json, re, sys

CARE_BRACELET = [
    "Avoid prolonged contact with water, perfumes, lotions, and harsh chemicals.",
    "Store in a clean, dry place when not in use.",
    "Cleanse and recharge regularly.",
    "Handle natural stones with care to preserve their beauty."
]
DISCLAIMER_CRYSTAL = "Crystal healing is a complementary spiritual practice and is not intended to diagnose, treat, cure, or prevent any medical condition. Crystal properties are based on traditional and spiritual beliefs and may vary from person to person."
DISCLAIMER_BEAUTY = "Crystal beauty tools are intended for cosmetic and self-care use only. They are not intended to diagnose, treat, cure, or prevent any medical condition."
DISCLAIMER_SPELL = "Spell jars are spiritual and symbolic tools intended for personal reflection, intention setting, and mindfulness practices. They are not intended to guarantee specific outcomes or replace professional, legal, financial, medical, or psychological advice."

def ld(d): return json.dumps(d, ensure_ascii=False)

def orig(p): return round(p * 1.2)
def uorig(p): return round(p * 1.2)

# ─────────────────────────────────────────────────────────────────────────────
# COMPLETE UPDATE MAP: {id: {price, usdPrice, desc, longDesc, (optional variants_update)}}
# originalPrice / originalUsdPrice are auto-computed as 1.2x
# ─────────────────────────────────────────────────────────────────────────────
UPDATES = {

    # ── ANKLETS ──────────────────────────────────────────────────────────────
    "black-tourmaline-anklet": {
        "price": 300, "usdPrice": 8,
        "desc": "Grounding, stability, and energetic protection.",
        "longDesc": ld({"purpose":"Grounding, stability, and energetic protection.","crystalsIncluded":"Black Tourmaline","associatedChakras":"Root Chakra","description":"The Black Tourmaline Anklet combines elegance with the timeless appeal of natural crystal jewelry. Traditionally associated with grounding and stability, this anklet is designed for those who appreciate meaningful accessories and mindful living.","benefits":["Encourages grounding and balance","Supports emotional stability","Promotes a sense of calmness","Suitable for everyday wear"],"recommendedAnkle":"Either Ankle","whenToWear":"Daily wear, travel, work, and outdoor activities.","howToEnergize":"Moonlight or selenite charging.","affirmation":"I am grounded, balanced, and confident.","careInstructions":CARE_BRACELET,"disclaimer":DISCLAIMER_CRYSTAL})
    },
    "lapis-lazuli-anklet": {
        "price": 300, "usdPrice": 8,
        "desc": "Wisdom, communication, intuition, and self-expression.",
        "longDesc": ld({"purpose":"Wisdom, communication, intuition, and self-expression.","crystalsIncluded":"Lapis Lazuli","associatedChakras":"Throat Chakra, Third Eye Chakra","description":"The Lapis Lazuli Anklet is designed for individuals who value self-expression, confidence, and personal growth. Traditionally associated with wisdom and communication, it makes a beautiful addition to both casual and elegant styles.","benefits":["Encourages confident communication","Supports intuition and clarity","Promotes self-expression","Inspires personal growth"],"recommendedAnkle":"Either Ankle","whenToWear":"Daily wear, social occasions, travel, and special events.","howToEnergize":"Moonlight or selenite charging.","affirmation":"I express myself with wisdom, confidence, and clarity.","careInstructions":CARE_BRACELET,"disclaimer":DISCLAIMER_CRYSTAL})
    },
    "pyrite-anklet": {
        "price": 300, "usdPrice": 8,
        "desc": "Confidence, motivation, abundance mindset, and determination.",
        "longDesc": ld({"purpose":"Confidence, motivation, abundance mindset, and determination.","crystalsIncluded":"Pyrite","associatedChakras":"Solar Plexus Chakra","description":"The Pyrite Anklet combines natural beauty with symbolism traditionally associated with confidence and determination. It is designed for individuals seeking motivation, positivity, and a stylish crystal accessory.","benefits":["Encourages confidence and motivation","Supports determination and focus","Promotes a positive mindset","Inspires personal growth"],"recommendedAnkle":"Either Ankle","whenToWear":"Work, business activities, social occasions, and daily wear.","howToEnergize":"Moonlight or selenite charging.","affirmation":"I move forward with confidence, focus, and determination.","careInstructions":CARE_BRACELET,"disclaimer":DISCLAIMER_CRYSTAL})
    },

    # ── FACE ROLLERS ─────────────────────────────────────────────────────────
    "amethyst-face-roller": {
        "price": 1750, "usdPrice": 35,
        "desc": "Self-care, relaxation, and beauty rituals.",
        "longDesc": ld({"purpose":"Self-care, relaxation, and beauty rituals.","materialIncluded":"Natural Amethyst","description":"The Amethyst Face Roller is a luxurious beauty tool designed to complement your skincare routine. Traditionally associated with calmness and relaxation, this roller provides a soothing massage experience while helping skincare products glide smoothly across the skin.","benefits":["Enhances self-care rituals","Provides a cooling massage experience","Complements skincare application","Encourages moments of relaxation"],"howToUse":"Use gently on cleansed skin or after applying your favourite serum or facial oil.","affirmation":"I nurture myself with care, balance, and beauty.","careInstructions":["Clean after each use with a soft cloth.","Avoid dropping or exposing to harsh chemicals.","Store in a dry place.","Handle with care as natural crystals may be delicate."],"disclaimer":DISCLAIMER_BEAUTY})
    },
    "green-jade-face-roller": {
        "price": 1750, "usdPrice": 35,
        "desc": "Beauty care, self-care, and relaxation.",
        "longDesc": ld({"purpose":"Beauty care, self-care, and relaxation.","materialIncluded":"Natural Jade","description":"The Jade Face Roller is a timeless beauty tool loved for its elegant appearance and cooling touch. It makes a beautiful addition to any skincare ritual.","benefits":["Enhances self-care routines","Provides a refreshing massage experience","Complements daily skincare","Suitable for all skin types"],"howToUse":"Roll gently across the face using upward motions.","affirmation":"I embrace beauty, harmony, and self-care.","careInstructions":["Clean after each use with a soft cloth.","Avoid dropping or exposing to harsh chemicals.","Store in a dry place.","Handle with care as natural crystals may be delicate."],"disclaimer":DISCLAIMER_BEAUTY})
    },
    "tiger-eye-face-roller": {
        "price": 1750, "usdPrice": 35,
        "desc": "Beauty care, confidence, and self-care rituals.",
        "longDesc": ld({"purpose":"Beauty care, confidence, and self-care rituals.","materialIncluded":"Natural Tiger Eye","description":"The Tiger Eye Face Roller is designed for those who appreciate beauty tools crafted from natural crystals. Its smooth rolling action helps create a relaxing and enjoyable skincare experience.","benefits":["Complements daily skincare","Supports facial massage routines","Encourages self-care habits","Elegant crystal craftsmanship"],"howToUse":"Roll gently across the face and neck after applying skincare products.","affirmation":"I radiate confidence, strength, and natural beauty.","careInstructions":["Clean after each use with a soft cloth.","Avoid dropping or exposing to harsh chemicals.","Store in a dry place.","Handle with care as natural crystals may be delicate."],"disclaimer":DISCLAIMER_BEAUTY})
    },
    "green-eventurine-face-roller": {
        "price": 1750, "usdPrice": 35,
        "desc": "Beauty rituals, relaxation, and skincare support.",
        "longDesc": ld({"purpose":"Beauty rituals, relaxation, and skincare support.","materialIncluded":"Natural Green Aventurine","description":"The Green Aventurine Face Roller is designed to enhance your daily skincare routine while bringing a touch of luxury to your self-care practices. Its naturally cool surface offers a refreshing massage experience.","benefits":["Complements skincare application","Supports facial massage routines","Encourages relaxation","Suitable for daily use"],"howToUse":"Use on clean skin after applying serum or moisturiser.","affirmation":"I care for myself with love, confidence, and gratitude.","careInstructions":["Clean after each use with a soft cloth.","Avoid dropping or exposing to harsh chemicals.","Store in a dry place.","Handle with care as natural crystals may be delicate."],"disclaimer":DISCLAIMER_BEAUTY})
    },
    "opal-face-roller": {
        "price": 1750, "usdPrice": 35,
        "desc": "Beauty rituals and mindful self-care.",
        "longDesc": ld({"purpose":"Beauty rituals and mindful self-care.","materialIncluded":"Natural Opal","description":"The Opal Face Roller combines elegance and functionality, making it a beautiful skincare companion. Its polished finish provides a luxurious facial massage experience.","benefits":["Supports self-care practices","Complements skincare routines","Provides a soothing massage experience","Elegant crystal beauty tool"],"howToUse":"Use daily with serum or moisturiser for a relaxing skincare routine.","affirmation":"I glow with confidence, beauty, and positive energy.","careInstructions":["Clean after each use with a soft cloth.","Avoid dropping or exposing to harsh chemicals.","Store in a dry place.","Handle with care as natural crystals may be delicate."],"disclaimer":DISCLAIMER_BEAUTY})
    },
    "rose-quartz-face-roller": {
        "price": 1750, "usdPrice": 35,
        "desc": "Love energy, self-care rituals, and radiant beauty.",
        "longDesc": ld({"purpose":"Love energy, self-care rituals, and radiant beauty.","materialIncluded":"Natural Rose Quartz","description":"The Rose Quartz Face Roller is a beloved beauty tool associated with self-love and radiance. Its smooth surface glides gently across the skin for a soothing and mindful skincare ritual.","benefits":["Encourages self-love and self-care","Complements skincare application","Provides a calming massage experience","Suitable for daily use"],"howToUse":"Use gently on cleansed skin after applying serum or moisturiser.","affirmation":"I radiate love, beauty, and inner harmony.","careInstructions":["Clean after each use with a soft cloth.","Avoid dropping or exposing to harsh chemicals.","Store in a dry place.","Handle with care as natural crystals may be delicate."],"disclaimer":DISCLAIMER_BEAUTY})
    },

    # ── GUA SHA ──────────────────────────────────────────────────────────────
    "green-eventurine-guasha": {
        "price": 450, "usdPrice": 9,
        "desc": "Facial massage and beauty care.",
        "longDesc": ld({"purpose":"Facial massage and beauty care.","materialIncluded":"Natural Green Aventurine","description":"The Green Aventurine Gua Sha combines natural beauty with timeless skincare traditions. Designed for facial massage routines, it helps create a relaxing and mindful self-care experience.","benefits":["Complements skincare routines","Supports facial massage practices","Encourages mindful self-care","Beautiful natural crystal craftsmanship"],"howToUse":"Glide gently over the skin using upward and outward motions.","affirmation":"I radiate confidence, beauty, and positivity.","careInstructions":["Clean after each use with a soft cloth.","Avoid dropping or exposing to harsh chemicals.","Store in a dry place.","Handle with care as natural crystals may be delicate."],"disclaimer":DISCLAIMER_BEAUTY})
    },
    "black-tourmaline-guasha": {
        "price": 450, "usdPrice": 9,
        "desc": "Facial massage and self-care rituals.",
        "longDesc": ld({"purpose":"Facial massage and self-care rituals.","materialIncluded":"Natural Black Tourmaline","description":"The Black Tourmaline Gua Sha is crafted to elevate your beauty and wellness routine. Its smooth surface glides comfortably across the skin, making it an elegant addition to daily skincare practices.","benefits":["Supports facial massage routines","Enhances self-care moments","Comfortable and easy to use","Elegant natural stone design"],"howToUse":"Use with facial oil or serum and gently massage the face using upward strokes.","affirmation":"I care for myself with intention and confidence.","careInstructions":["Clean after each use with a soft cloth.","Avoid dropping or exposing to harsh chemicals.","Store in a dry place.","Handle with care as natural crystals may be delicate."],"disclaimer":DISCLAIMER_BEAUTY})
    },

    # ── COMB ─────────────────────────────────────────────────────────────────
    "rose-quartz-comb": {
        "price": 2200, "usdPrice": 44,
        "desc": "Scalp care, beauty rituals, and mindful self-care.",
        "longDesc": ld({"purpose":"Scalp care, beauty rituals, and mindful self-care.","materialIncluded":"Natural Rose Quartz","description":"The Rose Quartz Comb is a luxurious crystal beauty accessory crafted to elevate your hair care and self-care routine. Its elegant design makes it both a practical and beautiful addition to your collection.","benefits":["Complements hair care rituals","Encourages mindful self-care","Beautiful handcrafted appearance","Suitable for daily use"],"howToUse":"Gently comb through dry or damp hair as part of your regular hair care routine.","affirmation":"I nurture myself with love, care, and confidence.","careInstructions":["Clean after each use with a soft cloth.","Avoid dropping or exposing to harsh chemicals.","Store in a dry place.","Handle with care as natural crystals may be delicate."],"disclaimer":DISCLAIMER_BEAUTY})
    },

    # ── CRYSTAL MALAS (original IDs) ─────────────────────────────────────────
    "seven-chakra-mala": {
        "price": 1750, "usdPrice": 35,
        "desc": "Chakra awareness, balance, and spiritual alignment.",
        "longDesc": ld({"purpose":"Chakra awareness, balance, and spiritual alignment.","crystalsIncluded":"Seven Chakra Crystal Chips","associatedChakras":"All Seven Chakras","description":"The Seven Chakra Chips Mala is designed to represent the seven major energy centres. It serves as a beautiful reminder of balance, mindfulness, and holistic well-being.","benefits":["Encourages chakra awareness","Supports meditation practices","Promotes balance and harmony","Suitable for daily wear"],"howToUse":"Wear daily or use during meditation.","howToEnergize":"Moonlight charging or selenite charging.","affirmation":"I am balanced, aligned, and connected to positive energy.","careInstructions":["Store in a clean and dry place.","Avoid prolonged exposure to water, perfumes, and chemicals.","Handle with care to preserve the natural beauty of the crystals.","Cleanse and recharge periodically."],"disclaimer":DISCLAIMER_CRYSTAL})
    },
    "rose-quartz-mala": {
        "price": 1750, "usdPrice": 35,
        "desc": "Love, compassion, emotional balance, and self-care.",
        "longDesc": ld({"purpose":"Love, compassion, emotional balance, and self-care.","crystalsIncluded":"Natural Rose Quartz","associatedChakras":"Heart Chakra","description":"The Rose Quartz Mala is designed to symbolise love, compassion, and emotional harmony. It is perfect for meditation, self-care rituals, and everyday wear.","benefits":["Encourages self-love and compassion","Supports emotional balance","Promotes harmony and kindness","Suitable for meditation and affirmations"],"howToUse":"Wear daily or use during self-love and mindfulness practices.","howToEnergize":"Moonlight charging.","affirmation":"I am worthy of love, peace, and compassion.","careInstructions":["Store in a clean and dry place.","Avoid prolonged exposure to water, perfumes, and chemicals.","Handle with care to preserve the natural beauty of the crystals.","Cleanse and recharge periodically."],"disclaimer":DISCLAIMER_CRYSTAL})
    },
    "turquoise-mala": {
        "price": 2500, "usdPrice": 50,
        "desc": "Communication, wisdom, confidence, and self-expression.",
        "longDesc": ld({"purpose":"Communication, wisdom, confidence, and self-expression.","crystalsIncluded":"Natural Turquoise","associatedChakras":"Throat Chakra","description":"The Turquoise Mala is admired for its beautiful blue-green tones and timeless appeal. Traditionally associated with communication and wisdom, it is ideal for meditation, prayer, and daily wear.","benefits":["Encourages confident communication","Supports self-expression","Promotes clarity and wisdom","Suitable for meditation and mindful practices"],"howToUse":"Wear daily or use during meditation and affirmations.","howToEnergize":"Moonlight charging or selenite charging.","affirmation":"I express myself clearly, confidently, and authentically.","careInstructions":["Store in a clean and dry place.","Avoid prolonged exposure to water, perfumes, and chemicals.","Handle with care to preserve the natural beauty of the crystals.","Cleanse and recharge periodically."],"disclaimer":DISCLAIMER_CRYSTAL})
    },
    "black-tourmaline-mala": {
        "price": 1750, "usdPrice": 35,
        "desc": "Grounding, stability, and protection.",
        "longDesc": ld({"purpose":"Grounding, stability, and protection.","crystalsIncluded":"Natural Black Tourmaline","associatedChakras":"Root Chakra","description":"The Black Tourmaline Mala is crafted for those seeking grounding and balance in their daily lives. Its timeless design makes it suitable for meditation, prayer, and everyday wear.","benefits":["Encourages grounding and stability","Supports emotional balance","Promotes mindful living","Suitable for spiritual practices"],"howToUse":"Wear daily or use during meditation sessions.","howToEnergize":"Moonlight charging or selenite charging.","affirmation":"I am grounded, centred, and confident.","careInstructions":["Store in a clean and dry place.","Avoid prolonged exposure to water, perfumes, and chemicals.","Handle with care to preserve the natural beauty of the crystals.","Cleanse and recharge periodically."],"disclaimer":DISCLAIMER_CRYSTAL})
    },
    "karungali-mala": {
        "price": 1750, "usdPrice": 35,
        "desc": "Grounding, discipline, and spiritual focus.",
        "longDesc": ld({"purpose":"Grounding, discipline, and spiritual focus.","materialIncluded":"Natural Karungali Wood","associatedChakras":"Root Chakra","description":"The Karungali Mala is traditionally used in spiritual and meditation practices. Crafted from natural Karungali wood, it is appreciated for its classic appearance and connection to mindful living.","benefits":["Encourages focus and discipline","Supports meditation practices","Promotes grounding energy","Suitable for daily spiritual routines"],"howToUse":"Wear daily or use during prayer and meditation.","howToEnergize":"Intention setting or moonlight charging.","affirmation":"I remain focused, disciplined, and spiritually aligned.","careInstructions":["Store in a clean and dry place.","Avoid prolonged exposure to water, perfumes, and chemicals.","Handle with care.","Cleanse and recharge periodically."],"disclaimer":DISCLAIMER_CRYSTAL})
    },

    # ── NEW MALAS (added recently, wrong prices) ──────────────────────────────
    "amethyst-mala": {
        "price": 1750, "usdPrice": 35,
        "desc": "Peace, clarity, mindfulness, and spiritual growth.",
        "longDesc": ld({"purpose":"Peace, clarity, mindfulness, and spiritual growth.","crystalsIncluded":"Natural Amethyst","associatedChakras":"Crown Chakra","description":"The Amethyst Mala is designed for meditation, prayer, and mindful living. Traditionally associated with peace, clarity, and spiritual awareness, it serves as a meaningful companion for daily spiritual practices and intention setting.","benefits":["Encourages calmness and inner peace","Supports mindfulness practices","Promotes clarity and balance","Suitable for meditation and prayer"],"howToUse":"Wear as a necklace or use during meditation and mantra recitation.","howToEnergize":"Moonlight charging or selenite charging.","affirmation":"I am calm, balanced, and connected to my highest self.","careInstructions":["Store in a clean and dry place.","Avoid prolonged exposure to water, perfumes, and chemicals.","Handle with care to preserve the natural beauty of the crystals.","Cleanse and recharge periodically."],"disclaimer":DISCLAIMER_CRYSTAL})
    },
    "citrine-mala": {
        "price": 1750, "usdPrice": 35,
        "desc": "Confidence, positivity, and abundance mindset.",
        "longDesc": ld({"purpose":"Confidence, positivity, and abundance mindset.","crystalsIncluded":"Natural Citrine","associatedChakras":"Solar Plexus Chakra","description":"The Citrine Mala is designed for those who wish to cultivate positivity, confidence, and a growth-oriented mindset. It is ideal for meditation and daily wear.","benefits":["Encourages confidence and optimism","Supports positive thinking","Promotes motivation and focus","Suitable for manifestation practices"],"howToUse":"Wear daily or use during affirmations and meditation.","howToEnergize":"Moonlight charging or selenite charging.","affirmation":"I welcome positivity, confidence, and abundance.","careInstructions":["Store in a clean and dry place.","Avoid prolonged exposure to water, perfumes, and chemicals.","Handle with care to preserve the natural beauty of the crystals.","Cleanse and recharge periodically."],"disclaimer":DISCLAIMER_CRYSTAL})
    },
    "peridot-mala": {
        "price": 1950, "usdPrice": 39,
        "desc": "Growth, positivity, renewal, and abundance.",
        "longDesc": ld({"purpose":"Growth, positivity, renewal, and abundance.","crystalsIncluded":"Natural Peridot","associatedChakras":"Heart Chakra","description":"The Peridot Mala symbolises renewal, positivity, and personal growth. Its vibrant appearance makes it a beautiful addition to both spiritual and everyday wear.","benefits":["Encourages positivity and optimism","Supports personal growth","Promotes emotional balance","Inspires confidence and gratitude"],"howToUse":"Wear daily or use during meditation and affirmations.","howToEnergize":"Moonlight charging or selenite charging.","affirmation":"I welcome growth, positivity, and new opportunities.","careInstructions":["Store in a clean and dry place.","Avoid prolonged exposure to water, perfumes, and chemicals.","Handle with care to preserve the natural beauty of the crystals.","Cleanse and recharge periodically."],"disclaimer":DISCLAIMER_CRYSTAL})
    },

    # ── CRYSTAL PENDANTS (original IDs – prices were wrong, no USD) ───────────
    "tiger-eye-pendant": {
        "price": 600, "usdPrice": 12,
        "desc": "Confidence, focus, and determination.",
        "longDesc": ld({"purpose":"Confidence, focus, and determination.","crystalsIncluded":"Natural Tiger Eye","associatedChakras":"Solar Plexus Chakra","description":"A classic Tiger Eye pendant designed for daily wear and personal confidence.","benefits":["Encourages focus","Supports confidence","Promotes determination","Suitable for everyday use"],"howToWear":"Wear daily.","howToEnergize":"Moonlight charging.","affirmation":"I am focused, confident, and determined.","careInstructions":["Avoid water, perfumes, lotions, and harsh chemicals.","Remove before sleeping, swimming, or exercising.","Store in a clean and dry place.","Cleanse and recharge periodically."],"disclaimer":DISCLAIMER_CRYSTAL})
    },
    "rose-quartz-pendant": {
        "price": 600, "usdPrice": 12,
        "desc": "Love, compassion, and emotional harmony.",
        "longDesc": ld({"purpose":"Love, compassion, and emotional harmony.","crystalsIncluded":"Natural Rose Quartz","associatedChakras":"Heart Chakra","description":"The Rose Quartz Pendant symbolises love, kindness, and emotional well-being while adding a soft and elegant touch to any outfit.","benefits":["Encourages self-love","Supports emotional harmony","Promotes compassion","Suitable for daily wear"],"howToWear":"Wear close to the heart.","howToEnergize":"Moonlight charging.","affirmation":"I radiate love, kindness, and harmony.","careInstructions":["Avoid water, perfumes, lotions, and harsh chemicals.","Remove before sleeping, swimming, or exercising.","Store in a clean and dry place.","Cleanse and recharge periodically."],"disclaimer":DISCLAIMER_CRYSTAL})
    },
    "tiger-eye-designs-pendant": {
        "price": 600, "usdPrice": 12,
        "desc": "Confidence, courage, and motivation.",
        "longDesc": ld({"purpose":"Confidence, courage, and motivation.","crystalsIncluded":"Natural Tiger Eye","associatedChakras":"Solar Plexus Chakra","description":"An elegant variation of Tiger Eye jewellery crafted for everyday confidence and style.","benefits":["Encourages courage","Supports motivation","Promotes positive action","Stylish daily accessory"],"howToWear":"Wear daily.","howToEnergize":"Moonlight charging.","affirmation":"I move forward with courage and confidence.","careInstructions":["Avoid water, perfumes, lotions, and harsh chemicals.","Remove before sleeping, swimming, or exercising.","Store in a clean and dry place.","Cleanse and recharge periodically."],"disclaimer":DISCLAIMER_CRYSTAL})
    },
    "lapis-lazuli-pendant": {
        "price": 600, "usdPrice": 12,
        "desc": "Communication, wisdom, and self-expression.",
        "longDesc": ld({"purpose":"Communication, wisdom, and self-expression.","crystalsIncluded":"Natural Lapis Lazuli","associatedChakras":"Throat Chakra, Third Eye Chakra","description":"A beautiful pendant traditionally associated with confidence, communication, and personal expression.","benefits":["Encourages communication","Supports confidence","Promotes wisdom and clarity","Inspires self-expression"],"howToWear":"Wear daily or during presentations, meetings, and social interactions.","howToEnergize":"Moonlight charging.","affirmation":"I communicate with confidence and clarity.","careInstructions":["Avoid water, perfumes, lotions, and harsh chemicals.","Remove before sleeping, swimming, or exercising.","Store in a clean and dry place.","Cleanse and recharge periodically."],"disclaimer":DISCLAIMER_CRYSTAL})
    },
    "black-tourmaline-pendant": {
        "price": 600, "usdPrice": 12,
        "desc": "Grounding, stability, and protection.",
        "longDesc": ld({"purpose":"Grounding, stability, and protection.","crystalsIncluded":"Natural Black Tourmaline","associatedChakras":"Root Chakra","description":"A classic pendant designed for those who appreciate grounding energy and minimalist crystal jewellery.","benefits":["Encourages stability","Supports emotional balance","Promotes confidence","Suitable for everyday wear"],"howToWear":"Wear near the heart daily.","howToEnergize":"Moonlight or selenite charging.","affirmation":"I am grounded, protected, and confident.","careInstructions":["Avoid water, perfumes, lotions, and harsh chemicals.","Remove before sleeping, swimming, or exercising.","Store in a clean and dry place.","Cleanse and recharge periodically."],"disclaimer":DISCLAIMER_CRYSTAL})
    },
    "pyrite-pendant": {
        "price": 800, "usdPrice": 16,
        "desc": "Confidence, motivation, and abundance mindset.",
        "longDesc": ld({"purpose":"Confidence, motivation, and abundance mindset.","crystalsIncluded":"Natural Pyrite","associatedChakras":"Solar Plexus Chakra","description":"The Pyrite Pendant is admired for its metallic golden appearance and association with confidence and determination.","benefits":["Encourages confidence","Supports motivation","Promotes positive thinking","Inspires goal-oriented action"],"howToWear":"Wear during work, business activities, or daily routines.","howToEnergize":"Moonlight charging.","affirmation":"I move forward with confidence and determination.","careInstructions":["Avoid water, perfumes, lotions, and harsh chemicals.","Remove before sleeping, swimming, or exercising.","Store in a clean and dry place.","Cleanse and recharge periodically."],"disclaimer":DISCLAIMER_CRYSTAL})
    },

    # ── NEW PENDANTS (added recently, wrong prices) ───────────────────────────
    "clear-quartz-pendant": {
        "price": 600, "usdPrice": 12,
        "desc": "Clarity, focus, and balance.",
        "longDesc": ld({"purpose":"Clarity, focus, and balance.","crystalsIncluded":"Natural Clear Quartz","associatedChakras":"Crown Chakra","description":"The Clear Quartz Pendant is admired for its timeless beauty and versatility, making it an excellent everyday crystal accessory.","benefits":["Encourages mental clarity","Supports focus and concentration","Promotes balance","Suitable for meditation practices"],"howToWear":"Wear daily near the heart.","howToEnergize":"Moonlight or selenite charging.","affirmation":"My mind is clear, focused, and aligned.","careInstructions":["Avoid water, perfumes, lotions, and harsh chemicals.","Remove before sleeping, swimming, or exercising.","Store in a clean and dry place.","Cleanse and recharge periodically."],"disclaimer":DISCLAIMER_CRYSTAL})
    },
    "malachite-pendant": {
        "price": 1100, "usdPrice": 22,
        "desc": "Transformation, growth, and positive change.",
        "longDesc": ld({"purpose":"Transformation, growth, and positive change.","crystalsIncluded":"Natural Malachite","associatedChakras":"Heart Chakra","description":"The Malachite Pendant showcases striking natural patterns and is valued for its distinctive beauty and symbolism of growth and transformation.","benefits":["Encourages personal growth","Supports positive change","Promotes emotional balance","Elegant statement piece"],"howToWear":"Wear daily or during personal development practices.","howToEnergize":"Moonlight charging.","affirmation":"I welcome positive growth and transformation.","careInstructions":["Avoid water, perfumes, lotions, and harsh chemicals.","Remove before sleeping, swimming, or exercising.","Store in a clean and dry place.","Cleanse and recharge periodically."],"disclaimer":DISCLAIMER_CRYSTAL})
    },
    "red-jasper-pendant": {
        "price": 600, "usdPrice": 12,
        "desc": "Strength, grounding, and stability.",
        "longDesc": ld({"purpose":"Strength, grounding, and stability.","crystalsIncluded":"Natural Red Jasper","associatedChakras":"Root Chakra","description":"A beautiful pendant traditionally associated with resilience, stability, and personal strength.","benefits":["Encourages confidence","Supports grounding","Promotes emotional balance","Suitable for everyday wear"],"howToWear":"Wear daily close to the heart.","howToEnergize":"Moonlight charging.","affirmation":"I am strong, grounded, and resilient.","careInstructions":["Avoid water, perfumes, lotions, and harsh chemicals.","Remove before sleeping, swimming, or exercising.","Store in a clean and dry place.","Cleanse and recharge periodically."],"disclaimer":DISCLAIMER_CRYSTAL})
    },
    "yellow-calcite-pendant": {
        "price": 600, "usdPrice": 12,
        "desc": "Positivity, confidence, and motivation.",
        "longDesc": ld({"purpose":"Positivity, confidence, and motivation.","crystalsIncluded":"Natural Yellow Calcite","associatedChakras":"Solar Plexus Chakra","description":"The Yellow Calcite Pendant features warm golden tones and is traditionally associated with positivity and personal empowerment.","benefits":["Encourages optimism","Supports confidence","Promotes motivation","Bright and elegant design"],"howToWear":"Wear daily or during goal-focused activities.","howToEnergize":"Moonlight charging.","affirmation":"I welcome positivity, confidence, and success.","careInstructions":["Avoid water, perfumes, lotions, and harsh chemicals.","Remove before sleeping, swimming, or exercising.","Store in a clean and dry place.","Cleanse and recharge periodically."],"disclaimer":DISCLAIMER_CRYSTAL})
    },
    "designer-tiger-eye-pendant": {
        "price": 400, "usdPrice": 8,
        "desc": "Focus, confidence, and determination.",
        "longDesc": ld({"purpose":"Focus, confidence, and determination.","crystalsIncluded":"Natural Tiger Eye","associatedChakras":"Solar Plexus Chakra","description":"A simple and elegant Tiger Eye pendant suitable for everyday wear.","benefits":["Encourages confidence","Supports focus","Promotes positivity","Easy to wear daily"],"howToWear":"Wear throughout the day.","howToEnergize":"Moonlight charging.","affirmation":"I am confident, focused, and capable.","careInstructions":["Avoid water, perfumes, lotions, and harsh chemicals.","Remove before sleeping, swimming, or exercising.","Store in a clean and dry place.","Cleanse and recharge periodically."],"disclaimer":DISCLAIMER_CRYSTAL})
    },

    # ── SILVER JEWELLERY ──────────────────────────────────────────────────────
    "silver-rudraksha": {
        "price": 3700, "usdPrice": 74,
        "desc": "Spiritual connection, mindfulness, grounding, and daily devotional wear.",
        "longDesc": ld({"purpose":"Spiritual connection, mindfulness, grounding, and daily devotional wear.","materialIncluded":"Natural Rudraksh Beads, 925 Pure Sterling Silver","associatedChakras":"All Chakras (traditionally associated with spiritual balance)","description":"The 925 Silver Rudraksh Bracelet beautifully combines the timeless significance of natural Rudraksh beads with the elegance of pure sterling silver. Designed for those who appreciate meaningful spiritual jewellery, this bracelet can be worn during meditation, prayer, spiritual practices, or everyday life. Rudraksh beads have been traditionally revered in various spiritual traditions and are often worn as a symbol of devotion, mindfulness, and inner strength.","benefits":["Encourages mindfulness and spiritual awareness","Supports meditation and prayer practices","Symbolises devotion and inner discipline","Elegant combination of silver and Rudraksh","Suitable for everyday wear"],"recommendedHand":"Either hand according to personal comfort and spiritual preference.","whenToWear":"During meditation and prayer, daily spiritual practices, temple visits, and everyday wear.","howToEnergize":"Place before your chosen deity, prayer space, or altar and set your intentions. Moonlight charging may also be used.","affirmation":"I walk my path with devotion, clarity, and inner strength.","careInstructions":["Keep away from harsh chemicals.","Clean silver periodically with a soft cloth.","Store in a dry place when not in use."],"disclaimer":DISCLAIMER_CRYSTAL})
    },
    "silver-rudraksha-mala": {
        "price": 5500, "usdPrice": 110,
        "desc": "Meditation, mantra chanting, prayer, mindfulness, and spiritual practices.",
        "longDesc": ld({"purpose":"Meditation, mantra chanting, prayer, mindfulness, and spiritual practices.","materialIncluded":"Natural Rudraksh Beads, 925 Pure Sterling Silver","beadCount":"54 Beads","associatedChakras":"All Chakras","description":"The 925 Silver Rudraksh Jaap Mala is handcrafted for meditation, mantra recitation, and spiritual practices. Combining sacred Rudraksh beads with pure sterling silver elements, this mala is designed for seekers who value both spiritual tradition and fine craftsmanship. The 54-bead format is commonly used for mantra chanting, meditation, and daily devotional practices.","benefits":["Supports meditation and mantra recitation","Encourages focus and mindfulness","Symbolises spiritual discipline and devotion","Suitable for prayer and daily spiritual practices","Elegant handcrafted design"],"howToUse":"Use during meditation, for mantra chanting, during prayer rituals, or as a spiritual necklace when worn respectfully.","howToEnergize":"Place in your prayer area, before your chosen deity, or use during meditation while setting positive intentions.","affirmation":"My mind is focused, my heart is devoted, and my spirit is at peace.","careInstructions":["Keep dry and clean.","Avoid perfumes and chemicals.","Clean silver portions with a soft cloth.","Store respectfully when not in use."],"disclaimer":DISCLAIMER_CRYSTAL})
    },

    # ── SIGNATURE BRACELETS ───────────────────────────────────────────────────
    "all-in-one-bracelet": {
        "price": 3200, "usdPrice": 64,
        "desc": "Balance, protection, abundance, love, and overall well-being.",
        "longDesc": ld({"purpose":"Balance, protection, abundance, love, and overall well-being.","crystalsIncluded":"Rose Quartz, Green Aventurine, Pyrite, Black Tourmaline, Seven Chakra Stones","associatedChakras":"All Seven Chakras","description":"The Life Harmony Bracelet is a comprehensive crystal combination designed to support balance across various aspects of life. It combines crystals traditionally associated with love, abundance, confidence, protection, and chakra alignment. This bracelet is ideal for individuals seeking an all-in-one crystal companion for daily wear.","benefits":["Encourages overall balance and harmony","Supports confidence and personal growth","Promotes emotional well-being","Inspires positivity and abundance","Supports chakra alignment"],"recommendedHand":"Left Hand","whenToWear":"Daily wear, meditation, work, travel, and spiritual practices.","howToEnergize":"Moonlight charging, selenite charging, and intention setting.","affirmation":"I am balanced, protected, abundant, and aligned with my highest good.","careInstructions":CARE_BRACELET,"disclaimer":DISCLAIMER_CRYSTAL})
    },
    "business-growth-bracelet": {
        "price": 3200, "usdPrice": 64,
        "desc": "Business growth, confidence, focus, opportunity, and success.",
        "longDesc": ld({"purpose":"Business growth, confidence, focus, opportunity, and success.","crystalsIncluded":"Selenite, Citrine, Pyrite, Green Aventurine, Black Tourmaline","associatedChakras":"Solar Plexus Chakra, Heart Chakra, Root Chakra, Crown Chakra","description":"The Business Growth Bracelet combines crystals traditionally associated with clarity, confidence, opportunity, focus, and stability. It is designed for entrepreneurs, business owners, professionals, and individuals working toward meaningful goals.","benefits":["Encourages confidence and leadership","Supports goal-oriented thinking","Promotes focus and motivation","Inspires growth and opportunity","Supports balanced decision-making"],"recommendedHand":"Right Hand","whenToWear":"Business meetings, work, networking events, and goal-setting activities.","howToEnergize":"Moonlight charging, selenite charging, and intention setting.","affirmation":"I confidently attract growth, success, and new opportunities.","careInstructions":CARE_BRACELET,"disclaimer":DISCLAIMER_CRYSTAL})
    },
    "career-success-bracelet": {
        "price": 900, "usdPrice": 18,
        "desc": "Career success, confidence, abundance mindset, and motivation.",
        "longDesc": ld({"purpose":"Career success, confidence, abundance mindset, and motivation.","crystalsIncluded":"Natural Citrine","associatedChakras":"Solar Plexus Chakra","description":"The Citrine Career Success Bracelet is designed to support ambition, positivity, and personal growth. Citrine is traditionally associated with success and motivation, making it ideal for professionals, entrepreneurs, and students.","benefits":["Encourages confidence and motivation","Supports career growth and success mindset","Promotes positivity and focus","Helps attract abundance energy","Suitable for daily wear"],"recommendedHand":"Left Hand","whenToWear":"Work, business activities, goal setting, and daily wear.","howToEnergize":"Moonlight charging or selenite cleansing.","affirmation":"I attract success, growth, and abundance in my career.","careInstructions":CARE_BRACELET,"disclaimer":DISCLAIMER_CRYSTAL})
    },
    "conceive-and-nurture-bracelet": {
        "price": 3200, "usdPrice": 64,
        "desc": "Nurturing energy, emotional balance, self-care, and feminine well-being.",
        "longDesc": ld({"purpose":"Nurturing energy, emotional balance, self-care, and feminine well-being.","crystalsIncluded":"Moonstone, Rose Quartz, Green Aventurine, Rhodonite, Amethyst, Black Tourmaline","associatedChakras":"Heart Chakra, Crown Chakra, Root Chakra, Sacral Chakra","description":"The Conceive & Nurture Bracelet has been thoughtfully designed to symbolise nurturing energy, emotional support, self-love, and inner harmony. This beautiful combination encourages balance, positivity, and mindful self-care practices.","benefits":["Encourages emotional harmony","Supports self-love and nurturing energy","Promotes inner peace and positivity","Encourages mindfulness and balance","Supports emotional well-being"],"recommendedHand":"Left Hand","whenToWear":"Daily wear, meditation, self-care routines, and relaxation practices.","howToEnergize":"Moonlight charging and intention setting.","affirmation":"I nurture myself with love, balance, and positive energy.","careInstructions":CARE_BRACELET,"disclaimer":DISCLAIMER_CRYSTAL})
    },
    "good-luck-bracelet": {
        "price": 900, "usdPrice": 18,
        "desc": "Good luck, opportunity attraction, positivity, and growth.",
        "longDesc": ld({"purpose":"Good luck, opportunity attraction, positivity, and growth.","crystalsIncluded":"Natural Green Aventurine","associatedChakras":"Heart Chakra","description":"The Green Aventurine Good Luck Bracelet is often associated with opportunity and positive outcomes. It is a popular choice for those seeking new beginnings, success in ventures, and emotional balance.","benefits":["Attracts luck and opportunity","Encourages positive energy flow","Supports growth and optimism","Promotes emotional balance","Suitable for everyday wear"],"recommendedHand":"Left Hand","whenToWear":"New ventures, daily wear, travel, and personal development.","howToEnergize":"Moonlight charging or selenite cleansing.","affirmation":"I welcome luck, growth, and positive opportunities into my life.","careInstructions":CARE_BRACELET,"disclaimer":DISCLAIMER_CRYSTAL})
    },
    "love-and-luck-bracelet": {
        "price": 3200, "usdPrice": 64,
        "desc": "Love, positivity, harmony, and fortunate opportunities.",
        "longDesc": ld({"purpose":"Love, positivity, harmony, and fortunate opportunities.","crystalsIncluded":"Green Aventurine, Moonstone","associatedChakras":"Heart Chakra, Crown Chakra","description":"The Love & Luck Bracelet combines crystals traditionally associated with emotional balance, positivity, harmony, and opportunity. It is designed for individuals seeking both meaningful relationships and positive experiences in life.","benefits":["Encourages positivity and optimism","Supports emotional balance","Promotes harmonious relationships","Inspires openness to opportunities"],"recommendedHand":"Left Hand","whenToWear":"Daily wear, social occasions, dating, and personal development activities.","howToEnergize":"Moonlight charging.","affirmation":"I welcome love, harmony, and positive opportunities into my life.","careInstructions":CARE_BRACELET,"disclaimer":DISCLAIMER_CRYSTAL})
    },
    "love-and-peace-bracelet": {
        "price": 3200, "usdPrice": 64,
        "desc": "Love, emotional harmony, compassion, and inner peace.",
        "longDesc": ld({"purpose":"Love, emotional harmony, compassion, and inner peace.","crystalsIncluded":"Rose Quartz, Amethyst","associatedChakras":"Heart Chakra, Crown Chakra","description":"The Love & Peace Bracelet combines two beloved crystals traditionally associated with love, emotional balance, compassion, and tranquility. It is designed to encourage self-love, kindness, and a peaceful state of mind.","benefits":["Encourages self-love and compassion","Supports emotional balance","Promotes inner peace","Inspires kindness and positivity"],"recommendedHand":"Left Hand","whenToWear":"Daily wear, meditation, relaxation, and self-care practices.","howToEnergize":"Moonlight charging or selenite charging.","affirmation":"I radiate love, peace, and emotional harmony.","careInstructions":CARE_BRACELET,"disclaimer":DISCLAIMER_CRYSTAL})
    },
    "luxury-client-attraction-bracelet": {
        "price": 3200, "usdPrice": 64,
        "desc": "Communication, visibility, confidence, and professional attraction.",
        "longDesc": ld({"purpose":"Communication, visibility, confidence, and professional attraction.","crystalsIncluded":"Blue Apatite, Lapis Lazuli","associatedChakras":"Throat Chakra, Third Eye Chakra","description":"The Luxury Client Attraction Bracelet is designed for entrepreneurs, coaches, creators, consultants, and business owners who wish to enhance communication, visibility, and professional confidence. This elegant combination symbolises clarity, self-expression, and meaningful professional connections.","benefits":["Encourages confident communication","Supports visibility and self-expression","Promotes clarity and focus","Inspires professional confidence","Supports meaningful business connections"],"recommendedHand":"Right Hand","whenToWear":"Client meetings, networking events, presentations, content creation, and business activities.","howToEnergize":"Moonlight charging, selenite charging, and intention setting.","affirmation":"I confidently attract aligned opportunities and meaningful professional connections.","careInstructions":CARE_BRACELET,"disclaimer":DISCLAIMER_CRYSTAL})
    },
    "protection-and-wellness-bracelet": {
        "price": 1100, "usdPrice": 22,
        "desc": "Protection, grounding, emotional balance, and energetic stability.",
        "longDesc": ld({"purpose":"Protection, grounding, emotional balance, and energetic stability.","crystalsIncluded":"Black Tourmaline, Hematite, Tiger Eye","associatedChakras":"Root Chakra, Solar Plexus Chakra","description":"The Triple Protection Bracelet is designed as a powerful combination of grounding and protective energies. Carefully crafted with Black Tourmaline, Hematite, and Tiger Eye, this bracelet is ideal for those seeking stability, confidence, and energetic shielding in daily life.","benefits":["Supports energetic protection","Encourages grounding and stability","Enhances confidence and focus","Helps maintain emotional balance","Suitable for daily wear"],"recommendedHand":"Left Hand (can be worn on either hand based on comfort).","whenToWear":"Daily wear, travel, work, and crowded environments.","howToEnergize":"Moonlight charging or selenite cleansing.","affirmation":"I am protected, grounded, and confident in every situation.","careInstructions":CARE_BRACELET,"disclaimer":DISCLAIMER_CRYSTAL})
    },
    "spiritual-cleansing-bracelet": {
        "price": 1450, "usdPrice": 29,
        "desc": "Spiritual cleansing, energy purification, clarity, and high vibration alignment.",
        "longDesc": ld({"purpose":"Spiritual cleansing, energy purification, clarity, and high vibration alignment.","crystalsIncluded":"Natural Selenite","associatedChakras":"Crown Chakra","description":"The Selenite Bracelet is a high-vibration spiritual accessory known for its association with cleansing and energetic clarity. It is designed to help clear stagnant energy and promote a sense of peace and lightness. This bracelet is ideal for meditation, spiritual practices, and daily energetic cleansing support.","benefits":["Supports energetic cleansing","Promotes mental clarity and calmness","Encourages spiritual awareness","Helps maintain high vibrational energy","Suitable for daily spiritual wear"],"recommendedHand":"Left Hand","whenToWear":"Meditation, spiritual practices, and daily wear.","howToEnergize":"Selenite does not require cleansing; however, you may recharge it with moonlight if desired.","affirmation":"I release all negativity and welcome peace and clarity.","careInstructions":CARE_BRACELET,"disclaimer":DISCLAIMER_CRYSTAL})
    },

    # ── SPELL JARS (base price = Mini price) ─────────────────────────────────
    # Variant prices are handled separately below in SPELL_JAR_VARIANTS
    "love-attraction-spell-jar": {
        "price": 2200, "usdPrice": 44,
        "desc": "Love, self-love, harmony, emotional connection, and positive relationships.",
        "longDesc": ld({"purpose":"Love, self-love, harmony, emotional connection, and positive relationships.","description":"The Love Attraction Spell Jar is thoughtfully created to symbolise love, emotional harmony, and positive intentions. It serves as a beautiful reminder to open your heart to meaningful connections, self-worth, and loving energy.","benefits":["Encourages self-love and confidence","Supports positive relationship intentions","Promotes emotional harmony","Inspires openness to love and connection"],"availableSizes":"Mini (₹2,200), Medium (₹4,500), Large (₹7,500)","howToUse":"Place the spell jar in your bedroom, sacred space, personal altar, or anywhere you wish to focus your intentions toward love and emotional well-being.","placementRecommendation":"Bedroom, relationship corner, personal altar, or meditation space.","affirmation":"I attract loving, healthy, and meaningful connections into my life.","careInstructions":["Keep the spell jar in a safe and dry place.","Avoid opening the jar unless specifically instructed.","Handle with care as the contents are delicate.","Recharge your intentions periodically through meditation, prayer, or affirmations."],"disclaimer":DISCLAIMER_SPELL})
    },
    "protection-spell-jar": {
        "price": 2200, "usdPrice": 44,
        "desc": "Protection, grounding, stability, and positive energy.",
        "longDesc": ld({"purpose":"Protection, grounding, stability, and positive energy.","description":"The Protection Spell Jar is created as a symbolic tool for grounding and energetic protection. It serves as a reminder to remain centred, confident, and surrounded by positive intentions.","benefits":["Encourages grounding and stability","Supports feelings of safety and confidence","Promotes a positive environment","Inspires emotional balance"],"availableSizes":"Mini (₹2,200), Medium (₹4,500), Large (₹7,500)","howToUse":"Place near the entrance of your home, workspace, bedside table, or personal sacred space.","placementRecommendation":"Main entrance, workspace, bedside table, or altar.","affirmation":"I am grounded, protected, and surrounded by positive energy.","careInstructions":["Keep the spell jar in a safe and dry place.","Avoid opening the jar unless specifically instructed.","Handle with care as the contents are delicate.","Recharge your intentions periodically through meditation, prayer, or affirmations."],"disclaimer":DISCLAIMER_SPELL})
    },
    "success-manifestation-spell-jar": {
        "price": 2200, "usdPrice": 44,
        "desc": "Motivation, confidence, focus, and goal achievement.",
        "longDesc": ld({"purpose":"Motivation, confidence, focus, and goal achievement.","description":"The Success Manifestation Spell Jar is designed to support intention setting and goal-oriented thinking. It serves as a daily reminder to stay focused, motivated, and committed to your aspirations.","benefits":["Encourages confidence and determination","Supports goal setting and planning","Promotes focus and motivation","Inspires positive action"],"availableSizes":"Mini (₹2,200), Medium (₹4,500), Large (₹7,500)","howToUse":"Place on your work desk, study table, business area, or goal-planning space.","placementRecommendation":"Office desk, study table, workspace, or business area.","affirmation":"I am focused, capable, and aligned with success.","careInstructions":["Keep the spell jar in a safe and dry place.","Avoid opening the jar unless specifically instructed.","Handle with care as the contents are delicate.","Recharge your intentions periodically through meditation, prayer, or affirmations."],"disclaimer":DISCLAIMER_SPELL})
    },
    "abundance-spell-jar": {
        "price": 2200, "usdPrice": 44,
        "desc": "Abundance mindset, prosperity, gratitude, and growth.",
        "longDesc": ld({"purpose":"Abundance mindset, prosperity, gratitude, and growth.","description":"The Abundance Spell Jar is designed to symbolise prosperity, gratitude, and positive opportunities. It serves as a reminder to cultivate an abundant mindset and remain open to growth in all areas of life.","benefits":["Encourages gratitude and positivity","Supports an abundance mindset","Promotes growth and opportunity","Inspires confidence and optimism"],"availableSizes":"Mini (₹2,200), Medium (₹4,500), Large (₹7,500)","howToUse":"Place near your workspace, cash box, business area, or prosperity corner.","placementRecommendation":"Office, business area, cash counter, or manifestation altar.","affirmation":"I welcome abundance, prosperity, and positive opportunities into my life.","careInstructions":["Keep the spell jar in a safe and dry place.","Avoid opening the jar unless specifically instructed.","Handle with care as the contents are delicate.","Recharge your intentions periodically through meditation, prayer, or affirmations."],"disclaimer":DISCLAIMER_SPELL})
    },
    "good-luck-spell-jar": {
        "price": 2200, "usdPrice": 44,
        "desc": "Good fortune, positivity, confidence, and new opportunities.",
        "longDesc": ld({"purpose":"Good fortune, positivity, confidence, and new opportunities.","description":"The Good Luck Spell Jar is created to symbolise positive energy, confidence, and favourable opportunities. It serves as a meaningful reminder to approach life with optimism and trust in new possibilities.","benefits":["Encourages optimism and confidence","Supports positive thinking","Promotes motivation and enthusiasm","Inspires openness to opportunities"],"availableSizes":"Mini (₹2,200), Medium (₹4,500), Large (₹7,500)","howToUse":"Keep on your desk, carry nearby during important events, or place in your personal sacred space.","placementRecommendation":"Work desk, study area, living room, or altar.","affirmation":"I welcome positive opportunities and fortunate experiences into my life.","careInstructions":["Keep the spell jar in a safe and dry place.","Avoid opening the jar unless specifically instructed.","Handle with care as the contents are delicate.","Recharge your intentions periodically through meditation, prayer, or affirmations."],"disclaimer":DISCLAIMER_SPELL})
    },

    # ── DESIGNER / BANGLE BRACELETS (wrong prices) ───────────────────────────
    "amethyst-chips-bracelet":          {"price": 1450, "usdPrice": 28},
    "amethyst-bangle-bracelet":         {"price": 1750, "usdPrice": 35},
    "clear-quartz-bangle-bracelet":     {"price": 1750, "usdPrice": 35},
    "rose-quartz-bangle-bracelet":      {"price": 1750, "usdPrice": 44},
    "tiger-eye-bangle-bracelet":        {"price": 1750, "usdPrice": 35},
    "lapis-lazuli-bangle-bracelet":     {"price": 1750, "usdPrice": 35},
    "lapis-lazuli-chips-bracelet":      {"price": 1750, "usdPrice": 35},
    "green-eventurine-bangle-bracelet": {"price": 1450, "usdPrice": 28},
    "green-eventurine-chips-bracelet":  {"price": 1450, "usdPrice": 28},
    "seven-chakra-bangle-bracelet":     {"price": 1450, "usdPrice": 28},
    "pyrite-bangle-bracelet":           {"price": 1750, "usdPrice": 42},
    "red-jasper-bangle-bracelet":       {"price": 1750, "usdPrice": 35},
}

# Spell jar variant corrections: {variant name: {price, usdPrice}}
SPELL_JAR_VARIANTS = {
    "Mini":          {"price": 2200, "usdPrice": 44},
    "Medium (100ml)":{"price": 4500, "usdPrice": 89},
    "Large (250ml)": {"price": 7500, "usdPrice": 149},
}

# ─────────────────────────────────────────────────────────────────────────────

with open("src/data/products.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Extract the products array (from first [ to last ])
header_match = re.search(r'([\s\S]*?export const products: Product\[\] = )(\[[\s\S]*\]);?$', content)
if not header_match:
    print("ERROR: could not find products array")
    sys.exit(1)

header = header_match.group(1)
array_str = header_match.group(2).rstrip().rstrip(';')

# Parse the JSON array
try:
    products = json.loads(array_str)
except json.JSONDecodeError as e:
    # Fix trailing commas
    fixed = re.sub(r',(\s*[}\]])', r'\1', array_str)
    products = json.loads(fixed)

print(f"Loaded {len(products)} products")

changed = 0
for p in products:
    pid = p.get("id", "")
    if pid not in UPDATES:
        continue

    u = UPDATES[pid]
    new_price = u["price"]
    new_usd   = u["usdPrice"]

    p["price"]            = new_price
    p["originalPrice"]    = orig(new_price)
    p["usdPrice"]         = new_usd
    p["originalUsdPrice"] = uorig(new_usd)

    if "desc" in u:
        p["desc"] = u["desc"]
    if "longDesc" in u:
        p["longDesc"] = u["longDesc"]

    # Fix spell jar variant prices
    if "variants" in p and pid.endswith("-spell-jar"):
        for v in p["variants"]:
            vname = v.get("name", "")
            if vname in SPELL_JAR_VARIANTS:
                vp = SPELL_JAR_VARIANTS[vname]["price"]
                vu = SPELL_JAR_VARIANTS[vname]["usdPrice"]
                v["price"]            = vp
                v["originalPrice"]    = orig(vp)
                v["usdPrice"]         = vu
                v["originalUsdPrice"] = uorig(vu)

    changed += 1
    print(f"  Updated: {pid} → ₹{new_price} / ${new_usd}")

print(f"\nTotal updated: {changed} products")

# Serialize back
out_array = json.dumps(products, ensure_ascii=False, indent=2)
# Restore original numeric formatting style (no trailing .0)
new_content = header + out_array + ";\n"

with open("src/data/products.ts", "w", encoding="utf-8") as f:
    f.write(new_content)

print("✓ Written src/data/products.ts")
