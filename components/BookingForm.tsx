"use client";
import { useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface BookingFormProps {
  variant?: 'horizontal' | 'vertical';
}

export default function BookingForm({ variant = 'vertical' }: BookingFormProps) {
  const [formData, setFormData] = useState({
    pickup: '',
    drop: '',
    date: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello BM Car Rentals,%0A%0AI would like to get a quote:%0A🚗 Pickup: ${formData.pickup}%0A📍 Drop: ${formData.drop}%0A📅 Date: ${formData.date}%0A%0APlease share availability and pricing.`;
    
    window.open(`https://wa.me/919999999999?text=${message}`, '_blank');
  };

  const inputClasses = "w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-bm-gold focus:ring-1 focus:ring-bm-gold";

  if (variant === 'horizontal') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 md:gap-4 p-2">
        <div className="relative flex-1">
          <MapPin className="absolute left-3 top-3.5 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Departure From: Mumbai" 
            className={inputClasses}
            required
            onChange={(e) => setFormData({...formData, pickup: e.target.value})}
          />
        </div>
        <div className="relative flex-1">
          <MapPin className="absolute left-3 top-3.5 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Destination: Shirdi" 
            className={inputClasses}
            required
            onChange={(e) => setFormData({...formData, drop: e.target.value})}
          />
        </div>
        <div className="relative w-full md:w-48">
          <Calendar className="absolute left-3 top-3.5 text-gray-400" size={18} />
          <input 
            type="date" 
            className={inputClasses}
            required
            onChange={(e) => setFormData({...formData, date: e.target.value})}
          />
        </div>
        <button 
          type="submit" 
          className="bg-bm-accent text-white font-bold py-3 px-8 rounded shadow-md hover:bg-red-800 transition uppercase tracking-wide whitespace-nowrap"
        >
          Get Quote
        </button>
      </form>
    );
  }

  // Vertical Variant (for Sidebar/Contact Page)
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* (Similar inputs but stacked vertically) */}
      {/* ... code for vertical inputs ... */}
    </form>
  );
}