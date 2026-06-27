import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'cream' | 'sand' | 'white' | 'latte' | 'sage';
  id?: string;
}

const bgClasses = {
  cream: 'bg-cream',
  sand: 'bg-sand',
  white: 'bg-white',
  latte: 'bg-latte',
  sage: 'bg-sage/40',
};

export default function Section({
  children,
  className = '',
  background = 'cream',
  id,
}: SectionProps) {
  return (
    <section id={id} className={`py-12 md:py-16 ${bgClasses[background]} ${className}`}>
      {children}
    </section>
  );
}
