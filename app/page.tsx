'use client'; 

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Playfair_Display, Lato } from 'next/font/google';
import { MapPin, Clock, ShieldCheck, Phone, CheckCircle2, ArrowRight, Car, Coins, Star } from 'lucide-react';

// --- Font Configuration ---
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

// --- Constants ---
const heroImages = [
    '/Carousel 1.png', 
    '/Carousel 2 lonawala.png', 
    '/Carousel 3 Mahabaleshwar.png',
    '/carousel 4 ashtvinayak yatra.png',
    '/Corporate.png'
];

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carousel Logic
  useEffect(() => {
    if (heroImages.length <= 1) return; 
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); 
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`min-h-screen bg-[#fdfbf7] text-slate-800 ${playfair.variable} ${lato.variable} font-sans`}>
      
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[60vh] min-h-[450px] md:h-[75vh] md:min-h-[550px] lg:h-[80vh] lg:min-h-[650px] bg-slate-900 overflow-hidden shadow-2xl group">
        
        {/* Background Slider */}
        {heroImages.map((src, index) => (
            <div 
                key={src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
                    ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}
                `}
            >
             <Image
                src={src}
                alt="Travel Destination"
                fill
                priority={index === 0}
                // object-contain shows complete image, object-center keeps it centered
                className="object-contain object-center"
                quality={90}
             />
             {/* Gradient Overlay: Darker at bottom for text readability */}
             <div className="absolute inset-0 bg-gradient-to-t from-[#3e2723]/95 via-[#3e2723]/30 to-black/30"></div>
            </div>
        ))}

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pb-10 md:pb-20">
           {/* <div className="animate-fade-in-up space-y-3 md:space-y-4 max-w-4xl">
                <span className="inline-block py-1 px-4 rounded-full bg-[#d4af37]/20 border border-[#d4af37] text-[#d4af37] text-[10px] md:text-sm font-bold tracking-widest uppercase backdrop-blur-md">
                    Premium Travel Partner
                </span>
                <h1 className="text-3xl md:text-7xl font-serif font-bold text-white drop-shadow-lg leading-tight">
                    Journey with <span className="text-[#d4af37]">Devotion</span>,<br/>
                    Travel in <span className="text-[#d4af37]">Luxury</span>.
                </h1>
                <p className="text-gray-200 text-sm md:text-xl font-light max-w-xl mx-auto hidden sm:block">
                    Specializing in Mumbai to Shirdi, Ashtavinayak & Mahabaleshwar tours. 
                    Clean cars, experienced drivers, and transparent pricing.
                </p>
                {/* Mobile only simplified text */}
                {/* <p className="text-gray-200 text-sm font-light max-w-xs mx-auto sm:hidden">
                    Mumbai to Shirdi & Ashtavinayak Tours.
                </p>
            </div> */}
        </div>
      </div>

      {/* --- BOOKING WIDGET (Floating) --- */}
      <div className="relative z-30 px-4 mb-20">
        <div className="-mt-20 md:-mt-24 max-w-5xl mx-auto">
            <BookingWidget />
        </div>
      </div>

      {/* --- TRUST STATS STRIP --- */}
      <section className="py-8 bg-white border-y border-gray-100 mb-16 hidden md:block">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-4 gap-8 text-center">
            <StatItem number="10+" label="Years Experience" />
            <StatItem number="5k+" label="Happy Pilgrims" />
            <StatItem number="100%" label="Safe & Sanitized" />
            <StatItem number="24/7" label="Customer Support" />
        </div>
      </section>

      {/* --- POPULAR DESTINATIONS --- */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Popular Destinations" subtitle="Curated spiritual and leisure gateways" />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <DestinationCard 
                title="Shirdi Sai Darshan" 
                desc="The holy abode of Sai Baba. Experience peace with our same-day or overnight packages."
                price="Starts ₹12,000"
                image="/Carousel 1.png" 
            />
            <DestinationCard 
                title="Mahabaleshwar" 
                desc="Escape to the misty hills. Perfect for family weekends and nature lovers."
                price="Custom Quote"
                image="/Carousel 3 Mahabaleshwar.png"
            />
            <DestinationCard 
                title="Ashtavinayak Yatra" 
                desc="Complete the divine tour of 8 Ganeshas with our specialized multi-day packages."
                price="Custom Quote"
                image="/carousel 4 ashtvinayak yatra.png"
            />
          </div>
          
          <div className="text-center mt-10">
            <Link href="/packages" className="inline-flex items-center gap-2 text-[#b45309] font-bold hover:gap-3 transition-all">
                View All Packages <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- FLEET TEASER --- */}
      <section className="py-20 bg-[#3e2723] text-[#fcf5e5] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#d4af37]">Our Premium Fleet</h2>
                <p className="text-lg opacity-90 mb-6 leading-relaxed">
                    We don't just provide a car; we provide a comfort zone. From the economical Swift Dzire to the luxurious Innova Crysta and Fortuner, our fleet is maintained to the highest standards.
                </p>
                <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3"><CheckCircle2 className="text-[#d4af37]" size={20}/> GPS Tracked Vehicles</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="text-[#d4af37]" size={20}/> Professional Uniformed Drivers</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="text-[#d4af37]" size={20}/> Emergency Roadside Assistance</li>
                </ul>
                <Link href="/tariff" className="inline-block bg-[#d4af37] text-[#3e2723] px-8 py-3 rounded-lg font-bold hover:bg-white transition-colors shadow-lg">
                    Check Rental Tariffs
                </Link>
            </div>
            <div className="relative h-[250px] md:h-[400px] bg-white/5 rounded-2xl border border-white/10 p-4 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                    <Car size={64} className="mx-auto text-[#d4af37] mb-4" />
                    <p className="opacity-50 uppercase tracking-widest">Innova Crysta • Fortuner • Bus</p>
                </div>
            </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-16 md:py-20 px-4 bg-[#fffdf5]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Why Choose BM Car Rentals?" subtitle="We go the extra mile for your smile" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
            <FeatureCard 
                icon={<ShieldCheck size={48} className="text-[#d4af37]" />} 
                title="Safety First" 
                desc="Regular sanitization, background-verified drivers, and 24/7 tracking for your peace of mind." 
            />
            <FeatureCard 
                icon={<Clock size={48} className="text-[#d4af37]" />} 
                title="Punctuality" 
                desc="We value your time. Our drivers arrive 15 minutes prior to pickup, every single time." 
            />
            <FeatureCard 
                icon={<Coins size={48} className="text-[#d4af37]" />} 
                title="Transparent Billing" 
                desc="No hidden driver charges or surprise night fees. Pay exactly what you see in the quote." 
            />
          </div>
        </div>
      </section>

      {/* --- CTA FOOTER --- */}
      <div className="w-full bg-gradient-to-r from-[#b45309] to-[#d4af37] py-4 shadow-[0_-5px_15px_rgba(0,0,0,0.3)]">
         <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-[#3e2723]">
            <div className="flex items-center gap-3 mb-2 md:mb-0 justify-center md:justify-start w-full md:w-auto">
                <Phone size={24} fill="currentColor" />
                <span className="font-bold text-lg md:text-xl">Book via Call: +91 72089 37208</span>
            </div>
            <p className="text-sm font-semibold opacity-80 text-center md:text-right w-full md:w-auto">
                Mumbai • Shirdi • Nashik • Pune
            </p>
         </div>
      </div>

    </div>
  );
}

// --- SUB COMPONENTS ---

function BookingWidget() {
    const [details, setDetails] = useState({ departure: '', destination: '', date: '', time: '' });
    const todayStr = new Date().toISOString().split('T')[0];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };

    const handleQuote = () => {
        if (!details.departure || !details.destination || !details.date) {
            alert("Please fill in the trip details.");
            return;
        }
        const msg = `*New Booking Request* 🚖%0AFrom: ${details.departure}%0ATo: ${details.destination}%0ADate: ${details.date}%0ATime: ${details.time}`;
        window.open(`https://wa.me/917208937208?text=${msg}`, '_blank');
    };

    return (
        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3e2723] via-[#d4af37] to-[#3e2723]"></div>
            
            <h3 className="text-lg md:text-xl font-serif font-bold text-[#3e2723] mb-6 flex items-center gap-2">
                <MapPin className="text-[#d4af37]" /> Where do you want to go?
            </h3>

            <div className="grid md:grid-cols-4 gap-4 items-end">
                <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">From</label>
                    <input type="text" name="departure" onChange={handleChange} placeholder="Mumbai" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] outline-none font-medium text-sm md:text-base" />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">To</label>
                    <input type="text" name="destination" onChange={handleChange} placeholder="Shirdi" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] outline-none font-medium text-sm md:text-base" />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">When</label>
                    <input type="date" name="date" min={todayStr} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] outline-none font-medium text-gray-600 text-sm md:text-base" />
                </div>
                <button onClick={handleQuote} className="w-full bg-[#3e2723] text-white p-3 rounded-lg font-bold text-lg hover:bg-[#5d4037] transition-all shadow-lg active:scale-95 border border-[#3e2723]">
                    Get Quote
                </button>
            </div>
        </div>
    );
}

