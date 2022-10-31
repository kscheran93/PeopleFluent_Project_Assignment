import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
.use(HttpApi)
.use(LanguageDetector)
.use(initReactI18next)
.init({
  supportedLngs: ['en', 'ar', 'fr'],
  fallbackLng: 'en',
  debug: false,
  // Options for language detector
  detection: {
    order: ['path', 'cookie', 'htmlTag'],
    caches: ['cookie'],
  },
   lng: "en", // if you're using a language detector, do not define the lng option
    // fallbackLng: "en",

    // interpolation: {
    //   escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    // },
  // react: { useSuspense: false },
  backend: {
    loadPath: 'language/{{lng}}/translation.json',
  },
})


export default i18n;