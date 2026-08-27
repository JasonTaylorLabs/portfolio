import { profile } from '../data/profile'
import { LinkedInIcon } from './SocialIcons'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-24 sm:px-12">
      <h2 className="text-sm text-black/40">Contact</h2>
      <p className="mt-4 max-w-md text-black/60">Reach out directly or find me on LinkedIn.</p>
      <a href={`mailto:${profile.email}`} className="mt-6 block w-fit text-sm text-black transition-colors hover:text-black/60">
        Email me at {profile.email}
      </a>
      <a
        href={profile.links.linkedin}
        target="_blank"
        rel="noreferrer"
        className="mt-4 flex w-fit items-center gap-2 text-sm text-black/40 transition-colors hover:text-black"
      >
        <LinkedInIcon className="h-5 w-5" />
        Message me on LinkedIn
      </a>
    </section>
  )
}
