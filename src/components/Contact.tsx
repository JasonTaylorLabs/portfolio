import { profile } from '../data/profile'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { LinkedInIcon, MailIcon } from './SocialIcons'

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_100%,rgba(138,147,255,0.10),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-4xl px-6 py-32 sm:px-10">
        <Reveal>
          <SectionHeading label="Contact" />
        </Reveal>
        <Reveal delay={0.08}>
          <h3 className="mt-10 font-display text-5xl leading-[1.05] tracking-tight sm:text-7xl">
            Let&rsquo;s build something{' '}
            <em className="italic">
              great<span className="text-accent">.</span>
            </em>
          </h3>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/55 sm:text-base">
            Reach out directly or find me on LinkedIn.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="flex w-fit items-center gap-2.5 rounded-full bg-cream px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:bg-accent"
            >
              <MailIcon className="h-4 w-4" />
              {profile.email}
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex w-fit items-center gap-2.5 rounded-full border border-cream/20 px-5 py-2.5 text-sm text-cream/80 transition-colors duration-200 hover:border-cream/60 hover:text-cream"
            >
              <LinkedInIcon className="h-4 w-4" />
              Message me on LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
