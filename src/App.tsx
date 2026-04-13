import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AmbientBackground } from './components/AmbientBackground'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { Brands } from './sections/Brands'
import { About } from './sections/About'
import { Process } from './sections/Process'
import { Work } from './sections/Work'
import { Skills } from './sections/Skills'
import { Contact } from './sections/Contact'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  return (
    <div className="relative bg-[var(--color-bg)] text-[var(--color-text)]">
      <AmbientBackground />
      <Navbar />
      <main className="relative" style={{ zIndex: 1 }}>
        <Hero />
        <Brands />
        <About />
        <Process />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
