import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const sans = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["200", "400", "600"],
  variable: "--font-sans",
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
    <html lang="tr" className={sans.variable}>
      <body className="bg-void text-bone font-sans antialiased overflow-x-hidden">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
