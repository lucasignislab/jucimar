import PageHero from '../sections/site/PageHero'
import Faq from '../sections/site/Faq'
import ContactCta from '../sections/site/ContactCta'

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Perguntas frequentes"
        title="Dúvidas? A gente responde antes de você perguntar"
        description="Pagamento, garantia, prazos e emergências. Tudo explicado sem letra miúda."
      />
      <Faq />
      <ContactCta />
    </>
  )
}
