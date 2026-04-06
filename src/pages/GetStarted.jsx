import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import AuthLayout from "../components/AuthLayout";

export default function GetStarted() {
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    console.log("Sign up:", {
      name: data.name,
      email: data.email,
      agree: data.agree,
    });
  }

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Join BookMyEvent and start booking unforgettable events."
      footer={
        <>
          Already have an account?{" "}
          <Link
            to="/sign-in"
            className="font-semibold text-sky-400 transition hover:text-sky-300"
          >
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/45"
          >
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Ahmad Khan"
            className="w-full rounded-xl border border-white/[0.1] bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/20"
          />
        </div>

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
              autoComplete="new-password"
              required
              minLength={8}
              placeholder="At least 8 characters"
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

        <div>
          <label
            htmlFor="confirmPassword"
            className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/45"
          >
            Confirm password
          </label>
          <div className="relative">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showPw2 ? "text" : "password"}
              autoComplete="new-password"
              required
              placeholder="Repeat password"
              className="w-full rounded-xl border border-white/[0.1] bg-black/40 py-3 pl-4 pr-12 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/20"
            />
            <button
              type="button"
              onClick={() => setShowPw2((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-white/40 transition hover:bg-white/5 hover:text-white/80"
              aria-label={showPw2 ? "Hide password" : "Show password"}
            >
              {showPw2 ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
            </button>
          </div>
        </div>

        <label className="flex cursor-pointer items-start gap-3 text-sm text-white/55">
          <input
            name="agree"
            type="checkbox"
            required
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-black/40 text-sky-500 focus:ring-sky-500/30"
          />
          <span>
            I agree to the{" "}
            <a
              href="#"
              className="text-sky-400/90 underline-offset-2 hover:underline"
              onClick={(e) => e.preventDefault()}
            >
              Terms
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-sky-400/90 underline-offset-2 hover:underline"
              onClick={(e) => e.preventDefault()}
            >
              Privacy Policy
            </a>
            .
          </span>
        </label>

        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-sky-500 to-sky-400 py-3.5 text-sm font-semibold text-white shadow-[0_8px_32px_-8px_rgba(56,189,248,0.45)] transition hover:scale-[1.01] hover:shadow-[0_12px_40px_-8px_rgba(56,189,248,0.55)] active:scale-[0.99]"
        >
          Create account
        </button>
      </form>
    </AuthLayout>
  );
}
