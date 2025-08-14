import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Stats from '../sections/Stats'
import Services from '../sections/Services'
import Features from '../sections/Features'
import HighConverting from '../sections/HighConverting'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Services />
        <Features />
        <HighConverting />
      </main>
      <Footer />
    </div>
  )
}


