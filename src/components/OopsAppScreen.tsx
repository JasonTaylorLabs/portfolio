const OOPS_BLUE = '#1a86fb'

const SPLURGES = [
  { emoji: '🎮', name: 'Roblox', amount: '$565', react: '😭', highlight: true },
  { emoji: '🛍️', name: 'Aritzia', amount: '$301', react: '😩', highlight: false },
  { emoji: '💻', name: 'ChatGPT', amount: '$201', react: '🫠', highlight: false },
  { emoji: '🌯', name: 'Chipotle', amount: '$122', react: '😬', highlight: false },
]

export function OopsAppScreen() {
  return (
    <div className="@container flex h-full w-full flex-col px-[5cqw] pt-[7cqw] pb-[6cqw] text-white" style={{ backgroundColor: OOPS_BLUE }}>
      {/* Story progress segments */}
      <div className="flex gap-[1.5cqw]">
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className={`h-[0.9cqw] flex-1 rounded-full ${i < 2 ? 'bg-white' : 'bg-white/35'}`} />
        ))}
      </div>

      {/* Header */}
      <div className="mt-[4cqw] flex items-center justify-between">
        <div className="flex items-center gap-[2cqw]">
          <span className="flex h-[6.5cqw] w-[6.5cqw] items-center justify-center rounded-[1.8cqw] bg-white text-[3.6cqw]">
            🤑
          </span>
          <span className="text-[3.4cqw] font-bold">Oops Weekly Recap</span>
        </div>
        <span className="text-[4.5cqw] leading-none font-light">✕</span>
      </div>

      {/* Title pill */}
      <div className="mt-[7cqw] flex justify-center">
        <span
          className="rounded-[3.5cqw] bg-white px-[7cqw] py-[2.5cqw] text-[8.5cqw] leading-none font-black tracking-tight"
          style={{ color: OOPS_BLUE }}
        >
          Splurges
        </span>
      </div>

      {/* Splurge list */}
      <div className="mt-[7cqw] flex flex-col gap-[3cqw]">
        {SPLURGES.map((s, i) => (
          <div
            key={s.name}
            className={`flex items-center justify-end gap-[2.5cqw] rounded-[3cqw] px-[3.5cqw] py-[2.6cqw] ${
              s.highlight ? 'bg-white' : 'bg-white/15'
            }`}
            style={{ marginLeft: `${i * 6}cqw` }}
          >
            <span
              className={`flex h-[9cqw] w-[9cqw] shrink-0 items-center justify-center rounded-full text-[5cqw] ${
                s.highlight ? 'bg-black/5' : 'bg-white/25'
              }`}
            >
              {s.react}
            </span>
            <div className="flex flex-col items-end">
              <div className={`flex items-center gap-[1.4cqw] text-[3.7cqw] font-bold ${s.highlight ? 'text-[#111]' : 'text-white'}`}>
                <span>{s.emoji}</span>
                <span>{s.name}</span>
              </div>
              <span className={`text-[3.2cqw] font-semibold ${s.highlight ? 'text-black/40' : 'text-white/65'}`}>
                {s.amount}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
