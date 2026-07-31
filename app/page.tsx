"use client";

import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import siteData from "../data.json";

export default function Home() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
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
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 bg-[url('/w5.jpg')] bg-cover bg-center bg-no-repeat"
          ></motion.div>
          {/* Refreshing Glassmorphism Gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-slate-50/80 to-amber-50/90 backdrop-blur-[2px]"></div>
          
          <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl pt-32">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
              className="inline-block mb-6 px-6 py-2 rounded-full bg-white/60 backdrop-blur-md border border-amber-200 shadow-sm text-amber-600 font-bold tracking-widest uppercase text-sm"
            >
              Lüks ve Zarafet
            </motion.div>
            <motion.h1 
              initial="hidden" animate="visible" variants={fadeInUp}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-800 mb-8 drop-shadow-sm leading-tight"
            >
              {siteData.heroTitle.split(' ').slice(0, -2).join(' ')} <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 drop-shadow-sm">
                {siteData.heroTitle.split(' ').slice(-2).join(' ')}
              </span>
            </motion.h1>
            <motion.p 
              initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-medium leading-relaxed"
            >
              {siteData.heroSubtitle}
            </motion.p>
            <motion.div 
              initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a href="#projeler" className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-yellow-500 hover:to-amber-400 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-amber-500/30 hover:scale-105">
                Koleksiyonu İnceleyin
              </a>
              <a href="#iletisim" className="px-8 py-4 bg-white hover:bg-slate-100 border border-amber-200 text-slate-700 font-bold rounded-full transition-all hover:scale-105 shadow-sm">
                Bize Ulaşın
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
        <section className="relative py-32 bg-white overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="relative container mx-auto px-6 z-10">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-slate-900">Neden <span className="text-blue-600">3B Yapı?</span></h2>
              <p className="text-slate-600 text-lg">{siteData.aboutText || "Yılların verdiği tecrübe, sektörün lider markaları ve her detayı kusursuz düşünülmüş mimari cam sistemleriyle fark yaratıyoruz."}</p>
            </motion.div>
            <motion.div 
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-3 gap-8"
            >
              {/* Service Cards */}
              {siteData.services.map((service: any, i: number) => (
                <motion.div 
                  variants={fadeInUp}
                  key={i} 
                  className="p-10 rounded-[2rem] bg-white/80 backdrop-blur-md border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(37,99,235,0.08)] hover:-translate-y-2 hover:border-blue-100 transition-all duration-500 group cursor-default relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-amber-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h3 className="relative text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors z-10">{service.title}</h3>
                  <p className="relative text-slate-600 leading-relaxed z-10">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section id="projeler" className="py-32 bg-slate-50 border-t border-slate-200/60 overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-transparent"></div>
          
          <div className="container relative z-10 mx-auto px-6">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-slate-900">Referans Projelerimiz</h2>
              <p className="text-slate-600 text-lg">Winsa ve Royal Glass kalitesiyle tamamladığımız, modern mimariyle uyumlu lüks çalışmalarımız.</p>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {[
                { title: "Lüks Cam Balkon Sistemleri", desc: "Isıcamlı, katlanır ve sürme seriler ile dört mevsim konfor.", img: "/w1.jpg" },
                { title: "Kış Bahçesi Projeleri", desc: "Özel tasarım alüminyum profiller ve dayanıklı tavan camlarıyla kış bahçeleri.", img: "/w2.jpg" },
                { title: "Alüminyum Doğrama & Cephe", desc: "Modern binalar için yalıtımlı, estetik ve rüzgara dayanıklı dış cephe çözümleri.", img: "/w3.jpg" },
                { title: "Minimalist İç Mekan Camları", desc: "Ofis bölme sistemleri, dekoratif cam kapılar ve modern duşakabinler.", img: "/w4.jpg" }
              ].map((project, i) => (
                <motion.div 
                  variants={fadeInUp}
                  key={i} 
                  className="group relative h-[450px] overflow-hidden rounded-[2rem] bg-slate-200 shadow-lg hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-700 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent opacity-60 z-10 transition-opacity duration-700 group-hover:opacity-80"></div>
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                  <div className="absolute bottom-10 left-10 right-10 z-20">
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-amber-500 mb-6 transform origin-left group-hover:scale-x-150 transition-transform duration-700 ease-out"></div>
                    <h4 className="text-white font-display text-3xl font-bold mb-3 shadow-sm tracking-wide">{project.title}</h4>
                    <p className="text-blue-100/90 text-sm opacity-0 -translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 font-medium tracking-wide">{project.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
              className="text-center mt-20"
            >
              <a href="https://www.instagram.com/winsa3byapi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-full transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-blue-500/30 hover:scale-105">
                Tüm Projelerimiz İçin Instagram&apos;ı Ziyaret Edin
              </a>
            </motion.div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-display text-4xl font-bold mb-4 text-slate-900">Diğer Uygulamalarımız</h2>
              <p className="text-slate-600 text-lg">Özel tasarım ayna, dekorasyon ve detay işçiliklerimiz.</p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
              {["/g1.jpg", "/g2.png", "/g3.jpg", "/g4.jpg", "/g5.jpg", "/g6.png", "/g7.jpg"].map((img, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                >
                  <img src={img} alt="Galeri Görseli" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
