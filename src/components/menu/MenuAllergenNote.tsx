import { useTranslation } from 'react-i18next';
import FadeIn from '../ui/FadeIn';

export default function MenuAllergenNote() {
  const { t } = useTranslation();

  return (
    <FadeIn>
      <p className="mt-10 pt-6 border-t border-stone/50 text-sm text-cocoa/70 leading-relaxed">
        {t('menu.allergens.disclaimer')}
      </p>
    </FadeIn>
  );
}
