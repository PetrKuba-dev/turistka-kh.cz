import type { NewsItem } from '../types/news';
import imageBrunch from '../../public/img/news/brunch.jpg';
import imageWorkshop from '../../public/img/news/workshop.jpg';
import imageDovolena from '../../public/img/news/dovolena.jpg';

export const newsItems: NewsItem[] = [
  {
    id: 'brunch-menu',
    categoryKey: 'home.news.categories.news',
    validFromIso: '2026-03-01',
    validFromKey: 'home.news.items.brunchMenu.validFrom',
    titleKey: 'home.news.items.brunchMenu.title',
    titleShortKey: 'home.news.items.brunchMenu.titleShort',
    excerptKey: 'home.news.items.brunchMenu.excerpt',
    image: imageBrunch,
    cta: {
      labelKey: 'home.news.items.brunchMenu.cta',
      to: '/menu',
    },
  },
  {
    id: 'fermentation-workshop',
    categoryKey: 'home.news.categories.event',
    validFromIso: '2026-04-12',
    validFromKey: 'home.news.items.fermentationWorkshop.validFrom',
    titleKey: 'home.news.items.fermentationWorkshop.title',
    titleShortKey: 'home.news.items.fermentationWorkshop.titleShort',
    excerptKey: 'home.news.items.fermentationWorkshop.excerpt',
    image: imageWorkshop,
    cta: {
      labelKey: 'home.news.items.fermentationWorkshop.cta',
      to: '/kontakt',
    },
  },
  {
    id: 'summer-closure',
    categoryKey: 'home.news.categories.operations',
    validFromIso: '2026-07-14',
    validFromKey: 'home.news.items.summerClosure.validFrom',
    titleKey: 'home.news.items.summerClosure.title',
    titleShortKey: 'home.news.items.summerClosure.titleShort',
    excerptKey: 'home.news.items.summerClosure.excerpt',
    image: imageDovolena,
  },
];
