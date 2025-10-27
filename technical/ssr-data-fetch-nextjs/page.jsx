export default async function Home() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
      cache: 'no-store',
    });

    if (!res.ok) throw new Error('Failed to fetch users');

    const users = await res.json();

    return (
      <div>
        <h2>Server Side Rendered Users</h2>
        {users.map((u) => (
          <p key={u.id}>{u.name}</p>
        ))}
      </div>
    );
  } catch (error) {
    return <p style={{ color: 'red' }}>Error: {error.message}</p>;
  }
}