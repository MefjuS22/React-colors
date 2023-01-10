import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "primeflex/primeflex.scss";
import "primereact/resources/themes/lara-dark-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import { store } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
