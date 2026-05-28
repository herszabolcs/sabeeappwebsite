import type { Locale } from './config'
import { deepMerge } from './merge'
import { en, localeMessages } from './locales'
import type { Messages } from './types'

export function getMessages(locale: Locale): Messages {
  if (locale === 'en') return en
  return deepMerge(en, localeMessages[locale])
}
