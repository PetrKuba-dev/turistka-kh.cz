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

  return (
    <div className="mb-14 last:mb-0">
      <FadeIn delay={index * 0.1}>
        <h2 className="font-serif text-2xl md:text-3xl text-espresso mb-6 pb-3 border-b border-stone/60">
          {t(category.titleKey)}
        </h2>
      </FadeIn>
      <div>
        {category.items.map((item, itemIndex) => (
          <MenuItem key={item.id} item={item} index={itemIndex} />
        ))}
      </div>
    </div>
  );
}
