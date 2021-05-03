import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { default as locale_es } from './assets/locales/es';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      'es': {
        translation: {
          ...locale_es
        }
      }
    },
    lng: 'es',
    fallbackLng: 'es',
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;