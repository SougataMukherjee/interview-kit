import { useState, useRef } from "react";
import Modal from "./Modal";
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
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
        <Modal open={isOpen} onClose={() => setIsOpen(false)} ref={modalRef}>
          <h3>Hello! </h3>
          <p>This is a simple popup modal.</p>
        </Modal>
      )}
    </div>
  );
}