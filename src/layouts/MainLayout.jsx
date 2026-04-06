import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Connect from "../components/Connect";

/**
 * Outlet must not sit inside AnimatePresence+changing key the way we had it —
 * that pattern often yields a blank screen with React Router. We animate a
 * lightweight wrapper keyed by location instead.
 */
export default function MainLayout() {
  const location = useLocation();
  const key = `${location.pathname}${location.search}`;

  return (
    <>
      <motion.div
        key={key}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="min-h-[50vh]"
      >
        <Outlet />
      </motion.div>
      <Connect />
    </>
  );
}
