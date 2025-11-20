import React from 'react';
export default async function HeavyComponent() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5',
    { cache: 'no-store' }
  );
  const posts = await res.json();

  return (
    <div>
      <h2>Lazy Load Post</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
