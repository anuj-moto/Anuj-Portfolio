import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <SectionHeading
          label="Contact"
          title="Let's build something"
          description="Have a project in mind? I'm always open to discussing product design work or partnership opportunities."
        />

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 bg-surface-raised border border-surface-border rounded-2xl"
          >
            <div className="text-4xl mb-4">&#10003;</div>
            <h3 className="text-xl font-semibold text-text-bright mb-2">
              Message sent
            </h3>
            <p className="text-text-muted">
              I'll get back to you within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm text-text-muted mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-surface-raised border border-surface-border rounded-lg text-text placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-text-muted mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 bg-surface-raised border border-surface-border rounded-lg text-text placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors duration-300"
                />
              </div>
            </div>

            <div>
              <label htmlFor="project" className="block text-sm text-text-muted mb-2">
                Project type
              </label>
              <select
                id="project"
                className="w-full px-4 py-3 bg-surface-raised border border-surface-border rounded-lg text-text focus:outline-none focus:border-accent transition-colors duration-300 cursor-pointer"
              >
                <option value="">Select a project type</option>
                <option value="product-design">Product Design</option>
                <option value="design-system">Design System</option>
                <option value="ai-product">AI Product Design</option>
                <option value="consulting">Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-text-muted mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 bg-surface-raised border border-surface-border rounded-lg text-text placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-accent hover:bg-accent-glow text-text-bright font-medium rounded-lg transition-colors duration-300 cursor-pointer"
            >
              Send Message
            </button>
          </motion.form>
        )}

        {/* Social links */}
        <div className="mt-12 flex justify-center gap-8">
          {[
            { label: 'Dribbble', href: '#' },
            { label: 'LinkedIn', href: '#' },
            { label: 'Twitter', href: '#' },
            { label: 'Email', href: 'mailto:hello@anuj.design' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="text-text-muted text-sm hover:text-accent-glow transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
