import { useEffect, useState } from "react";

export default function InfiniteScroll() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  // Fetch items
  const loadMore = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${(page-1)*10}`);
    const data = await res.json();
    setItems(prev => [...prev, ...data.products]);
  };

  useEffect(() => {
    loadMore();
  }, [page]);

  // Detect bottom
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      setPage(prev => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {items.map(item => <p key={item.id}>{item.title}</p>)}
      <p>Loading...</p>
    </div>
  );
}
