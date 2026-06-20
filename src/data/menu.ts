import type { MenuCategory } from '../types/menu';

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
        id: 'continental',
        nameKey: 'menu.items.continental.name',
        descriptionKey: 'menu.items.continental.description',
        price: 145,
      },
      {
        id: 'scrambled-eggs',
        nameKey: 'menu.items.scrambledEggs.name',
        descriptionKey: 'menu.items.scrambledEggs.description',
        price: 135,
      },
      {
        id: 'granola-bowl',
        nameKey: 'menu.items.granolaBowl.name',
        descriptionKey: 'menu.items.granolaBowl.description',
        price: 125,
      },
      {
        id: 'croissant',
        nameKey: 'menu.items.croissant.name',
        descriptionKey: 'menu.items.croissant.description',
        price: 55,
      },
    ],
  },
  {
    id: 'brunch',
    titleKey: 'menu.categories.brunch',
    items: [
      {
        id: 'avocado-toast',
        nameKey: 'menu.items.avocadoToast.name',
        descriptionKey: 'menu.items.avocadoToast.description',
        price: 165,
      },
      {
        id: 'shakshuka',
        nameKey: 'menu.items.shakshuka.name',
        descriptionKey: 'menu.items.shakshuka.description',
        price: 175,
      },
      {
        id: 'club-sandwich',
        nameKey: 'menu.items.clubSandwich.name',
        descriptionKey: 'menu.items.clubSandwich.description',
        price: 155,
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

export const menuPreviewIds = [
  'cappuccino',
  'croissant',
  'avocado-toast',
  'cheesecake',
  'flat-white',
  'apple-strudel',
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
