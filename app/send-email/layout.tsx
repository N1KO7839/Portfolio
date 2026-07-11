import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Nikodem Karla",
  description:
    "Send a message to Nikodem Karla, a fullstack developer from Bielsko-Biala, Poland. Available for freelance work and collaborations.",
  openGraph: {
    title: "Contact Nikodem Karla - Fullstack Developer",
    description:
      "Send a message to Nikodem Karla, a fullstack developer from Bielsko-Biala, Poland.",
    url: "https://nkarla.dev/send-email",
  },
}

export default function SendEmailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
