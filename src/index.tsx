import { SnackbarProvider } from "notistack";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./pages/app/App";
import reportWebVitals from "./reportWebVitals";

import { HelmetProvider } from "react-helmet-async";
// constants
import { ThemeProvider } from "@mui/material/styles";
import { SNACKBARS_IN_DISPLAY } from "constants/index";

import { theme } from "./styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <SnackbarProvider maxSnack={SNACKBARS_IN_DISPLAY}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
