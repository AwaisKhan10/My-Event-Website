import { useMemo, useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { TbLayoutGrid } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import PageHero from "../components/PageHero";
import BookingModal from "../components/BookingModal";
import { mockEvents, formatEventDate } from "../data/mockEvents";
import { categories, getCategoryById } from "../data/categoriesData";
import { getCityOptionsForUi } from "../data/citiesList";
import { useUserLocation } from "../context/LocationContext.jsx";
import { formatPriceFromPkr } from "../constants/pricing";

export default function EventsPage() {
  const { preferredCity } = useUserLocation();
  const cities = ["all", ...getCityOptionsForUi(preferredCity)];
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "";
  const [q, setQ] = useState("");
  const [city, setCity] = useState(preferredCity);
  const [userPickedCity, setUserPickedCity] = useState(false);
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    if (!userPickedCity) setCity(preferredCity);
  }, [preferredCity, userPickedCity]);

  const filtered = useMemo(() => {
    return mockEvents
      .filter((e) => {
        if (categoryParam && e.categoryId !== categoryParam) return false;
        if (city !== "all" && e.city !== city) return false;
        if (q.trim()) {
          const t = q.toLowerCase();
          return (
            e.title.toLowerCase().includes(t) ||
            e.venue.toLowerCase().includes(t)
          );
        }
        return true;
      })
      .sort((a, b) => a.date.localeCompare(b.date));
  }, [categoryParam, city, q]);

  function setCategory(next) {
    const p = new URLSearchParams(searchParams);
    if (next) p.set("category", next);
    else p.delete("category");
    setSearchParams(p);
  }

  function clearFilters() {
    setSearchParams({});
    setQ("");
    setUserPickedCity(false);
    setCity(preferredCity);
  }

  const activeCategory = categoryParam
    ? getCategoryById(categoryParam)
    : null;

  return (
    <div className="min-h-screen bg-black pb-8">
      <PageHero
        badge="Events"
        title="Find your next experience"
        subtitle="Prices in USD (PKR reference). Your default city is detected once and saved in this browser."
      />

      <div className="mx-auto max-w-7xl px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.45 }}
          className="grid grid-cols-1 gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-xl sm:p-5 lg:grid-cols-12 lg:items-end lg:gap-x-4 lg:gap-y-4"
        >
          <div className="flex min-w-0 flex-col gap-2 lg:col-span-5">
            <label className="text-xs font-medium uppercase tracking-wider text-white/40">
              Search
            </label>
            <div className="flex min-h-[46px] items-center gap-3 rounded-xl border border-white/[0.1] bg-black/50 px-3.5 py-2 sm:px-4">
              <CiSearch className="shrink-0 text-xl text-white/45" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Event name, venue..."
                className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/35"
              />
            </div>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5 lg:gap-4">
            <div className="flex min-w-0 flex-col gap-2">
              <label className="text-xs font-medium uppercase tracking-wider text-white/40">
                Category
              </label>
              <div className="flex min-h-[46px] min-w-0 items-center gap-3 rounded-xl border border-white/[0.1] bg-black/50 py-2 pl-3.5 pr-2 sm:pl-4 sm:pr-3 focus-within:border-sky-500/40 focus-within:ring-2 focus-within:ring-sky-500/20">
                <TbLayoutGrid
                  className="shrink-0 text-lg text-sky-400/85"
                  aria-hidden
                />
                <select
                  value={categoryParam}
                  onChange={(e) => setCategory(e.target.value)}
                  aria-label="Filter by category"
                  className="bme-filter-select min-w-0 flex-1 cursor-pointer bg-transparent py-0.5 pl-2 text-sm text-white outline-none"
                >
                  <option value="">All categories</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.id} className="bg-zinc-900">
                      {c.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex min-w-0 flex-col gap-2">
              <label className="text-xs font-medium uppercase tracking-wider text-white/40">
                City
              </label>
              <div className="flex min-h-[46px] min-w-0 items-center gap-3 rounded-xl border border-white/[0.1] bg-black/50 py-2 pl-3.5 pr-2 sm:pl-4 sm:pr-3 focus-within:border-sky-500/40 focus-within:ring-2 focus-within:ring-sky-500/20">
                <CiLocationOn
                  className="shrink-0 text-lg text-sky-400/85"
                  aria-hidden
                />
                <select
                  value={city}
                  onChange={(e) => {
                    setUserPickedCity(true);
                    setCity(e.target.value);
                  }}
                  aria-label="Filter by city"
                  className="bme-filter-select min-w-0 flex-1 cursor-pointer bg-transparent py-0.5 pl-2 text-sm text-white outline-none"
                >
                  {cities.map((c) => (
                    <option key={c} value={c} className="bg-zinc-900">
                      {c === "all" ? "All cities" : c}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2 lg:col-span-2 lg:justify-self-stretch">
            <span className="hidden text-xs font-medium uppercase tracking-wider text-transparent lg:block">
              &nbsp;
            </span>
            <button
              type="button"
              onClick={clearFilters}
              className="min-h-[46px] w-full rounded-xl border border-white/[0.1] bg-white/[0.05] px-4 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/[0.1] sm:w-auto lg:w-full"
            >
              Clear
            </button>
          </div>
        </motion.div>

        {activeCategory ? (
          <p className="mt-4 text-sm text-white/50">
            Showing{" "}
            <span className="font-semibold text-sky-400/90">
              {activeCategory.title}
            </span>{" "}
            ·{" "}
            <Link
              to="/categories"
              className="text-sky-400 underline-offset-2 hover:underline"
            >
              Browse all categories
            </Link>
          </p>
        ) : null}

        <p className="mt-6 text-sm text-white/40">
          {filtered.length} event{filtered.length !== 1 ? "s" : ""} found
          {city !== "all" ? (
            <span className="text-white/55">
              {" "}
              in <span className="text-sky-400/90">{city}</span>
            </span>
          ) : null}
        </p>

        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((ev, i) => {
            const cat = getCategoryById(ev.categoryId);
            const price = formatPriceFromPkr(ev.price);
            return (
              <motion.li
                key={ev.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.04 * Math.min(i, 12),
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                layout
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] shadow-[0_24px_48px_-28px_rgba(0,0,0,0.85)] transition hover:border-white/[0.14]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={ev.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-sky-300 ring-1 ring-white/10 backdrop-blur-md">
                    {cat?.title ?? "Event"}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h2 className="text-lg font-semibold text-white">
                    {ev.title}
                  </h2>
                  <p className="mt-1 text-sm text-white/50">
                    {formatEventDate(ev.date)} · {ev.time}
                  </p>
                  <p className="mt-1 text-sm text-white/55">
                    {ev.venue} · {ev.city}
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-2 border-t border-white/[0.06] pt-4">
                    <div>
                      <span className="text-xs text-white/40">From</span>
                      <p className="text-lg font-bold text-white">
                        {price.primary}
                      </p>
                      {price.sub ? (
                        <p className="text-[11px] text-white/40">{price.sub}</p>
                      ) : null}
                    </div>
                    <span className="text-xs text-white/45">
                      {ev.spotsLeft} spots left
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setBooking(ev)}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-sky-400 py-3 text-sm font-semibold text-white transition hover:scale-[1.01]"
                  >
                    Book now
                    <FaArrowRight className="text-xs" />
                  </button>
                </div>
              </motion.li>
            );
          })}
        </ul>

        {filtered.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 text-center text-white/50"
          >
            No events match your filters.{" "}
            <button
              type="button"
              onClick={clearFilters}
              className="font-semibold text-sky-400 hover:underline"
            >
              Clear filters
            </button>
          </motion.p>
        ) : null}
      </div>

      {booking ? (
        <BookingModal event={booking} onClose={() => setBooking(null)} />
      ) : null}
    </div>
  );
}
