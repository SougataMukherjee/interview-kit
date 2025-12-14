"use client";
import { useEffect, useState } from "react";

function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}


export default function DebounceSearch() {
  const [q, setQ] = useState("");
  const [list, setList] = useState([]);

  const dq = useDebounce(q);

  // fetch once
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(r => r.json())
      .then(d => setList(d.products));
  }, []);

  const filtered = list.filter(p =>
    p.title.toLowerCase().includes(dq.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>
      <h3>Debounced Search</h3>
      <input
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder="Search..."
      />

      <ul>
        {filtered.map(p => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
