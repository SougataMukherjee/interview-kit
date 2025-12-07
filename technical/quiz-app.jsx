import { useState } from "react";

export default function App() {
  const quizData = [
    {
      question: "What does DOM stand for?",
      options: [
        "Document Order Model",
        "Document Object Model",
        "Data Object Map",
        "None",
      ],
      correct: 1,
    },
    {
      question: "Which method selects by ID?",
      options: ["getElements()", "getElementById()", "queryId()", "None"],
      correct: 1,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);

  const q = quizData[current];

  const handleSelect = (i) => {
    setSelected(i);
    if (i === q.correct) setScore((s) => s + 1);
  };

  const next = () => {
    setSelected(null);
    setCurrent((c) => c + 1);
  };

  const finished = current >= quizData.length;

  return (
    <div style={styles.body}>
      <div style={styles.quizBox}>
        {!finished ? (
          <>
            <div style={styles.question}>
              Q{current + 1}. {q.question}
            </div>

            {q.options.map((opt, i) => {
              const isCorrect = selected !== null && i === q.correct;
              const isWrong = selected === i && i !== q.correct;

              return (
                <button
                  key={i}
                  onClick={() => selected === null && handleSelect(i)}
                  style={{
                    ...styles.option,
                    ...(isCorrect && styles.correct),
                    ...(isWrong && styles.wrong),
                  }}
                  disabled={selected !== null}
                >
                  {opt}
                </button>
              );
            })}

            {selected !== null && (
              <button style={styles.nextBtn} onClick={next}>
                Next
              </button>
            )}
          </>
        ) : (
          <h2 style={{ marginTop: 20 }}>
            Quiz Completed! Score: {score}/{quizData.length}
          </h2>
        )}
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
    background: "#1c1c2b",
    color: "#fff",
    fontFamily: "Arial",
  },
  quizBox: {
    background: "#2a2a40",
    padding: 20,
    borderRadius: "1rem",
    width: "90%",
    maxWidth: 400,
    textAlign: "center",
  },
  question: { marginBottom: 20, fontSize: 18 },
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
  correct: { background: "#28a745" },
  wrong: { background: "#dc3545" },
  nextBtn: {
    marginTop: 12,
    padding: 10,
    background: "#4b6cb7",
    border: "none",
    color: "white",
    borderRadius: 10,
    cursor: "pointer",
    width: "40%",
  },
};
