import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { FavrotiesContextProvider } from "./store/favorites-context";

ReactDOM.render(
  <FavrotiesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavrotiesContextProvider>,
  document.getElementById("root")
);
