import React, { useContext } from "react";
import NotificationPresenter from "./NotificationPresenter";
import { Store } from "store";

const NotificationContainer = () => {
  // static propTypes = {};

  const { stores } = useContext(Store);
  const notiList = Object.keys(stores).map(key => (
    <NotificationPresenter
      id={stores[key].id}
      text={stores[key].text}
      seen={stores[key].seen}
    />
  ));

  return <>{notiList}</>;
};

export default NotificationContainer;
