'use client';

import React, { useState } from 'react';
import { Playfair_Display, Lato } from 'next/font/google';
import { Check, Info, Clock, Gauge, Calendar, Car, Send, ShieldCheck, Star } from 'lucide-react';
import Image from 'next/image';

// --- Font Config ---
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700', '900'], variable: '--font-playfair' });
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-lato' });

// --- CAR DATA ---

const carData = [
  {
    id: 'sedan',
    name: 'Swift Dzire / Etios',
    category: 'Compact Sedan',
    seats: '4+1 Seater',
    image: '/Desire car.webp', 
    packages: [
      { label: '8 Hrs / 80 Kms', price: '₹ 2,450' },
      { label: 'Extra Hour', price: '₹ 150' },
      { label: 'Extra Km', price: '₹ 15' },
    ]
  },
  {
    id: 'ertiga',
    name: 'Maruti Ertiga / Rumion',
    category: 'Comfort MPV',
    seats: '6+1 Seater',
    image: '/ertiga car.webp',
    packages: [
      { label: '8 Hrs / 80 Kms', price: '₹ 2,800' },
      { label: '4 Hrs / 40 Kms', price: '₹ 2,200' },
      { label: 'Extra Hr / Km', price: '₹ 200 / ₹ 18' },
    ]
  },
  {
    id: 'crysta',
    name: 'Innova Crysta',
    category: 'Premium SUV',
    seats: '6+1 / 7+1 Seater',
    image: '/innova-crysta.avif',
    popular: true, // <--- THIS FLAG ADDS THE BADGE
    packages: [
      { label: '8 Hrs / 80 Kms', price: '₹ 3,500' },
      { label: '4 Hrs / 40 Kms', price: '₹ 2,500' },
      { label: 'Airport Transfer', price: '₹ 2,200' },
      { label: 'Extra Hr / Km', price: '₹ 250 / ₹ 25' },
    ]
  },
  {
    id: 'hycross',
    name: 'Toyota Hycross Hybrid',
    category: 'Luxury MPV',
    seats: '6+1 Seater',
    image: '/Hycross.png',
    packages: [
      { label: '8 Hrs / 80 Kms', price: '₹ 4,500' },
      { label: '4 Hrs / 40 Kms', price: '₹ 3,250' },
      { label: 'Extra Hr / Km', price: '₹ 300 / ₹ 32' },
    ]
  },
  {
    id: 'fortuner',
    name: 'Toyota Fortuner',
    category: 'Luxury SUV',
    seats: '6+1 Seater',
    image: '/fortuner.avif',
    packages: [
      { label: '8 Hrs / 80 Kms', price: 'On Request' },
      { label: 'Outstation', price: 'Contact Us' },
    ]
  },
  {
    id: 'luxury',
    name: 'BMW / Audi / Mercedes',
    category: 'Ultra Luxury',
    seats: '4+1 Seater',
    image: '/mercedez.avif',
    packages: [
      { label: 'Local / Outstation', price: 'Call for Quote' },
      { label: 'Wedding Special', price: 'Available' },
    ]
  },
  {
    id: 'bus',
    name: 'Luxury AC Bus',
    category: 'Large Group',
    seats: '13 / 17 / 26 / 45 Seater',
    image: '/volvo bus.jpg',
    packages: [
      { label: 'Daily Rental', price: 'On Request' },
      { label: 'Corporate Trip', price: 'Available' },
    ]
  }
];

