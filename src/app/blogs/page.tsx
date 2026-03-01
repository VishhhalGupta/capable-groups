import { Footer } from "@/components/sections/Footer";
import { BlogHeroSection } from "@/components/sections/blogs/BlogHeroSection";
import { BlogGridSection } from "@/components/sections/blogs/BlogGridSection";

export default function BlogsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-[#0a0a0a]">
      <BlogHeroSection />
      <BlogGridSection />
      <Footer />
    </main>
  );
}
