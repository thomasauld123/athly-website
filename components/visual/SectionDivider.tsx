export function SectionDivider() {
  return (
    <div className="flex justify-center py-2" aria-hidden="true">
      <div
        className="w-full max-w-md h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)' }}
      />
    </div>
  )
}
