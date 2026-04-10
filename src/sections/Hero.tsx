import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'

const AIWorkflowScene = lazy(() =>
  import('../components/AIWorkflowScene').then((m) => ({ default: m.AIWorkflowScene }))
)

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Scene background */}
      <div className="absolute inset-0 z-0">
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
            </div>
          }
        >
          <AIWorkflowScene />
        </Suspense>
      </div>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-surface via-surface/40 to-surface/60" />

      {/* Hero content */}
      <div className="relative z-[2] text-center px-6 max-w-3xl mx-auto pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-accent-glow text-sm font-medium tracking-widest uppercase mb-4"
        >
          Product Designer &middot; 4 Years Experience
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold text-text-bright mb-6 tracking-tight"
        >
          I design products
          <br />
          <span className="text-accent">powered by AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-text-muted max-w-xl mx-auto mb-10"
        >
          Blending human-centered design with intelligent systems to create
          products that think, adapt, and delight.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex gap-4 justify-center"
        >
          <a
            href="#work"
            className="px-6 py-3 bg-accent hover:bg-accent-glow text-text-bright rounded-lg font-medium transition-colors duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-surface-border hover:border-accent text-text rounded-lg font-medium transition-colors duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2]"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-text-muted rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-text-muted rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
