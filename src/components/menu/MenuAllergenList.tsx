import { useTranslation } from 'react-i18next';
import type { AllergenId } from '../../types/menu';

const ALLERGEN_NUMBERS: Record<AllergenId, number> = {
  gluten: 1,
  crustaceans: 2,
  eggs: 3,
  fish: 4,
  peanuts: 5,
  soy: 6,
  milk: 7,
  nuts: 8,
  celery: 9,
  mustard: 10,
  sesame: 11,
  sulphites: 12,
  lupin: 13,
  molluscs: 14,
};

interface MenuAllergenListProps {
  allergens: AllergenId[];
  className?: string;
}

export default function MenuAllergenList({
  allergens,
  className = '',
}: MenuAllergenListProps) {
  const { t } = useTranslation();

  if (allergens.length === 0) return null;

  return (
    <div className={`flex flex-wrap items-center gap-1.5 mt-2 ${className}`}>
      <span className="text-xs text-cocoa/60">{t('menu.allergens.label')}:</span>
      {allergens.map((allergen) => (
        <span
          key={allergen}
          title={t(`menu.allergens.${allergen}`)}
          aria-label={t(`menu.allergens.${allergen}`)}
          className="inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1 text-xs font-medium text-cocoa/80 bg-stone/30 rounded"
        >
          {ALLERGEN_NUMBERS[allergen]}
        </span>
      ))}
    </div>
  );
}
