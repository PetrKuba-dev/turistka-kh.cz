import { motion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

interface FadeInProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'none';
}

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  ...props
}: FadeInProps) {
  const initial = direction === 'up' ? { opacity: 0, y: 24 } : { opacity: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
