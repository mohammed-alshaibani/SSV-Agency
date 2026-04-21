import { Header } from '@/components/ssv/header'
import { Hero } from '@/components/ssv/hero'
import { About } from '@/components/ssv/about'
import { Services } from '@/components/ssv/services'
import { Workflow } from '@/components/ssv/workflow'
import { Partners } from '@/components/ssv/partners'
import { Portfolio } from '@/components/ssv/portfolio'
import { Testimonials } from '@/components/ssv/testimonials'
import { Contact } from '@/components/ssv/contact'
import { Footer } from '@/components/ssv/footer'
import { WhatsAppButton } from '@/components/ssv/whatsapp-button'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F172A]">
      <Header />
      <Hero />
      <Partners />
      <About />
      <Workflow />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
