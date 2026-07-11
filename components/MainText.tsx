import DecryptedText from "./animate-ui/primitives/texts/DecryptedText"
import { MorphingText } from "./animate-ui/primitives/texts/morphing"
import { LOGOS, TEXTS } from "@/app/constants"
import BlurText from "./animate-ui/primitives/texts/blur"
import LogoLoop from "./ui/LogoLoop"

const MainText = () => {
  return (
    <div className="mx-auto mt-16 flex w-xs flex-col gap-4 text-center 2xs:w-2xs xs:w-xs sm:mt-24 sm:w-lg sm:gap-6 sm:text-start md:mt-32 md:w-full md:max-w-2xl lg:mt-48 lg:max-w-3xl xl:max-w-216">
      <h1 className="contents">
        <DecryptedText
          text="NIKODEM KARLA"
          speed={75}
          sequential
          maxIterations={30}
          className="revealed text-2xl font-medium tracking-widest sm:text-4xl md:text-5xl lg:text-6xl"
          parentClassName="all-letters"
          encryptedClassName="encrypted text-2xl font-medium tracking-wider sm:text-4xl md:text-5xl lg:text-6xl"
          animateOn="view"
        />
        <MorphingText
          className={`text-3xl font-bold tracking-tight whitespace-nowrap text-violet-600/95 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl dark:text-violet-300/95`}
          text={TEXTS}
          loop
        />
      </h1>
      <BlurText
        className={`text-base text-black/85 sm:text-lg md:text-xl lg:text-2xl dark:text-white/85`}
        text="Technical high school student building full-stack applications with Next.js, FastAPI, and PostgreSQL. Always learning and turning ideas into practical projects."
      />
      <div className="mx-auto mt-6 w-full max-w-full sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-4xl">
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
