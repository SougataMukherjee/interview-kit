import { useEffect, useState } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const h = String(time.getHours()).padStart(2, "0");
  const m = String(time.getMinutes()).padStart(2, "0");
  const s = String(time.getSeconds()).padStart(2, "0");

  return (
    <div style={styles.body}>
      <h2>Digital Clock</h2>

      <div style={styles.clock}>
        <TimeBox value={h} label="Hour" />
        <TimeBox value={m} label="Minutes" />
        <TimeBox value={s} label="Seconds" />
      </div>
    </div>
  );
}

const TimeBox = ({ value, label }) => (
  <div style={{ margin: 5, textAlign: "center" }}>
    <span style={styles.time}>{value}</span>
    <div style={styles.text}>{label}</div>
  </div>
);

const styles = {
  body: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  clock: { display: "flex" },
  time: {
    width: 100,
    height: 80,
    background: "slateblue",
    color: "white",
    fontSize: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  text: {
    marginTop: 6,
    height: 30,
    fontSize: 12,
    background: "darkblue",
    color: "white",
    borderRadius: 6,
  },
};
