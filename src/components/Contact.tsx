import { profile } from '../data/profile'
import { LinkedInIcon, MailIcon } from './SocialIcons'

const buttonClasses =
  'flex w-fit items-center gap-2 rounded-full border border-black/15 px-4 py-2 text-sm text-black transition-colors hover:border-black/40'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-24 sm:px-12">
      <h2 className="text-sm text-black/40">Contact</h2>
      <p className="mt-4 max-w-md text-black/60">Reach out directly or find me on LinkedIn.</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a href={`mailto:${profile.email}`} className={buttonClasses}>
          <MailIcon className="h-4 w-4" />
          Email me at {profile.email}
        </a>
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className={buttonClasses}>
          <LinkedInIcon className="h-4 w-4" />
          Message me on LinkedIn
        </a>
      </div>
    </section>
  )
}
