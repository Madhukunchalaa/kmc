import re

with open("src/data/products.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Find all id, name, price, usdPrice
ids = re.findall(r'"id":\s*"([^"]+)"', content)
names = re.findall(r'"name":\s*"([^"]+)"', content)
prices = re.findall(r'"price":\s*(\d+)', content)
usd_prices = re.findall(r'"usdPrice":\s*(\d+)', content)

print(f"Total products: {len(ids)}")
print()
for i in range(len(ids)):
    usd = usd_prices[i] if i < len(usd_prices) else "N/A"
    p = prices[i] if i < len(prices) else "N/A"
    print(f"{i+1:3}. id={ids[i]}\n     name={names[i]}\n     INR={p}, USD={usd}")
    print()
