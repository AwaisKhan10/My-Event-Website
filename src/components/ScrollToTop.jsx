import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scroll window to top on client-side navigation (SPA default keeps old scroll). */
export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, search, hash]);

  return null;
}
