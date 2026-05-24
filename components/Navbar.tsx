"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Packages', href: '/packages' },
    { name: 'Car Rent', href: '/tariff' },
    { name: 'Corporate', href: '/corporate' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fff9f0]/95 backdrop-blur-md shadow-sm border-b border-[#ffe0b2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* --- LOGO SECTION --- */}
          <Link href="/" className="flex items-center">
             {/* UPDATED CONTAINER: 
                 1. Adjusted h/w ratio to make the logo sit taller and less stretched horizontally.
                 2. Added rounded corners, overflow-hidden, a subtle border, and shadow. 
                    This treats the rectangular JPEG like a professional "badge" instead of a flat sticker.
             */}
             <div className="relative h-14 w-44  md:h-16 md:w-52 rounded-lg overflow-hidden shadow-sm border border-black/5 transition-transform hover:scale-[1.02]">
               <Image 
                 src="/logo-removebg-preview.png" 
                 alt="BM Car Rentals" 
                 fill
                 // Removed 'object-left' to center it within the new container
                 className="object-contain"
                 priority
               />
             </div>
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-gray-700 hover:text-[#ff7a00] font-medium text-[16px] transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* --- MOBILE MENU BUTTON --- */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-[#2e7d32] hover:bg-green-50 p-2 rounded-md transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE NAVIGATION DROPDOWN --- */}
      {isOpen && (
        <div className="md:hidden bg-[#fff9f0] border-t border-[#ffe0b2] absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-[#fff0e0] hover:text-[#ff7a00] rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}