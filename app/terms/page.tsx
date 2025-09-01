import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = { title: "Terms of Service — Alcazaar International" }

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-semibold text-[#162338]">Terms of Service</h1>
        <p className="mt-4 text-sm text-[#191919]/80">
          This is a placeholder terms page. Replace with your official terms.
        </p>
      </main>
      <SiteFooter />
    </>
  )
}
