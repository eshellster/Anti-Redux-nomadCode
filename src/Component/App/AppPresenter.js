import React from "react";
import Header from "../Header";
import Flex from "styled-flex-component";
import Notification from "../Notification";

const AppPresenter = () => {
  return (
    <>
      <Header />
      <Flex alignCenter full column>
        <Notification />
      </Flex>
    </>
  );
};

export default AppPresenter;
