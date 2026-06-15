"use client"

import { useTheme } from "next-themes"
import DotGrid from "@/components/ui/DotGrid"
import Overlay from "@/components/Overlay"
import MainText from "@/components/MainText"
import { useState, useEffect } from "react"

export default function Page() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), [])
  const isDark = mounted ? theme === "dark" : false

  return (
    <>
      <div className="fixed inset-0 z-0">
        <DotGrid
          dotSize={3}
          gap={40}
          baseColor={isDark ? "#2F293A" : "#E8E4EC"}
          activeColor="#5227FF"
          proximity={80}
          shockRadius={0}
          shockStrength={0}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <div className="pointer-events-none fixed inset-0 z-10 p-6">
        <div className="pointer-events-auto overflow-y-auto h-full">
          <Overlay />
          <MainText/>
        </div>
      </div>
      <main className="relative z-5 min-h-screen" />
    </>
  )
}
