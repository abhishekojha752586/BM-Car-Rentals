import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Playfair_Display, Lato } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Travel Blog - Tips, Guides & Trip Ideas',
  description:
    'Explore travel tips, trip planning guides, and booking advice for Mumbai car rentals. Discover the best routes, destinations, and travel hacks with BM Car Rentals.',
};

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-playfair',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
});

const blogArticles = [
  {
    slug: 'mumbai-to-shirdi-complete-travel-guide',
    title: 'Mumbai to Shirdi: The Complete Travel Guide for 2025',
    excerpt:
      'Planning a trip from Mumbai to Shirdi? Discover the best routes, travel times, and tips to make your Sai Baba pilgrimage smooth and memorable. From highway stops to darshan timings, we cover it all.',
    category: 'Travel Guide',
    date: 'May 20, 2025',
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'top-weekend-getaways-from-mumbai',
    title: 'Top 10 Weekend Getaways from Mumbai by Car',
    excerpt:
      'Escape the city chaos with these stunning weekend destinations. From the misty hills of Lonavala to the serene beaches of Alibaug, find your perfect road trip just hours from Mumbai.',
    category: 'Trip Ideas',
    date: 'May 15, 2025',
    readTime: '6 min read',
    featured: true,
  },
  {
    slug: 'ashtavinayak-yatra-planning-guide',
    title: 'Ashtavinayak Yatra: How to Plan the Perfect Pilgrimage',
    excerpt:
      'The sacred Ashtavinayak circuit covers 8 Ganesh temples across Maharashtra. Learn the ideal route, temple timings, and how to book a comfortable cab for this divine journey.',
    category: 'Pilgrimage',
    date: 'May 10, 2025',
    readTime: '10 min read',
    featured: false,
  },
  {
    slug: 'how-to-book-a-car-rental-first-time',
    title: "First Time Booking a Car Rental? Here's What You Need to Know",
    excerpt:
      'From choosing the right car type to understanding pricing structures, this beginner-friendly guide helps you book your first rental car in Mumbai with complete confidence.',
    category: 'Booking Tips',
    date: 'May 5, 2025',
    readTime: '5 min read',
    featured: false,
  },
  {
    slug: 'corporate-car-rental-benefits-mumbai',
    title:
      '5 Reasons Your Mumbai Business Needs a Corporate Car Rental Partner',
    excerpt:
      'Discover how a dedicated corporate car rental service saves time, money, and stress. From airport pickups to client meetings, learn why top companies trust BM Car Rentals.',
    category: 'Corporate',
    date: 'April 28, 2025',
    readTime: '5 min read',
    featured: false,
  },
  {
    slug: 'best-road-trip-snacks-and-stops-mumbai-pune',
    title: 'Mumbai to Pune: Best Highway Stops, Food & Road Trip Tips',
    excerpt:
      "The Mumbai-Pune Expressway is one of India's most popular routes. Discover the tastiest dhabas, cleanest restrooms, and scenic viewpoints along the way.",
    category: 'Travel Guide',
    date: 'April 20, 2025',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'monsoon-travel-tips-maharashtra',
    title:
      'Monsoon Travel in Maharashtra: Safety Tips & Best Destinations',
    excerpt:
      'Maharashtra transforms during monsoons with lush waterfalls and green valleys. Learn essential safety tips and the most breathtaking monsoon destinations to visit by car.',
    category: 'Seasonal',
    date: 'April 15, 2025',
    readTime: '6 min read',
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  'Travel Guide': 'bg-[#d4af37]/20 text-[#b45309]',
  'Trip Ideas': 'bg-[#2e7d32]/10 text-[#2e7d32]',
  Pilgrimage: 'bg-[#ff7a00]/10 text-[#ff7a00]',
  'Booking Tips': 'bg-blue-50 text-blue-700',
  Corporate: 'bg-purple-50 text-purple-700',
  Seasonal: 'bg-teal-50 text-teal-700',
};

const gradients = [
  'from-[#d4af37]/30 via-[#b45309]/20 to-[#3e2723]/40',
  'from-[#2e7d32]/30 via-[#4caf50]/20 to-[#1b5e20]/40',
  'from-[#ff7a00]/30 via-[#ff9800]/20 to-[#e65100]/40',
  'from-[#1565c0]/30 via-[#42a5f5]/20 to-[#0d47a1]/40',
  'from-[#7b1fa2]/30 via-[#ab47bc]/20 to-[#4a148c]/40',
  'from-[#00838f]/30 via-[#26c6da]/20 to-[#006064]/40',
  'from-[#d4af37]/30 via-[#ff7a00]/20 to-[#3e2723]/40',
];

import { client } from '@/sanity/lib/client';
import { postsQuery } from '@/sanity/lib/queries';

export default async function BlogPage() {
  let blogArticles: any[] = [];
  try {
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      blogArticles = await client.fetch(postsQuery);
    }
  } catch (error) {
    console.error("Failed to fetch posts from Sanity:", error);
  }

  // The 7 original hardcoded articles
  const originalArticles = [
    {
      slug: { current: 'mumbai-to-shirdi-complete-travel-guide' },
      title: 'Mumbai to Shirdi: The Complete Travel Guide for 2025',
      excerpt: 'Planning a trip from Mumbai to Shirdi? Discover the best routes, travel times, and tips to make your Sai Baba pilgrimage smooth and memorable. From highway stops to darshan timings, we cover it all.',
      category: 'Travel Guide',
      publishedAt: '2025-05-20',
      readTime: '8 min read',
      featured: true,
    },
    {
      slug: { current: 'top-weekend-getaways-from-mumbai' },
      title: 'Top 10 Weekend Getaways from Mumbai by Car',
      excerpt: 'Escape the city chaos with these stunning weekend destinations. From the misty hills of Lonavala to the serene beaches of Alibaug, find your perfect road trip just hours from Mumbai.',
      category: 'Trip Ideas',
      publishedAt: '2025-05-15',
      readTime: '6 min read',
      featured: true,
    },
    {
      slug: { current: 'ashtavinayak-yatra-planning-guide' },
      title: 'Ashtavinayak Yatra: How to Plan the Perfect Pilgrimage',
      excerpt: 'The sacred Ashtavinayak circuit covers 8 Ganesh temples across Maharashtra. Learn the ideal route, temple timings, and how to book a comfortable cab for this divine journey.',
      category: 'Pilgrimage',
      publishedAt: '2025-05-10',
      readTime: '10 min read',
      featured: false,
    },
    {
      slug: { current: 'how-to-book-a-car-rental-first-time' },
      title: "First Time Booking a Car Rental? Here's What You Need to Know",
      excerpt: 'From choosing the right car type to understanding pricing structures, this beginner-friendly guide helps you book your first rental car in Mumbai with complete confidence.',
      category: 'Booking Tips',
      publishedAt: '2025-05-05',
      readTime: '5 min read',
      featured: false,
    },
    {
      slug: { current: 'corporate-car-rental-benefits-mumbai' },
      title: '5 Reasons Your Mumbai Business Needs a Corporate Car Rental Partner',
      excerpt: 'Discover how a dedicated corporate car rental service saves time, money, and stress. From airport pickups to client meetings, learn why top companies trust BM Car Rentals.',
      category: 'Corporate',
      publishedAt: '2025-04-28',
      readTime: '5 min read',
      featured: false,
    },
    {
      slug: { current: 'best-road-trip-snacks-and-stops-mumbai-pune' },
      title: 'Mumbai to Pune: Best Highway Stops, Food & Road Trip Tips',
      excerpt: "The Mumbai-Pune Expressway is one of India's most popular routes. Discover the tastiest dhabas, cleanest restrooms, and scenic viewpoints along the way.",
      category: 'Travel Guide',
      publishedAt: '2025-04-20',
      readTime: '7 min read',
      featured: false,
    },
    {
      slug: { current: 'monsoon-travel-tips-maharashtra' },
      title: 'Monsoon Travel in Maharashtra: Safety Tips & Best Destinations',
      excerpt: 'Maharashtra transforms during monsoons with lush waterfalls and green valleys. Learn essential safety tips and the most breathtaking monsoon destinations to visit by car.',
      category: 'Seasonal',
      publishedAt: '2025-04-15',
      readTime: '6 min read',
      featured: false,
    }
  ];

  // Merge Sanity articles with original articles, ensuring no duplicates by slug
  const sanitySlugs = new Set(blogArticles.map(a => a.slug?.current));
  for (const orig of originalArticles) {
    if (!sanitySlugs.has(orig.slug.current)) {
      blogArticles.push(orig);
    }
  }

  // Sort by publishedAt date descending
  blogArticles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  const featuredArticles = blogArticles.filter((a) => a.featured);

  return (
    <main className={`${playfair.variable} ${lato.variable} font-sans`}>
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#3e2723] via-[#5d4037] to-[#3e2723] py-20 md:py-28">
        {/* Decorative gold circles */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#d4af37] opacity-10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#d4af37] opacity-10 blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f4d58d] opacity-10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 text-center">
          {/* Icon badge */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#d4af37]">
            <BookOpen className="h-8 w-8 text-[#3e2723]" />
          </div>

          <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            BM Car Rentals Blog
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-300 md:text-xl">
            Travel tips, trip planning guides, and booking advice for your next
            journey
          </p>

          {/* Gold divider */}
          <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-[#d4af37]" />
        </div>
      </section>

      {/* ── Featured Stories Section ── */}
      <section className="bg-[#fdfbf7] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          {/* Section header */}
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-[#3e2723] md:text-4xl">
              Featured Stories
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-[#d4af37]" />
          </div>

          {/* Featured cards — 2 columns */}
          <div className="grid gap-8 md:grid-cols-2">
            {featuredArticles.map((article, idx) => (
              <Link
                key={article.slug.current}
                href={`/blog/${article.slug.current}`}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Gradient placeholder image */}
                <div
                  className={`relative h-56 bg-gradient-to-br ${gradients[idx]}`}
                >
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[article.category] ?? 'bg-gray-100 text-gray-700'}`}
                  >
                    {article.category}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#3e2723] transition-colors group-hover:text-[#b45309]">
                    {article.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-gray-600">
                    {article.excerpt}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#b45309] transition-colors group-hover:text-[#d4af37]">
                    Read Article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── All Articles Grid ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          {/* Section header */}
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-[#3e2723] md:text-4xl">
              All Articles
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-[#d4af37]" />
          </div>

          {/* 3-column grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogArticles.map((article, idx) => (
              <Link
                key={article.slug.current}
                href={`/blog/${article.slug.current}`}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Gradient placeholder */}
                <div
                  className={`relative h-44 bg-gradient-to-br ${gradients[idx % gradients.length]}`}
                >
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[article.category] ?? 'bg-gray-100 text-gray-700'}`}
                  >
                    {article.category}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <div className="mb-2 flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#3e2723] transition-colors group-hover:text-[#b45309]">
                    {article.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                    {article.excerpt}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#b45309] transition-colors group-hover:text-[#d4af37]">
                    Read Article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-gradient-to-r from-[#3e2723] to-[#5d4037] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-[#d4af37] md:text-4xl">
            Ready to Hit the Road?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Turn your travel inspiration into reality. Browse our packages or
            get in touch — we&apos;ll handle the ride while you enjoy the
            journey.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 rounded-xl bg-[#d4af37] px-8 py-3.5 text-sm font-bold text-[#3e2723] shadow-lg transition-all duration-300 hover:bg-[#f4d58d] hover:shadow-xl"
            >
              Browse Packages
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-[#d4af37] px-8 py-3.5 text-sm font-bold text-[#d4af37] transition-all duration-300 hover:bg-[#d4af37]/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
