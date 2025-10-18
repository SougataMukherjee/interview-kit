import React from "react";
import { GlobalProvider } from "./GlobalContext";
import Child from "./Child";

export default function App() {
  return (
    <GlobalProvider>
        <Child />
    </GlobalProvider>
  );
}