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

// export default async function Home() {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/todos/1",
//     {
//       cache: "no-store", // 👈 SSR for ISR use next: { revalidate: 10 },
//     }
//   );

//   const data = await res.json();

//   return (
//     <div>
//       <h1>SSR Example (no-store)</h1>
//       <p>Todo Title: {data.title}</p>
//       <p>Data fetched on every request</p>
//     </div>
//   );
// }

