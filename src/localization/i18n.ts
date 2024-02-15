import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import ka from './ka';
import hn from './hn';

const resources = {
  en,
  ka,
  hn,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
  ns: ['common'],
});

export default i18n;
