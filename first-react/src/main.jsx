import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CssApp from "./CssApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />

    <CssApp />
  </StrictMode>
);
