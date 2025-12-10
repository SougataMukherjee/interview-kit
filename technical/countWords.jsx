import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  const countWords = (str) => {
    if (!str.trim()) return 0;
    return str.trim().split(/\s+/).length;
  };

  return (
    <div>
      <h3>Word Counter</h3>
      <textarea
        rows="3"
        cols="30"
        placeholder="Type here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>
        Word Count: <strong>{countWords(text)}</strong>
      </p>
    </div>
  );
}
