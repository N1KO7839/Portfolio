import DecryptedText from "./animate-ui/primitives/texts/DecryptedText"
import { MorphingText } from "./animate-ui/primitives/texts/morphing"
import { LOGOS, TEXTS } from "@/app/constants"
import BlurText from "./animate-ui/primitives/texts/blur"
import LogoLoop from "./ui/LogoLoop"

const MainText = () => {

  return (
    <div className="mx-auto mt-20 flex w-xs 2xs:w-2xs xs:w-xs sm:w-lg md:w-full flex-col gap-6 px-4 text-center sm:mt-30 sm:text-start md:mt-40 md:max-w-xl md:translate-x-16 lg:mt-60 lg:max-w-2xl lg:translate-x-0 xl:max-w-3xl">
      <DecryptedText
        text="NIKODEM KARLA"
        speed={75}
        sequential
        maxIterations={30}
        className="revealed text-xl font-medium tracking-widest sm:text-3xl md:text-4xl lg:text-5xl"
        parentClassName="all-letters"
        encryptedClassName="encrypted text-xl font-medium tracking-wider sm:text-3xl md:text-4xl lg:text-5xl"
        animateOn="view"
      />
      <MorphingText
        className={`text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl dark:text-violet-300/95 text-violet-600/95`}
        text={TEXTS}
        loop
      />
      <BlurText
        className={`text-sm sm:text-base md:text-lg lg:text-xl dark:text-white/85 text-black/85`}
        text="Technical high school student building full-stack applications with Next.js, FastAPI, and PostgreSQL. Always learning and turning ideas into practical projects."
      />
      <div className="mx-auto mt-6 w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl">
        <LogoLoop
          logos={LOGOS}
          speed={90}
          hoverSpeed={20}
          logoHeight={42}
          width="100%"
          gap={40}
          fadeOut
          scaleOnHover
        />
      </div>
    </div>
  )
}

export default MainText
