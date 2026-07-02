"use client"

import { useEffect } from "react"

export default function SmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")
      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href?.startsWith("#")) return

      const id = href.slice(1)
      const el = document.getElementById(id)
      if (!el) return

      e.preventDefault()

      el.scrollIntoView({ behavior: "smooth", block: "start" })

      history.pushState(null, "", href)
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return null
}
