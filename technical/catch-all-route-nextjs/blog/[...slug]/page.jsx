import { getBlogs } from "@/getBlogs";
export default function BlogPage({ params }) {
  const slugPath = params.slug.join('/'); // array → string


  const blog = getBlogs().find(b => b.path === slugPath);

  if (!blog) return <div>Blog not found</div>;

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <a href="/">Go Back</a>
    </div>
  );
}
