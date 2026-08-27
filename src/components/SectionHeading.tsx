type SectionHeadingProps = {
  label: string
}

/** Shared section label: small mono caps with a trailing hairline rule. */
export function SectionHeading({ label }: SectionHeadingProps) {
  return (
    <h2 className="flex items-center gap-5 font-mono text-[11px] font-medium tracking-[0.25em] text-cream/40 uppercase">
      {label}
      <span aria-hidden="true" className="h-px flex-1 bg-cream/[0.08]" />
    </h2>
  )
}
