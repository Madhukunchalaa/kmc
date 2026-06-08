import pypdf
import os

pdf_files = [
    "Bracelets by crystals.pdf",
    "Designer bracelets .pdf"
]

keywords = [
    "Signature", "All in one", "Business growth", "Career success", "Conceive", 
    "Good luck", "Love and luck", "Love and peace", "Luxury client", 
    "Spiritual cleansing", "Protection and wellness", "Spell jar"
]

for pdf in pdf_files:
    if not os.path.exists(pdf):
        print(f"File not found: {pdf}")
        continue
    
    print(f"\n--- Searching in {pdf} ---")
    reader = pypdf.PdfReader(pdf)
    for i, page in enumerate(reader.pages):
        text = page.extract_text()
        for kw in keywords:
            if kw.lower() in text.lower():
                print(f"Page {i+1}: Found keyword '{kw}'")
                # Print a small context snippet around it
                pos = text.lower().find(kw.lower())
                start = max(0, pos - 50)
                end = min(len(text), pos + len(kw) + 100)
                print(f"  Context: ...{text[start:end].strip().replace(chr(10), ' ')}...")
