import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import hu from "./hu.json";
import ro from "./ro.json";

i18n.use(initReactI18next).init({
  lng: "hu",
  fallbackLng: "hu",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    hu: hu,
    en: en,
    ro: ro,
  },
});

export default i18n;