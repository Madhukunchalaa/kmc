const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

const target = `@media (max-width: 768px) {
  .hero-immersive { flex-direction: column; justify-content: flex-end; padding-bottom: 8rem; }
  .hero-glass-panel { margin-top: 6rem; background: rgba(15, 9, 4, 0.7); }
  .hero-glass-ctas { flex-direction: column; }
  .hero-immersive-stats { display: none; }
}`;

const replacement = `@media (max-width: 768px) {
  .hero-immersive { flex-direction: column; justify-content: flex-end; padding-bottom: 8rem; }
  .hero-glass-panel { margin-top: 6rem; background: rgba(15, 9, 4, 0.7); }
  .hero-glass-ctas { flex-direction: column; }
  .hero-immersive-stats { display: none; }
  .hero-immersive-img { object-position: right center !important; }
}`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync(file, content);
  console.log('Successfully updated globals.css');
} else {
  console.log('Target not found');
}
