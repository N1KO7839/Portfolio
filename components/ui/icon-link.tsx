import Image from "next/image"
import Link from "next/link"

interface IconLinkProps {
  text: string
  link: string
  icon: string
  alt: string
  size?: number
  classname?: string
}

const IconLink = ({ text, link, icon, alt, size, classname }: IconLinkProps) => {
    const iconSize = size ? size : 25
    const textClassName = classname ? classname : "hidden" 
  return (
    <Link
      target="_blank"
      className="group flex items-center"
      href={link}
    >
      <span className={textClassName}>
        {text}
      </span>
      <Image
        className="invert dark:invert-0"
        src={icon}
        alt={alt}
        width={iconSize}
        height={iconSize}
      />
    </Link>
  )
}

export default IconLink
