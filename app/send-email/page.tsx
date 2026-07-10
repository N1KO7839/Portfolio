"use client"

import { useState } from "react"
import Overlay from "@/components/Overlay"
import SmoothScroll from "@/components/SmoothScroll"
import ThemedDotGrid from "@/components/ThemedDotGrid"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const Page = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Failed to send message.")
      }

      toast.success("Message sent successfully!")
      setName("")
      setEmail("")
      setMessage("")
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section>
      <SmoothScroll />
      <div className="fixed inset-0 z-0">
        <ThemedDotGrid
          dotSize={3}
          gap={40}
          activeColor="#5227FF"
          proximity={80}
          shockRadius={0}
          shockStrength={0}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <div className="relative z-10 min-h-screen">
        <Overlay />
        <div className="mx-auto mt-32 w-full px-6 pb-20 sm:mt-40 sm:px-8 md:mt-48 md:max-w-lg md:py-20 lg:mt-40 lg:max-w-xl lg:px-12 xl:max-w-2xl">
          <h1 className="mb-2 text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
            Send me a message
          </h1>
          <p className="mb-10 text-sm text-black/50 sm:text-base dark:text-white/50">
            I&apos;ll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-black/75 dark:text-white/75"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="rounded-xl border border-black/10 bg-transparent px-4 py-3 text-sm transition-colors outline-none placeholder:text-black/30 focus:border-violet-500 sm:text-base dark:border-white/10 dark:placeholder:text-white/30 dark:focus:border-violet-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-black/75 dark:text-white/75"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="rounded-xl border border-black/10 bg-transparent px-4 py-3 text-sm transition-colors outline-none placeholder:text-black/30 focus:border-violet-500 sm:text-base dark:border-white/10 dark:placeholder:text-white/30 dark:focus:border-violet-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-black/75 dark:text-white/75"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message..."
                className="resize-none rounded-xl border border-black/10 bg-transparent px-4 py-3 text-sm transition-colors outline-none placeholder:text-black/30 focus:border-violet-500 sm:text-base dark:border-white/10 dark:placeholder:text-white/30 dark:focus:border-violet-400"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="mt-2 w-full rounded-xl bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600"
              size="lg"
            >
              {loading ? "Sending..." : "Send message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Page
