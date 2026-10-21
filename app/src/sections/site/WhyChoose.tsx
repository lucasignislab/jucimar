import { Check } from 'lucide-react'
import { differentials, site, waLink } from '../../data/content'
import { useReveal } from '../../hooks/useReveal'

export default function WhyChoose() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id="por-que" className="bg-white py-16 lg:py-24" aria-labelledby="why-title">
      <div
        ref={ref}
        className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8"
      >
        <div>
          <p className="font-heading text-[13px] font-bold uppercase tracking-[0.08em] text-brand">
            Por que a {site.name}
          </p>
          <h2 id="why-title" className="mt-2 font-heading text-3xl font-bold text-tinta-900 lg:text-4xl">
            O técnico que você chama uma vez e indica para sempre
          </h2>
          <p className="mt-4 font-body text-lg leading-relaxed text-tinta-500">
            Ar-condicionado não deveria ser motivo de dor de cabeça. Nosso trabalho
            é chegar no horário, resolver de verdade e deixar tudo explicado.
          </p>
          <ul className="mt-8 space-y-4">
            {differentials.map((d) => (
              <li key={d} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-nuvem">
                  <Check className="h-4 w-4 text-brand" />
                </span>
                <span className="font-body text-base text-tinta-700">{d}</span>
              </li>
            ))}
          </ul>
          <a
            href={waLink('Olá! Quero um orçamento sem compromisso.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 items-center rounded-md bg-brand px-7 font-heading text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Pedir orçamento sem compromisso
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-card">
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=70"
            alt="Técnico da Jucimar JS em atendimento"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
