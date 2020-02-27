import React from "react";
import AppPresenter from "./AppPresenter";
import Context from "store";

const AppContainer = () => {
  return (
    <Context>
      <AppPresenter />
    </Context>
  );
};

export default AppContainer;
