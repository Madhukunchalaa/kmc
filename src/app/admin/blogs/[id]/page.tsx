import Link from 'next/link';
import { notFound } from 'next/navigation';
import { connectMongoose } from '@/lib/mongoose';
import Blog from '@/models/Blog';
import BlogForm from '../BlogForm';

export const metadata = { title: 'Edit Blog · Admin' };

export default async function AdminBlogEdit(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  await connectMongoose();
  const doc = await Blog.findById(params.id).lean();
  if (!doc) return notFound();

  const initial = {
    slug: doc.slug,
    title: doc.title,
    content: doc.content,
    excerpt: doc.excerpt,
    image: doc.image,
    author: doc.author,
    published: doc.published,
  };

  return (
    <div>
      <div className="d-flex align-items-center mb-4 gap-3">
        <Link href="/admin/blogs" className="btn-outline-custom" style={{ padding: '8px 14px' }}>
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', margin: 0 }}>Edit Blog</h1>
      </div>
      <BlogForm id={params.id} initial={initial} />
    </div>
  );
}
