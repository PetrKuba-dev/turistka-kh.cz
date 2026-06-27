import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import HomePage from './pages/Home';
import MenuPage from './pages/Menu';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';

const pageTransition = { duration: 0.35 };

function scrollTo(y: number) {
  window.scrollTo({ top: y, left: 0, behavior: 'instant' });
}

export default function Layout() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const scrollPositions = useRef(new Map<string, number>());
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (location.pathname === displayLocation.pathname) {
      setDisplayLocation(location);
    }
  }, [location, displayLocation]);

  const handleExitComplete = () => {
    if (location.pathname === displayLocation.pathname) {
      return;
    }

    scrollPositions.current.set(displayLocation.pathname, window.scrollY);

    flushSync(() => {
      setDisplayLocation(location);
    });

    if (navigationType === 'POP') {
      const y = scrollPositions.current.get(location.pathname) ?? 0;
      requestAnimationFrame(() => scrollTo(y));
    } else {
      scrollTo(0);
    }
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={pageTransition}
      >
        <Routes location={displayLocation} key={displayLocation.pathname}>
          <Route index element={<HomePage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="o-nas" element={<AboutPage />} />
          <Route path="kontakt" element={<ContactPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}
