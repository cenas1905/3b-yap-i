"use client";

import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import siteData from "../data.json";

export default function Home() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-24">
        {/* Bright & Airy Hero Section (Split Layout) */}
        <section className="relative overflow-hidden bg-white py-16 lg:py-24">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Side */}
              <motion.div 
                initial="hidden" animate="visible" variants={staggerContainer}
                className="max-w-2xl"
              >
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-semibold tracking-wide text-sm">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  Winsa & Royal Glass Güvencesiyle
                </motion.div>
                
                <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.15]">
                  {siteData.heroTitle.split(' ').slice(0, -2).join(' ')} <br />
                  <span className="text-blue-600">
                    {siteData.heroTitle.split(' ').slice(-2).join(' ')}
                  </span>
                </motion.h1>
                
                <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
                  {siteData.heroSubtitle}
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
                  <a href="#koleksiyon" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1">
                    Hizmetlerimizi Keşfedin
                  </a>
                  <a href="#projeler" className="px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold rounded-xl transition-all hover:-translate-y-1 shadow-sm">
                    Projelerimizi Görün
                  </a>
                </motion.div>
              </motion.div>

              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block h-[600px] rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/10"
              >
                <img src="/w5.jpg" alt="3B Yapı Projesi" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Clean Services Grid */}
        <section id="koleksiyon" className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-slate-900">Kurumsal Çözümlerimiz</h2>
              <p className="text-slate-600 text-lg leading-relaxed">{siteData.aboutText}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {siteData.services.map((service: any, i: number) => (
                <motion.div 
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.15 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 Projects Section (Perfect Aspect Ratio & Hover) */}
        <section id="projeler" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
            >
              <div>
                <h2 className="font-display text-4xl font-bold mb-4 text-slate-900">Örnek Projelerimiz</h2>
                <p className="text-slate-500 text-lg max-w-2xl">Winsa ve Royal Glass kalitesini yansıtan elit uygulamalarımız.</p>
              </div>
            </motion.div>

            {/* Specifically designed 4-column elegant grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {[
                { title: "Lüks Cam Balkon", desc: "Dört mevsim konfor.", img: "/w1.jpg" },
                { title: "Kış Bahçesi", desc: "Özel tasarım alüminyum.", img: "/w2.jpg" },
                { title: "Dış Cephe", desc: "Rüzgara dayanıklı sistemler.", img: "/w3.jpg" },
                { title: "Ofis Bölme", desc: "Minimalist iç mekan.", img: "/w4.jpg" }
              ].map((project, i) => (
                <motion.div 
                  variants={fadeInUp}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="group rounded-2xl overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
                  </div>
                  <div className="p-5 bg-white border border-t-0 border-slate-100 rounded-b-2xl group-hover:bg-blue-50 transition-colors duration-300">
                    <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">{project.title}</h3>
                    <p className="text-slate-500 text-sm">{project.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="text-center mt-16"
            >
              <a href="https://www.instagram.com/winsa3byapi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-md hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                Instagram'da Bizi Takip Edin
              </a>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="diger" className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-display text-3xl font-bold mb-4 text-slate-900">Diğer Çalışmalarımız</h2>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {["/g1.jpg", "/g2.png", "/g3.jpg", "/g4.jpg", "/g5.jpg", "/g6.png", "/g7.jpg"].map((img, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <img src={img} alt="Galeri Görseli" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
