'use client'

export default function Logo() {
  return (
    <div className="flex items-start text-white leading-tight">
      {/* § symbol */}
      <span className="opacity-0 animate-fade-up delay-title text-6xl font-semibold text-accent pr-1">§</span>

      {/* Text block and line in column */}
      <div className="flex flex-col">
        <span className="text-lg md:text-xl">Rechtsanwaltskanzlei</span>

        <div className="flex items-center">
          <span className="text-lg md:text-xl mr-2">Barth</span>
          {/* animated line */}
          <span className="animate-grow-line origin-left h-[2px] bg-secondary flex-1" />
        </div>
      </div>
    </div>
  )
}
