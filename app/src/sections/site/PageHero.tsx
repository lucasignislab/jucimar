type Props = {
  eyebrow: string
  title: string
  description?: string
}

/** Cabeçalho padrão das páginas internas. */
export default function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="bg-brand-dark py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="font-heading text-[13px] font-bold uppercase tracking-[0.08em] text-brand-nuvem">
          {eyebrow}
        </p>
        <h1 className="mt-2 font-heading text-3xl font-extrabold tracking-[-0.02em] text-white lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-white/85">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
