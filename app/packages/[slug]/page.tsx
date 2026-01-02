import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Playfair_Display, Lato } from 'next/font/google';
import { 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  ArrowLeft, 
  ShieldCheck,
  Star
} from 'lucide-react';

// --- Font Configuration (Matches Contact Page) ---
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-playfair',
});

const lato = Lato({ 
  subsets: ['latin'], 
  weight: ['400', '700'],
  variable: '--font-lato',
});

// --- DATA SECTION ---
const packages = {
  'mumbai-to-lonavala': {
    title: 'Mumbai to Lonavala',
    desc: 'The perfect weekend getaway. Visit Bhushi Dam, Tiger Point, and the famous Wax Museum with comfort. Includes toll and parking charges.',
    distance: '90 km (approx)',
    duration: '1 Day / 2 Days',
    highlights: ['Bhushi Dam', 'Tiger Point', 'Wax Museum', 'Local Market Visit'],
    price: 'On Request'
  },
  'mumbai-to-alibaug': {
    title: 'Mumbai to Alibaug Beach',
    desc: 'Experience the coastal beauty of Alibaug. Relax at the beach or visit the historic Kolaba Fort. Perfect for family picnics and water sports enthusiasts.',
    distance: '100 km (approx)',
    duration: '1 Day / 2 Days',
    highlights: ['Alibaug Beach', 'Kolaba Fort', 'Nagaon Beach', 'Water Sports Activities'],
    price: 'On Request'
  },
  'mumbai-to-shirdi': {
    title: 'Mumbai to Shirdi Car Rental',
    desc: 'Complete Shirdi Saibaba Darshan package with comfortable AC cabs. We ensure a smooth divine journey with experienced drivers who know the best routes.',
    distance: '240 km (approx)',
    duration: '1 Day / 2 Days',
    highlights: ['Doorstep Pickup', 'Direct Darshan Assistance', 'Halt for Food', 'Comfortable AC Ride'],
    price: 'On Request'
  },
  'mumbai-to-daman': {
    title: 'Mumbai to Daman',
    desc: 'Explore the Portuguese history and beaches of Daman. Visit Devka Beach, Jampore Beach and Moti Daman Fort. A perfect blend of history and relaxation.',
    distance: '170 km (approx)',
    duration: '2 Days',
    highlights: ['Devka Beach', 'Moti Daman Fort', 'Light House', 'Church of Bom Jesus'],
    price: 'On Request'
  },
  'mumbai-trimbakeshwar-nashik': {
    title: 'Trimbakeshwar & Nashik Tour',
    desc: 'Spiritual journey to the Trimbakeshwar Jyotirlinga followed by Nashik sightseeing including Panchvati and Sula Vineyards.',
    distance: '170 km (approx)',
    duration: '1 Day / 2 Days',
    highlights: ['Trimbakeshwar Temple', 'Panchvati & Ram Kund', 'Sula Vineyards', 'Muktidham Temple'],
    price: 'On Request'
  },
  'mumbai-to-bhimashankar': {
    title: 'Mumbai to Bhimashankar',
    desc: 'Visit the sixth Jyotirlinga shrine nestled in the Sahyadri hills. A scenic drive through nature reserves and lush greenery.',
    distance: '200 km (approx)',
    duration: '1 Day',
    highlights: ['Bhimashankar Temple', 'Wildlife Sanctuary', 'Gupt Bhimashankar', 'Scenic Ghat Drive'],
    price: 'On Request'
  },
  'mumbai-local-sightseeing': {
    title: 'Mumbai City Sightseeing',
    desc: 'Explore the City of Dreams in comfort. From South Mumbai heritage to Bandra suburbs. See the best of Mumbai in a single day.',
    distance: '80 km / 8 hrs',
    duration: 'Full Day',
    highlights: ['Gateway of India', 'Marine Drive', 'Siddhivinayak Temple', 'Juhu Beach', 'Bandra Fort'],
    price: 'On Request'
  },
  'mumbai-ashtavinayak': {
    title: 'Mumbai to Ashtavinayak Yatra',
    desc: 'Complete pilgrimage tour of the eight Ganesha temples in Maharashtra. A divine journey covering roughly 650-800km across Pune, Ahmednagar and Raigad.',
    distance: '700 km (approx)',
    duration: '3 Days / 4 Nights',
    highlights: ['All 8 Ganpati Temples', 'Experienced Guide/Driver', 'Clean & Sanitized Cabs', 'Flexible Halts'],
    price: 'On Request'
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

// --- METADATA ---
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const pkg = packages[slug as keyof typeof packages];
  
  if (!pkg) return { title: 'Package Not Found' };
  
  return {
    title: `${pkg.title} | BM Car Rentals`,
    description: pkg.desc
  };
}

// --- MAIN COMPONENT ---
export default async function PackageDetail({ params }: Props) {
  const { slug } = await params;
  const pkg = packages[slug as keyof typeof packages];

  if (!pkg) return notFound();

  const whatsappMessage = `Hello BM Car Rentals, I am interested in the *${pkg.title}* package. Please share the best price and availability.`;
  const whatsappUrl = `https://wa.me/+917208937208?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className={`min-h-screen bg-[#fdfbf7] text-slate-800 ${playfair.variable} ${lato.variable} font-sans pb-20`}>
      
      {/* --- PAGE HEADER (Matches Contact Page) --- */}
      <div className="relative w-full h-[400px] bg-[#3e2723] overflow-hidden flex items-center justify-center">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#fdfbf7]/10"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
             <Link 
                href="/packages" 
                className="inline-flex items-center text-[#d4af37] hover:text-[#fcf5e5] mb-6 transition-colors text-sm font-bold uppercase tracking-widest border border-[#d4af37] px-4 py-2 rounded-full hover:bg-[#d4af37]/10"
             >
                <ArrowLeft size={14} className="mr-2" />
                Back to All Packages
             </Link>

            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#fcf5e5] drop-shadow-lg mb-4 leading-tight">
                {pkg.title}
            </h1>
            
            <div className="flex flex-wrap justify-center gap-6 text-[#e6dcc8] text-sm md:text-base mt-4">
                <div className="flex items-center gap-2">
                    <ShieldCheck size={18} className="text-[#d4af37]" />
                    <span>Premium Service</span>
                </div>
                <div className="flex items-center gap-2">
                    <Star size={18} className="text-[#d4af37]" />
                    <span>Highly Rated</span>
                </div>
            </div>
        </div>
      </div>

      {/* --- MAIN CONTENT CONTAINER (Matches Contact Layout) --- */}
      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          
          {/* --- LEFT COLUMN: Details --- */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* 1. Overview Card */}
            <div className="bg-[#fffdf5] p-8 md:p-10 rounded-xl shadow-2xl border border-[#e5e7eb] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#d4af37]"></div>
                
                <h2 className="text-3xl font-serif font-bold text-[#3e2723] mb-6">Package Overview</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                    {pkg.desc}
                </p>

                {/* Info Grid (Duration/Distance) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-[#e5e7eb]">
                    <div className="flex items-center gap-4 group">
                        <div className="w-14 h-14 bg-[#fff8e1] rounded-full flex items-center justify-center border border-[#d4af37] shrink-0">
                            <Clock className="text-[#b45309]" size={28} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-[#3e2723] uppercase tracking-wider">Duration</p>
                            <p className="text-xl font-serif font-bold text-[#b45309]">{pkg.duration}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                        <div className="w-14 h-14 bg-[#fff8e1] rounded-full flex items-center justify-center border border-[#d4af37] shrink-0">
                            <MapPin className="text-[#b45309]" size={28} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-[#3e2723] uppercase tracking-wider">Total Distance</p>
                            <p className="text-xl font-serif font-bold text-[#b45309]">{pkg.distance}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Highlights Card */}
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[#e5e7eb]">
                <h2 className="text-2xl font-serif font-bold text-[#3e2723] mb-8 flex items-center gap-3">
                    <CheckCircle2 className="text-[#d4af37]" /> 
                    Key Highlights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                    {pkg.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#fff8e1] transition-colors border border-transparent hover:border-[#d4af37]/30">
                            <div className="min-w-[8px] h-[8px] rounded-full bg-[#d4af37] mt-2"></div>
                            <span className="text-gray-700 font-medium">{highlight}</span>
                        </div>
                    ))}
                </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Booking Card (Sticky) --- */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-t-4 border-[#d4af37] sticky top-24">
              <div className="text-center mb-8">
                  <h3 className="text-2xl font-serif font-bold text-[#3e2723] mb-2">Ready to Book?</h3>
                  <p className="text-gray-500 text-sm">Get an instant quote for this package.</p>
              </div>
              
              <div className="space-y-4">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full group bg-[#25D366] text-white py-4 font-bold rounded-lg shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <MessageCircle size={22} className="text-white" />
                  <span className="font-serif tracking-wide text-lg">WhatsApp Inquiry</span>
                </a>
                
                <a 
                  href="tel:+917208937208" 
                  className="w-full group bg-gradient-to-r from-[#3e2723] to-[#5d4037] text-white py-4 font-bold rounded-lg shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center gap-3 border border-[#3e2723]"
                >
                  <Phone size={22} />
                  <span className="font-serif tracking-wide text-lg">Call Now</span>
                </a>
              </div>

              {/* Trust Badge Small */}
              <div className="mt-8 bg-[#fff8e1] p-4 rounded-lg border border-[#d4af37]/30 text-center">
                  <p className="text-[#b45309] text-xs font-bold uppercase tracking-widest mb-1">Why Choose Us?</p>
                  <p className="text-[11px] text-[#3e2723] opacity-80">
                      Transparent Pricing • No Hidden Charges • 24/7 Support
                  </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}