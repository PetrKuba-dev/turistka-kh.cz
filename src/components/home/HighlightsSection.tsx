import { Coffee, Cake, Home, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { highlights } from '../../data/highlights';
import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import FadeIn from '../ui/FadeIn';

const iconMap = {
  coffee: Coffee,
  cake: Cake,
  home: Home,
  heart: Heart,
};

export default function HighlightsSection() {
  const { t } = useTranslation();

  return (
    <Section background="sand">
      <Container>
        <FadeIn>
          <SectionHeading
            title={t('home.highlights.title')}
            subtitle={t('home.highlights.subtitle')}
          />
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <FadeIn key={item.id} delay={index * 0.1}>
                <div className="bg-cream rounded-2xl p-6 h-full border border-stone/40 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-full bg-latte flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-cocoa" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-espresso mb-2">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-cocoa/75 text-sm leading-relaxed">
                    {t(item.descriptionKey)}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
