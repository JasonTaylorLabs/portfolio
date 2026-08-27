function StatusIcons() {
  return (
    <div className="flex items-center gap-[1.6cqw] text-[#1c1c1e]">
      <svg viewBox="0 0 18 12" className="h-[2.6cqw] w-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="8" width="3" height="4" rx="0.5" />
        <rect x="5" y="5" width="3" height="7" rx="0.5" />
        <rect x="10" y="2.5" width="3" height="9.5" rx="0.5" />
        <rect x="15" y="0" width="3" height="12" rx="0.5" />
      </svg>
      <svg viewBox="0 0 16 12" className="h-[2.6cqw] w-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2.2c2.5 0 4.8 1 6.5 2.6l-1.4 1.5A7.3 7.3 0 0 0 8 4.4a7.3 7.3 0 0 0-5.1 1.9L1.5 4.8A9.4 9.4 0 0 1 8 2.2Zm0 3.6c1.5 0 2.9.6 3.9 1.6l-1.5 1.5A3.4 3.4 0 0 0 8 8a3.4 3.4 0 0 0-2.4 1L4.1 7.4A5.5 5.5 0 0 1 8 5.8Zm0 3.5 1.6 1.6L8 12 6.4 10.4 8 9.3Z" />
      </svg>
      <svg viewBox="0 0 26 12" className="h-[2.6cqw] w-auto" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="22" height="11" rx="3" fill="none" stroke="currentColor" strokeOpacity="0.4" />
        <rect x="2" y="2" width="18" height="8" rx="1.5" fill="currentColor" />
        <rect x="23.5" y="4" width="1.8" height="4" rx="0.9" fill="currentColor" fillOpacity="0.4" />
      </svg>
    </div>
  )
}

function CarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 11 5.9 7.3A2.2 2.2 0 0 1 8 6h8a2.2 2.2 0 0 1 2.1 1.3L19.5 11l1.2.4c.8.3 1.3 1 1.3 1.9v3.2a1 1 0 0 1-1 1h-1.1a2.4 2.4 0 0 1-4.8 0H8.9a2.4 2.4 0 0 1-4.8 0H3a1 1 0 0 1-1-1v-3.2c0-.9.5-1.6 1.3-1.9L4.5 11Zm2 .5h11l-1.1-3a.7.7 0 0 0-.6-.5H8.2a.7.7 0 0 0-.6.5l-1.1 3ZM6.5 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm11 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </svg>
  )
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" strokeLinecap="round" />
    </svg>
  )
}

function PersonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="3.6" />
      <path d="M5 20a7 7 0 0 1 14 0" strokeLinecap="round" />
    </svg>
  )
}

const BLUE = '#1571b8'

const APPOINTMENTS = [
  { time: '8:00 AM CT', type: 'Fixed time', name: 'Steve Rogers', drive: '14 min (2.8 mi)', badge: 'Labs', tone: 'labs' },
  { time: '9:00 AM CT', type: 'Arrival window: 9 AM – 12 PM', name: 'Brenda McIntosh', drive: '4 min (.8 mi)', badge: 'Labs', tone: 'labs' },
  { time: '10:00 AM CT', type: 'Arrival window: 9 AM – 12 PM', name: 'Warren Harrison', drive: '6 min (1.2 mi)', badge: null, tone: null },
  { time: '11:00 AM CT', type: 'Arrival window: 9 AM – 12 PM', name: 'Flora Gonzalez', drive: '3 min (.5 mi)', badge: 'Focused', tone: 'focused' },
] as const

export function MySignifyAppScreen() {
  return (
    <div className="@container flex h-full w-full flex-col bg-[#f1f1f4] text-[#1c1c1e]">
      {/* Status bar — tall enough to clear the dynamic island notch */}
      <div className="flex h-[13cqw] items-center justify-between bg-white px-[6cqw]">
        <span className="text-[3.2cqw] font-semibold">9:41</span>
        <StatusIcons />
      </div>

      {/* Header */}
      <div className="relative flex items-center justify-center bg-white px-[6cqw] pt-[1cqw] pb-[2.5cqw]">
        <span className="text-[3.8cqw] font-semibold">Wednesday, February 5</span>
        <span className="absolute right-[6cqw] text-[5cqw] leading-none" style={{ color: BLUE }}>
          ›
        </span>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-between bg-white px-[6cqw]">
        <div className="flex items-center gap-[2cqw] pb-[2cqw]" style={{ boxShadow: `inset 0 -0.7cqw 0 ${BLUE}` }}>
          <span className="text-[3.4cqw] font-medium" style={{ color: BLUE }}>
            Appointments
          </span>
          <span
            className="flex h-[4.4cqw] w-[4.4cqw] items-center justify-center rounded-full text-[2.5cqw] font-semibold text-white"
            style={{ backgroundColor: BLUE }}
          >
            9
          </span>
        </div>
        <span className="pb-[2cqw] text-[3.4cqw] text-black/40">Route</span>
      </div>
      <div className="h-px bg-black/10" />

      {/* Appointment list */}
      <div className="flex-1 space-y-[2.8cqw] overflow-hidden px-[4cqw] py-[3cqw]">
        {APPOINTMENTS.map((a) => (
          <div key={a.name} className="rounded-[2.5cqw] bg-white p-[3.5cqw] shadow-[0_1cqw_3cqw_rgba(0,0,0,0.05)]">
            <p className="text-[2.9cqw]">
              <span className="font-semibold">{a.time}</span>
              <span className="text-black/40"> | {a.type}</span>
            </p>
            <p className="mt-[1.2cqw] text-[3.7cqw] font-semibold" style={{ color: BLUE }}>
              {a.name}
            </p>
            <div className="mt-[1.2cqw] flex items-center gap-[1.6cqw] text-[2.8cqw] text-black/45">
              <CarIcon className="h-[3.4cqw] w-auto" />
              <span>Typically {a.drive}</span>
            </div>
            {a.badge && (
              <span
                className="mt-[2.2cqw] inline-block rounded-[1.4cqw] px-[2.6cqw] py-[0.8cqw] text-[2.6cqw] font-semibold"
                style={
                  a.tone === 'focused'
                    ? { backgroundColor: '#c4d660', color: '#3a4416' }
                    : { backgroundColor: '#e2a41d', color: '#ffffff' }
                }
              >
                {a.badge}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Bottom tab bar */}
      <div className="flex items-start justify-around border-t border-black/10 bg-white px-[4cqw] pt-[2.2cqw] pb-[3.5cqw]">
        <div className="flex flex-col items-center gap-[1cqw]" style={{ color: BLUE }}>
          <CalendarIcon className="h-[5cqw] w-auto" />
          <span className="text-[2.4cqw] font-medium">Schedule</span>
        </div>
        <div className="flex flex-col items-center gap-[1cqw] text-black/40">
          <CalendarIcon className="h-[5cqw] w-auto" />
          <span className="text-[2.4cqw]">Availability</span>
        </div>
        <div className="flex flex-col items-center gap-[1cqw] text-black/40">
          <PersonIcon className="h-[5cqw] w-auto" />
          <span className="text-[2.4cqw]">Profile</span>
        </div>
      </div>
    </div>
  )
}
