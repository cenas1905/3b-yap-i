import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="3B Yapı" className="h-10 w-auto object-contain" />
              <span className="font-display font-bold text-xl tracking-wide text-slate-900">3B YAPI</span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Winsa ve Royal Glass güvencesiyle mekanlarınıza değer katan yenilikçi cam ve alüminyum çözümleri.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all font-bold text-xs">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all font-bold text-xs">
                FB
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6 tracking-wider uppercase text-sm">Hızlı Menü</h4>
            <ul className="flex flex-col gap-3">
              {['Ana Sayfa', 'Hakkımızda', 'Hizmetlerimiz', 'Projelerimiz'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-600 text-sm hover:text-blue-600 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div id="iletisim" className="md:col-span-2">
            <h4 className="text-slate-900 font-bold mb-6 tracking-wider uppercase text-sm">İletişim</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-4 text-slate-600 text-sm hover:text-amber-600 transition-colors">
                <MapPin size={20} className="text-amber-600 shrink-0" />
                <a href="https://maps.app.goo.gl/VNyy2MhTDFz9oQJW6" target="_blank" rel="noopener noreferrer">
                  Konum için tıklayınız (Haritalarda Aç)
                </a>
              </li>
              <li className="flex items-center gap-4 text-slate-600 text-sm">
                <Phone size={20} className="text-amber-600 shrink-0" />
                <a href="tel:05442201740" className="hover:text-amber-600 transition-colors">0544 220 17 40</a>
              </li>
              <li className="flex items-center gap-4 text-slate-600 text-sm">
                <a href="https://www.instagram.com/winsa3byapi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors font-bold underline">
                  Instagram Adresimiz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} 3B Yapı. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link href="/admin" className="hover:text-blue-600 transition-colors">Admin Paneli</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Gizlilik Politikası</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
