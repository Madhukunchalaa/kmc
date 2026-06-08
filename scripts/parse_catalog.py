import re
import json

def clean_text(text):
    if not text:
        return ""
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def parse_first_collection():
    with open("scripts/bracelets_by_crystals.txt", "r", encoding="utf-8") as f:
        content = f.read()
        
    # We want to match headers like "1. SEVEN CHAKRA + OM MANI PADME HUM BRACELET"
    # and stop before field names like "Purpose:", "Crystals Included:", etc.
    # The header is "number. TITLE"
    # Pattern: \n\s*(\d+)\.\s*([A-Z\s’'\+\-\(\)\/]+?)(?=\s*(?:Purpose:|Crystals Included:|Associated Chakras:|Description:|Benefits:|Recommended Hand|When to Wear:|How to Energize:|Affirmation:|--- Page|$))
    pattern = r"\n\s*(\d+)\.\s*([A-Z\s’'\+\-\(\)\/\n]+?)(?=\s*(?:Purpose:|Crystals Included:|Associated Chakras:|Description:|Benefits:|Recommended Hand|When to Wear:|How to Energize:|Affirmation:|--- Page|$))"
    matches = list(re.finditer(pattern, content))
    
    items = []
    for idx, match in enumerate(matches):
        num = int(match.group(1))
        name = clean_text(match.group(2))
        
        start_pos = match.end()
        end_pos = matches[idx + 1].start() if idx + 1 < len(matches) else len(content)
        
        item_text = content[start_pos:end_pos]
        
        # Parse fields using regex
        purpose_m = re.search(r"Purpose:\s*(.*?)(?=(?:Crystals Included:|Associated Chakras:|Description:|Benefits:|Recommended Hand|When to Wear:|How to Energize:|Affirmation:|--- Page|$))", item_text, re.DOTALL | re.IGNORECASE)
        crystals_m = re.search(r"Crystals Included:\s*(.*?)(?=(?:Associated Chakras:|Description:|Benefits:|Recommended Hand|When to Wear:|How to Energize:|Affirmation:|--- Page|$))", item_text, re.DOTALL | re.IGNORECASE)
        chakras_m = re.search(r"Associated Chakras:\s*(.*?)(?=(?:Description:|Benefits:|Recommended Hand|When to Wear:|How to Energize:|Affirmation:|--- Page|$))", item_text, re.DOTALL | re.IGNORECASE)
        desc_m = re.search(r"Description:\s*(.*?)(?=(?:Benefits:|Recommended Hand|When to Wear:|How to Energize:|Affirmation:|--- Page|$))", item_text, re.DOTALL | re.IGNORECASE)
        benefits_m = re.search(r"Benefits:\s*(.*?)(?=(?:Recommended Hand|When to Wear:|How to Energize:|Affirmation:|--- Page|$))", item_text, re.DOTALL | re.IGNORECASE)
        hand_m = re.search(r"Recommended Hand to Wear:\s*(.*?)(?=(?:When to Wear:|How to Energize:|Affirmation:|--- Page|$))", item_text, re.DOTALL | re.IGNORECASE)
        when_m = re.search(r"When to Wear:\s*(.*?)(?=(?:How to Energize:|Affirmation:|--- Page|$))", item_text, re.DOTALL | re.IGNORECASE)
        energize_m = re.search(r"How to Energize:\s*(.*?)(?=(?:Affirmation:|--- Page|$))", item_text, re.DOTALL | re.IGNORECASE)
        affirmation_m = re.search(r"Affirmation:\s*(.*?)(?=(?:--- Page|$))", item_text, re.DOTALL | re.IGNORECASE)
        
        benefits = []
        if benefits_m:
            raw_benefits = benefits_m.group(1)
            # Find bulleted lists
            bullets = re.findall(r"(?:•|\-|\*)\s*(.*?)(?=(?:•|\-|\*|$))", raw_benefits, re.DOTALL)
            if bullets:
                benefits = [clean_text(b) for b in bullets if b.strip()]
            else:
                benefits = [clean_text(raw_benefits)]
                
        chakras = []
        if chakras_m:
            raw_chakras = chakras_m.group(1).replace("Chakra", "").replace("and", "").replace(".", "")
            chakras = [c.strip() for c in re.split(r"[,/]", raw_chakras) if c.strip()]
            
        items.append({
            "num": num,
            "name": name if name.endswith("BRACELET") else f"{name} BRACELET",
            "purpose": clean_text(purpose_m.group(1)) if purpose_m else "",
            "crystals": clean_text(crystals_m.group(1)) if crystals_m else "",
            "chakras": chakras,
            "desc": clean_text(desc_m.group(1)) if desc_m else "",
            "benefits": benefits,
            "hand": clean_text(hand_m.group(1)) if hand_m else "",
            "when": clean_text(when_m.group(1)) if when_m else "",
            "energize": clean_text(energize_m.group(1)) if energize_m else "",
            "affirmation": clean_text(affirmation_m.group(1)).replace('“', '"').replace('”', '"') if affirmation_m else ""
        })
        
    return items

