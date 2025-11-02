export default function DashboardLayout({ left, right }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ width: "30%", borderRight: "2px solid #ccc", padding: "10px" }}>
        {left}
      </div>
      <div style={{ flex: 1, padding: "10px" }}>
        {right}
      </div>
    </div>
  );
}
