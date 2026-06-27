import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { NewsItem } from '../../../types/news';
import Button from '../../ui/Button';
import { TEXT_TRANSITION } from './newsShowcaseMotion';

interface NewsTextPanelProps {
  item: NewsItem;
  id: string;
}

export default function NewsTextPanel({ item, id }: NewsTextPanelProps) {
  const { t } = useTranslation();

  return (
    <div id={id} role="tabpanel" aria-labelledby={`news-tab-${item.id}`} className="">
      <AnimatePresence mode="wait">
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={TEXT_TRANSITION}
          className="h-full flex flex-col justify-between lg:pt-4"
        >
          <div>
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs mb-4 uppercase tracking-widest text-sage/80">
            <span>{t(item.categoryKey)}</span>
            <span className="text-stone" aria-hidden="true">
              |
            </span>
            <time dateTime={item.validFromIso}>{t(item.validFromKey)}</time>
          </p>
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-espresso leading-tight">
              {t(item.titleKey)}
            </h3>
            <div
              className="mt-3 mb-4 h-px bg-gradient-to-r from-sage/60 via-sage/30 to-transparent w-2/3"
              aria-hidden="true"
            />
            <p
              className="text-cocoa/80 text-base md:text-lg leading-relaxed max-w-lg"
              dangerouslySetInnerHTML={{ __html: t(item.excerptKey) }}
            />
          </div>
          {item.cta && (
            <div className="mt-4">
              <Button to={item.cta.to} href={item.cta.href} variant="accent">
                {t(item.cta.labelKey)}
              </Button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
