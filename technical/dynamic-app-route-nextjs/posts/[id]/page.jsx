
export default async function PostPage({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();
  console.log(post)
  return (
    <div style={{ padding: "20px" }}>
      <a href="/">← Back</a>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
