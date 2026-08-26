export type SkillGroup = {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: 'iOS',
    items: ['Swift', 'SwiftUI', 'UIKit', 'SwiftData', 'Combine', 'RIBs', 'MVVM', 'AVFoundation', 'AVKit', 'MapKit', 'Core Location', 'Core Data', 'APNs', 'PDFKit'],
  },
  {
    category: 'Web',
    items: ['React', 'React Native', 'TypeScript'],
  },
  {
    category: 'Backend & Cloud',
    items: ['Vapor', 'GCP', 'AWS', 'Firebase'],
  },
  {
    category: 'Tooling & Observability',
    items: ['GitHub Actions', 'Firebase Distribution', 'Crashlytics', 'New Relic', 'Mixpanel', 'LaunchDarkly', 'Postman', 'Proxyman'],
  },
  {
    category: 'AI-Assisted Development',
    items: ['Claude Code', 'Codex', 'Cursor', 'GitHub Copilot'],
  },
]
