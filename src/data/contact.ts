import type { ContactInfo } from '../types/contact';

export const contactInfo: ContactInfo = {
  address: {
    street: 'Barborská 29/22',
    city: 'Kutná Hora',
    zip: '284 01',
  },
  phone: '+420 327 000 000',
  email: 'info@kavarnaturistka.cz',
  mapEmbedUrl:
    'https://www.google.com/maps?q=Turistka+-+Barborská+29/22,+284+01+Kutná+Hora+1-Vnitřní+Město&output=embed',
  socialLinks: [
    {
      id: 'instagram',
      labelKey: 'contact.social.instagram',
      url: 'https://www.instagram.com/turistka_kutnahora/',
    },
    {
      id: 'facebook',
      labelKey: 'contact.social.facebook',
      url: 'https://www.facebook.com/turistkakutnahora/',
    },
  ],
  openingHours: [
    { dayKey: 'contact.days.monday', hoursKey: 'contact.hours.closed' },
    { dayKey: 'contact.days.tuesday', hoursKey: 'contact.hours.weekdays' },
    { dayKey: 'contact.days.wednesday', hoursKey: 'contact.hours.weekdays' },
    { dayKey: 'contact.days.thursday', hoursKey: 'contact.hours.weekdays' },
    { dayKey: 'contact.days.friday', hoursKey: 'contact.hours.weekdays' },
    { dayKey: 'contact.days.saturday', hoursKey: 'contact.hours.weekend' },
    { dayKey: 'contact.days.sunday', hoursKey: 'contact.hours.weekend' },
  ],
};
