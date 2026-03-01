import { Footer } from "@/components/sections/Footer";
import { ContactSection } from "@/components/sections/contact/ContactSection";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-[#0a0a0a]">
      <ContactSection />
      <Footer />
    </main>
  );
}
