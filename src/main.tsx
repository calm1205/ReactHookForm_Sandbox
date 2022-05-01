import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "~/Router";

const rootDOM = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootDOM);

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
