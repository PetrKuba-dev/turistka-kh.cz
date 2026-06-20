import { useState, useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './index.css';
import './i18n';

import Layout from './Layout';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import HomePage from './pages/Home';
import MenuPage from './pages/Menu';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';

export default function App() {
  const location = useLocation();
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const handleLanguageChange = useCallback(
    (lang: string) => {
      i18n.changeLanguage(lang);
      setCurrentLang(lang);
    },
    [i18n],
  );

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Header
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
      />
      <main className="flex-1">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/o-nas" element={<AboutPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
