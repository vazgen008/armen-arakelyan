import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { EducationSection } from '@/components/EducationSection';
import { VideoSection } from '@/components/VideoSection';
import { PackagesSection } from '@/components/PackagesSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <EducationSection />
        <VideoSection />
        <PackagesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
