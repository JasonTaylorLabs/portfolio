import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-cream/[0.08]">
      <div className="mx-auto flex max-w-4xl flex-col justify-between gap-3 px-6 py-10 font-mono text-[11px] tracking-[0.15em] text-cream/40 sm:flex-row sm:items-baseline sm:px-10">
        <span>
          &copy; {new Date().getFullYear()} {profile.name}
        </span>
        <div className="flex items-baseline gap-6">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-cream"
          >
            GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-cream"
          >
            LinkedIn
          </a>
          <a href="#top" className="transition-colors hover:text-cream">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
