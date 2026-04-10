import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'

interface Project {
  title: string
  category: string
  description: string
  details: string
  tags: string[]
  image: string
  year: string
}

const projects: Project[] = [
  {
    title: 'Aether Analytics',
    category: 'AI Dashboard',
    description: 'A real-time analytics platform that uses natural language queries to surface business insights without SQL.',
    details:
      'Designed the full product from 0→1. Built a conversational query interface that lets non-technical users ask questions like "why did churn spike last Tuesday?" and get visual answers in seconds. Reduced time-to-insight by 80% compared to the legacy BI tool.',
    tags: ['Product Design', 'AI/NLP', 'Data Visualization', 'Design System'],
    image: 'https://picsum.photos/seed/aether/800/500',
    year: '2025',
  },
  {
    title: 'Forma Design System',
    category: 'Design System',
    description: 'A component library and design token system serving 12 product teams across a growing SaaS platform.',
    details:
      'Audited 400+ inconsistent components across 6 products, consolidated into 85 flexible primitives. Established a token architecture supporting light/dark themes and white-label customization. Adoption hit 94% within two quarters.',
    tags: ['Design Systems', 'Tokens', 'Documentation', 'Figma'],
    image: 'https://picsum.photos/seed/forma/800/500',
    year: '2024',
  },
  {
    title: 'Muse Generative Studio',
    category: 'Creative Tool',
    description: 'A generative design tool that lets creators produce brand assets using text prompts and style references.',
    details:
      'Designed the interaction model for a prompt-to-design pipeline. Key challenge: making generative AI feel controllable, not random. Introduced "style anchors" — a UI pattern that lets users lock specific attributes while exploring variations.',
    tags: ['Generative AI', 'Creative Tools', 'Interaction Design'],
    image: 'https://picsum.photos/seed/muse/800/500',
    year: '2024',
  },
  {
    title: 'Pulse Health',
    category: 'Health Tech',
    description: 'A patient monitoring app that uses AI to predict health events and alert caregivers proactively.',
    details:
      'Redesigned the caregiver dashboard to surface AI predictions alongside real-time vitals. The key design challenge was communicating probabilistic risk (e.g., "72% chance of a fall in the next 48 hours") without causing alarm fatigue.',
    tags: ['Health Tech', 'AI Predictions', 'Accessibility', 'Mobile'],
    image: 'https://picsum.photos/seed/pulse/800/500',
    year: '2023',
  },
  {
    title: 'Nexus Onboarding',
    category: 'Enterprise SaaS',
    description: 'Reimagined the onboarding flow for an enterprise collaboration tool, cutting drop-off by 45%.',
    details:
      'Replaced a 14-step wizard with a progressive disclosure model. Users start working immediately and discover features contextually. Integrated an AI assistant that answers setup questions in natural language instead of linking to docs.',
    tags: ['Enterprise UX', 'Onboarding', 'AI Assistant', 'A/B Testing'],
    image: 'https://picsum.photos/seed/nexus/800/500',
    year: '2023',
  },
]

function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: Project
  index: number
  onSelect: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onSelect}
      className="group cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        whileHover={{ rotateY: -3, rotateX: 2, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="bg-surface-raised border border-surface-border rounded-2xl overflow-hidden hover:border-accent/30 transition-colors duration-500"
      >
        <div className="aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} — ${project.category}`}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-accent text-xs font-medium tracking-wider uppercase">
              {project.category}
            </span>
            <span className="text-text-muted text-xs">{project.year}</span>
          </div>
          <h3 className="text-lg font-semibold text-text-bright mb-2">
            {project.title}
          </h3>
          <p className="text-text-muted text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-surface-raised border border-surface-border rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
      >
        <div className="aspect-video overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={`${project.title} — ${project.category}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-accent text-xs font-medium tracking-wider uppercase">
              {project.category}
            </span>
            <span className="text-text-muted text-xs">{project.year}</span>
          </div>
          <h3 className="text-2xl font-bold text-text-bright mb-4">
            {project.title}
          </h3>
          <p className="text-text leading-relaxed mb-6">{project.details}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full bg-accent/10 text-accent-glow border border-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>
          <button
            onClick={onClose}
            className="mt-8 w-full py-3 border border-surface-border text-text-muted hover:text-text-bright hover:border-accent rounded-lg transition-colors duration-300 cursor-pointer"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Work() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="work" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Work"
          title="Selected projects"
          description="A mix of AI-native products, design systems, and complex enterprise tools."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onSelect={() => setSelected(project)}
            />
          ))}
        </div>

        <AnimatePresence>
          {selected && (
            <ProjectModal
              project={selected}
              onClose={() => setSelected(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
