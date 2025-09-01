import Link from "next/link"

export function Hero() {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0 -z-10">
        <img
          src="/professional-business-team-global-recruitment.png"
          alt="Professional team representing global recruitment opportunities"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#162338]/70" aria-hidden="true" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-24 sm:py-28 md:py-32 text-white">
        <h1 className="text-pretty text-3xl sm:text-4xl md:text-5xl font-semibold">
          Connecting Talent with Global Opportunities
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/90">
          Trusted recruitment, visa, and emigration services to help you work and thrive abroad.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <Link
            href="/jobs"
            className="inline-flex items-center rounded-md bg-[#F8F30E] px-5 py-3 text-sm font-medium text-[#191919] hover:opacity-90"
          >
            Explore Jobs
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md border border-white/30 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
          >
            Talk to Us
          </Link>
        </div>
      </div>
    </section>
  )
}
