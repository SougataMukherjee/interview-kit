import { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState("Sam");

  const updateUser = (name) => setUser(name);

  return (
    <GlobalContext.Provider value={{ user, updateUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);