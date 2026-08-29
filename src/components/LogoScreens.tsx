import type { CSSProperties } from 'react'

/**
 * Clean brand-logo screens for the device mockups — official logo assets
 * (from signifyhealth.com and the App Store) centered on brand fields.
 */

const asset = (file: string) => `${import.meta.env.BASE_URL}logos/${file}`

/** iPad: official signifyhealth lockup centered on white. */
export function SignifyLogoScreen() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white">
      <img src={asset('signifyhealth.png')} alt="Signify Health" className="w-[62%]" />
    </div>
  )
}

/** Official CVS Health logo, for placement outside the devices. */
export function CvsHealthLogo({ className }: { className?: string }) {
  return <img src={asset('cvshealth.svg')} alt="CVS Health" className={className} />
}

/**
 * iPhone: official MySignify app icon on its exact brand teal (#007d8a),
 * so the icon's own field blends seamlessly into the screen.
 */
export function MySignifyLogoScreen() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#007d8a]">
      <img src={asset('mysignify.png')} alt="MySignify" className="w-[68%]" />
    </div>
  )
}

/** iPhone: official Oops app icon in a white tile on brand purple (oops.app). */
export function OopsLogoScreen() {
  return (
    <div className="@container flex h-full w-full items-center justify-center bg-[#8d41fc]">
      <img
        src={asset('oops.png')}
        alt="Oops"
        className="w-[42%] rounded-[10cqw] shadow-[0_4cqw_12cqw_rgba(0,0,0,0.25)]"
      />
    </div>
  )
}

/**
 * Vector recreation of the Wãves mark from the founder's logo: two angular
 * wedges form the W's outer arms, an inverted location-pin/droplet forms the
 * center peak, with a dot cut out of the left arm.
 */
function WavesMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 150 104" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Wãves">
      {/* left wedge */}
      <path fill="currentColor" d="M2 12 L56 12 L36 92 Z" />
      {/* right wedge */}
      <path fill="currentColor" d="M148 12 L94 12 L114 92 Z" />
      {/* center inverted droplet / pin */}
      <path fill="currentColor" d="M57 31 A19 19 0 0 1 95 31 L76 86 Z" />
      {/* dot cut out of the left arm */}
      <circle cx="23" cy="31" r="6" fill="var(--waves-bg, #000)" />
    </svg>
  )
}

/** iPhone: Wãves mark in white on black, as in the original brand tile. */
export function WavesLogoScreen() {
  return (
    <div
      className="flex h-full w-full items-center justify-center bg-black text-white"
      style={{ '--waves-bg': '#000' } as CSSProperties}
    >
      <WavesMark className="w-[52%]" />
    </div>
  )
}
