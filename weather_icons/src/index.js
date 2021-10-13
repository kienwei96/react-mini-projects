import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";


const sectionElement = document.getElementById("section");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  sectionElement
);