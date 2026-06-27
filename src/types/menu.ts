export type MenuCategoryId =
  | 'coffee'
  | 'breakfast'
  | 'brunch'
  | 'desserts'
  | 'drinks';

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
}

export interface MenuImage {
  src: string;
  altKey: string;
}

export interface MenuCategory {
  id: MenuCategoryId;
  titleKey: string;
  items: MenuItem[];
  image?: MenuImage;
}
