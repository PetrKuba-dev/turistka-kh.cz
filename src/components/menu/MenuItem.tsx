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
      <div className="py-5 border-b border-stone/50 last:border-0">
        <div className="flex justify-between items-start gap-6">
          <h3 className="font-serif text-xl text-espresso">
            {t(item.nameKey)}
          </h3>
          <span className="text-cocoa font-medium whitespace-nowrap pt-1">
            {item.price} {t('common.currency')}
          </span>
        </div>
        <p
          className="text-cocoa/70 text-sm mt-1 leading-relaxed"
        >
          {t(item.descriptionKey)}
        </p>
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
    </FadeIn>
  );
}
