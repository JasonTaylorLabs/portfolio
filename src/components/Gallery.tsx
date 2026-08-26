import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { profile } from '../data/profile'
import { projects } from '../data/projects'

const NAV_LINKS = [
  { href: '#companies', label: 'Companies' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
  { href: profile.links.github, label: 'GitHub', external: true },
  { href: profile.links.linkedin, label: 'LinkedIn', external: true },
]

export function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: trackRef })
  const x = useTransform(scrollYProgress, [0, 1], ['0vw', `-${(projects.length - 1) * 100}vw`])

  return (
    <section ref={trackRef} style={{ height: `${projects.length * 100}vh` }} className="relative">
      <div id="top" className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute top-10 left-6 z-10 sm:top-14 sm:left-12">
          <h1 className="text-3xl font-light tracking-tight sm:text-5xl">{profile.name}</h1>
          <p className="mt-1 text-sm text-black/40 sm:text-base">{profile.title}</p>
          <nav className="mt-6 flex flex-col gap-1 text-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                className="w-fit text-black/40 transition-colors hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <motion.div style={{ x }} className="flex h-full items-center">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex h-full w-screen shrink-0 flex-col justify-center gap-4 px-6 sm:px-16 lg:px-24"
            >
              <div className="max-w-xl">
                <p className="text-sm text-black/40">
                  {project.role} &middot; {project.company} &middot; {project.year}
                </p>
                <h2 className="mt-2 text-2xl font-light sm:text-4xl">{project.title}</h2>
                <p className="mt-4 text-black/60">{project.description}</p>
                <p className="mt-4 text-sm text-black/40">{project.tech.join(' · ')}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
