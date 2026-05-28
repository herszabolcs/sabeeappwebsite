import { getMessages } from '@/i18n/messages'
import { resolveNav } from '@/i18n/resolveNav'

const resolvedNav = resolveNav(getMessages('en').nav)

/** Static English nav data. Prefer `useNavContent()` inside React components. */
export const navPromo = resolvedNav.navPromo
export const platformNav = resolvedNav.platformNav
export const solutionsNav = resolvedNav.solutionsNav
export const compareNav = resolvedNav.compareNav
export const resourcesNav = resolvedNav.resourcesNav
export const navCtas = resolvedNav.navCtas

export { navLocales, type NavLocaleCode } from './navStructure'
