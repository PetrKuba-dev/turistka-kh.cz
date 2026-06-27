export type MenuCategoryId =
  | 'coffee'
  | 'breakfast'
  | 'brunch'
  | 'desserts'
  | 'drinks';

export type MenuLayoutVariant = 'compact' | 'spacious';

export type MenuItemBadge = 'weekend' | 'seasonal';

export type AllergenId =
  | 'gluten'
  | 'crustaceans'
  | 'eggs'
  | 'fish'
  | 'peanuts'
  | 'soy'
  | 'milk'
  | 'nuts'
  | 'celery'
  | 'mustard'
  | 'sesame'
  | 'sulphites'
  | 'lupin'
  | 'molluscs';

export interface MenuItemExtra {
  nameKey: string;
  price: number;
}

export interface MenuItem {
  id: string;
  nameKey: string;
  descriptionKey: string;
  price: number;
  extras?: MenuItemExtra[];
  badge?: MenuItemBadge;
  allergens?: AllergenId[];
}

export interface MenuImage {
  src: string;
  altKey: string;
}

export interface MenuCategory {
  id: MenuCategoryId;
  titleKey: string;
  introKey: string;
  layout: MenuLayoutVariant;
  items: MenuItem[];
  image?: MenuImage;
  altMilkNoteKey?: string;
}
