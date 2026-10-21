import { Link } from 'react-router'
import { Facebook, Instagram, MapPin, MessageCircle, Wind } from 'lucide-react'
import { nav, site, waLink } from '../../data/content'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white" aria-label="Rodapé">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-3 lg:px-8">
        {/* Marca */}
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
              <Wind className="h-5 w-5 text-white" />
            </span>
            <span className="leading-tight">
              <span className="block font-heading text-lg font-bold">{site.name}</span>
              <span className="block font-heading text-[11px] font-semibold uppercase tracking-[0.08em] text-white/70">
                {site.tagline}
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-xs font-body text-[15px] leading-relaxed text-white/75">
            Instalação, manutenção e reparo de ar-condicionado com preço fechado e
            garantia escrita.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={site.social.instagram} aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/25">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={site.social.facebook} aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/25">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={waLink('Olá! Vim pelo site da Jucimar JS.')} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/25">
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Navegação */}
        <nav aria-label="Rodapé">
          <h3 className="font-heading text-[13px] font-bold uppercase tracking-[0.08em] text-white/70">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/" className="font-body text-[15px] text-white/85 transition-colors hover:text-white">
                Início
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="font-body text-[15px] text-white/85 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contato */}
        <div>
          <h3 className="font-heading text-[13px] font-bold uppercase tracking-[0.08em] text-white/70">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 font-body text-[15px] text-white/85">
            <li>
              <a href={site.phoneHref} className="font-heading text-lg font-bold text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />
              {site.address}
            </li>
            <li>{site.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center font-body text-sm text-white/60 lg:px-8">
          © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
