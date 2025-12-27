// main.tsx

import React from "react";
import ReactDOM from "react-dom/client"; // Import for React 18+
import App from "./App"; // Import your main App component

import "./styles/App.css"; // Your global styles (optional)

const rootElement = document.getElementById("root") as HTMLElement; // Get the root div element

const root = ReactDOM.createRoot(rootElement); // Use createRoot for React 18+

root.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>
);