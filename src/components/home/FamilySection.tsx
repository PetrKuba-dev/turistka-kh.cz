import { useTranslation } from 'react-i18next';
import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import FadeIn from '../ui/FadeIn';

interface FamilySectionProps {
  quoteKey?: string;
  authorKey?: string;
  headingKey?: string;
}

export default function FamilySection({
  quoteKey = 'home.family.quote',
  authorKey = 'home.family.author',
  headingKey,
}: FamilySectionProps) {
  const { t } = useTranslation();

  return (
    <Section background="sand">
      <Container size="narrow">
        {headingKey && (
          <FadeIn>
            <SectionHeading title={t(headingKey)} />
          </FadeIn>
        )}
        <FadeIn delay={headingKey ? 0.1 : 0}>
          <blockquote className="text-center">
            <p className="font-serif text-2xl md:text-3xl text-sage/90 leading-relaxed italic mb-6">
              &ldquo;{t(quoteKey)}&rdquo;
            </p>
            <footer className="text-cocoa/70 text-sm tracking-wide uppercase">
              — {t(authorKey)}
            </footer>
          </blockquote>
        </FadeIn>
      </Container>
    </Section>
  );
}
