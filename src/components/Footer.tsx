import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="mx-auto max-w-2xl px-6 py-12 text-sm text-black/40 sm:px-12">
      &copy; {new Date().getFullYear()} {profile.name}
    </footer>
  )
}
