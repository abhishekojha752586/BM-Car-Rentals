import React from 'react';
import { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';
import { ShieldCheck, MapPin, Clock, HeartHandshake, Briefcase, Car, Gem } from 'lucide-react';

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

export const metadata: Metadata = {
  title: 'About Us | BM Car Rentals',
  description: 'BM Car Rentals: Premium corporate fleet partnerships, luxury car rentals, and trusted pilgrimage tour operators in Mumbai.',
};

export default function AboutPage() {
  return (
    <div className={`min-h-screen bg-[#fdfbf7] text-slate-800 ${playfair.variable} ${lato.variable} font-sans`}>
      
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[45vh] min-h-[350px] bg-[#3e2723] overflow-hidden flex flex-col items-center justify-center text-center px-4">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#3e2723] via-transparent to-black/30"></div>
        
        {/* Content */}
        <div className="relative z-10 animate-fade-in-up">
            <span className="inline-block py-1 px-3 border border-[#d4af37] rounded-full text-[#d4af37] text-xs uppercase tracking-[0.2em] mb-4 bg-black/20 backdrop-blur-sm">
                Since 2015
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#fcf5e5] drop-shadow-xl mb-4">
                Our Legacy
            </h1>
            <div className="h-[2px] w-24 bg-[#d4af37] mx-auto mb-4"></div>
            <p className="text-[#e6dcc8] font-light text-lg max-w-2xl mx-auto leading-relaxed">
                From spiritual journeys to corporate boardrooms, we drive your ambition and devotion.
            </p>
        </div>
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="max-w-6xl mx-auto px-4 -mt-20 relative z-20 mb-20">
        
        {/* Main White Card */}
        <div className="bg-[#fffdf5] rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-[#e5e7eb] overflow-hidden">
            
            {/* Top Border Accent */}
            <div className="h-2 w-full bg-gradient-to-r from-[#3e2723] via-[#d4af37] to-[#3e2723]"></div>

            <div className="p-8 md:p-16">
                
                {/* 1. Introduction & Vision */}
                <div className="grid md:grid-cols-12 gap-12 items-center mb-16">
                    <div className="md:col-span-7 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3e2723]">
                            Redefining <span className="text-[#d4af37] italic">Luxury & Mobility</span>
                        </h2>
                        <p className="text-gray-600 leading-8 text-lg font-light">
                            Welcome to <strong>BM Car Rentals</strong>. Established in 2015, we began with a vision to simplify travel. Today, we are Mumbai's premier choice for both personalized tours and professional corporate mobility.
                        </p>
                        <p className="text-gray-600 leading-8 text-lg font-light">
                            While we are renowned for our pilgrimage tours to <strong>Shirdi and Ashtavinayak</strong>, our expertise extends far beyond. We are a trusted partner for major corporations, providing <strong>Luxury Fleet Solutions</strong> for executive travel. Whether it is a CEO's airport transfer or a family's weekend getaway, we deliver excellence in every mile.
                        </p>
                        
                        {/* Signature / Quote */}
                        <div className="border-l-4 border-[#d4af37] pl-6 py-2 mt-8 bg-[#fff8e1]/50 rounded-r-lg">
                            <p className="font-serif italic text-[#78350f] text-lg">"Bridging the gap between devotion and destination, luxury and necessity."</p>
                        </div>
                    </div>

                    {/* Image / Graphic Area */}
                    <div className="md:col-span-5 relative">
                        <div className="aspect-[4/5] rounded-lg bg-[#3e2723] p-2 rotate-1 shadow-2xl">
                             <div className="w-full h-full border border-[#d4af37] flex items-center justify-center bg-[#2a1a16] relative overflow-hidden">
                                {/* Abstract Background */}
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d4af37] to-transparent"></div>
                                <div className="text-center z-10 px-4">
                                    <Briefcase size={56} className="text-[#d4af37] mx-auto mb-4" />
                                    <h3 className="text-[#fcf5e5] font-serif text-xl tracking-widest uppercase">Corporate</h3>
                                    <div className="h-[1px] w-12 bg-[#d4af37] mx-auto my-3 opacity-50"></div>
                                    <h3 className="text-[#fcf5e5] font-serif text-xl tracking-widest uppercase">& Leisure</h3>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>

                {/* 2. Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-b border-[#e5e7eb] mb-16">
                    <StatItem number="10+" label="Years Experience" />
                    <StatItem number="50+" label="Corporate Partners" />
                    <StatItem number="100+" label="Luxury Vehicles" />
                    <StatItem number="24/7" label="Dispatch Team" />
                </div>

                {/* 3. Our Expertise / Services Section (NEW) */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-[#3e2723] mb-4">Our Expertise</h2>
                    <div className="h-[3px] w-16 bg-[#d4af37] mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <ValueCard 
                        icon={<Briefcase size={32} className="text-[#fcf5e5]" />}
                        title="Corporate Partnerships"
                        desc="We offer tailored mobility solutions for businesses. From daily employee transport to premium executive cars for client visits, we represent your brand with elegance."
                    />
                    <ValueCard 
                        icon={<Gem size={32} className="text-[#fcf5e5]" />}
                        title="Luxury Car Rentals"
                        desc="Arrive in style with our premium fleet. We provide high-end sedans and SUVs (Mercedes, BMW, Innova Crysta) for weddings, events, and VIP travel."
                    />
                    <ValueCard 
                        icon={<MapPin size={32} className="text-[#fcf5e5]" />}
                        title="Pilgrimage & Tours"
                        desc="Our roots lie in spiritual tourism. We provide hassle-free, comfortable packages to Shirdi, Bhimashankar, and other holy destinations across Maharashtra."
                    />
                </div>

                {/* 4. Core Values (3 Column Grid) */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-[#3e2723] mb-4">Our Promise</h2>
                    <div className="h-[3px] w-16 bg-[#d4af37] mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <ValueCard 
                        icon={<ShieldCheck size={32} className="text-[#fcf5e5]" />}
                        title="Uncompromised Safety"
                        desc="Our drivers are background-verified and trained in defensive driving. Every vehicle undergoes strict maintenance checks."
                    />
                    <ValueCard 
                        icon={<Clock size={32} className="text-[#fcf5e5]" />}
                        title="Punctuality"
                        desc="We value your time. Whether it's a 4 AM airport drop or a corporate meeting, our chauffeurs arrive before time, every time."
                    />
                    <ValueCard 
                        icon={<HeartHandshake size={32} className="text-[#fcf5e5]" />}
                        title="Transparent Pricing"
                        desc="Honesty is our policy. We provide clear, upfront quotes with no hidden driver charges or last-minute surprises."
                    />
                </div>

            </div>
        </div>
      </div>

      {/* --- FOOTER CTA STRIP --- */}
      <div className="bg-[#3e2723] py-16 text-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d4af37] mb-6">Partner with Excellence</h2>
              <p className="text-[#e6dcc8] mb-8 text-lg">Looking for a corporate tie-up or a luxury ride for your next trip?</p>
              <a href="/contact" className="inline-block bg-[#d4af37] text-[#3e2723] px-10 py-4 rounded font-bold text-lg hover:bg-white transition-all shadow-lg hover:shadow-[#d4af37]/50 transform hover:-translate-y-1">
                  Get in Touch
              </a>
          </div>
      </div>

    </div>
  );
}

// --- SUB COMPONENTS ---

function StatItem({ number, label }: { number: string, label: string }) {
    return (
        <div className="text-center group cursor-default">
            <h4 className="text-4xl md:text-5xl font-serif font-bold text-[#d4af37] mb-2 group-hover:scale-110 transition-transform duration-300">{number}</h4>
            <p className="text-xs uppercase tracking-widest text-[#3e2723] font-bold">{label}</p>
        </div>
    );
}

function ValueCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group h-full">
            <div className="w-16 h-16 bg-[#3e2723] rounded-full flex items-center justify-center mb-6 shadow-md group-hover:bg-[#d4af37] transition-colors duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-serif font-bold text-[#3e2723] mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
                {desc}
            </p>
        </div>
    );
}