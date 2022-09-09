import React from "react";
import ReactDOM from "react-dom/client";
import "@fortawesome/fontawesome-free/js/all.js";

import App from "./App";
import Providers from "./providers/Providers.comp";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
