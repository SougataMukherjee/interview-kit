import { useState } from "react";

export default function App() {
  const data = [
    { id: 1, title: "Cricket", category: "Sports" },
    { id: 2, title: "Football", category: "Sports" },
    { id: 3, title: "Tennis", category: "Sports" },
    { id: 4, title: "Google", category: "Company" },
    { id: 5, title: "Apple", category: "Company" },
    { id: 6, title: "Tesla", category: "Company" },
    { id: 7, title: "BMW", category: "Car" },
    { id: 8, title: "Audi", category: "Car" },
    { id: 9, title: "Mercedes", category: "Car" }
  ];

  const [selected, setSelected] = useState([]);

  const toggleCategory = (cat) => {
    setSelected((prev) =>
      prev.includes(cat)
        ? prev.filter((c) => c !== cat) // remove category
        : [...prev, cat] // add category
    );
  };


  const filteredItems =
    selected.length === 0
      ? data
      : data.filter((item) => selected.includes(item.category));

  return (
    <div>
      <button onClick={() => toggleCategory("Sports")}>
        Sports {selected.includes("Sports") ? "✓" : ""}
      </button>

      <button onClick={() => toggleCategory("Company")}>
        Company {selected.includes("Company") ? "✓" : ""}
      </button>

      <button onClick={() => toggleCategory("Car")}>
        Car {selected.includes("Car") ? "✓" : ""}
      </button>

      <hr />

      {filteredItems.map((d) => (
        <p key={d.id}>{d.title}</p>
      ))}
    </div>
  );
}
