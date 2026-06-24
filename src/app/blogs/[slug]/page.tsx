import { notFound } from 'next/navigation';
import { connectMongoose } from '@/lib/mongoose';
import Blog from '@/models/Blog';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  await connectMongoose();
  const blog = await Blog.findOne({ slug: params.slug, published: true, isDeleted: { $ne: true } }).lean();
  if (!blog) return { title: 'Not Found' };

  return {
    title: `${blog.title} · KrissMaagiic Blogs`,
    description: blog.excerpt,
    openGraph: { images: [blog.image] },
  };
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  await connectMongoose();
  const blog = await Blog.findOne({ slug: params.slug, published: true, isDeleted: { $ne: true } }).lean();
  if (!blog) return notFound();

  // Fetch 3 related/recent posts (excluding current)
  const related = await Blog.find({
    published: true,
    isDeleted: { $ne: true },
    slug: { $ne: params.slug },
  })
    .sort({ publishedAt: -1, createdAt: -1 })
    .limit(3)
    .lean();

  return (
    <>
      <style>{`
        /* ===== BLOG POST PAGE STYLES ===== */
        .post-hero {
          padding-top: 160px;
          padding-bottom: 80px;
          background: linear-gradient(160deg, #1C0A02 0%, #2D1B0E 50%, #1C0A02 100%);
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .post-hero::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 80%, rgba(200,149,108,0.13) 0%, transparent 65%);
          pointer-events: none;
        }
        .post-back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.5);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          text-decoration: none;
          margin-bottom: 2.5rem;
          transition: color 0.25s;
          padding: 6px 16px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 30px;
          backdrop-filter: blur(4px);
        }
        .post-back-link:hover { color: #E8C99A; border-color: rgba(232,201,154,0.3); }

        .post-meta {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 1.5rem;
        }
        .post-meta-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(200,149,108,0.12);
          border: 1px solid rgba(200,149,108,0.25);
          border-radius: 30px;
          padding: 6px 16px;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: #E8C99A;
        }

        .post-title {
          font-family: var(--font-heading, serif);
          font-size: clamp(2rem, 4.5vw, 3.8rem);
          color: #fff;
          line-height: 1.15;
          max-width: 800px;
          margin: 0 auto;
          font-weight: 700;
        }

        /* Cover image */
        .post-cover-wrap {
          position: relative;
          z-index: 10;
          margin-top: -60px;
          padding-bottom: 0;
        }
        .post-cover-wrap img {
          width: 100%;
          max-height: 540px;
          object-fit: cover;
          border-radius: 28px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.2);
          display: block;
        }
        .post-cover-gradient {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 50%;
          background: linear-gradient(180deg, transparent, rgba(250,246,241,0.3));
          border-radius: 0 0 28px 28px;
          pointer-events: none;
        }

        /* Article body */
        .post-body-section {
          background: #FAF6F1;
          padding: 60px 0 80px;
        }
        .post-article-wrap {
          max-width: 760px;
          margin: 0 auto;
          background: #fff;
          border-radius: 24px;
          padding: 56px 60px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.06);
          border: 1px solid rgba(200,149,108,0.08);
        }
        @media (max-width: 768px) {
          .post-article-wrap { padding: 32px 24px; }
        }

        /* Rich text styling */
        .post-content h1, .post-content h2, .post-content h3, .post-content h4 {
          font-family: var(--font-heading, serif);
          color: #1C0A02;
          margin-top: 2.2rem;
          margin-bottom: 0.8rem;
          line-height: 1.3;
        }
        .post-content h2 { font-size: 1.7rem; }
        .post-content h3 { font-size: 1.35rem; }
        .post-content p {
          font-size: 1.05rem;
          line-height: 1.85;
          color: #444;
          margin-bottom: 1.4rem;
        }
        .post-content a {
          color: var(--primary, #C8956C);
          text-decoration: underline;
          text-decoration-style: dotted;
          text-underline-offset: 3px;
        }
        .post-content ul, .post-content ol {
          padding-left: 1.5rem;
          margin-bottom: 1.4rem;
        }
        .post-content li {
          font-size: 1.02rem;
          line-height: 1.8;
          color: #444;
          margin-bottom: 0.4rem;
        }
        .post-content blockquote {
          border-left: 4px solid #C8956C;
          margin: 2rem 0;
          padding: 16px 24px;
          background: rgba(200,149,108,0.06);
          border-radius: 0 12px 12px 0;
          font-style: italic;
          color: #6A4A35;
          font-size: 1.05rem;
          line-height: 1.7;
        }
        .post-content img {
          width: 100%;
          border-radius: 16px;
          margin: 1.5rem 0;
          object-fit: cover;
        }
        .post-content strong { color: #1C0A02; }
        .post-content hr {
          border: none;
          border-top: 1px solid rgba(200,149,108,0.15);
          margin: 2.5rem 0;
        }

        /* Post footer / divider */
        .post-footer-divider {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 3rem 0 2rem;
        }
        .post-footer-divider-line {
          flex: 1;
          height: 1px;
          background: rgba(200,149,108,0.15);
        }
        .post-footer-gem {
          font-size: 1.1rem;
          color: var(--primary, #C8956C);
        }

        /* CTA box inside article */
        .post-cta-box {
          background: linear-gradient(135deg, #1C0A02, #3B1F10);
          border-radius: 20px;
          padding: 40px 36px;
          text-align: center;
          margin-top: 2rem;
        }
        .post-cta-box h3 {
          font-family: var(--font-heading, serif);
          color: #fff;
          font-size: 1.5rem;
          margin-bottom: 0.6rem;
        }
        .post-cta-box p {
          color: rgba(255,255,255,0.6);
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        .post-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #C8956C, #A7744D);
          color: #fff;
          font-size: 0.88rem;
          font-weight: 700;
          padding: 12px 28px;
          border-radius: 30px;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(200,149,108,0.35);
          transition: all 0.3s ease;
        }
        .post-cta-btn:hover {
          box-shadow: 0 8px 28px rgba(200,149,108,0.5);
          color: #fff;
        }

        /* Related posts */
        .related-section {
          background: #fff;
          padding: 80px 0;
        }
        .related-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          text-decoration: none;
          color: inherit;
          background: #FAF6F1;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(200,149,108,0.08);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .related-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(200,149,108,0.12);
        }
        .related-card-img {
          height: 180px;
          overflow: hidden;
        }
        .related-card-img img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .related-card:hover .related-card-img img { transform: scale(1.06); }
        .related-card-body {
          padding: 20px 22px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .related-card-date {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--primary, #C8956C);
          margin-bottom: 0.5rem;
        }
        .related-card-title {
          font-family: var(--font-heading, serif);
          font-size: 1.05rem;
          color: #1C0A02;
          line-height: 1.35;
          flex: 1;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .related-card-arrow {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--primary, #C8956C);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .post-anim { animation: fadeSlideUp 0.6s ease both; }
      `}</style>

      {/* ===== HERO ===== */}
      <section className="post-hero">
        <div className="container post-anim" style={{ position: 'relative', zIndex: 2, maxWidth: '860px' }}>
          <div style={{ marginBottom: '0.5rem' }}>
            <Link href="/blogs" className="post-back-link">
              <i className="fa-solid fa-arrow-left" />
              Back to Journal
            </Link>
          </div>

          <div className="post-meta">
            <span className="post-meta-chip" suppressHydrationWarning>
              <i className="fa-regular fa-calendar" style={{ fontSize: '0.72rem' }} />
              {new Date(blog.publishedAt || blog.createdAt).toLocaleDateString('en-US', {
                month: 'long', day: 'numeric', year: 'numeric',
              })}
            </span>
            {blog.author && (
              <span className="post-meta-chip">
                <i className="fa-solid fa-feather-pointed" style={{ fontSize: '0.72rem' }} />
                By {blog.author}
              </span>
            )}
          </div>

          <h1 className="post-title">{blog.title}</h1>
        </div>
      </section>

      {/* ===== COVER IMAGE ===== */}
      {blog.image && (
        <section className="post-cover-wrap">
          <div className="container" style={{ maxWidth: '980px' }}>
            <div style={{ position: 'relative' }}>
              <img src={blog.image} alt={blog.title} />
              <div className="post-cover-gradient" />
            </div>
          </div>
        </section>
      )}

      {/* ===== ARTICLE BODY ===== */}
      <section className="post-body-section">
        <div className="container">
          <div className="post-article-wrap post-anim" style={{ animationDelay: '0.15s' }}>
            {/* Excerpt pull-quote */}
            {blog.excerpt && (
              <p style={{
                fontSize: '1.18rem',
                fontStyle: 'italic',
                color: '#8A4F27',
                lineHeight: 1.7,
                borderLeft: '3px solid #E8C99A',
                paddingLeft: '20px',
                marginBottom: '2.5rem',
                fontFamily: 'var(--font-heading, serif)',
              }}>
                {blog.excerpt}
              </p>
            )}

            {/* Blog content */}
            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Footer divider */}
            <div className="post-footer-divider">
              <div className="post-footer-divider-line" />
              <span className="post-footer-gem">✦</span>
              <div className="post-footer-divider-line" />
            </div>

            {/* Author chip */}
            {blog.author && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                background: '#FAF6F1', borderRadius: '16px', padding: '16px 20px',
                marginBottom: '2rem', border: '1px solid rgba(200,149,108,0.12)',
              }}>
                <div style={{
                  width: '44px', height: '44px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #E8C99A, #C8956C)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.1rem', color: '#1C0A02', fontWeight: 800,
                  flexShrink: 0,
                }}>
                  {blog.author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#1C0A02', fontSize: '0.95rem' }}>{blog.author}</div>
                  <div style={{ color: '#888', fontSize: '0.8rem' }}>Crystal Healer &amp; Spiritual Guide at KrissMaagiic</div>
                </div>
              </div>
            )}

            {/* CTA box */}
            <div className="post-cta-box">
              <div style={{ fontSize: '2rem', marginBottom: '0.6rem' }}>🔮</div>
              <h3>Ready to begin your healing journey?</h3>
              <p>Explore our handpicked crystals, energy-cleansed and ritually charged for your path.</p>
              <Link href="/shop" className="post-cta-btn">
                Explore the Crystal Collection
                <i className="fa-solid fa-arrow-right-long" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RELATED POSTS ===== */}
      {related.length > 0 && (
        <section className="related-section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#C8956C', marginBottom: '0.4rem' }}>
                ✦ Keep Reading ✦
              </p>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: '#1C0A02' }}>
                More from the Journal
              </h2>
            </div>
            <div className="row g-4">
              {related.map((r: any) => (
                <div key={String(r._id)} className="col-md-4">
                  <Link href={`/blogs/${r.slug}`} className="related-card">
                    <div className="related-card-img">
                      <img src={r.image} alt={r.title} loading="lazy" />
                    </div>
                    <div className="related-card-body">
                      <div className="related-card-date" suppressHydrationWarning>
                        {new Date(r.publishedAt || r.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                      <div className="related-card-title">{r.title}</div>
                      <div className="related-card-arrow">
                        Read Article <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.7rem' }} />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
