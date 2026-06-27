import type { NewsItem } from '../../../types/news';

export type NavDirection = 1 | -1;

export interface NavContext {
  direction: NavDirection;
  addedIds: Set<string>;
  removedIds: Set<string>;
}

export const CARD_TRANSITION = { duration: 0.45, ease: [0.4, 0, 0.2, 1] as const };
export const TEXT_TRANSITION = { duration: 0.25, ease: 'easeOut' as const };
export const MOBILE_CARD_TRANSITION = TEXT_TRANSITION;

export const FAN_MOTION = {
  0: { rotate: 0, scale: 1, opacity: 1, filter: 'blur(0px)', zIndex: 30 },
  1: { rotate: 6, scale: 0.94, opacity: 0.7, filter: 'blur(1px)', zIndex: 20 },
  2: { rotate: 12, scale: 0.88, opacity: 0.5, filter: 'blur(2px)', zIndex: 10 },
} as const;

export const FAN_SHADOWS = ['shadow-lg', 'shadow-md', 'shadow-sm'] as const;

export const SWIPE_OFFSCREEN_LEFT = {
  rotate: -14,
  scale: 1.06,
  opacity: 0,
  filter: 'blur(4px)',
  x: -20,
};

export const EXIT_BACKWARD = {
  rotate: 14,
  scale: 0.82,
  opacity: 0,
  filter: 'blur(4px)',
  x: 20,
};

const CARDS_BEHIND_AT_START = 2;
const CARDS_BEHIND = 1;

type FanOffset = 0 | 1 | 2;

function clampFanOffset(offset: number): FanOffset {
  return Math.min(Math.max(offset, 0), 2) as FanOffset;
}

export function getFanCount(activeIndex: number, total: number): number {
  const cardsBehind = activeIndex === 0 ? CARDS_BEHIND_AT_START : CARDS_BEHIND;
  return Math.min(cardsBehind + 1, total - activeIndex);
}

export function getVisibleItems(allItems: NewsItem[], activeIndex: number): NewsItem[] {
  return allItems.slice(activeIndex, activeIndex + getFanCount(activeIndex, allItems.length));
}

export function getFanMotion(offset: number) {
  return FAN_MOTION[clampFanOffset(offset)];
}

export function getFanShadow(offset: number) {
  return FAN_SHADOWS[clampFanOffset(offset)];
}

export function buildNavContext(
  allItems: NewsItem[],
  fromIndex: number,
  toIndex: number,
  direction: NavDirection,
): NavContext {
  const oldItems = getVisibleItems(allItems, fromIndex);
  const newItems = getVisibleItems(allItems, toIndex);
  const newIds = new Set(newItems.map((item) => item.id));

  return {
    direction,
    addedIds: new Set(newItems.filter((item) => !oldItems.some((old) => old.id === item.id)).map((item) => item.id)),
    removedIds: new Set(oldItems.filter((item) => !newIds.has(item.id)).map((item) => item.id)),
  };
}

export function getDesktopCardInitial(navContext: NavContext | null, itemId: string, offset: number) {
  if (!navContext?.addedIds.has(itemId)) return false;

  if (navContext.direction === -1 && offset === 0) {
    return SWIPE_OFFSCREEN_LEFT;
  }

  if (navContext.direction === 1 && offset > 0) {
    const motion = getFanMotion(offset);
    return { ...motion, opacity: 0, x: 0 };
  }

  return false;
}

export function getDesktopCardExit(navContext: NavContext | null, itemId: string) {
  if (navContext?.removedIds.has(itemId) && navContext.direction === -1) {
    return EXIT_BACKWARD;
  }
  return SWIPE_OFFSCREEN_LEFT;
}
