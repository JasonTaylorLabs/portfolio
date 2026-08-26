export type Company = {
  company: string
  role: string
  dates: string
  blurb: string
}

export const companies: Company[] = [
  {
    company: 'CVS Health (Signify Health)',
    role: 'Staff iOS Engineer',
    dates: 'Nov. 2023 – Present',
    blurb: 'Leading iOS architecture for a HIPAA-compliant clinical platform used by clinicians nationwide.',
  },
  {
    company: 'Oops',
    role: 'Senior iOS Engineer',
    dates: 'May – June 2023',
    blurb: 'Shipped onboarding and AI-powered features for a Gen-Z personal finance app.',
  },
  {
    company: 'Wãves',
    role: 'Founding iOS Engineer',
    dates: 'May 2019 – Dec. 2022',
    blurb: 'Founded and built a location-based social app end-to-end, from iOS client to backend.',
  },
]
