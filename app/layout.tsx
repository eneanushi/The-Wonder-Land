import type React from "react"
import type { Metadata } from "next"
import { Crimson_Text, Nunito } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

const magicalNeverland = localFont({
  src: "../public/fonts/Magical Neverland.ttf",
  variable: "--font-magical-neverland",
})

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
})

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-nunito",
})

export const metadata: Metadata = {
  title: "The Land of Wonders - Where Your Child Becomes the Hero",
  description: "Create personalized storybooks filled with magic, adventure, and your child's imagination.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${magicalNeverland.variable} ${crimsonText.variable} ${nunito.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
