"use client";

export default function Footer(){
  return (
    <footer className="py-12 mt-12 border-t border-white/6">
      <div className="container grid md:grid-cols-4 gap-6">
        <div>
          <h4 className="font-semibold text-lg gradient-text">Ramon Cerqueira</h4>
          <p className="text-textSoft text-sm mt-2">Desenvolvedor FrontEnd com foco em performance, acessibilidade e qualidade.</p>
          <div className="flex items-center gap-2 mt-3">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white/90"><path d="M12 2C6.477 2 2 6.477 2 12a10.002 10.002 0 006.839 9.487c.5.091.682-.217.682-.482 0-.237-.01-1.024-.014-1.857-2.782.605-3.369-1.193-3.369-1.193-.455-1.156-1.11-1.465-1.11-1.465-.908-.62.069-.607.069-.607 1.004.071 1.532 1.031 1.532 1.031.892 1.53 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.337-2.221-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.985 1.03-2.684-.104-.253-.447-1.272.098-2.65 0 0 .84-.269 2.75 1.024A9.564 9.564 0 0112 6.844c.85.004 1.706.115 2.503.337 1.909-1.293 2.748-1.024 2.748-1.024.547 1.378.204 2.397.1 2.65.64.699 1.029 1.593 1.029 2.684 0 3.842-2.338 4.687-4.566 4.935.36.31.68.92.68 1.856 0 1.339-.012 2.418-.012 2.746 0 .267.18.577.688.479A10.003 10.003 0 0022 12c0-5.523-4.477-10-10-10z"/></svg>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white/90"><path d="M4.983 3.5C4.983 4.881 3.88 6 2.5 6S0 4.881 0 3.5 1.103 1 2.483 1s2.5 1.119 2.5 2.5zM.5 8h4V23h-4V8zm7.5 0h3.834v2.043h.055c.534-1.013 1.838-2.081 3.783-2.081 4.048 0 4.795 2.666 4.795 6.132V23h-4v-6.667c0-1.59-.03-3.633-2.214-3.633-2.216 0-2.556 1.73-2.556 3.516V23h-4V8z"/></svg>
            </a>
            <a href="/cv/ramon-curriculo.pdf" download aria-label="Baixar Currículo" className="social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white/90"><path d="M12 3a1 1 0 011 1v8.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L11 12.586V4a1 1 0 011-1z"/><path d="M4 19a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z"/></svg>
            </a>
          </div>
        </div>
        <div>
          <h5 className="font-medium gradient-text">Mapa</h5>
          <ul className="mt-3 text-textSoft text-sm space-y-2">
            <li><a className="link-underline" href="#sobre">Sobre</a></li>
            <li><a className="link-underline" href="#produtos">Projetos</a></li>
            <li><a className="link-underline" href="#clientes">Skills</a></li>
            <li><a className="link-underline" href="#solucoes">Soluções</a></li>
            <li><a className="link-underline" href="#contato">Contato</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium gradient-text">Projetos</h5>
          <ul className="mt-3 text-textSoft text-sm space-y-2">
            <li className="badge">ERP</li>
            <li className="badge">E-commerce</li>
            <li className="badge">APIs</li>
            <li className="badge">LandingPages</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium gradient-text">Contato</h5>
          <p className="text-textSoft text-sm mt-2">ramonssa100@gmail.com</p>
          <p className="text-textSoft text-sm">(71) 98532-0042</p>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-white/40">© {new Date().getFullYear()} Ramon Cerqueira. Todos os direitos reservados.</div>
      <div className="mt-4 text-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="neon-cta"
          aria-label="Voltar ao topo"
        >
          Voltar ao topo
        </button>
      </div>
    </footer>
  )
}
