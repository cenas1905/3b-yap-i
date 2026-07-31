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
            <a href="#koleksiyon" className="text-slate-600 hover:text-slate-900 transition-colors">Koleksiyon</a>
            <a href="#projeler" className="text-slate-600 hover:text-slate-900 transition-colors">Projeler</a>
            <a href="#iletisim" className="text-slate-600 hover:text-slate-900 transition-colors">İletişim</a>
            <Link href="/admin" className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full transition-all shadow-md">
              Giriş Yap
            </Link>
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