function SectionHeader({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="text-center space-y-3 mb-8">
      <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#3e2723]">{title}</h2>
      {subtitle && <p className="text-base md:text-lg text-gray-500 font-light">{subtitle}</p>}
      <div className="h-[3px] w-24 bg-[#d4af37] mx-auto rounded-full mt-4"></div>
    </div>
  );
}

function DestinationCard({ title, desc, price, image }: { title: string, desc: string, price: string, image: string }) {
    return (
        <div className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="relative h-48 md:h-56 overflow-hidden">
                <Image src={image} alt={title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 bg-[#3e2723] text-[#d4af37] px-4 py-1 text-sm font-bold rounded-tr-lg">
                    {price}
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl md:text-2xl font-serif font-bold text-[#3e2723] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
                <button className="text-[#b45309] font-bold text-sm uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                    Book Now <ArrowRight size={14} />
                </button>
            </div>
        </div>
    )
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-6 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group">
      <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 inline-block p-4 bg-[#fff8e1] rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-bold text-[#3e2723] mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function StatItem({ number, label }: { number: string, label: string }) {
    return (
        <div className="flex flex-col items-center">
            <span className="text-2xl md:text-4xl font-serif font-bold text-[#b45309]">{number}</span>
            <span className="text-[10px] md:text-sm font-bold text-gray-500 uppercase tracking-wider mt-1">{label}</span>
        </div>
    )
}