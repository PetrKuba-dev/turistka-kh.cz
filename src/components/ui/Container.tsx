import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'default' | 'wide' | 'narrow';
}

const sizeClasses = {
  default: 'max-w-6xl',
  wide: 'max-w-7xl',
  narrow: 'max-w-4xl',
};

export default function Container({
  children,
  className = '',
  size = 'default',
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-5 sm:px-8 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </div>
  );
}
