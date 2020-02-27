import React, { createContext, useState, useEffect } from "react";
export const Store = createContext();

const notificationsObject = {
  eshell: { id: "eshell", text: "Something", seen: false },
  adjk: { id: "adjk", text: "kimchi", seen: false },
  az: { id: "az", text: "gamjatang", seen: false }
};

const Context = ({ children }) => {
  const [stores, setStores] = useState(notificationsObject);

  // const deleteNotification = id => {
  //   let deleteKey;
  //   Object.keys(stores).map(key => {
  //     if (stores[key].id === +id) deleteKey = key;
  //   });
  //   const newStores = { ...stores };
  //   delete newStores[deleteKey];
  //   setStores(newStores);
  // };
  const deleteNotification = id => {
    const newStores = { ...stores };
    delete newStores[id];
    setStores(newStores);
  };

  // const changeSeenState = id => {
  //   const updateNoti = Object.keys(stores).map(key => {
  //     if (stores[key].id === id) {
  //       if (stores[key].seen) stores[key].seen = false;
  //       else stores[key].seen = true;
  //     }
  //     return stores[key];
  //   });
  //   setStores(updateNoti);
  // };

  const changeSeenState = id => {
    console.log("...stores", { ...stores });

    const updateStores = { ...stores, [id]: { ...stores[id], seen: true } };
    setStores(updateStores);
  };

  useEffect(() => {
    console.log("값이 변경되었습니다.", stores);
  }, [stores]);

  return (
    <Store.Provider value={{ stores, changeSeenState, deleteNotification }}>
      {children}
    </Store.Provider>
  );
};
export default Context;
