import { Link, Navigate, useParams } from 'react-router'
import { ArrowRight, Check } from 'lucide-react'
import PageHero from '../sections/site/PageHero'
import ContactCta from '../sections/site/ContactCta'
import { services, waLink } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function ServicoDetalhe() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  const ref = useReveal<HTMLDivElement>()

  if (!service) return <Navigate to="/servicos" replace />

  const others = services.filter((s) => s.slug !== slug)

  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title={service.title}
        description={service.description}
      />

      <section className="bg-white py-16 lg:py-24">
        <div
          ref={ref}
          className="mx-auto grid max-w-7xl items-start gap-10 px-4 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:px-8"
        >
          <div>
            <h2 className="font-heading text-2xl font-bold text-tinta-900 lg:text-3xl">
              Como funciona
            </h2>
            <p className="mt-4 font-body text-lg leading-relaxed text-tinta-700">
              {service.longDescription}
            </p>
            <h3 className="mt-10 font-heading text-xl font-semibold text-tinta-900">
              O que está incluído
            </h3>
            <ul className="mt-4 space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-nuvem">
                    <Check className="h-4 w-4 text-brand" />
                  </span>
                  <span className="font-body text-base text-tinta-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={waLink(`Olá! Quero um orçamento de ${service.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center rounded-md bg-brand px-7 font-heading text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Pedir orçamento
              </a>
              <Link
                to="/contato"
                className="inline-flex h-12 items-center rounded-md border border-brand px-7 font-heading text-[15px] font-semibold text-brand transition-colors hover:bg-brand-nuvem"
              >
                Agendar pelo site
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-card">
            <img
              src={service.image.replace('w=800', 'w=1000')}
              alt={service.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Outros serviços */}
      <section className="bg-gray-50 py-16 lg:py-24" aria-labelledby="others-title">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 id="others-title" className="font-heading text-2xl font-bold text-tinta-900 lg:text-3xl">
            Veja também
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                to={`/servicos/${s.slug}`}
                className="group rounded-2xl border border-[rgba(17,24,39,0.08)] bg-white p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover"
              >
                <h3 className="font-heading text-lg font-semibold text-tinta-900 group-hover:text-brand">
                  {s.title}
                </h3>
                <p className="mt-2 font-body text-[15px] leading-relaxed text-tinta-500">
                  {s.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 font-heading text-[15px] font-semibold text-brand">
                  Saiba mais
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  )
}
