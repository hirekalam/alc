import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Visa Services — Alcazaar International",
  description: "End-to-end visa assistance including documentation and scheduling.",
}

export default function VisaServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold text-[#162338]">Visa Services</h1>
          <p className="mt-2 text-[#191919]/80">We simplify your visa process with clear steps and timely support.</p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Eligibility & Guidance", desc: "Checklists and guidance tailored to your destination." },
            { title: "Documentation Review", desc: "We verify your documents for accuracy and completeness." },
            { title: "Appointments & Follow-ups", desc: "Scheduling, tracking, and updates throughout." },
          ].map((item) => (
            <article key={item.title} className="rounded-lg border border-[#E5E7EB] bg-white p-5">
              <h2 className="text-lg font-semibold text-[#162338]">{item.title}</h2>
              <p className="mt-2 text-sm text-[#191919]/80">{item.desc}</p>
            </article>
          ))}
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-[#162338]">What you’ll need</h2>
          <ul className="mt-3 list-disc pl-6 text-sm text-[#191919]/80 space-y-1">
            <li>Valid passport and photos</li>
            <li>Offer letter or invitation (if applicable)</li>
            <li>Medical certificate (destination dependent)</li>
            <li>Proof of funds and accommodation (if required)</li>
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
