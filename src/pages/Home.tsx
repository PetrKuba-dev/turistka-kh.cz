import HeroParallax from '../components/home/HeroParallax';
import NewsShowcase from '../components/home/NewsShowcase';
import IntroSection from '../components/home/IntroSection';
import { newsItems } from '../data/news';
import HighlightsSection from '../components/home/HighlightsSection';
import MenuPreview from '../components/home/MenuPreview';
import MoodGallery from '../components/home/MoodGallery';
import FamilySection from '../components/home/FamilySection';
import ContactPreview from '../components/home/ContactPreview';

export default function HomePage() {
  return (
    <>
      <HeroParallax />
      {/* <IntroSection /> */}
      <NewsShowcase items={newsItems} />
      {/* <HighlightsSection /> */}
      {/* <MenuPreview /> */}
      <MoodGallery />
      {/* <FamilySection /> */}
      <ContactPreview />
    </>
  );
}
