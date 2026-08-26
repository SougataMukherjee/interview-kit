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

//create a function for counter
function makeCounter(initialValue = 0) {
    let count=initialValue
    return { increment:function(){
            count++;
            return count
    },
    decrement:function(){
            count--
            return count
    },
    reset:function(){
            count=initialValue
            return count
    }}
}

const data=makeCounter(5)
