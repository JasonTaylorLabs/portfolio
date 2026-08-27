import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { apps } from '../data/apps'
import { profile } from '../data/profile'
import { DeviceMockup } from './DeviceMockup'

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
  const x = useTransform(scrollYProgress, [0, 1], ['0vw', `-${(apps.length - 1) * 100}vw`])

  return (
    <section ref={trackRef} style={{ height: `${apps.length * 100}vh` }} className="relative">
      <div id="top" className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="shrink-0 px-6 pt-10 sm:px-12 sm:pt-14">
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

        <div className="relative min-h-0 flex-1 overflow-hidden">
          <motion.div style={{ x }} className="flex h-full items-center">
            {apps.map((app) => (
              <div
                key={app.company}
                className="flex h-full w-screen shrink-0 items-center gap-10 px-6 sm:px-16 lg:px-24"
              >
                <div className="max-w-lg shrink-0">
                  <p className="text-sm text-black/40">
                    {app.role} &middot; {app.dates}
                  </p>
                  <h2 className="mt-2 text-2xl font-light sm:text-4xl">{app.company}</h2>
                  <p className="mt-4 text-black/60">{app.description}</p>
                  <p className="mt-4 text-sm text-black/40">{app.tech.join(' · ')}</p>
                </div>
                <div className="hidden h-[85%] w-full items-center justify-center sm:flex">
                  {app.image ? (
                    <img src={app.image} alt={app.company} className="h-full w-full object-contain" />
                  ) : (
                    <DeviceMockup device={app.device} className="h-full w-auto" />
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
