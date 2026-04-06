import { Link, NavLink, useLocation } from "react-router-dom";
import BrandLogo from "./BrandLogo";

function Navbar() {
  const { pathname } = useLocation();

  const linkClass = ({ isActive }) =>
    [
      "bme-nav-link transition-colors",
      isActive ? "text-white" : "text-white/40 hover:text-white/95",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-black/0 supports-[backdrop-filter]:bg-black/25 backdrop-blur-2xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 md:py-4">
        <Link
          to="/"
          className="group flex items-center gap-3 transition-opacity duration-300 hover:opacity-95"
        >
          <BrandLogo size="nav" />
          <div className="leading-tight">
            <div className="text-base font-semibold tracking-tight text-white md:text-lg">
              Book<span className="text-sky-400">My</span>Event
            </div>
            <div className="text-[11px] font-medium tracking-wide text-white/35 md:text-xs">
              Your event. One click away.
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-[13px] font-medium tracking-wide md:flex">
          <NavLink className={linkClass} to="/" end>
            Home
          </NavLink>
          <NavLink className={linkClass} to="/events">
            Events
          </NavLink>
          <NavLink className={linkClass} to="/categories">
            Categories
          </NavLink>
          <NavLink className={linkClass} to="/create-events">
            Create Events
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/sign-in"
            className="hidden rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-[13px] font-medium text-white/50 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06] hover:text-white/95 sm:inline-flex"
          >
            Sign in
          </Link>
          <Link
            to="/get-started"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-sky-400 px-5 py-2 text-[13px] font-semibold text-white shadow-[0_0_0_1px_rgba(56,189,248,0.15),0_8px_32px_-8px_rgba(56,189,248,0.35)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_0_1px_rgba(56,189,248,0.25),0_12px_40px_-8px_rgba(56,189,248,0.45)]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
