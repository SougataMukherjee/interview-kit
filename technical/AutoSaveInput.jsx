import { useEffect, useState } from "react";

function AutoSaveInput() {
  const [text, setText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("autosave-text");
    if (saved) {
      setText(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("autosave-text", text);
  }, [text]);

  function clearText() {
    setText("");
    localStorage.removeItem("autosave-text");
  }

  return (
    <div>
      <h1>Auto Save Input</h1>

      <form className="form">
        <label htmlFor="">Name: </label>

        <input
          type="text"
          name="name"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          data-testid="input-field"
        />

        <button onClick={clearText} data-testid="clear-btn">
          Clear
        </button>
      </form>
    </div>
  );
}

export default AutoSaveInput;