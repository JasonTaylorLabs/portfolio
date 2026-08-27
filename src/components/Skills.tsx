import { skills } from '../data/skills'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-28 sm:px-10">
      <Reveal>
        <SectionHeading label="Skills" />
      </Reveal>
      <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {skills.map((group, index) => (
          <Reveal key={group.category} delay={index * 0.05}>
            <h3 className="font-mono text-[11px] tracking-[0.2em] text-cream/40 uppercase">
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-cream/10 px-3 py-1 text-xs text-cream/70 transition-colors duration-200 hover:border-accent/50 hover:text-cream"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
