import React from "react";
//import ReactDOM from "react-dom/client"; //React 18
import ReactDOM from "react-dom"; // React 17
import "bootstrap/dist/css/bootstrap.css"; //css Bootsatrap
import "./index.css"; //css global
import App from "./App";

//BrowserRouter dari react router
import { BrowserRouter } from "react-router-dom";

//penggunaan react 18

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

//penggunaan react 17

// ReactDOM.render(
//   <React.StrictMode>
//   <App />
// </React.StrictMode>,
// document.getElementById('root')
// )
