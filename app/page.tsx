import ThemedDotGrid from "@/components/ThemedDotGrid"
import Overlay from "@/components/Overlay"
import MainText from "@/components/MainText"
import Experience from "@/components/Experience"

export default function Page() {
  return (
    <>
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
      <div className="pointer-events-none fixed inset-0 z-10 p-6">
        <div className="pointer-events-auto overflow-y-auto h-full">
          <Overlay />
          <MainText/>
          <Experience/>
        </div>
      </div>
      <main className="relative z-5 min-h-screen" />
    </>
  )
}
