type DeviceMockupProps = {
  device: 'ipad' | 'iphone'
  className?: string
}

export function DeviceMockup({ device, className }: DeviceMockupProps) {
  if (device === 'ipad') {
    return (
      <svg viewBox="0 0 300 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="292" height="392" rx="26" fill="white" stroke="black" strokeOpacity="0.5" strokeWidth="3" />
        <rect x="20" y="20" width="260" height="360" rx="3" fill="black" fillOpacity="0.03" />
        <circle cx="150" cy="12" r="2" fill="black" fillOpacity="0.4" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 200 400" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="192" height="392" rx="38" fill="white" stroke="black" strokeOpacity="0.5" strokeWidth="3" />
      <rect x="16" y="16" width="168" height="368" rx="3" fill="black" fillOpacity="0.03" />
      <rect x="72" y="18" width="56" height="18" rx="9" fill="black" fillOpacity="0.5" />
    </svg>
  )
}
