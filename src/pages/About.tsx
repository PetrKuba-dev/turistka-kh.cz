import { useTranslation } from 'react-i18next';
import { aboutImages } from '../data/gallery';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import FadeIn from '../components/ui/FadeIn';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <Section background="sand" className="!py-16 md:!py-20">
        <Container size="narrow">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl text-espresso text-center mb-4">
              {t('about.pageTitle')}
            </h1>
            <p className="text-cocoa/80 text-center text-lg">
              {t('about.pageSubtitle')}
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section background="cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <FadeIn>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-espresso mb-5">
                  {t('about.story.title')}
                </h2>
                <div className="space-y-4 text-cocoa/85 leading-relaxed">
                  <p>{t('about.story.p1')}</p>
                  <p>{t('about.story.p2')}</p>
                  <p>{t('about.story.p3')}</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <ImagePlaceholder
                alt={t(aboutImages[0].altKey)}
                className="shadow-md"
              />
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn className="order-2 lg:order-1">
              <ImagePlaceholder
                alt={t(aboutImages[1].altKey)}
                className="shadow-md"
              />
            </FadeIn>
            <FadeIn delay={0.15} className="order-1 lg:order-2">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-espresso mb-5">
                  {t('about.atmosphere.title')}
                </h2>
                <div className="space-y-4 text-cocoa/85 leading-relaxed">
                  <p>{t('about.atmosphere.p1')}</p>
                  <p>{t('about.atmosphere.p2')}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  );
}
