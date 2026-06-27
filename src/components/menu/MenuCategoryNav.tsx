import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { menuCategories } from '../../data/menu';
import type { MenuCategoryId } from '../../types/menu';

/** Subpixel / browser rounding slack when matching anchor scroll position */
const SCROLL_OFFSET_TOLERANCE = 10;

function getScrollOffset() {
  const anchor = document.getElementById(`menu-${menuCategories[0].id}`);
  if (anchor) {
    const margin = parseFloat(getComputedStyle(anchor).scrollMarginTop);
    if (!Number.isNaN(margin) && margin > 0) return margin;
  }

  // Fallback — must match scroll-mt-* on MenuCategorySection
  return window.matchMedia('(min-width: 640px)').matches ? 160 : 144;
}

const tabBaseClass =
  'rounded-full px-4 py-1 text-sm leading-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cocoa/30 whitespace-nowrap';

function centerActiveLink(
  container: HTMLDivElement,
  link: HTMLAnchorElement,
) {
  if (container.scrollWidth <= container.clientWidth) return;

  const containerRect = container.getBoundingClientRect();
  const linkRect = link.getBoundingClientRect();
  const scrollLeft =
    container.scrollLeft +
    (linkRect.left - containerRect.left) -
    containerRect.width / 2 +
    linkRect.width / 2;

  container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
}

export default function MenuCategoryNav() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<MenuCategoryId>(menuCategories[0].id);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef(new Map<MenuCategoryId, HTMLAnchorElement>());

  useEffect(() => {
    const updateActive = () => {
      setIsScrolled(window.scrollY > 0);

      const offset = getScrollOffset() + SCROLL_OFFSET_TOLERANCE;
      let current = menuCategories[0].id;

      for (const category of menuCategories) {
        const el = document.getElementById(`menu-${category.id}`);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = category.id;
        }
      }

      setActiveId(current);
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, []);

  useEffect(() => {
    if (!window.matchMedia('(max-width: 639px)').matches) return;

    const container = scrollRef.current;
    const link = linkRefs.current.get(activeId);
    if (container && link) centerActiveLink(container, link);
  }, [activeId]);

  return (
    <nav
      aria-label={t('menu.nav.label')}
      className={`sticky top-16 sm:top-20 z-40 bg-sand/90 backdrop-blur-sm border-b border-sage/25 transition-shadow ${isScrolled ? 'shadow-sm' : ''}`}
    >
      <div
        ref={scrollRef}
        className="overflow-x-auto overscroll-x-contain px-5 sm:px-8 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <ul className="mx-auto flex w-max flex-wrap items-center justify-center gap-1.5 py-4">
          {menuCategories.map((category) => {
            const isActive = activeId === category.id;

            return (
              <li key={category.id} className="shrink-0">
                <a
                  ref={(el) => {
                    if (el) linkRefs.current.set(category.id, el);
                    else linkRefs.current.delete(category.id);
                  }}
                  href={`#menu-${category.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={`${tabBaseClass} ${
                    isActive
                      ? 'bg-sage/80 text-cream shadow-sm'
                      : 'text-sage/70 hover:text-sage hover:bg-sage/8'
                  }`}
                >
                  {t(category.titleKey)}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
