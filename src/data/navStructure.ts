import { routes } from '@/lib/routes'

export const navPromoStructure = {
  href: routes.softwareSuite,
  imageSrc:
    'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg',
} as const

export const platformNavStructure = {
  sections: [
    {
      key: 'core',
      items: [
        { key: 'pms', href: routes.pms },
        { key: 'channelManager', href: routes.channelManager },
        { key: 'bookingEngine', href: routes.bookingEngine },
        { key: 'sabeepay', href: routes.sabeepay },
      ],
    },
    {
      key: 'guestExperience',
      items: [
        { key: 'guestadvisor', href: routes.guestadvisor },
        { key: 'aiFrontDeskAgent', href: routes.aiFrontDeskAgent },
      ],
    },
    {
      key: 'operations',
      items: [
        { key: 'housekeepingApp', href: routes.housekeepingApp },
        { key: 'sabeeappGo', href: routes.sabeeappGo },
        { key: 'cashDrawer', href: routes.cashDrawer },
      ],
    },
  ],
} as const

export const solutionsNavStructure = {
  propertyTypes: {
    items: [
      {
        key: 'independentHotels',
        href: routes.hotelOperationsSoftware,
      },
      {
        key: 'boutiqueHotels',
        href: routes.hotelOperationsSoftware,
      },
      { key: 'hostels', href: routes.hostelManagementSystem },
      {
        key: 'vacationRentals',
        href: routes.apartmentManagementSoftware,
      },
      { key: 'multiProperty', href: routes.softwareSuite },
    ],
  },
  roles: {
    items: [
      {
        key: 'hotelOwners',
        href: routes.hotelOperationsSoftware,
      },
      { key: 'frontDeskTeams', href: routes.pms },
      {
        key: 'housekeepingManagers',
        href: routes.housekeepingApp,
      },
    ],
  },
} as const

export const compareNavStructure = {
  items: [
    { key: 'vsCloudbeds', href: routes.vsCloudbeds },
    { key: 'vsLittleHotelier', href: routes.vsLittleHotelier },
    { key: 'vsRoomRaccoon', href: routes.vsRoomRaccoon },
    { key: 'allComparisons', href: routes.allComparisons },
  ],
} as const

export const resourcesNavStructure = {
  items: [
    { key: 'blog', href: routes.blog },
    { key: 'caseStudies', href: routes.caseStudies },
    { key: 'helpCentre', href: routes.helpCentre },
    { key: 'marketplace', href: routes.marketplace },
    { key: 'ebooks', href: routes.ebooks },
    { key: 'referral', href: routes.referral },
    {
      key: 'community',
      href: routes.communityExternal,
      external: true,
    },
  ],
} as const

export const navCtaStructure = {
  bookDemoHref: routes.contact,
  getPricingHref: routes.prices,
} as const

export { localeMeta as navLocales, type Locale as NavLocaleCode } from '@/i18n/config'
