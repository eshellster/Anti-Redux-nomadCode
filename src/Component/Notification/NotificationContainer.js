import React, { useState, useContext } from "react";
import NotificationPresenter from "./NotificationPresenter";
import { Store } from "store";

const NotificationContainer = props => {
  // static propTypes = {};

  const { state } = useContext(Store);

  const [messageState, setMessageState] = useState({});

  return <NotificationPresenter {...props} {...messageState} />;
};

export default NotificationContainer;
