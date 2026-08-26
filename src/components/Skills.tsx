import { skills } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-2xl px-6 py-24 sm:px-12">
      <h2 className="text-sm text-black/40">Skills</h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-xs tracking-wide text-black/40 uppercase">{group.category}</h3>
            <p className="mt-2 text-sm text-black/60">{group.items.join(' · ')}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
