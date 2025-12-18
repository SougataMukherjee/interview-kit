import { useEffect, useState } from "react";

const STORAGE_KEY = "todos_app";

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addOrUpdate = () => {
    if (!text.trim()) return;

    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = text;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, text]);
    }

    setText("");
  };

  const editTodo = (i) => {
    setText(todos[i]);
    setEditIndex(i);
  };

  const deleteTodo = (i) => {
    setTodos(todos.filter((_, idx) => idx !== i));
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addOrUpdate}>
        {editIndex !== null ? "Update" : "Add"}
      </button>

      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo}
            <button onClick={() => editTodo(i)}>Edit</button>
            <button onClick={() => deleteTodo(i)}>Delete</button>
          </li>
        ))}
      </ul>
     </div>
  );
}
