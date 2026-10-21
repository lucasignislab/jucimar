import PageHero from '../sections/site/PageHero'
import Team from '../sections/site/Team'
import WhyChoose from '../sections/site/WhyChoose'
import ResidentialCommercial from '../sections/site/ResidentialCommercial'
import ContactCta from '../sections/site/ContactCta'

export default function Sobre() {
  return (
    <>
      <PageHero
        eyebrow="Sobre nós"
        title="Uma empresa da sua cidade, feita de gente"
        description="Conheça quem está por trás de cada instalação e por que nossos clientes voltam e indicam."
      />
      <Team />
      <WhyChoose />
      <ResidentialCommercial />
      <ContactCta />
    </>
  )
}
