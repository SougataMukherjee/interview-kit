import { useEffect, useState, useMemo } from "react";
import { debounce } from "./useDebounce"; 

export default function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  // ✅ Initial API call
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  // ✅ API function for search
  const searchProducts = (query) => {
    if (!query) {
      // if input empty → load all products again
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data.products));
      return;
    }

    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  };

  // ✅ Debounced function (important useMemo)
  const debouncedSearch = useMemo(() => debounce(searchProducts, 600), []);

  // ✅ onChange handler
  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    debouncedSearch(value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Search</h2>

      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={handleChange}
      />

      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}
