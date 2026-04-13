import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { SectionHeading } from '../components/SectionHeading'

gsap.registerPlugin(ScrollTrigger)

const skillGroups = [
  {
    category: 'Design',
    skills: [
      'Figma',
      'Prototyping',
      'Design Systems',
      'Visual Design',
      'Interaction',
      'Motion',
    ],
  },
  {
    category: 'Research',
    skills: [
      'User Research',
      'Usability Testing',
      'A/B Testing',
      'Data Analysis',
      'JTBD',
      'Facilitation',
    ],
  },
  {
    category: 'AI & Tech',
    skills: [
      'Prompt Engineering',
      'AI Product Design',
      'Conversational UI',
      'Generative Tools',
      'Python basics',
      'HTML / CSS',
    ],
  },
  {
    category: 'Tools',
    skills: ['Framer', 'Principle', 'Notion', 'Linear', 'Miro', 'Arc'],
  },
]

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const rows = sectionRef.current?.querySelectorAll('.skill-row')
      if (rows) {
        gsap.from(rows, {
          opacity: 0,
          y: 30,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current?.querySelector('.skill-list'),
            start: 'top 80%',
          },
        })
      }

      const tags = sectionRef.current?.querySelectorAll('.skill-tag')
      if (tags) {
        gsap.from(tags, {
          opacity: 0,
          y: 10,
          stagger: 0.02,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current?.querySelector('.skill-list'),
            start: 'top 75%',
          },
        })
      }
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-32 md:py-44 px-6 border-t border-[#242424]"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="04"
          label="Capabilities"
          title="Craft on one hand. Fluency on the other."
          description="I speak both languages — the designer's and the engineer's — and use that overlap to ship faster with fewer surprises."
        />

        <div className="skill-list mt-24 divide-y divide-[#242424] border-t border-b border-[#242424]">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="skill-row grid md:grid-cols-[240px_1fr] gap-6 md:gap-16 py-10 items-start"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#5A5A5A] mb-2">
                  Stack
                </p>
                <h3 className="font-display text-2xl text-[#F5F5F5] font-medium">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag inline-flex items-center px-4 py-2 rounded-full border border-[#242424] text-[#F5F5F5] text-sm hover:border-[#F5F5F5] transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
