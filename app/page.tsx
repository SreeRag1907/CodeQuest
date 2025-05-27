import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { HeroSection } from '@/components/marketing/hero-section';
import { FeaturesSection } from '@/components/marketing/features-section';
import { PricingSection } from '@/components/marketing/pricing-section';
import { TestimonialsSection } from '@/components/marketing/testimonials-section';
import { SiteFooter } from '@/components/site-footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
      </main>
      <SiteFooter />
    </div>
  );
}