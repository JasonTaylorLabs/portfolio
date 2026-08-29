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
