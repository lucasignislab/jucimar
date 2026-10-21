import { Routes, Route } from 'react-router'
import Layout from './Layout'
import Home from './pages/Home'
import Servicos from './pages/Servicos'
import ServicoDetalhe from './pages/ServicoDetalhe'
import Sobre from './pages/Sobre'
import Dicas from './pages/Dicas'
import FaqPage from './pages/FaqPage'
import Contato from './pages/Contato'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/servicos/:slug" element={<ServicoDetalhe />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/dicas" element={<Dicas />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
