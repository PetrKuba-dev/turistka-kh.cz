import { useTranslation } from 'react-i18next';
import type { MenuItem as MenuItemType } from '../../types/menu';
import FadeIn from '../ui/FadeIn';

interface MenuItemProps {
  item: MenuItemType;
  index: number;
}

export default function MenuItem({ item, index }: MenuItemProps) {
  const { t } = useTranslation();

  return (
    <FadeIn delay={index * 0.05}>
      <div className="flex justify-between items-start gap-6 py-5 border-b border-stone/50 last:border-0">
        <div className="flex-1">
          <h3 className="font-serif text-xl text-espresso">
            {t(item.nameKey)}
          </h3>
          <p className="text-cocoa/70 text-sm mt-1 leading-relaxed">
            {t(item.descriptionKey)}
          </p>
        </div>
        <span className="text-cocoa font-medium whitespace-nowrap pt-1">
          {item.price} {t('common.currency')}
        </span>
      </div>
    </FadeIn>
  );
}
