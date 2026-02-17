export function SectionDivider() {
  return (
    <div className="relative py-4 flex justify-center" aria-hidden="true">
      <svg
        width="200"
        height="24"
        viewBox="0 0 200 24"
        fill="none"
        className="text-white/[0.06]"
      >
        <path
          d="M0 12 C50 0, 150 0, 200 12"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M20 16 C70 6, 130 6, 180 16"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
        />
      </svg>
    </div>
  )
}
