"use client";
import {
  CodeBracketIcon,
  RectangleStackIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
  CommandLineIcon
} from "@heroicons/react/24/outline";

const skills = [
  { title: "Linguagens", icon: CodeBracketIcon, items: ["JavaScript", "TypeScript", "HTML", "CSS", "Python"] },
  { title: "Frameworks", icon: RectangleStackIcon, items: ["React", "Next.js", "TailwindCSS", "Node.js"] },
  { title: "Bancos", icon: CircleStackIcon, items: ["PostgreSQL", "MongoDB", "MySQL"] },
  { title: "Ferramentas", icon: WrenchScrewdriverIcon, items: ["Git", "Docker", "CI/CD", "Jest"] },
];

export default function Clientes() {
  const linguagens = [
    { nome: "JavaScript / TypeScript", exp: 90 },
    { nome: "HTML / CSS", exp: 95 },
    { nome: "Python", exp: 60 },
  ];
  const frameworks = [
    { nome: "React", exp: 90 },
    { nome: "Next.js", exp: 85 },
    { nome: "TailwindCSS", exp: 90 },
    { nome: "Node.js", exp: 70 },
  ];
  const bancos = [
    { nome: "PostgreSQL", exp: 70 },
    { nome: "MongoDB", exp: 65 },
    { nome: "MySQL", exp: 60 },
  ];
  return (
    <section id="clientes" className="py-16 section">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">Linguagens, Frameworks, Bancos e Ferramentas com níveis de experiência.</p>

      <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((group, idx) => (
          <div key={idx} className="tile">
            <div className="flex items-center gap-3 mb-4">
              <div className="icon-ring">
                {(() => {
                  const IconComponent = group.icon || CommandLineIcon;
                  return <IconComponent className="w-6 h-6 text-primary" />;
                })()}
              </div>
              <h4 className="text-lg font-semibold gradient-text">{group.title}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((name, i) => (
                <span key={i} className="badge">{name}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="container mt-10 grid md:grid-cols-3 gap-6">
        <div className="tile">
          <h4 className="text-lg font-semibold gradient-text mb-4">Linguagens</h4>
          {linguagens.map((item, i) => (
            <div key={i} className="mb-4">
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-white/80">{item.nome}</span>
                <span className="text-white/60">{item.exp}%</span>
              </div>
              <div className="skill-meter">
                <div className="skill-bar" style={{ width: `${item.exp}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="tile">
          <h4 className="text-lg font-semibold gradient-text mb-4">Frameworks</h4>
          {frameworks.map((item, i) => (
            <div key={i} className="mb-4">
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-white/80">{item.nome}</span>
                <span className="text-white/60">{item.exp}%</span>
              </div>
              <div className="skill-meter">
                <div className="skill-bar" style={{ width: `${item.exp}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="tile">
          <h4 className="text-lg font-semibold gradient-text mb-4">Bancos</h4>
          {bancos.map((item, i) => (
            <div key={i} className="mb-4">
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-white/80">{item.nome}</span>
                <span className="text-white/60">{item.exp}%</span>
              </div>
              <div className="skill-meter">
                <div className="skill-bar" style={{ width: `${item.exp}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
