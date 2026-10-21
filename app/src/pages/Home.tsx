import Hero from '../sections/site/Hero'
import Reviews from '../sections/site/Reviews'
import Services from '../sections/site/Services'
import WhyChoose from '../sections/site/WhyChoose'
import ResidentialCommercial from '../sections/site/ResidentialCommercial'
import ContactCta from '../sections/site/ContactCta'

export default function Home() {
  return (
    <>
      <Hero />
      <Reviews />
      <Services />
      <WhyChoose />
      <ResidentialCommercial />
      <ContactCta />
    </>
  )
}
