import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "react-responsive-modal/styles.css";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