def parse_designer_prices():
    prices = {}
    with open("scripts/designer_bracelets.txt", "r", encoding="utf-8") as f:
        content = f.read()
    
    section_match = re.search(r"UPDATED FIRST CRYSTAL BRACELET COLLECTION\s+PRICE LIST(.*)", content, re.DOTALL | re.IGNORECASE)
    if section_match:
        # Match e.g., "1. Seven Chakra + Om Mani Padme Hum \n ₹1450 INR | $28 USD"
        # We need to handle possible newlines between item name and price
        item_regex = r"(\d+)\.\s*([^\n₹]+?)\s*\n?\s*₹(\d+)\s*INR\s*\|\s*\$(\d+)\s*USD"
        items = re.findall(item_regex, section_match.group(1), re.IGNORECASE)
        for num, name, inr, usd in items:
            name_clean = clean_text(name).lower()
            prices[name_clean] = {
                "inr": int(inr),
                "usd": int(usd)
            }
    return prices

def parse_designer_collection():
    with open("scripts/designer_bracelets.txt", "r", encoding="utf-8") as f:
        content = f.read()
        
    section_match = re.search(r"DESIGNER BRACELETS COLLECTION(.*?)(?:UPDATED FIRST CRYSTAL BRACELET COLLECTION|$)", content, re.DOTALL | re.IGNORECASE)
    if not section_match:
        return []
        
    sec_content = section_match.group(1)
    
    item_titles = [
        "EARTH-TONE MOTHER OF PEARL BRACELET",
        "GREEN MOTHER OF PEARL SHELL BRACELET",
        "NATURAL MOTHER OF PEARL SHELL BRACELET",
        "JADE BRACELET",
        "SELENITE BRACELET",
        "OM MANI PADME HUM + PIXIU BLACK OBSIDIAN BRACELET"
    ]
    
    items = []
    for idx, title in enumerate(item_titles):
        # We use a case-insensitive search and ignore trailing whitespace
        # Let's search with a regex to match title with optional spaces or page separators
        escaped_title = title.replace("+", r"\+").replace(" ", r"\s+")
        title_pattern = rf"\b{escaped_title}\b"
        
        match = re.search(title_pattern, sec_content, re.IGNORECASE)
        if not match:
            print(f"Warning: Could not find designer collection item '{title}' in text.")
            continue
            
        start_pos = match.end()
        
        # Find start of next item to limit search
        end_pos = len(sec_content)
        if idx + 1 < len(item_titles):
            next_title = item_titles[idx + 1]
            escaped_next_title = next_title.replace("+", r"\+").replace(" ", r"\s+")
            next_match = re.search(rf"\b{escaped_next_title}\b", sec_content, re.IGNORECASE)
            if next_match:
                end_pos = next_match.start()
                
        item_text = sec_content[start_pos:end_pos]
        
        price_m = re.search(r"Price:\s*(?:₹)?(\d+)\s*INR\s*\|\s*\$(\d+)\s*USD", item_text, re.IGNORECASE)
        purpose_m = re.search(r"Purpose:\s*(.*?)(?=(?:Material Included:|Crystals Included:|Associated Chakra:|Description:|Benefits:|Recommended Hand|How to Energize:|Affirmation:|--- Page|$))", item_text, re.DOTALL | re.IGNORECASE)
        mat_m = re.search(r"(?:Material Included:|Crystals Included:)\s*(.*?)(?=(?:Associated Chakra:|Associated Chakras:|Description:|Benefits:|Recommended Hand|How to Energize:|Affirmation:|--- Page|$))", item_text, re.DOTALL | re.IGNORECASE)
        chakra_m = re.search(r"Associated Chakra(?:s)?:\s*(.*?)(?=(?:Description:|Benefits:|Recommended Hand|How to Energize:|Affirmation:|--- Page|$))", item_text, re.DOTALL | re.IGNORECASE)
        desc_m = re.search(r"Description:\s*(.*?)(?=(?:Benefits:|Recommended Hand|How to Energize:|Affirmation:|--- Page|$))", item_text, re.DOTALL | re.IGNORECASE)
        benefits_m = re.search(r"Benefits:\s*(.*?)(?=(?:Recommended Hand|How to Energize:|Affirmation:|--- Page|$))", item_text, re.DOTALL | re.IGNORECASE)
        hand_m = re.search(r"Recommended Hand to Wear:\s*(.*?)(?=(?:How to Energize:|Affirmation:|--- Page|$))", item_text, re.DOTALL | re.IGNORECASE)
        energize_m = re.search(r"How to Energize:\s*(.*?)(?=(?:Affirmation:|--- Page|$))", item_text, re.DOTALL | re.IGNORECASE)
        affirmation_m = re.search(r"Affirmation:\s*(.*?)(?=(?:--- Page|$))", item_text, re.DOTALL | re.IGNORECASE)
        
        benefits = []
        if benefits_m:
            raw_benefits = benefits_m.group(1)
            bullets = re.findall(r"(?:•|\-|\*)\s*(.*?)(?=(?:•|\-|\*|$))", raw_benefits, re.DOTALL)
            if bullets:
                benefits = [clean_text(b) for b in bullets if b.strip()]
            else:
                benefits = [clean_text(raw_benefits)]
                
        chakras = []
        if chakra_m:
            raw_chakras = chakra_m.group(1).replace("Chakra", "").replace("and", "").replace(".", "")
            chakras = [c.strip() for c in re.split(r"[,/]", raw_chakras) if c.strip()]
            
        items.append({
            "name": title,
            "price": int(price_m.group(1)) if price_m else 0,
            "usdPrice": int(price_m.group(2)) if price_m else 0,
            "purpose": clean_text(purpose_m.group(1)) if purpose_m else "",
            "crystals": clean_text(mat_m.group(1)) if mat_m else "",
            "chakras": chakras,
            "desc": clean_text(desc_m.group(1)) if desc_m else "",
            "benefits": benefits,
            "hand": clean_text(hand_m.group(1)) if hand_m else "",
            "energize": clean_text(energize_m.group(1)) if energize_m else "",
            "affirmation": clean_text(affirmation_m.group(1)).replace('“', '"').replace('”', '"') if affirmation_m else ""
        })
        
    return items

if __name__ == "__main__":
    first_col = parse_first_collection()
    designer_prices = parse_designer_prices()
    designer_col = parse_designer_collection()
    
    print(f"Parsed {len(first_col)} first collection items.")
    print(f"Parsed {len(designer_prices)} designer prices.")
    print(f"Parsed {len(designer_col)} designer collection items.")
    
    data = {
        "first_collection": first_col,
        "designer_prices": designer_prices,
        "designer_collection": designer_col
    }
    
    with open("scripts/parsed_catalog.json", "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)
    print("Saved to scripts/parsed_catalog.json")
