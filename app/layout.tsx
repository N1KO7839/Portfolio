import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Nikodem Karla - Portfolio",
  description: "Fullstack developer portfolio",
  icons: {
    icon: "/logo.svg",
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
