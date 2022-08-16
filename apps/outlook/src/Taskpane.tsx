/* global Office */
import { MicrosoftLogo } from "ui";
import "./Taskpane.css";

import icon80Url from "../public/assets/icon-80.png";

export interface IAppProps {
  isOfficeInitialized: boolean;
}

function Taskpane({ isOfficeInitialized }: IAppProps) {
  return (
    <div className="App">
      <img src={icon80Url} className="m-auto logo" alt="logo" />
      <h1 className="mt-4 text-xl font-bold">Welcome to this Add-In</h1>

      <div>
        <div className="card">
          <button
            onClick={() => alert("clicked")}
            className="flex items-center mt-2"
          >
            <span className="mr-4">Sign in with</span>
            <MicrosoftLogo />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Taskpane;
