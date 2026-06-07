import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu"
import Image from "next/image"
import { CV_LINK } from "@/app/constants"

const Overlay = () => {
  return (
    <div className="px-10">
      <nav className="flex items-start justify-between">
        <NavigationMenu className="-mx-10">
          <NavigationMenuList className="flex-col items-center justify-center gap-10">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className="border-0 p-0 hover:cursor-pointer hover:bg-transparent focus:bg-transparent focus-visible:ring-0 focus-visible:outline-none data-[active=true]:bg-transparent"
              >
                <Image width={150} height={150} src={"/logo.svg"} alt="logo" />
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
      </nav>
    </div>
  )
}

export default Overlay
