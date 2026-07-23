import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Richard Lee",
  description:
    "Richard Lee — PhD student at MIT EECS working on acoustic sensing, computational manufacturing, and audio machine learning.",
  openGraph: {
    title: "Richard Lee",
    description:
      "PhD student at MIT EECS working on acoustic sensing, computational manufacturing, and audio machine learning.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`bg-background ${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">{children}</body>
    </html>
  )
}
