"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu"
import Image from "next/image"
import { CV_LINK, TEXTS } from "@/app/constants"
import { useTheme } from "next-themes"

const Overlay = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true))
  }, [])

  const isDark = mounted ? theme === "dark" : true

  return (
    <div className="flex flex-col">
      <div className="flex items-start justify-between px-4 sm:px-6 md:px-10">
        <nav className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="z-50 flex flex-col gap-1.5 p-2 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${isDark ? "bg-white/50" : "bg-black/50"} ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${isDark ? "bg-white/50" : "bg-black/50"} ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${isDark ? "bg-white/50" : "bg-black/50"} ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>

          {menuOpen && (
            <div
              className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 ${isDark ? "bg-black/90" : "bg-white/90"} md:hidden`}
            >
              <button
                onClick={() => setMenuOpen(false)}
                className={`absolute top-6 right-6 text-3xl transition-colors hover:text-violet-500 ${isDark ? "text-white/50" : "text-black/50"}`}
                aria-label="Close menu"
              >
                &times;
              </button>
              <Image
                className={!isDark ? "invert" : ""}
                width={130}
                height={130}
                src={"/logo.svg"}
                alt="logo"
                loading="eager"
              />
              <Link
                href="#experience"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold transition-colors hover:text-violet-500 sm:text-xl ${isDark ? "text-white/50" : "text-black/50"}`}
              >
                EXPERIENCE
              </Link>
              <Link
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold transition-colors hover:text-violet-500 sm:text-xl ${isDark ? "text-white/50" : "text-black/50"}`}
              >
                PROJECTS
              </Link>
              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold transition-colors hover:text-violet-500 sm:text-xl ${isDark ? "text-white/50" : "text-black/50"}`}
              >
                CONTACT
              </Link>
              <Link
                href={CV_LINK}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-2 text-2xl font-semibold transition-colors hover:text-violet-500 sm:text-xl ${isDark ? "text-white/50" : "text-black/50"}`}
              >
                <Image
                  className={!isDark ? "invert" : ""}
                  src={"/download.svg"}
                  alt="Download icon"
                  width={20}
                  height={20}
                />
                Download CV
              </Link>
              <button
                onClick={() => mounted && setTheme(theme === "light" ? "dark" : "light")}
                className={`mt-4 transition-all duration-200 hover:scale-110 hover:rotate-12`}
              >
                <Image
                  className={!isDark ? "invert" : ""}
                  width={26}
                  height={26}
                  src={theme === "light" ? "/darkTheme.svg" : "/lightTheme.svg"}
                  alt="Toggle theme"
                />
              </button>
              <div className="flex items-center gap-5 mt-4">
                <Link target="_blank" href="https://www.linkedin.com/in/nikodem-karla-b9b55a2a8/">
                  <Image className={!isDark ? "invert" : ""} src="/socials_icons/linkedin.svg" alt="LinkedIn" width={25} height={25} />
                </Link>
                <Link target="_blank" href="https://www.instagram.com/niko_karlaa/">
                  <Image className={!isDark ? "invert" : ""} src="/socials_icons/instagram.svg" alt="Instagram" width={25} height={25} />
                </Link>
                <Link target="_blank" href="https://github.com/N1KO7839">
                  <Image className={!isDark ? "invert" : ""} src="/socials_icons/github.svg" alt="GitHub" width={25} height={25} />
                </Link>
              </div>
            </div>
          )}

          <NavigationMenu className="absolute p-2 -mx-10 hidden md:block">
            <NavigationMenuList className="flex-col items-center justify-center gap-10">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className="border-0 p-0 hover:cursor-pointer hover:bg-transparent focus:bg-transparent focus-visible:ring-0 focus-visible:outline-none data-[active=true]:bg-transparent"
                >
                  <Image
                    className={!isDark ? "invert" : ""}
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
                  className={`rotate-270 rounded-none text-lg font-semibold transition-colors duration-300 ease-in-out hover:cursor-pointer hover:bg-transparent hover:text-violet-500 focus:bg-transparent focus-visible:ring-0 focus-visible:outline-none data-[active=true]:bg-transparent ${isDark ? "text-white/50" : "text-black/50"}`}
                >
                  EXPERIENCE
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#projects"
                  className={`mt-15 mb-14 rotate-270 rounded-none text-lg font-semibold transition-colors duration-300 ease-in-out hover:cursor-pointer hover:bg-transparent hover:text-violet-500 focus:bg-transparent focus-visible:ring-0 focus-visible:outline-none data-[active=true]:bg-transparent ${isDark ? "text-white/50" : "text-black/50"}`}
                >
                  PROJECTS
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#contact"
                  className={`rotate-270 rounded-none text-lg font-semibold transition-colors duration-300 ease-in-out hover:cursor-pointer hover:bg-transparent hover:text-violet-500 focus:bg-transparent focus-visible:ring-0 focus-visible:outline-none data-[active=true]:bg-transparent ${isDark ? "text-white/50" : "text-black/50"}`}
                >
                  CONTACT
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <Link
          className={`absolute right-10 hidden items-center justify-center gap-2 pt-10 text-sm font-semibold whitespace-nowrap transition-colors duration-300 ease-in-out hover:cursor-pointer hover:bg-transparent hover:text-violet-500 focus:bg-transparent focus-visible:ring-0 focus-visible:outline-none data-[active=true]:bg-transparent md:flex md:pt-16 lg:text-base xl:text-lg ${isDark ? "text-white/50" : "text-black/50"}`}
          href={CV_LINK}
        >
          <Image
            className={!isDark ? "invert" : ""}
            src={"/download.svg"}
            alt="Download icon"
            width={20}
            height={20}
          />
          Download CV
        </Link>
      </div>

      <div className="flex justify-between px-15">
        <button
          className="hidden cursor-pointer md:block"
          onClick={() =>
            mounted && (theme == "light" ? setTheme("dark") : setTheme("light"))
          }
        >
          {!mounted || theme == "light" ? (
            <Image
              className="absolute bottom-15 transition-all duration-200 hover:scale-110 hover:rotate-12"
              width={26}
              height={26}
              src={"/darkTheme.svg"}
              alt="logo"
              loading="eager"
            />
          ) : (
            <Image
              className="absolute bottom-15 transition-all duration-200 hover:scale-110 hover:rotate-12"
              width={26}
              height={26}
              src={"/lightTheme.svg"}
              alt="logo"
              loading="eager"
            />
          )}
        </button>
        <div className="absolute right-20 bottom-15 hidden flex-col items-end gap-5 md:flex">
          <Link
            target="_blank"
            className="group flex items-center"
            href={"https://www.linkedin.com/in/nikodem-karla-b9b55a2a8/"}
          >
            <span className="translate-x-2 font-medium opacity-0 transition-all duration-300 group-hover:-translate-x-2 group-hover:opacity-100">
              Linkedin
            </span>
            <Image
              className={!isDark ? "invert" : ""}
              src={"/socials_icons/linkedin.svg"}
              alt="Linkedin link"
              width={25}
              height={25}
            />
          </Link>
          <Link
            target="_blank"
            className="group flex items-center"
            href={"https://www.instagram.com/niko_karlaa/"}
          >
            <span className="translate-x-2 font-medium opacity-0 transition-all duration-300 group-hover:-translate-x-2 group-hover:opacity-100">
              Instagram
            </span>

            <Image
              className={!isDark ? "invert" : ""}
              src={"/socials_icons/instagram.svg"}
              alt="Instagram link"
              width={25}
              height={25}
            />
          </Link>
          <Link
            target="_blank"
            className="group flex items-center"
            href={"https://github.com/N1KO7839"}
          >
            <span className="translate-x-2 font-medium opacity-0 transition-all duration-300 group-hover:-translate-x-2 group-hover:opacity-100">
              GitHub
            </span>
            <Image
              className={!isDark ? "invert" : ""}
              src={"/socials_icons/github.svg"}
              alt="Github link"
              width={25}
              height={25}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Overlay
