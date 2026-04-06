import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import AuthLayout from "../components/AuthLayout";

export default function SignIn() {
  const [showPw, setShowPw] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const email = fd.get("email");
    const password = fd.get("password");
    console.log("Sign in:", { email, password });
  }

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to book events and manage your tickets."
      footer={
        <>
          New here?{" "}
          <Link
            to="/get-started"
            className="font-semibold text-sky-400 transition hover:text-sky-300"
          >
            Create an account
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/45"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-xl border border-white/[0.1] bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/20"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/45"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPw ? "text" : "password"}
              autoComplete="current-password"
              required
              placeholder="••••••••"
              className="w-full rounded-xl border border-white/[0.1] bg-black/40 py-3 pl-4 pr-12 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/20"
            />
            <button
              type="button"
              onClick={() => setShowPw((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-white/40 transition hover:bg-white/5 hover:text-white/80"
              aria-label={showPw ? "Hide password" : "Show password"}
            >
              {showPw ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 text-sm">
          <label className="flex cursor-pointer items-center gap-2 text-white/55">
            <input
              name="remember"
              type="checkbox"
              className="h-4 w-4 rounded border-white/20 bg-black/40 text-sky-500 focus:ring-sky-500/30"
            />
            Remember me
          </label>
          <a
            href="#"
            className="text-sky-400/90 transition hover:text-sky-300"
            onClick={(e) => e.preventDefault()}
          >
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-sky-500 to-sky-400 py-3.5 text-sm font-semibold text-white shadow-[0_8px_32px_-8px_rgba(56,189,248,0.45)] transition hover:scale-[1.01] hover:shadow-[0_12px_40px_-8px_rgba(56,189,248,0.55)] active:scale-[0.99]"
        >
          Sign in
        </button>
      </form>
    </AuthLayout>
  );
}
