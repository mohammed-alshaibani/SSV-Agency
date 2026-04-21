import { Header } from '@/components/ssv/header'
import { Hero } from '@/components/ssv/hero'
import { About } from '@/components/ssv/about'
import { Services } from '@/components/ssv/services'
import { Partners } from '@/components/ssv/partners'
import { Portfolio } from '@/components/ssv/portfolio'
import { Blog } from '@/components/ssv/blog'
import { FAQ } from '@/components/ssv/faq'
import { Contact } from '@/components/ssv/contact'
import { Footer } from '@/components/ssv/footer'
import { Testimonials } from '@/components/ssv/testimonials'
import { WhatsAppButton } from '@/components/ssv/whatsapp-button'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Partners />
      <Testimonials />
      <Services />
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
