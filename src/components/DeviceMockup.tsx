import type { ReactNode } from 'react'

type DeviceMockupProps = {
  device: 'ipad' | 'iphone'
  className?: string
  children?: ReactNode
}

export function DeviceMockup({ device, className, children }: DeviceMockupProps) {
  const isTablet = device === 'ipad'

  return (
    <div
      className={`${className ?? ''} relative ${isTablet ? 'aspect-3/4 rounded-[1.9rem] p-[1.6%]' : 'aspect-9/19 rounded-[2.6rem] p-[2.4%]'} bg-[#1c1c1e] shadow-[0_25px_60px_-20px_rgba(0,0,0,0.35)]`}
    >
      <div className={`relative h-full w-full overflow-hidden ${isTablet ? 'rounded-[1.1rem]' : 'rounded-[1.9rem]'} bg-white`}>
        {!isTablet && (
          <div className="absolute top-[2%] left-1/2 z-10 h-[3.5%] w-[32%] -translate-x-1/2 rounded-full bg-[#1c1c1e]" />
        )}
        {children ?? <div className="h-full w-full bg-black/[0.03]" />}
      </div>
    </div>
  )
}
