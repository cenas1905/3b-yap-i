"use client";
import { useState, useEffect } from "react";
import initialData from "../../data.json";

export default function AdminPanel() {
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSave = async () => {
    setLoading(true);
    setMessage("Kaydediliyor...");
    try {
      // 1. Get latest SHA from GitHub
      const fileRes = await fetch("https://api.github.com/repos/cenas1905/3b-yap-i/contents/data.json");
      const fileData = await fileRes.json();
      
      // 2. Save via our API
      const res = await fetch("/api/update-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: data,
          sha: fileData.sha,
          password
        }),
      });
      
      const result = await res.json();
      if (res.ok) {
        setMessage("Başarıyla kaydedildi! Siteniz birkaç dakika içinde güncellenecek.");
      } else {
        setMessage("Hata: " + result.error);
        if (result.error === "Geçersiz şifre!") setIsLoggedIn(false);
      }
    } catch (err: any) {
      setMessage("Bir hata oluştu: " + err.message);
    }
    setLoading(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
        <div className="bg-white p-8 rounded-2xl w-full max-w-md border border-slate-200 shadow-xl">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-display font-bold text-3xl shadow-md">3B</div>
          </div>
          <h1 className="text-2xl text-slate-900 font-bold text-center mb-6">Yönetim Paneli</h1>
          <input
            type="password"
            placeholder="Şifre"
            className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 mb-4 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && setIsLoggedIn(true)}
          />
          <button
            onClick={() => setIsLoggedIn(true)}
            className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            Giriş Yap
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 text-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-display font-bold">İçerik Yönetimi</h1>
          <button 
            onClick={handleSave} 
            disabled={loading}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white font-bold rounded-xl transition-all shadow-sm"
          >
            {loading ? "Kaydediliyor..." : "Değişiklikleri Kaydet (Siteyi Güncelle)"}
          </button>
        </div>
        
        {message && (
          <div className={`p-4 rounded-xl mb-8 border ${message.includes('Hata') ? 'bg-red-50 border-red-200 text-red-600' : 'bg-green-50 border-green-200 text-green-600'}`}>
            {message}
          </div>
        )}

        <div className="space-y-8">
          {/* Hero Section Edit */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-amber-500">Ana Sayfa Başlıkları</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-500 mb-2 font-bold">Büyük Başlık</label>
                <input 
                  type="text" 
                  value={data.heroTitle}
                  onChange={(e) => setData({...data, heroTitle: e.target.value})}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-500 mb-2 font-bold">Alt Başlık (Açıklama)</label>
                <textarea 
                  value={data.heroSubtitle}
                  onChange={(e) => setData({...data, heroSubtitle: e.target.value})}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 h-24"
                />
              </div>
            </div>
          </div>

          {/* Services Edit */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-amber-500">Hizmetlerimiz</h2>
            <div className="space-y-6">
              {data.services.map((service, index) => (
                <div key={index} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <input 
                    type="text" 
                    value={service.title}
                    onChange={(e) => {
                      const newServices = [...data.services];
                      newServices[index].title = e.target.value;
                      setData({...data, services: newServices});
                    }}
                    className="w-full p-2 mb-3 rounded-lg bg-transparent border-b border-slate-300 text-slate-900 font-bold focus:outline-none focus:border-amber-500"
                  />
                  <textarea 
                    value={service.desc}
                    onChange={(e) => {
                      const newServices = [...data.services];
                      newServices[index].desc = e.target.value;
                      setData({...data, services: newServices});
                    }}
                    className="w-full p-2 rounded-lg bg-transparent border border-slate-200 text-slate-600 focus:outline-none focus:border-amber-500 h-20"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
