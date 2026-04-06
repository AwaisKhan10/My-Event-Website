import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import PageHero from "../components/PageHero";
import { categories } from "../data/categoriesData";

const initial = {
  title: "",
  categoryId: "",
  date: "",
  time: "",
  venue: "",
  city: "Karachi",
  description: "",
  ticketPrice: "",
  capacity: "",
};

export default function CreateEventPage() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate() {
    const e = {};
    if (!form.title.trim()) e.title = "Title is required";
    if (!form.categoryId) e.categoryId = "Choose a category";
    if (!form.date) e.date = "Date is required";
    if (!form.time) e.time = "Time is required";
    if (!form.venue.trim()) e.venue = "Venue is required";
    if (!form.city.trim()) e.city = "City is required";
    if (!form.description.trim()) e.description = "Description is required";
    if (form.ticketPrice === "" || Number.isNaN(Number(form.ticketPrice)))
      e.ticketPrice = "Price is required (0 for free)";
    if (form.capacity && Number.isNaN(Number(form.capacity)))
      e.capacity = "Invalid number";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    if (!validate()) return;
    console.log("Create event:", {
      ...form,
      ticketPrice: Number(form.ticketPrice),
      capacity: form.capacity ? Number(form.capacity) : null,
    });
    setSubmitted(true);
  }

  function reset() {
    setForm(initial);
    setErrors({});
    setSubmitted(false);
  }

  return (
    <div className="min-h-screen bg-black pb-16">
      <PageHero
        badge="Organizers"
        title="Create an Event"
        subtitle="Publish your event on BookMyEvent. This form validates locally — connect your backend when you’re ready."
      />

      <div className="mx-auto max-w-2xl px-4 py-10">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-2xl border border-sky-500/30 bg-gradient-to-b from-sky-500/10 to-transparent p-8 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sky-500/20 text-sky-400">
                <FaCheck className="text-2xl" />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-white">
                Event draft saved
              </h2>
              <p className="mt-2 text-sm text-white/55">
                In production this would sync to your dashboard. For now it’s
                logged to the browser console.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <button
                  type="button"
                  onClick={reset}
                  className="rounded-xl border border-white/[0.12] bg-white/[0.05] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.1]"
                >
                  Create another
                </button>
                <Link
                  to="/events"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-sky-400 px-6 py-3 text-sm font-semibold text-white"
                >
                  <span>Browse events</span>
                  <FaArrowRight />
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-xl md:p-8"
            >
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/45">
                  Event title
                </label>
                <input
                  value={form.title}
                  onChange={(e) => update("title", e.target.value)}
                  className="w-full rounded-xl border border-white/[0.1] bg-black/50 px-4 py-3 text-sm text-white outline-none focus:border-sky-500/40 focus:ring-2 focus:ring-sky-500/20"
                  placeholder="e.g. Karachi Tech Night"
                />
                {errors.title ? (
                  <p className="mt-1 text-xs text-rose-400">{errors.title}</p>
                ) : null}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/45">
                    Category
                  </label>
                  <select
                    value={form.categoryId}
                    onChange={(e) => update("categoryId", e.target.value)}
                    className="w-full cursor-pointer rounded-xl border border-white/[0.1] bg-black/50 px-4 py-3 text-sm text-white outline-none focus:border-sky-500/40"
                  >
                    <option value="">Select category</option>
                    {categories.map((c) => (
                      <option key={c.id} value={c.id} className="bg-zinc-900">
                        {c.title}
                      </option>
                    ))}
                  </select>
                  {errors.categoryId ? (
                    <p className="mt-1 text-xs text-rose-400">
                      {errors.categoryId}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/45">
                    City
                  </label>
                  <input
                    value={form.city}
                    onChange={(e) => update("city", e.target.value)}
                    className="w-full rounded-xl border border-white/[0.1] bg-black/50 px-4 py-3 text-sm text-white outline-none focus:border-sky-500/40"
                  />
                  {errors.city ? (
                    <p className="mt-1 text-xs text-rose-400">{errors.city}</p>
                  ) : null}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/45">
                    Date
                  </label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                    className="w-full rounded-xl border border-white/[0.1] bg-black/50 px-4 py-3 text-sm text-white outline-none focus:border-sky-500/40"
                  />
                  {errors.date ? (
                    <p className="mt-1 text-xs text-rose-400">{errors.date}</p>
                  ) : null}
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/45">
                    Time
                  </label>
                  <input
                    type="time"
                    value={form.time}
                    onChange={(e) => update("time", e.target.value)}
                    className="w-full rounded-xl border border-white/[0.1] bg-black/50 px-4 py-3 text-sm text-white outline-none focus:border-sky-500/40"
                  />
                  {errors.time ? (
                    <p className="mt-1 text-xs text-rose-400">{errors.time}</p>
                  ) : null}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/45">
                  Venue
                </label>
                <input
                  value={form.venue}
                  onChange={(e) => update("venue", e.target.value)}
                  className="w-full rounded-xl border border-white/[0.1] bg-black/50 px-4 py-3 text-sm text-white outline-none focus:border-sky-500/40"
                  placeholder="e.g. Expo Center Hall A"
                />
                {errors.venue ? (
                  <p className="mt-1 text-xs text-rose-400">{errors.venue}</p>
                ) : null}
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/45">
                  Description
                </label>
                <textarea
                  value={form.description}
                  onChange={(e) => update("description", e.target.value)}
                  rows={4}
                  className="w-full resize-y rounded-xl border border-white/[0.1] bg-black/50 px-4 py-3 text-sm text-white outline-none focus:border-sky-500/40"
                  placeholder="What should attendees expect?"
                />
                {errors.description ? (
                  <p className="mt-1 text-xs text-rose-400">
                    {errors.description}
                  </p>
                ) : null}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/45">
                    Ticket price (PKR)
                  </label>
                  <input
                    inputMode="numeric"
                    value={form.ticketPrice}
                    onChange={(e) => update("ticketPrice", e.target.value)}
                    className="w-full rounded-xl border border-white/[0.1] bg-black/50 px-4 py-3 text-sm text-white outline-none focus:border-sky-500/40"
                    placeholder="0 for free"
                  />
                  {errors.ticketPrice ? (
                    <p className="mt-1 text-xs text-rose-400">
                      {errors.ticketPrice}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/45">
                    Capacity (optional)
                  </label>
                  <input
                    inputMode="numeric"
                    value={form.capacity}
                    onChange={(e) => update("capacity", e.target.value)}
                    className="w-full rounded-xl border border-white/[0.1] bg-black/50 px-4 py-3 text-sm text-white outline-none focus:border-sky-500/40"
                    placeholder="e.g. 500"
                  />
                  {errors.capacity ? (
                    <p className="mt-1 text-xs text-rose-400">
                      {errors.capacity}
                    </p>
                  ) : null}
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-sky-500 to-sky-400 py-3.5 text-sm font-semibold text-white shadow-[0_8px_32px_-8px_rgba(56,189,248,0.45)] transition hover:scale-[1.01]"
              >
                Publish Event
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
