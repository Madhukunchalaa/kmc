import fs from 'fs';

function main() {
  if (!fs.existsSync('scripts/r2-files.json')) {
    console.error('Error: scripts/r2-files.json not found.');
    return;
  }

  const files: { key: string; size: number }[] = JSON.parse(
    fs.readFileSync('scripts/r2-files.json', 'utf-8')
  );

  const folders: Record<string, string[]> = {};

  for (const f of files) {
    if (f.key.endsWith('/')) continue; // Skip folders themselves

    const parts = f.key.split('/');
    let folder = 'root';
    let filename = f.key;
    if (parts.length > 1) {
      folder = parts.slice(0, -1).join('/');
      filename = parts[parts.length - 1];
    }

    if (!folders[folder]) {
      folders[folder] = [];
    }
    folders[folder].push(filename);
  }

  console.log('Unique folders found:');
  for (const folder of Object.keys(folders)) {
    console.log(`- "${folder}" (${folders[folder].length} files)`);
  }

  console.log('\n--- SAMPLE FILES BY FOLDER ---');
  for (const [folder, filenames] of Object.entries(folders)) {
    console.log(`\nFolder: "${folder}"`);
    console.log(filenames.slice(0, 20).map(f => `  * "${f}"`).join('\n'));
    if (filenames.length > 20) {
      console.log(`  ... and ${filenames.length - 20} more files`);
    }
  }
}

main();
