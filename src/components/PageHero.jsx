import { motion } from "framer-motion";

export default function PageHero({ badge, title, subtitle, children }) {
  return (
    <div className="relative overflow-hidden border-b border-white/[0.06] bg-black">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-500/[0.12] via-transparent to-transparent" />
      <div className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-14 md:pb-16 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          {badge ? (
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-sky-400/90">
              {badge}
            </span>
          ) : null}
          <h1 className="mt-2 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mx-auto mt-3 max-w-2xl text-pretty text-base text-white/55 md:text-lg">
              {subtitle}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </motion.div>
      </div>
    </div>
  );
}
