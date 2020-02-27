import React, { createContext, useState, useEffect } from "react";
export const Store = createContext();

const notificationsObject = {
  1: { id: 1, text: "Something", seen: false },
  2: { id: 2, text: "kimchi", seen: false },
  3: { id: 3, text: "gamjatang", seen: false }
};

const Context = ({ children }) => {
  const [stores, setStores] = useState(notificationsObject);

  const deleteNotification = id => {
    const newStores = { ...stores };
    delete newStores[id];
    setStores(newStores);
  };

  const changeSeenState = id => {
    const toggleSeen = stores[id].seen ? false : true;

    const updateStores = {
      ...stores,
      [id]: { ...stores[id], seen: toggleSeen }
    };
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
