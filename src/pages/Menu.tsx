import { useTranslation } from 'react-i18next';
import { menuCategories } from '../data/menu';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import FadeIn from '../components/ui/FadeIn';
import MenuCategorySection from '../components/menu/MenuCategory';

export default function MenuPage() {
  const { t } = useTranslation();

  return (
    <>
      <Section background="sand" className="!py-16 md:!py-20">
        <Container size="narrow">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl text-espresso text-center mb-4">
              {t('menu.pageTitle')}
            </h1>
            <p className="text-cocoa/80 text-center text-lg">
              {t('menu.pageSubtitle')}
            </p>
          </FadeIn>
        </Container>
      </Section>
      <Section background="cream">
        <Container size="narrow">
          {menuCategories.map((category, index) => (
            <MenuCategorySection
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </Container>
      </Section>
    </>
  );
}
