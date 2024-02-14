import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import Router from "./routes/Router.jsx";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  </React.StrictMode>
);
