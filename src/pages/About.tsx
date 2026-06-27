import { useTranslation } from 'react-i18next';
import { aboutImages } from '../data/gallery';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import FadeIn from '../components/ui/FadeIn';
import image1 from '../../public/img/about-us/1.jpg';
import image2 from '../../public/img/about-us/2.jpg';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <Section background="cream">
      <Container>
        <div className="mb-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div>
              <h1 className="mb-2 text-4xl text-espresso md:text-5xl">
                {t('about.pageTitle')}
              </h1>

              <p className="mb-2 text-lg leading-relaxed text-cocoa/80">
                {t('about.pageSubtitle')}
              </p>
              <div
                className="mt-8 h-px w-full max-w-xs bg-gradient-to-r from-sage/60 via-sage/30 to-transparent"
                aria-hidden="true"
              />
              <h2 className="mt-12 mb-5 font-serif text-2xl text-espresso md:text-3xl">
                {t('about.story.title')}
              </h2>
              <div className="space-y-4 leading-relaxed text-cocoa/85">
                <p>{t('about.story.p1')}</p>
                <p>{t('about.story.p2')}</p>
                <p>{t('about.story.p3')}</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <img
              src={image1}
              alt={t(aboutImages[1].altKey)}
              className="rounded-2xl shadow-md"
            />
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <FadeIn className="order-2 lg:order-1">
            <img
              src={image2}
              alt={t(aboutImages[0].altKey)}
              className="rounded-2xl shadow-md"
            />
          </FadeIn>
          <FadeIn delay={0.15} className="order-1 lg:order-2">
            <div>
              <h2 className="mb-5 font-serif text-2xl text-espresso md:text-3xl">
                {t('about.atmosphere.title')}
              </h2>
              <div className="space-y-4 leading-relaxed text-cocoa/85">
                <p>{t('about.atmosphere.p1')}</p>
                <p>{t('about.atmosphere.p2')}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}

