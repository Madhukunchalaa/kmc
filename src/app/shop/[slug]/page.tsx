import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllProducts, getProductBySlug } from '@/lib/catalog';
import { resolveProductImage } from '@/lib/resolveProductImage';
import ProductCard from '@/components/ProductCard';
import ProductBuyPanel from './ProductBuyPanel';
import ProductDescription from './ProductDescription';

export const dynamic = 'force-dynamic';

export default async function ProductPage(props: PageProps<'/shop/[slug]'>) {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const all = await getAllProducts();
  const related = all.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, 3);

  // Safely parse JSON description if present in desc or longDesc
  let descObj: {
    description?: string;
    whoShouldWear?: string[];
    benefits?: string[];
    howToWear?: string[];
    careInstructions?: string[];
    disclaimer?: string;
  } | null = null;

  let rawJsonField = '';
  if (product.desc && (product.desc.trim().startsWith('{') || product.desc.trim().startsWith('['))) {
    rawJsonField = product.desc;
  } else if (product.longDesc && (product.longDesc.trim().startsWith('{') || product.longDesc.trim().startsWith('['))) {
    rawJsonField = product.longDesc;
  }

  try {
    if (rawJsonField) {
      descObj = JSON.parse(rawJsonField);
    }
  } catch (e) {
    // Fail silently
  }

  const cleanDescText = descObj ? descObj.description || '' : product.desc;

  const legacy = {
    id: product.slug,
    name: product.name, category: product.category, subcategory: product.subcategory,
    price: product.price, originalPrice: product.originalPrice, image: product.image,
    badge: product.badge, desc: cleanDescText || product.desc, chakras: product.chakras,
  };

  return (
    <>
      <section style={{ paddingTop: '140px', paddingBottom: '40px', background: 'linear-gradient(135deg,#1C0A02,#2D1B0E)', color: '#fff' }}>
        <div className="container">
          <div style={{ fontSize: '0.85rem', opacity: 0.7 }}>
            <Link href="/" style={{ color: 'inherit' }}>Home</Link>
            {' / '}
            <Link href="/shop" style={{ color: 'inherit' }}>Shop</Link>
            {' / '}
            <span style={{ color: 'var(--accent,#E8C99A)' }}>{product.name}</span>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-6">
              <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: 'var(--shadow-lg, 0 20px 50px rgba(0,0,0,0.1))' }}>
                <img src={resolveProductImage(product.image, product.category, product.name)} alt={product.name} style={{ width: '100%', display: 'block' }} />
              </div>
            </div>
            <div className="col-lg-6">
              <span className="product-category" style={{ fontSize: '0.85rem' }}>{product.subcategory}</span>
              <h1 className="section-title" style={{ textAlign: 'left', fontSize: '2.4rem', marginTop: 8 }}>{product.name}</h1>
              <div className="d-flex align-items-center gap-3 mt-3">
                <span className="product-price" style={{ fontSize: '1.6rem' }}>
                  {product.originalPrice && (
                    <span className="original">
                      <span className="currency">₹</span>{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                  <span className="currency">₹</span>{product.price.toLocaleString('en-IN')}
                </span>
                {product.badge && <span className={`product-badge ${product.badge.toLowerCase()}`} style={{ position: 'static' }}>{product.badge}</span>}
              </div>
              
              {/* Product description / JSON layout rendering */}
              <ProductDescription descObj={descObj} desc={product.desc} longDesc={product.longDesc} />

              {product.chakras.length > 0 && (
                <div className="mt-4">
                  <h6 className="footer-heading" style={{ color: 'var(--text,#2D1B0E)' }}>Aligned Chakras</h6>
                  <div className="crystal-tags" style={{ justifyContent: 'flex-start' }}>
                    {product.chakras.map((ch) => <span className="crystal-tag" key={ch}>{ch}</span>)}
                  </div>
                </div>
              )}

              <ProductBuyPanel productId={product.slug} stock={product.stock} />

              <ul style={{ marginTop: 32, padding: 0, listStyle: 'none', display: 'grid', gap: 10, color: 'var(--text-light,#666)', fontSize: '0.9rem' }}>
                <li><i className="fa-solid fa-shield-halved me-2" style={{ color: 'var(--primary,#C8956C)' }}></i> 100% authentic, ritually energised</li>
                <li><i className="fa-solid fa-truck-fast me-2" style={{ color: 'var(--primary,#C8956C)' }}></i> Pan-India shipping in 4–7 business days</li>
                <li><i className="fa-solid fa-hand-sparkles me-2" style={{ color: 'var(--primary,#C8956C)' }}></i> Each piece intuitively selected by Kriss</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="products-section section-pad" style={{ background: 'var(--bg-soft,#FAF6F1)' }}>
          <div className="container">
            <div className="text-center mb-5">
              <span className="section-eyebrow">You May Also Love</span>
              <h2 className="section-title">Similar <span>Crystals</span></h2>
              <div className="divider-ornament"><i className="fa-solid fa-diamond-turn-right"></i></div>
            </div>
            <div className="row g-4">
              {related.map((p) => (
                <div className="col-sm-6 col-lg-4" key={p.slug}>
                  <ProductCard product={{
                    id: p.slug, name: p.name, category: p.category, subcategory: p.subcategory,
                    price: p.price, originalPrice: p.originalPrice, image: p.image, badge: p.badge,
                    desc: p.desc, chakras: p.chakras,
                  }} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
