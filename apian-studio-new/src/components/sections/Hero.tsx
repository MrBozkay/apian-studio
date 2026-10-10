"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";

const ConstellationScene = dynamic(
  () => import("@/components/3d/ConstellationScene"),
  { ssr: false }
);

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
    <section className="relative overflow-hidden bg-void">
      <div className="dala-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 pt-36 pb-24 lg:pt-44 lg:pb-32">
        <div className="relative z-10">
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="dala-eyebrow mb-6"
          >
            AI Çözümler Atölyesi
          </motion.span>
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="dala-heading-lg mb-6"
          >
            İşletmeniz için çalışan yapay zekâ
          </motion.h1>
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-body text-bone max-w-[480px] mb-10"
          >
            Siteye gömülü AI asistanlar, süreç otomasyonları ve AI destekli web
            siteleri. Tekrarlayan işi otomasyona devredin — siz büyümeye odaklanın.
          </motion.p>
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-8"
          >
            <a href="#iletisim" className="dala-pill">
              Ücretsiz Keşif
            </a>
            <a href="#hizmetler" className="dala-ghost text-body font-light">
              Hizmetleri gör
            </a>
          </motion.div>
        </div>
        <div className="relative h-[420px] lg:h-[560px]">
          <ConstellationScene />
        </div>
      </div>
    </section>
  );
}
