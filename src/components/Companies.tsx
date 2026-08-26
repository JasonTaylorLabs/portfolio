import { companies } from '../data/companies'

export function Companies() {
  return (
    <section id="companies" className="mx-auto max-w-2xl px-6 py-24 sm:px-12">
      <h2 className="text-sm text-black/40">Where I've Worked</h2>
      <div className="mt-8 space-y-10">
        {companies.map((entry) => (
          <div key={entry.company} className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline sm:gap-4">
            <div>
              <h3 className="font-light">
                {entry.role} &middot; {entry.company}
              </h3>
              <p className="mt-1 text-sm text-black/60">{entry.blurb}</p>
            </div>
            <span className="shrink-0 text-sm text-black/40">{entry.dates}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
