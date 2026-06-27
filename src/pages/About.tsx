import { useTranslation } from 'react-i18next';
import { aboutImages } from '../data/about';
import AboutPageHeader from '../components/page/AboutPageHeader';
import FamilySection from '../components/home/FamilySection';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import FadeIn from '../components/ui/FadeIn';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <AboutPageHeader />

      <Section background="cream" className="!pt-10 md:!pt-12">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <div>
                <h2 className="mb-5 font-serif text-2xl text-espresso md:text-3xl">
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
              <figure>
                <img
                  src={aboutImages[0].src}
                  alt={t(aboutImages[0].altKey)}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover rounded-2xl shadow-md"
                />
              </figure>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <FamilySection
        quoteKey="about.quote.text"
        authorKey="about.quote.author"
        headingKey="about.quote.heading"
      />

      <Section background="cream">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <FadeIn className="order-2 lg:order-1">
              <figure>
                <img
                  src={aboutImages[1].src}
                  alt={t(aboutImages[1].altKey)}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover rounded-2xl shadow-md"
                />
              </figure>
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
    </>
  );
}
