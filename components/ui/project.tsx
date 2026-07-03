/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image"
import Link from "next/link"
import { getTechColor } from "@/app/constants"

interface projectProps {
  index: number
  logo: string
  title: string
  description: string
  tech_stack: string[]
  link: string
  created: boolean
  imageClassName?: string
}

const Project = ({
  index,
  logo,
  title,
  description,
  tech_stack,
  link,
  created,
  imageClassName,
}: projectProps) => {
  const alt = logo
    .slice(logo.lastIndexOf("/") + 1, logo.lastIndexOf("."))
    .replace("_", " ")
  return (
    <div className="flex w-full gap-10 pb-60">
      <div className="flex min-w-0 flex-1 flex-col gap-6">
        <h3 className="text-2xl font-semibold text-violet-600/95 dark:text-violet-300/95">
          // {index}
        </h3>
        <div className="flex items-center gap-4">
          <Image
            src={logo}
            alt={alt}
            width={80}
            height={80}
            className={`w-auto ${imageClassName ?? ""}`}
          />
          <h2 className="text-4xl font-bold">{title}</h2>
        </div>
        <p className="max-w-xl text-2xl leading-10">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech_stack.map((tech, index) => (
            <span
              className="rounded-full border px-3 py-1 text-sm font-medium transition-colors duration-200"
              style={{
                borderColor: getTechColor(tech),
                color: getTechColor(tech),
                backgroundColor: getTechColor(tech) + "15",
              }}
              key={index}
            >
              {tech}
            </span>
          ))}
        </div>
        <Link
          className="mt-2 w-1/3 rounded-none rounded-br-xl bg-violet-600 px-4 py-3 text-center text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View project
        </Link>
      </div>
      <Image
        className="rounded-xl"
        src={"/contactPhoto.jpeg"}
        alt="Project showcase"
        width={260}
        height={60}
      />
    </div>
  )
}

export default Project
