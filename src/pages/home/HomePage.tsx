import { HeroSection } from './HeroSection';
import { HomeMissionVisionSection } from './HomeMissionVisionSection';
import { HomeHumanistServicesSection } from './HomeHumanistServicesSection';
// import { HomeQuickLinks } from './HomeQuickLinks';
import { HomeProgramsSection } from './HomeProgramsSection';
import { HomeTrustSection } from './HomeTrustSection';
import { ImpactStats } from './ImpactStats';
import { HomePartnershipSection } from './HomePartnershipSection';
// import { TestimonialsSection } from './TestimonialsSection';
import { HomeCtaSection } from './HomeCtaSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <HomeMissionVisionSection />
      <HomeHumanistServicesSection />
      {/* <HomeQuickLinks /> */}
      <HomeProgramsSection />
      <HomeTrustSection />
      <ImpactStats />
      <HomePartnershipSection />
      {/* <TestimonialsSection /> */}
      <HomeCtaSection />
    </>
  );
}
