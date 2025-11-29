import { useState } from "react";

export default function App() {
  const data = [];
  for (let i = 1; i <= 50; i++) {
    data.push({ id: i, name: `Item ${i}` });
  }
  const pageSize = 5;
  const [page, setPage] = useState(0);
  const start = page * pageSize;
  const end = start + pageSize;
  const paginatedData = data.slice(start, end);
  const pages = Math.floor(data.length / pageSize);

  return (
    <div>
      {paginatedData.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}

      <button onClick={() => setPage(0)}>First</button>
      <button onClick={() => page > 0 && setPage(page - 1)}>Prev</button>
      <button onClick={() => page < pages - 1 && setPage(page + 1)}>
        Next
      </button>
      <button onClick={() => setPage(pages - 1)}>Last</button>

      <p>
        Page {page + 1} of {pages}
      </p>
    </div>
  );
}
//using library: import Pagination from "@mui/material/Pagination";