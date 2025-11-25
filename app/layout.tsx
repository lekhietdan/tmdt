import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { RootLayoutClient } from "./layout-client"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chả Cá Cây Sang - Chả Cá Chất Lượng Cao",
  description: "Chả cá truyền thống Cây Sang - Chả cá chiên, hấp, sống tươi ngon từ nguyên liệu cao cấp",
  keywords: "chả cá, cây sang, chả cá chiên, chả cá hấp, chả cá sống",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/lozgo.png",
        type: "image/png",
      },
    ],
    apple: "/lozgo.png",
  },
  openGraph: {
    title: "Chả Cá Cây Sang",
    description: "Chả cá truyền thống chất lượng cao",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <RootLayoutClient>{children}</RootLayoutClient>
}

