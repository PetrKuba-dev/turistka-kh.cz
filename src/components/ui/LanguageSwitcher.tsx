interface LanguageSwitcherProps {
  currentLang: string;
  onChange: (lang: string) => void;
}

export default function LanguageSwitcher({
  currentLang,
  onChange,
}: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <button
        type="button"
        onClick={() => onChange('cs')}
        className={`px-2 py-1 rounded transition-colors ${
          currentLang === 'cs'
            ? 'text-espresso font-semibold'
            : 'text-cocoa/60 hover:text-cocoa'
        }`}
        aria-label="Čeština"
      >
        CZ
      </button>
      <span className="text-stone">|</span>
      <button
        type="button"
        onClick={() => onChange('en')}
        className={`px-2 py-1 rounded transition-colors ${
          currentLang === 'en'
            ? 'text-espresso font-semibold'
            : 'text-cocoa/60 hover:text-cocoa'
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
