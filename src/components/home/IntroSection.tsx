import { useTranslation } from 'react-i18next';
import Container from '../ui/Container';
import Section from '../ui/Section';
import FadeIn from '../ui/FadeIn';

export default function IntroSection() {
  const { t } = useTranslation();

  return (
    <Section background="cream">
      <Container size="narrow">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl text-espresso text-center mb-6">
            {t('home.intro.title')}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-cocoa/85 text-base md:text-lg leading-relaxed text-center mb-4">
            {t('home.intro.p1')}
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-cocoa/85 text-base md:text-lg leading-relaxed text-center">
            {t('home.intro.p2')}
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
