import { HeroSection } from './HeroSection';
import { HomeQuickLinks } from './HomeQuickLinks';
import { ImpactStats } from './ImpactStats';
import { TestimonialsSection } from './TestimonialsSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ImpactStats />
      <HomeQuickLinks />
      <TestimonialsSection />
    </>
  );
}
