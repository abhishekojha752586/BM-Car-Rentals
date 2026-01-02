import { MapPin, Phone, Mail, ChevronRight, Facebook, Instagram, Twitter, Clock, Award, Shield, Car, Code } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // --- DEVELOPER DETAILS CONFIGURATION ---
  const developerName = "Abhishek Ojha";
  
  const developerNumber = "+917525863757"; 
  const developerMessage = "I came from bm car rentals website and wanna website for my company something similar";
  const developerLink = `https://wa.me/${developerNumber}?text=${encodeURIComponent(developerMessage)}`;

  const popularPackages = [
    { name: "Mumbai to Shirdi Cab", href: "/packages/mumbai-to-shirdi" },
    { name: "Mumbai to Lonavala Tour", href: "/packages/mumbai-to-lonavala" },
    { name: "Ashtavinayak Darshan", href: "/packages/ashtavinayak-darshan" },
    { name: "Mumbai City Sightseeing", href: "/packages/mumbai-sightseeing" },
    { name: "Corporate Car Rental", href: "/corporate" }
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "All Packages", href: "/packages" },
    { name: "Corporate Services", href: "/corporate" },
    { name: "Contact Us", href: "/contact" },
    { name: "Terms & Conditions", href: "/terms" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#3e2723] to-[#2e1f1c] text-[#fcf5e5] overflow-hidden">
      
      {/* Decorative Top Border with Pattern */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#d4af37] via-[#f4d58d] to-[#d4af37]"></div>
      
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        {/* Top Section - 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Column 1: Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-serif font-bold mb-2">
                <span className="text-[#2e7d32]">BM</span>
                <span className="text-[#ff7a00]"> CAR RENTALS</span>
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-[#d4af37] to-transparent rounded"></div>
            </div>
            
            <p className="text-[#e6dcc8] leading-relaxed mb-6 text-sm opacity-90">
              Your trusted partner for comfortable & affordable pilgrimage trips, corporate travel, and family vacations across Maharashtra.
            </p>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-[#5d4037] p-3 rounded-lg text-center hover:bg-[#d4af37] transition-colors group">
                <Award className="w-6 h-6 text-[#d4af37] group-hover:text-white mx-auto mb-1" />
                <p className="text-[9px] text-[#fcf5e5] font-semibold">Verified</p>
              </div>
              <div className="bg-[#5d4037] p-3 rounded-lg text-center hover:bg-[#d4af37] transition-colors group">
                <Shield className="w-6 h-6 text-[#d4af37] group-hover:text-white mx-auto mb-1" />
                <p className="text-[9px] text-[#fcf5e5] font-semibold">Safe</p>
              </div>
              <div className="bg-[#5d4037] p-3 rounded-lg text-center hover:bg-[#d4af37] transition-colors group">
                <Clock className="w-6 h-6 text-[#d4af37] group-hover:text-white mx-auto mb-1" />
                <p className="text-[9px] text-[#fcf5e5] font-semibold">24/7</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/share/17nsTnTCqv/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5d4037] p-2.5 rounded-full hover:bg-[#d4af37] transition-all transform hover:scale-110 hover:-translate-y-1 border border-[#d4af37]/30"
              >
                <Facebook size={18} className="text-white" />
              </a>
              <a 
                href="https://www.instagram.com/bmcarrentalsmumbai?igsh=aGtldTJvbjAyNGM4" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5d4037] p-2.5 rounded-full hover:bg-[#d4af37] transition-all transform hover:scale-110 hover:-translate-y-1 border border-[#d4af37]/30"
              >
                <Instagram size={18} className="text-white" />
              </a>
              <a 
                href="https://x.com/bmcarrentals" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5d4037] p-2.5 rounded-full hover:bg-[#d4af37] transition-all transform hover:scale-110 hover:-translate-y-1 border border-[#d4af37]/30"
              >
                <Twitter size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Popular Packages */}
          <div>
            <h3 className="text-xl font-serif font-bold text-[#d4af37] mb-6 flex items-center gap-2">
              <Car size={20} />
              Popular Packages
            </h3>
            <ul className="space-y-3">
              {popularPackages.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="flex items-center gap-2 text-[#e6dcc8] hover:text-[#d4af37] transition-all duration-300 group text-sm"
                  >
                    <ChevronRight className="w-4 h-4 text-[#d4af37] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold text-[#d4af37] mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="flex items-center gap-2 text-[#e6dcc8] hover:text-[#d4af37] transition-all duration-300 group text-sm"
                  >
                    <ChevronRight className="w-4 h-4 text-[#d4af37] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info & Map */}
          <div>
            <h3 className="text-xl font-serif font-bold text-[#d4af37] mb-6">
              Contact Us
            </h3>
            
            {/* Contact Details */}
            <div className="space-y-4 mb-6">
              <a 
                href="tel:+917208937208"
                className="flex items-start gap-3 group cursor-pointer"
              >
                <div className="mt-0.5 p-2 bg-[#5d4037] rounded-full border border-[#d4af37] group-hover:bg-[#d4af37] transition-colors flex-shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-[#d4af37] font-semibold mb-0.5">Call Us Now</p>
                  <span className="text-sm text-[#fcf5e5] group-hover:text-[#d4af37] transition-colors font-mono">+91 72089 37208</span>
                </div>
              </a>

              {/* Updated Email from Contact Page */}
              <a 
                href="mailto:Booking@bmcarrentals.com"
                className="flex items-start gap-3 group cursor-pointer"
              >
                <div className="mt-0.5 p-2 bg-[#5d4037] rounded-full border border-[#d4af37] group-hover:bg-[#d4af37] transition-colors flex-shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-[#d4af37] font-semibold mb-0.5">Email Us</p>
                  <span className="text-sm text-[#fcf5e5] group-hover:text-[#d4af37] transition-colors break-all">Booking@bmcarrentals.com</span>
                </div>
              </a>

              {/* Updated Address from Contact Page */}
              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="mt-0.5 p-2 bg-[#5d4037] rounded-full border border-[#d4af37] group-hover:bg-[#d4af37] transition-colors flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-[#d4af37] font-semibold mb-0.5">Visit Us</p>
                  <span className="text-sm text-[#fcf5e5] group-hover:text-[#d4af37] transition-colors">
                    Dispatch Office – A-6, PMGP Colony, Sion Bandra Link Road, Dharavi, Mumbai-400017
                  </span>
                </div>
              </div>
            </div>

            {/* Mini Map */}
            <div className="relative h-32 rounded-lg overflow-hidden border-2 border-[#d4af37] shadow-lg grayscale hover:grayscale-0 transition-all duration-500">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.315851341813!2d72.86216039999998!3d19.049845700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8dafd5dad31%3A0x20409ec375394ad9!2sB%20M%20Car%20Rentals%20Mumbai%20%7C%20Chauffeur%20Driven%20Car%20Rental%20Service!5e0!3m2!1sen!2sin!4v1767191658807!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy"
                title="BM Car Rentals Location"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Middle Section - Service Areas */}
        <div className="border-t border-b border-[#5d4037] py-8 mb-8">
          <h4 className="text-center text-[#d4af37] font-serif font-bold text-lg mb-4">Service Areas</h4>
          <div className="flex flex-wrap justify-center gap-3 text-xs text-[#e6dcc8]">
            {['Mumbai', 'Thane', 'Navi Mumbai', 'Pune', 'Shirdi', 'Lonavala', 'Mahabaleshwar', 'Nashik', 'Alibaug', 'Matheran', 'Dharavi', 'Bandra', 'Sion'].map((area) => (
              <span key={area} className="bg-[#5d4037] px-4 py-2 rounded-full hover:bg-[#d4af37] hover:text-white transition-colors cursor-pointer">
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Section - Copyright & Developer Credit */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#a89078]">
          <div className="text-center md:text-left">
            <p>
              © {currentYear} <span className="text-[#d4af37] font-bold">BM Car Rentals & Tours</span>. All Rights Reserved.
            </p>
            {/* Developer Credit with WhatsApp Link */}
            <p className="text-xs mt-2 opacity-80 flex items-center justify-center md:justify-start gap-1">
              <Code size={12} /> Designed & Developed by 
              <a 
                href={developerLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#d4af37] hover:text-white font-bold hover:underline transition-all cursor-pointer"
                title="Click to contact developer"
              >
                {developerName}
              </a>
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <Link href="/" className="hover:text-[#d4af37] transition-colors">Privacy Policy</Link>
            <span className="text-[#5d4037]">|</span>
            <Link href="/" className="hover:text-[#d4af37] transition-colors">Terms of Service</Link>
            <span className="text-[#5d4037]">|</span>
            <Link href="/" className="hover:text-[#d4af37] transition-colors">Refund Policy</Link>
          </div>
        </div>

      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-50"></div>
    </footer>
  );
}