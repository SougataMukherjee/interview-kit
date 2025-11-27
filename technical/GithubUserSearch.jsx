import { useState, useTransition } from "react";
import { faker } from "@faker-js/faker";

// Generate users
export const users = Array.from({ length: 4000 }, () => ({
  name: faker.person.fullName(),
  avatar: faker.image.avatar(),
}));

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState(users);

  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    startTransition(() => {
      setFiltered(
        users.filter((u) => u.name.toLowerCase().includes(value.toLowerCase()))
      );
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={handleChange}
        style={{ padding: "8px", width: "250px" }}
      />

      {isPending && <p>Loading...</p>}

      <div style={{ marginTop: "10px" }}>
        {filtered.map((user, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              border: "1px solid #ddd",
              padding: "10px",
              marginBottom: "5px",
              borderRadius: "6px",
            }}
          >
            <img src={user.avatar} alt="" width={45} height={45} />
            <strong>{user.name}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
