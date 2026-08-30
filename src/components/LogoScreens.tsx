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
 * iPhone: the Wãves mark as an app-icon tile on black (mirroring the Oops
 * treatment). The source art is a circle, so the image is zoomed ~√2 inside a
 * rounded-square mask — only the blue center fills the tile, W intact.
 */
export function WavesLogoScreen() {
  return (
    <div className="@container flex h-full w-full items-center justify-center bg-black">
      <div className="flex aspect-square w-[42%] items-center justify-center overflow-hidden rounded-[10cqw] shadow-[0_4cqw_14cqw_rgba(0,0,0,0.6)] ring-1 ring-white/10">
        <img src={asset('waves.png')} alt="Wãves" className="w-[144%] max-w-none shrink-0" />
      </div>
    </div>
  )
}
