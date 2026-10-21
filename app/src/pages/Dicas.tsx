import PageHero from '../sections/site/PageHero'
import Tips from '../sections/site/Tips'
import ContactCta from '../sections/site/ContactCta'

export default function Dicas() {
  return (
    <>
      <PageHero
        eyebrow="Dicas do especialista"
        title="Aprenda a cuidar do seu ar-condicionado"
        description="Conteúdo simples e direto para economizar energia, respirar ar mais limpo e evitar reparos caros."
      />
      <Tips />
      <ContactCta />
    </>
  )
}
