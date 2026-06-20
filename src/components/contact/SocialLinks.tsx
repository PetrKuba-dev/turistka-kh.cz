import { Instagram, Facebook } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { contactInfo } from '../../data/contact';

const iconMap = {
  instagram: Instagram,
  facebook: Facebook,
};

export default function SocialLinks() {
  const { t } = useTranslation();

  return (
    <div className="flex gap-4">
      {contactInfo.socialLinks.map((link) => {
        const Icon = iconMap[link.id as keyof typeof iconMap];
        if (!Icon) return null;
        return (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-stone/60 text-cocoa hover:bg-latte hover:border-cocoa/30 transition-colors"
            aria-label={t(link.labelKey)}
          >
            <Icon className="w-4 h-4" strokeWidth={1.5} />
            <span className="text-sm">{t(link.labelKey)}</span>
          </a>
        );
      })}
    </div>
  );
}
