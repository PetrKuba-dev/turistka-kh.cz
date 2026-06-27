import { useTranslation } from 'react-i18next';
import type { MenuItemBadge } from '../../types/menu';

interface MenuItemBadgeProps {
  badge: MenuItemBadge;
}

const badgeStyles: Record<MenuItemBadge, string> = {
  weekend: 'text-sage bg-sage/10',
  seasonal: 'text-warm-brown bg-warm-brown/10',
};

export default function MenuItemBadge({ badge }: MenuItemBadgeProps) {
  const { t } = useTranslation();

  return (
    <span
      className={`inline-block text-xs uppercase tracking-widest px-2 py-0.5 rounded ${badgeStyles[badge]}`}
    >
      {t(`menu.badges.${badge}`)}
    </span>
  );
}
