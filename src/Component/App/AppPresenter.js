import React, { useContext } from "react";
import Header from "../Header";
import Flex from "styled-flex-component";
import Notification from "../Notification";
import { Store } from "store";

const AppPresenter = () => {
  const { stores } = useContext(Store);
  return (
    <>
      <Header />
      <Flex alignCenter full column>
        {stores.map(store => (
          <Notification key={store.id} text={store.text} seen={store.seen} />
        ))}
      </Flex>
    </>
  );
};

export default AppPresenter;
