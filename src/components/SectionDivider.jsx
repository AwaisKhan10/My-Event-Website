/**
 * Visual “new section” marker: top border + cyan accent + optional label.
 */
export default function SectionDivider({ label }) {
  return (
    <div
      className="relative w-full border-t border-white/[0.09] bg-gradient-to-b from-white/[0.04] to-transparent"
      aria-hidden={label ? undefined : true}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
        <div className="h-px w-40 max-w-[50%] bg-gradient-to-r from-transparent via-sky-500/70 to-transparent shadow-[0_0_20px_rgba(56,189,248,0.35)]" />
      </div>
      <div className="flex flex-col items-center pt-3 pb-1">
        <div className="flex items-center gap-2">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-white/25 sm:w-16" />
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.8)]" />
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-white/25 sm:w-16" />
        </div>
        {label ? (
          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35">
            {label}
          </p>
        ) : null}
      </div>
    </div>
  );
}
