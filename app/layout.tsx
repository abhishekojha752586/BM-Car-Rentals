// app/layout.tsx
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    template: '%s | BM Car Rentals Mumbai',
    default: 'BM Car Rentals & Tours - Trusted Mumbai Car Rental Service', // [cite: 109]
  },
  description: 'Book premium car rentals from Mumbai to Shirdi, Lonavala, and Ashtavinayak. Affordable AC cabs with experienced drivers.', // [cite: 11-12]
  keywords: ['Mumbai car rental', 'Mumbai to Shirdi cab', 'Corporate car rental Mumbai', 'Ashtavinayak tour packages'], // [cite: 248-251]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-bm-beige text-slate-800 antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        
        <FloatingWhatsApp />
      </body>
    </html>
  );
}