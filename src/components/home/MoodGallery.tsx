import { useTranslation } from 'react-i18next';
import { galleryImages } from '../../data/gallery';
import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import FadeIn from '../ui/FadeIn';

const spanClasses = {
  normal: 'col-span-1 row-span-1',
  wide: 'col-span-1 sm:col-span-2 row-span-1',
  tall: 'col-span-1 row-span-1 sm:row-span-2',
};

export default function MoodGallery() {
  const { t } = useTranslation();

  return (
    <Section background="latte">
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
              <ImagePlaceholder
                src={image.src}
                alt={t(image.altKey)}
                className="!h-full"
                aspectRatio="aspect-auto h-full"
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
