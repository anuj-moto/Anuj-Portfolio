import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { SectionHeading } from '../components/SectionHeading'
import { Parallax } from '@/components/Parallax'

gsap.registerPlugin(ScrollTrigger)

const timeline = [
  {
    year: '2022',
    role: 'Junior Product Designer',
    company: 'Startup Studio',
    description:
      'Cut my teeth designing MVPs for early-stage products. Learned to ship fast without sacrificing craft.',
  },
  {
    year: '2023',
    role: 'Product Designer',
    company: 'DesignScale',
    description:
      'Led the redesign of a B2B analytics platform serving 50k+ users. Built and maintained the design system.',
  },
  {
    year: '2024',
    role: 'Senior Product Designer',
    company: 'AI Nexus',
    description:
      'Pioneered AI-integrated design workflows. Shipped conversational interfaces and generative design tools.',
  },
  {
    year: '2025',
    role: 'Lead Product Designer',
    company: 'Independent',
    description:
      'Working with startups building AI-native products. Focused on making complex systems feel intuitive.',
  },
]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (progressRef.current && timelineRef.current) {
        gsap.fromTo(
          progressRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 75%',
              end: 'bottom 70%',
              scrub: true,
            },
          }
        )
      }

      const items = sectionRef.current?.querySelectorAll('.timeline-item')
      if (items) {
        gsap.from(items, {
          opacity: 0,
          y: 24,
          stagger: 0.12,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: timelineRef.current, start: 'top 80%' },
        })
      }
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 md:py-44 px-6 border-t border-[#242424]"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="01"
          label="About"
          title="Quiet interfaces. Honest systems."
          description="For the past four years I've been making AI-powered products feel less like software and more like a calm conversation with something that listens."
        />

        <div className="grid md:grid-cols-[1fr_2fr] gap-16 mt-24">
          <Parallax speed="slow">
            <div className="sticky top-32">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#5A5A5A] mb-4">
                Trajectory
              </p>
              <p className="font-display text-2xl text-[#F5F5F5] leading-snug">
                Four years.<br />
                Four chapters.<br />
                <span className="text-[#5A5A5A]">One direction.</span>
              </p>
            </div>
          </Parallax>

          <div ref={timelineRef} className="relative">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-[#242424]" />
            <div
              ref={progressRef}
              className="absolute left-0 top-2 bottom-2 w-px bg-[#F5F5F5] origin-top"
            />

            {timeline.map((item) => (
              <div
                key={item.year}
                className="timeline-item relative pl-10 pb-16 last:pb-0"
              >
                <div className="absolute left-[-3px] top-2 w-[7px] h-[7px] rounded-full bg-[#F5F5F5]" />
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-mono text-xs text-[#5A5A5A]">
                    {item.year}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A]">
                    {item.company}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-[#F5F5F5] mb-3 font-medium">
                  {item.role}
                </h3>
                <p className="text-[#8A8A8A] leading-relaxed max-w-md">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
