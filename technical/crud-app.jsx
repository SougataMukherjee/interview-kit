import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addOrUpdate = () => {
    if (!text.trim()) return;

    if (editIndex !== null) {
      todos[editIndex] = text;
      setTodos([...todos]);
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
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addOrUpdate}>{editIndex !== null ? "Update" : "Add"}</button>

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
