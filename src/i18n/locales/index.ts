import type { Locale } from '../config'
import { de } from './de'
import { el } from './el'
import { en } from './en'
import { es } from './es'
import { hu } from './hu'
import { lt } from './lt'
import { ro } from './ro'
import { th } from './th'
import { tr } from './tr'

export const localeMessages = {
  en,
  de,
  es,
  lt,
  ro,
  hu,
  tr,
  el,
  th,
} satisfies Record<Locale, (typeof en) | object>

export { en, de, es, lt, ro, hu, tr, el, th }
