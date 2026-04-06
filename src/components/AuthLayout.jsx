import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";

export default function AuthLayout({ title, subtitle, children, footer }) {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden px-4 py-12 md:py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="bme-shimmer bme-ambient absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-500/20 via-indigo-500/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-md">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/45 transition hover:text-white/90"
        >
          <span aria-hidden>←</span> Back to home
        </Link>

        <div className="overflow-hidden rounded-[1.75rem] border border-white/[0.1] bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-8 shadow-[0_0_0_1px_rgba(56,189,248,0.06),0_32px_64px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl md:p-10">
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="mb-4">
              <BrandLogo size="auth" alt="" />
            </div>
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-2 text-sm text-white/50">{subtitle}</p>
            ) : null}
          </div>

          {children}

          {footer ? (
            <div className="mt-8 border-t border-white/[0.08] pt-6 text-center text-sm text-white/45">
              {footer}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
