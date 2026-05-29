import type { DeepPartial } from './types'

export function deepMerge<T extends object>(
  base: T,
  override: DeepPartial<T> | undefined,
): T {
  if (!override) return base

  const result = { ...base }

  for (const key of Object.keys(override) as Array<keyof T>) {
    const baseValue = base[key]
    const overrideValue = override[key]

    if (overrideValue === undefined) continue

    if (
      baseValue &&
      typeof baseValue === 'object' &&
      !Array.isArray(baseValue) &&
      typeof overrideValue === 'object' &&
      !Array.isArray(overrideValue)
    ) {
      result[key] = deepMerge(
        baseValue as object,
        overrideValue as DeepPartial<object>,
      ) as T[keyof T]
      continue
    }

    result[key] = overrideValue as T[keyof T]
  }

  return result
}
