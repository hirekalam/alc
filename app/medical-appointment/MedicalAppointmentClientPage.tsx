"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useState } from "react"

export default function MedicalAppointmentClientPage() {
  const [state, setState] = useState({ name: "", email: "", destination: "", notes: "" })

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-4 py-10">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold text-[#162338]">Medical Appointment</h1>
          <p className="mt-2 text-[#191919]/80">Share your details and we’ll help schedule your medicals.</p>
        </header>

        <form
          aria-label="Medical appointment request"
          className="rounded-lg border border-[#E5E7EB] bg-white p-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault()
            alert("Thanks! We’ll get back to you shortly.")
          }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#191919]">
              Full name
            </label>
            <input
              id="name"
              name="name"
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
              name="email"
              type="email"
              required
              value={state.email}
              onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
              className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm focus:outline-none focus-visible:focus-ring"
            />
          </div>
          <div>
            <label htmlFor="destination" className="block text-sm font-medium text-[#191919]">
              Destination country
            </label>
            <input
              id="destination"
              name="destination"
              required
              value={state.destination}
              onChange={(e) => setState((s) => ({ ...s, destination: e.target.value }))}
              className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm focus:outline-none focus-visible:focus-ring"
            />
          </div>
          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-[#191919]">
              Notes (optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              value={state.notes}
              onChange={(e) => setState((s) => ({ ...s, notes: e.target.value }))}
              className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm focus:outline-none focus-visible:focus-ring"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-[#F8F30E] px-4 py-2 text-sm font-medium text-[#191919] hover:opacity-90"
          >
            Request Appointment
          </button>
        </form>
      </main>
      <SiteFooter />
    </>
  )
}
