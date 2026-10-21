import { useState } from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import PageHero from '../sections/site/PageHero'
import { site, waLink } from '../data/content'

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
  message: string
}

const initial: FormState = { name: '', email: '', phone: '', zip: '', service: '', message: '' }

export default function Contato() {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const set = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [key]: e.target.value })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs: Partial<FormState> = {}
    if (!form.name.trim()) errs.name = 'Informe seu nome'
    if (!form.phone.trim()) errs.phone = 'Informe seu telefone'
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'E-mail inválido'
    if (!form.service) errs.service = 'Escolha o serviço'
    setErrors(errs)
    if (Object.keys(errs).length) return

    const msg = `Olá! Meu nome é ${form.name}. Quero agendar: ${form.service}. Telefone: ${form.phone}${form.zip ? ` · CEP: ${form.zip}` : ''}${form.message ? ` · ${form.message}` : ''}`
    window.open(waLink(msg), '_blank', 'noopener')
    setForm(initial)
  }

  const inputCls = (err?: string) =>
    `h-12 w-full rounded-md border bg-white px-4 font-body text-base text-tinta-900 outline-none transition-shadow placeholder:text-tinta-500 focus:ring-2 focus:ring-brand-vivid ${
      err ? 'border-alerta' : 'border-gray-200'
    }`

  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Agende seu serviço"
        description="Preencha o formulário e respondemos no seu WhatsApp ainda hoje, em horário comercial."
      />
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:px-8">
          {/* Formulário */}
          <div className="rounded-2xl bg-white p-6 shadow-card md:p-8">
            <h2 className="font-heading text-2xl font-bold text-brand">Agende Online</h2>
            <form className="mt-6 grid gap-4" onSubmit={submit} noValidate>
              <div>
                <label htmlFor="c-name" className="mb-1 block font-heading text-sm font-semibold text-tinta-700">Nome completo*</label>
                <input id="c-name" className={inputCls(errors.name)} value={form.name} onChange={set('name')} placeholder="Seu nome" />
                {errors.name && <p className="mt-1 font-body text-sm text-alerta">{errors.name}</p>}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-phone" className="mb-1 block font-heading text-sm font-semibold text-tinta-700">Telefone / WhatsApp*</label>
                  <input id="c-phone" className={inputCls(errors.phone)} value={form.phone} onChange={set('phone')} placeholder="(00) 00000-0000" inputMode="tel" />
                  {errors.phone && <p className="mt-1 font-body text-sm text-alerta">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="c-zip" className="mb-1 block font-heading text-sm font-semibold text-tinta-700">CEP</label>
                  <input id="c-zip" className={inputCls()} value={form.zip} onChange={set('zip')} placeholder="00000-000" inputMode="numeric" />
                </div>
              </div>
              <div>
                <label htmlFor="c-email" className="mb-1 block font-heading text-sm font-semibold text-tinta-700">E-mail</label>
                <input id="c-email" type="email" className={inputCls(errors.email)} value={form.email} onChange={set('email')} placeholder="voce@email.com" />
                {errors.email && <p className="mt-1 font-body text-sm text-alerta">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="c-service" className="mb-1 block font-heading text-sm font-semibold text-tinta-700">Serviço desejado*</label>
                <select id="c-service" className={inputCls(errors.service)} value={form.service} onChange={set('service')}>
                  <option value="">Selecione…</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.service && <p className="mt-1 font-body text-sm text-alerta">{errors.service}</p>}
              </div>
              <div>
                <label htmlFor="c-message" className="mb-1 block font-heading text-sm font-semibold text-tinta-700">Mensagem</label>
                <textarea
                  id="c-message"
                  rows={4}
                  className={`${inputCls()} h-auto py-3`}
                  value={form.message}
                  onChange={set('message')}
                  placeholder="Conte um pouco do que você precisa (opcional)"
                />
              </div>
              <button
                type="submit"
                className="mt-2 h-12 rounded-md bg-brand font-heading text-base font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Agendar Serviço
              </button>
            </form>
          </div>

          {/* Informações */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-tinta-900">
              Prefere falar direto?
            </h2>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-nuvem">
                  <Phone className="h-5 w-5 text-brand" />
                </span>
                <div>
                  <p className="font-heading text-[15px] font-semibold text-tinta-900">Telefone</p>
                  <a href={site.phoneHref} className="font-heading text-lg font-bold text-brand">
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-nuvem">
                  <Mail className="h-5 w-5 text-brand" />
                </span>
                <div>
                  <p className="font-heading text-[15px] font-semibold text-tinta-900">E-mail</p>
                  <a href={`mailto:${site.email}`} className="font-body text-base text-tinta-700 hover:text-brand">
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-nuvem">
                  <MapPin className="h-5 w-5 text-brand" />
                </span>
                <div>
                  <p className="font-heading text-[15px] font-semibold text-tinta-900">Região de atendimento</p>
                  <p className="font-body text-base text-tinta-700">{site.address} e região</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-nuvem">
                  <Clock className="h-5 w-5 text-brand" />
                </span>
                <div>
                  <p className="font-heading text-[15px] font-semibold text-tinta-900">Horário</p>
                  <p className="font-body text-base text-tinta-700">{site.hours}</p>
                  <p className="font-body text-sm text-tinta-500">Emergências mediante agenda.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
