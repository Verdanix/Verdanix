import i18n from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { default as HttpApi } from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n.use(HttpApi)
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        ns: ['common'],
        defaultNS: 'common',
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: (languages, namespaces) => {
                const activeLanguage = i18n.language; // Use the current active language
                const page = namespaces[0];
                return `/translations/${activeLanguage}/${page}`;
            },
        },
        react: {
            useSuspense: true,
        },
    });

export default i18n;
