import PageHero from '../sections/site/PageHero'
import Services from '../sections/site/Services'
import ContactCta from '../sections/site/ContactCta'

export default function Servicos() {
  return (
    <>
      <PageHero
        eyebrow="Nossos serviços"
        title="Instalação, manutenção, higienização e reparo"
        description="Tudo o que o seu ar-condicionado precisa, com preço fechado antes de começar e garantia escrita no final."
      />
      <Services />
      <ContactCta />
    </>
  )
}
