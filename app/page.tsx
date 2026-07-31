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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 bg-[url('/w5.jpg')] bg-cover bg-center bg-no-repeat"
          ></motion.div>
          {/* Deep Premium Gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-blue-900/80 backdrop-blur-sm"></div>
          
          <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl pt-32">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl text-blue-100 font-bold tracking-widest uppercase text-sm"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              Lüks ve Zarafet
            </motion.div>
            
            <motion.h1 
              initial="hidden" animate="visible" variants={fadeInUp}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 drop-shadow-2xl leading-[1.1]"
            >
              {siteData.heroTitle.split(' ').slice(0, -2).join(' ')} <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200">
                {siteData.heroTitle.split(' ').slice(-2).join(' ')}
              </span>
            </motion.h1>
            
            <motion.p 
              initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-blue-50/80 mb-12 max-w-3xl mx-auto font-light leading-relaxed tracking-wide"
            >
              {siteData.heroSubtitle}
            </motion.p>

            <motion.div 
              initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <a href="#koleksiyon" className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-[0_0_40px_rgb(37,99,235,0.4)] hover:shadow-[0_0_60px_rgb(37,99,235,0.6)] hover:scale-105 text-lg tracking-wide border border-blue-400/50">
                Koleksiyonu İnceleyin
              </a>
              <a href="#projeler" className="px-10 py-5 bg-transparent hover:bg-white/10 border-2 border-white/30 text-white font-bold rounded-full transition-all hover:scale-105 shadow-sm text-lg tracking-wide backdrop-blur-sm">
                Projelerimizi Görün
              </a>
            </motion.div>
          </div>
          
          {/* Decorative bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Features / Services Grid */}
        <section id="koleksiyon" className="py-24 bg-white relative">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-slate-900">Estetiğin Yeni Boyutu</h2>
              <p className="text-slate-600 text-lg leading-relaxed">{siteData.aboutText}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {siteData.services.map((service: any, i: number) => (
                <motion.div 
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.2 }}
                  className="group p-8 rounded-3xl bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgb(37,99,235,0.12)] hover:border-blue-100 transition-all duration-500 relative overflow-hidden"
                >
                  {/* Decorative Hover Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center mb-6 text-white group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="relative text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors z-10">{service.title}</h3>
                  <p className="relative text-slate-600 leading-relaxed z-10">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Showcase */}
        <section id="projeler" className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
            >
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-slate-900">Referans Projelerimiz</h2>
                <p className="text-slate-600 text-lg max-w-2xl">Modern mimariyi yansıtan, güvenli ve şık cam sistemleri uygulamalarımızdan bazıları.</p>
              </div>
            </motion.div>

            <div 
              className="grid grid-cols-1 md:grid-cols-4 gap-6"
            >
              {[
                { title: "Lüks Cam Balkon Sistemleri", desc: "Isıcamlı, katlanır ve sürme seriler ile dört mevsim konfor.", img: "/w1.jpg" },
                { title: "Kış Bahçesi Projeleri", desc: "Özel tasarım alüminyum profiller ve dayanıklı tavan camlarıyla kış bahçeleri.", img: "/w2.jpg" },
                { title: "Alüminyum Doğrama & Cephe", desc: "Modern binalar için yalıtımlı, estetik ve rüzgara dayanıklı dış cephe çözümleri.", img: "/w3.jpg" },
                { title: "Minimalist İç Mekan Camları", desc: "Ofis bölme sistemleri, dekoratif cam kapılar ve modern duşakabinler.", img: "/w4.jpg" }
              ].map((project, i) => (
                <motion.div 
                  variants={fadeInUp}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="group relative h-[320px] rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-3 transition-all duration-500"
                >
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mb-4 rounded-full group-hover:w-12 transition-all duration-500"></div>
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                    <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">{project.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
              className="text-center mt-20"
            >
              <a href="https://www.instagram.com/winsa3byapi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-blue-600 hover:to-cyan-500 text-white font-bold rounded-full transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-blue-500/30 hover:scale-105">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                Tüm Projelerimiz İçin Instagram&apos;ı Ziyaret Edin
              </a>
            </motion.div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section id="diger" className="py-24 bg-white">
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
