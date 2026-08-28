import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { profile } from '../data/profile'
import { HeroScene } from './HeroScene'
import { GitHubIcon, LinkedInIcon } from './SocialIcons'

const NAV_LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#companies', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export function Hero() {
  const rootRef = useRef<HTMLElement>(null)
  const [firstName, ...restName] = profile.name.split(' ')
  const lastName = restName.join(' ')

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let safety: number | undefined
    const ctx = gsap.context(() => {
      const intro = gsap.from('[data-hero-fade]', {
        autoAlpha: 0,
        y: 28,
        duration: 1.1,
        ease: 'power3.out',
        stagger: 0.1,
        delay: 0.2,
        onComplete: () => window.clearTimeout(safety),
      })
      gsap.to('[data-scroll-cue]', {
        y: 8,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: 'sine.inOut',
      })
      // Safety net: setTimeout still fires when requestAnimationFrame is throttled
      // (background tab, suspended compositor), so the hero can never stay hidden —
      // force the entrance to its end state if it hasn't finished on its own.
      safety = window.setTimeout(() => intro.progress(1), 1600)
    }, root)

    return () => {
      window.clearTimeout(safety)
      ctx.revert()
    }
  }, [])

  return (
    <header id="top" ref={rootRef} className="relative flex min-h-svh flex-col overflow-hidden">
      {/* Lazy three.js particle field, faded into the page at the bottom edge */}
      <div aria-hidden="true" className="absolute inset-0">
        <HeroScene />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col px-6 sm:px-10 xl:px-16">
        {/* Top bar */}
        <div data-hero-fade className="flex items-center justify-between pt-8">
          <a
            href="#top"
            className="font-mono text-xs tracking-[0.25em] text-cream/70 uppercase transition-colors hover:text-cream"
          >
            {profile.name}
          </a>
          <nav aria-label="Primary" className="hidden items-center gap-8 sm:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] tracking-[0.2em] text-cream/45 uppercase transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-5">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-cream/50 transition-colors hover:text-cream"
            >
              <GitHubIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-cream/50 transition-colors hover:text-cream"
            >
              <LinkedInIcon className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        {/* Center statement */}
        <div className="flex flex-1 flex-col justify-center py-16">
          <p
            data-hero-fade
            className="font-mono text-[11px] tracking-[0.3em] text-accent uppercase sm:text-xs"
          >
            {profile.title}
          </p>
          <h1
            data-hero-fade
            className="mt-6 font-display text-[clamp(3.75rem,11vw,9.5rem)] leading-[0.95] tracking-tight"
          >
            {firstName}
            <span className="block italic">
              {lastName}
              <span className="text-accent">.</span>
            </span>
          </h1>
          <p
            data-hero-fade
            className="mt-8 max-w-xl text-sm leading-relaxed text-cream/55 sm:text-base"
          >
            {profile.tagline}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex items-end justify-between pb-9">
          <div
            data-hero-fade
            className="flex items-center gap-4 font-mono text-[10px] tracking-[0.3em] text-cream/40 uppercase"
          >
            <span
              data-scroll-cue
              aria-hidden="true"
              className="block h-9 w-px bg-gradient-to-b from-cream/60 to-transparent"
            />
            Scroll
          </div>
          <a
            data-hero-fade
            href={`mailto:${profile.email}`}
            className="hidden font-mono text-[11px] tracking-[0.15em] text-cream/45 transition-colors hover:text-cream sm:block"
          >
            {profile.email}
          </a>
        </div>
      </div>
    </header>
  )
}
