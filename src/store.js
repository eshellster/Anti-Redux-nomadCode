import React, { createContext, useState } from "react";
export const Store = createContext();

const notificationsObject = {
  "1": { id: 1, text: "Something", seen: false },
  "2": { id: 2, text: "Something", seen: false },
  "3": { id: 3, text: "Something", seen: false }
};

const notificationsArray = [
  { id: 1, text: "Something", seen: false },
  { id: 2, text: "Something", seen: false },
  { id: 3, text: "Something", seen: false }
];
const Context = ({ children }) => {
  const [stores, setStores] = useState(notificationsArray);

  //   useEffect(() => {
  //     setTimeout(() => setStore({ message: "Bye" }), 2000);
  //   }, []);

  return <Store.Provider value={{ stores }}>{children}</Store.Provider>;
};
export default Context;
