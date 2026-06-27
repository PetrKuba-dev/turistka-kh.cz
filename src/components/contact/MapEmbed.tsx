import { contactInfo } from '../../data/contact';

interface MapEmbedProps {
  className?: string;
}

export default function MapEmbed({ className = '' }: MapEmbedProps) {
  return (
    <div
      className={`rounded-2xl overflow-hidden border border-stone/50 shadow-sm ${className}`}
    >
      <iframe
        title="Mapa — Kavárna Turistka, Kutná Hora"
        src={contactInfo.mapEmbedUrl}
        className="w-full h-full min-h-[320px] border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
