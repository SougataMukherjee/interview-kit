"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        fetchData();
      } else {
        setData([]);
      }
    }, 500); // wait 0.5 sec after typing stops
    return () => clearTimeout(timer);
  }, [query]);

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`);
      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h3>Search Users</h3>
      <input
        type="text"
        placeholder="Type a name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p>Loading...</p>}

      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
