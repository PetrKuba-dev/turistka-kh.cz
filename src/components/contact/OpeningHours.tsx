import { useTranslation } from 'react-i18next';
import { contactInfo } from '../../data/contact';

interface OpeningHoursProps {
  compact?: boolean;
}

export default function OpeningHours({ compact = false }: OpeningHoursProps) {
  const { t } = useTranslation();

  return (
    <dl className={compact ? 'space-y-1' : 'space-y-2'}>
      {contactInfo.openingHours.map((entry) => (
        <div
          key={entry.dayKey}
          className={`flex justify-between gap-4 ${
            compact ? 'text-sm' : 'text-base'
          } text-cocoa/85`}
        >
          <dt>{t(entry.dayKey)}</dt>
          <dd className="text-right">{t(entry.hoursKey)}</dd>
        </div>
      ))}
    </dl>
  );
}
