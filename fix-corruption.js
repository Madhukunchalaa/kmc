const { execSync } = require('child_process');
const fs = require('fs');

// Step 1: Get turquoise-bracelet content from git HEAD (the original)
const origFile = execSync('git show HEAD:src/data/products.ts').toString();
const origLines = origFile.split('\n');
const idIdx = origLines.findIndex(l => l.includes('"id": "turquoise-bracelet"'));
// Find block start
let bStart = idIdx - 1;
while (bStart > 0 && origLines[bStart].trim() !== '{') bStart--;

// Get the header lines (id through longDesc) -- everything up to "chakras"
let longDescLineIdx = idIdx;
while (longDescLineIdx < origLines.length && !origLines[longDescLineIdx].includes('"longDesc"')) longDescLineIdx++;
const chakrasLineIdx = origLines.findIndex((l, i) => i > longDescLineIdx && l.includes('"chakras"'));

// Lines from  { through end of longDesc
const headerLines = origLines.slice(bStart, chakrasLineIdx).join('\n');
console.log('Header to insert:');
console.log(headerLines.substring(0, 200) + '...');
console.log('');

// Step 2: Find and fix the corruption in the current file
let data = fs.readFileSync('src/data/products.ts', 'utf8');

// Find the suleimani-hakeek block close
const suleimaniId = data.indexOf('"id": "suleimani-hakeek-bracelet"');
if (suleimaniId === -1) throw new Error('suleimani-hakeek-bracelet not found');

// Find the closing }, of suleimani-hakeek
const origUsdPos = data.indexOf('"originalUsdPrice": 34', suleimaniId);
const blockClosePos = data.indexOf('\n  },', origUsdPos);

// The corrupted content starts after the '  },' and before the chakras field
const chakrasStart = data.indexOf('\n    "chakras":', blockClosePos + 5);
if (chakrasStart === -1) throw new Error('chakras field not found after blockClosePos');

// The corrupted section is from blockClosePos to chakrasStart
const corruptedSection = data.slice(blockClosePos, chakrasStart);
console.log('Corrupted section (first 100 chars):', JSON.stringify(corruptedSection.substring(0, 100)));
console.log('Corrupted section (last 100 chars):', JSON.stringify(corruptedSection.slice(-100)));
console.log('');

// The correct section should be:
// \n  },  (close of suleimani-hakeek)
// \n<turquoise block header lines through longDesc>
const correctSection = '\n  },\n' + headerLines;
console.log('Correct section (first 100 chars):', JSON.stringify(correctSection.substring(0, 100)));
console.log('Correct section (last 100 chars):', JSON.stringify(correctSection.slice(-100)));

// Apply the fix
data = data.slice(0, blockClosePos) + correctSection + data.slice(chakrasStart);
fs.writeFileSync('src/data/products.ts', data);
console.log('\nFix applied!');
