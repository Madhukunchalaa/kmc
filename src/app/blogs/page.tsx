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
  const blogs = await Blog.find({ published: true }).sort({ publishedAt: -1, createdAt: -1 }).lean();

  return (
    <>
      <section style={{
        paddingTop: '160px',
        paddingBottom: '80px',
        backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url("/crystal-hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        textAlign: 'center'
      }}>
        <div className="container">
          <p className="hero-eyebrow" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <span className="hero-eyebrow-line"></span>
            Esoteric Wisdom
          </p>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}>
            The <span className="highlight">KrissMaagiic</span> Journal
          </h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 620, margin: '1rem auto 0' }}>
            Explore our latest articles on crystal healing, astrology, spell casting, and spiritual wellness.
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#FAF6F1' }}>
        <div className="container">
          {blogs.length === 0 ? (
            <div className="text-center py-5">
              <i className="fa-solid fa-feather" style={{ fontSize: '3rem', color: '#ccc', marginBottom: '1rem' }}></i>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: '#666' }}>No articles published yet.</h3>
              <p style={{ color: '#888' }}>Check back soon for magical insights.</p>
            </div>
          ) : (
            <div className="row g-4">
              {blogs.map((blog: any, idx: number) => (
                <div key={String(blog._id)} className="col-md-6 col-lg-4">
                  <ScrollFade delay={idx * 100}>
                    <Link href={`/blogs/${blog.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                      <div className="blog-card" style={{
                        background: '#fff',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                      }}>
                        <div style={{ height: '240px', overflow: 'hidden' }}>
                          <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                        </div>
                        <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                          <div suppressHydrationWarning style={{ fontSize: '0.8rem', color: 'var(--primary,#C8956C)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, marginBottom: '0.5rem' }}>
                            {new Date(blog.publishedAt || blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </div>
                          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '1rem', lineHeight: 1.3 }}>{blog.title}</h3>
                          <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.6, flex: 1 }}>{blog.excerpt}</p>
                          <div style={{ marginTop: '1.5rem', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                            Read Article <i className="fa-solid fa-arrow-right-long" style={{ color: 'var(--primary,#C8956C)' }}></i>
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
    </>
  );
}
