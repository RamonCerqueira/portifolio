"use client";
import Link from 'next/link'
import { motion } from 'framer-motion'
// import ThemeToggle from './ThemeToggle'
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Navbar(){
  const [active, setActive] = useState<string>('');
  useEffect(() => {
    const ids = ['sobre', 'produtos', 'solucoes', 'clientes', 'contato'];
    const elements = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1));
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed w-full top-0 left-0 z-50 bg-surface/70 backdrop-blur-md border-b border-white/6"
    >
      <div className="container flex items-center justify-between h-16 relative">
        <Link href="/" className="flex items-center gap-3">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold"
          >
                  <Image
                  src={'/images/rc_logo.png'}
                  alt='Logomarca RC'
                  width={'50'}
                  height={'70'}
                  className=''
                  />
          </motion.div>
          <span className="font-extrabold text-lg gradient-text">Ramon Cerqueira</span>
        </Link>

        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#sobre" aria-current={active === 'sobre' ? 'page' : undefined} className={`link-underline ${active === 'sobre' ? 'link-active' : ''}`}>Sobre</a>
          <a href="#produtos" aria-current={active === 'produtos' ? 'page' : undefined} className={`link-underline ${active === 'produtos' ? 'link-active' : ''}`}>Projetos</a>
          <a href="#clientes" aria-current={active === 'clientes' ? 'page' : undefined} className={`link-underline ${active === 'clientes' ? 'link-active' : ''}`}>Skills</a>
          <a href="#solucoes" aria-current={active === 'solucoes' ? 'page' : undefined} className={`link-underline ${active === 'solucoes' ? 'link-active' : ''}`}>Soluções</a>
          <a href="#contato" aria-current={active === 'contato' ? 'page' : undefined} className={`link-underline ${active === 'contato' ? 'link-active' : ''}`}>Contato</a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <a href="https://github.com/RamonCerqueira/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white/90">
                <path d="M12 2C6.477 2 2 6.477 2 12a10.002 10.002 0 006.839 9.487c.5.091.682-.217.682-.482 0-.237-.01-1.024-.014-1.857-2.782.605-3.369-1.193-3.369-1.193-.455-1.156-1.11-1.465-1.11-1.465-.908-.62.069-.607.069-.607 1.004.071 1.532 1.031 1.532 1.031.892 1.53 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.337-2.221-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.985 1.03-2.684-.104-.253-.447-1.272.098-2.65 0 0 .84-.269 2.75 1.024A9.564 9.564 0 0112 6.844c.85.004 1.706.115 2.503.337 1.909-1.293 2.748-1.024 2.748-1.024.547 1.378.204 2.397.1 2.65.64.699 1.029 1.593 1.029 2.684 0 3.842-2.338 4.687-4.566 4.935.36.31.68.92.68 1.856 0 1.339-.012 2.418-.012 2.746 0 .267.18.577.688.479A10.003 10.003 0 0022 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/ramon-cerqueira-95b46724/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white/90">
                <path d="M4.983 3.5C4.983 4.881 3.88 6 2.5 6S0 4.881 0 3.5 1.103 1 2.483 1s2.5 1.119 2.5 2.5zM.5 8h4V23h-4V8zm7.5 0h3.834v2.043h.055c.534-1.013 1.838-2.081 3.783-2.081 4.048 0 4.795 2.666 4.795 6.132V23h-4v-6.667c0-1.59-.03-3.633-2.214-3.633-2.216 0-2.556 1.73-2.556 3.516V23h-4V8z"/>
              </svg>
            </a>
            <a href="/cv/ramon-curriculo.pdf" download aria-label="Baixar Currículo" className="social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white/90">
                <path d="M12 3a1 1 0 011 1v8.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L11 12.586V4a1 1 0 011-1z"/><path d="M4 19a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z"/>
              </svg>
            </a>
          </div>
          {/* <ThemeToggle /> */}
          <a href="#contato" className="social-button p-2 font-medium">Contato</a>
        </div>
        <div className="neon-divider" />
      </div>
    </motion.header>
  )
}
