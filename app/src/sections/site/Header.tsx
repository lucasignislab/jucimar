import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { CalendarCheck, ChevronDown, Menu, Phone, Wind, X } from 'lucide-react'
import { nav, services, site } from '../../data/content'

export default function Header() {
  const [compressed, setCompressed] = useState(false)
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setCompressed(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fecha o drawer e volta ao topo ao trocar de página
  useEffect(() => {
    setOpen(false)
    setDropdown(false)
    window.scrollTo(0, 0)
  }, [pathname])

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdown(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const isActive = (href: string) =>
    href === '/servicos' ? pathname.startsWith('/servicos') : pathname === href

  const linkCls = (href: string) =>
    `font-heading text-[15px] font-semibold transition-colors hover:text-brand ${
      isActive(href) ? 'text-brand' : 'text-tinta-700'
    }`

  return (
    <>
      {/* Wrapper preserva o fluxo do documento */}
      <div className="h-24" aria-hidden />
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 ${
          compressed ? 'shadow-md' : 'border-b border-[rgba(17,24,39,0.08)]'
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-200 lg:px-8 ${
            compressed ? 'h-16' : 'h-24'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-nuvem">
              <Wind className="h-5 w-5 text-brand" />
            </span>
            <span className="leading-tight">
              <span className="block font-heading text-lg font-bold text-brand">
                {site.name}
              </span>
              <span className="block font-heading text-[11px] font-semibold uppercase tracking-[0.08em] text-tinta-500">
                {site.tagline}
              </span>
            </span>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
            {nav.map((item) =>
              item.href === '/servicos' ? (
                <div
                  key={item.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <button
                    className={`inline-flex items-center gap-1 ${linkCls(item.href)}`}
                    aria-expanded={dropdown}
                    aria-haspopup="true"
                    onClick={() => setDropdown(!dropdown)}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${dropdown ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {dropdown && (
                    <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-2">
                      <div className="overflow-hidden rounded-lg border border-[rgba(17,24,39,0.08)] bg-white py-2 shadow-card-hover">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/servicos/${s.slug}`}
                            className="block px-5 py-2.5 font-heading text-[15px] font-semibold text-tinta-700 transition-colors hover:bg-brand-gelo hover:text-brand"
                          >
                            {s.title}
                          </Link>
                        ))}
                        <div className="mt-1 border-t border-[rgba(17,24,39,0.08)] pt-1">
                          <Link
                            to="/servicos"
                            className="block px-5 py-2.5 font-heading text-[15px] font-bold text-brand transition-colors hover:bg-brand-gelo"
                          >
                            Todos os serviços →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={linkCls(item.href)}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTAs */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={site.phoneHref}
              className="font-heading text-lg font-bold text-brand"
            >
              <Phone className="mr-1 inline h-4 w-4" />
              {site.phone}
            </a>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 font-heading text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              <CalendarCheck className="h-4 w-4" />
              Agendar Serviço
            </Link>
          </div>

          {/* Hambúrguer */}
          <button
            className="flex h-11 w-11 items-center justify-center rounded-md text-tinta-900 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Drawer mobile */}
        {open && (
          <div className="border-t border-[rgba(17,24,39,0.08)] bg-white px-4 pb-6 pt-4 lg:hidden">
            <nav className="flex flex-col gap-1" aria-label="Menu mobile">
              <Link
                to="/"
                className="rounded-md px-3 py-3 font-heading text-base font-semibold text-tinta-700 hover:bg-brand-gelo"
              >
                Início
              </Link>
              {nav.map((item) =>
                item.href === '/servicos' ? (
                  <div key={item.href}>
                    <button
                      className="flex w-full items-center justify-between rounded-md px-3 py-3 font-heading text-base font-semibold text-tinta-700 hover:bg-brand-gelo"
                      onClick={() => setMobileServices(!mobileServices)}
                      aria-expanded={mobileServices}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${mobileServices ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {mobileServices && (
                      <div className="ml-3 border-l-2 border-brand-nuvem pl-3">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/servicos/${s.slug}`}
                            className="block rounded-md px-3 py-2.5 font-heading text-[15px] font-semibold text-tinta-700 hover:bg-brand-gelo"
                          >
                            {s.title}
                          </Link>
                        ))}
                        <Link
                          to="/servicos"
                          className="block rounded-md px-3 py-2.5 font-heading text-[15px] font-bold text-brand hover:bg-brand-gelo"
                        >
                          Todos os serviços →
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`rounded-md px-3 py-3 font-heading text-base font-semibold hover:bg-brand-gelo ${
                      isActive(item.href) ? 'text-brand' : 'text-tinta-700'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                to="/contato"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-3.5 font-heading text-[15px] font-semibold text-white"
              >
                <CalendarCheck className="h-4 w-4" />
                Agendar Serviço
              </Link>
              <a
                href={site.phoneHref}
                className="mt-2 text-center font-heading text-lg font-bold text-brand"
              >
                <Phone className="mr-1 inline h-4 w-4" />
                {site.phone}
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
