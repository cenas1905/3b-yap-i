import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import CanonicalTag from "@/components/CanonicalTag";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.3b-yapi.com.tr"),
  title: "3B Yapı - Profesyonel Cam ve Alüminyum Sistemleri",
  description: "Winsa ve Royal Glass güvencesiyle cam balkon, alüminyum ve mimari cam sistemleri. 3B Yapı ile modern mekanlar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-500/30">
        <CanonicalTag />
        {children}
      </body>
    </html>
  );
}
