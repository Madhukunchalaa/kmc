import Link from 'next/link';
import ShopFilters from './ShopFilters';
import GiftingExperience from '@/components/GiftingExperience';
import { getAllProducts } from '@/lib/catalog';

export const dynamic = 'force-dynamic';
export const metadata = {
  title: 'Shop · KrissMaagiic Crystals',
  description: 'Handpicked, energised crystals — bracelets, malas, pendants, towers and more.',
};

export default async function ShopPage() {
  const products = await getAllProducts();
  return (
    <>
      <section style={{
        paddingTop: '160px',
        paddingBottom: '60px',
        backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.65)), url("/crystal-hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff'
      }}>
        <div className="container text-center">
          <p className="hero-eyebrow" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <span className="hero-eyebrow-line"></span>
            Crystal Collections
          </p>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2rem,4vw,3.4rem)' }}>
            Shop <span className="highlight">Energised Crystals</span>
          </h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 620, margin: '1rem auto 0' }}>
            Handpicked stones, intuitively selected and ritually cleansed before they reach you.
          </p>
        </div>
      </section>

      <GiftingExperience />

      <section className="section-pad shop-catalog-section" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Galaxy / Starry night background elements */}
        <div className="galaxy-stars-wrapper">
          <div className="galaxy-nebula nebula-purple"></div>
          <div className="galaxy-nebula nebula-blue"></div>
          <div className="space-stars stars-small"></div>
          <div className="space-stars stars-medium"></div>
          <div className="space-stars stars-large"></div>
          <div className="celestial-orbit-1"></div>
          <div className="celestial-orbit-2"></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <ShopFilters products={products} />

          <div className="text-center mt-5">
            <Link href="/crystal-strength" className="btn-celestial-guide">
              <i className="fa-solid fa-book-open"></i>
              <span>Not sure which crystal? Read the guide</span>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
