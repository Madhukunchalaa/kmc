import re
import json
import os

# Helper to normalize names for matching
def get_match_key(name):
    name = name.lower()
    name = name.replace("crystal", "")
    name = name.replace("bracelet", "")
    name = name.replace("mala", "")
    name = name.replace("bangle", "")
    name = name.replace("chips", "")
    name = name.replace("eventurine", "aventurine")
    name = name.replace("’", "").replace("'", "")
    name = re.sub(r'[^a-z0-9]', '', name)
    return name.strip()

def slugify(name):
    name = name.lower()
    name = name.replace("+", "and")
    name = re.sub(r'[^a-z0-9\s-]', '', name)
    name = re.sub(r'[\s-]+', '-', name)
    return name.strip("-")

def main():
    # 1. Load parsed catalog data
    with open("scripts/parsed_catalog.json", "r", encoding="utf-8") as f:
        catalog = json.load(f)
        
    first_col = catalog["first_collection"]
    designer_prices = catalog["designer_prices"]
    designer_col = catalog["designer_collection"]
    
    # Create matching dictionary for first collection
    # Key: normalized name, Value: parsed catalog item
    first_col_map = {}
    for item in first_col:
        key = get_match_key(item["name"])
        first_col_map[key] = item
        
    # Same for designer collection
    designer_col_map = {}
    for item in designer_col:
        key = get_match_key(item["name"])
        designer_col_map[key] = item
        
    # 2. Load src/data/products.ts as text
    filepath = "src/data/products.ts"
    with open(filepath, "r", encoding="utf-8") as f:
        ts_content = f.read()
        
    # Extract the array content between 'export const products: Product[] = [' and '];'
    array_match = re.search(r"export const products: Product\[\] = \[(.*?)\];\s*$", ts_content, re.DOTALL)
    if not array_match:
        print("Error: Could not locate products array in src/data/products.ts")
        return
        
    array_text = array_match.group(1).strip()
    
    # We clean up the array text to make it valid JSON
    # Remove trailing commas from objects or arrays
    array_text_clean = re.sub(r',\s*\]', ']', array_text)
    array_text_clean = re.sub(r',\s*\}', '}', array_text_clean)
    
    try:
        existing_products = json.loads(f"[{array_text_clean}]")
    except Exception as e:
        print("Error parsing products list as JSON:", e)
        # Try a fallback regex parser if json.loads fails
        print("Please check the products.ts format.")
        return
        
    print(f"Loaded {len(existing_products)} existing products from products.ts")
    
    # Track which catalog items are matched
    matched_catalog_keys = set()
    matched_designer_keys = set()
    
    # Helper to construct longDesc
    def build_long_desc(item):
        benefits_list = item["benefits"]
        if not benefits_list or (len(benefits_list) == 1 and benefits_list[0] == ""):
            benefits_list = [item["purpose"]]
            
        care_instr = [f"Cleanse and energize by: {item['energize']}"] if item.get("energize") else []
        care_instr.extend([
            "Avoid contact with water, soap, and cosmetic chemicals.",
            "Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.",
            "Store in a dry, safe, clean velvet pouch or container when not in use."
        ])
        
        who_wear = []
        if item["chakras"]:
            who_wear.append(f"People seeking to balance their {', '.join(item['chakras'])} Chakra.")
        who_wear.extend([
            "Individuals seeking spiritual growth, clarity, and protection in their daily life.",
            "Anyone experiencing low energy, stress, or blockages in personal development."
        ])
        
        long_desc_dict = {
            "description": item["desc"],
            "whoShouldWear": who_wear,
            "benefits": benefits_list,
            "howToWear": [
                f"Wear on the {item['hand']} as recommended." if item.get("hand") else "Keep close to your body or wear daily.",
                f"Best worn during: {item['when']}." if item.get("when") else "Best worn during meditation, yoga, or professional work."
            ],
            "careInstructions": care_instr,
            "disclaimer": "Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments."
        }
        return json.dumps(long_desc_dict)

    # 3. Update existing products
    updated_count = 0
    for p in existing_products:
        if p["category"] != "bracelets":
            continue
            
        norm_name = get_match_key(p["name"])
        
        # Check if it matches first collection
        if norm_name in first_col_map:
            cat_item = first_col_map[norm_name]
            matched_catalog_keys.add(norm_name)
            
            # Find price
            price_key = cat_item["name"].lower().replace(" bracelet", "").strip()
            price_info = designer_prices.get(price_key) or designer_prices.get(norm_name)
            
            if price_info:
                p["price"] = price_info["inr"]
                p["originalPrice"] = int(price_info["inr"] * 1.2)
            else:
                # Fallback to default if price list missed it
                print(f"Warning: Price missing for {cat_item['name']}, keeping existing.")
                
            # Update name and metadata
            p["name"] = cat_item["name"].title().replace("Om Mani Padme Hum", "Om Mani Padme Hum").replace("Evileye", "Evil Eye")
            p["desc"] = cat_item["purpose"] if cat_item["purpose"] else p["desc"]
            p["chakras"] = cat_item["chakras"]
            p["longDesc"] = build_long_desc(cat_item)
            updated_count += 1
            
        # Check if it matches designer collection
        elif norm_name in designer_col_map:
            des_item = designer_col_map[norm_name]
            matched_designer_keys.add(norm_name)
            
            p["price"] = des_item["price"]
            p["originalPrice"] = int(des_item["price"] * 1.2)
            p["name"] = des_item["name"].title()
            p["desc"] = des_item["purpose"] if des_item["purpose"] else p["desc"]
            p["chakras"] = des_item["chakras"]
            p["longDesc"] = build_long_desc(des_item)
            p["subcategory"] = "Designer Bracelets"
            updated_count += 1
            
    print(f"Updated {updated_count} existing bracelets in data store.")
    
    # 4. Insert missing first collection items
    inserted_count = 0
    for key, cat_item in first_col_map.items():
        if key not in matched_catalog_keys:
            # Construct new item
            price_key = cat_item["name"].lower().replace(" bracelet", "").strip()
            price_info = designer_prices.get(price_key) or designer_prices.get(key)
            price = price_info["inr"] if price_info else 1250 # fallback
            
            new_p = {
                "id": slugify(cat_item["name"]),
                "name": cat_item["name"].title().replace("Om Mani Padme Hum", "Om Mani Padme Hum").replace("Evileye", "Evil Eye"),
                "category": "bracelets",
                "subcategory": "Bracelets",
                "price": price,
                "originalPrice": int(price * 1.2),
                "image": "/images/products/bracelet.png",
                "badge": None,
                "desc": cat_item["purpose"] if cat_item["purpose"] else f"Beautiful {cat_item['crystals']} bracelet for healing.",
                "longDesc": build_long_desc(cat_item),
                "chakras": cat_item["chakras"]
            }
            existing_products.append(new_p)
            inserted_count += 1
            
    # 5. Insert missing designer collection items
    for key, des_item in designer_col_map.items():
        if key not in matched_designer_keys:
            new_p = {
                "id": slugify(des_item["name"]),
                "name": des_item["name"].title(),
                "category": "bracelets",
                "subcategory": "Designer Bracelets",
                "price": des_item["price"],
                "originalPrice": int(des_item["price"] * 1.2),
                "image": "/images/products/bracelet.png",
                "badge": None,
                "desc": des_item["purpose"] if des_item["purpose"] else f"Exclusive {des_item['crystals']} designer bracelet.",
                "longDesc": build_long_desc(des_item),
                "chakras": des_item["chakras"]
            }
            existing_products.append(new_p)
            inserted_count += 1
            
    print(f"Inserted {inserted_count} new products into data store.")
    
    # 6. Format and write products back to products.ts
    # Convert list of dicts to pretty TS array format
    # Indentation: each object starts on its own line
    formatted_objects = []
    for p in existing_products:
        # Serialise to pretty JSON
        obj_str = json.dumps(p, indent=2, ensure_ascii=False)
        # Indent each line by 2 spaces to align with array formatting
        indented_lines = []
        for line in obj_str.split("\n"):
            indented_lines.append("  " + line)
        formatted_objects.append("\n".join(indented_lines))
        
    new_array_content = ",\n".join(formatted_objects)
    
    # Replace the old array inside ts_content
    prefix = ts_content[:array_match.start(1)]
    suffix = ts_content[array_match.end(1):]
    
    new_ts_content = f"{prefix}\n{new_array_content}\n{suffix}"
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_ts_content)
        
    print("Successfully synchronized src/data/products.ts!")

if __name__ == "__main__":
    main()
