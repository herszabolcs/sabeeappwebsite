import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  getLocaleMeta,
  isLocale,
  localeMeta,
  type Locale,
} from './config'
import { getMessages } from './messages'
import { resolveNav } from './resolveNav'
import type { Messages } from './types'

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  messages: Messages
  nav: ReturnType<typeof resolveNav>
  locales: typeof localeMeta
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE
  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)
  return stored && isLocale(stored) ? stored : DEFAULT_LOCALE
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale)

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale)
    window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale)
    document.documentElement.lang = nextLocale
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo(() => {
    const messages = getMessages(locale)
    return {
      locale,
      setLocale,
      messages,
      nav: resolveNav(messages.nav),
      locales: localeMeta,
    }
  }, [locale, setLocale])

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}

export function useLocaleContext() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocaleContext must be used within LocaleProvider')
  }
  return context
}

export function useTranslation() {
  const { locale, setLocale, messages, locales } = useLocaleContext()
  return { locale, setLocale, t: messages, locales, getLocaleMeta }
}

export function useNavContent() {
  const { nav } = useLocaleContext()
  return nav
}
