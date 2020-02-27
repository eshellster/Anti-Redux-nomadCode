import React, { createContext, useState, useEffect } from "react";
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
  const [newStores, setNewStores] = useState();

  //   const seeNotification = id => {
  //     setStores(current => {
  //       return delete current.notificationsObject[id];
  //     });
  //   };

  const deleteNotification = id => {
    const temp = stores;
    delete temp[id];
    const newStores = Object.keys(temp).map(key => {
      return temp[key];
    });
    setStores(newStores);
  };

  const changeSeenState = id => {
    const updateNoti = Object.keys(stores).map(key => {
      if (stores[key].id === +id) {
        if (stores[key].seen) stores[key].seen = false;
        else stores[key].seen = true;
      }
      console.log(stores[key]);

      return stores[key];
    });
    setStores(updateNoti);
  };

  useEffect(() => {
    console.log("stores 업데이트", stores);
  }, [stores]);

  return (
    <Store.Provider value={{ stores, changeSeenState, deleteNotification }}>
      {children}
    </Store.Provider>
  );
};
export default Context;
