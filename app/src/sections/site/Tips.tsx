import { ArrowRight } from 'lucide-react'
import { tips } from '../../data/content'
import { useReveal } from '../../hooks/useReveal'

function TipCard({ tip }: { tip: (typeof tips)[number] }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <article
      ref={ref}
      className="group overflow-hidden rounded-2xl border border-[rgba(17,24,39,0.08)] bg-white shadow-card transition-shadow duration-200 hover:shadow-card-hover"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={tip.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-lg font-semibold leading-snug text-tinta-900">
          {tip.title}
        </h3>
        <p className="mt-2 font-body text-[15px] leading-relaxed text-tinta-500">
          {tip.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 font-heading text-[15px] font-semibold text-brand">
          Ler dica
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </article>
  )
}

export default function Tips() {
  return (
    <section id="dicas" className="bg-white py-16 lg:py-24" aria-labelledby="tips-title">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="font-heading text-[13px] font-bold uppercase tracking-[0.08em] text-brand">
            Dicas do especialista
          </p>
          <h2 id="tips-title" className="mt-2 font-heading text-3xl font-bold text-tinta-900 lg:text-4xl">
            Aprenda a cuidar do seu ar-condicionado
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-body text-lg text-tinta-500">
            Conteúdo simples e direto para economizar energia e evitar reparos caros.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tips.map((t) => (
            <TipCard key={t.title} tip={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
