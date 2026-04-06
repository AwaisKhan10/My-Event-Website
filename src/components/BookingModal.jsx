import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark } from "react-icons/fa6";
import { formatEventDate } from "../data/mockEvents";
import { getCategoryById } from "../data/categoriesData";
import { formatPriceFromPkr, usdFromPkr, formatUsd } from "../constants/pricing";

export default function BookingModal({ event, onClose }) {
  const [qty, setQty] = useState(1);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setQty(1);
    setDone(false);
  }, [event?.id]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  if (!event) return null;

  const max = Math.max(1, Math.min(event.spotsLeft, 10));
  const safeQty = Math.min(Math.max(1, qty), max);
  const cat = getCategoryById(event.categoryId);
  const unitUsd = usdFromPkr(event.price);
  const totalUsd = event.price <= 0 ? 0 : unitUsd * safeQty;

  function confirm() {
    console.log("Booking confirmed:", {
      eventId: event.id,
      title: event.title,
      qty: safeQty,
      totalUsd,
      totalPkr: event.price <= 0 ? 0 : event.price * safeQty,
    });
    setDone(true);
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <button
          type="button"
          className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          aria-label="Close"
          onClick={onClose}
        />
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ type: "spring", damping: 26, stiffness: 320 }}
          className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0a0a0c] shadow-2xl"
        >
          <div className="flex items-start justify-between border-b border-white/[0.08] p-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-400/90">
                {cat?.title ?? "Event"}
              </p>
              <h2 id="booking-title" className="mt-1 text-lg font-semibold text-white">
                {event.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 text-white/50 transition hover:bg-white/10 hover:text-white"
              aria-label="Close"
            >
              <FaXmark className="text-xl" />
            </button>
          </div>

          {!done ? (
            <div className="p-4">
              <div className="aspect-video w-full overflow-hidden rounded-xl">
                <img
                  src={event.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-3 text-sm text-white/55">
                {formatEventDate(event.date)} · {event.time}
              </p>
              <p className="text-sm text-white/55">
                {event.venue} · {event.city}
              </p>

              <div className="mt-4 rounded-xl border border-white/[0.08] bg-white/[0.04] p-3">
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Price (each)</span>
                  <span className="font-semibold text-white">
                    {formatPriceFromPkr(event.price).primary}
                  </span>
                </div>
                {formatPriceFromPkr(event.price).sub ? (
                  <p className="mt-1 text-right text-xs text-white/40">
                    {formatPriceFromPkr(event.price).sub}
                  </p>
                ) : null}
              </div>

              {event.price > 0 ? (
                <label className="mt-4 block">
                  <span className="text-xs font-medium uppercase tracking-wider text-white/45">
                    Tickets
                  </span>
                  <input
                    type="number"
                    min={1}
                    max={max}
                    value={safeQty}
                    onChange={(e) => setQty(parseInt(e.target.value, 10) || 1)}
                    className="mt-1.5 w-full rounded-xl border border-white/[0.1] bg-black/50 px-4 py-3 text-sm text-white outline-none focus:border-sky-500/40"
                  />
                  <span className="mt-1 block text-xs text-white/40">
                    Max {max} for this demo
                  </span>
                </label>
              ) : null}

              <div className="mt-4 flex items-center justify-between border-t border-white/[0.08] pt-4">
                <span className="text-sm text-white/60">Total (USD)</span>
                <span className="text-xl font-bold text-white">
                  {event.price <= 0 ? "Free" : formatUsd(totalUsd)}
                </span>
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 rounded-xl border border-white/[0.12] py-3 text-sm font-semibold text-white/85 transition hover:bg-white/[0.06]"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={confirm}
                  className="flex-1 rounded-xl bg-gradient-to-r from-sky-500 to-sky-400 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                >
                  {event.price <= 0 ? "Confirm" : "Pay & confirm"}
                </button>
              </div>
            </div>
          ) : (
            <div className="p-6 text-center">
              <p className="text-lg font-semibold text-white">You’re booked!</p>
              <p className="mt-2 text-sm text-white/55">
                Demo only — no payment taken. Check the console for details.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-6 w-full rounded-xl bg-gradient-to-r from-sky-500 to-sky-400 py-3 text-sm font-semibold text-white"
              >
                Done
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
