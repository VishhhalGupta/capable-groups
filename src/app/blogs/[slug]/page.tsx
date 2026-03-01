import { blogPosts } from "@/lib/data/blogs";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Footer } from "@/components/sections/Footer";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-[#0a0a0a]">
      {/* Article Header */}
      <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-sm font-medium text-brand-blue hover:text-blue-700 dark:hover:text-blue-400 mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Journal
          </Link>

          <div className="flex items-center gap-4 text-sm font-medium text-slate-500 dark:text-slate-400 mb-6 font-mono tracking-wide">
            <span className="text-brand-yellow font-bold uppercase">{post.category}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 py-6 border-y border-slate-100 dark:border-slate-800">
             <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
               <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
             </div>
             <div>
               <p className="text-base font-bold text-slate-900 dark:text-white">{post.author.name}</p>
               <p className="text-sm text-slate-500 dark:text-slate-400">{post.author.role}</p>
             </div>
          </div>
        </div>
      </section>

      {/* Featured Cover Image */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-16 md:mb-24">
         <div className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-[2rem] overflow-hidden shadow-2xl">
            <Image 
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
         </div>
      </section>

      {/* Article Body */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl mb-32">
        <article className="prose prose-lg md:prose-xl prose-slate dark:prose-invert max-w-none 
           prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 
           prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
           prose-p:leading-relaxed prose-p:text-slate-600 dark:prose-p:text-slate-300
           prose-a:text-brand-blue hover:prose-a:text-blue-700
           prose-img:rounded-2xl prose-img:shadow-lg
           prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-800
           marker:text-brand-blue prose-li:text-slate-600 dark:prose-li:text-slate-300"
        >
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </section>

      <Footer />
    </main>
  );
}
