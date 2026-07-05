/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image"
import Link from "next/link"
import { getTechColor } from "@/app/constants"
import DecryptedText from "../animate-ui/primitives/texts/DecryptedText"

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
    <div className="flex w-full flex-col gap-6 pb-20 sm:gap-10 sm:pb-40 lg:flex-row lg:items-end lg:pb-60">
      <div className="flex min-w-0 flex-1 flex-col gap-4 sm:gap-6">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-semibold text-violet-600/95 sm:text-2xl dark:text-violet-300/95">
            <span className="font-mono text-violet-400/60 dark:text-violet-500/60">//</span> {String(index).padStart(2, "0")}
          </h3>
          {!created && (
            <span className="mt-1 rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-600/80 ring-1 ring-violet-500/20 dark:text-violet-300/80 dark:ring-violet-400/20">
              Contributed
            </span>
          )}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Image
            src={logo}
            alt={alt}
            width={80}
            height={80}
            className={`shrink-0 object-contain ${imageClassName ?? ""}`}
          />
          <DecryptedText
            text={title}
            speed={65}
            maxIterations={120}
            sequential
            animateOn="view"
            className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl"
            parentClassName="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl"
            encryptedClassName="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl"
          />
        </div>
        <p className="text-base leading-6 sm:text-lg sm:leading-7 md:text-xl md:leading-8">{description}</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {tech_stack.map((tech, index) => (
            <span
              className="rounded-full border px-2 py-0.5 text-xs font-medium transition-colors duration-200 sm:px-3 sm:py-1 sm:text-sm"
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
          className="mt-2 w-full rounded-none rounded-br-xl bg-violet-600 px-4 py-3 text-center text-white hover:bg-violet-700 sm:w-1/2 md:w-1/3 dark:bg-violet-500 dark:hover:bg-violet-600"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View project
        </Link>
      </div>
      <div className="hidden w-full shrink-0 lg:block lg:w-64 xl:w-120">
        <Image
          className="ml-10 h-auto w-full rounded-xl object-cover"
          src={`/project_showcases/${title}_showcase.png`}
          alt="Project showcase"
          width={480}
          height={400}
        />
      </div>
    </div>
  )
}

export default Project
