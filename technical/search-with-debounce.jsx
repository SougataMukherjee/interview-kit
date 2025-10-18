import { useState, useEffect, useRef } from "react";

const App = () => {
  const [data, setData] = useState();
  const [isDebounce, setDebounce] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const debounceTimer = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isDebounce) {
        setCountdown(countdown - 1);
      }
    }, 1000);
    if (countdown === 0) {
      clearTimeout(timer);
      setCountdown(10);
    }
    console.log(countdown);
  }, [isDebounce, countdown, isLoading]);
  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    setData(json);
    console.log(json, data);
  };
  const handleClick = () => {
    if (isDebounce) return;
    setDebounce(true);
    fetchData();
    setIsLoading(true);
    debounceTimer.current = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    debounceTimer.current = setTimeout(() => {
      setDebounce(false);
    }, 10000);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Here</button>
      {isDebounce && countdown > 0 && <div>{countdown} seconds remaining</div>}
      {isLoading && <div>Data is loading !</div>}
      {isLoading ? <p>Loading...</p> : <div>{JSON.stringify(data)}</div>}
    </div>
  );
};
export default App;
