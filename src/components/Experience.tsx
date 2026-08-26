import { experience } from '../data/experience'

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Experience</h2>
      <div className="mt-8 space-y-12">
        {experience.map((entry) => (
          <article key={entry.company} className="border-l-2 border-slate-200 pl-6 dark:border-slate-800">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-medium text-slate-900 dark:text-white">
                {entry.role} &middot; {entry.company}
              </h3>
              <span className="text-sm text-slate-500 dark:text-slate-500">{entry.dates}</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-500">{entry.location}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-400">
              {entry.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {entry.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
