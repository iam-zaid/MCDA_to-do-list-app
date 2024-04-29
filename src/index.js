import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if ("serviceWorker" in navigator) {
  // checking if the browser supports service workers
  window.addEventListener("load", function () {
    // when app loads, fire callback
    navigator.serviceWorker.register("/sw.js", { scope: "/" }).then(
      function () {
        console.log("serviceWorker registration successful"); // registration was successful
      },
      function (err) {
        console.log("serviceWorker registration failed", err); // registration failed
      }
    );
  });
}