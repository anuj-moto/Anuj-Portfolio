import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'

const timeline = [
  {
    year: '2022',
    role: 'Junior Product Designer',
    company: 'Startup Studio',
    description: 'Cut my teeth designing MVPs for early-stage products. Learned to ship fast without sacrificing craft.',
  },
  {
    year: '2023',
    role: 'Product Designer',
    company: 'DesignScale',
    description: 'Led the redesign of a B2B analytics platform serving 50k+ users. Built and maintained the design system.',
  },
  {
    year: '2024',
    role: 'Senior Product Designer',
    company: 'AI Nexus',
    description: 'Pioneered AI-integrated design workflows. Shipped conversational interfaces and generative design tools.',
  },
  {
    year: '2025',
    role: 'Lead Product Designer',
    company: 'Independent',
    description: 'Working with startups building AI-native products. Focused on making complex systems feel intuitive.',
  },
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="About"
          title="Designing at the edge of AI"
          description="I'm a product designer who believes the best interfaces disappear. For the past four years, I've been figuring out how to make AI-powered products feel less like software and more like conversation."
        />

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-surface-border" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-start mb-12 last:mb-0 ${
                index % 2 === 0
                  ? 'md:flex-row md:text-right'
                  : 'md:flex-row-reverse md:text-left'
              } flex-row text-left`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1/2 mt-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(108,92,231,0.5)]" />

              {/* Content */}
              <div
                className={`pl-10 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-12 md:w-1/2' : 'md:pl-12 md:w-1/2 md:ml-auto'
                } w-full`}
              >
                <span className="text-accent text-sm font-medium">{item.year}</span>
                <h3 className="text-text-bright font-semibold mt-1">{item.role}</h3>
                <p className="text-accent-glow text-sm">{item.company}</p>
                <p className="text-text-muted text-sm mt-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
