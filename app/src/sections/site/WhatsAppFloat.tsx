import { MessageCircle } from 'lucide-react'
import { waLink } from '../../data/content'

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink('Olá! Vim pelo site e quero falar sobre ar-condicionado.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-card-hover transition-transform duration-200 hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
