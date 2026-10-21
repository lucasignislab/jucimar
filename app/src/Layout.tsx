import { Outlet } from 'react-router'
import Header from './sections/site/Header'
import Footer from './sections/site/Footer'
import WhatsAppFloat from './sections/site/WhatsAppFloat'

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
