import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = { title: "Privacy Policy — Alcazaar International" }

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-semibold text-[#162338]">Privacy Policy</h1>
        <p className="mt-4 text-sm text-[#191919]/80">
          This is a placeholder privacy policy. Replace with your official policy content.
        </p>
      </main>
      <SiteFooter />
    </>
  )
}
