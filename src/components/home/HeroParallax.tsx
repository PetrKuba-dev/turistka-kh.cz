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
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  return (
    <section
      ref={ref}
      className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden"
    >
      <motion.div 
      style={{ y }} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="absolute inset-0 z-0">
        <div className="w-full h-[120%]">
          <img
            src={heroBackground}
            alt={t('home.hero.headline')}
            className="w-full h-full object-cover object-[35%_center]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/35 via-transparent to-cream/90" />
        <div className="absolute inset-y-0 left-0 w-full  bg-gradient-to-r from-espresso/80 via-espresso/40 to-espresso/20" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl relative [text-shadow:0_1px_3px_rgba(61,43,31,0.4),0_4px_14px_rgba(61,43,31,0.2)]"
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
            className="text-lg md:text-xl text-cream leading-relaxed mb-8 max-w-xl"
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
            <Button to="/kontakt" variant="secondary" className="!text-cream !border-cream hover:!bg-cream/10 hover:!text-cream">
              {t('home.hero.ctaContact')}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
