function SignifyMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sh-flame" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#00a0af" />
          <stop offset="1" stopColor="#8bc34a" />
        </linearGradient>
      </defs>
      <path
        fill="url(#sh-flame)"
        d="M20 2 C 20 2 6 14 6 25 C 6 33 12 38 20 38 C 28 38 34 33 34 25 C 34 20 31 16 28 13 C 29 17 27 20 24 20 C 27 14 22 6 20 2 Z"
      />
    </svg>
  )
}

const VITALS = [
  { value: '128/80', label: 'BP' },
  { value: '72', label: 'Heart rate' },
  { value: '98%', label: 'SpO₂' },
]

const CHECKLIST = [
  { label: 'Health history', state: 'done' },
  { label: 'Medication review', state: 'done' },
  { label: 'Vitals & measurements', state: 'done' },
  { label: 'Screenings', state: 'active' },
  { label: 'Care plan', state: 'todo' },
] as const

export function SignifyAppScreen() {
  return (
    <div className="@container flex h-full w-full flex-col bg-white text-[#2d2926]">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#0097a9] px-[6cqw] py-[4.5cqw]">
        <div className="flex items-center gap-[2.5cqw]">
          <div className="flex h-[8cqw] w-[8cqw] items-center justify-center rounded-[2cqw] bg-white">
            <SignifyMark className="h-[6cqw] w-[6cqw]" />
          </div>
          <span className="text-[4.4cqw] font-semibold text-white">
            signify<span className="font-light">health</span>
          </span>
        </div>
        <div className="flex h-[8cqw] w-[8cqw] items-center justify-center rounded-full bg-white/20 text-[3cqw] font-medium text-white">
          RN
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col px-[6cqw] py-[5cqw]">
        <p className="text-[3cqw] font-semibold tracking-[0.15em] text-[#007d8a] uppercase">
          In-Home Health Evaluation
        </p>

        {/* Patient card */}
        <div className="mt-[3cqw] rounded-[3cqw] bg-[#f6f7f5] p-[4cqw]">
          <div className="flex items-center justify-between">
            <span className="text-[5cqw] font-semibold">Margaret T.</span>
            <span className="rounded-full bg-[#e6efce] px-[3cqw] py-[1cqw] text-[2.8cqw] font-medium text-[#5c7a1c]">
              In progress
            </span>
          </div>
          <p className="mt-[1cqw] text-[3cqw] text-black/45">Medicare Advantage · Member 0472</p>
        </div>

        {/* Vitals */}
        <div className="mt-[4cqw] grid grid-cols-3 gap-[3cqw]">
          {VITALS.map((v) => (
            <div key={v.label} className="rounded-[2.5cqw] bg-[#f6f7f5] p-[3cqw] text-center">
              <div className="text-[4cqw] font-semibold">{v.value}</div>
              <div className="mt-[0.5cqw] text-[2.6cqw] text-black/40">{v.label}</div>
            </div>
          ))}
        </div>

        {/* Checklist */}
        <p className="mt-[5cqw] text-[3.2cqw] font-semibold">Evaluation checklist</p>
        <div className="mt-[3cqw] space-y-[3cqw]">
          {CHECKLIST.map((item) => (
            <div key={item.label} className="flex items-center gap-[3cqw]">
              {item.state === 'done' ? (
                <span className="flex h-[5cqw] w-[5cqw] items-center justify-center rounded-full bg-[#0097a9] text-[3cqw] leading-none text-white">
                  ✓
                </span>
              ) : item.state === 'active' ? (
                <span className="h-[5cqw] w-[5cqw] rounded-full border-[0.6cqw] border-[#0097a9]" />
              ) : (
                <span className="h-[5cqw] w-[5cqw] rounded-full border-[0.6cqw] border-black/15" />
              )}
              <span
                className={`text-[3.4cqw] ${
                  item.state === 'todo' ? 'text-black/40' : item.state === 'active' ? 'text-[#007d8a]' : ''
                }`}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="mt-auto w-full rounded-[3cqw] bg-[#c4d660] py-[3.5cqw] text-[3.6cqw] font-semibold text-[#2d2926]">
          Complete evaluation
        </button>
      </div>
    </div>
  )
}
