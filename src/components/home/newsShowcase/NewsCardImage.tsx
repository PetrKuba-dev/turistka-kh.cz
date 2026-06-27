import { useTranslation } from 'react-i18next';
import type { NewsItem } from '../../../types/news';
import ImagePlaceholder from '../../ui/ImagePlaceholder';

interface NewsCardImageProps {
  item: NewsItem;
  shadowClassName?: string;
}

export default function NewsCardImage({ item, shadowClassName = 'shadow-lg' }: NewsCardImageProps) {
  const { t } = useTranslation();

  return (
    <div className={`h-full overflow-hidden rounded-2xl ${shadowClassName}`}>
      <ImagePlaceholder
        src={item.image || undefined}
        alt={t(item.titleKey)}
        className="!h-full"
        aspectRatio="aspect-auto h-full"
      />
    </div>
  );
}
