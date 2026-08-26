import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto max-w-4xl px-6 text-sm text-slate-500 dark:text-slate-500">
        &copy; {new Date().getFullYear()} {profile.name}
      </div>
    </footer>
  )
}
