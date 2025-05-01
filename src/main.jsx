/**
 *  @copyright 2024 Fampian Vella
 * @license Apache-2
 */

/*
 * Node modules
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/*
 * Components
 */
import App from "./App.jsx";

/*
 * Css link
 */
import "./index.css";
import "lenis/dist/lenis.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
