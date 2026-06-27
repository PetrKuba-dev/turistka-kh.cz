import { Fragment } from 'react';
import { menuCategories, menuPhotoBreaks } from '../data/menu';
import MenuPageHeader from '../components/page/MenuPageHeader';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import MenuCategorySection from '../components/menu/MenuCategory';
import MenuPhotoBreak from '../components/menu/MenuPhotoBreak';

export default function MenuPage() {
  return (
    <>
      <MenuPageHeader />
      <Section background="cream" className="!pt-10 md:!pt-12">
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
        </Container>
      </Section>
    </>
  );
}
