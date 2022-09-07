import React from "react";
import ReactDOM from "react-dom/client"; //React 18
//import ReactDOM from "react-dom"; // React 17
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";

//penggunaan react 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//penggunaan react 17

// ReactDOM.render(
//   <React.StrictMode>
//   <App />
// </React.StrictMode>,
// document.getElementById('root')
// )
