import { HeroSection } from '@/components/sections/HeroSection';
import { WelcomeSection } from '@/components/sections/WelcomeSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col overflow-hidden'>
      <HeroSection />
      
      {/* Footer / Branding Effect Section */}
      <section className="relative h-[15rem] md:h-[25rem] w-full flex items-center justify-center bg-[#fafafa] dark:bg-[#0a0a0a] overflow-hidden -mt-20 md:-mt-32 z-0">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <TextHoverEffect text="CAPABLE" duration={0.8} />
        </div>
      </section>
      
      <WelcomeSection />
      <ServicesSection />
      <WhyChooseUsSection />
    </main>
  );
}
