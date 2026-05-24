import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Playfair_Display, Lato } from 'next/font/google';
import { Calendar, Clock, ArrowLeft, Share2, Phone, ChevronRight } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { client } from '@/sanity/lib/client';
import { postQuery, morePostsQuery } from '@/sanity/lib/queries';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700', '900'], variable: '--font-playfair' });
const lato = Lato({ subsets: ['latin'], weight: ['300', '400', '700'], variable: '--font-lato' });

const categoryColors: Record<string, string> = {
  'Travel Guide': 'bg-[#d4af37]/20 text-[#b45309]',
  'Trip Ideas': 'bg-[#2e7d32]/10 text-[#2e7d32]',
  'Pilgrimage': 'bg-[#ff7a00]/10 text-[#ff7a00]',
  'Booking Tips': 'bg-blue-50 text-blue-700',
  'Corporate': 'bg-purple-50 text-purple-700',
  'Seasonal': 'bg-teal-50 text-teal-700',
};

// Fallback articles logic to keep site running before Sanity is configured
const fallbackArticles: any = {
  'mumbai-to-shirdi-complete-travel-guide': {
    title: 'Mumbai to Shirdi: The Complete Travel Guide for 2025',
    category: 'Travel Guide',
    date: 'May 20, 2025',
    readTime: '8 min read',
    content: `<p>The pilgrimage from Mumbai to Shirdi is one of the most popular spiritual journeys in western India. Covering approximately 250 kilometres and taking between 5 and 6 hours by road, this route draws millions of devotees each year to the sacred Sai Baba Temple.</p><h2>Best Routes</h2><p>Via NH160 is the fastest route.</p>`
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  
  let article: any = null;
  try {
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      article = await client.fetch(postQuery, { slug });
    }
  } catch (e) {
    console.error(e);
  }

  if (!article) {
    article = fallbackArticles[slug];
  }

  if (!article) return { title: 'Not Found' };

  return {
    title: article.title,
    description: article.excerpt || article.title,
    openGraph: {
      title: article.title,
      description: article.excerpt || article.title,
      type: 'article',
      publishedTime: article.publishedAt || article.date,
    },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  let article: any = null;
  let relatedArticles: any[] = [];
  
  try {
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      article = await client.fetch(postQuery, { slug });
      if (article) {
        relatedArticles = await client.fetch(morePostsQuery, { slug });
      }
    }
  } catch (e) {
    console.error(e);
  }

  // Fallback if not configured
  if (!article) {
    article = fallbackArticles[slug];
    if (!article) notFound();
  }

  return (
    <div className={`${playfair.variable} ${lato.variable} min-h-screen bg-[#fdfbf7]`}>
      {/* Breadcrumb Bar */}
      <div className="bg-[#fff9f0] border-b border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center text-sm font-sans text-gray-500 flex-wrap gap-y-1">
            <Link href="/" className="hover:text-[#d4af37] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2 text-gray-400 flex-shrink-0" />
            <Link href="/blog" className="hover:text-[#d4af37] transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2 text-gray-400 flex-shrink-0" />
            <span className="text-[#3e2723] font-medium truncate max-w-[280px] sm:max-w-none">
              {article.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <span
            className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-5 ${
              categoryColors[article.category] || 'bg-gray-100 text-gray-700'
            }`}
          >
            {article.category || 'Post'}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#3e2723] leading-tight mb-6">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 font-sans">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#d4af37]" />
              {(article.publishedAt || article.date) ? new Date(article.publishedAt || article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#d4af37]" />
              {article.readTime}
            </span>
            <button className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
          <div className="mt-8 h-1 w-20 bg-gradient-to-r from-[#d4af37] to-[#f4d58d] rounded-full" />
        </div>
      </header>

      {/* Article Body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 prose prose-lg prose-brown max-w-none">
        <div
          className="
            font-sans text-base leading-relaxed text-gray-700
            [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#3e2723] [&_h2]:mt-10 [&_h2]:mb-4
            [&_h2]:border-l-4 [&_h2]:border-[#d4af37] [&_h2]:pl-4 [&_h2]:font-serif
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#5d4037] [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:font-serif
            [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:mb-4 [&_p]:text-base
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-2 [&_ul]:text-gray-700
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:space-y-2 [&_ol]:text-gray-700
            [&_li]:text-gray-700
            [&_strong]:text-[#3e2723] [&_strong]:font-bold
          "
        >
          {article.body ? (
            <PortableText value={article.body} />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          )}
        </div>
      </article>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-[#fff8e1] rounded-xl border border-[#d4af37]/30 p-8 sm:p-10 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3e2723] mb-3">
            Book Your Trip with BM Car Rentals
          </h2>
          <p className="text-gray-600 font-sans mb-6 max-w-xl mx-auto">
            Affordable AC cabs with experienced drivers for all outstation &amp; local trips from Mumbai.
          </p>
          <div className="flex items-center justify-center gap-2 text-[#3e2723] font-semibold text-lg mb-6">
            <Phone className="w-5 h-5 text-[#d4af37]" />
            <a href="tel:+917208937208" className="hover:text-[#d4af37] transition-colors">+91 7208937208</a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/packages" className="inline-flex items-center justify-center px-6 py-3 bg-[#d4af37] hover:bg-[#b8960f] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all w-full sm:w-auto">
              View Packages
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-[#3e2723] hover:bg-[#5d4037] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all w-full sm:w-auto">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <h2 className="font-serif text-2xl font-bold text-[#3e2723] mb-6">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArticles.map((relArticle) => (
              <Link
                key={relArticle.slug?.current}
                href={`/blog/${relArticle.slug?.current}`}
                className="group bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-lg hover:border-[#d4af37]/40 transition-all duration-300"
              >
                <span
                  className={`inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full mb-3 ${
                    categoryColors[relArticle.category] || 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {relArticle.category}
                </span>
                <h3 className="font-serif font-bold text-[#3e2723] group-hover:text-[#d4af37] transition-colors leading-snug mb-2 line-clamp-2">
                  {relArticle.title}
                </h3>
                <p className="text-xs text-gray-500 font-sans flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {relArticle.publishedAt ? new Date(relArticle.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {relArticle.readTime}
                  </span>
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Link href="/blog" className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#b8960f] font-semibold transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>
      </div>
    </div>
  );
}
