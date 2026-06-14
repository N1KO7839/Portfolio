"use client"

import { useTheme } from "next-themes"
import DotGrid from "@/components/DotGrid"
import Overlay from "@/components/Overlay"

export default function Page() {
  const { theme } = useTheme()

  return (
    <>
      <div className="fixed inset-0 z-0">
        <DotGrid
          dotSize={3}
          gap={40}
          baseColor={theme === "dark" ? "#2F293A" : "#E8E4EC"}
          activeColor="#5227FF"
          proximity={80}
          shockRadius={0}
          shockStrength={0}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <div className="pointer-events-none fixed inset-0 z-10 p-6">
        <div className="pointer-events-auto">
          <Overlay />
        </div>
      </div>
      <main className="relative z-5 min-h-screen" />
    </>
  )
}
