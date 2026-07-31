import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
          <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-slate-50/80 to-slate-50"></div>
          
          <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl pt-32">
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 drop-shadow-sm">
              Estetiği ve Güvenliği <br /> <span className="text-amber-500">Camla Yeniden Tasarlıyoruz</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              3B Yapı olarak, Winsa ve Royal Glass uzmanlığıyla yaşam alanlarınıza şıklık, yalıtım ve konfor katıyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#projeler" className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-all shadow-[0_4px_20px_rgba(245,158,11,0.3)] hover:scale-105">
                Projelerimizi İnceleyin
              </a>
              <a href="#iletisim" className="px-8 py-4 bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold rounded-full transition-all hover:scale-105 shadow-sm">
                Ücretsiz Keşif İste
              </a>
            </div>
          </div>
        </section>

        {/* Brand Bar */}
        <div className="border-y border-slate-200 bg-white py-8 shadow-sm">
          <div className="container mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <h3 className="font-display text-2xl font-bold tracking-widest uppercase text-slate-800">WINSA</h3>
            <h3 className="font-display text-2xl font-bold tracking-widest uppercase text-slate-800">ROYAL GLASS</h3>
          </div>
        </div>

        {/* Services / About */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-slate-900">Neden 3B Yapı?</h2>
              <p className="text-slate-600 text-lg">Yılların verdiği tecrübe ve sektörün lider markalarıyla çalışmanın güvencesi. Her detayı kusursuz düşünülmüş mimari cam sistemleri.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Service Cards */}
              {[
                { title: "Premium Cam Balkon", desc: "Dört mevsim kullanılabilen, üstün ısı ve ses yalıtımlı lüks cam balkon sistemleri." },
                { title: "Alüminyum Doğrama", desc: "Modern mimariyle uyumlu, dayanıklı ve uzun ömürlü alüminyum pencere & kapı çözümleri." },
                { title: "Mimari Cam Çözümleri", desc: "Ofis bölmeleri, kış bahçeleri ve özel tasarım cam uygulamaları ile mekanlarınıza değer katıyoruz." }
              ].map((service, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-400/50 transition-all group">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-amber-500 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projeler" className="py-24 bg-white border-t border-slate-200">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-slate-900">Referans Projelerimiz</h2>
              <p className="text-slate-600 text-lg">Winsa ve Royal Glass kalitesiyle tamamladığımız, modern mimariyle uyumlu lüks çalışmalarımız.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Lüks Cam Balkon Sistemleri", desc: "Isıcamlı, katlanır ve sürme seriler ile dört mevsim konfor.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600" },
                { title: "Kış Bahçesi Projeleri", desc: "Özel tasarım alüminyum profiller ve dayanıklı tavan camlarıyla kış bahçeleri.", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600" },
                { title: "Alüminyum Doğrama & Cephe", desc: "Modern binalar için yalıtımlı, estetik ve rüzgara dayanıklı dış cephe çözümleri.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" },
                { title: "Minimalist İç Mekan Camları", desc: "Ofis bölme sistemleri, dekoratif cam kapılar ve modern duşakabinler.", img: "https://images.unsplash.com/photo-1600566753086-00f18efc2291?auto=format&fit=crop&q=80&w=1600" }
              ].map((project, i) => (
                <div key={i} className="group relative h-[400px] overflow-hidden rounded-2xl bg-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 z-10"></div>
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute bottom-8 left-8 right-8 z-20">
                    <div className="w-12 h-1 bg-amber-500 mb-4 transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
                    <h4 className="text-white font-display text-2xl font-bold mb-2 shadow-sm">{project.title}</h4>
                    <p className="text-slate-200 text-sm opacity-0 -translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">{project.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <a href="https://www.instagram.com/winsa3byapi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-all shadow-[0_4px_20px_rgba(245,158,11,0.3)] hover:scale-105">
                Tüm Projelerimiz İçin Instagram'ı Ziyaret Edin
              </a>
            </div>
          </div>
        </section>
      </main>elerimiz İçin Instagram'ı Ziyaret Edin
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
