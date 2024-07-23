import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./locales/resources";
import LanguageDetector from "i18next-browser-languagedetector";

// deliver i18n instance to react-i18next
i18n.use(LanguageDetector)
    .use(initReactI18next)
    // initialize i18n
    // refer to: https://www.i18next.com/overview/configuration-options
    .init({
        resources,
        fallbackLng: "en",
        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });

export default i18n;
