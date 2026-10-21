import { Building2, Home as HomeIcon, ArrowRight } from 'lucide-react'
import { waLink } from '../../data/content'
import { useReveal } from '../../hooks/useReveal'

const blocks = [
  {
    icon: HomeIcon,
    title: 'Residencial',
    description:
      'Casas e apartamentos climatizados sem obra complicada. Instalação limpa, manutenção programada e aquele reparo urgente no quarto das crianças. Tudo com preço fechado.',
    cta: 'Quero para minha casa',
  },
  {
    icon: Building2,
    title: 'Comercial',
    description:
      'Escritórios, lojas e consultórios não podem parar por causa de calor. Cuidamos de instalação, manutenção programada e contratos PMOC com laudos e nota fiscal.',
    cta: 'Quero para minha empresa',
  },
]

export default function ResidentialCommercial() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="bg-brand-gelo py-16 lg:py-24" aria-labelledby="segments-title">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="font-heading text-[13px] font-bold uppercase tracking-[0.08em] text-brand">
            Atendimento
          </p>
          <h2 id="segments-title" className="mt-2 font-heading text-3xl font-bold text-tinta-900 lg:text-4xl">
            Na sua casa ou na sua empresa
          </h2>
        </div>
        <div ref={ref} className="mt-12 grid gap-6 md:grid-cols-2">
          {blocks.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-[rgba(17,24,39,0.08)] bg-white p-8 shadow-card transition-shadow duration-200 hover:shadow-card-hover lg:p-10"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-nuvem">
                <b.icon className="h-7 w-7 text-brand" />
              </span>
              <h3 className="mt-6 font-heading text-2xl font-semibold text-tinta-900">{b.title}</h3>
              <p className="mt-3 font-body text-base leading-relaxed text-tinta-500">
                {b.description}
              </p>
              <a
                href={waLink(`Olá! Quero atendimento ${b.title.toLowerCase()} para ar-condicionado.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1 font-heading text-[15px] font-semibold text-brand hover:text-brand-vivid"
              >
                {b.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
