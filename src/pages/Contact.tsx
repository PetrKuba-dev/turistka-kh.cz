import { MapPin, Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { contactInfo } from '../data/contact';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import FadeIn from '../components/ui/FadeIn';
import MapEmbed from '../components/contact/MapEmbed';
import OpeningHours from '../components/contact/OpeningHours';
import SocialLinks from '../components/contact/SocialLinks';

export default function ContactPage() {
  const { t } = useTranslation();
  const { address, phone, email } = contactInfo;

  return (
    <>
      <Section background="sand" className="!py-16 md:!py-20">
        <Container size="narrow">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl text-espresso text-center mb-4">
              {t('contact.pageTitle')}
            </h1>
            <p className="text-cocoa/80 text-center text-lg">
              {t('contact.pageSubtitle')}
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section background="cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <FadeIn>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-cocoa" strokeWidth={1.5} />
                    <h2 className="font-serif text-xl text-espresso">
                      {t('contact.addressTitle')}
                    </h2>
                  </div>
                  <p className="text-cocoa/85 pl-7 leading-relaxed">
                    {address.street}
                    <br />
                    {address.zip} {address.city}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Phone className="w-5 h-5 text-cocoa" strokeWidth={1.5} />
                    <h2 className="font-serif text-xl text-espresso">
                      {t('contact.phoneTitle')}
                    </h2>
                  </div>
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="text-cocoa/85 pl-7 hover:text-espresso transition-colors"
                  >
                    {phone}
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Mail className="w-5 h-5 text-cocoa" strokeWidth={1.5} />
                    <h2 className="font-serif text-xl text-espresso">
                      {t('contact.emailTitle')}
                    </h2>
                  </div>
                  <a
                    href={`mailto:${email}`}
                    className="text-cocoa/85 pl-7 hover:text-espresso transition-colors"
                  >
                    {email}
                  </a>
                </div>

                <div>
                  <h2 className="font-serif text-xl text-espresso mb-4">
                    {t('contact.hoursTitle')}
                  </h2>
                  <OpeningHours />
                </div>

                <div>
                  <h2 className="font-serif text-xl text-espresso mb-4">
                    {t('contact.socialTitle')}
                  </h2>
                  <SocialLinks />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div>
                <h2 className="font-serif text-xl text-espresso mb-4">
                  {t('contact.mapTitle')}
                </h2>
                <MapEmbed className="h-80 lg:h-full min-h-[320px]" />
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="text-center bg-sand rounded-2xl p-10 md:p-14 border border-stone/40">
              <h2 className="font-serif text-2xl md:text-3xl text-espresso mb-3">
                {t('contact.cta.title')}
              </h2>
              <p className="text-cocoa/80 text-lg max-w-lg mx-auto">
                {t('contact.cta.subtitle')}
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
