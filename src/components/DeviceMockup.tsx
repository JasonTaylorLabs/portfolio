import type { CSSProperties, ReactNode } from 'react'

type DeviceMockupProps = {
  device: 'ipad' | 'iphone'
  className?: string
  children?: ReactNode
}

/**
 * Corner geometry. CSS percentage radii are elliptical (X% of width by X% of
 * height), which visibly "cuts" the corners of a tall phone — so every radius
 * is written as `H% / V%` with V = H × aspect-ratio, making the corners
 * perfectly circular. The screen radius is concentric with the body
 * (screen = body − bezel), which is what makes a frame read as a real device.
 */
const SPEC = {
  iphone: {
    aspect: 'aspect-9/19',
    ratio: 9 / 19,
    body: 17, // corner radius, % of width
    bezel: 3.4, // uniform bezel, % of width
  },
  ipad: {
    aspect: 'aspect-3/4',
    ratio: 3 / 4,
    body: 8,
    bezel: 4.2,
  },
} as const

const round = (h: number, ratio: number) => `${h}% / ${h * ratio}%`

// Machined band: bright top-edge catchlight, darker bottom, hairline outline.
const RIM_SHADOW =
  '0 0 0 1px rgba(0,0,0,0.28), inset 0 0 0 1.5px rgba(255,255,255,0.14), inset 0 2px 3px rgba(255,255,255,0.16), inset 0 -2px 3px rgba(0,0,0,0.5)'
const FRAME_GRADIENT = 'linear-gradient(145deg, #3a3a3e 0%, #232326 30%, #161618 70%, #1d1d20 100%)'
const BUTTON_GRADIENT = 'linear-gradient(90deg, #3c3c40, #232327)'
const BUTTON_GRADIENT_V = 'linear-gradient(180deg, #3c3c40, #232327)'

export function DeviceMockup({ device, className, children }: DeviceMockupProps) {
  const spec = SPEC[device]
  const isTablet = device === 'ipad'

  const bodyRadius: CSSProperties = { borderRadius: round(spec.body, spec.ratio) }
  const screenRadius: CSSProperties = {
    borderRadius: round(spec.body - spec.bezel, spec.ratio),
  }

  return (
    <div className={`${className ?? ''} relative ${spec.aspect}`}>
      {/* Side buttons — metallic, slightly recessed behind the body edge */}
      {isTablet ? (
        <>
          {/* top power button */}
          <span
            className="absolute top-[-0.8%] right-[15%] h-[1%] w-[7%] rounded-t-[3px]"
            style={{ background: BUTTON_GRADIENT_V }}
          />
          {/* right-edge volume buttons */}
          <span
            className="absolute top-[6.5%] right-[-0.9%] h-[5%] w-[1.2%] rounded-r-[3px]"
            style={{ background: BUTTON_GRADIENT }}
          />
          <span
            className="absolute top-[12.5%] right-[-0.9%] h-[5%] w-[1.2%] rounded-r-[3px]"
            style={{ background: BUTTON_GRADIENT }}
          />
        </>
      ) : (
        <>
          {/* action button + volume rocker, left edge */}
          <span
            className="absolute top-[17%] left-[-1.1%] h-[3.4%] w-[1.4%] rounded-l-[3px]"
            style={{ background: BUTTON_GRADIENT }}
          />
          <span
            className="absolute top-[24.5%] left-[-1.1%] h-[6.5%] w-[1.4%] rounded-l-[3px]"
            style={{ background: BUTTON_GRADIENT }}
          />
          <span
            className="absolute top-[32.5%] left-[-1.1%] h-[6.5%] w-[1.4%] rounded-l-[3px]"
            style={{ background: BUTTON_GRADIENT }}
          />
          {/* side (power) button, right edge */}
          <span
            className="absolute top-[26%] right-[-1.1%] h-[10.5%] w-[1.4%] rounded-r-[3px]"
            style={{ background: BUTTON_GRADIENT }}
          />
        </>
      )}

      {/* Body */}
      <div
        className="relative h-full w-full shadow-[0_35px_70px_-30px_rgba(0,0,0,0.35)]"
        style={{ ...bodyRadius, background: FRAME_GRADIENT, padding: `${spec.bezel}%` }}
      >
        {/* Machined-band rim light */}
        <div className="pointer-events-none absolute inset-0 z-10" style={{ ...bodyRadius, boxShadow: RIM_SHADOW }} />

        {/* Front camera lives in the top bezel on an iPad */}
        {isTablet && (
          <span
            className="absolute top-[1.35%] left-1/2 z-10 h-[0.9%] w-[0.68%] -translate-x-1/2 rounded-full"
            style={{ background: 'radial-gradient(circle at 35% 35%, #3d4a63, #10131c 70%)' }}
          />
        )}

        {/* Screen */}
        <div className="relative h-full w-full overflow-hidden bg-white" style={screenRadius}>
          {/* Dynamic island (true proportions: ~29% wide, ~4.2% tall) */}
          {!isTablet && (
            <div className="absolute top-[1.5%] left-1/2 z-20 flex h-[4.2%] w-[29%] -translate-x-1/2 items-center justify-end rounded-full bg-black pr-[2.5%]">
              <span
                className="aspect-square h-[38%] rounded-full"
                style={{ background: 'radial-gradient(circle at 35% 35%, #2c3550, #05070c 72%)' }}
              />
            </div>
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
