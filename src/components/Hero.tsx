import { profile } from '../data/profile'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
      <p className="text-sm font-medium tracking-wide text-indigo-600 uppercase dark:text-indigo-400">
        {profile.title} &middot; {profile.subtitle}
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
        {profile.name}
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
        {profile.tagline}
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
        >
          GitHub
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
