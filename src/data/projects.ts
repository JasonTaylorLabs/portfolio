export type Project = {
  title: string
  company: string
  description: string
  tech: string[]
  link?: string
}

export const projects: Project[] = [
  {
    title: 'RapidSOS Silent Emergency Calling',
    company: 'CVS Health (Signify Health)',
    description:
      'Architected and built a safety feature that lets clinicians silently trigger a 911 call from the field, with real-time status updates and continuous location tracking.',
    tech: ['Swift', 'SwiftUI', 'APNs'],
  },
  {
    title: 'Clinical Document Viewer',
    company: 'CVS Health (Signify Health)',
    description:
      'Built an iPad viewer using PDFKit so clinicians can securely review patient records before a visit — now handling millions of document reviews a year.',
    tech: ['SwiftUI', 'PDFKit'],
  },
  {
    title: 'Shared Mobile Platform',
    company: 'CVS Health (Signify Health)',
    description:
      'Led architecture of a shared platform unifying iOS, Android, and web, giving dozens of feature teams a common foundation and design system to build on.',
    tech: ['Swift', 'React Native', 'Design Systems'],
  },
  {
    title: 'Wãves',
    company: 'Founding Engineer',
    description:
      'Founded and built a location-based social app end-to-end — real-time maps, media capture/playback, messaging, and push notifications — shipped to a beta of ~1K users.',
    tech: ['Swift', 'SwiftUI', 'MapKit', 'AVFoundation', 'Vapor', 'Firebase'],
  },
  {
    title: 'AI Spending Assistant',
    company: 'Oops',
    description:
      "Built an in-app AI chat experience that helps users understand their spending habits, integrating OpenAI's API into a Gen-Z personal finance app.",
    tech: ['Swift', 'SwiftUI', 'OpenAI API'],
  },
]
