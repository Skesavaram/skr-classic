import type { Metadata } from "next"
import {
  Funnel_Sans,
  Noto_Sans_Tamil,
  Plus_Jakarta_Sans,
} from "next/font/google"

import { cn } from "@/lib/utils"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
})

const funnelSans = Funnel_Sans({
  subsets: ["latin"],
  variable: "--font-funnel-sans",
  display: "swap",
})

const notoSansTamil = Noto_Sans_Tamil({
  subsets: ["tamil", "latin"],
  variable: "--font-tamil",
  display: "swap",
})

export const metadata: Metadata = {
  title:
    "SKR Classic | Veld Grape Chutney (பிரண்டை தொக்கு) · Authentic Chidambaram Homemade Pickles",
  description:
    "Handcrafted in Chidambaram with tender Veld Grape stems (பிரண்டை), pure cold-pressed gingelly oil, and heirloom spices. Zero artificial preservatives. Good for digestion & rich in fiber.",
  keywords: [
    "SKR Classic",
    "Veld Grape Chutney",
    "Pirandai Thokku",
    "பிரண்டை தொக்கு",
    "Chidambaram Pickle",
    "Homemade South Indian Thokku",
    "Mango Pickle",
    "Garlic Pickle",
    "Tomato Thokku",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "scroll-smooth antialiased",
        plusJakartaSans.variable,
        funnelSans.variable,
        notoSansTamil.variable
      )}
    >
      <body className="min-h-screen bg-[#fbf6ee] font-sans text-[#1c100b]">
        {children}
      </body>
    </html>
  )
}
