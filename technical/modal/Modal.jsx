import { forwardRef, useImperativeHandle, useRef } from "react";

export const Modal = forwardRef(function Modal({ open, onClose, children },ref) {
  const dialogRef = useRef(null);
  useImperativeHandle(ref, () => ({
    open: () => dialogRef.current?.showModal(),
    close: () => dialogRef.current?.close(),
  }));
  return (
    <dialog ref={dialogRef} open={open} style={styles.dialog}>
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
});

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
