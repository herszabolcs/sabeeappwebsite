import type { en } from './locales/en'

export type Messages = typeof en

export type DeepPartial<T> = T extends object
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : T

export type LocaleMessages = DeepPartial<Messages>
