import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { faqs } from '../../data/content'
import { useReveal } from '../../hooks/useReveal'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="faq" className="bg-gray-50 py-16 lg:py-24" aria-labelledby="faq-title">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <div className="text-center">
          <p className="font-heading text-[13px] font-bold uppercase tracking-[0.08em] text-brand">
            Perguntas frequentes
          </p>
          <h2 id="faq-title" className="mt-2 font-heading text-3xl font-bold text-tinta-900 lg:text-4xl">
            Dúvidas? A gente responde antes de você perguntar
          </h2>
        </div>
        <div ref={ref} className="mt-12 space-y-4">
          {faqs.map((faq, i) => {
            const open = openIndex === i
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-md border border-[rgba(17,24,39,0.08)] border-l-4 border-l-brand bg-white shadow-card"
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left lg:px-8"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                >
                  <span className="font-heading text-base font-semibold text-tinta-900 lg:text-lg">
                    {faq.q}
                  </span>
                  {open ? (
                    <Minus className="h-5 w-5 shrink-0 text-brand" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-brand" />
                  )}
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-250 ease-out"
                  style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 font-body text-base leading-relaxed text-tinta-700 lg:px-8">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
