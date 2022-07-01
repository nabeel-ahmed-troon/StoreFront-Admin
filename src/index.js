import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { initContract } from "./NearProvider/utils";

import { createRoot } from "react-dom/client";
import { Buffer } from "buffer";

global.Buffer = Buffer;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

window.nearInitPromise = initContract()
  .then(() => {
    root.render(
      
        <App />
      
    );
  })
  .catch(console.error);