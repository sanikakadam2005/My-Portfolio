
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    'Root element not found. Check public/index.html for <div id="root"></div>.'
  );
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <>
      <style>{`
        /* Remove default browser spacing */
        html,
        body,
        #root {
          width: 100%;
          min-height: 100%;
          margin: 0;
          padding: 0;
          border: none;
        }

        /* Apply consistent sizing */
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        /* Remove unwanted horizontal scrolling */
        body {
          overflow-x: hidden;
        }

        /* Remove default spacing from the main app */
        #root > * {
          margin-top: 0;
        }
      `}</style>

      <App />
    </>
  </React.StrictMode>
);
