"use client";
import { useEffect, useState } from "react";

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

  // 🟡 Debounce the search input
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      if (query.trim() === "") {
        setFiltered(products);
      } else {
        const result = products.filter((p) =>
          p.title.toLowerCase().includes(query.toLowerCase())
        );
        setFiltered(result);
      }
      setLoading(false);
    }, 600); // delay 600ms

    return () => clearTimeout(timer);
  }, [query, products]);

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
