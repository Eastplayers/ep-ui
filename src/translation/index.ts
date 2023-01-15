import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./languages/en";
import vi from "./languages/vi";

// @ts-ignore
i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources: {
    en,
    vi,
  },
  lng: "en",
  fallbackLng: "en",
  returnNull: false,
  interpolation: {
    escapeValue: false,
  },
});

export const { translation } = en;

const transKeys: typeof translation | Record<string, string> = {};

Object.keys(translation).forEach((key) => {
  transKeys[key] = key;
});

// @ts-ignore
export const Trans: typeof translation | Record<string, string> = transKeys;

export default i18next;
