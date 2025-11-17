
export default function App() {
  return (
    <>
      <div style={{ width: "100%", background: "#eee", borderRadius: "10px" }}>
        <div
          style={{
            width: "70%",
            background: "green",
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
