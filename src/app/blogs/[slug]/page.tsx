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
    openGraph: { images: [blog.image] }
  };
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  await connectMongoose();
  const blog = await Blog.findOne({ slug: params.slug, published: true, isDeleted: { $ne: true } }).lean();
  if (!blog) return notFound();

  return (
    <>
      <section style={{
        paddingTop: '140px',
        paddingBottom: '80px',
        backgroundColor: '#0F0904',
        color: '#fff',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ marginBottom: '2rem' }}>
            <Link href="/blogs" style={{ color: 'var(--primary,#C8956C)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
              <i className="fa-solid fa-arrow-left me-2"></i>Back to Journal
            </Link>
          </div>
          
          <p suppressHydrationWarning className="hero-eyebrow" style={{ justifyContent: 'center', display: 'inline-flex', marginBottom: '1rem' }}>
            {new Date(blog.publishedAt || blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            <span style={{ margin: '0 10px' }}>•</span>
            By {blog.author}
          </p>
          
          <h1 className="hero-title" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: 1.2, marginBottom: '2rem' }}>
            {blog.title}
          </h1>
        </div>
      </section>

      <section style={{ padding: '0', marginTop: '-40px', position: 'relative', zIndex: 10 }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <img src={blog.image} alt={blog.title} style={{ width: '100%', height: 'auto', maxHeight: '600px', objectFit: 'cover', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
        </div>
      </section>

      <section className="section-pad">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{
            fontSize: '1.2rem',
            lineHeight: 1.8,
            color: '#333',
            fontFamily: 'var(--font-body)',
          }} dangerouslySetInnerHTML={{ __html: blog.content }} />

          <hr style={{ margin: '4rem 0', opacity: 0.1 }} />

          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>Ready to begin your healing journey?</h3>
            <Link href="/shop" className="btn-primary-custom" style={{ display: 'inline-flex', padding: '1rem 2.5rem', fontSize: '1rem' }}>
              Explore the Crystal Collection
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
