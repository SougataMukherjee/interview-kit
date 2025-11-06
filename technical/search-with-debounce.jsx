import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await res.json();
    setData(json);
    setLoading(false);
    setCountdown(10);
  };

  const handleClick = () => {
    if (countdown > 0) return; // debounce active
    fetchData();
  };

 
  useEffect(() => {
    
    //When countdown reaches 0, effect stop running
    if (countdown === 0) return;
    //decreases the countdown value by 1 every second until it reaches 0
    const id = setTimeout(() => setCountdown(countdown - 1), 1000);
    return () => clearTimeout(id);
  }, [countdown]);

  return (
    <div>
      <button onClick={handleClick}>Fetch Users</button>
      {countdown > 0 && <div>Wait {countdown}s to click again</div>}
      {loading ? <p>Loading...</p> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
