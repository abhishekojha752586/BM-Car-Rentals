'use client'; // Required for useState and event handling

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Playfair_Display, Lato } from 'next/font/google';

// --- Font Config ---
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

export default function ContactPage() {
  // --- STATE MANAGEMENT FOR FORM ---
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    subject: '',
    message: ''
  });

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    
    if (name === 'mobile') {
        // Only allow numeric input
        const numericValue = value.replace(/\D/g, '');
        // Prevent typing more than 10 digits
        if (numericValue.length <= 10) {
            setFormData(prev => ({ ...prev, [name]: numericValue }));
        }
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    const { name, mobile, subject, message } = formData;

    // 1. Basic empty field validation
    if (!name || !mobile || !message) {
      alert("Please fill in Name, Mobile Number, and Message fields.");
      return;
    }

    // 2. Strict Mobile Number Validation (Must be exactly 10 digits)
    if (mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Owner's WhatsApp Number
    const ownerNumber = "917208937208"; 

    // Construct the WhatsApp message
    const whatsappText = `*New Website Inquiry* 📩%0A%0A` +
      `👤 *Name:* ${name}%0A` +
      `📞 *Mobile:* ${mobile}%0A` +
      `📝 *Subject:* ${subject || 'General Inquiry'}%0A` + 
      `💬 *Message:* ${message}`;

    // Open WhatsApp in a new tab
    const whatsappUrl = `https://wa.me/${ownerNumber}?text=${whatsappText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={`min-h-screen bg-[#fdfbf7] text-slate-800 ${playfair.variable} ${lato.variable} font-sans pb-20`}>
      
      {/* --- PAGE HEADER --- */}
      <div className="relative w-full h-[350px] bg-[#3e2723] overflow-hidden flex items-center justify-center">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#fdfbf7]/10"></div>
        
        <div className="relative z-10 text-center px-4">
            <div className="inline-block border-b-2 border-[#d4af37] pb-2 mb-4">
                <span className="text-[#d4af37] tracking-widest uppercase text-sm font-bold">24/7 Support</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#fcf5e5] drop-shadow-lg mb-4">
                Get in Touch
            </h1>
            <p className="text-[#e6dcc8] text-lg font-light max-w-xl mx-auto">
                Plan your journey with BM Car Rentals. We are just a call or a message away.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            
            {/* --- LEFT COLUMN: Contact Information --- */}
            <div className="space-y-6">
                
                {/* Info Card Container */}
                <div className="bg-[#fffdf5] p-8 rounded-xl shadow-2xl border border-[#e5e7eb] relative overflow-hidden">
                    {/* Decorative gold strip */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#d4af37]"></div>

                    <h2 className="text-3xl font-serif font-bold text-[#3e2723] mb-8">Contact Information</h2>

                    <div className="space-y-8">
                        {/* Address */}
                        <div className="flex items-start gap-5 group">
                            <div className="w-12 h-12 bg-[#fff8e1] rounded-full flex items-center justify-center border border-[#d4af37] shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                                <MapPin className="text-[#b45309]" size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#3e2723] mb-1 font-serif">Head Office</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Dispatch Office – A-6, PMGP Colony, Sion Bandra Link Road,
                                    Dharavi, Mumbai-400017
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-5 group">
                            <div className="w-12 h-12 bg-[#fff8e1] rounded-full flex items-center justify-center border border-[#d4af37] shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                                <Phone className="text-[#b45309]" size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#3e2723] mb-1 font-serif">Call Us (24/7)</h3>
                                <p className="text-[#b45309] font-bold text-xl tracking-wide font-mono">
                                    +91 72089 37208
                                </p>
                                <p className="text-xs text-gray-500 mt-1">Available for WhatsApp inquiries</p>
                            </div>
                        </div>

                         {/* Email */}
                         <div className="flex items-start gap-5 group">
                            <div className="w-12 h-12 bg-[#fff8e1] rounded-full flex items-center justify-center border border-[#d4af37] shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                                <Mail className="text-[#b45309]" size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#3e2723] mb-1 font-serif">Email Us</h3>
                                <p className="text-gray-600 text-sm">Booking@bmcarrentals.com</p>
                                <p className="text-gray-600 text-sm">bm.carrentals@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Operating Hours Small Widget */}
                <div className="bg-[#3e2723] text-[#fcf5e5] p-6 rounded-xl shadow-lg flex items-center gap-4 border border-[#d4af37]">
                    <Clock size={32} className="text-[#d4af37]" />
                    <div>
                        <h4 className="font-serif font-bold text-lg">Operating Hours</h4>
                        <p className="text-sm opacity-80">Monday - Sunday: 24 Hours Open</p>
                    </div>
                </div>

            </div>

            {/* --- RIGHT COLUMN: Form --- */}
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-t-4 border-[#d4af37]">
                <div className="mb-8">
                    <h2 className="text-3xl font-serif font-bold text-[#3e2723] mb-2">Send an Inquiry</h2>
                    <p className="text-gray-500 text-sm">Fill out the form below and our team will get back to you within 30 minutes.</p>
                </div>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-[#3e2723] uppercase tracking-wider">Your Name</label>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe" 
                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all" 
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-[#3e2723] uppercase tracking-wider">Mobile Number</label>
                            {/* Updated Input: Restricted to numbers via onChange logic */}
                            <input 
                                type="tel" 
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder="9876543210" 
                                maxLength={10}
                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all" 
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-[#3e2723] uppercase tracking-wider">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="E.g., Booking Inquiry, Corporate Tie-up"
                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-[#3e2723] uppercase tracking-wider">Message</label>
                        <textarea 
                            rows={4} 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="I need a Swift Dzire for 2 days..." 
                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all resize-none"
                        ></textarea>
                    </div>

                    <button 
                        type="submit"
                        className="w-full group bg-gradient-to-r from-[#3e2723] to-[#5d4037] text-white py-4 font-bold rounded-lg shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center gap-2 border border-[#3e2723]"
                    >
                        <span className="font-serif tracking-wide text-lg">Send Message</span>
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>
            </div>

        </div>

        {/* --- MAP SECTION --- */}
        <div className="mt-16 bg-white p-2 rounded-xl shadow-lg border border-[#e5e7eb]">
            <div className="w-full h-[300px] bg-gray-100 rounded-lg overflow-hidden relative">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.315851341813!2d72.86216039999998!3d19.049845700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8dafd5dad31%3A0x20409ec375394ad9!2sB%20M%20Car%20Rentals%20Mumbai%20%7C%20Chauffeur%20Driven%20Car%20Rental%20Service!5e0!3m2!1sen!2sin!4v1767191658807!5m2!1sen!2sin"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    loading="lazy"
                    title="Office Location"
                    className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded shadow text-[#3e2723] font-bold text-sm border-l-4 border-[#d4af37]">
                    Locate Us on Map
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}