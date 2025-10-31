import Link from 'next/link';
export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Simple Blog</h2>
      <ul>
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}g</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}