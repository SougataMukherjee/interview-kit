import { useRef,useEffect } from "react";
import {
  debounce,
  throttle,
  memo,
  fetchDataGenerator,
  myMap,
  myFilter
} from "./utils";
export default function App() {
  const debouncedSearch = useRef(
    debounce((value) => {
      console.log("Searching for:", value);
    }, 500)
  ).current;
  const throttledScroll = useRef(
    throttle(() => {
      console.log("Scrolling...");
    }, 1000)
  ).current;
  const slowSquare = (n) => {
    console.log("Calculating...");
    return n * n;
  };

  const memoizedSquare = useRef(memo(slowSquare)).current;
  useEffect(() => {
    async function runGenerator(gen) {
      const iterator = gen;
      let result = iterator.next();

      while (!result.done) {
        const value = await result.value;
        result = iterator.next(value);
      }

      console.log("Fetched Data:", result.value);
    }

    const gen = fetchDataGenerator(
      "https://jsonplaceholder.typicode.com/users"
    );

    runGenerator(gen);
  }, []);
  const numbers = [1, 2, 3, 4, 5];

  const doubled = myMap(numbers, (n) => n * 2);
  const evens = myFilter(numbers, (n) => n % 2 === 0);

  console.log("Doubled:", doubled);
  console.log("Evens:", evens);
  return (
    
      <>
      <input
        placeholder="Type to search"
        onChange={(e) => debouncedSearch(e.target.value)}
      />

  
      <button onClick={() => console.log(memoizedSquare(5))}>
        Calculate Square
      </button>
      </>

  );
}
