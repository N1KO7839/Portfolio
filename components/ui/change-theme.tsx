"use client"
import Image from "next/image"
import { useTheme } from "next-themes"

interface changeThemeProps {
  mounted: boolean
  buttonClassName: string
  imageClassName: string
}

const ChangeTheme = ({ mounted, buttonClassName, imageClassName }: changeThemeProps) => {
  const { theme, setTheme } = useTheme()
  return (
    <button
      className={buttonClassName}
      onClick={() =>
        mounted && (theme == "light" ? setTheme("dark") : setTheme("light"))
      }
    >
      <Image
        className={imageClassName}
        width={26}
        height={26}
        src={theme === "light" ? "/darkTheme.svg" : "/lightTheme.svg"}
        alt="Toggle theme"
      />
    </button>
  )
}

export default ChangeTheme
