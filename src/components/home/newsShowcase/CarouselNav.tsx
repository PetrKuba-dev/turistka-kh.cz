import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { NewsItem } from '../../../types/news';

interface CarouselNavProps {
  items: NewsItem[];
  activeIndex: number;
  textPanelId: string;
  onSelect: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

const arrowButtonClass =
  'shrink-0 p-2 -m-1 text-cocoa/35 hover:text-cocoa disabled:text-cocoa/15 disabled:pointer-events-none transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cocoa/30 rounded-full';

const tabBaseClass =
  'rounded-full px-3 py-2 text-sm leading-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cocoa/30';

export default function CarouselNav({
  items,
  activeIndex,
  textPanelId,
  onSelect,
  onPrev,
  onNext,
}: CarouselNavProps) {
  const { t } = useTranslation();
  const count = items.length;

  if (count <= 1) {
    return null;
  }

  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < count - 1;

  return (
    <nav
      className="mt-12 pt-6 border-t border-stone/30 mx-auto max-w-full lg:max-w-fit"
      aria-label={t('home.news.navLabel')}
    >
      <div className="flex items-center gap-1 sm:gap-2">
        <button
          type="button"
          onClick={onPrev}
          disabled={!canGoPrev}
          aria-label={t('home.news.prev')}
          className={arrowButtonClass}
        >
          <ChevronLeft size={20} strokeWidth={1.5} aria-hidden="true" />
        </button>

        <div
          role="tablist"
          aria-label={t('home.news.tabsLabel')}
          className="flex flex-1 flex-wrap items-center justify-center gap-1.5 min-w-0"
        >
          {items.map((item, index) => {
            const isActive = index === activeIndex;
            const title = t(item.titleShortKey);

            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`news-tab-${item.id}`}
                aria-selected={isActive}
                aria-controls={textPanelId}
                aria-label={t('home.news.slideLabel', {
                  title,
                  current: index + 1,
                  total: count,
                })}
                onClick={() => onSelect(index)}
                className={`${tabBaseClass} ${
                  isActive
                    ? 'bg-sage/80 text-cream shadow-sm'
                    : 'text-sage/70 hover:text-sage hover:bg-sage/8'
                }`}
              >
                {title}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={onNext}
          disabled={!canGoNext}
          aria-label={t('home.news.next')}
          className={arrowButtonClass}
        >
          <ChevronRight size={20} strokeWidth={1.5} aria-hidden="true" />
        </button>
      </div>

      <p className="mt-3 text-center text-xs text-cocoa/50 tabular-nums tracking-wide">
        {t('home.news.slideOf', { current: activeIndex + 1, total: count })}
      </p>
    </nav>
  );
}
