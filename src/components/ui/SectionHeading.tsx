interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`mb-10 md:mb-14 max-w-2xl ${alignClass} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-espresso mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-cocoa/80 text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
