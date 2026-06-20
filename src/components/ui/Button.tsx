import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-cocoa text-cream hover:bg-espresso border border-cocoa hover:border-espresso',
  secondary:
    'bg-transparent text-cocoa border border-cocoa hover:bg-cocoa hover:text-cream',
  ghost: 'bg-transparent text-cocoa hover:text-espresso underline-offset-4 hover:underline',
};

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide rounded-full transition-all duration-300';

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
