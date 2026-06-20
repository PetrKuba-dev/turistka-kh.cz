import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';
import heroBackground from '../../../public/img/hero_upscale.webp';

export default function HeroParallax() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  return (
    <section
      ref={ref}
      className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="w-full h-[120%]">
          <img src={heroBackground} alt={t('home.hero.headline')} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/25 to-cream/90" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl relative"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream mb-5"
          >
            {t('home.hero.headline')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lg md:text-xl text-cream/90 leading-relaxed mb-8 max-w-xl"
          >
            {t('home.hero.subheadline')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button to="/menu" variant="primary" className="!bg-cream !text-espresso !border-cream hover:!bg-white">
              {t('home.hero.ctaMenu')}
            </Button>
            <Button to="/kontakt" variant="secondary" className="!text-cream !border-cream/80 hover:!bg-cream/10 hover:!text-cream">
              {t('home.hero.ctaContact')}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
