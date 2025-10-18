import { useState } from "react";

function Modal({ onClose, children }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          minWidth: "300px",
          textAlign: "center",
        }}
      >
        {children}
        <button
          onClick={onClose}
          style={{
            marginTop: "10px",
            padding: "6px 12px",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}