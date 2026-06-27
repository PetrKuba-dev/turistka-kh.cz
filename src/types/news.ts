export type NewsCta = {
  labelKey: string;
  to?: string;
  href?: string;
};

export type NewsItem = {
  id: string;
  categoryKey: string;
  validFromIso: string;
  validFromKey: string;
  titleKey: string;
  titleShortKey: string;
  excerptKey: string;
  image: string;
  cta?: NewsCta;
};
