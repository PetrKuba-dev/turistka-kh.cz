import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import logo from '../../../public/img/logo.png';

interface HeaderProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm sm:text-base transition-colors duration-300 ${
    isActive
      ? 'text-espresso font-medium'
      : 'text-cocoa/80 hover:text-espresso'
  }`;

export default function Header({ currentLang, onLanguageChange }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { to: '/', label: t('nav.home') },
    { to: '/menu', label: t('nav.menu') },
    { to: '/o-nas', label: t('nav.about') },
    { to: '/kontakt', label: t('nav.contact') },
  ];

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-cream/95 backdrop-blur-sm border-b border-stone/40 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 font-brand uppercase text-xl sm:text-2xl text-espresso tracking-tight hover:text-cocoa transition-colors tracking-wide"
     
        >
          <img src={logo} alt="Turistka" className="w-12 h-12" />
          Turistka
        </Link>

        <div className="hidden sm:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <LanguageSwitcher
            currentLang={currentLang}
            onChange={onLanguageChange}
          />
        </div>

        <div className="sm:hidden flex items-center gap-3">
          <LanguageSwitcher
            currentLang={currentLang}
            onChange={onLanguageChange}
          />
          <motion.button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-cocoa"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X strokeWidth={1.5} className="w-6 h-6" />
            ) : (
              <Menu strokeWidth={1.5} className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden border-t border-stone/40 overflow-hidden bg-cream"
          >
            <nav className="px-5 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={navLinkClass}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
