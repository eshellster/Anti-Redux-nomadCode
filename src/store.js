import React, { createContext, useState, useEffect } from "react";
export const Store = createContext(null);

const Context = ({ children }) => {
  const [store, setStore, change] = useState({
    message: "Hello"
  });

  const changeMessage = () => {
    if (store.message === "Hello") {
      setStore({ message: "Bye bye" });
    } else {
      setStore({ message: "Hello" });
    }
  };

  //   useEffect(() => {
  //     setTimeout(() => setStore({ message: "Bye" }), 2000);
  //   }, []);

  return (
    <Store.Provider value={{ store, changeMessage }}>{children}</Store.Provider>
  );
};
export default Context;
