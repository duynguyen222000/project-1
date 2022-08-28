import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/configStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
