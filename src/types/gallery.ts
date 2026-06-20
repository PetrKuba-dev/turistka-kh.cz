export interface GalleryImage {
  id: string;
  altKey: string;
  src?: string;
  span?: 'normal' | 'wide' | 'tall';
}

export interface Highlight {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: 'coffee' | 'cake' | 'home' | 'heart';
}
