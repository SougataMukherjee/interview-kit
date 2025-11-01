import Link from 'next/link';

const blogs = [
  { id: 1, title: 'Next.js Tips', path: '2025/next-js-tips' },
  { id: 2, title: 'React Tricks', path: '2025/react-tricks' },
  { id: 3, title: 'Frontend Guide', path: '2025/frontend-guide' },
];

export default function Home() {
  return (
    <div>
      <h2>Blog List</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.path}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
