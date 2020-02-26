import React, { createContext, useState } from "react";
export const Store = createContext();

const notificationsObject = {
  "1": { id: 1, text: "Something", seen: false },
  "2": { id: 2, text: "kimchi", seen: false },
  "3": { id: 3, text: "gamjatang", seen: false }
};

const notificationsArray = [
  { id: 1, text: "Something", seen: false },
  { id: 2, text: "kimchi", seen: false },
  { id: 3, text: "gamjatang", seen: false }
];
const Context = ({ children }) => {
  const [stores, setStores] = useState(notificationsObject);

  const changeSeenState = id => {
    const updateNoti = notificationsArray.map(noti => {
      if (noti.id === +id) {
        if (noti.seen) noti.seen = false;
        else noti.seen = true;
      }
      console.log(noti);

      return noti;
    });
    setStores(updateNoti);
  };

  return (
    <Store.Provider value={{ stores, changeSeenState }}>
      {children}
    </Store.Provider>
  );
};
export default Context;
