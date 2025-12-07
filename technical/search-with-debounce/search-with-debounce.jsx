import { useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";

export default function App() {
  const [trigger, setTrigger] = useState(0);
  const debouncedTrigger = useDebounce(trigger, 1000);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await res.json();
    setData(json);
    setLoading(false);
  };

  useEffect(() => {
    if (debouncedTrigger !== 0) {
      fetchData();
    }
  }, [debouncedTrigger]);

  return (
    <div>
      <button onClick={() => setTrigger((x) => x + 1)}>
        Fetch Users (Debounced)
      </button>

      {loading ? <p>Loading...</p> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
