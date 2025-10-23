import { useState } from "react";

export default function App() {
  const data = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
    { id: 6, name: "Item 6" },
    { id: 7, name: "Item 7" },
    { id: 8, name: "Item 8" },
    { id: 9, name: "Item 9" },
    { id: 10, name: "Item 10" },
    { id: 11, name: "Item 11" },
    { id: 12, name: "Item 12" },
    { id: 13, name: "Item 13" },
    { id: 14, name: "Item 14" },
    { id: 15, name: "Item 15" },
  ];

  const perPage = 5;
  const pages = [data.slice(0, 5), data.slice(5, 10), data.slice(10, 15)];
  const [page, setPage] = useState(0);

  return (
    <div>
      {pages[page].map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}

      <button onClick={() => setPage(0)}>First</button>
      <button onClick={() => page > 0 && setPage(page - 1)}>Prev</button>
      <button onClick={() => page < pages.length - 1 && setPage(page + 1)}>
        Next
      </button>
      <button onClick={() => setPage(pages.length - 1)}>Last</button>

      <p>
        Page {page + 1} of {pages.length}
      </p>
    </div>
  );
}
