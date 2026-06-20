import type { ContactInfo } from '../types/contact';

export const contactInfo: ContactInfo = {
  address: {
    street: 'Palackého nám. 12',
    city: 'Kutná Hora',
    zip: '284 01',
  },
  phone: '+420 327 000 000',
  email: 'info@kavarnaturistka.cz',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.5!2d15.268!3d49.949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDU2JzU2LjQiTiAxNcKwMTYnMDQuOCJF!5e0!3m2!1scs!2scz!4v1700000000000',
  socialLinks: [
    {
      id: 'instagram',
      labelKey: 'contact.social.instagram',
      url: 'https://instagram.com/kavarnaturistka',
    },
    {
      id: 'facebook',
      labelKey: 'contact.social.facebook',
      url: 'https://facebook.com/kavarnaturistka',
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
