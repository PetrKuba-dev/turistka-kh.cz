import { useTranslation } from 'react-i18next';
import Container from '../ui/Container';
import FadeIn from '../ui/FadeIn';

export default function MenuPageHeader() {
  const { t } = useTranslation();

  return (
    <section className="bg-cream">
      <Container size="narrow" className="py-10 md:py-12">
        <FadeIn>
          <div className="max-w-2xl">
            <h1 className="mb-2 text-3xl text-espresso md:text-4xl">
              {t('menu.pageTitle')}
            </h1>
            <p className="text-base leading-relaxed text-cocoa/75 md:text-lg">
              {t('menu.pageSubtitle')}
            </p>
          </div>
          <div
            className="mt-8 h-px w-full max-w-xs bg-gradient-to-r from-sage/60 via-sage/30 to-transparent"
            aria-hidden="true"
          />
        </FadeIn>
      </Container>
    </section>
  );
}
