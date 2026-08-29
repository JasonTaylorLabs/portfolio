import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { App } from '../data/apps'
import { apps } from '../data/apps'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { DeviceMockup } from './DeviceMockup'
import { CvsHealthLogo, MySignifyLogoScreen, OopsLogoScreen, SignifyLogoScreen } from './LogoScreens'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const pad = (n: number) => String(n).padStart(2, '0')

function AppInfo({ app }: { app: App }) {
  return (
    <div>
      <p className="font-mono text-[11px] tracking-[0.25em] text-accent/90 uppercase">
        {app.role} · {app.dates}
      </p>
      <h3 className="mt-4 font-display text-4xl leading-tight xl:text-5xl">{app.company}</h3>
      <p className="mt-5 max-w-prose text-sm leading-relaxed text-cream/60 sm:text-base">
        {app.description}
      </p>
      {app.stats && (
        <div className="mt-8 flex flex-wrap gap-x-10 gap-y-5">
          {app.stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl text-cream sm:text-4xl">{stat.value}</div>
              <div className="mt-1.5 max-w-28 font-mono text-[10px] leading-relaxed tracking-wide text-cream/40 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}
      <p className="mt-8 font-mono text-[11px] leading-relaxed tracking-wide text-cream/35">
        {app.tech.join(' · ')}
      </p>
    </div>
  )
}

function AppShowcase({ app }: { app: App }) {
  if (app.image) {
    return <img src={app.image} alt={app.company} className="max-h-full max-w-full object-contain" />
  }
  if (app.company.includes('Signify')) {
    return (
      <div className="flex h-full flex-col items-center justify-end gap-[6cqh]">
        <div className="flex min-h-0 flex-1 items-end justify-center gap-[3cqw]">
          <DeviceMockup device="ipad" className="h-[min(80cqh,74cqw)] w-auto">
            <SignifyLogoScreen />
          </DeviceMockup>
          <DeviceMockup device="iphone" className="h-[min(52cqh,47cqw)] w-auto">
            <MySignifyLogoScreen />
          </DeviceMockup>
        </div>
        <CvsHealthLogo className="w-[min(40cqw,330px)] shrink-0" />
      </div>
    )
  }
  return (
    <DeviceMockup device={app.device} className="h-[min(92cqh,195cqw)] w-auto">
      {app.company === 'Oops' ? <OopsLogoScreen /> : null}
    </DeviceMockup>
  )
}

/** Soft neutral pool that grounds the devices on the page. */
function StageGlow() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-[10%] top-[45%] bottom-[-12%] rounded-[50%] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,0,0,0.06),transparent_70%)] blur-2xl"
    />
  )
}

export function Gallery() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  // Mobile / tablet: a simple vertical stack — no scroll-jacking, no horizontal overflow.
  if (!isDesktop) {
    return (
      <section id="work">
        <div className="px-6 pt-20 sm:px-10">
          <Reveal>
            <SectionHeading label="Selected Work" />
          </Reveal>
        </div>
        {apps.map((app, index) => (
          <div
            key={app.company}
            className={`px-6 py-14 sm:px-10 ${index > 0 ? 'border-t border-cream/[0.06]' : ''}`}
          >
            <Reveal>
              <AppInfo app={app} />
            </Reveal>
            <div className="relative mt-10 flex h-[56vh] max-h-[560px] items-end justify-center gap-[4%] [container-type:size]">
              <StageGlow />
              <AppShowcase app={app} />
            </div>
          </div>
        ))}
      </section>
    )
  }

  // Desktop: pinned, horizontal, scroll-linked filmstrip of app slides.
  return <DesktopFilmstrip />
}

/**
 * Rendered only at >=1024px so useScroll initializes with its target ref attached
 * (mounting it conditionally inside Gallery would leave the scroll tracking stuck at 0
 * when the page first renders below the breakpoint).
 */
function DesktopFilmstrip() {
  const trackRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: trackRef })
  const x = useTransform(scrollYProgress, [0, 1], ['0vw', `-${(apps.length - 1) * 100}vw`])
  const slideLabel = useTransform(scrollYProgress, (v) =>
    pad(Math.min(apps.length, Math.round(v * (apps.length - 1)) + 1)),
  )

  return (
    <section id="work" ref={trackRef} style={{ height: `${apps.length * 100}vh` }} className="relative">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        {/* Header row: label, progress hairline, slide counter */}
        <div className="flex shrink-0 items-center gap-6 px-10 pt-10 xl:px-16">
          <h2 className="shrink-0 font-mono text-[11px] font-medium tracking-[0.25em] text-cream/40 uppercase">
            Selected Work
          </h2>
          <div className="h-px flex-1 bg-cream/[0.08]">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-full origin-left bg-accent/70"
            />
          </div>
          <span className="shrink-0 font-mono text-[11px] tracking-[0.2em] text-cream/40 tabular-nums">
            <motion.span>{slideLabel}</motion.span>
            <span aria-hidden="true"> / {pad(apps.length)}</span>
          </span>
        </div>

        <div className="relative min-h-0 flex-1 overflow-hidden">
          <motion.div style={{ x }} className="flex h-full items-center">
            {apps.map((app) => (
              <div
                key={app.company}
                className="flex h-full w-screen shrink-0 items-center gap-10 px-16 xl:px-24"
              >
                <div className="max-w-lg shrink-0">
                  <AppInfo app={app} />
                </div>
                <div className="relative flex h-[85%] min-w-0 flex-1 items-end justify-center gap-[3%] overflow-hidden [container-type:size]">
                  <StageGlow />
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
