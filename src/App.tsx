import { lazy, Suspense, useEffect, type ComponentType, type LazyExoticComponent } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Banner8 } from '@/components/layout/Banner8'

const pages = [
  { path: '/', slug: 'home' },
  { path: '/ai-front-desk-agent', slug: 'ai-front-desk-agent' },
  { path: '/apartment-management-software', slug: 'vacation-rentals' },
  { path: '/blog', slug: 'blog' },
  { path: '/booking-engine', slug: 'booking-engine' },
  { path: '/case-studies', slug: 'case-studies' },
  { path: '/cash-drawer', slug: 'cash-drawer' },
  { path: '/channel-manager', slug: 'channel-manager' },
  { path: '/compare-sabeeapp-to-competitors', slug: 'all-comparisons' },
  { path: '/contact', slug: 'contact' },
  { path: '/customer-support', slug: 'help-centre' },
  { path: '/ebooks', slug: 'ebooks' },
  { path: '/guestadvisor', slug: 'guestadvisor' },
  { path: '/hotel-operations-software', slug: 'independent-hotels' },
  { path: '/hostel-management-system', slug: 'hostels' },
  { path: '/housekeeping-app', slug: 'housekeeping-app' },
  { path: '/marketplace', slug: 'marketplace' },
  { path: '/pms', slug: 'pms' },
  { path: '/prices', slug: 'prices' },
  { path: '/sabeeapp-go', slug: 'sabeeapp-go' },
  {
    path: '/sabeeapp-referral-program',
    slug: 'referral',
  },
  {
    path: '/sabeeapp-software-suite',
    slug: 'software-suite',
  },
  {
    path: '/sabeeapp-vs-cloudbeds-comparison',
    slug: 'sabeeapp-vs-cloudbeds',
  },
  {
    path: '/sabeeapp-vs-little-hotelier-comparison',
    slug: 'sabeeapp-vs-little-hotelier',
  },
  {
    path: '/sabeeapp-vs-roomraccoon-comparison',
    slug: 'sabeeapp-vs-roomraccoon',
  },
  { path: '/sabeepay', slug: 'sabeepay' },
] as const

const redirects = [
  { from: '/all-comparisons', to: '/compare-sabeeapp-to-competitors' },
  { from: '/boutique-hotels', to: '/hotel-operations-software' },
  { from: '/community', to: 'https://community.sabeeapp.com/' },
  { from: '/compare', to: '/compare-sabeeapp-to-competitors' },
  { from: '/for', to: '/hotel-operations-software' },
  { from: '/help-centre', to: '/customer-support' },
  { from: '/hostels', to: '/hostel-management-system' },
  { from: '/independent-hotels', to: '/hotel-operations-software' },
  { from: '/multi-property', to: '/sabeeapp-software-suite' },
  { from: '/platform', to: '/sabeeapp-software-suite' },
  { from: '/referral', to: '/sabeeapp-referral-program' },
  { from: '/resources', to: '/blog' },
  { from: '/sabeeapp-vs-cloudbeds', to: '/sabeeapp-vs-cloudbeds-comparison' },
  {
    from: '/sabeeapp-vs-little-hotelier',
    to: '/sabeeapp-vs-little-hotelier-comparison',
  },
  {
    from: '/sabeeapp-vs-roomraccoon',
    to: '/sabeeapp-vs-roomraccoon-comparison',
  },
  { from: '/software-suite', to: '/sabeeapp-software-suite' },
  { from: '/vacation-rentals', to: '/apartment-management-software' },
] as const

const pageComponents = Object.fromEntries(
  pages.map(({ slug }) => [
    slug,
    lazy(() => import(`./pages/${slug}/index.jsx`)),
  ]),
) as Record<(typeof pages)[number]['slug'], LazyExoticComponent<ComponentType>>

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background-primary">
      <p className="text-text-primary">Loading…</p>
    </div>
  )
}

function ExternalRedirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to)
  }, [to])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <Banner8 />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {pages.map(({ path, slug }) => {
            const Page = pageComponents[slug]
            return <Route key={slug} path={path} element={<Page />} />
          })}
          {redirects.map(({ from, to }) =>
            to.startsWith('http') ? (
              <Route
                key={from}
                path={from}
                element={<ExternalRedirect to={to} />}
              />
            ) : (
              <Route
                key={from}
                path={from}
                element={<Navigate to={to} replace />}
              />
            ),
          )}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
