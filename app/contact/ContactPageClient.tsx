"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useState } from "react"

export default function ContactPageClient() {
  const [state, setState] = useState({ name: "", email: "", subject: "", message: "" })

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold text-[#162338]">Contact</h1>
          <p className="mt-2 text-[#191919]/80">We’re here to help. Send a message and we’ll respond promptly.</p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          <section aria-labelledby="contact-details" className="rounded-lg border border-[#E5E7EB] bg-white p-6">
            <h2 id="contact-details" className="text-lg font-semibold text-[#162338]">
              Contact Details
            </h2>
            <address className="not-italic mt-3 text-sm text-[#191919]/80 space-y-1">
              <p>Alcazaar International</p>
              <p>Example Street 123, City, Country</p>
              <p>
                Phone:{" "}
                <a className="hover:underline" href="tel:+00000000000">
                  +00 000 000 0000
                </a>
              </p>
              <p>
                Email:{" "}
                <a className="hover:underline" href="mailto:info@alcazaarinternational.com">
                  info@alcazaarinternational.com
                </a>
              </p>
            </address>
            <div className="mt-4">
              <a
                href="https://wa.me/00000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-[#162338] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
              >
                WhatsApp Us
              </a>
            </div>
          </section>

          <form
            aria-labelledby="contact-form"
            className="rounded-lg border border-[#E5E7EB] bg-white p-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              alert("Message sent! We’ll get back to you soon.")
            }}
          >
            <h2 id="contact-form" className="text-lg font-semibold text-[#162338]">
              Send a Message
            </h2>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#191919]">
                Full name
              </label>
              <input
                id="name"
                required
                value={state.name}
                onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
                className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm focus:outline-none focus-visible:focus-ring"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#191919]">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={state.email}
                onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
                className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm focus:outline-none focus-visible:focus-ring"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-[#191919]">
                Subject
              </label>
              <input
                id="subject"
                value={state.subject}
                onChange={(e) => setState((s) => ({ ...s, subject: e.target.value }))}
                className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm focus:outline-none focus-visible:focus-ring"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#191919]">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                value={state.message}
                onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
                className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm focus:outline-none focus-visible:focus-ring"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center rounded-md bg-[#F8F30E] px-4 py-2 text-sm font-medium text-[#191919] hover:opacity-90"
            >
              Send
            </button>
          </form>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
