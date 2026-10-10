import { Cormorant_Garamond, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Apian Studio — Küçük İşletmeler İçin Yapay Zekâ Çözümleri",
  description:
    "Apian Studio; siteye gömülü AI asistanlar, n8n süreç otomasyonları ve AI destekli web siteleri ile küçük ve orta ölçekli işletmelerin işini büyütür.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-void text-muted-steel font-sans antialiased overflow-x-hidden">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
