import { Star } from 'lucide-react'
import { reviews, site } from '../../data/content'
import { useReveal } from '../../hooks/useReveal'

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className="flex flex-col rounded-2xl border border-[rgba(17,24,39,0.08)] bg-white p-8 shadow-card transition-shadow duration-200 hover:shadow-card-hover"
    >
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-star text-star" />
        ))}
      </div>
      <p className="mt-4 flex-1 font-body text-base leading-relaxed text-tinta-700">
        “{review.text}”
      </p>
      <div className="mt-6 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-nuvem font-heading text-sm font-bold text-brand">
          {review.name.charAt(0)}
        </span>
        <div>
          <p className="font-heading text-[15px] font-semibold text-tinta-900">{review.name}</p>
          <p className="font-body text-sm text-tinta-500">{review.location}</p>
        </div>
      </div>
    </div>
  )
}

export default function Reviews() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24" aria-labelledby="reviews-title">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="font-heading text-[13px] font-bold uppercase tracking-[0.08em] text-brand">
            Avaliações
          </p>
          <h2 id="reviews-title" className="mt-2 font-heading text-3xl font-bold text-tinta-900 lg:text-4xl">
            Quem contratou, recomenda
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-body text-lg text-tinta-500">
            Nota média {site.rating.score} baseada em {site.rating.reviews} avaliações de clientes.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>
      </div>
    </section>
  )
}
