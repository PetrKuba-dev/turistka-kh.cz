import { MapPin, Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { contactInfo } from '../data/contact';
import ContactPageHeader from '../components/page/ContactPageHeader';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import FadeIn from '../components/ui/FadeIn';
import Button from '../components/ui/Button';
import MapEmbed from '../components/contact/MapEmbed';
import OpeningHours from '../components/contact/OpeningHours';
import SocialLinks from '../components/contact/SocialLinks';

export default function ContactPage() {
  const { t } = useTranslation();
  const { address, phone, email, socialLinks } = contactInfo;
  const instagramUrl = socialLinks.find((link) => link.id === 'instagram')?.url;

  return (
    <>
      <ContactPageHeader />

      <Section background="cream" className="!pt-10 md:!pt-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-16">
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

              </div>
            </FadeIn>

            <FadeIn delay={0.15} className="flex flex-col gap-16 justify-between">
              <div>
                <h2 className="font-serif text-xl text-espresso mb-4">
                  {t('contact.mapTitle')}
                </h2>
                <MapEmbed className="h-80 lg:h-full" />
              </div>
              <div>
                  <h2 className="font-serif text-xl text-espresso mb-4">
                    {t('contact.socialTitle')}
                  </h2>
                  <SocialLinks />
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="mx-auto max-w-3xl rounded-2xl border border-stone/40 bg-sand p-8 md:p-10">
              <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
                <div className="text-center md:text-left">
                  <h2 className="mb-2 font-serif text-2xl text-espresso md:text-[1.75rem]">
                    {t('contact.cta.title')}
                  </h2>
                  <p className="max-w-md text-base leading-relaxed text-cocoa/80 md:text-lg">
                    {t('contact.cta.subtitle')}
                  </p>
                </div>
                {instagramUrl && (
                  <Button
                    href={instagramUrl}
                    variant="primary"
                    className="shrink-0 whitespace-nowrap"
                  >
                    {t('contact.cta.instagramButton')}
                  </Button>
                )}
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
