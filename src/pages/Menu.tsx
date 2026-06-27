import { Fragment } from 'react';
import { menuCategories, menuPhotoBreaks } from '../data/menu';
import MenuPageHeader from '../components/page/MenuPageHeader';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import MenuCategoryNav from '../components/menu/MenuCategoryNav';
import MenuCategorySection from '../components/menu/MenuCategory';
import MenuPhotoBreak from '../components/menu/MenuPhotoBreak';
import MenuAllergenNote from '../components/menu/MenuAllergenNote';

export default function MenuPage() {
  return (
    <>
      <MenuPageHeader />
      <div className="bg-cream">
        <MenuCategoryNav />
        <Section background="cream" className="!pt-10 md:!pt-12 !pb-12 md:!pb-16">
          <Container size="narrow">
            {menuCategories.map((category, index) => {
              const photo = menuPhotoBreaks[category.id];
              return (
                <Fragment key={category.id}>
                  <MenuCategorySection category={category} index={index} />
                  {photo && <MenuPhotoBreak {...photo} />}
                </Fragment>
              );
            })}
            <MenuAllergenNote />
          </Container>
        </Section>
      </div>
    </>
  );
}
