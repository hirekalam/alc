import Link from "next/link"

function Row({
  reverse,
  title,
  body,
  ctaHref,
  ctaLabel,
  imgAlt,
  imgQuery,
}: {
  reverse?: boolean
  title: string
  body: string
  ctaHref: string
  ctaLabel: string
  imgAlt: string
  imgQuery: string
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}
      >
        <div>
          <h2 className="text-2xl font-semibold text-[#162338]">{title}</h2>
          <p className="mt-3 text-[#191919]/80 leading-relaxed">{body}</p>
          <div className="mt-6">
            <Link
              href={ctaHref}
              className="inline-flex items-center rounded-md bg-[#162338] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
        <div>
          <img
            src={`/abstract-geometric-shapes.png?height=640&width=960&query=${encodeURIComponent(imgQuery)}`}
            alt={imgAlt}
            className="w-full h-auto rounded-lg border border-[#E5E7EB] object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export function AlternatingSections() {
  return (
    <>
      <Row
        title="Visa Services"
        body="From document checklists to appointment booking, we streamline your visa application with clarity and confidence."
        ctaHref="/visa-services"
        ctaLabel="Learn more"
        imgAlt="Passport and visa documents on a desk"
        imgQuery="passport visa documents on desk minimal"
      />
      <Row
        reverse
        title="Emigration"
        body="Comprehensive emigration guidance, including attestation, clearances, and compliance so you can resettle smoothly."
        ctaHref="/emigration"
        ctaLabel="Explore emigration"
        imgAlt="International travel and relocation concept"
        imgQuery="international relocation airport traveler minimal"
      />
    </>
  )
}
