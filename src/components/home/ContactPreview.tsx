import { MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { contactInfo } from '../../data/contact';
import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import FadeIn from '../ui/FadeIn';
import MapEmbed from '../contact/MapEmbed';

export default function ContactPreview() {
  const { t } = useTranslation();
  const { address } = contactInfo;

  return (
    <Section background="cream" id="contact-preview">
      <Container>
        <FadeIn>
          <SectionHeading
            title={t('home.contactPreview.title')}
            subtitle={t('home.contactPreview.subtitle')}
            className="mb-6 md:mb-8"
          />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          <FadeIn>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <MapPin className="w-4 h-4 text-sage shrink-0" strokeWidth={1.5} />
                <h3 className="font-serif text-lg text-espresso">
                  {t('home.contactPreview.addressTitle')}
                </h3>
              </div>
              <p className="text-sm text-cocoa/85 leading-relaxed md:pl-6">
                {address.street}
                <br />
                {address.zip} {address.city}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Clock className="w-4 h-4 text-sage shrink-0" strokeWidth={1.5} />
                <h3 className="font-serif text-lg text-espresso">
                  {t('home.contactPreview.hoursTitle')}
                </h3>
              </div>
              <ul className="text-sm text-cocoa/85 leading-relaxed md:pl-6 space-y-0.5">
                <li>{t('home.contactPreview.hoursSummary.monday')}</li>
                <li>{t('home.contactPreview.hoursSummary.weekdays')}</li>
                <li>{t('home.contactPreview.hoursSummary.weekend')}</li>
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <MapEmbed className="h-44 md:h-48 [&_iframe]:min-h-0 rounded-xl max-w-sm mx-auto md:max-w-none md:mx-0" />
          </FadeIn>
        </div>
        <FadeIn delay={0.25} className="md:-mt-10 mt-6 text-center md:text-left">
          <Button to="/kontakt" variant="primary" className="!px-4 !py-2 text-sm">
            {t('home.contactPreview.moreLink')}
          </Button>
        </FadeIn>
      </Container>
    </Section>
  );
}
