import { Link } from "react-router-dom";
import { TbInbox } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import BrandLogo from "./BrandLogo";
import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";



function Connect() {
  return (
    <>
      <footer id="connect" className="scroll-mt-24 bg-[#020203] py-0 text-white">
        <SectionDivider label="Connect" />
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 md:pb-20 md:pt-12">
          <div className="grid gap-10 md:grid-cols-4">
            <ScrollReveal className="md:col-span-1">
              <div className="flex items-center gap-3">
                <BrandLogo size="footer" />
                <div className="leading-tight">
                  <div className="text-lg font-semibold">
                    Book<span className="text-sky-400">My</span>Event
                  </div>
                  <div className="text-xs text-white/60">
                    Your event. One click away.
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm text-white/65">
                Your gateway to unforgettable experiences. Discover, book, and
                enjoy the best events in your city.
              </p>

              <div className="mt-4 flex items-center gap-2 text-white/80">
                <a
                  href="#"
                  className="rounded-full bg-white/10 p-2 transition hover:bg-white/15"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="rounded-full bg-white/10 p-2 transition hover:bg-white/15"
                  aria-label="Twitter"
                >
                  <CiTwitter />
                </a>
                <a
                  href="#"
                  className="rounded-full bg-white/10 p-2 transition hover:bg-white/15"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="rounded-full bg-white/10 p-2 transition hover:bg-white/15"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={80}>
              <div className="text-sm font-semibold text-white">Quick Links</div>
              <div className="mt-4 flex flex-col items-start gap-2 text-sm text-white/65">
                <Link className="hover:text-sky-300" to="/">
                  Home
                </Link>
                <Link className="hover:text-sky-300" to="/events">
                  Events
                </Link>
                <Link className="hover:text-sky-300" to="/categories">
                  Categories
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={140}>
              <div className="text-sm font-semibold text-white">Support</div>
              <div className="mt-4 flex flex-col items-start gap-2 text-sm text-white/65">
                <Link className="hover:text-sky-300" to="/create-events">
                  Become a promoter
                </Link>
                <Link className="hover:text-sky-300" to="/events">
                  Browse events
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={200}>
              <div className="text-sm font-semibold text-white">
                Connect with us
              </div>
              <div className="mt-4 space-y-3 text-sm text-white/65">
                <div className="flex items-center gap-2">
                  <TbInbox className="text-lg text-white/70" />
                  <a className="hover:text-sky-300" href="mailto:contact@bookmyevent.com">
                    contact@bookmyevent.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <TbWorld className="text-lg text-white/70" />
                  <a className="hover:text-sky-300" href="#">
                    www.bookmyevent.com
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-12 h-px w-full bg-white/10" />

          <div className="mt-6 text-center text-xs text-white/50">
            © {new Date().getFullYear()} BookMyEvent. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
export default Connect;
