"use client"
import { useState } from "react"
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
import { LOGOS } from "@/app/constants"
import LogoLoop from "./LogoLoop"
import { CV_LINK, TEXTS } from "@/app/constants"



const Overlay = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex flex-col">
      <div className="flex items-start justify-between px-4 sm:px-6 md:px-10">
        <nav className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="z-50 flex flex-col gap-1.5 p-2 md:hidden"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-white/50 transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white/50 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white/50 transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>

          {menuOpen && (
            <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-black/90 md:hidden">
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute right-6 top-6 text-3xl text-white/50 transition-colors hover:text-violet-500"
                aria-label="Close menu"
              >
                &times;
              </button>
              <Image
                width={100}
                height={100}
                src={"/logo.svg"}
                alt="logo"
                loading="eager"
              />
              <Link
                href="#experience"
                onClick={() => setMenuOpen(false)}
                className="text-xl font-semibold text-white/50 transition-colors hover:text-violet-500"
              >
                EXPERIENCE
              </Link>
              <Link
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="text-xl font-semibold text-white/50 transition-colors hover:text-violet-500"
              >
                PROJECTS
              </Link>
              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-xl font-semibold text-white/50 transition-colors hover:text-violet-500"
              >
                CONTACT
              </Link>
              <Link
                href={CV_LINK}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-xl font-semibold text-white/50 transition-colors hover:text-violet-500"
              >
                <Image src={"/download.svg"} alt="Download icon" width={20} height={20} />
                Download CV
              </Link>
            </div>
          )}

          <NavigationMenu className="-mx-10 hidden md:block">
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
                  href="#contact"
                  className="rotate-270 rounded-none text-lg font-semibold text-white/50 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:bg-transparent hover:text-violet-500 focus:bg-transparent focus-visible:ring-0 focus-visible:outline-none data-[active=true]:bg-transparent"
                >
                  CONTACT
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className="mt-20 ml-0 flex flex-col gap-6 self-center sm:mt-30 sm:ml-10 md:mt-40 md:ml-20 lg:mt-60 lg:ml-40 sm:min-w-114 lg:max-w-2xl xl:max-w-3xl">
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
            text={TEXTS}
            loop
          />
          <BlurText
            className="text-sm text-white/85 sm:text-base md:text-lg lg:text-xl"
            text="Technical high school student building full-stack applications with Next.js, FastAPI, and PostgreSQL. Always learning and turning ideas into practical projects."
          />
        </div>
        <Link
          className="hidden items-center justify-center gap-2 whitespace-nowrap pt-10 md:pt-16 text-sm lg:text-base xl:text-lg font-semibold text-white/50 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:bg-transparent hover:text-violet-500 focus:bg-transparent focus-visible:ring-0 focus-visible:outline-none data-[active=true]:bg-transparent md:flex"
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
        logos={LOGOS}
        speed={90}
        hoverSpeed={20}
        logoHeight={42}
        width={700}
        gap={40}
        fadeOut
        scaleOnHover
        className="mx-auto mt-6"
      />
    </div>
  )
}

export default Overlay
