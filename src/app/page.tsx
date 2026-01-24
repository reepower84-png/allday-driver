import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Franchise from '@/components/Franchise'
import WhyUs from '@/components/WhyUs'
import Recruitment from '@/components/Recruitment'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Recruitment />
      <Franchise />
      <ContactForm />
      <Footer />
    </main>
  )
}
