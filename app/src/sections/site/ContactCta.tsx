import { useState } from 'react'
import { waLink } from '../../data/content'
import { useReveal } from '../../hooks/useReveal'

export default function ContactCta() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const ref = useReveal<HTMLDivElement>()

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) {
      setError('Preencha nome e telefone para continuarmos.')
      return
    }
    setError('')
    window.open(
      waLink(`Olá! Meu nome é ${name}. Quero um retorno sobre ar-condicionado. Telefone: ${phone}`),
      '_blank',
      'noopener'
    )
    setName('')
    setPhone('')
  }

  const inputCls =
    'h-12 w-full rounded-md border border-white/30 bg-white/10 px-4 font-body text-base text-white outline-none transition-shadow placeholder:text-white/70 focus:ring-2 focus:ring-white'

  return (
    <section id="contato" className="bg-brand-dark py-16 lg:py-24" aria-labelledby="contact-title">
      <div
        ref={ref}
        className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8"
      >
        <div className="text-white">
          <p className="font-heading text-[13px] font-bold uppercase tracking-[0.08em] text-brand-nuvem">
            Último passo
          </p>
          <h2 id="contact-title" className="mt-2 font-heading text-3xl font-bold lg:text-4xl">
            Deixe seu contato e a gente chama você
          </h2>
          <p className="mt-4 max-w-md font-body text-lg leading-relaxed text-white/85">
            Sem formulário longo, sem espera. Informe nome e telefone e respondemos
            no seu WhatsApp ainda hoje, em horário comercial.
          </p>
        </div>
        <form onSubmit={submit} noValidate className="grid gap-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
          <div>
            <label htmlFor="cta-name" className="mb-1 block font-heading text-sm font-semibold text-white">
              Nome*
            </label>
            <input id="cta-name" className={inputCls} value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" />
          </div>
          <div>
            <label htmlFor="cta-phone" className="mb-1 block font-heading text-sm font-semibold text-white">
              Telefone / WhatsApp*
            </label>
            <input id="cta-phone" className={inputCls} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(00) 00000-0000" inputMode="tel" />
          </div>
          <button
            type="submit"
            className="h-12 rounded-md bg-white px-7 font-heading text-[15px] font-semibold text-brand-dark transition-colors hover:bg-brand-nuvem"
          >
            Me chama no WhatsApp
          </button>
          {error && <p className="font-body text-sm text-white sm:col-span-3">{error}</p>}
        </form>
      </div>
    </section>
  )
}
