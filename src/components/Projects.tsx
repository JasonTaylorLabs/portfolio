import { projects } from '../data/projects'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Things I've Built</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-lg border border-slate-200 p-5 dark:border-slate-800"
          >
            <h3 className="font-medium text-slate-900 dark:text-white">{project.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-500">{project.company}</p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
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
