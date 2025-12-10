import Link from 'next/link';
import { getBlogs } from "@/getBlogs";

export default function Home() {
  return (
    <div>
      <h2>Blog List</h2>
      <ul>
        {getBlogs().map(blog => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.path}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
