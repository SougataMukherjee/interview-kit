
export default function App() {
  const [progress, setProgress] = useState(50);
  const getBarColor = () => {
		if (progress >= 80) return "green";
		if (progress >= 40) return "orange";
		return "red";
	};
  return (
    <>
      <div style={{ width: "100%", background: "#eee", borderRadius: "10px" }}>
        <div
          style={{
            width: `${progress}%`,
            background: getBarColor(),
            color: "#fff",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          70%
        </div>
      </div>
      <progress
        style={{ background: "green", borderRadius: "10px" }}
        value="70"
        max="100"
      ></progress>
    </>
  );
}
