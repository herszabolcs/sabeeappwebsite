const STORAGE_BASE =
  'https://vjwpatijjtpjocgfncjq.supabase.co/storage/v1/object/public/sabeeapp-website'

export const media = {
  logo: {
    src: `${STORAGE_BASE}/sabeeapp-logo-dark.png`,
    alt: 'SabeeApp',
  },
  heroImage: {
    src: `${STORAGE_BASE}/hero/hero-1.png`,
    alt: 'Hotel lobby with warm lighting',
  },
  heroVideo: {
    src: `${STORAGE_BASE}/evelin-video-may-2026.mp4`,
  },
  homeHowItWorks1: {
    src: `${STORAGE_BASE}/home/how-0.png`,
    alt: 'Two women collaborating with a tablet at a hotel front desk',
  },
  homeHowItWorks2: {
    src: `${STORAGE_BASE}/home/how-1.png`,
    alt: 'Couple reviewing laptop together in a modern workspace',
  },
  homeHowItWorks3: {
    src: `${STORAGE_BASE}/home/how-2.png`,
    alt: 'Team members laughing together while using a tablet in a modern workspace',
  },
  homeVacationRentals: {
    src: `${STORAGE_BASE}/home/vacation-rentals.png`,
    alt: 'Modern lakeside vacation rental cabin in a wooded setting',
  },
} as const
