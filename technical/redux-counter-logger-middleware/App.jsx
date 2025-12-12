import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";

function Counter() {
  const count = useSelector(s => s.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
