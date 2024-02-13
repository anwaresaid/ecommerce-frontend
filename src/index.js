import React from "react";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { store } from "./store/store.ts";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
