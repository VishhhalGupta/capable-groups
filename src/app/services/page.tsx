import { Footer } from "@/components/sections/Footer";
import { ServicesHeroSection } from "@/components/sections/services/ServicesHeroSection";
import { AllServicesSection } from "@/components/sections/services/AllServicesSection";
import { ServicesProcessSection } from "@/components/sections/services/ServicesProcessSection";

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-[#0a0a0a]">
      <ServicesHeroSection />
      <AllServicesSection />
      <ServicesProcessSection />
      <Footer />
    </main>
  );
}
