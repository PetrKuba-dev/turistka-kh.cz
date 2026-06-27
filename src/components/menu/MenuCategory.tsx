import { useTranslation } from 'react-i18next';
import type { MenuCategory } from '../../types/menu';
import MenuItem from './MenuItem';
import FadeIn from '../ui/FadeIn';

interface MenuCategoryProps {
  category: MenuCategory;
  index: number;
}

export default function MenuCategorySection({
  category,
  index,
}: MenuCategoryProps) {
  const { t } = useTranslation();

  const heading = (
    <FadeIn delay={index * 0.1}>
      <h2 className="font-serif text-2xl md:text-3xl text-espresso mb-6 pb-3 border-b border-stone/60">
        {t(category.titleKey)}
      </h2>
    </FadeIn>
  );

    const items = (
    <div>
      {category.items.map((item, itemIndex) => (
        <MenuItem key={item.id} item={item} index={itemIndex} />
      ))}
    </div>
  );

  if (category.image) {
    return (
      <div className="mb-14 last:mb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start lg:items-stretch">
          <FadeIn
            delay={index * 0.1}
            className="relative lg:h-full lg:min-h-0"
          >
            <img
              src={category.image.src}
              alt={t(category.image.altKey)}
              loading="lazy"
              className="w-full aspect-[4/5] max-h-[200px] sm:max-h-[250px] object-cover rounded-2xl shadow-md lg:absolute lg:inset-0 lg:aspect-auto lg:max-h-none lg:h-full"
            />
          </FadeIn>
          <div>
            {heading}
            {items}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-14 last:mb-0">
      {heading}
      {items}
    </div>
  );
}
