"use client"
import { useEffect, useState } from "react"
import Link from "next/link"

const slides = [
  {
    src: "/global-recruitment-hero.png",
    alt: "Global recruitment opportunities",
    headline: "Work Abroad with Confidence",
    sub: "Trusted overseas recruitment and support services.",
  },
  {
    src: "/skilled-professionals-international.png",
    alt: "Skilled professionals placed internationally",
    headline: "Connecting Talent to Global Employers",
    sub: "Explore high-demand roles across industries.",
  },
  {
    src: "/visa-services-and-emigration.png",
    alt: "Visa services and emigration",
    headline: "Visa, Emigration, and Medical Assistance",
    sub: "End-to-end guidance for a smooth journey.",
  },
]

export function HeroSlider() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 4500)
    return () => clearInterval(id)
  }, [])

  return (
    <section aria-label="Highlights" className="relative overflow-hidden">
      <div className="relative h-[52vh] md:h-[64vh] lg:h-[72vh]">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
            aria-hidden={i !== index}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.src || "/placeholder.svg"}
              alt={s.alt}
              className="h-full w-full object-cover"
              crossOrigin="anonymous"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10" aria-hidden />
          </div>
        ))}
        <div className="absolute inset-0 z-10 flex items-end md:items-center">
          <div className="mx-auto max-w-6xl px-4 pb-8 md:pb-0">
            <div className="max-w-xl bg-black/40 text-white rounded p-4 md:p-6">
              <h1 className="text-2xl md:text-4xl font-semibold text-balance">{slides[index].headline}</h1>
              <p className="mt-2 md:mt-3 text-sm md:text-base opacity-90">{slides[index].sub}</p>
              <div className="mt-4">
                <Link
                  href="/jobs"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[var(--color-accent)] text-[var(--color-ink)] font-medium hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                >
                  Explore Jobs
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 w-2 rounded-full ${i === index ? "bg-[var(--color-accent)]" : "bg-white/60"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
