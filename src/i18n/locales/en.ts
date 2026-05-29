export const en = {
  common: {
    loading: 'Loading…',
  },
  nav: {
    promo: {
      heading: 'See the full platform',
      subtext:
        'Every module shares one guest record. No duplicate data entry, ever.',
      cta: 'View the Software Suite →',
      imageAlt: 'SabeeApp dashboard preview',
    },
    platform: {
      label: 'Platform',
      sections: [
        {
          key: 'core',
          label: 'Core',
          items: [
            {
              key: 'pms',
              title: 'PMS',
              description:
                'Reservations, billing, and front desk operations in one calendar',
            },
            {
              key: 'channelManager',
              title: 'Channel Manager',
              description:
                'Rates and availability synced across 60+ OTAs in real time',
            },
            {
              key: 'bookingEngine',
              title: 'Booking Engine',
              description:
                'Commission-free direct bookings from your own website',
            },
            {
              key: 'sabeepay',
              title: 'SabeePay',
              description:
                'Card payments, OTA virtual card charges, and pre-authorisations in one place',
            },
          ],
        },
        {
          key: 'guestExperience',
          label: 'Guest Experience',
          items: [
            {
              key: 'guestadvisor',
              title: 'GuestAdvisor',
              description:
                "Online check-in, ID scanning, smartphone room keys, and in-stay extras on the guest's phone",
            },
            {
              key: 'aiFrontDeskAgent',
              title: 'AI Front Desk Agent',
              description:
                'Every guest message in one inbox, with AI replies for routine questions and human takeover anytime',
            },
          ],
        },
        {
          key: 'operations',
          label: 'Operations',
          items: [
            {
              key: 'housekeepingApp',
              title: 'Housekeeping App',
              description:
                'Real-time room status, digital checklists, and task assignment for your cleaning team',
            },
            {
              key: 'sabeeappGo',
              title: 'SabeeApp Go',
              description:
                'Mobile app for owners, GMs, and front desk staff. Daily arrivals, key stats, and document scanning from your phone',
            },
            {
              key: 'cashDrawer',
              title: 'Cash Drawer',
              description: 'Multi-currency cash management and exchange tracking',
            },
          ],
        },
      ],
    },
    solutions: {
      label: 'Solutions',
      propertyTypes: {
        label: 'By property type',
        items: [
          { key: 'independentHotels', title: 'Independent Hotels' },
          { key: 'hostels', title: 'Hostel Operations' },
          { key: 'vacationRentals', title: 'Vacation Rentals' },
          { key: 'multiProperty', title: 'Multi Property' },
        ],
      },
      roles: {
        label: 'By role',
        items: [
          {
            key: 'hotelOwners',
            title: 'Hotel Owners',
            description: 'Occupancy, revenue, and reporting tools',
          },
          {
            key: 'frontDeskTeams',
            title: 'Front Desk Teams',
            description: 'Check-in, reservations, and folio management',
          },
          {
            key: 'housekeepingManagers',
            title: 'Housekeeping Managers',
            description: 'Room status, checklists, and team coordination',
          },
        ],
      },
    },
    compare: {
      label: 'Compare',
      items: [
        { key: 'vsCloudbeds', title: 'SabeeApp vs Cloudbeds' },
        { key: 'vsLittleHotelier', title: 'SabeeApp vs Little Hotelier' },
        { key: 'vsRoomRaccoon', title: 'SabeeApp vs RoomRaccoon' },
        { key: 'allComparisons', title: 'See all comparisons' },
      ],
    },
    resources: {
      label: 'Resources',
      items: [
        { key: 'blog', title: 'Blog' },
        { key: 'caseStudies', title: 'Case Studies' },
        { key: 'helpCentre', title: 'Help Centre' },
        { key: 'marketplace', title: 'Marketplace' },
        { key: 'ebooks', title: 'Ebooks' },
        { key: 'referral', title: 'Referral' },
        { key: 'community', title: 'Community' },
      ],
    },
    ctas: {
      bookDemo: 'Book a Demo',
      getPricing: 'Get Pricing',
    },
  },
  home: {
    hero: {
      eyebrow: 'TRUSTED BY 6,000+ INDEPENDENT HOTELIERS IN 70+ COUNTRIES',
      title: 'The operating system hotels actually need',
      description:
        'SabeeApp unifies your PMS, channel manager, booking engine, payments, and guest experience in one cloud platform.',
      explore: 'Explore',
      demo: 'Demo',
      reassurance:
        '1 Month Free Trial · From €89/Month · No Credit Card · No Contracts',
    },
  },
} as const
