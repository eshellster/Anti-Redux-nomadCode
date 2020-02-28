import React, { createContext, useEffect, useReducer } from "react";
export const Store = createContext();

const notificationsObject = {
  1: { id: 1, text: "Something", seen: false },
  2: { id: 2, text: "kimchi", seen: false },
  3: { id: 3, text: "gamjatang", seen: false }
};

const notificationsReducer = (stores, { type, payload }) => {
  switch (type) {
    case "SET_INIT_STORES":
      return payload;

    case "DELETE_NOTIFICATION":
      delete stores[payload];
      return { ...stores };

    case "CAHNGE_SEEN_STATUS":
      const toggleSeen = stores[[payload]].seen ? false : true;
      return {
        ...stores,
        [payload]: { ...stores[payload], seen: toggleSeen }
      };

    default:
      break;
  }
};

const Context = ({ children }) => {
  const [stores, dispatch] = useReducer(notificationsReducer, {});

  const deleteNotification = id => {
    dispatch({ type: "DELETE_NOTIFICATION", payload: id });
  };

  const changeSeenState = id => {
    dispatch({ type: "CAHNGE_SEEN_STATUS", payload: id });
  };

  useEffect(() => {
    dispatch({
      type: "SET_INIT_STORES",
      payload: notificationsObject
    });
    console.log("값이 변경되었습니다.", stores);
  }, []);

  return (
    <Store.Provider
      value={{ stores, dispatch, changeSeenState, deleteNotification }}
    >
      {children}
    </Store.Provider>
  );
};
export default Context;
