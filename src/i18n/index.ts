export {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  getLocaleMeta,
  isLocale,
  localeMeta,
  locales,
  type Locale,
} from './config'
export { LocaleProvider, useLocaleContext, useNavContent, useTranslation } from './LocaleProvider'
export { getMessages } from './messages'
export { resolveNav, type ResolvedNav } from './resolveNav'
export type { DeepPartial, LocaleMessages, Messages } from './types'
export { en } from './locales/en'
