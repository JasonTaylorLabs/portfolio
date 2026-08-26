import { skills } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Skills</h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-medium tracking-wide text-slate-500 uppercase dark:text-slate-500">
              {group.category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-700 dark:border-slate-800 dark:text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
