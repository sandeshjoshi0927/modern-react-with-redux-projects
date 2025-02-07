import "bulma/css/bulma.css";
import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";

import { store } from "./store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
