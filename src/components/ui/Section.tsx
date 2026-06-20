import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'cream' | 'sand' | 'white' | 'latte';
  id?: string;
}

const bgClasses = {
  cream: 'bg-cream',
  sand: 'bg-sand',
  white: 'bg-white',
  latte: 'bg-latte',
};

export default function Section({
  children,
  className = '',
  background = 'cream',
  id,
}: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${bgClasses[background]} ${className}`}>
      {children}
    </section>
  );
}
