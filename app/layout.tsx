import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "LLM Store",
  description: "Discover and access the best LLM tools and research",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  )
}
