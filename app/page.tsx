"use client"
import ThemedDotGrid from "@/components/ThemedDotGrid"
import Overlay from "@/components/Overlay"
import MainText from "@/components/MainText"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import SmoothScroll from "@/components/SmoothScroll"
import Footer from "@/components/Footer"

export default function Page() {
  return (
    <>
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
      <div className="pointer-events-none fixed inset-0 z-10 scrollbar-thumb-mauve-800 scrollbar-track-zinc-300/75 dark:scrollbar-thumb-mauve-400 dark:scrollbar-track-zinc-900">
        <div className="pointer-events-auto h-full overflow-y-auto scroll-smooth!">
          <Overlay />
          <MainText />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}
