import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { services } from '../../data/content'
import { useReveal } from '../../hooks/useReveal'

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className="group overflow-hidden rounded-2xl border border-[rgba(17,24,39,0.08)] bg-white shadow-card transition-shadow duration-200 hover:shadow-card-hover"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-tinta-900">{service.title}</h3>
        <p className="mt-2 font-body text-base leading-relaxed text-tinta-500">
          {service.description}
        </p>
        <Link
          to={`/servicos/${service.slug}`}
          className="mt-4 inline-flex items-center gap-1 font-heading text-[15px] font-semibold text-brand hover:text-brand-vivid"
        >
          Saiba mais
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="servicos" className="bg-white py-16 lg:py-24" aria-labelledby="services-title">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="font-heading text-[13px] font-bold uppercase tracking-[0.08em] text-brand">
            Serviços
          </p>
          <h2 id="services-title" className="mt-2 font-heading text-3xl font-bold text-tinta-900 lg:text-4xl">
            Tudo para o seu ar-condicionado
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-body text-lg text-tinta-500">
            Da instalação ao reparo, um único time resolve, com preço fechado e garantia escrita.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
