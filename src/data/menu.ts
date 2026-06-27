import type { MenuCategory, MenuCategoryId, MenuImage } from '../types/menu';
import image4 from '../../public/img/gallery/4.jpg';
import image9 from '../../public/img/gallery/9.jpg';
import imageBrunch from '../../public/img/news/brunch.jpg';

export const menuCategories: MenuCategory[] = [
  {
    id: 'coffee',
    titleKey: 'menu.categories.coffee',
    items: [
      {
        id: 'espresso',
        nameKey: 'menu.items.espresso.name',
        descriptionKey: 'menu.items.espresso.description',
        price: 55,
      },
      {
        id: 'cappuccino',
        nameKey: 'menu.items.cappuccino.name',
        descriptionKey: 'menu.items.cappuccino.description',
        price: 75,
      },
      {
        id: 'flat-white',
        nameKey: 'menu.items.flatWhite.name',
        descriptionKey: 'menu.items.flatWhite.description',
        price: 80,
      },
      {
        id: 'filter-coffee',
        nameKey: 'menu.items.filterCoffee.name',
        descriptionKey: 'menu.items.filterCoffee.description',
        price: 65,
      },
      {
        id: 'hot-chocolate',
        nameKey: 'menu.items.hotChocolate.name',
        descriptionKey: 'menu.items.hotChocolate.description',
        price: 70,
      },
    ],
  },
  {
    id: 'breakfast',
    titleKey: 'menu.categories.breakfast',
    items: [
      {
        id: 'scrambled-eggs',
        nameKey: 'menu.items.scrambledEggs.name',
        descriptionKey: 'menu.items.scrambledEggs.description',
        price: 140,
        extras: [
          {
            nameKey: 'menu.items.scrambledEggs.extras.halloumi',
            price: 25,
          },
          {
            nameKey: 'menu.items.scrambledEggs.extras.sausages',
            price: 30,
          },
          {
            nameKey: 'menu.items.scrambledEggs.extras.egg',
            price: 15,
          },
          {
            nameKey: 'menu.items.scrambledEggs.extras.bread',
            price: 10,
          },
        ],
      },
      {
        id: 'pancakes-with-fruit',
        nameKey: 'menu.items.pancakesWithFruit.name',
        descriptionKey: 'menu.items.pancakesWithFruit.description',
        price: 175,
      },
      {
        id: 'autumn-sandwich',
        nameKey: 'menu.items.autumnSandwich.name',
        descriptionKey: 'menu.items.autumnSandwich.description',
        price: 180,
      },
      {
        id: 'turkish-eggs',
        nameKey: 'menu.items.turkishEggs.name',
        descriptionKey: 'menu.items.turkishEggs.description',
        price: 170,
      },
      {
        id: 'lentil-bowl-with-falafel',
        nameKey: 'menu.items.lentilBowlWithFalafel.name',
        descriptionKey: 'menu.items.lentilBowlWithFalafel.description',
        price: 175,
        extras: [
          {
            nameKey: 'menu.items.lentilBowlWithFalafel.extras.kimchi',
            price: 20,
          },
        ],
      },
      {
        id: 'weekend-eggs-in-glass',
        nameKey: 'menu.items.weekendEggsInGlass.name',
        descriptionKey: 'menu.items.weekendEggsInGlass.description',
        price: 190,
      },
    ],
  },
  {
    id: 'brunch',
    titleKey: 'menu.categories.brunch',
    image: {
      src: imageBrunch,
      altKey: 'menu.photos.brunch',
    },
    items: [
      {
        id: 'soup',
        nameKey: 'menu.items.soup.name',
        descriptionKey: 'menu.items.soup.description',
        price: 75,
      },
      {
        id: 'bacon-jam-sandwich',
        nameKey: 'menu.items.baconJamSandwich.name',
        descriptionKey: 'menu.items.baconJamSandwich.description',
        price: 130,
      },
      {
        id: 'bread-with-spread',
        nameKey: 'menu.items.breadWithSpread.name',
        descriptionKey: 'menu.items.breadWithSpread.description',
        price: 70,
      },
    ],
  },
  {
    id: 'desserts',
    titleKey: 'menu.categories.desserts',
    items: [
      {
        id: 'cheesecake',
        nameKey: 'menu.items.cheesecake.name',
        descriptionKey: 'menu.items.cheesecake.description',
        price: 95,
      },
      {
        id: 'apple-strudel',
        nameKey: 'menu.items.appleStrudel.name',
        descriptionKey: 'menu.items.appleStrudel.description',
        price: 85,
      },
      {
        id: 'chocolate-cake',
        nameKey: 'menu.items.chocolateCake.name',
        descriptionKey: 'menu.items.chocolateCake.description',
        price: 90,
      },
      {
        id: 'daily-cake',
        nameKey: 'menu.items.dailyCake.name',
        descriptionKey: 'menu.items.dailyCake.description',
        price: 80,
      },
    ],
  },
  {
    id: 'drinks',
    titleKey: 'menu.categories.drinks',
    items: [
      {
        id: 'fresh-juice',
        nameKey: 'menu.items.freshJuice.name',
        descriptionKey: 'menu.items.freshJuice.description',
        price: 65,
      },
      {
        id: 'lemonade',
        nameKey: 'menu.items.lemonade.name',
        descriptionKey: 'menu.items.lemonade.description',
        price: 60,
      },
      {
        id: 'tea',
        nameKey: 'menu.items.tea.name',
        descriptionKey: 'menu.items.tea.description',
        price: 55,
      },
      {
        id: 'sparkling-water',
        nameKey: 'menu.items.sparklingWater.name',
        descriptionKey: 'menu.items.sparklingWater.description',
        price: 45,
      },
    ],
  },
];

export const menuPhotoBreaks: Partial<Record<MenuCategoryId, MenuImage>> = {
  coffee: { src: image4, altKey: 'menu.photos.coffee' },
  desserts: { src: image9, altKey: 'menu.photos.desserts' },
};

export const menuPreviewIds = [
  'cappuccino',
  'scrambled-eggs',
  'pancakes-with-fruit',
  'cheesecake',
  'flat-white',
  'bacon-jam-sandwich',
];

export function getMenuItemById(id: string) {
  for (const category of menuCategories) {
    const item = category.items.find((i) => i.id === id);
    if (item) return { item, category };
  }
  return null;
}

export function getMenuPreviewItems() {
  return menuPreviewIds
    .map((id) => getMenuItemById(id))
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null);
}
