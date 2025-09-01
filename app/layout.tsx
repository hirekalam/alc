import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import "./globals.css"

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Alcazaar International — Overseas Recruitment, Visa & Emigration Services",
  description:
    "Alcazaar International connects talent with global opportunities and provides trusted visa, emigration, and medical appointment assistance.",
  keywords: [
    "Alcazaar International",
    "Overseas Recruitment",
    "Visa Services",
    "Emigration",
    "Jobs Abroad",
    "Gulf Jobs",
  ],
  openGraph: {
    title: "Alcazaar International",
    description: "Trusted recruitment and immigration support: jobs, visas, emigration, medical appointments.",
    url: "https://alcazaarinternational.com",
    siteName: "Alcazaar International",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${playfair.variable} antialiased`}>
      <body className="font-sans bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-background text-foreground border border-border px-3 py-2 rounded"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
