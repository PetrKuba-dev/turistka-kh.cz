export interface OpeningHour {
  dayKey: string;
  hoursKey: string;
}

export interface SocialLink {
  id: string;
  labelKey: string;
  url: string;
}

export interface ContactInfo {
  address: {
    street: string;
    city: string;
    zip: string;
  };
  phone: string;
  email: string;
  mapEmbedUrl: string;
  socialLinks: SocialLink[];
  openingHours: OpeningHour[];
}
