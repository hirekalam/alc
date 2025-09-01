import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  // Replace the phone number with the official WhatsApp number when available
  const phone = "00000000000"
  const message = "Hello Alcazaar International, I need assistance."
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#25D366] text-white shadow-lg focus:outline-none focus-visible:focus-ring"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle aria-hidden className="h-6 w-6" />
    </a>
  )
}
