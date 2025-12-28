"use client";
import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function ContactForm(){
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [subject, setSubject] = useState('Solicitação de Desenvolvimento')
  const serviceOptions = ['Website', 'Landing Page', 'E-commerce', 'Sistema ERP', 'API/Integração', 'Aplicativo Mobile', 'Consultoria'];
  const [services, setServices] = useState<string[]>([]);
  const goalOptions = ['Conversão', 'Vitrine', 'Suporte', 'Automação', 'Integração', 'Relatórios'];
  const [goals, setGoals] = useState<string[]>([]);
  const [timeline, setTimeline] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [references, setReferences] = useState('')
  const [contactPref, setContactPref] = useState<'Email'|'WhatsApp'|'Ligação'>('Email')
  const [availability, setAvailability] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const msgLimit = 2000
  const [toast, setToast] = useState(false)
  const nameRef = useRef<HTMLInputElement | null>(null)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])
  const progress = useMemo(() => {
    const total = 4
    let done = 0
    if (name) done++
    if (email) done++
    if (services.length) done++
    if (msg) done++
    return Math.round((done / total) * 100)
  }, [name, email, services, msg])
  useEffect(() => {
    if (open) {
      setTimeout(() => nameRef.current?.focus(), 200)
    }
  }, [open])

  const toggleChip = (list: string[], setList: (v: string[]) => void, value: string) => {
    if (list.includes(value)) setList(list.filter(i => i !== value))
    else setList([...list, value])
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      if (!services.length) {
        throw new Error('Selecione ao menos um serviço desejado.')
      }
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message: msg,
          subject,
          services,
          goals,
          timeline,
          company,
          phone,
          references,
          contactPref,
          availability,
        })
      })
      if (!res.ok) throw new Error('Erro no envio')
      setSent(true)
      setName(''); setEmail(''); setMsg('');
      setSubject('Solicitação de Desenvolvimento');
      setServices([]);
      setGoals([]);
      setTimeline('');
      setCompany('');
      setPhone('');
      setReferences('');
      setContactPref('Email');
      setAvailability('');
      setToast(true)
      setOpen(false)
      setTimeout(() => setToast(false), 3000)
    } catch (err:any) {
      setError(err?.message || 'Falha ao enviar. Tente novamente mais tarde.')
    } finally {
      setLoading(false)
    }
  }

  return (
<div className="max-w-4xl mx-auto">
  {/* Preview sempre visível */}
  {!open && (
    <div className="tile">
      <h4 className="text-xl font-semibold gradient-text mb-2">Vamos conversar sobre seu projeto</h4>
      <p className="text-textSoft mb-4">Conte rapidamente o que precisa. Respondo em até 24–48h úteis.</p>
      <div className="flex items-center gap-3">
        <button className="neon-cta primary" onClick={() => setOpen(true)} type="button">Abrir formulário</button>
        <a href="mailto:ramonssa100@gmail.com" className="neon-cta">Enviar email</a>
      </div>
    </div>
  )}
  {/* Form animado somente quando aberto */}
  <AnimatePresence>
    {open && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="tile overflow-hidden"
    >
  <form onSubmit={handleSubmit} className="grid gap-6">
    <div className="w-full h-2 bg-white/10 rounded">
      <div className="h-2 rounded bg-primary" style={{ width: `${progress}%` }} />
    </div>
    <div>
      <h4 className="text-xl font-semibold gradient-text mb-3">Dados de contato</h4>
      <div className="grid md:grid-cols-2 gap-4">
        <label className="grid gap-1">
          <span className="text-white/70 text-sm">Nome</span>
          <input ref={nameRef} required className="p-3 rounded-lg bg-white/90 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" value={name} onChange={e => setName(e.target.value)} placeholder="Seu nome completo" />
        </label>
        <label className="grid gap-1">
          <span className="text-white/70 text-sm">Email</span>
          <input required type="email" className="p-3 rounded-lg bg-white/90 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" value={email} onChange={e => setEmail(e.target.value)} placeholder="seuemail@exemplo.com" />
        </label>
        <label className="grid gap-1">
          <span className="text-white/70 text-sm">Empresa (opcional)</span>
          <input className="p-3 rounded-lg bg-white/90 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" value={company} onChange={e => setCompany(e.target.value)} placeholder="Nome da empresa" />
        </label>
        <label className="grid gap-1">
          <span className="text-white/70 text-sm">Telefone (opcional)</span>
          <input className="p-3 rounded-lg bg-white/90 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" value={phone} onChange={e => setPhone(e.target.value)} placeholder="(xx) xxxxx-xxxx" />
        </label>
      </div>
    </div>

    <div>
      <h4 className="text-xl font-semibold gradient-text mb-3">Projeto</h4>
      <div className="grid md:grid-cols-2 gap-4">
        <label className="grid gap-1 md:col-span-2">
          <span className="text-white/70 text-sm">Assunto</span>
          <input className="p-3 rounded-lg bg-white/90 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" value={subject} onChange={e => setSubject(e.target.value)} placeholder="Ex.: Desenvolvimento de website institucional" />
        </label>
        <div className="md:col-span-2">
          <span className="text-white/70 text-sm">Serviços desejados</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {serviceOptions.map((opt) => (
              <button
                type="button"
                key={opt}
                onClick={() => toggleChip(services, setServices, opt)}
                className={`badge ${services.includes(opt) ? 'border-cyan-400 text-white' : ''}`}
                aria-pressed={services.includes(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
          <p className="text-white/50 text-xs mt-2">Selecione pelo menos um serviço.</p>
        </div>
        <div className="md:col-span-2">
          <span className="text-white/70 text-sm">Objetivos do projeto (opcional)</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {goalOptions.map((opt) => (
              <button
                type="button"
                key={opt}
                onClick={() => toggleChip(goals, setGoals, opt)}
                className={`badge ${goals.includes(opt) ? 'border-cyan-400 text-white' : ''}`}
                aria-pressed={goals.includes(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
        <label className="grid gap-1">
          <span className="text-white/70 text-sm">Prazo desejado (opcional)</span>
          <input className="p-3 rounded-lg bg-white/90 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" value={timeline} onChange={e => setTimeline(e.target.value)} placeholder="Ex.: início em 15 dias, entrega em 60 dias" />
        </label>
        <label className="grid gap-1">
          <span className="text-white/70 text-sm">Links de referência (opcional)</span>
          <input className="p-3 rounded-lg bg-white/90 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" value={references} onChange={e => setReferences(e.target.value)} placeholder="Ex.: https://site1.com, https://site2.com" />
        </label>
        <label className="grid gap-1 md:col-span-2">
          <span className="text-white/70 text-sm">Descrição</span>
          <textarea
            required
            maxLength={msgLimit}
            className="p-3 rounded-lg bg-white/90 text-black h-40 placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            value={msg}
            onChange={e => setMsg(e.target.value)}
            placeholder="Fale sobre escopo, páginas/funcionalidades, integrações, requisitos técnicos..."
          />
          <span className="text-white/50 text-xs">{msg.length}/{msgLimit}</span>
        </label>
      </div>
    </div>

    <div>
      <h4 className="text-xl font-semibold gradient-text mb-3">Preferências</h4>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2">
            <input type="radio" name="contactPref" checked={contactPref === 'Email'} onChange={() => setContactPref('Email')} />
            <span>Email</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="contactPref" checked={contactPref === 'WhatsApp'} onChange={() => setContactPref('WhatsApp')} />
            <span>WhatsApp</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="contactPref" checked={contactPref === 'Ligação'} onChange={() => setContactPref('Ligação')} />
            <span>Ligação</span>
          </label>
        </div>
        <label className="grid gap-1">
          <span className="text-white/70 text-sm">Disponibilidade de reunião (opcional)</span>
          <input className="p-3 rounded-lg bg-white/90 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" value={availability} onChange={e => setAvailability(e.target.value)} placeholder="Ex.: tardes úteis, 14h–18h" />
        </label>
      </div>
    </div>

    <div className="flex flex-col items-center gap-2">
      {error && <p className="text-center text-red-400">{error}</p>}
      <button disabled={loading} className="neon-cta primary">
        {loading ? 'Enviando...' : 'Enviar'}
      </button>
      <button type="button" className="neon-cta" onClick={() => setOpen(false)}>Fechar</button>
      {sent && <p className="text-center text-green-400">Mensagem enviada — responderemos em breve.</p>}
    </div>
  </form>
    </motion.div>
    )}
  </AnimatePresence>
  <AnimatePresence>
    {toast && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.25 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg bg-white text-black shadow-lg"
      >
        Enviado com sucesso — retorno em até 48h úteis.
      </motion.div>
    )}
  </AnimatePresence>
</div>
  )
}
