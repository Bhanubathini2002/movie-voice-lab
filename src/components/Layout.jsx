import { useEffect } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";
import { ease } from "./Motion";

export default function Layout() {
  const location = useLocation();
  const outlet = useOutlet();

  useEffect(() => {
    if (!location.hash) window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname, location.hash]);

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          className="page"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.32, ease }}
        >
          {outlet}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}
