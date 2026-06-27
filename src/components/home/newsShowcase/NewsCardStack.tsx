import { AnimatePresence, motion } from 'framer-motion';
import { ChevronsLeftRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { NewsItem } from '../../../types/news';
import NewsCardImage from './NewsCardImage';
import {
  CARD_TRANSITION,
  getDesktopCardExit,
  getDesktopCardInitial,
  getFanMotion,
  getFanShadow,
  MOBILE_CARD_TRANSITION,
  type NavContext,
} from './newsShowcaseMotion';

interface NewsCardStackProps {
  isDesktop: boolean;
  activeItem: NewsItem;
  visibleItems: NewsItem[];
  navContext: NavContext | null;
  onTransitionEnd: () => void;
  enableSwipe?: boolean;
  canSwipePrev?: boolean;
  canSwipeNext?: boolean;
  onSwipePrev?: () => void;
  onSwipeNext?: () => void;
  showSwipeHint?: boolean;
}

const SWIPE_THRESHOLD = 48;

export default function NewsCardStack({
  isDesktop,
  activeItem,
  visibleItems,
  navContext,
  onTransitionEnd,
  enableSwipe = false,
  canSwipePrev = false,
  canSwipeNext = false,
  onSwipePrev,
  onSwipeNext,
  showSwipeHint = false,
}: NewsCardStackProps) {
  const { t } = useTranslation();

  if (isDesktop) {
    return (
      <AnimatePresence initial={false} onExitComplete={onTransitionEnd}>
        {visibleItems.map((item, offset) => {
          const fanMotion = getFanMotion(offset);

          return (
            <motion.div
              key={item.id}
              className="absolute inset-0 origin-bottom-right"
              style={{ zIndex: fanMotion.zIndex }}
              initial={getDesktopCardInitial(navContext, item.id, offset)}
              animate={{
                rotate: fanMotion.rotate,
                scale: fanMotion.scale,
                opacity: fanMotion.opacity,
                filter: fanMotion.filter,
                x: 0,
              }}
              exit={getDesktopCardExit(navContext, item.id)}
              transition={CARD_TRANSITION}
              onAnimationComplete={onTransitionEnd}
            >
              <NewsCardImage item={item} shadowClassName={getFanShadow(offset)} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    );
  }

  return (
    <>
      <AnimatePresence initial={false} mode="wait" onExitComplete={onTransitionEnd}>
        <motion.div
          key={activeItem.id}
          className="absolute inset-0 touch-pan-y cursor-grab active:cursor-grabbing"
          drag={enableSwipe ? 'x' : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.14}
          dragMomentum={false}
          onDragEnd={(_, { offset, velocity }) => {
            const swipePower = offset.x + velocity.x * 0.15;

            if (swipePower < -SWIPE_THRESHOLD && canSwipeNext) {
              onSwipeNext?.();
              return;
            }

            if (swipePower > SWIPE_THRESHOLD && canSwipePrev) {
              onSwipePrev?.();
            }
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={MOBILE_CARD_TRANSITION}
          onAnimationComplete={onTransitionEnd}
        >
          <NewsCardImage item={activeItem} />
        </motion.div>
      </AnimatePresence>

      {showSwipeHint && (
        <div
          className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center"
          aria-hidden="true"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-espresso/55 px-3 py-1.5 text-[11px] uppercase tracking-widest text-cream/90 backdrop-blur-sm animate-pulse">
            <ChevronsLeftRight size={13} strokeWidth={1.5} />
            {t('home.news.swipeHint')}
          </span>
        </div>
      )}
    </>
  );
}
