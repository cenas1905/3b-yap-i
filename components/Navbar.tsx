"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hizmetlerimiz", href: "#hizmetler" },
    { name: "Projeler", href: "#projeler" },
    { name: "İletişim", href: "#iletisim" },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm border-b border-amber-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-slate-500/30 group-hover:scale-105 transition-transform">
                3B
              </div>
              <span className="text-2xl font-display font-bold text-slate-800 tracking-tight">
                Yapı
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-3 pl-3 border-l-2 border-slate-200">
              <span className="text-sm font-bold text-slate-500 tracking-widest uppercase">Winsa</span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span className="text-sm font-bold text-slate-500 tracking-widest uppercase">Royal Glass</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#koleksiyon" className="text-slate-600 hover:text-blue-600 transition-colors">Koleksiyon</a>
            <a href="#projeler" className="text-slate-600 hover:text-blue-600 transition-colors">Projeler</a>
            <a href="#iletisim" className="text-slate-600 hover:text-blue-600 transition-colors">İletişim</a>
            
            {/* Phone Number CTA */}
            <a 
              href="tel:05442201740" 
              className="group flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white rounded-full transition-all shadow-[0_8px_20px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_25px_rgb(37,99,235,0.25)] hover:bg-blue-600 relative overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-bold tracking-wide">0544 220 17 40</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-slate-200 py-6 px-6 flex flex-col gap-6 md:hidden shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-bold text-slate-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
