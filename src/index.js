import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { LangProvider } from "./langContext/langContext";
import { Language } from "./language/language";
import { BrowserRouter } from "react-router-dom";

i18n.use(initReactI18next).init({
  resources: Language,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <LangProvider>
      <App />
    </LangProvider>
  </BrowserRouter>
);
