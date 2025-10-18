import { useState } from "react";
import ChildComponent from "./ChildComponent";
const Parent = () => {
  const [arg, setArg] = useState("123");
  const [state, setState] = useState({ test: "TEST", a: 0, b: false });

  function updateData(key, value) {
    setState({
      ...state,
      [key]: value,
    });
  }
  const handleChildFunction = (arg) => {
    setArg(arg);
    console.log("Child function called with argument:", arg);
  };

  return (
    <ChildComponent
      handleChildFunction={handleChildFunction}
      data={state}
      data2={arg}
      updateData={updateData}
    />
  );
};
export default Parent;