import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products.slice(0, 6)));
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "20px",
      }}
    >
      {products.map((p) => (
        <Link key={p.id} to={`/products/${p.id}`} style={{ textDecoration: "none" }}>
          <div style={{ border: "1px solid #ccc", padding: "10px" }}>
            <h4>{p.title}</h4>
            <img src={p.thumbnail} width="100%" />
          </div>
        </Link>
      ))}
    </div>
  );
}
