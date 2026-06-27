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
    <h2 className="font-serif text-2xl md:text-3xl text-espresso mb-3 pb-3 border-b border-stone/60">
      {t(category.titleKey)}
    </h2>
  );

  const intro = (
    <p
      className={`text-cocoa/75 text-sm md:text-base leading-relaxed ${
        category.altMilkNoteKey ? 'mb-4' : 'mb-6'
      }`}
    >
      {t(category.introKey)}
    </p>
  );

  const altMilkNote = category.altMilkNoteKey && (
    <p className="italic text-sm text-cocoa/70 mb-6 leading-relaxed">
      {t(category.altMilkNoteKey)}
    </p>
  );

  const items = (
    <div>
      {category.items.map((item) => (
        <MenuItem key={item.id} item={item} variant={category.layout} />
      ))}
    </div>
  );

  const textBlock = (
    <>
      {heading}
      {intro}
      {altMilkNote}
      {items}
    </>
  );

  const content = category.image ? (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start lg:items-stretch">
      <div className="relative lg:h-full lg:min-h-0">
        <img
          src={category.image.src}
          alt={t(category.image.altKey)}
          loading="lazy"
          className="w-full aspect-[4/5] max-h-[200px] sm:max-h-[250px] object-cover rounded-2xl shadow-md lg:absolute lg:inset-0 lg:aspect-auto lg:max-h-none lg:h-full"
        />
      </div>
      <div>{textBlock}</div>
    </div>
  ) : (
    textBlock
  );

  return (
    <div
      id={`menu-${category.id}`}
      className="scroll-mt-36 sm:scroll-mt-40 mb-14 last:mb-0"
    >
      <FadeIn delay={index * 0.1}>{content}</FadeIn>
    </div>
  );
}
