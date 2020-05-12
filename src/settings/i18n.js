import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from '../../public/locales/en';
import ru from '../../public/locales/ru';
import kz from '../../public/locales/kz';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en,
  ru,
  kz
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng: 'en',
    whitelist: ['en', 'ru', 'kz'],
    cleanCode: true,
    ns: ['common'],
    defaultNS: 'common',
    fallbackNS: 'common',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
