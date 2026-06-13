"use client"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu"
import DecryptedText from "./DecryptedText"
import { MorphingText } from "@/components/animate-ui/primitives/texts/morphing"
import BlurText from "./animate-ui/primitives/texts/blur"
import Image from "next/image"
import LogoLoop, { type LogoItem } from "./LogoLoop"
import { CV_LINK, texts } from "@/app/constants"

const logos: LogoItem[] = [
  { src: "/tech_stack_icons/Next.js.svg", alt: "Next.js" },
  { src: "/tech_stack_icons/react.svg", alt: "React" },
  { src: "/tech_stack_icons/javascript.svg", alt: "JavaScript" },
  { src: "/tech_stack_icons/python.svg", alt: "Python" },
  { src: "/tech_stack_icons/fastapi.svg", alt: "FastAPI" },
  { src: "/tech_stack_icons/postgresql.svg", alt: "PostgreSQL" },
  { src: "/tech_stack_icons/tailwindCSS.svg", alt: "Tailwind CSS" },
  { src: "/tech_stack_icons/bun.svg", alt: "Bun" },
  { src: "/tech_stack_icons/git.svg", alt: "Git" },
  { src: "/tech_stack_icons/linux.svg", alt: "Linux" },
]

const Overlay = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-start justify-between px-10">
        <nav className="">
          <NavigationMenu className="-mx-10">
            <NavigationMenuList className="flex-col items-center justify-center gap-10">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className="border-0 p-0 hover:cursor-pointer hover:bg-transparent focus:bg-transparent focus-visible:ring-0 focus-visible:outline-none data-[active=true]:bg-transparent"
                >
                  <Image
                    width={150}
                    height={150}
                    src={"/logo.svg"}
                    alt="logo"
                    loading="eager"
                  />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#experience"
                  className="rotate-270 rounded-none text-lg font-semibold text-white/50 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:bg-transparent hover:text-violet-500 focus:bg-transparent focus-visible:ring-0 focus-visible:outline-none data-[active=true]:bg-transparent"
                >
                  EXPERIENCE
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#projects"
                  className="mt-15 mb-14 rotate-270 rounded-none text-lg font-semibold text-white/50 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:bg-transparent hover:text-violet-500 focus:bg-transparent focus-visible:ring-0 focus-visible:outline-none data-[active=true]:bg-transparent"
                >
                  PROJECTS
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#projects"
                  className="rotate-270 rounded-none text-lg font-semibold text-white/50 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:bg-transparent hover:text-violet-500 focus:bg-transparent focus-visible:ring-0 focus-visible:outline-none data-[active=true]:bg-transparent"
                >
                  CONTACT
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className="mt-60 ml-40 flex flex-col gap-8 self-center lg:max-w-2xl xl:max-w-3xl">
          <DecryptedText
            text="NIKODEM KARLA"
            speed={75}
            sequential
            maxIterations={30}
            className="revealed text-2xl font-medium tracking-widest sm:text-3xl md:text-4xl lg:text-5xl"
            parentClassName="all-letters"
            encryptedClassName="encrypted text-2xl font-medium tracking-wider sm:text-3xl md:text-4xl lg:text-5xl"
            animateOn="view"
          />
          <MorphingText
            className="text-3xl font-bold tracking-tight text-violet-300/95 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            text={texts}
            loop
          />
          <BlurText
            className="text-sm text-white/85 sm:text-base md:text-lg lg:text-xl"
            text="Technical high school student building full-stack applications with Next.js, FastAPI, and PostgreSQL. Always learning and turning ideas into practical projects."
          />
        </div>
        <Link
          className="flex items-center justify-center gap-2 pt-16 text-lg font-semibold text-white/50 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:bg-transparent hover:text-violet-500 focus:bg-transparent focus-visible:ring-0 focus-visible:outline-none data-[active=true]:bg-transparent"
          href={CV_LINK}
        >
          <Image
            src={"/download.svg"}
            alt="Download icon"
            width={20}
            height={20}
          />
          Download CV
        </Link>
      </div>
      <LogoLoop
        logos={logos}
        speed={90}
        logoHeight={40}
        width={700}
        gap={40}
        fadeOut
        className="mx-auto mt-6"
      />
    </div>
  )
}

export default Overlay
