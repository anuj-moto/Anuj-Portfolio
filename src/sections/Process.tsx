import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'

const steps = [
  {
    number: '01',
    title: 'Research & Discovery',
    description:
      'I use AI to synthesize user interviews, competitor analysis, and market data in hours instead of weeks. Pattern recognition at scale, guided by human intuition.',
    tools: ['User Interviews', 'AI Synthesis', 'Competitive Audit'],
    accent: '#6C5CE7',
  },
  {
    number: '02',
    title: 'Strategy & Architecture',
    description:
      'Information architecture and user flows shaped by data-driven insights. I map out every interaction before touching a pixel.',
    tools: ['User Flows', 'IA Mapping', 'Jobs-to-be-Done'],
    accent: '#A29BFE',
  },
  {
    number: '03',
    title: 'AI-Assisted Design',
    description:
      'Rapid exploration through generative design tools. I generate dozens of directions, then curate and refine with craft. AI proposes, I dispose.',
    tools: ['Figma', 'Generative UI', 'Design Systems'],
    accent: '#6C5CE7',
  },
  {
    number: '04',
    title: 'Prototype & Validate',
    description:
      'Interactive prototypes tested with real users. AI helps analyze session recordings and surface usability issues I might miss.',
    tools: ['Prototyping', 'Usability Testing', 'AI Analytics'],
    accent: '#A29BFE',
  },
  {
    number: '05',
    title: 'Ship & Iterate',
    description:
      'Close collaboration with engineering. I stay involved through launch and use AI-powered monitoring to catch UX regressions early.',
    tools: ['Dev Handoff', 'QA Review', 'UX Monitoring'],
    accent: '#6C5CE7',
  },
]

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 px-6 bg-surface-raised">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Process"
          title="AI-integrated workflow"
          description="Every phase of my design process is augmented by AI — not to replace thinking, but to amplify it."
        />

        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-surface border border-surface-border rounded-2xl p-6 md:p-8 hover:border-accent/30 transition-colors duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                {/* Number */}
                <span
                  className="text-4xl font-bold font-display opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                  style={{ color: step.accent }}
                >
                  {step.number}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text-bright mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-3 py-1 rounded-full border border-surface-border text-text-muted"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
