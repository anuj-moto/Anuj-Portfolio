import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Process } from './sections/Process'
import { Work } from './sections/Work'
import { Skills } from './sections/Skills'
import { Contact } from './sections/Contact'

export default function App() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
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
