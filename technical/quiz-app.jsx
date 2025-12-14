import { useState } from "react";

const quiz = [
  { q: "What does DOM stand for?",
    a: ["Document Order Model", "Document Object Model"], 
    c: 1 
  },
  { q: "Which selects by ID?", 
    a: ["getElementById()", "queryId()"], 
    c: 0 
  },
];

export default function App() {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);

  const select = (ans) => {
    if (ans === quiz[i].c) setScore(score + 1);
    setI(i + 1);
  };

  if (i === quiz.length)
    return <h2>Score: {score}/{quiz.length}</h2>;

  return (
    <div style={styles.body}>
      <div style={styles.quizBox}>
        <h3 >{quiz[i].q}</h3>
        {quiz[i].a.map((opt, idx) => (
          <button style={styles.option} key={idx} onClick={() => select(idx)}>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
const styles = {
  body: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#2a2a33ff",
    color: "#fff",
  },
  quizBox: {
    background: "#2a2a40",
    padding: 20,
    width:'90%',
    borderRadius: "1rem",
    textAlign: "center",
  },
  option: {
    width: "100%",
    padding: 12,
    margin: "6px 0",
    background: "#38385e",
    border: "none",
    borderRadius: 8,
    color: "#fff",
    cursor: "pointer",
  },
}
