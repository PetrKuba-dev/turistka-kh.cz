import { useRef, useState, type KeyboardEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import type { NewsItem } from '../../types/news';
import Container from '../ui/Container';
import FadeIn from '../ui/FadeIn';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import CarouselNav from './newsShowcase/CarouselNav';
import NewsCardStack from './newsShowcase/NewsCardStack';
import NewsTextPanel from './newsShowcase/NewsTextPanel';
import {
  buildNavContext,
  getVisibleItems,
  type NavContext,
  type NavDirection,
} from './newsShowcase/newsShowcaseMotion';

interface NewsShowcaseProps {
  items: NewsItem[];
}

const TEXT_PANEL_ID = 'news-showcase-panel';

export default function NewsShowcase({ items }: NewsShowcaseProps) {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [activeIndex, setActiveIndex] = useState(0);
  const [swipeHintDismissed, setSwipeHintDismissed] = useState(false);
  const navContextRef = useRef<NavContext | null>(null);

  if (items.length === 0) {
    return null;
  }

  const activeItem = items[activeIndex];
  const visibleItems = getVisibleItems(items, activeIndex);
  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < items.length - 1;
  const enableSwipe = !isDesktop && !prefersReducedMotion && items.length > 1;
  const showSwipeHint = enableSwipe && !swipeHintDismissed;

  const clearNavContext = () => {
    navContextRef.current = null;
  };

  const navigate = (toIndex: number, direction: NavDirection) => {
    if (isDesktop) {
      navContextRef.current = buildNavContext(items, activeIndex, toIndex, direction);
    }
    setActiveIndex(toIndex);
  };

  const goTo = (toIndex: number) => {
    if (toIndex === activeIndex) return;
    navigate(toIndex, toIndex > activeIndex ? 1 : -1);
  };

  const goPrev = () => {
    if (!canGoPrev) return;
    navigate(activeIndex - 1, -1);
  };

  const goNext = () => {
    if (!canGoNext) return;
    navigate(activeIndex + 1, 1);
  };

  const handleSwipePrev = () => {
    if (!canGoPrev) return;
    setSwipeHintDismissed(true);
    goPrev();
  };

  const handleSwipeNext = () => {
    if (!canGoNext) return;
    setSwipeHintDismissed(true);
    goNext();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goPrev();
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goNext();
    }
  };

  return (
    <Section background="cream">
      <Container size="default">
        <FadeIn>
          <SectionHeading
            title={t('home.news.title')}
            subtitle={t('home.news.subtitle')}
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label={t('home.news.title')}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className="outline-none focus-visible:ring-2 focus-visible:ring-cocoa/25 rounded-xl"
          >
            <p className="sr-only" aria-live="polite" aria-atomic="true">
              {t('home.news.slideAnnouncement', {
                title: t(activeItem.titleKey),
                current: activeIndex + 1,
                total: items.length,
              })}
            </p>

            <div className="">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
                <div className="order-2 lg:order-1 flex h-full">
                  <NewsTextPanel item={activeItem} id={TEXT_PANEL_ID} />
                </div>

                <div className="sm:px-6 order-1 lg:order-2 lg:flex lg:justify-end">
                  <div className="relative w-full max-w-md sm:max-w-sm aspect-[4/3] mx-auto lg:mx-0 overflow-visible">
                    <NewsCardStack
                      isDesktop={isDesktop}
                      activeItem={activeItem}
                      visibleItems={visibleItems}
                      navContext={navContextRef.current}
                      onTransitionEnd={clearNavContext}
                      enableSwipe={enableSwipe}
                      canSwipePrev={canGoPrev}
                      canSwipeNext={canGoNext}
                      onSwipePrev={handleSwipePrev}
                      onSwipeNext={handleSwipeNext}
                      showSwipeHint={showSwipeHint}
                    />
                  </div>
                </div>
              </div>

              <CarouselNav
                items={items}
                activeIndex={activeIndex}
                textPanelId={TEXT_PANEL_ID}
                onSelect={goTo}
                onPrev={goPrev}
                onNext={goNext}
              />
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
