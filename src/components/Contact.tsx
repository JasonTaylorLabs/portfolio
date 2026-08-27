import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon } from './SocialIcons'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-24 sm:px-12">
      <h2 className="text-sm text-black/40">Contact</h2>
      <p className="mt-4 max-w-md text-black/60">
        Reach out directly or find me on GitHub and LinkedIn.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-6 block w-fit text-sm text-black transition-colors hover:text-black/60"
      >
        {profile.email}
      </a>
      <div className="mt-4 flex items-center gap-4">
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-black/40 transition-colors hover:text-black"
        >
          <GitHubIcon className="h-5 w-5" />
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-black/40 transition-colors hover:text-black"
        >
          <LinkedInIcon className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}
