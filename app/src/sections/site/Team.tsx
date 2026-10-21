import { site, waLink } from '../../data/content'
import { useReveal } from '../../hooks/useReveal'

export default function Team() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="bg-white py-16 lg:py-24" aria-labelledby="team-title">
      <div
        ref={ref}
        className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8"
      >
        <div className="order-2 overflow-hidden rounded-2xl shadow-card lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=70"
            alt="Equipe Jucimar JS"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="font-heading text-[13px] font-bold uppercase tracking-[0.08em] text-brand">
            Quem somos
          </p>
          <h2 id="team-title" className="mt-2 font-heading text-3xl font-bold text-tinta-900 lg:text-4xl">
            Uma equipe da sua cidade, não um 0800
          </h2>
          <p className="mt-4 font-body text-lg leading-relaxed text-tinta-500">
            A {site.name} é uma empresa local. Quem atende o seu telefonema é quem
            agenda o serviço. E quem bate na sua porta é técnico nosso, uniformizado
            e identificado. Nada de terceirização escondida.
          </p>
          <p className="mt-4 font-body text-lg leading-relaxed text-tinta-500">
            Atendemos {site.address} e região, {site.hours.toLowerCase()}, com agenda
            de emergências para quem não pode esperar.
          </p>
          <a
            href={waLink('Olá! Quero conhecer melhor o trabalho da Jucimar JS.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 items-center rounded-md border border-brand bg-transparent px-7 font-heading text-[15px] font-semibold text-brand transition-colors hover:bg-brand-nuvem"
          >
            Fale com a gente
          </a>
        </div>
      </div>
    </section>
  )
}
