import { Fragment, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { menuCategories } from '../../data/menu';
import type { MenuCategoryId } from '../../types/menu';

function getScrollOffset() {
  const headerHeight = window.matchMedia('(min-width: 640px)').matches ? 80 : 64;
  return headerHeight + 48;
}

const linkBaseClass =
  'inline-block px-2 sm:px-3 py-1.5 text-sm border-b transition-colors whitespace-nowrap';
const linkActiveClass = 'text-espresso border-stone/60';
const linkInactiveClass =
  'text-cocoa/80 border-transparent hover:text-espresso hover:border-stone/60';

export default function MenuCategoryNav() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<MenuCategoryId>(menuCategories[0].id);
  const linkRefs = useRef(new Map<MenuCategoryId, HTMLAnchorElement>());

  useEffect(() => {
    const updateActive = () => {
      const offset = getScrollOffset();
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
    linkRefs.current.get(activeId)?.scrollIntoView({
      inline: 'nearest',
      block: 'nearest',
    });
  }, [activeId]);

  return (
    <nav
      aria-label={t('menu.nav.label')}
      className="sticky top-16 sm:top-20 z-40 bg-cream/95 backdrop-blur-sm border-b border-stone/40"
    >
      <div className="overflow-x-auto overscroll-x-contain px-5 sm:px-8 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <ul className="mx-auto flex w-max items-center py-3">
          {menuCategories.map((category, index) => {
            const isActive = activeId === category.id;

            return (
              <Fragment key={category.id}>
                {index > 0 && (
                  <li
                    className="flex shrink-0 items-center self-center px-2 sm:px-2.5"
                    aria-hidden="true"
                  >
                    <span className="size-0.5 rounded-full bg-stone/70" />
                  </li>
                )}
                <li className="shrink-0">
                  <a
                    ref={(el) => {
                      if (el) linkRefs.current.set(category.id, el);
                      else linkRefs.current.delete(category.id);
                    }}
                    href={`#menu-${category.id}`}
                    aria-current={isActive ? 'location' : undefined}
                    className={`${linkBaseClass} ${isActive ? linkActiveClass : linkInactiveClass}`}
                  >
                    {t(category.titleKey)}
                  </a>
                </li>
              </Fragment>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
