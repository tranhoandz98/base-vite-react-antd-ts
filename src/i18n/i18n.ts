import global_en from './locales/en-US.ts'
import global_vi from './locales/vi-VN.ts'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import viVNIntl from 'antd/lib/locale/vi_VN'
import detector from 'i18next-browser-languagedetector'
import enUSIntl from 'antd/lib/locale/en_US'

export const locales = {
  en: 'EN',
  vi: 'VI'
} as const

export const localesAntd = {
  vi: viVNIntl,
  en: enUSIntl
} as const

export const resources = {
  en: {
    global: global_en
  },
  vi: {
    global: global_vi
  }
} as const
export const defaultNS = 'global'

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    detection: {
      // Order and from where user language should be detected
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],

      // Keys or params to lookup language from
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,

      // Cache user language on
      caches: ['localStorage', 'cookie'],
      excludeCacheFor: ['cimode'] // Languages to not persist (cookie, localStorage)

      // Optional expire and domain for set cookie
      // cookieMinutes: 10,
      // cookieDomain: 'myDomain'

      // Optional htmlTag with lang attribute, the default is:
      // htmlTag: document.documentElement
    },
    interpolation: { escapeValue: false },
    // lng: 'vi',
    fallbackLng: 'vi',
    defaultNS,
    nsSeparator: false,
    keySeparator: false,
    resources
  })

export default i18n
