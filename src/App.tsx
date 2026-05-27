import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { LogoCloud } from './components/sections/LogoCloud'
import { ProductSuite } from './components/sections/ProductSuite'
import { Benefits } from './components/sections/Benefits'
import { Pricing } from './components/sections/Pricing'
import { Testimonials } from './components/sections/Testimonials'
import { HowItWorks } from './components/sections/HowItWorks'
import { Integrations } from './components/sections/Integrations'
import { FAQ } from './components/sections/FAQ'
import { DemoCTA } from './components/sections/DemoCTA'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoCloud />
        <ProductSuite />
        <Benefits />
        <Pricing />
        <Testimonials />
        <HowItWorks />
        <Integrations />
        <FAQ />
        <DemoCTA />
      </main>
      <Footer />
    </>
  )
}
