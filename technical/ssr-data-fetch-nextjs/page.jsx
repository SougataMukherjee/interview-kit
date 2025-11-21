import { use } from 'react';

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

export default function Page() {
  const data = use(getUsers());
  return (
    <div>
      <h1>Users List</h1>

      {data.map((user) => (
        <div key={user.id}>
          <h3>{user.id}-{user.name}</h3>
          <h4>{user.email}</h4>
        </div>
      ))}
    </div>
  );
}
