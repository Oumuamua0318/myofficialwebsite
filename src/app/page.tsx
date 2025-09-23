import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import { ServiceSection } from '@/components/service-section'
import { UserVoice } from '@/components/user-voice'
import { ContactSection } from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <ServiceSection />
        <UserVoice />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}