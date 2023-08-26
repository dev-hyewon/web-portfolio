import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {
  BLACK_LANGUAGES,
  KEY_LANG,
  LANGUAGES,
  WHITE_LANGUAGES,
} from '@/constant';
import jsonCN from './langs/cn.json';
import jsonDE from './langs/de.json';
import jsonEN from './langs/en.json';
import jsonJP from './langs/ja.json';
import jsonKO from './langs/ko.json';
import '@/styles/font.css';

const resources = {
  [WHITE_LANGUAGES[0]]: { translation: jsonKO },
  [WHITE_LANGUAGES[1]]: { translation: jsonEN },
  [BLACK_LANGUAGES[0]]: { translation: jsonJP },
  [BLACK_LANGUAGES[1]]: { translation: jsonCN },
  [BLACK_LANGUAGES[2]]: { translation: jsonDE },
};

let USER_LANGAUGE = sessionStorage.getItem(KEY_LANG);

if (!USER_LANGAUGE) {
  const NAVIGATOR_LANGAUGE = navigator.language;
  sessionStorage.setItem(KEY_LANG, NAVIGATOR_LANGAUGE);
  const isSupported = Object.values(LANGUAGES).includes(NAVIGATOR_LANGAUGE);
  USER_LANGAUGE = isSupported ? NAVIGATOR_LANGAUGE : LANGUAGES.KOREAN;
}

document.documentElement.lang = USER_LANGAUGE.split('-')[0];

i18n.use(initReactI18next).init({
  resources,
  lng: USER_LANGAUGE,
  fallbackLng: LANGUAGES.ENGLISH,
  whitelist: WHITE_LANGUAGES,
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ['path', 'navigator'],
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
