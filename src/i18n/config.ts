export const DEFAULT_LOCALE = 'en' as const

export const LOCALE_STORAGE_KEY = 'sabeeapp-locale'

export const locales = [
  'en',
  'de',
  'es',
  'lt',
  'ro',
  'hu',
  'tr',
  'el',
  'th',
] as const

export type Locale = (typeof locales)[number]

export const localeMeta = [
  { code: 'en', label: 'English', flag: '🇬🇧', shortLabel: 'EN' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪', shortLabel: 'DE' },
  { code: 'es', label: 'Español', flag: '🇪🇸', shortLabel: 'ES' },
  { code: 'lt', label: 'Lietuvių', flag: '🇱🇹', shortLabel: 'LT' },
  { code: 'ro', label: 'Română', flag: '🇷🇴', shortLabel: 'RO' },
  { code: 'hu', label: 'Magyar', flag: '🇭🇺', shortLabel: 'HU' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷', shortLabel: 'TR' },
  { code: 'el', label: 'Ελληνικά', flag: '🇬🇷', shortLabel: 'EL' },
  { code: 'th', label: 'ไทย', flag: '🇹🇭', shortLabel: 'TH' },
] as const satisfies ReadonlyArray<{
  code: Locale
  label: string
  flag: string
  shortLabel: string
}>

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

export function getLocaleMeta(code: Locale) {
  return localeMeta.find((item) => item.code === code) ?? localeMeta[0]
}
