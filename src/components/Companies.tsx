import { companies } from '../data/companies'

export function Companies() {
  return (
    <section id="companies" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Where I've Worked</h2>
      <div className="mt-8 space-y-6">
        {companies.map((entry) => (
          <div
            key={entry.company}
            className="flex flex-col justify-between gap-1 border-b border-slate-200 pb-6 last:border-0 sm:flex-row sm:items-baseline sm:gap-4 dark:border-slate-800"
          >
            <div>
              <h3 className="font-medium text-slate-900 dark:text-white">
                {entry.role} &middot; {entry.company}
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{entry.blurb}</p>
            </div>
            <span className="shrink-0 text-sm text-slate-500 dark:text-slate-500">{entry.dates}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
