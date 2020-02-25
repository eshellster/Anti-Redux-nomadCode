import React, { createContext, useState, useEffect } from "react";
export const Store = createContext(null);

const Context = ({ children }) => {
  const [store, setStore] = useState({
    message: "Hello"
  });
  useEffect(() => {
    setTimeout(() => setStore({ message: "Bye" }), 2000);
  }, []);

  return <Store.Provider value={{ store }}>{children}</Store.Provider>;
};
export default Context;
