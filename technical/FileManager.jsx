import { useState } from "react";

function Folder({ node }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginLeft: "15px" }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          cursor: "pointer",
          fontWeight: node.folders ? "bold" : "normal",
        }}
      >
        📁 {node.name}
      </div>
      {open && node.folders?.map((f, i) => <Folder key={i} node={f} />)}
    </div>
  );
}

export default function App() {
const data = {
  name: "root",
  folders: [
    {
      name: "src",
      folders: [
        { name: "App.js" },
        { name: "index.js" }
      ]
    },
    {
      name: "public",
      folders: [
        { name: "index.html" }
      ]
    }
  ]
};


  return (
    <div>
      <h3>File Manager</h3>
      <Folder node={data} />
    </div>
  );
}
