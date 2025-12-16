import { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";
import {
  addTodo,
  deleteTodo,
  setEditTodo,
  updateTodo,
} from "./todoSlice";


function TodoApp() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const { todos, editIndex } = useSelector((state) => state.todo);

  const addOrUpdate = () => {
    if (!text.trim()) return;

    if (editIndex !== null) {
      dispatch(updateTodo({ index: editIndex, text }));
    } else {
      dispatch(addTodo(text));
    }

    setText("");
  };

  const editTodo = (i) => {
    setText(todos[i]);
    dispatch(setEditTodo({ index: i }));
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
            <button onClick={() => dispatch(deleteTodo(i))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}
