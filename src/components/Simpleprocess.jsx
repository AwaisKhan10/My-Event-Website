import { CiSearch } from "react-icons/ci";
import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";

function Simpleprocess() {
  return (
    <>
      <section className="scroll-mt-24 bg-[#06060a] py-0 text-white">
        <SectionDivider />
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 md:pb-24 md:pt-12">
          <ScrollReveal className="text-center">
            <div className="text-sm font-semibold tracking-wide text-white/70">
              Simple process
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              How it works
            </h2>
            <p className="mt-2 text-white/65">
              Book your next event in three easy steps.
            </p>
          </ScrollReveal>

          <div className="mt-10 h-px w-full bg-white/10" />

          {/* Line sits behind badges (z-0); badges use ring to mask the line cleanly */}
          <div className="relative mt-10">
            <div
              className="pointer-events-none absolute left-8 right-8 z-0 hidden h-px bg-gradient-to-r from-transparent via-sky-500/45 to-transparent lg:block"
              style={{ top: "2.875rem" }}
              aria-hidden
            />

            <div className="relative z-10 grid gap-4 lg:grid-cols-3">
              {[
                {
                  n: 1,
                  title: "Find your event",
                  lines: ["Browse thousands of events", "Search by date and location"],
                },
                {
                  n: 2,
                  title: "Book tickets",
                  lines: ["Pick your seats and quantity", "Checkout securely in seconds"],
                },
                {
                  n: 3,
                  title: "Enjoy the experience",
                  lines: ["Instant confirmation", "Seamless entry and support"],
                },
              ].map((card, idx) => (
                <ScrollReveal key={card.n} delayMs={idx * 90}>
                  <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm transition hover:border-white/[0.12]">
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-sky-600 text-lg font-bold text-white shadow-[0_0_0_1px_rgba(56,189,248,0.15)] ring-4 ring-black">
                        {card.n}
                      </div>
                      <div
                        className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/12 bg-black text-white ring-4 ring-black"
                        aria-hidden
                      >
                        <CiSearch className="text-2xl text-sky-300" />
                      </div>
                    </div>

                    <h3 className="mt-5 text-xl font-semibold">{card.title}</h3>
                    <div className="mt-2 space-y-1 text-sm text-white/65">
                      {card.lines.map((l) => (
                        <div key={l}>{l}</div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Simpleprocess;
