import type { ReactNode } from 'react'

type DeviceMockupProps = {
  device: 'ipad' | 'iphone'
  className?: string
  children?: ReactNode
}

// Metallic edge: a bright top highlight and dark bottom to read as a rounded rail.
const RIM_SHADOW =
  '0 0 0 1px rgba(255,255,255,0.07), inset 0 0 0 1px rgba(255,255,255,0.12), inset 0 1.5px 2px rgba(255,255,255,0.16), inset 0 -1.5px 2px rgba(0,0,0,0.55)'
const FRAME_GRADIENT = 'linear-gradient(145deg, #2b2b2e 0%, #1a1a1c 42%, #131315 100%)'
const BUTTON_BG = '#141416'

export function DeviceMockup({ device, className, children }: DeviceMockupProps) {
  const isTablet = device === 'ipad'
  const outerRadius = isTablet ? 'rounded-[6.5%]' : 'rounded-[13%]'
  const screenRadius = isTablet ? 'rounded-[5%]' : 'rounded-[10.5%]'

  return (
    <div className={`${className ?? ''} relative ${isTablet ? 'aspect-3/4' : 'aspect-9/19'}`}>
      {/* Side buttons */}
      {isTablet ? (
        <>
          {/* power on top edge */}
          <span className="absolute top-[-1%] right-[16%] h-[1.2%] w-[8%] rounded-t-[2px]" style={{ background: BUTTON_BG }} />
          {/* volume on right edge */}
          <span className="absolute top-[7%] right-[-1%] h-[6%] w-[1.1%] rounded-r-[2px]" style={{ background: BUTTON_BG }} />
          <span className="absolute top-[14.5%] right-[-1%] h-[6%] w-[1.1%] rounded-r-[2px]" style={{ background: BUTTON_BG }} />
        </>
      ) : (
        <>
          {/* action + volume on left edge */}
          <span className="absolute top-[18%] left-[-1.3%] h-[4%] w-[1.5%] rounded-l-[2px]" style={{ background: BUTTON_BG }} />
          <span className="absolute top-[27%] left-[-1.3%] h-[8%] w-[1.5%] rounded-l-[2px]" style={{ background: BUTTON_BG }} />
          <span className="absolute top-[37%] left-[-1.3%] h-[8%] w-[1.5%] rounded-l-[2px]" style={{ background: BUTTON_BG }} />
          {/* side button on right edge */}
          <span className="absolute top-[30%] right-[-1.3%] h-[12%] w-[1.5%] rounded-r-[2px]" style={{ background: BUTTON_BG }} />
        </>
      )}

      {/* Frame */}
      <div
        className={`relative h-full w-full ${outerRadius} ${isTablet ? 'p-[2%]' : 'p-[3%]'} shadow-[0_35px_70px_-30px_rgba(0,0,0,0.32)]`}
        style={{ background: FRAME_GRADIENT }}
      >
        {/* Metallic rim highlight */}
        <div className={`pointer-events-none absolute inset-0 ${outerRadius}`} style={{ boxShadow: RIM_SHADOW }} />

        {/* Screen */}
        <div className={`relative h-full w-full overflow-hidden ${screenRadius} bg-white`}>
          {!isTablet && (
            <div className="absolute top-[1.6%] left-1/2 z-20 flex h-[3.1%] w-[30%] -translate-x-1/2 items-center justify-end rounded-full bg-black pr-[3%]">
              <span className="h-[32%] w-[10%] rounded-full bg-[#1b2a33]" />
            </div>
          )}
          {isTablet && (
            <div className="absolute top-[1.3%] left-1/2 z-20 h-[0.9%] w-[0.7%] -translate-x-1/2 rounded-full bg-[#1b2a33] ring-1 ring-black/30" />
          )}
          {children ?? (
            /* Idle device: dark glass with a faint diagonal sheen */
            <div className="h-full w-full bg-[linear-gradient(160deg,#181820_0%,#0b0b10_55%,#10101a_100%)]" />
          )}
        </div>
      </div>
    </div>
  )
}
