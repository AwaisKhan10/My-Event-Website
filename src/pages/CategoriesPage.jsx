import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TbChessQueen } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import PageHero from "../components/PageHero";
import { categories } from "../data/categoriesData";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-black pb-16">
      <PageHero
        badge="Categories"
        title="Explore by interest"
        subtitle="Pick a category to see all upcoming events in that space — same filters as the Events page."
      />

      <div className="mx-auto max-w-7xl px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center justify-center gap-2 text-sm text-white/50"
        >
          <TbChessQueen className="text-lg text-sky-400" />
          <span>{categories.length} categories · curated for you</span>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {categories.map((c) => (
            <motion.li key={c.id} variants={item} layout>
              <Link
                to={`/events?category=${c.id}`}
                className="bme-card-lift group relative block overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] shadow-[0_24px_48px_-28px_rgba(0,0,0,0.9)]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={c.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h2 className="text-lg font-bold text-white">{c.title}</h2>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white/90 ring-1 ring-white/10">
                      {c.count}+ events
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-sky-300">
                      View events
                      <FaArrowRight className="transition group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            to="/events"
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.05] px-6 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.08]"
          >
            See all events
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
