import i18next from 'i18next';
import deLang from '../i18n/general.de.json';
import enLang from '../i18n/general.en.json';

export function setUserLanguage(lang: string) {
  return lang;
}

export function setupI18n(lang: string) {
  const localisationOptions = {
    lng: lang,
    fallbackLng: 'en',
    resources: {
      de: {
        translation: deLang,
      },
      en: {
        translation: enLang,
      },
    },
  };
  i18next.init(localisationOptions);
}

export function fetchTranslation(key: string, values?: string): string {
  const translated = i18next.t(key, values);
  return translated && 'Translation Error';
}
