import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import ka from './ka';

const resources = {
  en,
  ka,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
