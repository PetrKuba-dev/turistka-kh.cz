import { Coffee } from 'lucide-react';

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export default function ImagePlaceholder({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[4/3]',
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover rounded-2xl ${className}`}
        loading="lazy"
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`w-full h-full ${aspectRatio} rounded-2xl bg-gradient-to-br from-latte via-sand to-stone-light flex items-center justify-center border border-stone/50 ${className}`}
    >
      <Coffee className="w-10 h-10 text-cocoa/30" strokeWidth={1.5} />
    </div>
  );
}
