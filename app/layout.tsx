import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"
import { cn } from "@/lib/utils"

const SITE_URL = "https://nkarla.dev"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nikodem Karla - Fullstack & Frontend Developer | Portfolio",
    template: "%s | Nikodem Karla",
  },
  description:
    "Nikodem Karla - fullstack and frontend developer from Bielsko-Biala, Poland. I build modern web apps with Next.js, React, TypeScript, FastAPI, PostgreSQL and Docker. 1st place DigiEduHack winner.",
  keywords: [
    "Nikodem Karla",
    "fullstack developer",
    "frontend developer",
    "portfolio",
    "Next.js developer",
    "React developer",
    "FastAPI",
    "PostgreSQL",
    "web developer Poland",
    "Bielsko-Biala developer",
    "DigiEduHack winner",
    "young developer",
    "TypeScript",
    "Docker",
    "Python developer",
  ],
  authors: [{ name: "Nikodem Karla" }],
  creator: "Nikodem Karla",
  publisher: "Nikodem Karla",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Nikodem Karla - Portfolio",
    title: "Nikodem Karla - Fullstack & Frontend Developer",
    description:
      "Nikodem Karla - fullstack and frontend developer from Bielsko-Biala, Poland. Building modern web apps with Next.js, React, TypeScript, FastAPI, PostgreSQL and Docker.",
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: "Nikodem Karla - Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikodem Karla - Fullstack & Frontend Developer",
    description:
      "Nikodem Karla - fullstack and frontend developer from Bielsko-Biala, Poland. Building modern web apps with Next.js, React, TypeScript, FastAPI, PostgreSQL and Docker.",
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  other: {
    "theme-color": "#7c3aed",
  },
}

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster
          position="bottom-center"
          theme="dark"
          style={
            {
              "--normal-bg": "var(--popover)",
              "--normal-text": "var(--popover-foreground)",
              "--normal-border": "var(--border)",
              "--success-bg": "var(--popover)",
              "--success-text": "#4ade80",
              "--success-border": "rgba(74, 222, 128, 0.25)",
              "--error-bg": "var(--popover)",
              "--error-text": "#f87171",
              "--error-border": "rgba(248, 113, 113, 0.25)",
            } as React.CSSProperties
          }
        />
      </body>
    </html>
  )
}
