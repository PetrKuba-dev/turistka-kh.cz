import { useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useAnimation } from 'framer-motion';
import './index.css';
import './i18n';

import Layout from './Layout';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const langFade = { duration: 0.15 };

export default function App() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);
  const controls = useAnimation();

  const handleLanguageChange = useCallback(
    async (lang: string) => {
      if (lang === currentLang) return;

      await controls.start({ opacity: 0, transition: langFade });
      i18n.changeLanguage(lang);
      setCurrentLang(lang);
      await controls.start({ opacity: 1, transition: langFade });
    },
    [i18n, currentLang, controls],
  );

  return (
    <motion.div
      animate={controls}
      initial={{ opacity: 1 }}
      className="min-h-screen flex flex-col bg-cream"
    >
      <Header
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
      />
      <main className="flex-1">
        <Routes>
          <Route path="*" element={<Layout />} />
        </Routes>
      </main>
      <Footer />
    </motion.div>
  );
}
