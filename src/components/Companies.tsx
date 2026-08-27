import { companies } from '../data/companies'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Companies() {
  return (
    <section id="companies" className="mx-auto max-w-4xl px-6 py-28 sm:px-10">
      <Reveal>
        <SectionHeading label="Experience" />
      </Reveal>
      <div className="mt-12">
        {companies.map((entry, index) => (
          <Reveal key={`${entry.company}-${entry.role}`} delay={index * 0.06}>
            <div className="grid gap-2 border-t border-cream/[0.08] py-8 sm:grid-cols-[11rem_1fr] sm:gap-8">
              <p className="pt-1 font-mono text-xs tracking-wide text-cream/40 tabular-nums">
                {entry.dates}
              </p>
              <div>
                <h3 className="text-xl font-light text-cream">{entry.company}</h3>
                <p className="mt-1.5 font-mono text-[11px] tracking-[0.2em] text-accent/85 uppercase">
                  {entry.role}
                </p>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-cream/55">{entry.blurb}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
