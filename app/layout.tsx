import type { Metadata, Viewport } from "next";
import { Amiri, Noto_Nastaliq_Urdu, Playfair_Display, Poppins } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-serif" });
const amiri = Amiri({ subsets: ["arabic"], weight: ["400", "700"], variable: "--font-arabic" });
const nastaliq = Noto_Nastaliq_Urdu({ subsets: ["arabic"], weight: ["400", "600", "700"], variable: "--font-urdu" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Noor Al-Quran Online Academy | Learn Quran Online from Home",
  description:
    "Learn Quran online from qualified teachers — Nazra with Tajweed, Hifz, Tajweed classes, Basic Islamic Studies and special female classes. One-to-one live classes for all ages, worldwide.",
  keywords: [
    "online Quran classes",
    "learn Quran online",
    "Quran Hifz online",
    "Tajweed classes",
    "female Quran teacher",
    "Noor Al-Quran",
    "قرآن آن لائن",
  ],
  openGraph: {
    title: "Noor Al-Quran Online Academy",
    description: "Learn • Recite • Understand • Live — Quran classes from the comfort of your home.",
    images: ["/banner.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b4a2e",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable} ${amiri.variable} ${nastaliq.variable}`}>
      <body>{children}</body>
    </html>
  );
}
