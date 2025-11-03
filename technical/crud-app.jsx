import { useState } from "react";

export default function App() {
  const [doc, setDoc] = useState({ name: "", age: "" });
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      list[editIndex] = doc;
      setList([...list]);
      setEditIndex(null);
    } else {
      setList([...list, doc]);
    }
    setDoc({ name: "", age: "" });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoc({ ...doc, [name]: value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={doc.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          name="age"
          value={doc.age}
          onChange={handleChange}
          placeholder="Age"
        />
        <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
      </form>

      <ul>
        {list.map((item, i) => (
          <li key={i}>
            {item.name} — {item.age}{" "}
            <button
              onClick={() => {
                setDoc(item);
                setEditIndex(i);
              }}
            >
              Edit
            </button>
            <button onClick={() => setList(list.filter((_, idx) => idx !== i))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
