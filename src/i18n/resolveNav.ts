import {
  compareNavStructure,
  navCtaStructure,
  navPromoStructure,
  platformNavStructure,
  resourcesNavStructure,
  solutionsNavStructure,
} from '@/data/navStructure'
import type { Messages } from './types'

function mergeKeyedItems<
  TStructure extends { key: string; href: string; external?: boolean },
  TMessage extends { key: string; title: string; description?: string },
>(structure: readonly TStructure[], messages: readonly TMessage[]) {
  return structure.map((item) => {
    const copy = messages.find((message) => message.key === item.key)
    if (!copy) {
      throw new Error(`Missing nav copy for key "${item.key}"`)
    }

    return {
      ...item,
      title: copy.title,
      ...(copy.description ? { description: copy.description } : {}),
    }
  })
}

function mergeSections<
  TStructure extends {
    key: string
    items: readonly { key: string; href: string }[]
  },
  TMessage extends {
    key: string
    label: string
    items: readonly { key: string; title: string; description?: string }[]
  },
>(structure: readonly TStructure[], messages: readonly TMessage[]) {
  return structure.map((section) => {
    const copy = messages.find((message) => message.key === section.key)
    if (!copy) {
      throw new Error(`Missing nav section copy for key "${section.key}"`)
    }

    return {
      key: section.key,
      label: copy.label,
      items: mergeKeyedItems(section.items, copy.items),
    }
  })
}

export function resolveNav(messages: Messages['nav']) {
  return {
    navPromo: {
      ...navPromoStructure,
      ...messages.promo,
    },
    platformNav: {
      label: messages.platform.label,
      sections: mergeSections(
        platformNavStructure.sections,
        messages.platform.sections,
      ),
    },
    solutionsNav: {
      label: messages.solutions.label,
      propertyTypes: {
        label: messages.solutions.propertyTypes.label,
        items: mergeKeyedItems(
          solutionsNavStructure.propertyTypes.items,
          messages.solutions.propertyTypes.items,
        ),
      },
      roles: {
        label: messages.solutions.roles.label,
        items: mergeKeyedItems(
          solutionsNavStructure.roles.items,
          messages.solutions.roles.items,
        ),
      },
    },
    compareNav: {
      label: messages.compare.label,
      items: mergeKeyedItems(
        compareNavStructure.items,
        messages.compare.items,
      ),
    },
    resourcesNav: {
      label: messages.resources.label,
      items: mergeKeyedItems(
        resourcesNavStructure.items,
        messages.resources.items,
      ),
    },
    navCtas: {
      bookDemo: messages.ctas.bookDemo,
      bookDemoHref: navCtaStructure.bookDemoHref,
      getPricing: messages.ctas.getPricing,
      getPricingHref: navCtaStructure.getPricingHref,
    },
  }
}

export type ResolvedNav = ReturnType<typeof resolveNav>
