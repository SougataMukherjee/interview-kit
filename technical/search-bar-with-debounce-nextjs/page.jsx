"use client";
import { useEffect, useState } from "react";

// ✅ Reusable custom debounce hook
function useDebounce(value, delay = 500) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

export default function DebounceProductSearch() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🟢 Fetch all products initially
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
      setFiltered(data.products);
    }
    fetchProducts();
  }, []);

  
  const debouncedQuery = useDebounce(query, 500);

  // 🔵 Search when debouncedQuery updates
  useEffect(() => {
    setLoading(true);

    if (debouncedQuery.trim() === "") {
      setFiltered(products);
      setLoading(false);
      return;
    }

    const result = products.filter((p) =>
      p.title.toLowerCase().includes(debouncedQuery.toLowerCase())
    );

    setFiltered(result);
    setLoading(false);
  }, [debouncedQuery, products]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Debounced Product Search</h2>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search product..."
        style={{ padding: "6px", width: "250px" }}
      />

      {loading && <p>⏳ Searching...</p>}

      <ul>
        {filtered.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
