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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Partners />
      <Portfolio />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
