import React, { useState } from "react";
import HeaderPresenter from "./HeaderPresenter";

const HeaderContainer = () => {
  // static propTypes = {};
  const [state] = useState({});
  return <HeaderPresenter {...state} />;
};

export default HeaderContainer;
