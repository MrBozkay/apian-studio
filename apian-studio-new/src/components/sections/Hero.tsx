"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";

const HoneycombScene = dynamic(
  () => import("@/components/3d/HoneycombScene"),
  { ssr: false }
);

const stats = [
  { value: "8+", label: "yıl production mühendislik" },
  { value: "2–4", label: "haftada teslim" },
  { value: "%100", label: "kod & veri sahipliği sizde" },
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: prefersReducedMotion ? 0 : 0.08 * i,
        duration: 0.8,
        ease: [0.22, 0.8, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-void">
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <HoneycombScene />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_45%_at_50%_0%,rgba(224,224,224,0.05),transparent_65%)]" />
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-24 space-y-8 awe-container">
        <motion.span
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 font-mono text-utility-nav uppercase text-faint"
        >
          Apian Studio · AI Çözümler Atölyesi
        </motion.span>
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="awe-display"
        >
          İşletmeniz için çalışan yapay zekâ kovanı
        </motion.h1>
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-xl text-body text-muted-steel"
        >
          Siteye gömülü AI asistanlar, süreç otomasyonları ve AI destekli web siteleri.
          Küçük işletmelerin tekrarlayan işini arılarımıza devredin — siz bal hasadına odaklanın.
        </motion.p>
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-2 justify-center"
        >
          <a href="#hizmetler" className="awe-pill">
            Hizmetler <span className="text-faint">(01)</span>
          </a>
          <a href="#paketler" className="awe-pill">
            Paketler <span className="text-faint">(02)</span>
          </a>
          <a href="#iletisim" className="awe-underline-control mt-3">
            Keşif görüşmesi için yazın
          </a>
        </motion.div>
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-2 justify-center pt-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="awe-compact-card px-5 py-4 text-center min-w-[160px]">
              <b className="block font-sans text-feature-heading text-porcelain">{stat.value}</b>
              <span className="text-muted-steel text-[0.85rem]">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
