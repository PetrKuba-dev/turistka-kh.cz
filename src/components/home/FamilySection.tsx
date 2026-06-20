import { useTranslation } from 'react-i18next';
import Container from '../ui/Container';
import Section from '../ui/Section';
import FadeIn from '../ui/FadeIn';

export default function FamilySection() {
  const { t } = useTranslation();

  return (
    <Section background="sand">
      <Container size="narrow">
        <FadeIn>
          <blockquote className="text-center">
            <p className="font-serif text-2xl md:text-3xl text-espresso leading-relaxed italic mb-6">
              &ldquo;{t('home.family.quote')}&rdquo;
            </p>
            <footer className="text-cocoa/70 text-sm tracking-wide uppercase">
              — {t('home.family.author')}
            </footer>
          </blockquote>
        </FadeIn>
      </Container>
    </Section>
  );
}
