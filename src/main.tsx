import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";

(function () {
  const l = window.location;
  if (l.search) {
    const search = l.search.slice(1);
    if (search.startsWith('/')) {
      const parts = search.split('&');
      const path = parts[0];
      const queryString = parts.slice(1).join('&').replace(/~and~/g, '&');
      const newUrl = path + (queryString ? '?' + queryString : '') + l.hash;
      window.history.replaceState(null, '', newUrl);
    }
  }
})();

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter basename="">
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>,
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Please make sure it exists in your index.html file.",
  );
}
