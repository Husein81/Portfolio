import React from "react";
import ReactDOM from "react-dom/client";

import "./app/index.css";
import App from "./app/App";
import ThemeProvider from "./components/layout/ThemeProvider";
import { TooltipProvider } from "./components/ui/tooltip";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <TooltipProvider delayDuration={200}>
        <App />
      </TooltipProvider>
    </ThemeProvider>
  </React.StrictMode>
);
