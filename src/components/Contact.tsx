import { profile } from '../data/profile'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Contact</h2>
      <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-400">
        Open to new opportunities — reach out directly or find me on GitHub and LinkedIn.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
        >
          {profile.email}
        </a>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500"
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
