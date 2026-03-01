import { Footer } from "@/components/sections/Footer";
import { AboutHeroSection } from "@/components/sections/about/AboutHeroSection";
import { AboutContentSection } from "@/components/sections/about/AboutContentSection";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-[#0a0a0a]">
      <AboutHeroSection />
      <AboutContentSection />
      <Footer />
    </main>
  );
}
