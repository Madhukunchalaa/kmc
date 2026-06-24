import Link from 'next/link';
import { connectMongoose } from '@/lib/mongoose';
import Blog from '@/models/Blog';
import ScrollFade from '@/components/ScrollFade';

export const dynamic = 'force-dynamic';
export const metadata = {
  title: 'Blog · KrissMaagiic Crystals',
  description: 'Spiritual insights, crystal healing guides, and esoteric wisdom from Kriss.',
};

export default async function BlogListingPage() {
  await connectMongoose();
  const blogs = await Blog.find({ published: true, isDeleted: { $ne: true } })
    .sort({ publishedAt: -1, createdAt: -1 })
    .lean();

  const featured = blogs[0] as any;
  const rest = blogs.slice(1) as any[];

  return (
    <>
      <style>{`
        .blog-hero-section {
          padding-top: 160px;
          padding-bottom: 100px;
          background: linear-gradient(135deg, #1C0A02 0%, #2D1B0E 40%, #3B1F10 70%, #1C0A02 100%);
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .blog-hero-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 30% 50%, rgba(200,149,108,0.12) 0%, transparent 60%),
                      radial-gradient(ellipse at 70% 30%, rgba(232,201,154,0.08) 0%, transparent 50%);
          pointer-events: none;
        }
        .blog-hero-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .blog-hero-orb-1 {
          width: 400px; height: 400px;
          top: -100px; right: -80px;
          background: radial-gradient(circle, rgba(200,149,108,0.07) 0%, transparent 70%);
        }
        .blog-hero-orb-2 {
          width: 300px; height: 300px;
          bottom: -60px; left: -60px;
          background: radial-gradient(circle, rgba(232,201,154,0.06) 0%, transparent 70%);
        }
        .blog-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--accent, #E8C99A);
          margin-bottom: 1.2rem;
        }
        .blog-eyebrow-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--accent, #E8C99A);
          display: inline-block;
        }
        .blog-hero-title {
          font-family: var(--font-heading, serif);
          font-size: clamp(2.8rem, 5.5vw, 5rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 1.2rem;
        }
        .blog-hero-title span {
          background: linear-gradient(135deg, #E8C99A, #C8956C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .blog-hero-sub {
          color: rgba(255,255,255,0.65);
          font-size: 1.05rem;
          max-width: 560px;
          margin: 0 auto 2.5rem;
          line-height: 1.7;
        }
        .blog-hero-tags {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
        }
        .blog-hero-tag {
          padding: 6px 18px;
          border-radius: 30px;
          border: 1px solid rgba(200,149,108,0.3);
          color: rgba(255,255,255,0.7);
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          background: rgba(200,149,108,0.08);
          cursor: default;
        }

        /* Featured post */
        .blog-featured-wrap {
          background: #fff;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 460px;
          text-decoration: none;
          color: inherit;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .blog-featured-wrap:hover {
          transform: translateY(-6px);
          box-shadow: 0 30px 80px rgba(200,149,108,0.15);
        }
        @media (max-width: 768px) {
          .blog-featured-wrap { grid-template-columns: 1fr; }
        }
        .blog-featured-img-wrap {
          position: relative;
          overflow: hidden;
        }
        .blog-featured-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .blog-featured-wrap:hover .blog-featured-img-wrap img {
          transform: scale(1.05);
        }
        .blog-featured-badge {
          position: absolute;
          top: 20px; left: 20px;
          background: linear-gradient(135deg, #C8956C, #E8C99A);
          color: #1C0A02;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 20px;
        }
        .blog-featured-content {
          padding: 48px 44px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #fff;
        }
        .blog-date-tag {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--primary, #C8956C);
          margin-bottom: 0.8rem;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .blog-featured-content h2 {
          font-family: var(--font-heading, serif);
          font-size: clamp(1.5rem, 2.5vw, 2.2rem);
          color: #1C0A02;
          line-height: 1.25;
          margin-bottom: 1rem;
        }
        .blog-featured-content p {
          color: #666;
          font-size: 0.97rem;
          line-height: 1.7;
          margin-bottom: 2rem;
        }
        .blog-read-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #C8956C, #A7744D);
          color: #fff;
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          padding: 12px 26px;
          border-radius: 30px;
          width: fit-content;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(200,149,108,0.3);
        }
        .blog-featured-wrap:hover .blog-read-btn {
          box-shadow: 0 8px 28px rgba(200,149,108,0.5);
          gap: 14px;
        }

        /* Grid cards */
        .blog-cards-section {
          background: #FAF6F1;
          padding: 80px 0;
        }
        .blog-section-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .blog-section-header h2 {
          font-family: var(--font-heading, serif);
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          color: #1C0A02;
          margin-bottom: 0.4rem;
        }
        .blog-section-header h2 span {
          color: var(--primary, #C8956C);
        }
        .blog-section-header p {
          color: #888;
          font-size: 0.95rem;
        }
        .blog-divider-gem {
          margin: 10px auto 0;
          width: 40px; height: 2px;
          background: linear-gradient(90deg, transparent, #C8956C, transparent);
          border-radius: 2px;
        }

        /* Blog cards */
        .blog-card-new {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          text-decoration: none;
          color: inherit;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          border: 1px solid rgba(200,149,108,0.06);
        }
        .blog-card-new:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(200,149,108,0.14);
          border-color: rgba(200,149,108,0.15);
        }
        .blog-card-img-wrap {
          height: 220px;
          overflow: hidden;
          position: relative;
        }
        .blog-card-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .blog-card-new:hover .blog-card-img-wrap img {
          transform: scale(1.08);
        }
        .blog-card-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(28,10,2,0.3) 100%);
          pointer-events: none;
        }
        .blog-card-body {
          padding: 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .blog-card-date {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--primary, #C8956C);
          margin-bottom: 0.7rem;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .blog-card-date::before {
          content: '';
          width: 16px; height: 1.5px;
          background: var(--primary, #C8956C);
          border-radius: 2px;
          display: inline-block;
        }
        .blog-card-title {
          font-family: var(--font-heading, serif);
          font-size: 1.2rem;
          color: #1C0A02;
          line-height: 1.35;
          margin-bottom: 0.7rem;
        }
        .blog-card-excerpt {
          color: #777;
          font-size: 0.875rem;
          line-height: 1.65;
          flex: 1;
          margin-bottom: 1.2rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .blog-card-footer {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          font-weight: 700;
          color: #1C0A02;
          letter-spacing: 0.3px;
          padding-top: 1rem;
          border-top: 1px solid rgba(200,149,108,0.1);
        }
        .blog-card-footer .arrow-icon {
          width: 28px; height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(200,149,108,0.12), rgba(232,201,154,0.12));
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .blog-card-new:hover .blog-card-footer .arrow-icon {
          background: linear-gradient(135deg, #C8956C, #A7744D);
          color: #fff;
          transform: translateX(3px);
        }
        .blog-card-new:hover .blog-card-footer .arrow-icon i {
          color: #fff !important;
        }

        /* Empty state */
        .blog-empty {
          text-align: center;
          padding: 80px 20px;
        }

        /* Sparkle float */
        @keyframes sparkleFloat {
          0%, 100% { opacity: 0.4; transform: translateY(0) scale(1); }
          50% { opacity: 1; transform: translateY(-12px) scale(1.15); }
        }
        .sparkle-deco {
          animation: sparkleFloat 4s ease-in-out infinite;
          display: inline-block;
        }
      `}</style>

      {/* ===== HERO ===== */}
      <section className="blog-hero-section">
        <div className="blog-hero-orb blog-hero-orb-1" />
        <div className="blog-hero-orb blog-hero-orb-2" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="blog-eyebrow">
            <span className="blog-eyebrow-dot" />
            <span className="sparkle-deco">✦</span>
            Esoteric Wisdom
            <span className="sparkle-deco" style={{ animationDelay: '1.2s' }}>✦</span>
            <span className="blog-eyebrow-dot" />
          </div>
          <h1 className="blog-hero-title">
            The <span>KrissMaagiic</span><br />Journal
          </h1>
          <p className="blog-hero-sub">
            Spiritual insights, crystal healing guides, astrology secrets &amp; esoteric wisdom — curated with love for your healing journey.
          </p>
          <div className="blog-hero-tags">
            {['Crystal Healing', 'Astrology', 'Meditation', 'Chakra Guide', 'Spell Craft', 'Spiritual Wellness'].map(t => (
              <span key={t} className="blog-hero-tag">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED POST ===== */}
      {featured && (
        <section style={{ background: 'linear-gradient(180deg, #1C0A02 0%, #FAF6F1 120px)', padding: '60px 0 0' }}>
          <div className="container">
            <ScrollFade>
              <Link href={`/blogs/${featured.slug}`} className="blog-featured-wrap">
                <div className="blog-featured-img-wrap">
                  <img src={featured.image} alt={featured.title} />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(135deg, rgba(28,10,2,0.25), transparent)',
                    pointerEvents: 'none',
                  }} />
                  <span className="blog-featured-badge">✦ Featured</span>
                </div>
                <div className="blog-featured-content">
                  <div className="blog-date-tag">
                    <i className="fa-regular fa-calendar" />
                    <span suppressHydrationWarning>
                      {new Date(featured.publishedAt || featured.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                    {featured.author && (
                      <>
                        <span style={{ opacity: 0.4 }}>·</span>
                        <span>By {featured.author}</span>
                      </>
                    )}
                  </div>
                  <h2>{featured.title}</h2>
                  <p>{featured.excerpt}</p>
                  <div className="blog-read-btn">
                    Read Full Article
                    <i className="fa-solid fa-arrow-right-long" />
                  </div>
                </div>
              </Link>
            </ScrollFade>
          </div>
        </section>
      )}

      {/* ===== BLOG GRID ===== */}
      <section className="blog-cards-section">
        <div className="container">
          {rest.length > 0 && (
            <div className="blog-section-header">
              <h2>More <span>Stories</span> to Explore</h2>
              <p>Dive deeper into the world of crystals and spiritual healing</p>
              <div className="blog-divider-gem" />
            </div>
          )}

          {blogs.length === 0 ? (
            <div className="blog-empty">
              <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🔮</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: '#1C0A02', fontSize: '1.6rem', marginBottom: '0.5rem' }}>
                No articles yet
              </h3>
              <p style={{ color: '#888' }}>Check back soon for magical insights &amp; healing wisdom.</p>
            </div>
          ) : (
            <div className="row g-4">
              {(featured ? rest : blogs).map((blog: any, idx: number) => (
                <div key={String(blog._id)} className="col-md-6 col-lg-4">
                  <ScrollFade delay={idx * 80}>
                    <Link href={`/blogs/${blog.slug}`} className="blog-card-new">
                      <div className="blog-card-img-wrap">
                        <img src={blog.image} alt={blog.title} loading="lazy" />
                        <div className="blog-card-img-overlay" />
                      </div>
                      <div className="blog-card-body">
                        <div className="blog-card-date" suppressHydrationWarning>
                          {new Date(blog.publishedAt || blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </div>
                        <h3 className="blog-card-title">{blog.title}</h3>
                        <p className="blog-card-excerpt">{blog.excerpt}</p>
                        <div className="blog-card-footer">
                          <span>Read Article</span>
                          <div className="arrow-icon">
                            <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.7rem', color: '#C8956C' }} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </ScrollFade>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section style={{
        background: 'linear-gradient(135deg, #1C0A02, #3B1F10)',
        padding: '80px 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(200,149,108,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✨</div>
          <h2 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '0.8rem' }}>
            Ready to begin your <span style={{ color: '#E8C99A' }}>crystal journey?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '480px', margin: '0 auto 2rem', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Browse our curated collection of energy-charged crystals, personally selected for your spiritual path.
          </p>
          <Link href="/shop" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            background: 'linear-gradient(135deg, #C8956C, #A7744D)',
            color: '#fff', fontWeight: 700, fontSize: '0.92rem',
            padding: '14px 32px', borderRadius: '32px',
            boxShadow: '0 8px 24px rgba(200,149,108,0.35)',
            textDecoration: 'none', letterSpacing: '0.5px',
          }}>
            Shop the Collection
            <i className="fa-solid fa-arrow-right-long" />
          </Link>
        </div>
      </section>
    </>
  );
}
