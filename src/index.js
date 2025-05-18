import React from "react";
import ReactDOM from "react-dom/client";

// CSS imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";
import "./contact-page.css";

// JavaScript imports - Using bundle instead of separate imports
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // This includes Popper
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Add Google Fonts for both Latin and Arabic scripts
const linkEn = document.createElement("link");
linkEn.rel = "stylesheet";
linkEn.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap";
document.head.appendChild(linkEn);

const linkAr = document.createElement("link");
linkAr.rel = "stylesheet";
linkAr.href = "https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@300;400;500;700&display=swap";
document.head.appendChild(linkAr);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();