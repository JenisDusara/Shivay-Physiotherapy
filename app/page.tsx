import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Doctors from '@/components/Doctors'
import Testimonials from '@/components/Testimonials'
import AppointmentSection from '@/components/AppointmentSection'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Doctors />
      <Testimonials />
      <AppointmentSection />
      <Contact />
      <Footer />
    </main>
  )
}
