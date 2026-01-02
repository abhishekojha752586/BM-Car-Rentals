'use client';

import React, { useState } from 'react';
import { Playfair_Display, Lato } from 'next/font/google';
import { Building2, CalendarClock, Car, MapPin, Send, CheckCircle2, Briefcase, FileText, Phone } from 'lucide-react';

// --- Font Config ---
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-lato' });

export default function CorporatePage() {
  const [activeTab, setActiveTab] = useState<'spot' | 'contract'>('spot');

  return (
    <div className={`min-h-screen bg-[#fdfbf7] text-slate-800 ${playfair.variable} ${lato.variable} font-sans pb-20`}>
      
      {/* --- HERO SECTION --- */}
    
      <div className="relative w-full min-h-[500px] py-20 bg-[#3e2723] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#fdfbf7] via-transparent to-black/40"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto mb-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af37]/50 bg-[#d4af37]/10 text-[#d4af37] text-xs uppercase tracking-widest mb-4 backdrop-blur-sm">
             <Briefcase size={14} /> Corporate Mobility Partner
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#fcf5e5] drop-shadow-xl mb-4">
            Premium Corporate Travel Solutions
          </h1>
          <p className="text-[#e6dcc8] text-lg font-light max-w-2xl mx-auto leading-relaxed">
            From single-day client pickups to monthly fleet management. <br className="hidden md:block"/>
            Seamless, reliable, and professional transportation for your business.
          </p>
        </div>
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
    
      <div className="max-w-6xl mx-auto px-4 -mt-20 relative z-20">
        
        {/* TABS HEADER */}
        <div className="flex justify-center mb-6">
            <div className="bg-white p-2 rounded-xl shadow-xl flex flex-wrap justify-center gap-2 border border-gray-100 z-30 relative">
                <button 
                    onClick={() => setActiveTab('spot')}
                    className={`flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-sm md:text-base transition-all duration-300 w-full md:w-auto ${
                        activeTab === 'spot' 
                        ? 'bg-[#3e2723] text-[#d4af37] shadow-md transform scale-105' 
                        : 'text-gray-500 hover:bg-gray-50'
                    }`}
                >
                    <CalendarClock size={18} />
                    Single Day / Spot Booking
                </button>
                <button 
                    onClick={() => setActiveTab('contract')}
                    className={`flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-sm md:text-base transition-all duration-300 w-full md:w-auto ${
                        activeTab === 'contract' 
                        ? 'bg-[#3e2723] text-[#d4af37] shadow-md transform scale-105' 
                        : 'text-gray-500 hover:bg-gray-50'
                    }`}
                >
                    <FileText size={18} />
                    Monthly / Yearly Contract
                </button>
            </div>
        </div>

        {/* --- DYNAMIC CONTENT AREA --- */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4 border-[#d4af37] min-h-[500px]">
            <div className="grid md:grid-cols-5 h-full">
                
                {/* LEFT COLUMN: Contextual Info */}
                <div className="md:col-span-2 bg-[#fcf5e5] p-10 border-r border-[#faeec7] flex flex-col justify-center">
                    {activeTab === 'spot' ? (
                        <div className="animate-fade-in">
                            <h3 className="text-2xl font-serif font-bold text-[#3e2723] mb-4">Ad-Hoc Business Travel</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Need a luxury sedan for a client pickup or an SUV for a team meeting? 
                                Book instantly with our spot booking service.
                            </p>
                            <ul className="space-y-4">
                                <FeatureItem text="Immediate Confirmation" />
                                <FeatureItem text="GST Invoice Provided" />
                                <FeatureItem text="Chauffeur in Uniform" />
                                <FeatureItem text="Airport Meet & Greet" />
                            </ul>
                        </div>
                    ) : (
                        <div className="animate-fade-in">
                            <h3 className="text-2xl font-serif font-bold text-[#3e2723] mb-4">Long Term Fleet Solutions</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Optimize your logistics with our monthly and yearly car rental plans. 
                                Ideal for employee transportation and dedicated executive cars.
                            </p>
                            <ul className="space-y-4">
                                <FeatureItem text="Fixed Monthly Rates" />
                                <FeatureItem text="Dedicated Vehicle & Driver" />
                                <FeatureItem text="Replacement Vehicle Guarantee" />
                                <FeatureItem text="Priority Support Line" />
                            </ul>
                        </div>
                    )}
                </div>

                {/* RIGHT COLUMN: Forms */}
                <div className="md:col-span-3 p-10">
                    {activeTab === 'spot' ? <SpotBookingForm /> : <ContractInquiryForm />}
                </div>

            </div>
        </div>

        {/* --- TRUST INDICATORS --- */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 mb-20">
            <TrustCard 
                icon={<CheckCircle2 size={32} className="text-[#d4af37]" />}
                title="100% Compliance"
                desc="All vehicles have valid permits, insurance, and PUC. Drivers are background verified."
            />
            <TrustCard 
                icon={<FileText size={32} className="text-[#d4af37]" />}
                title="GST Billing"
                desc="Automated GST compliant invoices for easy input tax credit claims."
            />
            <TrustCard 
                icon={<Phone size={32} className="text-[#d4af37]" />}
                title="24/7 Corporate Desk"
                desc="Dedicated account manager for corporate clients to handle emergency requests."
            />
        </div>

      </div>
    </div>
  );
}

// --- SUB COMPONENTS ---

function FeatureItem({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-3 text-sm font-bold text-[#5d4037]">
            <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center">
                <CheckCircle2 size={14} className="text-[#b45309]" />
            </div>
            {text}
        </li>
    )
}

function TrustCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex gap-4 items-start">
            <div className="shrink-0 bg-[#fffdf5] p-3 rounded-lg border border-[#f0e6d2]">{icon}</div>
            <div>
                <h4 className="font-serif font-bold text-[#3e2723] text-lg mb-1">{title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
        </div>
    )
}

// --- FORM 1: SPOT BOOKING (Single Day) ---
function SpotBookingForm() {
    const [formData, setFormData] = useState({
        pickup: '',
        drop: '',
        date: '',
        time: '',
        carModel: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const ownerNumber = "917208937208";
        const message = `*Corporate Spot Booking* 🏢%0A%0A` +
            `📍 *Pickup:* ${formData.pickup}%0A` +
            `🏁 *Drop:* ${formData.drop}%0A` +
            `📅 *Date:* ${formData.date}%0A` +
            `⏰ *Time:* ${formData.time}%0A` +
            `🚗 *Car:* ${formData.carModel}`;
        
        window.open(`https://wa.me/${ownerNumber}?text=${message}`, '_blank');
    };

    // Calculate today's date for validation
    const todayStr = new Date().toISOString().split('T')[0];

    return (
        <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in">
            <h3 className="text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-6">Book a Ride</h3>
            
            <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1">
                    <label className="text-xs font-bold text-[#3e2723] uppercase">Pickup Location</label>
                    <div className="relative">
                        <MapPin size={16} className="absolute left-3 top-3.5 text-gray-400" />
                        <input name="pickup" onChange={handleChange} required type="text" placeholder="Office / Airport" className="w-full pl-10 p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] outline-none" />
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-bold text-[#3e2723] uppercase">Drop Location</label>
                    <div className="relative">
                        <MapPin size={16} className="absolute left-3 top-3.5 text-gray-400" />
                        <input name="drop" onChange={handleChange} required type="text" placeholder="Destination" className="w-full pl-10 p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] outline-none" />
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1">
                    <label className="text-xs font-bold text-[#3e2723] uppercase">Date</label>
                    {/* FIX: Added min={todayStr} to prevent past date selection */}
                    <input 
                        name="date" 
                        onChange={handleChange} 
                        required 
                        type="date" 
                        min={todayStr} 
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] outline-none" 
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-bold text-[#3e2723] uppercase">Time</label>
                    <input name="time" onChange={handleChange} required type="time" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] outline-none" />
                </div>
            </div>

            <div className="space-y-1">
                <label className="text-xs font-bold text-[#3e2723] uppercase">Select Car Class</label>
                <div className="relative">
                    <Car size={16} className="absolute left-3 top-3.5 text-gray-400" />
                    <select name="carModel" onChange={handleChange} required className="w-full pl-10 p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] outline-none appearance-none cursor-pointer">
                        <option value="">-- Select Preference --</option>
                        <option value="Sedan (Dzire/Etios)">Executive Sedan (Dzire/Etios)</option>
                        <option value="SUV (Ertiga/Crysta)">Business SUV (Ertiga/Crysta)</option>
                        <option value="Premium (Hycross/Fortuner)">Premium Class (Hycross/Fortuner)</option>
                        <option value="Luxury (Merc/BMW)">Luxury (Mercedes/BMW)</option>
                    </select>
                </div>
            </div>

            <button className="w-full bg-[#3e2723] text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#5d4037] transition-colors shadow-lg mt-4">
                <span>Confirm Booking on WhatsApp</span>
                <Send size={18} />
            </button>
        </form>
    );
}

// --- FORM 2: CONTRACT INQUIRY (Long Term) ---
function ContractInquiryForm() {
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        duration: 'Monthly',
        requirements: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const ownerNumber = "917208937208";
        const message = `*Corporate Contract Inquiry* 🤝%0A%0A` +
            `🏢 *Company:* ${formData.companyName}%0A` +
            `👤 *Contact:* ${formData.contactPerson}%0A` +
            `⏳ *Duration:* ${formData.duration}%0A` +
            `📝 *Requirement:* ${formData.requirements}`;
        
        window.open(`https://wa.me/${ownerNumber}?text=${message}`, '_blank');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in">
            <h3 className="text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-6">Request a Quote</h3>
            
            <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1">
                    <label className="text-xs font-bold text-[#3e2723] uppercase">Company Name</label>
                    <div className="relative">
                        <Building2 size={16} className="absolute left-3 top-3.5 text-gray-400" />
                        <input name="companyName" onChange={handleChange} required type="text" placeholder="Your Company Ltd" className="w-full pl-10 p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] outline-none" />
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-bold text-[#3e2723] uppercase">Contact Person</label>
                    <input name="contactPerson" onChange={handleChange} required type="text" placeholder="Name / Mobile" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] outline-none" />
                </div>
            </div>

            <div className="space-y-1">
                <label className="text-xs font-bold text-[#3e2723] uppercase">Duration Type</label>
                <select name="duration" onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] outline-none cursor-pointer">
                    <option value="Monthly">Monthly Rental</option>
                    <option value="Yearly">Yearly Contract</option>
                    <option value="Event">Event / Conference Transport</option>
                </select>
            </div>

            <div className="space-y-1">
                <label className="text-xs font-bold text-[#3e2723] uppercase">Requirements</label>
                <textarea name="requirements" onChange={handleChange} rows={4} placeholder="E.g., Need 3 Innovas for 6 months for staff pickup..." className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] outline-none resize-none"></textarea>
            </div>

            <button className="w-full bg-[#3e2723] text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#5d4037] transition-colors shadow-lg mt-4">
                <span>Request Proposal on WhatsApp</span>
                <Send size={18} />
            </button>
        </form>
    );
}