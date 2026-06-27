import { useEffect, useRef, type KeyboardEvent } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import type { GalleryImage } from '../../../types/gallery';

interface GalleryLightboxProps {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
}

const SWIPE_THRESHOLD = 48;

const arrowButtonClass =
  'shrink-0 p-2 text-cream/70 hover:text-cream disabled:text-cream/25 disabled:pointer-events-none transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/40 rounded-full';

const IMAGE_TRANSITION = { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const };

export default function GalleryLightbox({
  images,
  index,
  onClose,
  onChange,
}: GalleryLightboxProps) {
  const { t } = useTranslation();
  const dialogRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const enableSwipe = !prefersReducedMotion && images.length > 1;

  const count = images.length;
  const currentImage = images[index];
  const canGoPrev = index > 0;
  const canGoNext = index < count - 1;

  const goPrev = () => {
    if (canGoPrev) onChange(index - 1);
  };

  const goNext = () => {
    if (canGoNext) onChange(index + 1);
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    dialogRef.current?.focus();
  }, []);

  useEffect(() => {
    const preload = (targetIndex: number) => {
      const src = images[targetIndex]?.src;
      if (!src) return;
      const img = new Image();
      img.src = src;
    };

    preload(index + 1);
    preload(index - 1);
  }, [images, index]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      onClose();
      return;
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goPrev();
      return;
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goNext();
    }
  };

  if (!currentImage?.src) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={t('home.gallery.dialogLabel')}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
        className="fixed inset-0 z-[60] flex flex-col outline-none"
      >
        <div
          className="absolute inset-0 bg-cocoa/90 backdrop-blur-sm"
          aria-hidden="true"
          onClick={onClose}
        />

        <p className="sr-only" aria-live="polite" aria-atomic="true">
          {t('home.gallery.slideAnnouncement', {
            current: index + 1,
            total: count,
          })}
        </p>

        <button
          type="button"
          onClick={onClose}
          aria-label={t('home.gallery.close')}
          className="absolute top-4 right-4 z-20 p-2 text-cream/80 hover:text-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/40 rounded-full"
        >
          <X size={24} strokeWidth={1.5} aria-hidden="true" />
        </button>

        <div className="relative z-10 flex flex-1 items-center justify-center px-14 sm:px-20 py-16">
          {count > 1 && (
            <button
              type="button"
              onClick={goPrev}
              disabled={!canGoPrev}
              aria-label={t('home.gallery.prev')}
              className={`absolute left-2 sm:left-4 ${arrowButtonClass}`}
            >
              <ChevronLeft size={28} strokeWidth={1.5} aria-hidden="true" />
            </button>
          )}

          <div className="relative w-full max-w-5xl max-h-[75vh] flex items-center justify-center">
            <AnimatePresence initial={false} mode="wait">
              <motion.img
                key={currentImage.id}
                src={currentImage.src}
                alt={t(currentImage.altKey)}
                drag={enableSwipe ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.14}
                dragMomentum={false}
                onDragEnd={(_, { offset, velocity }) => {
                  const swipePower = offset.x + velocity.x * 0.15;

                  if (swipePower < -SWIPE_THRESHOLD && canGoNext) {
                    goNext();
                    return;
                  }

                  if (swipePower > SWIPE_THRESHOLD && canGoPrev) {
                    goPrev();
                  }
                }}
                initial={
                  prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 24 }
                }
                animate={{ opacity: 1, x: 0 }}
                exit={
                  prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -24 }
                }
                transition={prefersReducedMotion ? { duration: 0 } : IMAGE_TRANSITION}
                className="max-h-[75vh] w-auto max-w-full rounded-2xl shadow-2xl object-contain touch-pan-y"
                onClick={(event) => event.stopPropagation()}
              />
            </AnimatePresence>
          </div>

          {count > 1 && (
            <button
              type="button"
              onClick={goNext}
              disabled={!canGoNext}
              aria-label={t('home.gallery.next')}
              className={`absolute right-2 sm:right-4 ${arrowButtonClass}`}
            >
              <ChevronRight size={28} strokeWidth={1.5} aria-hidden="true" />
            </button>
          )}
        </div>

        {count > 1 && (
          <div className="relative z-10 px-4 pb-6 pt-2">
            <p className="mb-4 text-center text-sm text-cream/70 tabular-nums tracking-wide">
              {t('home.gallery.slideOf', { current: index + 1, total: count })}
            </p>

            <div className="mx-auto flex max-w-3xl items-center justify-center gap-2 overflow-x-auto py-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {images.map((image, thumbIndex) => {
                const isActive = thumbIndex === index;

                return (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() => onChange(thumbIndex)}
                    aria-label={t('home.gallery.thumbLabel', {
                      current: thumbIndex + 1,
                      total: count,
                    })}
                    aria-current={isActive}
                    className={`shrink-0 overflow-hidden rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/40 ${
                      isActive
                        ? 'ring-2 ring-cream opacity-100'
                        : 'opacity-50 hover:opacity-80'
                    }`}
                  >
                    {image.src && (
                      <img
                        src={image.src}
                        alt=""
                        className="h-12 w-16 object-cover sm:h-14 sm:w-20"
                        loading="lazy"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
}
