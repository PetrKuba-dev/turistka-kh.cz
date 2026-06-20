export type MenuCategoryId =
  | 'coffee'
  | 'breakfast'
  | 'brunch'
  | 'desserts'
  | 'drinks';

export interface MenuItem {
  id: string;
  nameKey: string;
  descriptionKey: string;
  price: number;
}

export interface MenuCategory {
  id: MenuCategoryId;
  titleKey: string;
  items: MenuItem[];
}
