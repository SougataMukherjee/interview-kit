export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2> React Modal</h2>
      <button
        onClick={() => setIsOpen(true)}
        style={{ padding: "8px 16px", cursor: "pointer" }}
      >
        Open Modal
      </button>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <h3>Hello! </h3>
          <p>This is a simple popup modal.</p>
        </Modal>
      )}
    </div>
  );
}