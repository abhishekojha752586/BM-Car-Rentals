'use client'; // This directive is required for interactivity (useState)

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, ArrowRight, ChevronDown } from 'lucide-react';

// Data for the 8 Packages
const allPackages = [
  {
    slug: 'mumbai-to-lonavala',
    title: 'Mumbai to Lonavala',
    desc: 'The perfect weekend getaway. Visit Bhushi Dam, Tiger Point, and the famous Wax Museum with comfort.',
    image: '/Carousel 2 lonawala.png' 
  },
  {
    slug: 'mumbai-to-alibaug',
    title: 'Mumbai to Alibaug Beach',
    desc: 'Experience the coastal beauty of Alibaug. Relax at the beach or visit the historic Kolaba Fort.',
    image: '/Alibaug Beach.png' 
  },
  {
    slug: 'mumbai-to-shirdi',
    title: 'Mumbai to Shirdi',
    desc: 'Complete Shirdi Saibaba Darshan package. Hassle-free pickup, waiting for Darshan, and drop.',
    image: '/Carousel 1.png' 
  },
  {
    slug: 'mumbai-to-daman',
    title: 'Mumbai to Daman',
    desc: 'Explore the Portuguese history and beaches of Daman. Perfect for a relaxing road trip.',
    image: '/Daman Tour.png'
  },
  {
    slug: 'mumbai-trimbakeshwar-nashik',
    title: 'Trimbakeshwar & Nashik',
    desc: 'Spiritual journey to the Trimbakeshwar Jyotirlinga followed by Nashik sightseeing.',
    image: '/Nashik tour.png' 
  },
  {
    slug: 'mumbai-to-bhimashankar',
    title: 'Mumbai to Bhimashankar',
    desc: 'Visit the sixth Jyotirlinga shrine nestled in the Sahyadri hills. scenic drive guaranteed.',
    image: '/bhimashankar temple.png' 
  },
  {
    slug: 'mumbai-local-sightseeing',
    title: 'Mumbai City Sightseeing',
    desc: 'Gateway of India, Marine Drive, Juhu Beach, and Siddhivinayak. See Mumbai in a day.',
    image: '/City sightseeing.png' 
  },
  {
    slug: 'mumbai-ashtavinayak',
    title: 'Mumbai to Ashtavinayak',
    desc: 'Complete pilgrimage tour of the eight Ganesha temples in Maharashtra.',
    image: '/carousel 4 ashtvinayak yatra.png' 
  }
];

export default function PackagesPage() {
  const [visibleCount, setVisibleCount] = useState(4); // Start with 4 visible
  const whatsappNumber = "919999999999"; 

  const handleShowMore = () => {
    setVisibleCount(allPackages.length); // Show all when clicked
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20 px-4">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-6">
          Explore Our <span className="text-yellow-600">Travel Packages</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Choose your destination and let us handle the drive. Premium cars, experienced drivers, and unforgettable journeys.
        </p>
      </div>
      
      {/* Packages Grid - Showing only 'visibleCount' items */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allPackages.slice(0, visibleCount).map((pkg) => {
          
          const message = `Namaste BM Car Rentals, I am interested in booking the *${pkg.title}* package. Please share the itinerary and pricing details.`;
          const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

          return (
            <div 
              key={pkg.slug} 
              className="group bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700"
            >
              {/* Image Section */}
              <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
                <Image 
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content Section */}
              <div className="p-5 flex-1 flex flex-col">
                <h2 className="text-xl font-serif font-bold text-blue-900 mb-2 line-clamp-1">
                  {pkg.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-1">
                    {pkg.desc}
                </p>

                {/* Buttons */}
                <div className="mt-auto flex flex-col gap-3">
                  <Link 
                    href={`/packages/${pkg.slug}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-blue-900 text-blue-900 font-semibold text-sm hover:bg-blue-50 transition-colors"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </Link>
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-green-600 text-white font-semibold text-sm hover:bg-green-700 shadow-sm hover:shadow-md transition-all"
                  >
                    <MessageCircle size={18} />
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Show More Button - Only shows if there are hidden packages */}
      {visibleCount < allPackages.length && (
        <div className="mt-16 text-center">
            <button 
                onClick={handleShowMore}
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-900 text-white font-bold rounded-full hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-900/30 transform hover:-translate-y-1"
            >
                View All Packages
                <ChevronDown size={20} />
            </button>
            <p className="mt-4 text-gray-500 text-sm">
                Showing {visibleCount} of {allPackages.length} packages
            </p>
        </div>
      )}
    </div>
  );
}