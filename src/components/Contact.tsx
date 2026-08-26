import { profile } from '../data/profile'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-24 sm:px-12">
      <h2 className="text-sm text-black/40">Contact</h2>
      <p className="mt-4 max-w-md text-black/60">
        Open to new opportunities — reach out directly or find me on GitHub and LinkedIn.
      </p>
      <div className="mt-6 flex flex-col gap-1 text-sm">
        <a href={`mailto:${profile.email}`} className="w-fit text-black transition-colors hover:text-black/60">
          {profile.email}
        </a>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="w-fit text-black/40 transition-colors hover:text-black"
        >
          GitHub
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="w-fit text-black/40 transition-colors hover:text-black"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