export default function TariffPage() {
  return (
    <div className={`min-h-screen bg-[#fdfbf7] text-slate-800 ${playfair.variable} ${lato.variable} font-sans pb-20`}>
      
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[350px] bg-[#3e2723] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#fdfbf7] via-transparent to-transparent"></div>
        
        <div className="relative z-10 mt-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#d4af37] drop-shadow-lg mb-2">
            Our Premium Fleet
          </h1>
          <p className="text-[#e6dcc8] tracking-widest uppercase text-sm font-light">
            Choose the perfect ride for your journey
          </p>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        
        {/* CARDS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {carData.map((car) => (
            <div key={car.id} className={`group bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1 border ${car.popular ? 'border-[#d4af37] ring-1 ring-[#d4af37]' : 'border-gray-200'}`}>
              
              {/* Image Container */}
              <div className="relative h-48 w-full bg-gray-100 border-b border-gray-100 overflow-hidden">
                {/* Popular Badge Logic */}
                {car.popular && (
                  <div className="absolute top-3 right-3 z-20 bg-[#d4af37] text-[#3e2723] text-[10px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Star size={10} fill="#3e2723" /> MOST POPULAR
                  </div>
                )}
                
                {/* Car Image */}
                <div className="w-full h-full relative">
                     <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs z-0">
                        Image: {car.name}
                     </div>
                     <img 
                        src={car.image} 
                        alt={car.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 relative z-10"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/eee/333?text=Car+Image';
                        }}
                     />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5">
                <div className="mb-4">
                    <p className="text-xs text-[#d4af37] font-bold uppercase tracking-wider mb-1">{car.category}</p>
                    <h3 className="text-xl font-serif font-bold text-[#3e2723] leading-tight">{car.name}</h3>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-500 bg-gray-50 inline-block px-2 py-1 rounded">
                        <Car size={12} /> {car.seats}
                    </div>
                </div>

                {/* Pricing Table */}
                <div className="bg-[#fffdf5] rounded-lg border border-[#f0e6d2] p-3 space-y-2 mb-4">
                  {car.packages.map((pkg, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">{pkg.label}</span>
                      <span className="font-bold text-[#b45309]">{pkg.price}</span>
                    </div>
                  ))}
                </div>

                <button 
                    onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full py-2.5 rounded border border-[#3e2723] text-[#3e2723] font-bold text-sm hover:bg-[#3e2723] hover:text-white transition-colors"
                >
                    Book This Car
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* --- BOOKING FORM SECTION --- */}
        <div id="booking-form" className="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-8 border-[#d4af37]">
          <div className="grid md:grid-cols-5">
            
            {/* Left Side: Info Panel */}
            <div className="md:col-span-2 bg-[#3e2723] p-10 text-[#fcf5e5] flex flex-col justify-center relative">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <h2 className="text-3xl font-serif font-bold mb-4 relative z-10">Instant Booking</h2>
                <p className="text-[#e6dcc8] text-sm leading-relaxed mb-8 relative z-10 opacity-90">
                  Select your luxury ride and get an instant confirmation via WhatsApp. 
                  Our team is available 24/7 to assist you.
                </p>
                
                <div className="space-y-4 text-sm relative z-10">
                  <div className="flex items-center gap-4 bg-[#4e342e] p-3 rounded-lg border border-[#6d4c41]">
                    <ShieldCheck className="text-[#d4af37] shrink-0" size={20} /> 
                    <div>
                        <strong className="block text-[#fcf5e5]">Safe & Secure</strong>
                        <span className="text-xs text-[#e6dcc8]">GPS Tracked Vehicles</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-[#4e342e] p-3 rounded-lg border border-[#6d4c41]">
                    <Clock className="text-[#d4af37] shrink-0" size={20} /> 
                    <div>
                        <strong className="block text-[#fcf5e5]">On-Time Pickup</strong>
                        <span className="text-xs text-[#e6dcc8]">Zero Waiting Charges</span>
                    </div>
                  </div>
                </div>
            </div>

            {/* Right Side: The Form */}
            <div className="md:col-span-3 p-8 md:p-12">
               <BookingForm />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

// --- SUB COMPONENT: THE BOOKING FORM ---
function BookingForm() {
  const [formData, setFormData] = useState({
    carType: '',
    date: '',
    time: '',
    pickupLocation: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    
    if(!formData.carType || !formData.date || !formData.time) {
      alert("Please select a car, date, and time.");
      return;
    }

    const ownerNumber = "917208937208";
    const message = `*New Car Rental Request* 🚖%0A%0A` +
      `🚗 *Car Preference:* ${formData.carType}%0A` +
      `📅 *Date:* ${formData.date}%0A` +
      `⏰ *Time:* ${formData.time}%0A` +
      `📍 *Pickup:* ${formData.pickupLocation || 'Not specified'}`;

    window.open(`https://wa.me/${ownerNumber}?text=${message}`, '_blank');
  };

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={handleBook} className="space-y-6">
      
      {/* 1. Select Car (Expanded List) */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-[#3e2723] uppercase tracking-wider flex items-center gap-2">
          <Car size={14} /> Select Vehicle
        </label>
        <div className="relative">
          <select 
            name="carType" 
            value={formData.carType}
            onChange={handleChange}
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none appearance-none cursor-pointer text-gray-700 font-medium"
          >
            <option value="">-- Choose Your Car --</option>
            <optgroup label="Popular Fleet">
                <option value="Swift Dzire / Etios">Swift Dzire / Etios (Sedan)</option>
                <option value="Maruti Ertiga / Rumion">Maruti Ertiga / Rumion (MPV)</option>
                <option value="Innova Crysta">Innova Crysta (Premium)</option>
                <option value="Toyota Hycross">Toyota Hycross (Luxury)</option>
            </optgroup>
            <optgroup label="Luxury Collection">
                <option value="Toyota Fortuner">Toyota Fortuner</option>
                <option value="BMW 5 Series">BMW 5 Series</option>
                <option value="Mercedes E-Class">Mercedes E-Class</option>
                <option value="Audi A6">Audi A6</option>
            </optgroup>
            <optgroup label="Large Groups">
                <option value="Luxury AC Bus">Luxury AC Bus (13-45 Seater)</option>
                <option value="Tempo Traveller">Tempo Traveller</option>
            </optgroup>
          </select>
          <div className="absolute right-4 top-4 pointer-events-none text-[#d4af37]">▼</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* 2. Date */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-[#3e2723] uppercase tracking-wider flex items-center gap-2">
            <Calendar size={14} /> Date
          </label>
          <input 
            type="date" 
            name="date"
            min={todayStr}
            value={formData.date}
            onChange={handleChange}
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none text-gray-700"
          />
        </div>

        {/* 3. Time */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-[#3e2723] uppercase tracking-wider flex items-center gap-2">
            <Clock size={14} /> Time
          </label>
          <input 
            type="time" 
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none text-gray-700"
          />
        </div>
      </div>

      {/* 4. Pickup Location */}
      <div className="space-y-2">
         <label className="text-xs font-bold text-[#3e2723] uppercase tracking-wider flex items-center gap-2">
            <MapPinIcon /> Pickup Location
         </label>
         <input 
            type="text" 
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            placeholder="e.g. Mumbai Airport T2"
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none text-gray-700"
         />
      </div>

      {/* Submit Button */}
      <button 
        type="submit"
        className="w-full mt-2 bg-gradient-to-r from-[#3e2723] to-[#5d4037] text-white py-4 font-bold rounded-lg shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all flex items-center justify-center gap-3 border border-[#3e2723]"
      >
        <span className="font-serif tracking-wide text-lg">Send Inquiry via WhatsApp</span>
        <Send size={20} />
      </button>

    </form>
  );
}

// Simple Helper Icon
function MapPinIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
    )
}