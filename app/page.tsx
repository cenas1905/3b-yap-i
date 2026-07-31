"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat"
          ></motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-slate-50/80 to-slate-50"></div>
          
          <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl pt-32">
            <motion.h1 
              initial="hidden" animate="visible" variants={fadeInUp}
              className="font-display text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 drop-shadow-sm"
            >
              Estetiği ve Güvenliği <br /> <span className="text-amber-500">Camla Yeniden Tasarlıyoruz</span>
            </motion.h1>
            <motion.p 
              initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-medium leading-relaxed"
            >
              3B Yapı olarak, Winsa ve Royal Glass uzmanlığıyla yaşam alanlarınıza şıklık, yalıtım ve konfor katıyoruz.
            </motion.p>
            <motion.div 
              initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a href="#projeler" className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-all shadow-[0_4px_20px_rgba(245,158,11,0.3)] hover:scale-105">
                Projelerimizi İnceleyin
              </a>
              <a href="#iletisim" className="px-8 py-4 bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold rounded-full transition-all hover:scale-105 shadow-sm">
                Ücretsiz Keşif İste
              </a>
            </motion.div>
          </div>
        </section>

        {/* Brand Bar */}
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="border-y border-slate-200 bg-white py-8 shadow-sm"
        >
          <div className="container mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-all duration-500">
            <motion.h3 whileHover={{ scale: 1.1 }} className="font-display text-2xl font-bold tracking-widest uppercase text-slate-800 cursor-default">WINSA</motion.h3>
            <motion.h3 whileHover={{ scale: 1.1 }} className="font-display text-2xl font-bold tracking-widest uppercase text-slate-800 cursor-default">ROYAL GLASS</motion.h3>
          </div>
        </motion.div>

        {/* Services / About */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-slate-900">Neden 3B Yapı?</h2>
              <p className="text-slate-600 text-lg">Yılların verdiği tecrübe ve sektörün lider markalarıyla çalışmanın güvencesi. Her detayı kusursuz düşünülmüş mimari cam sistemleri.</p>
            </motion.div>
            <motion.div 
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-3 gap-8"
            >
              {/* Service Cards */}
              {[
                { title: "Premium Cam Balkon", desc: "Dört mevsim kullanılabilen, üstün ısı ve ses yalıtımlı lüks cam balkon sistemleri." },
                { title: "Alüminyum Doğrama", desc: "Modern mimariyle uyumlu, dayanıklı ve uzun ömürlü alüminyum pencere & kapı çözümleri." },
                { title: "Mimari Cam Çözümleri", desc: "Ofis bölmeleri, kış bahçeleri ve özel tasarım cam uygulamaları ile mekanlarınıza değer katıyoruz." }
              ].map((service, i) => (
                <motion.div 
                  variants={fadeInUp}
                  key={i} 
                  className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-amber-400/50 transition-all duration-300 group cursor-default"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-amber-500 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section id="projeler" className="py-24 bg-white border-t border-slate-200 overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-slate-900">Referans Projelerimiz</h2>
              <p className="text-slate-600 text-lg">Winsa ve Royal Glass kalitesiyle tamamladığımız, modern mimariyle uyumlu lüks çalışmalarımız.</p>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {[
                { title: "Lüks Cam Balkon Sistemleri", desc: "Isıcamlı, katlanır ve sürme seriler ile dört mevsim konfor.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600" },
                { title: "Kış Bahçesi Projeleri", desc: "Özel tasarım alüminyum profiller ve dayanıklı tavan camlarıyla kış bahçeleri.", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600" },
                { title: "Alüminyum Doğrama & Cephe", desc: "Modern binalar için yalıtımlı, estetik ve rüzgara dayanıklı dış cephe çözümleri.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" },
                { title: "Minimalist İç Mekan Camları", desc: "Ofis bölme sistemleri, dekoratif cam kapılar ve modern duşakabinler.", img: "https://images.unsplash.com/photo-1600566753086-00f18efc2291?auto=format&fit=crop&q=80&w=1600" }
              ].map((project, i) => (
                <motion.div 
                  variants={fadeInUp}
                  key={i} 
                  className="group relative h-[400px] overflow-hidden rounded-2xl bg-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 z-10 transition-opacity duration-500 group-hover:opacity-90"></div>
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute bottom-8 left-8 right-8 z-20">
                    <div className="w-12 h-1 bg-amber-500 mb-4 transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
                    <h4 className="text-white font-display text-2xl font-bold mb-2 shadow-sm">{project.title}</h4>
                    <p className="text-slate-200 text-sm opacity-0 -translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">{project.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
              className="text-center mt-16"
            >
              <a href="https://www.instagram.com/winsa3byapi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-all shadow-[0_4px_20px_rgba(245,158,11,0.3)] hover:scale-110 hover:-translate-y-1">
                Tüm Projelerimiz İçin Instagram'ı Ziyaret Edin
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
