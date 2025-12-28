"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const BLUR = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxyZWN0IHdpZHRoPScxJyBoZWlnaHQ9JzEnIGZpbGw9JyMwMDEyMjYnIC8+PC9zdmc+";
import React from "react";

const projetos = [
  {
    title: "Clínica Médica",
    text: "Sistema de gestão para clínicas com agendamento e prontuário.",
    img: "/images/projetos/ClinicaMedica.jpg",
    link: "https://clinica-medica-indol.vercel.app/",
    techs: ["Next.js", "React", "Tailwind"],
    highlights: ["Agendamentos", "Prontuário eletrônico", "Relatórios"]
  },
  {
    title: "Cursos",
    text: "Plataforma de cursos com catálogo e área do aluno.",
    img: "/images/projetos/Cursos.jpg",
    link: "https://learning-softtech.vercel.app/",
    techs: ["React", "Node.js", "PostgreSQL"],
    highlights: ["Catálogo de cursos", "Área do aluno", "Pagamentos"]
  },
  {
    title: "Help Tech",
    text: "Suporte técnico com abertura de chamados e SLA.",
    img: "/images/projetos/HelpTech.jpg",
    link: "https://buscador-tecnico.vercel.app/",
    techs: ["Next.js", "MongoDB"],
    highlights: ["Chamados", "SLA", "Painéis de suporte"]
  },
  {
    title: "Farmácia Viva",
    text: "Gestão de estoque e rastreabilidade para fitoterápicos.",
    img: "/images/projetos/farmaciaViva.jpg",
    link: "https://vercel.com/",
    techs: ["React", "MySQL"],
    highlights: ["Rastreabilidade", "Estoque", "Boas práticas"]
  },
  {
    title: "Fono",
    text: "Aplicativo de acompanhamento fonoaudiológico.",
    img: "/images/projetos/fono.jpg",
    link: "https://farmaciavivasalvador.vercel.app/",
    techs: ["React Native"],
    highlights: ["Exercícios", "Acompanhamento", "Agenda"]
  },
  {
    title: "RFID",
    text: "Controle de acesso e inventário com RFID.",
    img: "/images/projetos/rfid.jpg",
    link: "https://rfid-two.vercel.app/",
    techs: ["Node.js", "RFID"],
    highlights: ["Inventário", "Acesso", "Logs"]
  },
  // {
  //   title: "Soft CheckList",
  //   text: "Checklists operacionais com auditoria e relatórios.",
  //   img: "/images/projetos/softCheckList.jpg",
  //   link: "https://vercel.com/",
  //   techs: ["Next.js", "Tailwind", "PostgreSQL"],
  //   highlights: ["Checklists", "Auditoria", "Relatórios"]
  // },
];

export default function Produtos() {
  const [zoomSrc, setZoomSrc] = useState<string | null>(null);
  useEffect(() => {
    if (zoomSrc) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [zoomSrc]);
  return (
    <section id="produtos" className="py-20">
      <h2 className="section-title">Projetos</h2>

      <p className="section-subtitle">
        Portfólio com alguns projetos e soluções desenvolvidas.
      </p>

      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projetos.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -6, rotate: 0.3 }}
            className="tile"
          >
            <button
              type="button"
              aria-label={`Ampliar imagem do projeto ${item.title}`}
              className="block w-full relative overflow-hidden rounded-xl mb-4 h-40 cursor-zoom-in"
              onClick={() => setZoomSrc(item.img)}
              onKeyDown={(e) => { if (e.key === 'Enter') setZoomSrc(item.img) }}
              style={{ padding: 0, background: 'transparent', border: 'none' }}
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover opacity-100"
                priority={idx < 3}
              />
            </button>

            <h3 className="text-xl font-bold gradient-text gradient-animated mb-3">
              {item.title}
            </h3>

            <p className="text-textSoft leading-relaxed mb-4">
              {item.text}
            </p>
            {item.techs && (
              <div className="flex flex-wrap gap-2 mb-4">
                {item.techs.map((t, i) => (
                  <span key={i} className="badge">{t}</span>
                ))}
              </div>
            )}
            {item.highlights && (
              <ul className="text-white/70 text-sm mb-4 list-disc pl-5">
                {item.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}

            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-cta"
            >
              Saiba mais
            </a>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {zoomSrc && (
          <motion.div
            key="zoom-overlay"
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomSrc(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Visualização ampliada do projeto"
            onKeyDown={(e) => { if (e.key === 'Escape') setZoomSrc(null) }}
          >
            <motion.div
              className="relative mx-auto mt-12 w-[92vw] max-w-4xl h-[70vh] cursor-zoom-out"
              initial={{ scale: 0.98, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.98, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Image
                src={zoomSrc}
                alt="Zoom do projeto"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 70vw"
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
