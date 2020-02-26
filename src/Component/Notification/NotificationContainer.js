import React, { useContext } from "react";
import NotificationPresenter from "./NotificationPresenter";
import { Store } from "store";

const NotificationContainer = () => {
  // static propTypes = {};

  const { stores } = useContext(Store);
  const notiList = stores.map(store => (
    <NotificationPresenter id={store.id} text={store.text} seen={store.seen} />
  ));

  return <>{notiList}</>;
};

export default NotificationContainer;
