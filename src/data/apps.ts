export type App = {
  company: string
  role: string
  dates: string
  description: string
  tech: string[]
  image?: string
}

export const apps: App[] = [
  {
    company: 'CVS Health (Signify Health)',
    role: 'Staff iOS Engineer',
    dates: 'Nov. 2023 – Present',
    description:
      "Signify's HIPAA-compliant, offline-first clinical iPad app used by clinicians nationwide for in-home patient evaluations — 3.5 million evaluations a year, supporting ~$1.6B in revenue.",
    tech: ['Swift', 'SwiftUI', 'UIKit', 'RIBs', 'MVVM', 'SwiftData', 'AVFoundation', 'PDFKit', 'APNs', 'Vapor'],
  },
  {
    company: 'Oops',
    role: 'iOS Engineer',
    dates: 'May – June 2023',
    description:
      'A Gen-Z personal finance app that helps users understand and manage their spending, with an in-app AI chat assistant.',
    tech: ['Swift', 'SwiftUI', 'UIKit', 'Combine', 'Firebase', 'AWS'],
  },
  {
    company: 'Wãves',
    role: 'Founder',
    dates: 'May 2019 – Dec. 2022',
    description:
      'A location-based social app for coordinating real-time, in-person meetups and events — built end-to-end as founding engineer, from iOS client to backend.',
    tech: ['Swift', 'SwiftUI', 'MapKit', 'AVFoundation', 'Vapor', 'Firebase', 'GCP'],
  },
]
