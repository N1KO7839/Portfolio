"use client"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import DotGrid from "@/components/ui/DotGrid"
import type { DotGridProps } from "@/components/ui/DotGrid"

export default function ThemedDotGrid(props: DotGridProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), [])
  const baseColor = mounted
    ? theme === "dark"
      ? "#2F293A"
      : "#C8C2CF"
    : "#C8C2CF"

  return <DotGrid {...props} baseColor={baseColor} />
}
