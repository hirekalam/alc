import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { JobGrid } from "@/components/job-grid"

export const metadata = {
  title: "Jobs — Alcazaar International",
  description: "Browse overseas job openings and apply with confidence.",
}

export default function JobsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold text-[#162338]">Jobs</h1>
          <p className="mt-2 text-[#191919]/80">Explore current openings across the Middle East and beyond.</p>
        </header>
      </main>
      <JobGrid />
      <SiteFooter />
    </>
  )
}
