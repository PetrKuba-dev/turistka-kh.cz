import { useTranslation } from 'react-i18next';
import type { MenuItem as MenuItemType, MenuLayoutVariant } from '../../types/menu';
import MenuItemBadge from './MenuItemBadge';
import MenuAllergenList from './MenuAllergenList';

interface MenuItemProps {
  item: MenuItemType;
  variant: MenuLayoutVariant;
}

function PriceTag({ price, compact }: { price: number; compact?: boolean }) {
  const { t } = useTranslation();

  return (
    <span
      className={`text-cocoa font-medium whitespace-nowrap ${
        compact ? 'text-sm pt-0.5' : 'pt-1'
      }`}
    >
      {price} {t('common.currency')}
    </span>
  );
}

export default function MenuItem({ item, variant }: MenuItemProps) {
  const { t } = useTranslation();
  const isCompact = variant === 'compact';

  const namePriceRow = (
    <div className="flex items-baseline gap-2 min-w-0">
      <h3
        className={`font-serif text-espresso shrink-0 ${
          isCompact ? 'text-base' : 'text-xl'
        }`}
      >
        {t(item.nameKey)}
      </h3>
      {isCompact && (
        <span
          className="flex-1 min-w-[1rem] border-b border-dotted border-stone/60 mb-1"
          aria-hidden="true"
        />
      )}
      <PriceTag price={item.price} compact={isCompact} />
    </div>
  );

  if (isCompact) {
    return (
      <div className="py-2.5">
        {namePriceRow}
        {item.badge && (
          <div className="mt-1.5">
            <MenuItemBadge badge={item.badge} />
          </div>
        )}
        <p className="text-cocoa/70 text-xs mt-1 leading-relaxed">
          {t(item.descriptionKey)}
        </p>
        {item.allergens && item.allergens.length > 0 && (
          <MenuAllergenList allergens={item.allergens} className="mt-1" />
        )}
      </div>
    );
  }

  return (
    <div className="py-5 md:py-6 border-b border-stone/50 last:border-0">
      <div className="flex justify-between items-start gap-6">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <h3 className="font-serif text-xl text-espresso">
              {t(item.nameKey)}
            </h3>
            {item.badge && <MenuItemBadge badge={item.badge} />}
          </div>
        </div>
        <PriceTag price={item.price} />
      </div>
      <p className="text-cocoa/70 text-sm mt-1 leading-relaxed">
        {t(item.descriptionKey)}
      </p>
      {item.allergens && item.allergens.length > 0 && (
        <MenuAllergenList allergens={item.allergens} />
      )}
      {item.extras?.map((extra) => (
        <div
          key={extra.nameKey}
          className="flex justify-between items-start gap-6 pl-4 mt-2"
        >
          <p className="text-cocoa/70 italic text-sm leading-relaxed">
            {t(extra.nameKey)}
          </p>
          <span className="text-cocoa font-normal text-sm whitespace-nowrap">
            +{extra.price} {t('common.currency')}
          </span>
        </div>
      ))}
    </div>
  );
}
