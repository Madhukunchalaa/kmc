import Link from 'next/link';
import BlogForm from '../BlogForm';

export const metadata = { title: 'New Blog · Admin' };

export default function AdminBlogNew() {
  return (
    <div>
      <div className="d-flex align-items-center mb-4 gap-3">
        <Link href="/admin/blogs" className="btn-outline-custom" style={{ padding: '8px 14px' }}>
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', margin: 0 }}>Write New Blog</h1>
      </div>
      <BlogForm />
    </div>
  );
}
