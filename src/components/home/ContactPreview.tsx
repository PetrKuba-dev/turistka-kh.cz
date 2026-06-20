import { MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { contactInfo } from '../../data/contact';
import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import FadeIn from '../ui/FadeIn';
import MapEmbed from '../contact/MapEmbed';
import OpeningHours from '../contact/OpeningHours';

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
          />
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <FadeIn>
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-cocoa" strokeWidth={1.5} />
                  <h3 className="font-serif text-xl text-espresso">
                    {t('home.contactPreview.addressTitle')}
                  </h3>
                </div>
                <p className="text-cocoa/85 leading-relaxed pl-7">
                  {address.street}
                  <br />
                  {address.zip} {address.city}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-cocoa" strokeWidth={1.5} />
                  <h3 className="font-serif text-xl text-espresso">
                    {t('home.contactPreview.hoursTitle')}
                  </h3>
                </div>
                <div className="pl-7">
                  <OpeningHours compact />
                </div>
              </div>
              <Button to="/kontakt" variant="primary">
                {t('common.contactUs')}
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <MapEmbed className="h-64 lg:h-80" />
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
