import { Header } from '@/components/ssv/header'
import { Hero } from '@/components/ssv/hero'
import { InfiniteScrollingLogos } from '@/components/ssv/infinite-scrolling-logos'
import { About } from '@/components/ssv/about'
import { Services } from '@/components/ssv/services'
import { Portfolio } from '@/components/ssv/portfolio'
import { Blog } from '@/components/ssv/blog'
import { FAQ } from '@/components/ssv/faq'
import { Contact } from '@/components/ssv/contact'
import { Footer } from '@/components/ssv/footer'
import { Testimonials } from '@/components/ssv/testimonials'
import { WhatsAppButton } from '@/components/ssv/whatsapp-button'
import { Workflow } from '@/components/ssv/workflow'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <InfiniteScrollingLogos />
      <Testimonials />
      <Services />
      <Workflow />
      <About />
      <Portfolio />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
