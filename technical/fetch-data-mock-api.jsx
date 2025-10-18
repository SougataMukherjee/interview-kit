import { useState, useEffect } from "react";
export default function App() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setUser(data);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="App">
      {user.length > 0 ? (
        user.map((u) => <p key={u.id}>{u.name}</p>)
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
}
