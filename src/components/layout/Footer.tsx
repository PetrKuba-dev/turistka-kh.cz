import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from '../ui/Container';

export default function Footer() {
  const { t } = useTranslation();

  const navItems = [
    { to: '/', label: t('nav.home') },
    { to: '/menu', label: t('nav.menu') },
    { to: '/o-nas', label: t('nav.about') },
    { to: '/kontakt', label: t('nav.contact') },
  ];

  return (
    <footer className="bg-sand border-t border-stone/50 py-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-cocoa/80 text-sm">
          <div className="text-center md:text-left">
            <p className="font-serif text-xl text-espresso mb-1">Turistka</p>
            <p className="text-cocoa/70">{t('footer.tagline')}</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="hover:text-espresso transition-colors"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <p className="text-cocoa/60 text-center md:text-right">
            © {new Date().getFullYear()} Turistka. {t('footer.rights')}
          </p>
        </div>
      </Container>
    </footer>
  );
}
