import { useTranslation } from 'react-i18next';
import type { MenuImage } from '../../types/menu';
import FadeIn from '../ui/FadeIn';

export default function MenuPhotoBreak({ src, altKey }: MenuImage) {
  const { t } = useTranslation();

  return (
    <FadeIn>
      <figure className="my-14">
        <img
          src={src}
          alt={t(altKey)}
          loading="lazy"
          className="w-full aspect-[16/9] max-h-[250px] object-cover rounded-2xl shadow-md"
        />
      </figure>
    </FadeIn>
  );
}
