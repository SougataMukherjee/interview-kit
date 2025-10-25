import { useState } from "react";

export default function TicTacToe() {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  function handleClick(i) {
    // Check if the clicked cell is empty (only allow move if not already filled)
    if (!cells[i]) {
      // Create a shallow copy of the 'cells' array
      const copy = [...cells];
      console.log(copy);
      // copy[i] = isXTurn ? "X" : "O";
      // If it's X's turn, mark as 'red'; otherwise, mark as 'blue'
      copy[i] = isXTurn ? "red" : "blue";
      //update the board and switch turn
      setCells(copy);
      setIsXTurn(!isXTurn);
    }
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 80px)",
        gap: "5px",
        margin: "20px",
      }}
    >
      {cells.map((val, i) => (
        <button
          key={i}
          onClick={() => handleClick(i)}
          style={{
            width: "80px",
            height: "80px",
            backgroundColor: val || "lightgray",
            fontSize: "24px",
            cursor: "pointer",
          }}
        >
          {val}
        </button>
      ))}
    </div>
  );
}
