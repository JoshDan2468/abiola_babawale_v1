import { Navigation } from '@/Pages/Navigation';
import { HeroSection } from '@/Pages/HeroSection';
import { GallerySection } from '@/Pages/GallerySection';
import { AboutSection } from '@/Pages/AboutSection';
import { ProgramsSection } from '@/Pages/ProgramsSection';
import { ImpactStats } from '@/Pages/ImpactStats';
import { TestimonialsSection } from '@/Pages/TestimonialsSection';
import { GetInvolvedSection } from '@/Pages/GetInvolvedSection';
import { NewsSection } from '@/Pages/NewsSection';
import { ContactSection } from '@/Pages/ContactSection';
import { Footer } from '@/Pages/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <GallerySection />
      <AboutSection />
      <ProgramsSection />
      <ImpactStats />
      <TestimonialsSection />
      <GetInvolvedSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

