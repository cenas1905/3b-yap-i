import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="3B Yapı" className="h-10 w-auto object-contain" />
              <span className="font-display font-bold text-xl tracking-wide text-white">3B YAPI</span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Winsa ve Royal Glass güvencesiyle mekanlarınıza değer katan yenilikçi cam ve alüminyum çözümleri.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-amber-500 hover:text-neutral-950 transition-all font-bold text-xs">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-amber-500 hover:text-neutral-950 transition-all font-bold text-xs">
                FB
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Hızlı Menü</h4>
            <ul className="flex flex-col gap-3">
              {['Ana Sayfa', 'Hakkımızda', 'Hizmetlerimiz', 'Projelerimiz'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-neutral-400 text-sm hover:text-amber-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">İletişim</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-4 text-neutral-400 text-sm">
                <MapPin size={20} className="text-amber-500 shrink-0" />
                <span>Örnek Mahallesi, Yapı Caddesi No: 123, Merkez / Şehir</span>
              </li>
              <li className="flex items-center gap-4 text-neutral-400 text-sm">
                <Phone size={20} className="text-amber-500 shrink-0" />
                <a href="tel:+905555555555" className="hover:text-amber-400 transition-colors">+90 555 555 55 55</a>
              </li>
              <li className="flex items-center gap-4 text-neutral-400 text-sm">
                <Mail size={20} className="text-amber-500 shrink-0" />
                <a href="mailto:info@3byapi.com" className="hover:text-amber-400 transition-colors">info@3byapi.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-xs">
            © {new Date().getFullYear()} 3B Yapı. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-xs text-neutral-600">
            <Link href="/admin" className="hover:text-neutral-300 transition-colors">Admin Paneli</Link>
            <Link href="#" className="hover:text-neutral-300 transition-colors">Gizlilik Politikası</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
