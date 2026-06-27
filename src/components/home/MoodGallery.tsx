import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { galleryImages } from '../../data/gallery';
import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import FadeIn from '../ui/FadeIn';
import GalleryLightbox from './gallery/GalleryLightbox';

const spanClasses = {
  normal: 'col-span-1 row-span-1',
  wide: 'col-span-1 sm:col-span-2 row-span-1',
  tall: 'col-span-1 row-span-1 sm:row-span-2',
};

export default function MoodGallery() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Section background="sand">
      <Container>
        <FadeIn>
          <SectionHeading
            title={t('home.gallery.title')}
            subtitle={t('home.gallery.subtitle')}
          />
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 auto-rows-[200px] sm:auto-rows-[220px]">
          {galleryImages.map((image, index) => (
            <FadeIn
              key={image.id}
              delay={index * 0.08}
              className={`${spanClasses[image.span ?? 'normal']} min-h-[200px]`}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={t('home.gallery.open', { alt: t(image.altKey) })}
                className="group block h-full w-full overflow-hidden rounded-2xl shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cocoa/30"
              >
                <img
                  src={image.src}
                  alt={t(image.altKey)}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </button>
            </FadeIn>
          ))}
        </div>
      </Container>

      {activeIndex !== null && (
        <GalleryLightbox
          images={galleryImages}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onChange={setActiveIndex}
        />
      )}
    </Section>
  );
}
