"use client";
import { useEffect, useState } from "react";
import { getProducts } from "./utils/getProducts";

export default function Home() {
  const [page, setPage] = useState(0);
  const limit= 10
  const [products, setProducts] = useState([]);
  const skip = page * limit;

  useEffect(() => {
    (async () => {
      const items = await getProducts(limit, skip);
      setProducts(items);
    })();
  }, [page, limit]);

  return (
    <div>
      {products.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}

      <button onClick={() => setPage(0)}>First</button>
      <button onClick={() => page > 0 && setPage(page - 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>Next</button>

      <p>Page: {page + 1}</p>
    </div>
  );
}