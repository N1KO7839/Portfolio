import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu"
import Image from "next/image"

const Navigation = () => {
  return (
    <NavigationMenu className="fixed -mx-10 hidden p-2 xl:block">
      <NavigationMenuList className="flex-col items-center justify-center gap-10">
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/"
            className="border-0 p-0 hover:cursor-pointer hover:bg-transparent focus:bg-transparent focus-visible:ring-0 focus-visible:outline-none data-[active=true]:bg-transparent"
          >
            <Image
              className="invert dark:invert-0"
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
            className={`rotate-270 rounded-none text-lg font-semibold text-black/50 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:bg-transparent hover:text-violet-500 focus:bg-transparent focus-visible:ring-0 focus-visible:outline-none data-[active=true]:bg-transparent dark:text-white/50 dark:hover:text-violet-500`}
          >
            EXPERIENCE
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#projects"
            className={`mt-15 mb-14 rotate-270 rounded-none text-lg font-semibold text-black/50 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:bg-transparent hover:text-violet-500 focus:bg-transparent focus-visible:ring-0 focus-visible:outline-none data-[active=true]:bg-transparent dark:text-white/50 dark:hover:text-violet-500`}
          >
            PROJECTS
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#contact"
            className={`rotate-270 rounded-none text-lg font-semibold text-black/50 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:bg-transparent hover:text-violet-500 focus:bg-transparent focus-visible:ring-0 focus-visible:outline-none data-[active=true]:bg-transparent dark:text-white/50 dark:hover:text-violet-500`}
          >
            CONTACT
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navigation
