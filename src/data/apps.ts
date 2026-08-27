export type Stat = {
  value: string
  label: string
}

export type App = {
  company: string
  role: string
  dates: string
  description: string
  tech: string[]
  device: 'ipad' | 'iphone'
  stats?: Stat[]
  image?: string
}

export const apps: App[] = [
  {
    company: 'CVS Health (Signify Health)',
    role: 'Staff iOS Engineer',
    dates: 'Nov. 2023 – Present',
    description:
      "The HIPAA-compliant, offline-first iPad app clinicians use to run Signify's In-Home Health Evaluations nationwide — the visits behind millions of closed care gaps every year.",
    tech: ['Swift', 'SwiftUI', 'UIKit', 'RIBs', 'MVVM', 'SwiftData', 'AVFoundation', 'PDFKit', 'APNs', 'Vapor'],
    device: 'ipad',
    stats: [
      { value: '3.5M', label: 'In-home evaluations / year' },
      { value: '13M', label: 'Care gaps impacted' },
      { value: '11K+', label: 'Clinicians nationwide' },
    ],
  },
  {
    company: 'Oops',
    role: 'iOS Engineer',
    dates: 'May – June 2023',
    description:
      'A Gen-Z personal finance app that helps users understand and manage their spending, with an in-app AI chat assistant.',
    tech: ['Swift', 'SwiftUI', 'UIKit', 'Combine', 'Firebase', 'AWS'],
    device: 'iphone',
  },
  {
    company: 'Wãves',
    role: 'Founder',
    dates: 'May 2019 – Dec. 2022',
    description:
      'A location-based social app for coordinating real-time, in-person meetups and events — built end-to-end as founding engineer, from iOS client to backend.',
    tech: ['Swift', 'SwiftUI', 'MapKit', 'AVFoundation', 'Vapor', 'Firebase', 'GCP'],
    device: 'iphone',
  },
]
