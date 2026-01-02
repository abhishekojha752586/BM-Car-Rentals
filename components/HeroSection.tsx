// components/HeroSection.tsx
"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Calendar } from 'lucide-react';

export default function HeroSection() {
  const [query, setQuery] = useState({ pickup: 'Mumbai', drop: 'Shirdi', date: '' });

  const handleQuote = (e: React.FormEvent) => {
    e.preventDefault();
    // WhatsApp Logic
    window.open(`https://wa.me/919999999999?text=Quote Request...`, '_blank');
  };

  return (
    <section className="relative w-full overflow-hidden">
      
      {/* 1. Background Image Layer */}
      <div className="relative h-[600px] w-full">
        {/* Replace this src with your specific 'Gateway + Sai Baba' image */}
        <Image 
          src="/hero-composite.jpg" 
          alt="Mumbai to Shirdi Background"
          fill
          className="object-cover object-top"
          priority
        />
        
        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-bm-royal/30 to-transparent"></div>

        {/* 2. Hero Text Content (Top Left aligned) */}
        <div className="absolute top-20 left-4 md:left-20 max-w-2xl z-10 text-shadow-lg">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-bm-royal drop-shadow-sm">
            Mumbai <span className="text-bm-royal text-2xl align-middle px-2">to</span> Shirdi Tours
          </h1>
          <div className="divider-ornate my-4">
             <span className="text-bm-gold-light text-xl font-serif italic tracking-wide drop-shadow-md bg-white/20 px-4 py-1 rounded-full">
               Comfortable & Affordable Pilgrimage Trips
             </span>
          </div>
        </div>
      </div>

      {/* 3. The "Paper Strip" Booking Form (Floating Overlay) */}
      <div className="relative z-20 -mt-16 mx-4 md:mx-auto max-w-6xl">
        <div className="bg-[#fdfbf7] border-4 border-[#eaddcf] rounded-xl shadow-2xl p-2 md:p-4 bg-[url('https://www.transparenttextures.com/patterns/paper.png')]">
          
          <form onSubmit={handleQuote} className="flex flex-col md:flex-row gap-4 items-center p-2 border border-[#d6c6b0] rounded-lg">
            
            {/* Input 1 */}
            <div className="flex-1 w-full">
              <label className="block text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Departure From</label>
              <select className="w-full bg-transparent border-b-2 border-gray-300 font-serif text-lg py-1 focus:border-bm-gold outline-none text-gray-800">
                <option>Mumbai</option>
                <option>Thane</option>
                <option>Navi Mumbai</option>
              </select>
            </div>

            <div className="w-px h-10 bg-gray-300 hidden md:block"></div>

            {/* Input 2 */}
            <div className="flex-1 w-full">
              <label className="block text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Destination</label>
              <select className="w-full bg-transparent border-b-2 border-gray-300 font-serif text-lg py-1 focus:border-bm-gold outline-none text-gray-800">
                <option>Shirdi</option>
                <option>Lonavala</option>
                <option>Nashik</option>
              </select>
            </div>

            <div className="w-px h-10 bg-gray-300 hidden md:block"></div>

            {/* Input 3 */}
            <div className="flex-1 w-full relative">
              <label className="block text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Travel Date</label>
              <div className="flex items-center">
                <input type="date" className="w-full bg-transparent border-b-2 border-gray-300 font-serif text-lg py-1 focus:border-bm-gold outline-none text-gray-800" />
                <Calendar className="text-bm-gold ml-2" size={20} />
              </div>
            </div>

            {/* 3D Button */}
            <button type="submit" className="w-full md:w-auto btn-premium-red text-white font-serif text-xl font-bold px-8 py-3 rounded shadow-lg">
              Get Quote
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}