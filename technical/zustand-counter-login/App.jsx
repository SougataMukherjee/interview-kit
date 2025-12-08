import { useAuthStore } from "./authStore";
import { useCounterStore } from "./counterStore";

export default function App() {
  const { user, login, logout } = useAuthStore();
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div>
      {!user ? (
        <>
          <h2>Please Login</h2>
          <button onClick={() => login("Sam")}>Login</button>
        </>
      ) : (
        <>
          <h2>Welcome {user.name}</h2>
          <button onClick={logout}>Logout</button>
          <h3>Counter: {count}</h3>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <button onClick={reset}>Reset</button>
        </>
      )}      
    </div>
  );
}
