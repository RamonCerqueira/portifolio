"use client";
import { ShieldCheckIcon, ChartBarIcon, RocketLaunchIcon, DevicePhoneMobileIcon, SparklesIcon, StarIcon } from "@heroicons/react/24/outline";

const features = [
  { title: 'Segurança Corporativa', desc: 'Criptografia, roles, auditoria e testes.', icon: ShieldCheckIcon },
  { title: 'Escalabilidade', desc: 'Arquitetura preparada para alto volume.', icon: ChartBarIcon },
  { title: 'Entrega Contínua', desc: 'Pipelines e deploys automatizados.', icon: RocketLaunchIcon },
  { title: 'Layouts Responsivos', desc: 'Compatíveis com todos os tamanhos de tela.', icon: DevicePhoneMobileIcon },
  { title: 'Harmonia Visual', desc: 'Cores e tipografia alinhadas para melhor UX.', icon: SparklesIcon },
  { title: 'Performance & Acessibilidade', desc:'Carregamento otimizado e interfaces acessíveis para todos os usuários.', icon: StarIcon}
]

export default function Features(){
  return (
    <section id="solucoes" className="py-16 section">
      <div className="container">
        <h2 className="section-title">Soluções</h2>
        <p className="section-subtitle">Arquitetura, segurança e práticas que elevam seus projetos.</p>
      </div>
      <div className="container grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div key={i} className="tile">
            <div className="flex items-center gap-3 mb-2">
              <div className="icon-ring">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold gradient-text">{f.title}</h4>
            </div>
            <p className="text-textSoft">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
