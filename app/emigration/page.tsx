import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Emigration — Alcazaar International",
  description: "Comprehensive emigration support including attestation and clearances.",
}

export default function EmigrationPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold text-[#162338]">Emigration</h1>
          <p className="mt-2 text-[#191919]/80">Navigate emigration requirements with confidence and clarity.</p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Document Attestation", desc: "Educational and professional certificates attestation." },
            { title: "Police Clearance", desc: "Guidance for PCC and related compliance steps." },
            { title: "MOFA & Embassy", desc: "End-to-end support for embassy formalities." },
          ].map((item) => (
            <article key={item.title} className="rounded-lg border border-[#E5E7EB] bg-white p-5">
              <h2 className="text-lg font-semibold text-[#162338]">{item.title}</h2>
              <p className="mt-2 text-sm text-[#191919]/80">{item.desc}</p>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
