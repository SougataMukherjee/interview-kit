export function Modal({ open, onClose, children }) {
  return (
    <dialog open={open} style={styles.dialog}>
      <div style={styles.overlay}>
        <div style={styles.box}>
          {children}

          <button onClick={onClose} style={styles.closeBtn}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
}

const styles = {
  dialog: {
    padding: 0,
    border: "none",
    background: "transparent",
  },

  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  box: {
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    minWidth: "300px",
    textAlign: "center",
  },

  closeBtn: {
    marginTop: "10px",
    padding: "6px 12px",
    cursor: "pointer",
  },
};
