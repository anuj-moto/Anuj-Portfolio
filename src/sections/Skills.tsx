import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'

const skillGroups = [
  {
    category: 'Design',
    skills: ['Figma', 'Prototyping', 'Design Systems', 'Visual Design', 'Interaction Design', 'Motion Design'],
  },
  {
    category: 'Research & Strategy',
    skills: ['User Research', 'Usability Testing', 'A/B Testing', 'Data Analysis', 'Jobs-to-be-Done', 'Workshop Facilitation'],
  },
  {
    category: 'AI & Tech',
    skills: ['Prompt Engineering', 'AI Product Design', 'Conversational UI', 'Generative AI Tools', 'Basic Python', 'HTML/CSS'],
  },
  {
    category: 'Tools',
    skills: ['Figma', 'Framer', 'Principle', 'Notion', 'Linear', 'Miro'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-surface-raised">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Skills"
          title="What I bring"
          description="Design craft meets technical fluency. I speak both languages."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="bg-surface border border-surface-border rounded-2xl p-6"
            >
              <h3 className="text-accent text-sm font-medium tracking-wider uppercase mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-4 py-2 rounded-lg bg-surface-raised border border-surface-border text-text hover:text-text-bright hover:border-accent/30 hover:shadow-[0_0_15px_rgba(108,92,231,0.1)] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
