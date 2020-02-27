import React, { useContext } from "react";
import NotificationPresenter from "./NotificationPresenter";
import { Store } from "store";

const NotificationContainer = () => {
  // static propTypes = {};

  const { stores } = useContext(Store);

  return (
    <>
      {Object.keys(stores).map(key => (
        <NotificationPresenter
          key={stores[key].id}
          id={stores[key].id}
          text={stores[key].text}
          seen={stores[key].seen}
        />
      ))}
    </>
  );
};

export default NotificationContainer;
