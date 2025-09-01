import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[#E5E7EB] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-[#162338]">Alcazaar International</h2>
          <p className="mt-2 text-sm text-[#191919]/80 text-pretty">
            Overseas recruitment, visa, and emigration services. Your trusted partner for global opportunities.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-[#162338]">Navigation</h2>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <Link href="/jobs" className="hover:underline">
                Jobs
              </Link>
            </li>
            <li>
              <Link href="/visa-services" className="hover:underline">
                Visa Services
              </Link>
            </li>
            <li>
              <Link href="/emigration" className="hover:underline">
                Emigration
              </Link>
            </li>
            <li>
              <Link href="/medical-appointment" className="hover:underline">
                Medical Appointment
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-[#162338]">Contact</h2>
          <address className="not-italic mt-2 text-sm text-[#191919]/80">
            <p>Alcazaar International</p>
            <p>Example Street 123</p>
            <p>City, Country</p>
            <p className="mt-2">
              Phone:{" "}
              <a className="hover:underline" href="tel:+00000000000">
                +00 000 000 0000
              </a>
            </p>
            <p>
              Email:{" "}
              <a className="hover:underline" href="mailto:info@alcazaarinternational.com">
                info@alcazaarinternational.com
              </a>
            </p>
          </address>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-[#162338]">Hours</h2>
          <ul className="mt-2 text-sm text-[#191919]/80 space-y-1">
            <li>Mon–Fri: 9:00 – 18:00</li>
            <li>Sat: 10:00 – 14:00</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#E5E7EB]">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <p className="text-xs text-[#191919]/60">© {new Date().getFullYear()} Alcazaar International</p>
          <div className="flex items-center gap-3 text-xs">
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
