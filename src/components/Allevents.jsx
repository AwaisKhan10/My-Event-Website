import { Link } from "react-router-dom";
import { TbChessQueen } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";
import { categories } from "../data/categoriesData";

function Allevents() {
  return (
    <>
      <section id="categories" className="scroll-mt-24 bg-black py-0 text-white">
        <SectionDivider label="Categories" />
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 md:pb-24 md:pt-12">
          <ScrollReveal className="text-center">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-white/80">
              <TbChessQueen className="text-lg text-sky-400" />
              Explore By Category
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Browse events by category
            </h2>
            <p className="mt-2 text-white/65">
              Find events that match your interests and passions.
            </p>
          </ScrollReveal>

          <div className="mt-10 flex justify-center">
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.05] px-5 py-2.5 text-sm font-semibold text-white transition hover:border-sky-500/40 hover:bg-white/[0.08]"
            >
              View all categories
              <FaArrowRight className="text-xs" />
            </Link>
          </div>

          <div className="mt-10 h-px w-full bg-white/10" />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c, idx) => (
              <ScrollReveal key={c.id} delayMs={Math.min(idx * 45, 260)}>
                <Link
                  to={`/events?category=${c.id}`}
                  className="bme-card-lift group relative block overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] shadow-[0_24px_48px_-28px_rgba(0,0,0,0.9)]"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={c.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-90" />

                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <div className="text-lg font-bold">{c.title}</div>
                        <div className="mt-1 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white/90 ring-1 ring-white/10">
                          {c.count}+ events
                        </div>
                      </div>

                      <span className="inline-flex items-center justify-center rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white/90 ring-1 ring-white/10 transition group-hover:bg-white/25">
                        Explore
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Allevents;
