import { useState } from "react";
import { useDebounce } from "react-use";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [fetchTrigger, setFetchTrigger] = useState(0); // triggers debounce

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await res.json();
    setData(json);
    setLoading(false);
  };

  // ⏳ Debounce fetch by 1 second
  useDebounce(
    () => {
      if (fetchTrigger !== 0) fetchData();
    },
    1000,
    [fetchTrigger]
  );

  const handleClick = () => {
    setFetchTrigger((prev) => prev + 1); // this will be debounced
  };

  return (
    <div>
      <button onClick={handleClick}>Fetch Users (Debounced)</button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}
