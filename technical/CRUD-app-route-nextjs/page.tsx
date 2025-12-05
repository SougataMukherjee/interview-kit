'use client';
import { useEffect, useState } from 'react';

enum HttpMethod {
  POST = "POST",
  DELETE = "DELETE",
}

interface Todo {
  id: number;
  title: string;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState<string>('');

  // Fetch todos
  const fetchTodos = async () => {
    const res = await fetch('/api/todos');
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => { fetchTodos(); }, []);

  // Add todo 
  const addTodo = async () => {
    if (!title.trim()) return;

    await fetch('/api/todos', {
      method: HttpMethod.POST,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    setTitle('');
    fetchTodos();
  };

  // Delete todo 
  const deleteTodo = async (id: number) => {
    await fetch(`/api/todos?id=${id}`, { 
      method: HttpMethod.DELETE 
    });
    fetchTodos();
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h1>Todo App</h1>

      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="New Todo"
        style={{ padding: "6px", width: "100%" }}
      />

      <button onClick={addTodo} style={{ marginTop: "10px" }}>
        Add
      </button>

      <ul style={{ marginTop: "20px" }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ marginBottom: "10px" }}>
            {todo.title}
            <button 
              onClick={() => deleteTodo(todo.id)} 
              style={{ marginLeft: "10px", color: "red" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
