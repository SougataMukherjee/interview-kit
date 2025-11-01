'use client';
import { useParams } from 'next/navigation';

export default function BlogPage() {
  const params = useParams(); 
  const slugPath = params.slug.join('/'); // convert array to string

  const blogs = [
    { id: 1, title: 'Next.js Tips', path: '2025/next-js-tips', content: 'Next.js tips content...' },
    { id: 2, title: 'React Tricks', path: '2025/react-tricks', content: 'React tricks content...' },
    { id: 3, title: 'Frontend Guide', path: '2025/frontend-guide', content: 'Frontend guide content...' },
  ];

  const blog = blogs.find(b => b.path === slugPath);

  if (!blog) return <div>Blog not found</div>;

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <a href="/">Go Back</a>
    </div>
  );
}
