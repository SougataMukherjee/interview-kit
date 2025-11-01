'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');

  // Fetch todos
  const fetchTodos = async () => {
    const res = await fetch('/api/todos');
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => { fetchTodos(); }, []);

  // Add todo
  const addTodo = async () => {
    if (!title) return;
    await fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify({ title }),
    });
    setTitle('');
    fetchTodos();
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await fetch(`/api/todos?id=${id}`, { method: 'DELETE' });
    fetchTodos();
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        placeholder="New Todo" 
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title} 
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
