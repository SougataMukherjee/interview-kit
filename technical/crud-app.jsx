import "./styles.css";
import { useState } from "react";
export default function App() {
  const [doc, setDoc] = useState({ name: "", age: 0 });
  const [form, setForm] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...form];
      updated[editIndex] = doc;
      setForm(updated);
      setEditIndex(null);
    } else {
      setForm([...form, doc]);
    }
    setDoc({ name: "", age: 0 });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoc({ ...doc, [name]: value });
  };
  const handleDelete = (index) => {
    setForm(form.filter((_, i) => i !== index));
  };

  const handleEdit = (i) => {
    setDoc(form[i]);
    setEditIndex(i);
  };

  return (
    <div className="App">
      <form>
        <input name="name" value={doc.name} onChange={handleChange} />
        <input name="age" value={doc.age} onChange={handleChange} />
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
        {form.length > 0 ? (
          <ul>
            {form.map((data, i) => (
              <li key={i}>
                {data.name} — {data.age}
                <button type="button" onClick={() => handleEdit(i)}>
                  Edit
                </button>
                <button type="button" onClick={() => handleDelete(i)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          "no docx found"
        )}
      </form>
    </div>
  );
}