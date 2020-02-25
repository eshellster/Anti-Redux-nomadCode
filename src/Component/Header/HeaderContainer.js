import React, { useState } from "react";
import HeaderPresenter from "./HeaderPresenter";

const HeaderContainer = () => {
  // static propTypes = {};
  const [state, setState] = useState({});
  return <HeaderPresenter {...state} />;
};

export default HeaderContainer;
