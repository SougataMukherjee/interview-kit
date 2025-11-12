import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev=>prev + 1);
  };

  const decrement = () => {
    setCount(prev=>prev - 1);
  };
  
  const reset =() =>{
    setCount(0)
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
      <button onClick={reset}> Reset </button>
    </div>
  );
}
