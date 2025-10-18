import React from "react";
import { useGlobal } from "./GlobalContext";

export default Child = () => {
  const { user, updateUser } = useGlobal();
  return (
    <div>
      <h3> Current User: {user}</h3>
      <button onClick={() => updateUser("Rupai")}>Change User to Rupai</button>
    </div>
  );
};