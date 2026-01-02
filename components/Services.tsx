// components/Services.tsx
import Image from 'next/image';

const services = [
  { title: "AC Buses & Cars", subtitle: "Luxury AC Buses & Private Cars", img: "/assets/car-icon.png" }, // Use actual images
  { title: "Same Day Return", subtitle: "One Day & Overnight Tours", img: "/assets/clock-icon.png" },
  { title: "Hotel Packages", subtitle: "Stay & Darshan Packages", img: "/assets/hotel-icon.png" },
];

export default function Services() {
  return (
    <section className="py-20 relative">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-bm-gold"></span>
          <h2 className="text-4xl font-serif font-bold text-bm-royal">Our Services</h2>
          <span className="h-px w-12 bg-bm-gold"></span>
        </div>
        <div className="w-24 h-1 bg-bm-gold mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="relative bg-[#fffdf5] p-6 rounded-lg border-2 border-[#eaddcf] shadow-paper group hover:shadow-gold transition-all duration-300">
            {/* The "Paper" corner effect */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-bm-gold to-transparent opacity-50"></div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-24 relative mb-4">
                 {/* Replace with your cutout icons */}
                 <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center border border-gray-300">
                    <span className="text-gray-400 text-xs">Icon Image</span>
                 </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#8B4513] mb-2">{s.title}</h3>
              <p className="text-gray-600 font-medium italic">{s.subtitle}</p>
            </div>
            
            {/* Bottom Gold Line */}
            <div className="mt-6 h-px w-1/2 mx-auto bg-bm-gold/30"></div>
          </div>
        ))}
      </div>
    </section>
  );
}