import HeroParallax from '../components/home/HeroParallax';
import IntroSection from '../components/home/IntroSection';
import HighlightsSection from '../components/home/HighlightsSection';
import MenuPreview from '../components/home/MenuPreview';
import MoodGallery from '../components/home/MoodGallery';
import FamilySection from '../components/home/FamilySection';
import ContactPreview from '../components/home/ContactPreview';

export default function HomePage() {
  return (
    <>
      <HeroParallax />
      <IntroSection />
      <HighlightsSection />
      <MenuPreview />
      <MoodGallery />
      <FamilySection />
      <ContactPreview />
    </>
  );
}
