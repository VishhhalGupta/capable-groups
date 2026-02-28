import { HeroSection } from '@/components/sections/HeroSection';
import { WelcomeSection } from '@/components/sections/WelcomeSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { Footer } from '@/components/sections/Footer';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';

export default function Home() {
  return (
    <main id="top" className='flex min-h-screen flex-col'>
      <HeroSection />
      
      { /* Branding Effect Section */}
      <section className="relative w-full flex items-center justify-center bg-[#fafafa] dark:bg-[#0a0a0a] z-0 pt-[40px] pb-[0px] -mb-10 md:-mb-12">
        <div className="w-full flex items-center justify-center px-2 md:px-4 lg:px-6">
          <TextHoverEffect text="CAPABLE" duration={0.80} />
        </div>
      </section>
      
      <WelcomeSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <Footer />
    </main>
  );
}
