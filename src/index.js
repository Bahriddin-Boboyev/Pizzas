import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "react-toastify/dist/ReactToastify.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-loading-skeleton/dist/skeleton.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <DataProvider>
      <App />
    </DataProvider>
  </BrowserRouter>,
);
