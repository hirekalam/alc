import Link from "next/link"
import { BriefcaseBusiness, Plane, FileCheck2, Stethoscope, Phone } from "lucide-react"

const items = [
  { href: "/jobs", label: "Jobs", Icon: BriefcaseBusiness, desc: "Find overseas roles" },
  { href: "/visa-services", label: "Visa Services", Icon: Plane, desc: "Application support" },
  { href: "/emigration", label: "Emigration", Icon: FileCheck2, desc: "Documents & guidance" },
  { href: "/medical-appointment", label: "Medical Appointment", Icon: Stethoscope, desc: "Schedule check-ups" },
  { href: "/contact", label: "Contact", Icon: Phone, desc: "Get in touch" },
]

export function QuickLinks() {
  return (
    <section aria-labelledby="quick-links-heading" className="mx-auto max-w-6xl px-4 py-10">
      <h2 id="quick-links-heading" className="text-xl font-semibold text-[#162338] text-balance">
        Quick Access
      </h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {items.map(({ href, label, Icon, desc }) => (
          <Link
            key={href}
            href={href}
            className="group rounded-lg border border-[#E5E7EB] bg-white p-4 hover:border-[#162338] focus:outline-none focus-visible:focus-ring"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#162338] text-white">
                <Icon aria-hidden className="h-5 w-5" />
              </span>
              <div>
                <div className="font-medium text-[#191919] group-hover:text-[#162338]">{label}</div>
                <p className="text-xs text-[#191919]/70">{desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
