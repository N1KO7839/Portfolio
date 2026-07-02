"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { CV_LINK } from "@/app/constants"
import SocialsLinks from "./SocialsLinks"
import ChangeTheme from "./ui/change-theme"
import Navigation from "./Navigation"

const Overlay = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true))
  }, [])

  return (
    <div className="flex flex-col">
      <div className="flex items-start justify-between px-4 sm:px-6 md:px-10">
        <nav className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="fixed top-12 left-8 z-50 flex flex-col gap-1.5 p-2 xl:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-black/50 transition-all duration-300 dark:bg-white/50 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-black/50 transition-all duration-300 dark:bg-white/50 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-black/50 transition-all duration-300 dark:bg-white/50 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>

          {menuOpen && (
            <div
              className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-white/90 xl:hidden dark:bg-black/90`}
            >
              
              <Image
                className="invert dark:invert-0"
                width={130}
                height={130}
                src={"/logo.svg"}
                alt="logo"
                loading="eager"
              />
              <Link
                href="#experience"
                
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-black/50 transition-colors hover:text-violet-500 sm:text-xl dark:text-white/50`}
              >
                EXPERIENCE
              </Link>
              <Link
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-black/50 transition-colors hover:text-violet-500 sm:text-xl dark:text-white/50`}
              >
                PROJECTS
              </Link>
              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-black/50 transition-colors hover:text-violet-500 sm:text-xl dark:text-white/50`}
              >
                CONTACT
              </Link>
              <Link
                href={CV_LINK}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-2 text-2xl font-semibold text-black/50 transition-colors hover:text-violet-500 sm:text-xl dark:text-white/50`}
              >
                <Image
                  className="invert dark:invert-0"
                  src={"/download.svg"}
                  alt="Download icon"
                  width={20}
                  height={20}
                />
                Download CV
              </Link>
              <ChangeTheme
                mounted={mounted}
                buttonClassName="mt-4 transition-all duration-200 hover:scale-110 hover:rotate-12"
                imageClassName=""
              />
              <SocialsLinks containerClassName="mt-4 flex items-center gap-5" />
            </div>
          )}
          <Navigation />
        </nav>
        <Link
          className="group absolute right-20 hidden items-center xl:flex pt-16 hover:cursor-pointer"
          href={CV_LINK}
        >
          <span className="translate-x-2 font-medium opacity-0 transition-all duration-300 group-hover:-translate-x-2 group-hover:opacity-100 text-sm lg:text-base xl:text-lg text-black/50 dark:text-white/50">
            Download CV
          </span>
          <Image
            className="invert dark:invert-0"
            src={"/download.svg"}
            alt="Download icon"
            width={25}
            height={25}
          />
        </Link>
      </div>

      <div className="flex justify-between px-15">
        <ChangeTheme
          mounted={mounted}
          buttonClassName="hidden cursor-pointer xl:block"
          imageClassName="absolute bottom-15 transition-all duration-200 hover:scale-110 hover:rotate-12"
        />
        <SocialsLinks
          containerClassName="absolute right-20 bottom-15 hidden flex-col items-end gap-5 xl:flex"
          linkClassName="translate-x-2 font-medium opacity-0 transition-all duration-300 group-hover:-translate-x-2 group-hover:opacity-100"
        />
      </div>
    </div>
  )
}

export default Overlay
