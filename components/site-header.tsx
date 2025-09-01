"use client"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const nav = [
  { href: "/jobs", label: "Jobs" },
  { href: "/visa-services", label: "Visa Services" },
  { href: "/emigration", label: "Emigration" },
  { href: "/medical-appointment", label: "Medical Appointment" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="border-b border-[#E5E7EB] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Alcazaar International home">
          <div className="h-8 w-8 rounded-sm bg-[#162338]" aria-hidden="true" />
          <span className="font-semibold tracking-tight text-[#162338]">Alcazaar International</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[#191919]/80 hover:text-[#191919] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/jobs"
            className="inline-flex items-center rounded-md bg-[#F8F30E] px-4 py-2 text-sm font-medium text-[#191919] hover:opacity-90"
          >
            Explore Jobs
          </Link>
        </nav>

        <button
          className="md:hidden p-2 rounded border border-[#E5E7EB]"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      <div id="mobile-menu" className={`md:hidden ${open ? "block" : "hidden"} border-t border-[#E5E7EB] bg-white`}>
        <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-base text-[#191919] py-1"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/jobs"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-md bg-[#F8F30E] px-4 py-2 text-sm font-medium text-[#191919]"
          >
            Explore Jobs
          </Link>
        </nav>
      </div>
    </header>
  )
}
