export type ExperienceEntry = {
  company: string
  role: string
  location: string
  dates: string
  bullets: string[]
  tech: string[]
}

export const experience: ExperienceEntry[] = [
  {
    company: 'CVS Health (Signify Health)',
    role: 'Staff iOS Engineer',
    location: 'Remote',
    dates: 'Nov. 2023 – Present',
    bullets: [
      "Lead development of Signify's HIPAA-compliant, offline-first clinical iPad (SwiftUI) application used by clinicians nationwide across 3.5 million annual in-home evaluations, supporting ~$1.6 billion revenue in 2025.",
      'Lead architecture and development of a new shared mobile platform, unifying iOS, Android, and web experiences, enabling 22 module teams to build features on top of shared infrastructure and design systems.',
      'Partner with Product, Design, UX, and Leadership to align technical plans and sequence dependencies. Design A/B tests and instrument Mixpanel to enable evidence-based product decisions.',
      'Lead weekly AI enablement sessions scaling AI-driven development workflows using Claude Code, Codex, and Copilot across mobile and platform teams.',
      'Led architecture and development of RapidSOS, a critical safety feature enabling clinicians to silently call 911, with real-time status updates and continuous location tracking.',
      'Delivered a pre-visit Clinical Document Viewer for iPad using PDFKit, driving over 3 million clinical documents reviewed annually.',
      'Led development of On My Way ETA notifications (APNs & SMS), reducing same-day cancellations by ~19% YoY.',
      'Architected a CI/CD pipeline that tracks gRPC definition changes and auto-generates ready-to-use Swift packages, eliminating manual client code generation.',
      'Led technical interview panels for Mid- through Staff-level iOS candidates and mentored engineers across mobile teams.',
    ],
    tech: [
      'Swift',
      'SwiftUI',
      'UIKit',
      'SwiftData',
      'RIBs',
      'MVVM',
      'AVFoundation',
      'AVKit',
      'APNs',
      'Vapor',
      'React Native',
      'React',
      'TypeScript',
    ],
  },
  {
    company: 'Oops',
    role: 'Senior iOS Engineer',
    location: 'SoHo, NYC',
    dates: 'May 2023 – June 2023',
    bullets: [
      'Led iOS development for a Gen-Z personal finance app, focusing on user onboarding and engagement features.',
      'Re-designed onboarding and invite flow; instrumented Mixpanel funnels and ran A/B tests, increasing invites per new user from 1.9 to 3.1 (+63%) and contributing to an App Store rank of #86 in Finance.',
      'Built an AI chat experience helping users understand spending habits, integrating OpenAI APIs with Mixpanel analytics.',
    ],
    tech: ['Swift', 'SwiftUI', 'UIKit', 'Combine', 'MVVM', 'Firebase', 'AWS', 'Mixpanel'],
  },
  {
    company: 'Wãves',
    role: 'Founding iOS Engineer',
    location: 'Remote',
    dates: 'May 2019 – Dec. 2022',
    bullets: [
      'Founded and led development of a location-based social app for coordinating real-time, in-person meetups and events, owning the end-to-end iOS client, backend services, and product design.',
      'Shipped a beta to ~1K users with a media capture/playback layer (AVFoundation, AVKit), real-time venues/maps (MapKit, Core Location), private messaging, push notifications, and background processing.',
      'Built reusable media playback components and APIs in Swift and SwiftUI that other features could integrate with consistently — similar to a shared player SDK.',
    ],
    tech: [
      'Swift',
      'SwiftUI',
      'UIKit',
      'MapKit',
      'Core Location',
      'AVFoundation',
      'AVKit',
      'Core Data',
      'APNs',
      'TypeScript',
      'Vapor',
      'GCP',
      'Firebase',
    ],
  },
]
