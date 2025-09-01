import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/hero"
import { QuickLinks } from "@/components/quick-links"
import { JobGrid } from "@/components/job-grid"
import { AlternatingSections } from "@/components/alternating-sections"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export const metadata = {
  title: "Alcazaar International — Global Jobs, Visa & Emigration",
}

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <QuickLinks />
        <JobGrid />
        <AlternatingSections />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
