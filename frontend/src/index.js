import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { rootStore } from "./redux-store";

import "./index.css";
import "./tailwindcss.css";

const renderApp =
  process.env.NODE_ENV === "development" ? (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ) : (
    <App />
  );

const root = createRoot(document.getElementById("root"));

root.render(<Provider store={rootStore}>{renderApp}</Provider>);
