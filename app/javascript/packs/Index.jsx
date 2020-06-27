import React from "react";
import { render } from "react-dom";
import 'semantic-ui-css/semantic.min.css'
import App from "../components/App";

document.addEventListener("DOMContentLoaded", () => {
  render(
    <App />,
    document.body.appendChild(document.createElement("div"))
  );
});