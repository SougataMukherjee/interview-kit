import { useState } from "react";

export default function Fruits() {
  const fruits = [
    { id: 1, label: "Apple", isRed: true },
    { id: 2, label: "Banana", isRed: false },
    { id: 3, label: "Mango", isRed: true },
    { id: 4, label: "Orange", isRed: false },
  ];

  const [filter, setFilter] = useState("");
  const [selectedFruit, setSelectedFruit] = useState("");

  const filteredFruits = fruits.filter((fruit) => {
    if (filter === "isRed") return fruit.isRed === true;
    if (filter === "isNotRed") return fruit.isRed === false;
    return false;
  });

  return (
    <div>
      <h2>Selected Fruit: {selectedFruit || "None"}</h2>

      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">Select Filter</option>
        <option value="isRed">Red Fruits</option>
        <option value="isNotRed">Non-Red Fruits</option>
      </select>

      <select onChange={(e) => setSelectedFruit(e.target.value)}>
        <option value="">Select Fruit</option>

        {filteredFruits.map((fruit) => (
          <option key={fruit.id} value={fruit.label}>
            {fruit.label}
          </option>
        ))}
      </select>
    </div>
  );
}
