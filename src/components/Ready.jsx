import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";

function Ready() {
  return (
    <>
      <section
        id="create"
        className="relative scroll-mt-24 overflow-hidden bg-[#06060a] py-0"
      >
        <SectionDivider label="For organizers" />
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-500/10 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 md:pb-24 md:pt-12">
          <ScrollReveal className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-white/[0.1] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-10 text-center shadow-[0_0_0_1px_rgba(56,189,248,0.08),0_32px_64px_-24px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:p-12">
            <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />

            <h2 className="relative text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready to create your own events?
            </h2>
            <p className="relative mt-3 text-white/55">
              Join thousands of organizers who trust BookMyEvent to host and
              sell tickets.
            </p>

            <div className="relative mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/create-events"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-sky-400 px-8 py-4 text-sm font-semibold text-white shadow-[0_8px_32px_-8px_rgba(56,189,248,0.45)] transition hover:scale-[1.02] hover:shadow-[0_12px_40px_-8px_rgba(56,189,248,0.6)]"
              >
                Start your journey
                <span className="transition group-hover:translate-x-0.5">
                  <FaArrowRight />
                </span>
              </Link>
              <Link
                to="/#connect"
                className="inline-flex items-center justify-center rounded-2xl border border-white/[0.12] bg-white/[0.04] px-8 py-4 text-sm font-semibold text-white/90 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.08]"
              >
                Contact sales
              </Link>
            </div>
          </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
export default Ready;
