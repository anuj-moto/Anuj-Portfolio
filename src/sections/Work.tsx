import { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { Parallax } from '@/components/Parallax'
import { projects } from '@/data/projects'

gsap.registerPlugin(ScrollTrigger)

export function Work() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const rows = sectionRef.current?.querySelectorAll('.work-row')
      if (rows) {
        gsap.from(rows, {
          opacity: 0,
          y: 40,
          stagger: 0.1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current?.querySelector('.work-list'),
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
      id="work"
      className="relative py-32 md:py-44 px-6 border-t border-[#242424]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <SectionHeading
            index="03"
            label="Selected Work"
            title="Built for calm. Shipped at pace."
          />
          <Parallax speed="fast" className="md:shrink-0">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#5A5A5A] mb-1">
              {String(projects.length).padStart(2, '0')} Projects
            </p>
            <p className="font-mono text-xs text-[#8A8A8A]">2023 — 2025</p>
          </Parallax>
        </div>

        <div className="work-list">
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              to={`/work/${project.slug}`}
              className="work-row group relative grid md:grid-cols-[80px_1fr_1.2fr_auto] items-center gap-6 md:gap-10 py-10 border-t border-[#242424] last:border-b w-full text-left"
            >
              <span className="font-mono text-xs text-[#5A5A5A]">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="min-w-0">
                <h3 className="font-display text-2xl md:text-4xl text-[#F5F5F5] font-medium leading-[1.05] tracking-tight">
                  {project.title}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A] mt-3">
                  {project.category} &nbsp;/&nbsp; {project.year}
                </p>
              </div>

              <p className="hidden md:block text-[#8A8A8A] leading-relaxed max-w-md">
                {project.summary}
              </p>

              <span className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A] group-hover:text-[#F5F5F5] transition-colors">
                Case Study
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>

              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
                <div className="w-48 h-32 overflow-hidden rounded-sm border border-[#242424] grayscale">
                  <img
                    src={project.cover}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
