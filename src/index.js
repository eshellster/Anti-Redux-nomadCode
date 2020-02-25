import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./typography";
import App from "./Component/App";

const GlobalStyle = createGlobalStyle`
${reset};
body{
    background-color:#ecf0f1;
}`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);
