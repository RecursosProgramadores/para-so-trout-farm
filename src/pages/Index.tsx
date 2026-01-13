import { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { EventBanner } from '@/components/sections/EventBanner';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExperiencesSection } from '@/components/sections/ExperiencesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  useEffect(() => {
    // Update document title for SEO
    document.title = "Piscigranja El Paraíso | Pesca y Restaurante en Cajamarca, Perú";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Piscigranja de truchas El Paraíso en Cajamarca, Perú. Pesca deportiva gratuita, restaurante campestre, turismo vivencial y eventos especiales. ¡Vive la experiencia!');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <EventBanner />
        <AboutSection />
        <ExperiencesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
