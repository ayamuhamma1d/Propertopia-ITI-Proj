import React from "react";
import App from "./App";
import axios from "axios";
import ReactDOM from "react-dom";
import "./index.css";
import "flowbite";
import "./App.css";
import withLoadingSpinner from "./Spinner/withLoadingSpinner";

const AppWithLoadingSpinner = withLoadingSpinner(App, axios);

ReactDOM.render(
  <React.StrictMode>
    <AppWithLoadingSpinner />
  </React.StrictMode>,
  document.getElementById("root")
);
