import * as React from 'react';

export default function App() {
  const initialFruits = [
    { id: '1', name: 'apple' },
    { id: '2', name: 'banana' },
    { id: '3', name: 'mango' },
  ];
  const [fruits, setFruits] = React.useState(initialFruits);
  const [dropFruits, setDropFruits] = React.useState([]);
  const [dragIndex, setDragIndex] = React.useState(null);
  console.log(dropFruits);
  const handleDragStart = (index) => {
    setDragIndex(index);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    if (dragIndex === null) return;

    const draggedItem = fruits[dragIndex];
    // Add to drop zone if not already there
    if (!dropFruits.some((f) => f.id === draggedItem.id)) {
      setDropFruits([...dropFruits, draggedItem]);
    }
    // Remove from fruits list
    setFruits(fruits.filter((_, idx) => idx !== dragIndex));
    setDragIndex(null);
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={style.column}>
        <h2>Available Fruits</h2>
        {fruits.length === 0 && <p className="empty">No fruits here</p>}
        {fruits.map((f, idx) => (
          <div
            draggable
            onDragStart={() => {
              handleDragStart(f.id);
              setDragIndex(idx);
            }}
            style={style.item}
          >
            {f.name}
          </div>
        ))}
      </div>

      <div
        style={{ ...style.column, ...style.dropZone }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <h2>Dropped Fruits</h2>
        <p className="empty">Drop fruits here</p>
        {dropFruits.map((d) => (
          <div style={style.item}>{d.name}</div>
        ))}
      </div>
    </div>
  );
}
const style = {
  column: {
    border: '2px solid gray',
    padding: '10px 5px',
    borderRadius: '20px',
  },
  dropZone: {
    border: '2px dotted gray',
  },
  item: {
    background: '#c8e0f9',
    margin: '14px 0',
    padding: '14px 20px',
    borderRadius: '10px',
    cursor: 'grab',
    userSelect: ' none',
    fontSize: '1.15rem',
    color: '#374151',
  },
};