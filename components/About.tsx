"use client";
import { BriefcaseIcon, UserGroupIcon, CalendarIcon, CpuChipIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Projetos entregues", value: "5+", icon: BriefcaseIcon },
  { label: "Clientes atendidos", value: "3+", icon: UserGroupIcon },
  { label: "Anos de experiência", value: "2+", icon: CalendarIcon },
  { label: "Stack principal", value: "5+ Next.js", icon: CpuChipIcon },
];

const timeline = [
  { title: "Início", desc: "Primeiros freelas e estudos intensivos." },
  { title: "Produtos", desc: "Soluções web e integrações para empresas." },
  { title: "Especialização", desc: "Front-end performático e acessível." },
];

export default function About() {
  function StatNumber({ value }: { value: string }) {
    const [n, setN] = useState(0);
    const target = parseInt(value.replace(/\D/g, ""), 10) || 0;
    const suffix = value.replace(/[0-9]/g, "");
    const ref = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
      let raf = 0;
      const start = performance.now();
      const duration = 1200;
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / duration);
        setN(Math.round(target * p));
        raf = requestAnimationFrame(tick);
        if (p >= 1) cancelAnimationFrame(raf);
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, [target]);
    return <div ref={ref} className="stat-number">{n}{suffix}</div>;
  }
  return (
    <section id="sobre" className="py-16 section">
      <div className="container">
        <h2 className="section-title">Sobre</h2>
        <p className="section-subtitle">Resumo profissional com números e etapas chave.</p>
      </div>
      <div className="container grid md:grid-cols-4 gap-6 mb-10">
        {stats.map((s, i) => (
          <div key={i} className="tile flex items-center gap-3">
            <div className="icon-ring">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <StatNumber value={s.value} />
              <div className="text-white/70 text-sm">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="container grid md:grid-cols-3 gap-6">
        {timeline.map((t, i) => (
          <div key={i} className="tile">
            <h4 className="text-lg font-semibold gradient-text mb-2">{t.title}</h4>
            <p className="text-textSoft">{t.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
