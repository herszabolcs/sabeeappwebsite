export const routes = {
  home: '/',

  // Platform products
  pms: '/pms',
  channelManager: '/channel-manager',
  bookingEngine: '/booking-engine',
  sabeepay: '/sabeepay',
  guestadvisor: '/guestadvisor',
  aiFrontDeskAgent: '/ai-front-desk-agent',
  housekeepingApp: '/housekeeping-app',
  sabeeappGo: '/sabeeapp-go',
  cashDrawer: '/cash-drawer',
  softwareSuite: '/sabeeapp-software-suite',

  // Solutions
  hotelOperationsSoftware: '/hotel-operations-software',
  hostelManagementSystem: '/hostel-management-system',
  apartmentManagementSoftware: '/apartment-management-software',

  // Compare
  allComparisons: '/compare-sabeeapp-to-competitors',
  vsCloudbeds: '/sabeeapp-vs-cloudbeds-comparison',
  vsLittleHotelier: '/sabeeapp-vs-little-hotelier-comparison',
  vsRoomRaccoon: '/sabeeapp-vs-roomraccoon-comparison',

  // Resources
  blog: '/blog',
  caseStudies: '/case-studies',
  helpCentre: '/customer-support',
  marketplace: '/marketplace',
  ebooks: '/ebooks',
  referral: '/sabeeapp-referral-program',
  communityExternal: 'https://community.sabeeapp.com/',

  contact: '/contact',
  prices: '/prices',
} as const

export type RouteKey = keyof typeof routes
