"use client";

import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const mv = useMotionValue(0);

  useEffect(() => {
    const onScroll = () => mv.set(window.scrollY || 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mv]);

  const y = useTransform(mv, [0, 400], [0, -50]);
  const slides = [
    "/images/fotoHero/ramon1.png",
    "/images/fotoHero/ramon2.png",
    "/images/fotoHero/ramon3.png",
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % slides.length), 4500);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden bg-[#050b18] rounded-2xl">
      <div className="grid-overlay z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-transparent backdrop-blur-xl z-0 rounded-b-md" />
      <div className="absolute -top-54 -left-14 w-72 h-72 rounded-full bg-cyan-500/25 blur-xl animate-blob" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-600/25 blur-xl animate-blob animation-delay-2000" />

      <div className="container relative z-10 min-h-[80vh] grid md:grid-cols-2 gap-8 items-center px-4">
        {/* Bloco de texto */}
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5"
          >
            <Image src="/images/rc_logo.png" alt="Ramon Cerqueira" width={56} height={56} />
          </motion.div>

          <motion.h1
            style={{ y }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-3 gradient-text gradient-animated"
          >
            Desenvolvedor Frontend
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-base md:text-lg text-white/80 max-w-xl mb-6"
          >
            Interfaces modernas, integrações e automações com foco em performance, acessibilidade e qualidade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            <span className="badge">Next.js</span>
            <span className="badge">React</span>
            <span className="badge">Tailwind</span>
            <span className="badge">Node.js</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#produtos" className="neon-cta primary">Conhecer Projetos</a>
            <a href="#contato" className="neon-cta">Solicitar Orçamento</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-6"
          >
            <div className="text-white/60 text-sm mb-3"></div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="logo-badge"><Image src="/python.svg" alt="Logo 1" width={40} height={40} className="object-contain" /></div>
              <div className="logo-badge"><Image src="/TypeScript.svg" alt="Logo 2" width={40} height={40} className="object-contain" /></div>
              <div className="logo-badge"><Image src="/TailwindCSS.svg" alt="Logo 3" width={40} height={40} className="object-contain" /></div>
              <div className="logo-badge"><Image src="/PostgresSQL.svg" alt="Logo 4" width={40} height={40} className="object-contain" /></div>
              <div className="logo-badge"><Image src="/Node.js.svg" alt="Logo 4" width={40} height={40} className="object-contain" /></div>
            </div>
          </motion.div>
        </div>

        {/* Visual da hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden h-[320px] md:h-[420px] glass border-white/10"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[idx]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={slides[idx]}
                alt="Foto Hero"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-100"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
