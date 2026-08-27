import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { App } from '../data/apps'
import { apps } from '../data/apps'
import { profile } from '../data/profile'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { DeviceMockup } from './DeviceMockup'
import { MySignifyAppScreen } from './MySignifyAppScreen'
import { OopsAppScreen } from './OopsAppScreen'
import { SignifyAppScreen } from './SignifyAppScreen'
import { GitHubIcon, LinkedInIcon } from './SocialIcons'

const SECTION_LINKS = [
  { href: '#companies', label: 'Companies' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

function IntroPanel() {
  return (
    <div id="top">
      <h1 className="text-4xl font-light tracking-tight sm:text-5xl">{profile.name}</h1>
      <p className="mt-1 text-sm text-black/40 sm:text-base">{profile.title}</p>
      <nav className="mt-6 flex flex-col gap-1 text-sm">
        {SECTION_LINKS.map((link) => (
          <a key={link.label} href={link.href} className="w-fit text-black/40 transition-colors hover:text-black">
            {link.label}
          </a>
        ))}
      </nav>
      <div className="mt-4 flex items-center gap-4">
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-black/40 transition-colors hover:text-black"
        >
          <GitHubIcon className="h-5 w-5" />
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-black/40 transition-colors hover:text-black"
        >
          <LinkedInIcon className="h-5 w-5" />
        </a>
      </div>
    </div>
  )
}

function AppInfo({ app }: { app: App }) {
  return (
    <div>
      <p className="text-sm text-black/40">
        {app.role} &middot; {app.dates}
      </p>
      <h2 className="mt-2 text-3xl font-light sm:text-4xl">{app.company}</h2>
      <p className="mt-4 text-black/60">{app.description}</p>
      {app.stats && (
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
          {app.stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-light text-black sm:text-3xl">{stat.value}</div>
              <div className="mt-1 max-w-28 text-xs text-black/40">{stat.label}</div>
            </div>
          ))}
        </div>
      )}
      <p className="mt-6 text-sm text-black/40">{app.tech.join(' · ')}</p>
    </div>
  )
}

function AppShowcase({ app }: { app: App }) {
  if (app.image) {
    return <img src={app.image} alt={app.company} className="max-h-full max-w-full object-contain" />
  }
  if (app.company.includes('Signify')) {
    return (
      <>
        <DeviceMockup device="ipad" className="h-[min(94cqh,86cqw)] w-auto">
          <SignifyAppScreen />
        </DeviceMockup>
        <DeviceMockup device="iphone" className="h-[min(62cqh,57cqw)] w-auto">
          <MySignifyAppScreen />
        </DeviceMockup>
      </>
    )
  }
  return (
    <DeviceMockup device={app.device} className="h-[min(92cqh,195cqw)] w-auto">
      {app.company === 'Oops' ? <OopsAppScreen /> : null}
    </DeviceMockup>
  )
}

export function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: trackRef })
  const x = useTransform(scrollYProgress, [0, 1], ['0vw', `-${(apps.length - 1) * 100}vw`])
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  // Mobile / tablet: a simple vertical stack — no scroll-jacking, no horizontal overflow.
  if (!isDesktop) {
    return (
      <section>
        <div className="px-6 pt-16 pb-10 sm:px-10 sm:pt-20">
          <IntroPanel />
        </div>
        {apps.map((app) => (
          <div key={app.company} className="border-t border-black/5 px-6 py-12 sm:px-10">
            <AppInfo app={app} />
            <div className="mt-10 flex h-[56vh] max-h-[560px] items-end justify-center gap-[4%] [container-type:size]">
              <AppShowcase app={app} />
            </div>
          </div>
        ))}
      </section>
    )
  }

  // Desktop: pinned intro with a horizontal, scroll-linked filmstrip of app slides.
  return (
    <section ref={trackRef} style={{ height: `${apps.length * 100}vh` }} className="relative">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="shrink-0 px-12 pt-14">
          <IntroPanel />
        </div>

        <div className="relative min-h-0 flex-1 overflow-hidden">
          <motion.div style={{ x }} className="flex h-full items-center">
            {apps.map((app) => (
              <div key={app.company} className="flex h-full w-screen shrink-0 items-center gap-10 px-16 xl:px-24">
                <div className="max-w-lg shrink-0">
                  <AppInfo app={app} />
                </div>
                <div className="flex h-[85%] min-w-0 flex-1 items-end justify-center gap-[3%] overflow-hidden [container-type:size]">
                  <AppShowcase app={app} />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
