import { useState } from 'react'
import { Star } from 'lucide-react'
import { site, waLink } from '../../data/content'

const serviceOptions = [
  'Instalação de Split',
  'Manutenção Preventiva',
  'Higienização Completa',
  'Reparo / Diagnóstico',
  'Contrato Comercial (PMOC)',
]

type FormState = {
  name: string
  email: string
  phone: string
  zip: string
  service: string
}

const initial: FormState = { name: '', email: '', phone: '', zip: '', service: '' }

export default function Hero() {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const set = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [key]: e.target.value })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs: Partial<FormState> = {}
    if (!form.name.trim()) errs.name = 'Informe seu nome'
    if (!form.phone.trim()) errs.phone = 'Informe seu telefone'
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'E-mail inválido'
    if (!form.service) errs.service = 'Escolha o serviço'
    setErrors(errs)
    if (Object.keys(errs).length) return

    const msg = `Olá! Meu nome é ${form.name}. Quero agendar: ${form.service}. Telefone: ${form.phone}${form.zip ? ` · CEP: ${form.zip}` : ''}`
    window.open(waLink(msg), '_blank', 'noopener')
    setForm(initial)
  }

  const inputCls = (err?: string) =>
    `h-12 w-full rounded-md border bg-white px-4 font-body text-base text-tinta-900 outline-none transition-shadow placeholder:text-tinta-500 focus:ring-2 focus:ring-brand-vivid ${
      err ? 'border-alerta' : 'border-gray-200'
    }`

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Banner */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=70"
          alt="Técnico realizando manutenção em ar-condicionado"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-dark/60 to-brand-dark/30" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[1.1fr_1fr] lg:px-8 lg:py-24">
        {/* Texto */}
        <div className="flex flex-col justify-center text-white">
          <p className="font-heading text-[13px] font-bold uppercase tracking-[0.08em] text-brand-nuvem">
            Instalação · Manutenção · Reparo
          </p>
          <h1 className="mt-3 font-heading text-4xl font-extrabold leading-[1.1] tracking-[-0.02em] md:text-5xl lg:text-[56px]">
            Preço fechado: você paga pelo serviço, não pela hora
          </h1>
          <p className="mt-5 max-w-xl font-body text-lg leading-relaxed text-white/90">
            Na {site.name}, climatizar sua casa ou empresa é simples: orçamento
            transparente, técnicos uniformizados e garantia escrita em todos os
            serviços. Atendemos {site.address} e região.
          </p>

          {/* Avaliações resumo */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1" aria-label={`Nota ${site.rating.score}`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-star text-star" />
              ))}
            </div>
            <span className="font-heading text-lg font-bold">{site.rating.score}</span>
            <span className="font-body text-white/85">
              {site.rating.reviews} avaliações de clientes
            </span>
          </div>
        </div>

        {/* Formulário (assinatura) */}
        <div className="rounded-2xl bg-white p-6 shadow-heroform md:p-8">
          <h2 className="font-heading text-2xl font-bold text-brand">
            Agende Online
          </h2>
          <p className="mt-1 font-body text-[15px] text-tinta-500">
            Resposta rápida no seu WhatsApp.
          </p>
          <form className="mt-6 grid gap-4" onSubmit={submit} noValidate>
            <div>
              <label htmlFor="hero-name" className="mb-1 block font-heading text-sm font-semibold text-tinta-700">
                Nome completo*
              </label>
              <input id="hero-name" className={inputCls(errors.name)} value={form.name} onChange={set('name')} placeholder="Seu nome" />
              {errors.name && <p className="mt-1 font-body text-sm text-alerta">{errors.name}</p>}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="hero-phone" className="mb-1 block font-heading text-sm font-semibold text-tinta-700">
                  Telefone / WhatsApp*
                </label>
                <input id="hero-phone" className={inputCls(errors.phone)} value={form.phone} onChange={set('phone')} placeholder="(00) 00000-0000" inputMode="tel" />
                {errors.phone && <p className="mt-1 font-body text-sm text-alerta">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="hero-zip" className="mb-1 block font-heading text-sm font-semibold text-tinta-700">
                  CEP
                </label>
                <input id="hero-zip" className={inputCls()} value={form.zip} onChange={set('zip')} placeholder="00000-000" inputMode="numeric" />
              </div>
            </div>
            <div>
              <label htmlFor="hero-email" className="mb-1 block font-heading text-sm font-semibold text-tinta-700">
                E-mail
              </label>
              <input id="hero-email" type="email" className={inputCls(errors.email)} value={form.email} onChange={set('email')} placeholder="voce@email.com" />
              {errors.email && <p className="mt-1 font-body text-sm text-alerta">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="hero-service" className="mb-1 block font-heading text-sm font-semibold text-tinta-700">
                Serviço desejado*
              </label>
              <select id="hero-service" className={inputCls(errors.service)} value={form.service} onChange={set('service')}>
                <option value="">Selecione…</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {errors.service && <p className="mt-1 font-body text-sm text-alerta">{errors.service}</p>}
            </div>
            <button
              type="submit"
              className="mt-2 h-12 rounded-md bg-brand font-heading text-base font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Agendar Serviço
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
