import type { GalleryImage } from '../types/gallery';
import image1 from '../../public/img/gallery/1.jpg';
import image2 from '../../public/img/gallery/6.jpg';
import image3 from '../../public/img/gallery/3.jpg';
import image4 from '../../public/img/gallery/4.jpg';
import image5 from '../../public/img/gallery/5.jpg';
import image6 from '../../public/img/gallery/7.jpg';

export const galleryImages: GalleryImage[] = [
  { id: '1', altKey: 'home.gallery.alt1', span: 'wide', src: image1 },
  { id: '2', altKey: 'home.gallery.alt2', span: 'normal', src: image2 },
  { id: '3', altKey: 'home.gallery.alt3', span: 'tall', src: image3 },
  { id: '4', altKey: 'home.gallery.alt4', span: 'normal', src: image4 },
  { id: '5', altKey: 'home.gallery.alt5', span: 'normal', src: image5 },
  { id: '6', altKey: 'home.gallery.alt6', span: 'wide', src: image6 },
];

export const aboutImages = [
  { id: 'about-1', altKey: 'about.images.alt1' },
  { id: 'about-2', altKey: 'about.images.alt2' },
];
