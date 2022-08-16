// avoid eslint-undef for Office global var: https://github.com/OfficeDev/office-js-docs-pr/issues/691#:~:text=To%20fix%20the%20issue%2C%20we%20need%20to%20add%20%E2%80%9C/*%20global%20Excel%2C%20Office%20*/%E2%80%9D%20at%20the%20beginning%20of%20the%20react%20components%20files.%20It%20allows%20those%20components%20to%20access%20global%20variable.%20We%20could%20also%20fix%20the%20issue%20by%20customizing%20the%20Eslint%20config.
/* global Office */
import React from "react";
import ReactDOM from "react-dom/client";
import Taskpane from "./Taskpane";
import "./index.css";

let isOfficeInitialized = false;

if (Office !== undefined) {
  Office.onReady(() => {
    isOfficeInitialized = true;
    ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
      <React.StrictMode>
        <Taskpane isOfficeInitialized={isOfficeInitialized} />
      </React.StrictMode>
    );
  });
}
