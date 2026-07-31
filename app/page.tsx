import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-neutral-950/20 to-neutral-950"></div>
          
          <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl pt-32">
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-lg">
              Estetiği ve Güvenliği <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Camla Yeniden Tasarlıyoruz</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              3B Yapı olarak, Winsa ve Royal Glass uzmanlığıyla yaşam alanlarınıza şıklık, yalıtım ve konfor katıyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#projeler" className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-neutral-950 font-semibold rounded-full transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-105">
                Projelerimizi İnceleyin
              </a>
              <a href="#iletisim" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-medium rounded-full transition-all hover:scale-105">
                Ücretsiz Keşif İste
              </a>
            </div>
          </div>
        </section>

        {/* Brand Bar */}
        <div className="border-y border-white/5 bg-white/5 backdrop-blur-sm py-8">
          <div className="container mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <h3 className="font-display text-2xl font-bold tracking-widest uppercase">WINSA</h3>
            <h3 className="font-display text-2xl font-bold tracking-widest uppercase">ROYAL GLASS</h3>
          </div>
        </div>

        {/* Services / About */}
        <section className="py-24 bg-neutral-950">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-white">Neden 3B Yapı?</h2>
              <p className="text-neutral-400">Yılların verdiği tecrübe ve sektörün lider markalarıyla çalışmanın güvencesi. Her detayı kusursuz düşünülmüş mimari cam sistemleri.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Service Cards */}
              {[
                { title: "Premium Cam Balkon", desc: "Dört mevsim kullanılabilen, üstün ısı ve ses yalıtımlı lüks cam balkon sistemleri." },
                { title: "Alüminyum Doğrama", desc: "Modern mimariyle uyumlu, dayanıklı ve uzun ömürlü alüminyum pencere & kapı çözümleri." },
                { title: "Mimari Cam Çözümleri", desc: "Ofis bölmeleri, kış bahçeleri ve özel tasarım cam uygulamaları ile mekanlarınıza değer katıyoruz." }
              ].map((service, i) => (
                <div key={i} className="p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
                  <h3 className="text-xl font-bold text-amber-400 mb-4">{service.title}</h3>
                  <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
