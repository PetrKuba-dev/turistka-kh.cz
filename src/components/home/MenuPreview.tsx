import { useTranslation } from 'react-i18next';
import { getMenuPreviewItems } from '../../data/menu';
import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import FadeIn from '../ui/FadeIn';

export default function MenuPreview() {
  const { t } = useTranslation();
  const items = getMenuPreviewItems();

  return (
    <Section background="cream">
      <Container>
        <FadeIn>
          <SectionHeading
            title={t('home.menuPreview.title')}
            subtitle={t('home.menuPreview.subtitle')}
          />
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {items.map((entry, index) => (
            <FadeIn key={entry.item.id} delay={index * 0.08}>
              <div className="flex justify-between items-start gap-4 p-5 bg-white rounded-2xl border border-stone/40">
                <div>
                  <h3 className="font-serif text-lg text-espresso">
                    {t(entry.item.nameKey)}
                  </h3>
                  <p className="text-cocoa/70 text-sm mt-1">
                    {t(entry.item.descriptionKey)}
                  </p>
                </div>
                <span className="text-cocoa font-medium whitespace-nowrap">
                  {entry.item.price} {t('common.currency')}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="text-center">
          <Button to="/menu" variant="accent">
            {t('common.seeAll')}
          </Button>
        </FadeIn>
      </Container>
    </Section>
  );
}
