import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { useUserLocation } from "../context/LocationContext.jsx";
import { getCityOptionsForUi } from "../data/citiesList";
import { FaArrowRight } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { BsLightningCharge } from "react-icons/bs";
import hero from "../assets/hero-professional.jpg";
import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";

function Section() {
  const { preferredCity, setPreferredCity, detecting } = useUserLocation();
  const heroCities = getCityOptionsForUi(preferredCity);

  return (
    <>
      <section
        id="home"
        className="relative scroll-mt-24 overflow-hidden bg-black"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="bme-shimmer bme-ambient absolute -top-48 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-500/25 via-indigo-500/15 to-transparent blur-3xl" />
          <div className="bme-pulse-soft absolute -bottom-56 right-[-160px] h-[480px] w-[480px] rounded-full bg-sky-500/15 blur-3xl" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-14 md:pb-20 md:pt-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <ScrollReveal>
                <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Book<span className="text-sky-400">My</span>Event
                </h1>
              </ScrollReveal>

              <ScrollReveal delayMs={120} className="mt-4">
                <p className="max-w-xl text-pretty text-base text-white/75 sm:text-lg">
                  Enterprise-grade event management at your fingertips. Discover,
                  book, and experience concerts, conferences, and unforgettable
                  live events — all from one seamless platform.
                </p>
              </ScrollReveal>

              <ScrollReveal delayMs={200} className="mt-7">
                <div className="flex w-full flex-col gap-3 rounded-3xl border border-white/[0.08] bg-white/[0.04] p-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-xl sm:flex-row sm:items-center">
                  <div className="flex flex-1 items-center gap-2 rounded-2xl border border-white/[0.06] bg-black/30 px-3 py-3 text-white/90">
                    <CiSearch className="text-xl text-white/50" />
                    <input
                      type="text"
                      placeholder="Search events, artists, venues..."
                      className="w-full bg-transparent outline-none placeholder:text-white/35"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-2 sm:justify-start">
                    <div className="hidden h-10 w-px bg-white/10 sm:block" />
                    <div className="flex min-w-0 items-center gap-2 rounded-2xl border border-white/[0.06] bg-black/30 px-2 py-2 text-white/90 sm:px-3 sm:py-3">
                      <CiLocationOn className="shrink-0 text-xl text-white/50" />
                      <select
                        value={preferredCity}
                        onChange={(e) => setPreferredCity(e.target.value)}
                        aria-label="Your location"
                        disabled={detecting}
                        className="bme-filter-select min-w-0 max-w-[140px] flex-1 cursor-pointer bg-transparent text-sm font-medium text-sky-400 outline-none disabled:opacity-60 sm:max-w-[180px]"
                      >
                        {heroCities.map((c) => (
                          <option key={c} value={c} className="bg-zinc-900">
                            {c}
                          </option>
                        ))}
                      </select>
                      {detecting ? (
                        <span className="shrink-0 text-[10px] text-white/35">
                          …
                        </span>
                      ) : null}
                    </div>
                    <button className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-sky-400 px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_32px_-8px_rgba(56,189,248,0.45)] transition hover:scale-[1.02] hover:shadow-[0_12px_40px_-8px_rgba(56,189,248,0.55)]">
                      Search
                      <span className="transition group-hover:translate-x-0.5">
                        <FaArrowRight />
                      </span>
                    </button>
                  </div>
                </div>

                <div className="mt-3 text-sm text-white/45">
                  Verified events only • Secure ticket gallery • 24/7 Support
                </div>
              </ScrollReveal>

              <ScrollReveal delayMs={260} className="mt-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    to="/events"
                    className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-sky-400 px-7 py-4 text-sm font-semibold text-white shadow-[0_8px_32px_-8px_rgba(56,189,248,0.4)] transition hover:scale-[1.02] hover:shadow-[0_12px_40px_-8px_rgba(56,189,248,0.55)]"
                  >
                    Explore Events
                    <span className="transition group-hover:translate-x-0.5">
                      <FaArrowRight />
                    </span>
                  </Link>
                  <Link
                    to="/create-events"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/[0.12] bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white/90 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.07]"
                  >
                    Become a Promoter
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delayMs={120} className="relative">
              <div className="relative mx-auto max-w-xl">
                <img
                  src={hero}
                  alt="Professional conference and live events"
                  className="bme-float aspect-[4/3] w-full rounded-3xl border border-white/[0.08] object-cover object-center shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_32px_64px_-24px_rgba(0,0,0,0.8)]"
                />
                <div className="pointer-events-none absolute -bottom-6 left-6 hidden rounded-3xl border border-white/[0.08] bg-black/50 px-4 py-3 text-white/85 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.8)] backdrop-blur-xl md:block">
                  <div className="text-xs uppercase tracking-wider text-white/45">
                    Trending this week
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white/95">
                    Concerts • Tech • Food • Sports
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="events" className="bg-[#06060a] text-white scroll-mt-24">
        <SectionDivider label="Discover" />
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 md:pb-20 md:pt-12">
          <ScrollReveal className="text-center">
            <div className="text-sm font-semibold tracking-wide text-sky-400/90">
              Discover Events
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Events in Karachi
            </h2>
            <p className="mt-2 text-white/50">
              Discover genuine experiences matching your preferences.
            </p>
          </ScrollReveal>

          <ScrollReveal delayMs={120} className="mt-8">
            <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-3 rounded-3xl border border-white/[0.08] bg-white/[0.03] p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-xl sm:flex-row sm:gap-6">
              <div className="inline-flex items-center gap-2 rounded-2xl border border-white/[0.08] bg-black/40 px-4 py-3 text-sm font-semibold text-white/90">
                <CiLocationOn className="text-lg text-sky-400/80" />
                Nearby (Karachi)
              </div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-white/55">
                <TbWorld className="text-lg text-white/40" />
                In Pakistan
              </div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-white/55">
                <BsLightningCharge className="text-lg text-white/40" />
                All Events
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
        </div>
      </section>
    </>
  );
}
export default Section;
