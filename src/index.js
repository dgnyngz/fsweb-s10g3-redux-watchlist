import React from "react";
import ReactDOM from "react-dom/client";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { reducer } from "./reducer";
import { BrowserRouter } from "react-router-dom";

import { composeWithDevTools } from "@redux-devtools/extension";
import { Provider } from "react-redux";
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger))
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
