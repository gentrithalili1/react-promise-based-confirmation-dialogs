import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import AppContextProviders from "./context/AppContextProviders";

import App from "./App";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProviders>
      <App />
    </AppContextProviders>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
